---
title: SQL troubleshooting
excerpt: Troubleshooting issues with your SQL database
deprecated: false
hidden: false
metadata:
  title: ''
  description: kba_5hjsy
  robots: index
next:
  description: ''
---
This section covers common SQL troubleshooting steps. If you need help, raise an [issue on GitHub](https://github.com/Budibase/budibase/issues/new?assignees=\&labels=bug\&projects=\&template=bug_report.md\&title=).

## Minimum SQL versions

Budibase has minimum database version requirements for search and related features. For Budibase 2.31 and later, use at least:

1. SQL Server - SQL Server 2016 and onwards
2. MySQL - MySQL 8.0 and onwards
3. MariaDB - MariaDB 10.6 and onwards
4. Oracle - Oracle Database 19c and onwards
5. Postgres - Postgres 9.4 and onwards

These requirements are mainly for aggregate functions and Common Table Expressions (CTEs).

Other compatible databases may work, but we cannot guarantee future support. If you need guaranteed support, contact [sales](https://budibase.com/contact/).

## Log SQL queries

> 📘 SQL query logging
>
> This feature is designed for investigating issues with Budibase accessing data in your SQL database, we recommend only enabling this when needed and disabling in production environments.

You can log the queries Budibase sends to your SQL database to investigate issues or performance problems. This is only available in self-hosted environments. Set `SQL_LOGGING_ENABLE=1` on your app services or on the container if you are using the single image. After restarting, queries are logged in a format like:

`[SQL] [PG] query="select * from table limit $1" values="100"`

## SQL Schema export

> 📘 Schema export is designed for debugging
>
> This feature is designed to help the Budibase team resolve issues with your schema - we want to provide the best experience possible for every user out of the box and providing your schema helps to debug issues with typing, relations and other unique scenarios.

You can export your database schema through Budibase to help debug issues. You can also do this manually with tools such as `pg_dump` for Postgres, but Budibase includes a schema export that is easier to use for support cases. The export contains only table structure and schema, not data. If you have sensitive table or column names, discuss that with the Budibase team.

The export is useful for debugging, but it is not intended to reproduce your data in a production environment.

## Exporting your schema

This feature is currently available only for self-hosted instances of Budibase.

To export your schema, open the affected datasource from the Data section of the app builder, then open the datasource **Settings** tab. This is only available for SQL-based datasources.

Click the download button to export the schema. The export includes all accessible tables, not just the ones imported into Budibase.

The resulting file is named something like `PostgresSQL-dump.sql`. You can open it to inspect the schema.

The export includes your table and column names. If you do not want to share it publicly, email it to [support@budibase.com](mailto:support@budibase.com) and include a reference to the issue or discussion.
