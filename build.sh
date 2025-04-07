#cd firecrawl/apps/api
#cp .env.example .env
#sudo docker compose build
#sudo docker compose up
#-d
#cd ../../..

cd dify/docker
cp .env.example .env
sudo docker compose up -d
cd ../..
