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
將“IPU Control”下拉功能表更改為 Enable。
[INSTALL THE NPU DRIVERS](https://ryzenai.docs.amd.com/en/latest/inst.html)
```
curl -fsSL https://ollama.com/install.sh | sh

sudo apt update
sudo apt install libatk1.0-0 libatk-bridge2.0-0 libcups2 libxkbcommon0 libatspi2.0-0 libxdamage1 libgbm1 libpango-1.0-0 libcairo2
sudo apt-get install libxcomposite1 libxfixes3 libxrandr2 libasound2
pip install playwright
pip install scrapegraph-py
pip install duckduckgo-search
pip install ollama
```
