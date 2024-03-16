- create a yaml file
- we do not need to mention network in yml file, as docker compose will create a new network and all containers inside that will have the same network.

- To load yaml file go to same dir
```bash
docker compose -f <file_name> up
```

- To stop the instance 
```bash
docker compose -f <file_name> down
```