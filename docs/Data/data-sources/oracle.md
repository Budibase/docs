---
title: Oracle
excerpt: Connect an Oracle database as a datasource
deprecated: false
hidden: false
metadata:
  title: ''
  description: ''
  robots: index
next:
  description: ''
---
Use Oracle when you want Budibase to connect to an existing Oracle database.

Budibase supports Oracle 12.1 and later in Thin mode and Oracle 11.2 and later in Thick mode.

## Connect the datasource

1. Open the **Data tables** link
2. Add a new source
3. Choose `Oracle`
4. Enter the connection details
5. Fetch the tables you want to use

## Connection details

You will usually need:

* Host
* Port
* Service name or SID
* Username
* Password
* Oracle mode, if your deployment needs a specific connection mode

For hosted databases, copy these values from your database provider. For self-hosted databases, make sure the Oracle listener accepts connections from Budibase.

If Budibase Cloud is connecting to your database, allow the Budibase IP addresses through your database firewall. See [Whitelisting](doc:whitelisting).

If Budibase is running in Docker and the database is on the same machine, `localhost` points to the Budibase container, not your host machine. Use `host.docker.internal`, or `172.17.0.1` on Linux.

## Fetch tables

Fetch only the tables you need. You can fetch more tables later if the schema changes.

## Define relationships

Add relationships after you fetch the tables.

Use one-to-many relationships for foreign keys and many-to-many relationships when your schema includes a join table.

If Budibase rejects a join table, adjust the source tables and fetch them again.

## Custom queries

Use custom queries for joins, grouped results, or write actions from a form or button.

See [Working with SQL datasources](doc:sql-workflow) for the shared workflow after the connection is in place.

## Troubleshooting

If Budibase cannot connect:

* Confirm the database is reachable from the Budibase server or Budibase Cloud
* Check that the host, port, and service name or SID are correct
* Confirm the user has permission to connect to the database and read the tables you want to fetch
* Check firewall and allowlist rules
