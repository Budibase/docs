---
title: Bar Chart
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
The bar chart is a very basic, but powerful, method of displaying data in such a way it makes much more sense immediately, compared to simply browsing the data in tables.

![](https://files.readme.io/4ff30c3-barcharts.png "barcharts.png")

## Adding a Bar Chart

To add a bar chart to your UI, you need to wrap it using a [Data Provider](doc:data-provider). After adding the `data provider`, add the `Chart > Bar Chart` component to it, and you'll be able to link up the data from your table. 

![](https://files.readme.io/15be8d6-Screenshot_2023-07-04_at_13.41.04.png)

> 👍 Grouping data
> 
> To group data inside a bar chart, use [Views](doc:views) on top of your data. This way, you can hook up your chart using the data provider linked to the view instead.

## Displaying data

Now that you have the data linked up to your bar chart, you can select which columns you want to display. For example, we have a table with cars and their mileage, and displaying this in a bar chart is only a few clicks.

![](https://files.readme.io/29a411c-mileage-barchart.png "mileage-barchart.png")

To get this view, head over to the <<glossary:Settings Panel>>, and select the `License Plate` as the label column, and the mileage as the data column(s). And to get the bars horizontally, instead of vertical, check the `Horizontal` setting in the <<glossary:Settings Panel>>. And there you have it.

This is just one of the many things you can do with the bar chart, explore all the features from the <<glossary:Settings Panel>> below. 

> 📘 Numeric data only
> 
> Of course, bars need to have a size, so for the data column(s), you can only select [Numeric](doc:number) columns

## Settings panel

The settings panel for the bar chart has the following options. Generic styling settings are omitted from this overview.

[block:parameters]
{
  "data": {
    "h-0": "Setting",
    "h-1": "Description",
    "0-0": "Provider",
    "0-1": "The [Data Provider](doc:data-provider) as a parent of your chart",
    "1-0": "Label Column",
    "1-1": "The Labels you want to display with your data. These are on the X-axis in standard mode, or on the Y-axis on `Horizontal` mode",
    "2-0": "Data Column(s)",
    "2-1": "The data you want to display with the labels. This has to be numeric. Can be multiple",
    "3-0": "Format",
    "3-1": "Will divide by thousand or million on the axis and adds a `K` or `M` to the axis respectively",
    "4-0": "Y-axis Label  \nX-axis label",
    "4-1": "The labels you want to display next to the Y and X-axis.",
    "5-0": "Width  \nHeight",
    "5-1": "The size you want the chart to be, supports all CSS supported sizes",
    "6-0": "Colours",
    "6-1": "Choose from one of the predefined colour-palettes",
    "7-0": "Stacked",
    "7-1": "Check this setting to have the different data columns stacked (aka, on the same line instead of each column as a separate bar) in the chart",
    "8-0": "Horizontal",
    "8-1": "Displays the bars horizontally, rather than vertically, when checked. The labels will move to the Y-axis when this is checked",
    "9-0": "Data Labels",
    "9-1": "Will display the value of the bar on top of the bar when checked",
    "10-0": "Animate",
    "10-1": "Will animate when the data changes or on startup. Data-change can happen through [Dynamic filter's](doc:dynamic-filter) for example.",
    "11-0": "Legend",
    "11-1": "Displays the label for each colour visible on the chart as a legend in the upper-right corner"
  },
  "cols": 2,
  "rows": 12,
  "align": [
    "left",
    "left"
  ]
}
[/block]