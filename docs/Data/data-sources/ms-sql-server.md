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

1. Open the **Data tables** link.
2. Add a new source.
3. Choose `MS SQL Server`.
4. Enter the connection details.
5. Fetch the tables you want to use.

## Connection details

You will usually need:

* Server host
* Port
* Database name
* Username
* Password
* Encryption or certificate settings, if your server requires them

For hosted databases, copy these values from your database provider. For self-hosted databases, make sure SQL Server accepts remote connections from Budibase.

If Budibase Cloud is connecting to your database, allow the Budibase IP addresses through your database firewall. See [Whitelisting](doc:whitelisting).

If Budibase is running in Docker and the database is on the same machine, `localhost` points to the Budibase container, not your host machine. Use `host.docker.internal`, or `172.17.0.1` on Linux.

## Temporal tables

Budibase supports system-versioned temporal tables. It imports the main table, excludes history tables from fetch, and marks system-managed period columns as auto-columns.

## Fetch tables

Fetch only the tables you need. You can fetch additional tables later if the schema changes.

## Define relationships

Add relationships after you fetch the tables.

Use one-to-many relationships for foreign keys and many-to-many relationships when your schema includes a join table.

## Custom queries

Use custom queries for joins, grouped results, or write actions from a form or button.

See [Working with SQL datasources](doc:sql-workflow) for the shared workflow after the connection is in place.

## Troubleshooting

If Budibase cannot connect:

* Confirm the database is reachable from the Budibase server or Budibase Cloud
* Check that the host and port are correct
* Confirm the user has permission to connect to the database and read the tables you want to fetch
* Check whether encryption or certificate settings are required
* Check firewall and allowlist rules
