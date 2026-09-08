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
