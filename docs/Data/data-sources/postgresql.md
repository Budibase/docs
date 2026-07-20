---
title: PostgreSQL
excerpt: Connect PostgreSQL as a datasource
deprecated: false
hidden: false
metadata:
  title: ''
  description: ''
  robots: index
next:
  description: ''
---
Use PostgreSQL when you want Budibase to connect to an existing PostgreSQL database.

## Before you start

Make sure you have:

* A running PostgreSQL instance
* Credentials for the database
* Permission to add datasources in Budibase

## Connect the datasource

1. Open the **Data** section
2. Add a new source
3. Choose `PostgreSQL`
4. Enter the connection details
5. Fetch the tables you want to use

If Budibase is running in Docker and the database is on the same machine, use the host value required by your environment instead of `localhost`.

## Fetch tables and define relationships

Fetch only the tables you need, then add relationships for the joins you want to reuse in screens and bindings.

Use one-to-many relationships for foreign keys and many-to-many relationships when your schema includes a join table.

## Custom queries

Use custom queries for joins, grouped results, or write actions from a form or button.

See [Working with SQL datasources](doc:sql-workflow) for the shared workflow after the connection is in place.
