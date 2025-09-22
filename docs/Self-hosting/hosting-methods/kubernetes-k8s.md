---
title: Kubernetes
excerpt: Set up Budibase in your Kubernetes cluster.
deprecated: false
hidden: false
metadata:
  title: ''
  description: ''
  robots: noindex
next:
  description: ''
  pages:
    - type: basic
      slug: hosting-settings
      title: Hosting settings
    - type: basic
      slug: reverse-proxy
      title: Reverse proxy
---
[block:html]
{
  "html": "<div style=\"padding:65% 0 0 0;position:relative;\"><iframe src=\"https://player.vimeo.com/video/712765075?h=b87fb892b5&amp;badge=0&amp;autopause=0&amp;player_id=0&amp;app_id=58479\" frameborder=\"0\" allow=\"autoplay; fullscreen; picture-in-picture\" allowfullscreen style=\"position:absolute;top:0;left:0;width:100%;height:100%;\" title=\"k8-deployment.mp4\"></iframe></div><script src=\"https://player.vimeo.com/api/player.js\"></script>"
}
[/block]



There are a few command-line utilities we have to set up before we can get started with Budibase on Kubernetes. Follow the guides below to set up Kubectl and Helm.

- [helm CLI](https://helm.sh/docs/intro/install/)
- [kubectl CLI](https://kubernetes.io/docs/tasks/tools/#kubectl)

> 📘 Info
> 
> We recommend running on K8S nodes with at least 2GB of memory, but we recommend larger instances for higher volume use cases.

***



## Setting up a Kubernetes Cluster

If you don't already have an existing Kubernetes cluster, follow one of the guides below for your provider.

- [AWS guide](https://docs.aws.amazon.com/eks/latest/userguide/getting-started-eksctl.html)
- [Google Cloud guide](https://cloud.google.com/kubernetes-engine/docs/how-to)
- [Minikube](https://minikube.sigs.k8s.io/docs/start/)
- [K3S](https://rancher.com/docs/k3s/latest/en/quick-start/)
- [MicroK8S](https://microk8s.io/docs)

***



## Install Budibase Helm Chart

Now that you have your Kubernetes cluster up and running, you can now install the Budibase helm chart which will provision all the relevant infrastructure for running Budibase in a K8S environment. Run the commands below to download the helm chart from our repository, and install it.

> 🚧 Required
> 
> You must install Budibase in a Kubernetes namespace called `budibase`. This helps segregate your Budibase resources from the rest of your cluster.

```
helm repo add budibase https://budibase.github.io/budibase/
helm repo update
helm install --create-namespace --namespace budibase budibase budibase/budibase
```



Wait a few moments as Budibase creates all the containers and resources. You can then run:

```
kubectl get pods -n budibase
```



You should now be able to see your new Budibase installation up and running in your K8S cluster.

![Budibase installation K8S](https://res.cloudinary.com/daog6scxm/image/upload/v1646670651/docs/Screenshot_2021-08-16_at_22.19.58_pnzppx.png)

Time to build! To use your new installation, you need to get the IP address of your ingress controller. Budibase makes use of the [NGINX ingress controller](https://kubernetes.github.io/ingress-nginx/how-it-works/) to direct incoming traffic to the other Budibase services. 

You can access your Budibase installation using the IP address of the ingress controller, which you can grab using the following command:

```
kubectl get ingress -n budibase
```



Visit the ingress URL in your browser and you will see that your Budibase installation is up and running.

[block:image]
{
  "images": [
    {
      "image": [
        "https://files.readme.io/022091e-Screenshot_2021-08-17_at_18.06.17.png",
        "Screenshot 2021-08-17 at 18.06.17.png",
        932
      ],
      "align": "center",
      "sizing": "80",
      "caption": "Budibase admin interface"
    }
  ]
}
[/block]

### Upgrading your Chart

To get the latest and greatest, you can run the following commands to update the repo and install the latest Budibase Helm Chart to your environment!

```
helm repo update
helm upgrade -n budibase budibase budibase/budibase
```



***



## Configuration

### Cloud Specific Load Balancers

By default, Budibase configures a basic NGINX ingress controller to route traffic to your Budibase services. If you want to run a load balancer for your specific cloud, you can turn off the NGINX ingress controller bundled with Budibase and run your own ingress controller for your specific cloud.

```
ingress:
  nginx: false
  aws: true
```



### Using a Custom Domain

If you are using a custom domain for your installation, you need to add it in the host section of the ingress controller in **values.yaml**. Notice here how we have added _yourdomain.com_. You should then be able to set up an A record in your DNS provider to point to the URL of your ingress controller.

```
ingress:
  enabled: true
  nginx: true
  className: ""
  annotations: 
    kubernetes.io/ingress.class: nginx
  hosts:
    - host: yourdomain.com
      paths:
      - path: /
        pathType: Prefix
        backend:
          service:
            name: proxy-service
            port:
              number: 10000 
```



### Scaling Budibase

You can scale up nodes in your installation by updating the **replicaCount** of a given service in the **values.yaml** of the Budibase helm chart. For example, if we wanted to scale up the worker and app service due to high load, we can update our **values.yaml** to have a higher **replicaCount**. Once updated, upgrade your chart to apply the changes.

```
services:
  dns: cluster.local

  proxy:
    port: 10000
    replicaCount: 1

  apps:
    port: 4002
    replicaCount: 2
    logLevel: info

  worker:
    port: 4001
    replicaCount: 2
```



### Secrets Management

If you have createSecrets set to true in your values.yaml, budibase will create the following credentials for you:

- An internal API key, that can be used for API requests.
- a JWT secret
- Object store access key (if using MinIO)
- Object store secret key (if using MinIO)  
  If you need to read the value of your secrets, you can do so using **kubectl** and the following commands to read the values out from your k8s secrets:

```
# for internal API key
kubectl get secret budibase-budibase -o go-template='{{ .data.internalApiKey }}' -n budibase | base64 --decode

# JWT secret
kubectl get secret budibase-budibase -o go-template='{{ .data.jwtSecret }}' -n budibase | base64 --decode

# MinIO Access Key
kubectl get secret budibase-budibase -o go-template='{{ .data.objectStoreAccess }}' -n budibase | base64 --decode

# MinIO Secret Key
kubectl get secret budibase-budibase -o go-template='{{ .data.objectStoreSecret }}' -n budibase | base64 --decode
```



### Redis

The Budibase helm chart ships with a [Redis](https://redis.io/) server that will be included by default. If you want to use your own external Redis cluster, you can configure the values.yaml file in the helm chart to switch off the Budibase one by turning enabled off. Here's what your configuration may look like if you wanted to circumvent the default bundled Redis and use an external Redis cluster hosted on [myrediscluster.io](myrediscluster.io).

```
  redis:
    enabled: false # disable if using external redis
    port: 6379
    replicaCount: 1
    host: "myrediscluster.io"
    password: "your-redis-password"
```



### CouchDB

The Budibase helm chart will automatically bring up a 3 node couchDB cluster within your environment. If you would rather use an existing CouchDB instance, you can turn off the one Budibase supplies and point at your own. Please note - you must set up search in your [CouchDB cluster](https://docs.couchdb.org/en/stable/ddocs/search.html) in order to use all the search functionality that Budibase provides. Below is an example configuration of how you would point Budibase to a CouchDB installation hosted on mycouch.io:

```
  couchdb:
    enabled: false
    replicaCount: 3
    url: "http://mycouch.io:1234"
    user: "couchuser"
    password: "couchpassword"
```



### MinIO/Amazon S3

Budibase ships with a MinIO server included for object storage. Since MinIO is Amazon S3 compliant, you can switch out the bundled MinIO for an S3 bucket in your AWS account. Here's how your **values.yaml** should look if you want to use S3 instead of MinIO.

```
  objectStore:
    minio: false
    browser: false
    port: 9000
    replicaCount: 1
    accessKey: "your-access-key" # AWS_ACCESS_KEY
    secretKey: "your-secret-key" # AWS_SECRET_ACCESS_KEY
```

### NGINX Proxy

Budibase ships with an NGINX proxy that sits in front of the budibase services to route traffic. There are some values you can configure at the proxy level to route requests or update the DNS resolver that is used in your kubernetes setup.

```
proxy:
	port: 10000
	resolver: kube-dns.kube-system.svc.local
   upstreams:
     apps: http://custom-apps-url
     worker: http://custom-worker-url
     minio: http://custom-minio-url
     couchdb: http://custom-couch-url
```

***



## Troubleshooting

### Connection Issues In My Cluster

Make sure that your Budibase installation is running in the Budibase namespace in Kubernetes. The proxy that routes traffic to Budibase services relies on this.

### Still Having issues?

If you need a hand or have discovered a bug, please [raise a discussion on our GitHub discussions forum](https://github.com/Budibase/budibase/discussions). For Kubernetes installations, try to include the following information in your discussion:

- Which K8S provider you are using (AWS/MiniKube etc)
- Screenshots/Logs of errors that are occurring
- Screenshots of your values.yaml if you have changed any configuration
- Anything else that is relevant to the issue you are having.