---
title: Deployment information
excerpt: The where and the how of Budibase deployments
deprecated: false
hidden: false
metadata:
  title: ''
  description: kba_5hjnm
  robots: index
next:
  description: ''
---
Deployment questions usually come down to two things: where the app goes and what gets deployed.

## Where deployments go

### Self-hosted

For a self-hosted deployment, the app, attachments, and data are uploaded to your own platform. They are stored across MinIO and CouchDB and served by the Budibase apps service.

## How does deployment work

The deployment process is mostly the same whether you deploy to self-hosted infrastructure or Budibase Cloud. The main differences are how apps are separated and how Cloud quotas are enforced.

1. The builder sends your hosting or API key to confirm access.
2. If the request is accepted, the platform returns deployment tokens.
3. The builder uses those tokens to write app data, metadata, and the Budibase client through the proxy service.
4. App and metadata storage live in [CouchDB](https://couchdb.apache.org), which supports [replication](https://docs.couchdb.org/en/stable/replication/protocol.html). Budibase replicates data from the builder to CouchDB so updates can be merged with existing apps.
5. The builder confirms the deployment and returns access details, including webhook URLs for the deployed app.

The process is simple: authenticate, upload, confirm, and then use the deployed app.
