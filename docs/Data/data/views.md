---
title: Views
excerpt: Create filtered or grouped views from table data
deprecated: false
hidden: false
metadata:
  title: ''
  description: kba_5hfr6
  robots: index
next:
  description: ''
---
Use views when you want to present table data with a preset filter, sort order, or grouping.

Views are virtual tables. They do not change the underlying data.

## Create a view

1. Open the table.
2. Click `Create view`.
3. Give the view a name.
4. Add any filters, sorting, grouping, or hidden columns you need.
5. Save the view.

You can also save a filtered table directly as a new view.

## Use views

Use views when you need to:

* Focus on a subset of rows
* Hide or sort data without changing the source table
* Sort with one or more columns
* Reuse the same filtered dataset in screens or repeaters

## View calculations

View calculations let you aggregate data from a table.

Supported calculations include:

* Average
* Sum
* Minimum
* Maximum
* Count

Use grouping when you want one result per category instead of a single total.

## Track usage

Use the **Screens** button in the Data toolbar to see where a view or view calculation is used.

This helps you understand the impact before changing or deleting it.

## Notes

* Views can be used as data sources in the Design section
* View calculations are not supported by Generate app screen
* If you rename or delete a column used by a view filter, update or remove the filter
* Budibase fails closed when a filtered column is no longer valid, so the view returns no rows until it is fixed
