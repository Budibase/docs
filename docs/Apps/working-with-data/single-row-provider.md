---
title: Single Row Provider
excerpt: Like a [Data provider](doc:data-provider), only more targeted.
deprecated: false
hidden: false
metadata:
  description: kba_5hc76
  robots: index
---
Use a Single Row Provider to fetch one row from a datasource using an `_id`.

This is useful when a screen or modal needs the details for one selected record.

## Setup

1. Add a [Data provider](doc:data-provider)
2. Set the provider to the table you want to read from
3. Add a Single Row Provider inside the screen or modal
4. Set the Single Row Provider datasource to the same table
5. Bind the Row ID to the selected row value or URL variable

## Display values

Add text or other display components inside the Single Row Provider.

Use the bindings drawer to access the columns from the returned row.

## Common use

Single Row Providers are commonly used for:

* Detail modals
* Edit forms
* Selected-row summaries
* Chart drilldowns

## Related pages

* [Data provider](doc:data-provider)
* [Repeater](doc:repeater)
