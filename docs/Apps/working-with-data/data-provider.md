---
title: Data provider
excerpt: ''
deprecated: false
hidden: false
metadata:
  title: ''
  description: kba_5hbya
  robots: index
next:
  description: ''
  pages:
    - type: basic
      slug: repeater
      title: Repeater
---
Use the Data provider to make data available to components on a screen.

Components do not need to be nested inside a Data provider to use it. Select
the provider from the component's data settings.

## Choose a source

Add a Data provider to the screen, then select a datasource from the `Data`
dropdown. Sources include:

* Budibase DB tables
* SQL datasources
* Custom queries
* REST queries
* Another Data provider on the screen

Reusing an existing provider is useful when multiple components need the same
data.

## Configure results

Use the Data provider to:

* Set sort column and sort order
* Limit the number of rows returned
* Paginate through results
* Add filters

The limit sets the maximum number of rows returned per page. When the source
supports pagination, the provider displays controls for moving between pages.

### Server-side and client-side operations

For table sources, including Budibase DB and SQL tables, filtering, sorting,
limits, and pagination are applied by the server.

Pagination for custom and REST queries is available only when it is configured
on the underlying query. Data provider filters and sorting are applied in the
browser to the rows returned by these queries. For a paginated query, this means
filtering and sorting apply only to the current page. For large datasets, add
filtering and sorting parameters to the underlying query instead.

## Filtering

Use `Define filters` to restrict the rows returned.

Filtering supports:

* Static values
* Bindings
* `Match all` and `Match any` groups

If a filter uses a binding and the binding is empty, you can choose whether to
return all rows or no rows. See [Adding filtering](doc:searchfilter-data) for
more filtering patterns.

## Refresh data

Use `Auto-refresh` to rerun the provider at a set interval. Auto-refresh is a
premium feature.

To refresh data in response to an interaction, use the `Refresh Data Provider`
action and select either this provider or all providers.

## Use provider bindings

A Data provider exposes the following values for bindings on the screen:

* `Rows` - the rows returned for the current page
* `Rows Length` - the number of rows currently returned
* `Schema` - field information for the selected source
* `Page Number` - the current page, starting at 1
