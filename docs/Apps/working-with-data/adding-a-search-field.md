---
title: Adding search
excerpt: How to add and connect a search field to your data within Budibase
deprecated: false
hidden: false
metadata:
  title: ''
  description: ''
  robots: index
next:
  description: ''
---
Use search when users need to narrow table data quickly.

There are three common patterns:

1. Search a column directly in a Table
2. Bind a form field to a filter
3. Add a Filter component

## Built-in table search

Use the Table's built-in search for a quick, single-column search. Hover over a
searchable column and select the magnifying glass. Enter a value in the search
field that appears in the column header.

The control depends on the field type. For example, text fields use a search
input, while option fields use a picker.

## Form field search

Use a form field and a filter binding when you need a search input outside the
Table or want to control its label, placeholder, and layout.

To configure a text search:

1. Add a Table
2. Add a text input in a Form
3. Open the Table's `Filtering` setting
4. Add a filter for the column you want to search
5. Select the `Like` operator for partial text matches
6. Bind the filter value to the form field
7. Set the empty-filter behavior to return all rows

You can use the same pattern with a Data provider by configuring its filter
instead of the Table's filter.

## Filter component

Use a Filter component when users should be able to choose or combine filters:

1. Add a Filter component
2. Select the Table or Data provider in `Target component`
3. Configure the fields users can filter
4. Choose the default filter operator

You can also allow users to clear their filters or persist their choices across
page reloads.

## Related guide

* [Adding filtering](doc:searchfilter-data)
