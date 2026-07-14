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
Budibase architecture is made up of a few core services and the open source technologies they depend on.

## Hosted architecture

This section covers the core services that make up the Budibase self-hosted platform.

1. [App service](https://github.com/Budibase/budibase/tree/master/packages/server) - hosts deployed web apps and provides the REST API used to access and store data.
2. [Worker service](https://github.com/Budibase/budibase/tree/master/packages/worker) - handles platform security and checks whether deployment requests are allowed.
3. [Database (CouchDB)](https://couchdb.apache.org) - stores app data and supports [replication](https://docs.couchdb.org/en/stable/replication/protocol.html) and [partitioning](https://docs.couchdb.org/en/stable/partitioned-dbs/index.html). Budibase uses separate databases per app to keep data isolated.
4. [Object store (MinIO)](https://min.io) - stores uploaded files and other large assets. It works similarly to AWS S3.
5. [Proxy (NGINX)](https://nginx.com) - routes requests through a single entry point and can load balance services as the system grows.
6. [Cache (Redis)](https://redis.io/) - stores commonly accessed metadata and active session data.

This architecture is the same across self-hosting methods. All of the above services are required.

## Optional architecture

Some services are optional and only apply to specific installations.

1. [Updates (Watchtower)](https://containrrr.dev/watchtower/) - used in the docker-compose setup to update Budibase images. If you update with the Budibase CLI or manually, you can remove this container.

## Web app architecture

Each Budibase app is made up of a few core libraries:

1. [Svelte](https://svelte.dev) - the core framework used by Budibase web apps.
2. [Client library](https://github.com/Budibase/budibase/tree/master/packages/client) - provides the interactivity and data connections your app needs.
3. [Component library](https://github.com/Budibase/bbui) - provides the reusable components used to build apps consistently.

This overview shows how the Budibase platform fits together, from the builder to deployed web apps.
