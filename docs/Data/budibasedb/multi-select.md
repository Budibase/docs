---
title: Multi-select
excerpt: Using the multiple options data type in Budibase
deprecated: false
hidden: false
metadata:
  title: ''
  description: ''
  robots: noindex
next:
  description: ''
---
In Budibase, there are two data types that allow a value to be set from a list of options.

The first is the [Options](https://docs.budibase.com/docs/text#options) type, which is compatible with the _Text_ data type, and only allows a single option to be chosen.

The **Multi-select** type is similar to the options type, but it allows you to select multiple options, and is not convertible to any other type. You can still select a single option or none at all.

A common use of the multi-select data type is to pair it with the [Multi-select picker](doc:multi-select-picker) in your [Forms](doc:forms).



[block:image]
{
  "images": [
    {
      "image": [
        "https://files.readme.io/1763d01-Screenshot_2023-02-17_at_11.01.51.png",
        null,
        "Multi-select column"
      ],
      "align": "center",
      "caption": "Multi-select column"
    }
  ]
}
[/block]

[block:image]
{
  "images": [
    {
      "image": [
        "https://files.readme.io/78651d6-Screenshot_2023-02-17_at_11.03.02.png",
        null,
        "Selecting multiple options"
      ],
      "align": "center",
      "caption": "Selecting multiple options"
    }
  ]
}
[/block]

When a multi-select value is saved to a data table, the values will be presented in individual grey pills:

[block:image]
{
  "images": [
    {
      "image": [
        "https://files.readme.io/b014e7a-Screenshot_2023-02-17_at_11.04.57.png",
        null,
        "Multi-select row presenting two selected options"
      ],
      "align": "center",
      "caption": "Multi-select row presenting two selected options"
    }
  ]
}
[/block]

<br />

## Filtering

A number of array based [filters](doc:searchfilter-data) are available when using a multi-select.  

### Contains

>  The multi-select value must contain all of the selected comparison options.

| Filter                                                                              | Result                                                                              |
| :---------------------------------------------------------------------------------- | :---------------------------------------------------------------------------------- |
| <img src="https://files.readme.io/317c9e3-Screenshot_2023-02-17_at_11.34.16.png" /> | <img src="https://files.readme.io/396bdbf-Screenshot_2023-02-17_at_11.34.34.png" /> |
| <img src="https://files.readme.io/5369cde-Screenshot_2023-02-17_at_11.33.10.png" /> | <img src="https://files.readme.io/341dfb7-Screenshot_2023-02-17_at_11.27.31.png" /> |

<br />

### Does not contain

>  The multi-select value must not contain all of the selected comparison options.

#### Single value

| Filter                                                                              | Result                                                                              |
| :---------------------------------------------------------------------------------- | :---------------------------------------------------------------------------------- |
| <img src="https://files.readme.io/e412aa2-Screenshot_2023-02-17_at_11.41.56.png" /> | <img src="https://files.readme.io/24d1e2b-Screenshot_2023-02-17_at_11.42.51.png" /> |



#### Multiple values

Note that in this case only rows that have both _Senior_ AND _Manager_ are filtered out.

| Filter                                                                              | Result                                                                              |
| :---------------------------------------------------------------------------------- | :---------------------------------------------------------------------------------- |
| <img src="https://files.readme.io/17641c9-Screenshot_2023-02-17_at_11.48.05.png" /> | <img src="https://files.readme.io/ba333f1-Screenshot_2023-02-17_at_11.48.48.png" /> |



<br />

### Has any

> The multi-select value contains any of the selected comparison options.



[block:image]
{
  "images": [
    {
      "image": [
        "https://files.readme.io/81b44e9-Screenshot_2023-02-17_at_11.52.37.png",
        null,
        null
      ],
      "align": "center",
      "caption": "Has any: Senior or Manager"
    }
  ]
}
[/block]

[block:image]
{
  "images": [
    {
      "image": [
        "https://files.readme.io/a3be46b-Screenshot_2023-02-17_at_11.53.32.png",
        null,
        null
      ],
      "align": "center",
      "caption": "Result"
    }
  ]
}
[/block]