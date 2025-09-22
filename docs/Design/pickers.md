---
title: Pickers
excerpt: Selecting values from a range of options
deprecated: false
hidden: false
metadata:
  title: ''
  description: ''
  robots: index
next:
  description: ''
---
All pickers are [Form](doc:forms) components that cover a range of data types. 

In addition, each picker can perform an [Action](doc:actions) when an item is selected through the [On Change](https://docs.budibase.com/docs/form-actions#on-change) event. 

This page will summarise the five available pickers within Budibase.

## Options and Multi-select pickers

There are three [available data sources](https://docs.budibase.com/docs/option-picker#displaying-options-in-the-options-picker) for dropdown lists in Budibase. 

The [Options Picker](doc:option-picker) only allows the user to select a single item, whereas the [Multi-select Picker](doc:multi-select-picker) allows a user to select many. 

## Relationship picker

The [Relationship picker](doc:filter-by-relationships) should always be used to handle [Relationship](doc:relationships) fields.

## Date picker

The [Date Picker](doc:date-picker) allows a user to select a [Date/Time](https://docs.budibase.com/docs/datetime) from a pop-up calendar.

## User Field

A special field type that only works with the [User](doc:users-1) data type. If the _Allow multiple users_ is selected, then it will automatically allow multiple selections, otherwise only one user can be chosen.

It can also be optionally searched on the users email address.

[block:image]
{
  "images": [
    {
      "image": [
        "https://files.readme.io/8342404-Screenshot_2023-11-03_at_16.45.55.png",
        "",
        "Adding a user field"
      ],
      "align": "center",
      "caption": "Adding a user field"
    }
  ]
}
[/block]