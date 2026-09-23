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

1. Open the **Data tables** link
2. Add a new source
3. Choose `PostgreSQL`
4. Enter the connection details
5. Fetch the tables you want to use

## Connection details

You will usually need:

* Host
* Port
* Database name
* Username
* Password
* SSL settings, if your database requires SSL

For hosted databases, copy these values from your database provider. For self-hosted databases, make sure the PostgreSQL server accepts remote connections from Budibase.

If Budibase Cloud is connecting to your database, allow the Budibase IP addresses through your database firewall. See [Whitelisting](doc:whitelisting).

If Budibase is running in Docker and the database is on the same machine, `localhost` points to the Budibase container, not your host machine. Use `host.docker.internal`, or `172.17.0.1` on Linux.

## Fetch tables and define relationships

Fetch only the tables you need, then add relationships for the joins you want to reuse in screens and bindings.

Use one-to-many relationships for foreign keys and many-to-many relationships when your schema includes a join table.

## Custom queries

Use custom queries for joins, grouped results, or write actions from a form or button.

See [Working with SQL datasources](doc:sql-workflow) for the shared workflow after the connection is in place.

## Troubleshooting

If Budibase cannot connect:

* Confirm the database is reachable from the Budibase server or Budibase Cloud
* Check that the host and port are correct
* Confirm the user has permission to connect to the database and read the tables you want to fetch
* Check whether SSL is required by your provider
* Check firewall and allowlist rules
