---
title: Multi-select
excerpt: Store multiple selected values in Budibase DB
deprecated: false
hidden: false
metadata:
  title: ''
  description: ''
  robots: index
next:
  description: ''
---
Use a multi-select column when a field should allow more than one value from a fixed list.

## Create a multi-select column

1. Open the table
2. Click `Create column`
3. Set the type to `Multi-select`
4. Add the allowed options
5. Save the column

## Use multi-select columns

Multi-select columns work well with the [Multi-select picker](doc:multi-select-picker) in forms.

Selected values appear as individual pills in tables and forms.

## Filtering

Use array-based filters when you need to match against multi-select values:

* `Contains`
* `Does not contain`
* `Has any`

Use `Contains` when all selected comparison values must be present.

Use `Has any` when only one matching value is required.

## Notes

* Multi-select columns are not convertible to other types
* They can still hold a single value or no value at all
