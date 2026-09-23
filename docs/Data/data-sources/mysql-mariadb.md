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

1. Open the **Data tables** link
2. Add a new source
3. Choose `MySQL / MariaDB`
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

For hosted databases, copy these values from your database provider. For self-hosted databases, make sure the database server accepts remote connections from Budibase.

If Budibase Cloud is connecting to your database, allow the Budibase IP addresses through your database firewall. See [Whitelisting](doc:whitelisting).

If Budibase is running in Docker and the database is on the same machine, `localhost` points to the Budibase container, not your host machine. Use `host.docker.internal`, or `172.17.0.1` on Linux.

## Fetch tables

Fetch only the tables you need. You can fetch more tables later if the schema changes.

## Define relationships

Add relationships after you fetch the tables.

Use one-to-many relationships for foreign keys and many-to-many relationships when your schema includes a join table.

If Budibase rejects a join table, update the source table so the foreign key columns are nullable, then fetch the table again.

## Custom queries

Use a custom query when you need joins, grouped results, or write actions from a form or button.

See [Working with SQL datasources](doc:sql-workflow) for the shared workflow after the connection is in place.

## Troubleshooting

If Budibase cannot connect:

* Confirm the database is reachable from the Budibase server or Budibase Cloud
* Check that the host and port are correct
* Confirm the user has permission to connect to the database and read the tables you want to fetch
* Check whether SSL is required by your provider
* Check firewall and allowlist rules
