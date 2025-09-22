---
title: Area Chart
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
The area chart is a mixture between the [Bar Chart](doc:bar-chart) and the [Line Chart](doc:line-chart). Allowing you to display multiple columns of data on top of each other, having the area coloured.

![](https://files.readme.io/ce76939-area-chart.png "area-chart.png")

Not only can you stack the different data like above, but you can also let them overlay.

## Adding an Area Chart

To add the area chart to your UI, you first need to wrap it in a [Data Provider](doc:data-provider). Then you can add the Area chart to your UI through `Chart > Area Chart`.

![](https://files.readme.io/451ee80-Screenshot_2023-07-04_at_13.40.21.png)

## Displaying data

After adding the Area chart to your UI, you can now select data. You should've already selected a data source through the [Data Provider](doc:data-provider), so now you can select the Data Provider in the Area chart.

In the chart on top of this page there are 4 columns selected, and they stack by default. To do this, just select the data provider, a label column, and select the 4 columns you want to display.

![](https://files.readme.io/73ec471-area-chart-settings-panel-data.png "area-chart-settings-panel-data.png")

And that is all you need to do to get an area chart set up. But of course, you customize much more in the <<glossary:Settings Panel>>. To read more about further customization, check the reference table below.

> 📘 Numeric data only
> 
> Of course, line charts need to have a scale, so for the data column(s), you can only select [Numeric](doc:number) columns

## Settings panel

The settings panel has quite a few customization options, allowing you to get the most out of your bar chart.

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
    "10-1": "Will display, in the upper-right corner, the label for each of the data columns displayed on the chart",
    "11-0": "Stacked",
    "11-1": "Check this setting to have the different data columns stacked, which means they won't overlay but be stacked on top of each other.  \nYou can see the difference between stacked and not stacked below the reference table"
  },
  "cols": 2,
  "rows": 12,
  "align": [
    "left",
    "left"
  ]
}
[/block]

### Stacked vs non-stacked comparison

[block:image]
{
  "images": [
    {
      "image": [
        "https://files.readme.io/f5eb085-area-stacked-comparison.png",
        "area-stacked-comparison.png",
        1958
      ],
      "align": "center",
      "caption": "Not stacked (left) and Stacked (right) comparison"
    }
  ]
}
[/block]