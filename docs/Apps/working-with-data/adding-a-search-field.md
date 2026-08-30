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

1. Use the Table component's built-in search
2. Use a form field and filter bindings
3. Use a Data provider with a Dynamic filter

## Built-in table search

Add the columns you want to search in the Table component. Text columns show a search input automatically.

## Form field search

Use a text input and bind it into a Data provider filter when you need a custom search experience.

The common pattern is:

1. Add a Table
2. Add a text input in a Form
3. Bind the input value into the Table filter
4. Return all rows when the input is empty

## Dynamic filter search

Use a Data provider plus a Dynamic filter when you want users to choose their own filter columns and values.

## Related guide

* [Adding filtering](doc:searchfilter-data)
