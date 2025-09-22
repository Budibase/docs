---
title: Candlestick Chart
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
The CandleStick chart is a chart type often used in Financial charts. You can configure both a bar and a line on the same row.
[block:image]
{
  "images": [
    {
      "image": [
        "https://files.readme.io/8c633da-candlestick.png",
        "candlestick.png",
        1886,
        782,
        "#ede3df"
      ]
    }
  ]
}
[/block]
There's a lot of data being displayed on a single column, so when you want to use this graph you need to have access to 4 different [Numeric](doc:number) data-points per column. This could also be a great candidate to transform the data through [Views](doc:views) when you want to do some calculation based on data points you have in your database.
[block:api-header]
{
  "title": "Adding a Candlestick Chart"
}
[/block]
To add the Candlestick chart, first place a [Data Provider](doc:data-provider) and add the chart nested to it. To add the chart, click `Chart > Candlestick Chart`
[block:image]
{
  "images": [
    {
      "image": [
        "https://files.readme.io/6f9d686-add-candlestick-chart.png",
        "add-candlestick-chart.png",
        234,
        306,
        "#2a2a2b"
      ]
    }
  ]
}
[/block]

[block:api-header]
{
  "title": "Displaying data"
}
[/block]
Now that the Candlestick chart has been added to the UI, you can display data. For this type of chart you'll need 4 types of [Numeric](doc:number) datapoints. 

These 4 data points, or `columns`, are for the following fields:
[block:parameters]
{
  "data": {
    "h-0": "Setting",
    "h-1": "Description",
    "0-0": "Open",
    "1-0": "Close",
    "2-0": "High",
    "3-0": "Low",
    "0-1": "The opening for the `bar` inside the chart",
    "1-1": "The closing for the `bar` inside the chart",
    "2-1": "The high for the `line` inside the chart",
    "3-1": "The low for the `line` inside the chart"
  },
  "cols": 2,
  "rows": 4
}
[/block]

[block:callout]
{
  "type": "success",
  "title": "What determines the colour?",
  "body": "When colour will be red or green depending on the `open` and `close` values. If `close` is a lower number than `open`, the colour will be red. If the `close` is higher than the `open` then the colour will be green. This also applies to the line in the chart, not just the bar."
}
[/block]
The labels on the x-axis are supposed to be dates, this is a financial chart after all. So when picking the `Date column`, make sure you use a [Date/time](doc:datetime) field for best results.

There aren't a whole lot of other customization options in the <<glossary:Settings Panel>> for the Candlestick chart, but of course, there are some. You can find them in the reference table below.
[block:api-header]
{
  "title": "Settings panel"
}
[/block]

[block:callout]
{
  "type": "info",
  "title": "Data columns",
  "body": "There are 4 data column fields, which are explained in the `Displaying data` section above."
}
[/block]
Besides the settings already explained, there are a few which you can still configure in the <<glossary:Settings Panel>>.
[block:parameters]
{
  "data": {
    "h-0": "Setting",
    "h-1": "Description",
    "0-0": "Provider",
    "0-1": "The [Data Provider](doc:data-provider) as a parent of your chart",
    "1-0": "Format",
    "1-1": "Will divide by thousand or million on the axis and adds a `K` or `M` to the axis respectively",
    "2-0": "Y-axis Label\nX-axis label",
    "2-1": "The labels you want to display next to the Y and X-axis.",
    "3-0": "Width\nHeight",
    "3-1": "The size you want the chart to be, supports all CSS supported sizes",
    "4-0": "Animate",
    "4-1": "Will animate when the data changes or on startup. Data-change can happen through [Dynamic filter's](doc:dynamic-filter) for example."
  },
  "cols": 2,
  "rows": 5
}
[/block]