import { Response } from "express";
import {
  GenerateLLMsTextRequest,
  generateLLMsTextRequestSchema,
  RequestWithAuth,
} from "./types";
import { getGenerateLlmsTxtQueue } from "../../services/queue-service";
import * as Sentry from "@sentry/node";
import { saveGeneratedLlmsTxt } from "../../lib/generate-llmstxt/generate-llmstxt-redis";
import { z } from "zod";

export type GenerateLLMsTextResponse = {
  success: boolean;
  id: string;
};

/**
 * Initiates a text generation job based on the provided URL.
 * @param req - The request object containing authentication and generation parameters.
 * @param res - The response object to send the generation job ID.
 * @returns A promise that resolves when the generation job is queued.
 */
export async function generateLLMsTextController(
  req: RequestWithAuth<{}, GenerateLLMsTextResponse, GenerateLLMsTextRequest>,
  res: Response<GenerateLLMsTextResponse>,
) {
  req.body = generateLLMsTextRequestSchema.parse(req.body);

  const generationId = crypto.randomUUID();
  const jobData = {
    request: req.body,
    teamId: req.auth.team_id,
    plan: req.auth.plan,
    subId: req.acuc?.sub_id,
    generationId,
  };

  await saveGeneratedLlmsTxt(generationId, {
    id: generationId,
    team_id: req.auth.team_id,
    plan: req.auth.plan!, // Add non-null assertion since plan is required
    createdAt: Date.now(),
    status: "processing",
    url: req.body.url,
    maxUrls: req.body.maxUrls,
    showFullText: req.body.showFullText,
    generatedText: "",
    fullText: "",
  });

  if (Sentry.isInitialized()) {
    const size = JSON.stringify(jobData).length;
    await Sentry.startSpan(
      {
        name: "Add LLMstxt generation job",
        op: "queue.publish",
        attributes: {
          "messaging.message.id": generationId,
          "messaging.destination.name": getGenerateLlmsTxtQueue().name,
          "messaging.message.body.size": size,
        },
      },
      async (span) => {
        await getGenerateLlmsTxtQueue().add(
          generationId,
          {
            ...jobData,
            sentry: {
              trace: Sentry.spanToTraceHeader(span),
              baggage: Sentry.spanToBaggageHeader(span),
              size,
            },
          },
          { jobId: generationId },
        );
      },
    );
  } else {
    await getGenerateLlmsTxtQueue().add(generationId, jobData, {
      jobId: generationId,
    });
  }

  return res.status(200).json({
    success: true,
    id: generationId,
  });
}
