---
title: Date range
excerpt: ''
deprecated: false
hidden: false
metadata:
  title: ''
  description: ''
  robots: index
next:
  description: Looking for Date Pickers?
  pages:
    - type: basic
      slug: date-picker
      title: Date picker
---
The Date Range component allows you to filter within a [Data Provider's](doc:data-provider) data-set, for example, everything in the past 7 days, or the last 3 months.

![](https://files.readme.io/e0f6f23-date-range.png "date-range.png")

## Adding a date range

The `Date Range` component needs to have a [Data Provider](doc:data-provider) as a parent in order to have any functionality. 

To add the `Date Range` component, click `Form > Date Range`

[block:image]
{
  "images": [
    {
      "image": [
        "https://files.readme.io/298f675faf999a263f43e194c750434e1f8c2adc1829974155711d9700fe75a5-Screenshot_2025-08-21_at_12.49.20.png",
        null,
        null
      ],
      "align": "center"
    }
  ]
}
[/block]


## Connection to a Data Provider

To initiate the connection to a data provider, choose the parent [Data Provider](doc:data-provider) in the <<glossary:Settings Panel>>, after which you can select the table column/field the filter should be applied to. Note that only date/time data fields function with the `Date Range` component. In this section you also choose the default selected preset.

[block:image]
{
  "images": [
    {
      "image": [
        "https://files.readme.io/8f76fda8a8a7999f347110584a6a591598fe9ac6d7a502d6b6cb3d35fe95cb7b-Screenshot_2025-08-21_at_12.58.29.png",
        "date-range-settings-panel.png",
        null
      ],
      "align": "center"
    }
  ]
}
[/block]