---
title: Datasources
excerpt: Connecting Budibase to databases and APIs
deprecated: false
hidden: false
metadata:
  title: ''
  description: ''
  robots: index
next:
  description: ''
---
Budibase can store your data inside the [native internal database](doc:budibasedb) (CouchDB). This is the default datasource unless you opt to connect another datasource to Budibase.

Budibase supports connection to a range of remote datasources. More information about connecting Budibase to each of these datasources is nested in this section of the documentation.

Furthermore, if a datasource you want to use is missing, it is possible to build a [custom datasource](https://docs.budibase.com/docs/custom-datasource).

## Schema

When [Fetching tables](https://docs.budibase.com/docs/sql-datasource#fetching-tables) from external SQL databases, Budibase matches the external data types to the internal [Budibase DB](https://docs.budibase.com/docs/budibasedb) types.

For other basic datasources and [Custom queries](https://docs.budibase.com/docs/data-sources#custom-queries), the schema is determined by the types in the query output.

The schema is important, as it will affect how [sorting and filtering](https://docs.budibase.com/docs/data-provider#pagination-and-sorting) is applied in the design section.

## Sample data

Budibase includes sample data so new users can explore the available [data types](https://docs.budibase.com/docs/budibasedb#data-types) and build an app quickly. It stays separate from the internal DB tables you create.

If you do not need this data, it can easily be removed in the same way as other additional datasources. Simply click on the ellipsis to the right of the sample data source and click *Delete*.

## Security

When connecting to an external datasource you must allow Budibase access. Datasources are usually protected by a firewall, so you may need to whitelist the Budibase cloud or your self-hosted Budibase server.

## Custom queries

Budibase supports custom queries for advanced joins and server-side filtering.

To write one, open a datasource and go to the **Queries** section.

> 📘 Budibase DB
>
> The internal Budibase DB does not support custom queries. It does support [views](https://docs.budibase.com/docs/views).

Use `Read` queries with a [Data provider](doc:data-provider).

Use `Execute Query` for create, update, or delete actions.

Add bindings when the query needs dynamic values, and use the query settings to override defaults at runtime.

You can edit, duplicate, or delete queries from the datasource list.

For the standard SQL workflow, see [Working with SQL datasources](doc:sql-workflow).
