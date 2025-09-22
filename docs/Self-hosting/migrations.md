---
title: Migrations
excerpt: Information about self hosted migrations
deprecated: false
hidden: false
metadata:
  title: ''
  description: ''
  robots: index
next:
  description: ''
---
Occasionally as part of a Budibase update we will need to make an update to the infrastructure which is used by the platform - in self host this can impact you.

Budibase will warn you that your installation is not up to date/is missing components of the infrastructure, this warning will look like:

<Image alt="Your installation requires an upgrade" align="center" src="https://files.readme.io/ab77c2a-image.png">
  Your installation requires an upgrade
</Image>

Below is a list of migrations which may be needed for your installation.

## Budibase DB SQL Support

If you have reached this page then you have been alerted to an issue with your self-host installation. As of version 2.33.0, Budibase relies on a service called the Structured Query Server ([SQS](https://neighbourhood.ie/products-and-services/structured-query-server)). This runs alongside CouchDB to provide relational searching functionality.

Below is what's required for each installation method to get SQS running.

### Single image

If you are using any of the [single image/docker install methods](/docs/docker) then you will not need to make any changes, the updates to CouchDB are included in the Docker image.

### `docker-compose`

You need to update your `docker-compose.yaml` file - the quickest way to do this is using the [Budibase CLI](/docs/updating-budibase#budibase-cli-docker-compose). If you would prefer to do this manually then you will need to make sure your CouchDB installation is using the latest version of the `budibase/couchdb` image. This image runs SQS for you.

You will also need to set a new environment variable called `TARGETBUILD`. Here's how your `couchdb-service` block in your `docker-compose.yaml` file should look:

```yaml docker-compose.yaml
couchdb-service:
  restart: unless-stopped
  image: budibase/couchdb:v3.3.3-sqs-v2.1.1
  environment:
    - COUCHDB_PASSWORD=${COUCH_DB_PASSWORD}
    - COUCHDB_USER=${COUCH_DB_USER}
    - TARGETBUILD=docker-compose
  volumes:
    - couchdb3_data:/opt/couchdb/data
```

### Kubernetes

You will need to make sure you are using the latest version of the Budibase Helm chart alongside the latest version of the Budibase images. **If your upgrade workflow for Kubernetes involves just updating image tags in your`values.yaml` file, this will break your installation.**

If you followed the steps in [Kubernetes](doc:kubernetes-k8s), you'll need to run the following commands to update your Helm chart.

```
helm repo update budibase
helm upgrade -n budibase budibase budibase/budibase
```

***

If you are still having issues and have confirmed that your installation is running the latest `budibase/couchdb` image for your CouchDB service then please reach out to Budibase support for further help, in the meantime you can downgrade to the previously used version safely.
