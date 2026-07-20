---
title: MS SQL Server
excerpt: Connect Microsoft SQL Server as a datasource
deprecated: false
hidden: false
metadata:
  title: ''
  description: ''
  robots: index
next:
  description: ''
---
Use MS SQL Server when you want Budibase to connect to an existing Microsoft SQL Server database.

Budibase supports SQL Server 2016 and later.

## Connect the datasource

1. Open the **Data** section
2. Add a new source
3. Choose `MS SQL Server`
4. Enter the connection details
5. Fetch the tables you want to use

If Budibase is running in Docker and the database is on the same machine, use `host.docker.internal` or `172.17.0.1` on Linux.

## Fetch tables

Fetch only the tables you need. You can fetch additional tables later if the schema changes.

## Define relationships

Add relationships after you fetch the tables.

Use one-to-many relationships for foreign keys and many-to-many relationships when your schema includes a join table.

## Custom queries

Use custom queries for joins, grouped results, or write actions from a form or button.

See [Working with SQL datasources](doc:sql-workflow) for the shared workflow after the connection is in place.
