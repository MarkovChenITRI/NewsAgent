cd firecrawl/apps/api
cp .env.example .env
docker compose up -d
cd ../../..

cd dify/docker
cp .env.example .env
docker compose up -d
cd ../..
