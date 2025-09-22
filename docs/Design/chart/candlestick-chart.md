---
title: Candlestick Chart
excerpt: ''
deprecated: false
hidden: false
metadata:
  title: ''
  description: ''
  robots: index
next:
  description: ''
---
The Candlestick chart is a chart type often used in financial charts. You can configure both a bar and a line on the same row.

![](https://files.readme.io/8c633da-candlestick.png "candlestick.png")

There's a lot of data being displayed on a single column, so when you want to use this graph you need to have access to four different [Numeric](doc:number) data-points per column. This could also be a great candidate to transform the data through [Views](doc:views) when you want to do some calculation based on data points you have in your database.

## Adding a Candlestick Chart

To add the Candlestick chart, first place a [Data Provider](doc:data-provider) and add the chart nested to it. To add the chart, click `Chart > Candlestick Chart`

![](https://files.readme.io/6f9d686-add-candlestick-chart.png "add-candlestick-chart.png")

## Displaying data

Now that the Candlestick chart has been added to the UI, you can display data. For this type of chart you'll need 4 types of [Numeric](doc:number) datapoints. 

These 4 data points, or `columns`, are for the following fields:

| Setting | Description                                |
| :------ | :----------------------------------------- |
| Open    | The opening for the `bar` inside the chart |
| Close   | The closing for the `bar` inside the chart |
| High    | The high for the `line` inside the chart   |
| Low     | The low for the `line` inside the chart    |

> 👍 What determines the colour?
> 
> When colour will be red or green depending on the `open` and `close` values. If `close` is a lower number than `open`, the colour will be red. If the `close` is higher than the `open` then the colour will be green. This also applies to the line in the chart, not just the bar.

The labels on the x-axis are supposed to be dates, this is a financial chart after all. So when picking the `Date column`, make sure you use a [Date/time](doc:datetime) field for best results.

There aren't a whole lot of other customization options in the <<glossary:Settings Panel>> for the Candlestick chart, but of course, there are some. You can find them in the reference table below.

## Settings panel

> 📘 Data columns
> 
> There are 4 data column fields, which are explained in the `Displaying data` section above.

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
    "2-0": "Y-axis Label  \nX-axis label",
    "2-1": "The labels you want to display next to the Y and X-axis.",
    "3-0": "Width  \nHeight",
    "3-1": "The size you want the chart to be, supports all CSS supported sizes",
    "4-0": "Animate",
    "4-1": "Will animate when the data changes or on startup. Data-change can happen through [Dynamic filter's](doc:dynamic-filter) for example."
  },
  "cols": 2,
  "rows": 5,
  "align": [
    "left",
    "left"
  ]
}
[/block]