cd dify/docker
cp .env.example .env
sudo docker compose up -d
cd ../..

cd ./firecrawl/apps/api
pnpm run workers & sleep 3 && pnpm run start & wait
