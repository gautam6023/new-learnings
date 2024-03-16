# Build a docker image and push it to docker hub

- Lets say we have a simple node.js server with express, now let’s create a docker image for that.
- First delete node_modules or add it in docker ignore file
- create a Dockerfile => see docker file
- Now build this image
```docker
docker build -t <username>/<imagename>:<version> .
docker build -t gautam6023/hey-nodejs:0.0.1.RELEASE .
```

- Now run this image
```docker
docker container run -d -p <machine_port>:<docker_image_port> <image_name>:<tag>
docker container run -d -p 3000:3000 gautam6023/hey-nodejs:0.0.1.RELEASE
```

- push the image to docker hub
```docker
docker login
docker push <image_name>:<image_version>
docker push gautam6023/hey-nodejs:0.0.1.RELEASE
```
