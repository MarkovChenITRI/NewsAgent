# NewsAgent
```
sudo docker run -d --device /dev/kfd --device /dev/dri -v ollama:/root/.ollama -p 11434:11434 --name ollama ollama/ollama:rocm

git clone --recursive https://github.com/MarkovChenITRI/NewsAgent.git
cd NewsAgent/
bash build.sh
```

Then Run [http://localhost/install](http://localhost/install)
```
# Dify Docker Route
curl -X GET http://172.17.0.1:3002/test     
```
