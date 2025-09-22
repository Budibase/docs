---
title: Google Cloud Run
excerpt: Installing Budibase on Google Cloud Run
deprecated: false
hidden: false
metadata:
  title: ''
  description: ''
  robots: noindex
next:
  description: ''
---
[Cloud Run](https://console.cloud.google.com/run) is Google’s managed container service and in this guide we will install Budibase with persistent storage using [Google File Store](https://cloud.google.com/filestore). We will also install using the gcloud cli tool but the console UI could be used as an alternative. 

### Set Global Variables

In your terminal set the following variables for use in later commands, amending as necessary:

```
PROJECT_NAME="budibasedev"
REGION="europe-west2"
ZONE="europe-west2-a"
```

### Create the Project

The following command can be used to create a project. The project will then house the container and storage components. In the command below we specify a folder id as the parent folder of the project but this can be omitted or amended to suit your existing structure:

```
gcloud projects create $PROJECT_NAME --name="My Dev Budibase" --folder=123987111222 --labels=terraform=false
```

With the project created we can set a variable for the project ID for use in later commands:

```
export PROJECT_ID=$(gcloud projects describe cloud-run-demo-dev --format "value(projectNumber)")
```

We can use the project ID to configure the gcloud command:

```
gcloud config set project $PROJECT_ID
```

and similarly set the region for the command:

```
gcloud config set run/region $REGION
```

Next we set the zone for our file store:

```
gcloud config set filestore/zone $ZONE
```

At this point you may wish to check that billing is enabled for the new project. 

### Create the File Store and File Share

The command below will create an NFS file store instance. You may change the storage tier to reduce latency and suit the needs of your audience ([details](https://cloud.google.com/filestore/docs/service-tiers)). 

```
gcloud beta filestore instances create $PROJECT_NAME \
  --project=$PROJECT_NAME --zone=$ZONE --tier=BASIC_HDD \
  --file-share=name="$PROJECT_NAME",capacity=1TB \
  --network=name="default"
```

During creation of the file store you may be prompted to enable the file api on your project as shown below:

![](https://files.readme.io/fab6036-image.png)

After some time you will get confirmation that the file store instance has been created:

![](https://files.readme.io/393c6a2-image.png)

The file store configuration may also be viewed in the UI:

![](https://files.readme.io/0b7f2c0-image.png)

Next we want to store the IP address of the file store instance to a variable: 

```
export FILESTORE_IP_ADDRESS=$(gcloud filestore instances describe $PROJECT_NAME --project $PROJECT_NAME --format "value(networks.ipAddresses[0])")
```

Then create a VPC connector:

```
gcloud compute networks vpc-access connectors create $PROJECT_NAME --project $PROJECT_NAME --region $REGION --range "10.8.0.0/28"
```

![](https://files.readme.io/d6f52b8-image.png)

And next create a service account:

```
gcloud iam service-accounts create $PROJECT_NAME --project $PROJECT_NAME
```

### Container Registry

With the file storage configured our next step is to make the Budibase container image available in a registry accessible to the Cloud Run service. Fetch the docker hub image with:

```
docker pull --platform=linux/amd64 budibase/budibase
```

Then tag that image with the path to GCR for your project:

```
docker tag budibase/budibase gcr.io/$PROJECT_NAME/budibase/budibase:latest
```

Next we want to instruct docker to use gcloud for autheticating to GCR :

```
gcloud auth configure-docker
```

then push the image to GCR:

```
docker push gcr.io/$PROJECT_NAME/budibase/budibase:latest
```

### Run the Container

With the image available in GCR we can now run the container service. Notice that we are passing in environment variables for the NFS file share IP address and share name. 

```
gcloud beta run deploy $PROJECT_NAME --image gcr.io/$PROJECT_NAME/budibase/budibase:latest \  
    --project=$PROJECT_NAME --port=80 --platform=managed --region=$REGION \
    --vpc-connector $PROJECT_NAME \
    --execution-environment gen2 \
    --allow-unauthenticated \
    --memory 6G \
    --cpu 4 \
    --service-account $PROJECT_NAME \
    --no-cpu-throttling \
    --update-env-vars FILESHARE_IP=$FILESTORE_IP_ADDRESS,FILESHARE_NAME=$FILESHARE_NAME
```

![](https://files.readme.io/970946b-image.png)

Allow a few minutes for the service to initialise then visit the Service URL as output by the command above or as found on the UI.

<Image width="400px" src="https://files.readme.io/503628e-image.png" />

### Cleaning Up

If you have been running an example test you can use the following to remove anything you created that you don’t need. To remove the Cloud Run Service:

```
gcloud run services delete cloud-run-demo-prod
```

And to delete the whole project you could use:

```
gcloud projects delete $PROJECT_ID
```

### Troubleshooting

The 'Cloud Run' service **Logs** tab can be used to look out for errors while mounting the file storage or running the app. 

<Image width="460px" src="https://files.readme.io/8b2901d-image.png" />
