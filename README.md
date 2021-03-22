# Implementation the Configmap and Secret on Project NodeJS in Kubernetes

🚢[Docker Image](https://hub.docker.com/repository/docker/rootduck/express-api)

### Running On Premise 
- Ubuntu 20.04 LTS
- Load balancer MetalLB
- Ingress Nginx

### Specification My Cluster
- Master node vCPU 2 Memory 8Gb
- Worker node1 vCPU 2 Memory 2Gb
- Worker node2 vCPU 2 Memory 2Gb
- Worker node3 vCPU 2 Memory 2Gb

### Installation
1. Clone this project.
    ```sh
    $ git clone https://github.com/skyapps-id/Express-Deploy-K8s.git 
    ```

2. Building the docker image from project nodejs and push to docker hub.
    ```sh
    $ cd  Express-Deploy-K8s/
    $ docker login
    $ docker tag cd0a85f26516 rootduck/express-api:1.0.2
    $ docker push rootduck/express-api:1.0.2
    ```

3. Create the ConfigMap and Secret resource in your Kubernetes cluster by using the kubectl apply command.
    ```sh
    $ cd K8s/
    $ kubectl apply -f configmap-and-secret.yml
    ```
     - NOTE Secrets data are stored as Base64 encoded strings. command : ```$ echo -n 'example' | base64 ```

4. Creating a Deployment and Service resource in your Kubernetes cluster by using the kubectl apply command.
    ```sh
    $ kubectl apply -f deployment-and-service.yaml
    ```

5. Creating a Ingress resource in your Kubernetes cluster by using the kubectl apply command.
    ```sh
    $ kubectl apply -f ingress.yaml
    ```

6. If you want, check configuration environment.
    ```sh
    $ kubectl get pods
    NAME                           READY   STATUS    RESTARTS   AGE
    express-api-744fb66d94-4d4dj   1/1     Running   0          22m
    express-api-744fb66d94-5dzcb   1/1     Running   0          22m
    express-api-744fb66d94-m56s7   1/1     Running   0          22m

    $ kubectl logs express-api-744fb66d94-4d4dj
    Debug false
    Express API running on port 3000
    Database host db.prod.serverlab.ca
    Database name expressapi_prod
    Database username admindb
    Database password adminpassword
    ```

7. Ensure there is no .env in the project.
    ```sh
    $ kubectl exec -it express-api-744fb66d94-4d4dj -- ls -la
    total 80
    drwxr-xr-x    1 root     root          4096 Feb 15 13:19 .
    drwxr-xr-x    1 root     root          4096 Feb 15 16:19 ..
    -rw-rw-r--    1 root     root            23 Feb 15 13:19 .dockerignore
    -rw-rw-r--    1 root     root            52 Feb 15 13:19 .gitignore
    -rw-rw-r--    1 root     root           121 Feb 15 13:19 Dockerfile
    -rw-rw-r--    1 root     root            24 Feb 15 13:19 README.md
    -rw-rw-r--    1 root     root           885 Feb 15 13:19 apps.js
    drwxrwxr-x    2 root     root          4096 Feb 15 13:19 config
    drwxrwxr-x    2 root     root          4096 Feb 15 13:19 controllers
    drwxr-xr-x   53 root     root          4096 Feb 15 11:06 node_modules
    -rw-r--r--    1 root     root         31879 Feb 15 11:06 package-lock.json
    -rw-rw-r--    1 root     root           350 Feb 15 13:19 package.json
    drwxrwxr-x    2 root     root          4096 Feb 15 13:19 routes
    ```
8. Add your domain api.express.info in hosts OS Client by address-pools metalLB.
    ```sh
    Windows : C:\Windows\System32\drivers\etc\hosts
    Linux : /etc/hosts
    ```
   
9.  End Point API
    ```sh
    http://api.express.info/api/v1/hello
    {
      "status": "Success",
      "data": "Hello",
      "hostname": "express-api-744fb66d94-4d4dj"
    }
    ```
   
### Licence

This work is under [MIT](LICENCE) licence.