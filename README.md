# NewsAgent
```
git clone --recursive https://github.com/MarkovChenITRI/NewsAgent.git
cd NewsAgent/
bash build.sh
```
# Modify `apps/api/.env.example`

```
NUM_WORKERS_PER_QUEUE=8
PORT=3002
HOST=0.0.0.0
REDIS_URL=redis://redis:6380 #for self-hosting using docker, use redis://redis:6379. For running locally, use redis://localhost:6380
REDIS_RATE_LIMIT_URL=redis://redis:6380 #for self-hosting using docker, use redis://redis:6379. For running locally, use redis://localhost:6380
PLAYWRIGHT_MICROSERVICE_URL=http://playwright-service:3000/html

## To turn on DB authentication, you need to set up supabase.
USE_DB_AUTHENTICATION=false
```

Then Run [http://localhost/install](http://localhost/install)
```
curl -X POST http://localhost:3002/v1/crawl \
    -H 'Content-Type: application/json' \
    -d '{
      "url": "https://firecrawl.dev"
    }'
```
