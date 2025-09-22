---
title: Histogram Chart
excerpt: Visualising buckets of data
deprecated: false
hidden: false
metadata:
  title: ''
  description: ''
  robots: index
next:
  description: ''
---
A histogram allows you to display the frequency of data within ranges, known as buckets. For example, here is a histogram showing the frequency of sales for different unit cost buckets.

[block:image]
{
  "images": [
    {
      "image": [
        "https://files.readme.io/b1afa26-Screenshot_2023-08-21_at_10.29.58.png",
        "",
        ""
      ],
      "align": "center"
    }
  ]
}
[/block]

## Displaying data

Add the **Chart Block** or a [Data provider](doc:data-provider) to your screen, and select the data source, which could be a table, view, or [Custom query](https://docs.budibase.com/docs/data-sources#custom-queries). Apply any limits or filtering to the data source that you want.

Next in the <<glossary:Settings Panel>> of the histogram component, select the _Value column_. This field must be a [Number](doc:number), and will determine the range for each bucket. 

The number of buckets can be adjusted by the _Bucket count_. A checkbox is also available to determine if you want your Histogram to be displayed horizontally or vertically. You can provide labels for the x and y axis.



[block:image]
{
  "images": [
    {
      "image": [
        "https://files.readme.io/99f3d8a-Screenshot_2023-08-21_at_11.08.16.png",
        "",
        ""
      ],
      "align": "center"
    }
  ]
}
[/block]