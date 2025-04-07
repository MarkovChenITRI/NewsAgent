cd dify/docker
cp .env.example .env
sudo docker compose up -d
cd ../..

cd ./firecrawl/apps/api
pnpm run workers & pnpm run start & wait
