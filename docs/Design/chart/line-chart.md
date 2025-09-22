---
title: Line Chart
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
The Line Chart component is an easy way to visualize progression easily. For example, if you want to plot the amount of applications you have received per day, you could get something like this.

![](https://files.readme.io/cd70c88-applications-per-day.png "applications-per-day.png")

## Adding a Line Chart

To add a line chart, head over to the design section in the Budibase UI. Then, you'll need a wrapping [Data Provider](doc:data-provider). After you've added the data provider, add a `Chart > Line Chart` to the design as a child of the data provider. This should connect your chart to the database directly.

![](https://files.readme.io/c5b76f9-Screenshot_2023-07-04_at_13.41.35.png)

Then, in the <<glossary:Settings Panel>> you will be able to configure your chart to display exactly what you want. First, you want to select the correct [Data Provider](doc:data-provider), if you have more than one as a parent. The second step is to select a `Label column`. The Label Column defines the labels on your X-axis. Lastly, you'll want to select a `Data column`. This column will represent the data drawn in the chart. For this to work the column will of course have to be numeric. 

And that's it, you have your line chart. Want to understand all the possible customization settings? Check the reference below.

> 📘 Numeric data only
> 
> Of course, line charts need to have a scale, so for the data column(s), you can only select [Numeric](doc:number) columns

## Settings panel

The settings panel has quite a few customization options, allowing you to get the most out of your line chart.

[block:parameters]
{
  "data": {
    "h-0": "Setting",
    "h-1": "Description",
    "0-0": "Provider",
    "0-1": "The [Data Provider](doc:data-provider) as a parent of your chart",
    "1-0": "Label Column",
    "1-1": "The Labels you want to display with your data. These are displayed on the X-axis",
    "2-0": "Data Column(s)",
    "2-1": "The data you want to display as lines. This has to be [numeric](doc:number). Can be multiple",
    "3-0": "Format",
    "3-1": "Will divide labels by thousand or million on the axis and adds a `K` or `M` to the axis respectively",
    "4-0": "Y-axis Label  \nX-axis label",
    "4-1": "The labels you want to display next to the Y and X-axis.",
    "5-0": "Width  \nHeight",
    "5-1": "The size you want the chart to be, supports all CSS supported sizes",
    "6-0": "Colours",
    "6-1": "Choose from one of the predefined colour-palettes",
    "7-0": "Curve",
    "7-1": "The type of line you want to have.  \n**Smooth**: A curved line flowing with the data  \n**Straight**: A line straight from point to point  \n**Stepline**: A line which remains horizontal, and drops down completely for the next data point. See below the reference table for an example of all three.",
    "8-0": "Data Labels",
    "8-1": "Will display the value on every point on the graph",
    "9-0": "Animate",
    "9-1": "Will animate when the data changes or on startup. Data-change can happen through [Dynamic filter's](doc:dynamic-filter) for example.",
    "10-0": "Legend",
    "10-1": "Will display, in the upper-right corner, the label for each of the data columns displayed on the chart"
  },
  "cols": 2,
  "rows": 11,
  "align": [
    "left",
    "left"
  ]
}
[/block]

## Line Chart curve types

There are three kinds of curves you can choose from in a line chart. In the image below you can see all three, with the same data-set, as a comparison.

![](https://files.readme.io/4b2560a-linechart-types.png "linechart-types.png")