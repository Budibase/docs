---
title: Migrations
excerpt: Information about self hosted migrations
deprecated: false
hidden: false
metadata:
  title: ''
  description: kba_5hkw2
  robots: index
next:
  description: ''
---
Budibase updates sometimes require infrastructure changes. In self-hosted installations, those changes can affect your deployment.

Budibase will warn you if your installation is missing required infrastructure components.

Below is a list of migrations which may be needed for your installation.

## Budibase DB SQL Support

If you have reached this page, your self-hosted installation needs an update. As of version 2.33.0, Budibase relies on the Structured Query Server ([SQS](https://neighbourhood.ie/products-and-services/structured-query-server)) running alongside CouchDB to provide relational search.

Below is what's required for each installation method to get SQS running.

### Single image

If you are using any of the [single image/docker install methods](/docs/docker) then you will not need to make any changes, the updates to CouchDB are included in the Docker image.

### `docker-compose`

Update your `docker-compose.yaml` file. The quickest way is to use the [Budibase CLI](/docs/updating-budibase#budibase-cli-docker-compose). If you update manually, make sure your CouchDB service uses the latest `budibase/couchdb` image, which includes SQS.

You also need to set the `TARGETBUILD` environment variable. Your `couchdb-service` block should look like this:

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

Make sure you are using the latest version of the Budibase Helm chart and the latest Budibase images. Updating only the image tags in `values.yaml` will break the installation.

If you followed the steps in [Kubernetes](doc:kubernetes-k8s), run the following command to update your Helm chart.

```shell
helm upgrade -n budibase budibase oci://ghcr.io/budibase/charts/budibase
```

***

If you are still having issues after confirming that your CouchDB service uses the latest `budibase/couchdb` image, contact Budibase support. You can safely downgrade to the previous version in the meantime.
