---
title: Query Rows
excerpt: Pulling rows from a table
deprecated: false
hidden: false
metadata:
  title: ''
  description: ''
  robots: index
next:
  description: ''
---
Use the Query Rows action when an automation needs a filtered set of rows from a table.

## Configure the table

Choose the table first, then set the optional sort column, sort order, and limit values.

Budibase applies a maximum result limit:

| Internal DB | SQL DB |
| :-- | :-- |
| 1000 rows | 5000 rows |

## Add filters

Click `Define filters` to restrict the rows returned. Filters can use static values or [Bindings](doc:data-in-automations).

Use the **When filter empty** setting to decide what happens if a binding resolves to an empty value:

* Return all rows
* Return no rows

If you plan to loop over the result set and then update or delete those rows, make sure blank bindings do not return an unexpected set of records.

## Use the output

The output is available as `{{ steps.X.rows }}` where `X` is the Query Rows step number.

For example, `{{ steps.1.rows }}` returns the rows from the first Query Rows action. This is commonly used with [Loop](doc:looping).
