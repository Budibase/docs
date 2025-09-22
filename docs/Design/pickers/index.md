---
title: Pickers
excerpt: Selecting values from a range of options
deprecated: false
hidden: false
metadata:
  title: ''
  description: ''
  robots: noindex
next:
  description: ''
---
All pickers are [Form](doc:forms) components that cover a range of data types. 

In addition, each picker can perform an [Action](doc:actions) when an item is selected through the [On Change] ([https://docs.budibase.com/docs/actions#on-change](https://docs.budibase.com/docs/actions#on-change)) event. 

This page will summarise the four available pickers within Budibase.

## Options and Multi-select pickers

There are three \[available data sources] ([https://docs.budibase.com/docs/option-picker#displaying-options-in-the-options-picker](https://docs.budibase.com/docs/option-picker#displaying-options-in-the-options-picker)) for dropdown lists in Budibase. 

The [Options Picker](doc:option-picker) only allows the user to select a single item, whereas the [Multi-select Picker](doc:multi-select-picker) allows a user to select many. 

## Relationship picker

This picker should always be used to handle [Relationship](doc:relationships) fields.

Whilst also a dropdown list, it enforces select one or many options depending on whether the relationship is defined as one or many.\
Furthermore, the options will automatically be populated with the rows of the related table.

The label column will match the \[display column] ([https://docs.budibase.com/docs/budibasedb#selecting-the-display-column](https://docs.budibase.com/docs/budibasedb#selecting-the-display-column)) of the related table.\
The value column will be the **\_id** of the selected relationship row(s).  

> 🚧 Filter by relationships
>
> You cannot filter by relationship when using the Budibase DB.\
> External SQL data sources, on the other hand, can be filtered by relationship.

## Date picker

The [Date Picker](doc:date-picker) allows a user to select a me] (https: ([https://docs.budibase.com/docs/datetime](https://docs.budibase.com/docs/datetime)) from a pop-up calendar.
