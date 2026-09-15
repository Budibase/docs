---
title: MySQL / MariaDB
excerpt: Connect a MySQL or MariaDB database as a datasource
deprecated: false
hidden: false
metadata:
  title: ''
  description: ''
  robots: index
next:
  description: ''
---
Use MySQL / MariaDB when you want Budibase to connect to an existing relational database.

Budibase supports:

* MySQL 8.0 and later
* MariaDB 10.6 and later

## Connect the datasource

1. Open the **Data** section
2. Add a new source
3. Choose `MySQL / MariaDB`
4. Enter the connection details
5. Fetch the tables you want to use

If Budibase is running in Docker and the database is on the same machine, use `host.docker.internal` as the host value.

## Fetch tables

Fetch only the tables you need. You can fetch more tables later if the schema changes.

## Define relationships

Add relationships after you fetch the tables.

Use one-to-many relationships for foreign keys and many-to-many relationships when your schema includes a join table.

If Budibase rejects a join table, update the source table so the foreign key columns are nullable, then fetch the table again.

## Custom queries

Use a custom query when you need joins, grouped results, or write actions from a form or button.

See [Working with SQL datasources](doc:sql-workflow) for the shared workflow after the connection is in place.
