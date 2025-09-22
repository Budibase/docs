---
title: Budibase architecture
excerpt: Covering the architecture that makes the Budibase platform work
deprecated: false
hidden: false
metadata:
  title: ''
  description: ''
  robots: index
next:
  description: ''
---
The Budibase architecture comprises of a few key Budibase services and a collection of open source technologies that Budibase is built on top of. 

## Hosted architecture

In this section, we will cover the core services that make up the Budibase self-hosted platform and how this architecture fits together.

1. [App service](https://github.com/Budibase/budibase/tree/master/packages/server) - this is the core of the Budibase infrastructure, the apps service hosts your web apps when they have been deployed as well as providing the REST API that your web apps will use to access/store their data.
2. [Worker service](https://github.com/Budibase/budibase/tree/master/packages/worker) - a small custom Budibase service which currently handles platform security, making sure users attempting to deploy have permission to do so.
3. [Database (CouchDB)](https://couchdb.apache.org) - this is the primary database of Budibase, it is a NoSQL highly scalable and reliable platform which supports simple [data replication](https://docs.couchdb.org/en/stable/replication/protocol.html) and [partitioning](https://docs.couchdb.org/en/stable/partitioned-dbs/index.html). We utilise data replication when deploying apps as well as it being particularly useful for synchronising a cluster for large scale deployments. We partition the CouchDB service into databases specific to each app, meaning we can keep data separated easily and securely.
4. [Object store (MinIO)](https://min.io) - it is possible to store large files in Budibase apps, as well as the apps being built on top of a specific version of the Budibase Client (the Svelte app at the core of every Budibase web app). To store these files we make use of MinIO, which works similarly to AWS S3.
5. [Proxy (NGINX)](https://nginx.com) - To simplify the deployment and usage of the Budibase platform we route all requests through a proxy engine which sits at the front of the Budibase architecture. No service is communicated with directly, this also allows us to load balance the services as the system grows if necessary.
6. [Cache (Redis)](https://redis.io/) - We utilise Redis as a cache store, for information that is commonly accessed such as app metadata. We also store some information about active user sessions in Redis, as these are required with every user request to confirm their identity/authentication.

This architecture will look the same no matter the method of self hosting, all of the above services are required for Budibase to function.

## Optional architecture

Some services are not included in all installations - they are optional, they may only provide a service which is useful to that particular environment.

1. [Updates (Watchtower)](https://containrrr.dev/watchtower/) - For self hosted docker-compose updates Watchtower can be used. This image is only provided in our docker-compose setup and is entirely optional, if you plan to update using the Budibase CLI, or manually this container can be removed. It can be used to perform updates to the Budibase images (app and worker services) via the UI, however if this method is used we recommend checking periodically whether or not your docker-compose scripts require updates as well; watchtower can only update image versions.

## Web app architecture

Lastly the most important component of Budibase, the apps you make! Each Budibase app is made up of a few core libraries:

1. [Svelte](https://svelte.dev) - Budibase loves Svelte, and all our web apps at their core are built with Svelte.
2. [Client library](https://github.com/Budibase/budibase/tree/master/packages/client) - as with the builder each Budibase app has a version of the client library that it was built with, this provides the interactivity and data connections you need for your app to function.
3. [Component library](https://github.com/Budibase/bbui) - we want to make it easy to build consistent web apps quickly; for this reason, we provide a core set of components that apps can be built out of - this is included in your app.

Hopefully, this overview has explained how the Budibase platform works, from the builder to your deployed web apps.
