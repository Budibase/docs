---
title: Date range
excerpt: ''
deprecated: false
hidden: false
metadata:
  title: ''
  description: ''
  robots: noindex
next:
  description: ''
---
The Date Range component allows you to filter within a [Data Provider's](doc:data-provider) data-set, for example, everything in the past 7 days, or the last 3 months.
[block:image]
{
  "images": [
    {
      "image": [
        "https://files.readme.io/e0f6f23-date-range.png",
        "date-range.png",
        868,
        510,
        "#f7f7f7"
      ]
    }
  ]
}
[/block]

[block:api-header]
{
  "title": "Adding a date range"
}
[/block]
The `Date Range` component needs to have a [Data Provider](doc:data-provider) as a parent in order to have any functionality. 

To add the `Date Range` component, click `Form > Date Range`
[block:image]
{
  "images": [
    {
      "image": [
        "https://files.readme.io/b6fd48e-add-date-range.png",
        "add-date-range.png",
        370,
        302,
        "#404040"
      ]
    }
  ]
}
[/block]

[block:api-header]
{
  "title": "Connection to a Data Provider"
}
[/block]
To initiate the connection to a data provider, choose the parent [Data Provider](doc:data-provider) in the <<glossary:Settings Panel>>, after which you can select the table column/field the filter should be applied to. Note that only date/time data fields function with the `Date Range` component. In this section you also choose the default selected preset.
[block:image]
{
  "images": [
    {
      "image": [
        "https://files.readme.io/0cb900a-date-range-settings-panel.png",
        "date-range-settings-panel.png",
        494,
        406,
        "#363636"
      ]
    }
  ]
}
[/block]
After you've connected it correctly, it will start working immediately. There is no further configuration required.