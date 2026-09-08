---
title: Google Cloud Run
excerpt: Installing Budibase on Google Cloud Run
deprecated: false
hidden: false
metadata:
  title: ''
  description: ''
  robots: index
next:
  description: ''
---
[Cloud Run](https://console.cloud.google.com/run) is Google’s managed container service. This guide installs Budibase with persistent storage using [Google File Store](https://cloud.google.com/filestore) and the `gcloud` CLI.

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

Check that billing is enabled for the new project.

### Create the File Store and File Share

Create an NFS file store instance. You can change the storage tier to suit your latency and capacity needs. See the [service tiers](https://cloud.google.com/filestore/docs/service-tiers) for details.

```
gcloud beta filestore instances create $PROJECT_NAME \
  --project=$PROJECT_NAME --zone=$ZONE --tier=BASIC_HDD \
  --file-share=name="$PROJECT_NAME",capacity=1TB \
  --network=name="default"
```

During creation, you may be prompted to enable the File API on your project.

Wait for the file store instance to finish creating before continuing.

Next we want to store the IP address of the file store instance to a variable: 

```
export FILESTORE_IP_ADDRESS=$(gcloud filestore instances describe $PROJECT_NAME --project $PROJECT_NAME --format "value(networks.ipAddresses[0])")
```

Then create a VPC connector:

```
gcloud compute networks vpc-access connectors create $PROJECT_NAME --project $PROJECT_NAME --region $REGION --range "10.8.0.0/28"
```

And next create a service account:

```
gcloud iam service-accounts create $PROJECT_NAME --project $PROJECT_NAME
```

### Container Registry

With file storage configured, make the Budibase container image available in a registry accessible to Cloud Run. Fetch the Docker Hub image with:

```
docker pull --platform=linux/amd64 budibase/budibase
```

Then tag that image with the path to GCR for your project:

```
docker tag budibase/budibase gcr.io/$PROJECT_NAME/budibase/budibase:latest
```

Next, configure Docker to use `gcloud` for authenticating to GCR:

```
gcloud auth configure-docker
```

then push the image to GCR:

```
docker push gcr.io/$PROJECT_NAME/budibase/budibase:latest
```

### Run the Container

With the image available in GCR, deploy the container service. Pass the NFS file share IP address and share name as environment variables.

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

Allow a few minutes for the service to initialise, then visit the service URL shown by the command or in the Cloud Run console.

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

Use the Cloud Run **Logs** tab to look for errors while mounting the file storage or running the app.
