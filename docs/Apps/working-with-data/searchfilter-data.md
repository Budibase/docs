---
title: Adding filtering
excerpt: ''
deprecated: false
hidden: false
metadata:
  title: ''
  description: kba_5hc5e
  robots: index
next:
  description: ''
---
Use filtering when the screen should only show a subset of rows.

## Dynamic filtering

Use the Dynamic filter component with a Table and Data provider when you want users to build their own filters in the UI.

## Static filtering

Use the Data provider filter drawer when the filter values are known ahead of time or controlled by bindings.

Common filter uses include:

* Exact matches
* Partial text matches
* Range filters
* Multiple conditions across one or more columns

## Front-end filters

Add form inputs and bind them into Data provider filters when users should control the filter values on the screen.

This is useful for search bars, range filters, and other interactive filtering controls.

## Filter groups

Filter groups let you decide whether rows must match all filters or any filter.

When a filter uses a binding and that binding is empty, choose whether to return all rows or no rows.

## Related guide

* [Adding search](doc:adding-a-search-field)
