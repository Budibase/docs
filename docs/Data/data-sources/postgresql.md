---
title: PostgreSQL
excerpt: Using a Postgres Database Server as a datasource for Budibase
deprecated: false
hidden: false
metadata:
  title: ''
  description: ''
  robots: index
next:
  description: ''
---
Budibase can connect to PostgreSQL and use it as a datasource for apps and automations.

## Before you start

Make sure you have:

* A running PostgreSQL instance
* Credentials for that database
* Permission to create and edit a datasource in Budibase

## Connect PostgreSQL

1. Open the Data section.
2. Add a new source.
3. Choose `PostgreSQL`.
4. Enter the connection details.
5. Fetch the tables you want Budibase to use.

If you are connecting to a local database, use the host value required by your environment instead of `localhost` when Budibase is running in Docker.

## Related guides

* [Working with SQL datasources](doc:sql-workflow)
* [SQL datasource](doc:sql-datasource)
* [Data providers](doc:data-provider)
* [Bindings](doc:bindings)
