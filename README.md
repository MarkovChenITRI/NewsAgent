# Dify
[Install LM Studio for Ryzen AI](https://lmstudio.ai/ryzenai)
```
git clone --recursive https://github.com/MarkovChenITRI/NewsAgent.git
cd NewsAgent/
bash build.sh
```

Then Run [http://localhost/install](http://localhost/install)
```
# Dify Docker Route
curl -X GET http://172.17.0.1:3002/test     
```

# ScrapeGraphAI

### AMD Radeon GPU/NPU Driver
* Install Anaconda and run `conda init` in terminal
* [Install AMD Drivers for Radeon 890M](https://www.amd.com/en/support/download/drivers.html)
* [Install AMD Drivers for HX375 NPU](https://ryzenai.docs.amd.com/en/latest/inst.html)

```
curl -fsSL https://ollama.com/install.sh | sh
ollama pull deepseek-r1:1.5b
pip install ollama

pip install scrapegraphai
playwright install

pip install duckduckgo-search
```
```
from scrapegraphai.graphs import SmartScraperGraph

# Define the configuration for the scraping pipeline
graph_config = {
    "llm": {
        "model": "ollama/deepseek-r1:1.5b",
        "model_tokens": 8192
    },
    "verbose": True,
    "headless": False,
}

# Create the SmartScraperGraph instance
smart_scraper_graph = SmartScraperGraph(
    prompt="Extract useful information from the webpage, including a description of what the company does, founders and social media links",
    source="https://scrapegraphai.com/",
    config=graph_config
)

# Run the pipeline
result = smart_scraper_graph.run()

import json
print(json.dumps(result, indent=4))
```
