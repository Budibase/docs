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

## Overview

Budibase runs as a small set of services behind a single proxy.

The proxy is the public entry point. It routes traffic to the app and worker services, while CouchDB stores app data, MinIO stores files, Redis stores shared metadata and sessions, and LiteLLM powers Budibase AI and agent features. LiteLLM uses Postgres for its own metadata.

The exact container layout differs between deployment methods, but these logical services are part of the default self-hosted platform.

## Core services

1. [App service](https://github.com/Budibase/budibase/tree/master/packages/server) - hosts deployed web apps and provides the REST API used to access and store data.
2. [Worker service](https://github.com/Budibase/budibase/tree/master/packages/worker) - handles platform security and checks whether deployment requests are allowed.
3. [Database (CouchDB)](https://couchdb.apache.org) - stores app data and supports [replication](https://docs.couchdb.org/en/stable/replication/protocol.html) and [partitioning](https://docs.couchdb.org/en/stable/partitioned-dbs/index.html). Budibase uses separate databases per app to keep data isolated.
4. [Object store (MinIO)](https://min.io) - stores uploaded files and other large assets. It works similarly to AWS S3.
5. [Cache (Redis)](https://redis.io/) - stores commonly accessed metadata and active session data.
6. [AI service (LiteLLM)](https://docs.litellm.ai/) - provides the proxy used for Budibase AI and agent features.
7. [AI database (Postgres)](https://www.postgresql.org/) - stores LiteLLM metadata when Budibase AI is enabled.

## Web app architecture

Each Budibase app is made up of a few core libraries:

1. [Svelte](https://svelte.dev) - the core framework used by Budibase web apps.
2. [Client library](https://github.com/Budibase/budibase/tree/master/packages/client) - provides the interactivity and data connections your app needs.
3. [Component library](https://github.com/Budibase/bbui) - provides the reusable components used to build apps consistently.

This overview shows how the Budibase platform fits together, from the builder to deployed web apps.
