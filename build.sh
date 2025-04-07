cd dify/docker
cp .env.example .env
sudo docker compose up -d
cd ../..

cd firecrawl
sudo docker compose up -d
