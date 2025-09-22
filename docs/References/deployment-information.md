---
title: Deployment information
excerpt: The where and the how of Budibase deployments
deprecated: false
hidden: false
metadata:
  title: ''
  description: ''
  robots: noindex
next:
  description: ''
---
A common question asked about deployment is how does it work and where does it go - an important question to ask before considering a platform to build your tools on top of.
[block:api-header]
{
  "title": "Where deployments go"
}
[/block]
### Self-hosted

In the case of a self-hosted deployment, the answer is very simple, the app, attachments and all data will be uploaded to the self-hosted platform, this data will be spread between your MinIO and CouchDB services, being served by the Budibase apps service. For more information on this please check out the hosting [architecture page](doc:budibase-architecture) 
[block:api-header]
{
  "title": "How does deployment work"
}
[/block]
Another important question is the technical side of what actually happens when your app is deployed. Here I'll give a quick overview of the steps taken by the Budibase builder and platform to get your app live! This process is nearly identical whether you're deploying to a self-hosted service or if you're deploying to the Budibase Cloud; the only differences being around how Budibase keeps everyone's apps separate and within user quota limits in the Cloud.

1. First the builder sends up your hosting/API key to confirm you have access to the platform, if accepted the platform will return tokens to allow for a one-time deployment to the various services
2. Next the builder uses these tokens to talk through our proxy service to the database and object store engines, storing app data, metadata about the app and the Budibase client, the Svelte app that is the base of every Budibase app.
3. All metadata and app data is stored in [CouchDB](https://couchdb.apache.org), a NoSQL database that importantly supports [replication](https://docs.couchdb.org/en/stable/replication/protocol.html). We replicate the data from your builder to the CouchDB service, meaning we can merge data from existing apps with any updates you've made in the builder as well as deploying fresh apps.
4. Lastly the builder confirms if the deployment was successful and returns the information about how to access the app to the user. This will also include working our the URLs for any webhooks which are now running in the deployed app.

As you can see the deployment process is quite simple, secure, upload, and then confirm, then you're ready to start using the app!