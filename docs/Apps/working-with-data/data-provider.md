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

Data providers can supply data to:

* Tables
* Charts
* Repeaters
* Options pickers
* Other blocks that read from a data source

## Choose a source

Select a datasource from the `Data` dropdown. You can use:

* Budibase DB tables
* SQL datasources
* Custom queries
* REST queries

## Configure results

Use the Data provider to:

* Set sort column and sort order
* Limit the number of rows returned
* Paginate through results
* Add filters

## Filtering

Use `Define filters` to restrict the rows returned.

Filtering supports:

* Static values
* Bindings
* Multiple filter groups

If a filter uses a binding and the binding is empty, you can choose whether to return all rows or no rows.

## Use with other components

Use a Data provider when multiple components need the same source data. If possible, reuse one provider instead of creating several similar queries.
