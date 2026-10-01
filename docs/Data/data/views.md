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

### Deleting or renaming filtered columns

If you delete or rename a column that is currently used in a View filter, Budibase will display a warning in the deletion modal. 

When a filter references a column that no longer exists:
* **Data Safety**: The View will "fail closed," meaning it will return no rows. This prevents potentially sensitive data from being exposed due to a missing filter condition and prevents errors on external databases.
* **UI Indicator**: In the Filter Builder, the invalid field will be highlighted with a warning icon and a tooltip: *"This field may have been deleted or renamed. No rows will be returned until it is updated or removed."*

To resolve this, you must update the filter to reference a valid column or remove the stale filter entirely.

## Sorting

Views support both single and multi-column sorting, allowing you to establish a hierarchy for how your data is displayed.

### Multi-column sorting

Multi-column sorting allows you to sort by one column, and then by another for rows where the first column has identical values. To configure sorting:

1. Click the **Sort** button in the data toolbar.
2. Select your first **Column** and the desired **Order** (e.g., Ascending or Descending).
3. Click **Add sort** to define a secondary sorting rule.
4. You can continue adding sort levels to further refine the order of your data.
5. Use the **X** icon next to a sort rule to remove it.

## View Calculations

View calculations allow you to run certain mathematical operations on your data, akin to those available in traditional SQL-based databases.

* Average - find the [arithmetic mean-average ](https://en.wikipedia.org/wiki/Mean) column's values, (optionally) grouped by a column.
* Sum - find the sum-total of a column's values, (optionally) grouped by a column.
* Minimum - find the minimum value of a column's values, (optionally) grouped by a column.
* Maximum - find the maximum value of a column's values, (optionally) grouped by a column.
* Count - count how many occurrences of each value a column contains, (optionally) grouped by a column.

### Average, Sum, Minimum, and Maximum

Average, Sum, Minimum, and Maximum must all be performed on number columns. When used independently they will return a single row, and when used in conjunction with a "Group By" they will return a row for each unique value in the group by column.

Columns supported for "Group By" include standard fields (Text, Number, Options, etc.) and **Static Formula** fields. Dynamic formulas are not supported for grouping.

For example - "Sum Total Revenue" configured as "Calculate the `Sum` of `Total Revenue` Group By `None`" will return a single row, totalling all revenue.

The first example returns a single total for all revenue without any grouping.

The second example shows the same calculation with a group applied to the result.

Grouping by Sales Channel will return a row for each unique value in the Sales Channel column (Offline and Online)

The grouped result returns one row for each Sales Channel, such as Offline and Online.

Grouping by Region, Country, Sales Channel and Order Priority will, again, return a new row for each unique combination of those attributes, and calculate the sum of Total Revenue for each combination. Naturally, the more specific the calculations become, the more granular the data, the more rows are returned. 

This example returns 731 rows in total.

### Count

The *Count* calculation can be used to find how many rows meet the specified criteria. Using "Calculate the `Count` of `Order ID` Group By `Country`" we can see how many unique Order IDs there are per country.

The count is grouped by country to show how many unique Order IDs exist in each one.

We can then *Group by* additional criteria to refine the data further. For example grouping by country *and* sales channel will show us how many online and offline sales were made per country.

Adding sales channel to the grouping breaks the counts down by both country and channel.

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
