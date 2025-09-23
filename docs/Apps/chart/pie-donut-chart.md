---
title: Pie & Donut Chart
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
The Pie and Donut Charts are both circular charts. They're great in visualizing percentages, like how much of a pie you're going to get. 

They both behave and look the same, with the exception of the shape. The Donut Chart has a hole in the middle, where the Pie chart does not. 

[block:image]
{
  "images": [
    {
      "image": [
        "https://files.readme.io/198da10-pie-donut-chart.png",
        "pie-donut-chart.png",
        1856
      ],
      "align": "center",
      "caption": "Comparison of the Pie Chart (left) and the Donut Chart (right)"
    }
  ]
}
[/block]

## Adding a Pie or Donut Chart

To add a Pie or Donut chart, head over to the design section in the Budibase UI. Then, you'll need a wrapping [Data Provider](doc:data-provider). After you've added the data provider, add a `Chart > Pie Chart` or `Chart > Donut Chart` to the design as a child of the data provider. This should connect your chart to the database directly.

![](https://files.readme.io/c330098-Screenshot_2023-07-04_at_13.42.13.png)

Then, in the <<glossary:Settings Panel>>, you will want to configure how to display the data. This kind of chart is probably often filled with data coming from a [View](doc:views), but can of course be connected directly to a table as well.

First, in the `Label column` setting, you want to select which column represents the label of the data you want to display, then in the `Data column` you want to select the column which represents data in a [Number](doc:number) format to display in the chart. Once this is done, your chart should already be ready to view!

For more customization, check the reference table below.

## Settings panel

The settings panel has quite a few customization options, allowing you to get the most out of your pie or donut chart.

[block:parameters]
{
  "data": {
    "h-0": "Setting",
    "h-1": "Description",
    "0-0": "Provider",
    "0-1": "The [Data Provider](doc:data-provider) as a parent of your chart",
    "1-0": "Label Column",
    "1-1": "The Labels you want to display with your data. These are displayed on the legend",
    "2-0": "Data Column",
    "2-1": "The data you want to display as the segments. This has to be [numeric.](doc:number)",
    "3-0": "Colours",
    "3-1": "Choose from one of the predefined colour-palettes",
    "4-0": "Width  \nHeight",
    "4-1": "The size you want the chart to be, supports all CSS supported sizes",
    "5-0": "Data Labels",
    "5-1": "Shows the percentage of each section on the segment.",
    "6-0": "Animate",
    "6-1": "Will animate when the data changes or on startup. Data-change can happen through [Dynamic filter's](doc:dynamic-filter) for example.",
    "7-0": "Legend",
    "7-1": "Will display, in the upper-right corner, the label for each of the data columns displayed on the chart"
  },
  "cols": 2,
  "rows": 8,
  "align": [
    "left",
    "left"
  ]
}
[/block]