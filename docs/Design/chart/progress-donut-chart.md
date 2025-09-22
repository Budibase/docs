---
title: Progress Donut Chart
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
It is possible to display a progress bar using a [Donut Chart](doc:pie-donut-chart). 

This can be useful when building KPI dashboards or other task tracking apps.
[block:api-header]
{
  "title": "Data"
}
[/block]
You may have a table with tasks, each with a status such as:
[block:image]
{
  "images": [
    {
      "image": [
        "https://files.readme.io/f7cd280-Screenshot_2022-06-07_at_16.39.54.png",
        "Screenshot 2022-06-07 at 16.39.54.png",
        957,
        309,
        "#141414"
      ]
    }
  ]
}
[/block]
To provide our progress chart with the correct data, we will need to create a [View](doc:views) so that the tasks can be grouped by status. 

First click the 'Calculate' button and select *The Count of Status.* 
[block:image]
{
  "images": [
    {
      "image": [
        "https://files.readme.io/2482cb5-Screenshot_2022-06-07_at_16.55.34.png",
        "Screenshot 2022-06-07 at 16.55.34.png",
        388,
        267,
        "#202224"
      ]
    }
  ]
}
[/block]
Next click the 'Group by' button, and select 'Status'.
[block:image]
{
  "images": [
    {
      "image": [
        "https://files.readme.io/33beba8-Screenshot_2022-06-07_at_16.56.20.png",
        "Screenshot 2022-06-07 at 16.56.20.png",
        361,
        224,
        "#202326"
      ]
    }
  ]
}
[/block]

[block:image]
{
  "images": [
    {
      "image": [
        "https://files.readme.io/92bd716-Screenshot_2022-06-07_at_16.56.53.png",
        "Screenshot 2022-06-07 at 16.56.53.png",
        722,
        248,
        "#161617"
      ]
    }
  ]
}
[/block]

[block:api-header]
{
  "title": "Design"
}
[/block]
Add a [Data Provider](doc:data-provider) with the view as its datasource.
[block:image]
{
  "images": [
    {
      "image": [
        "https://files.readme.io/f0050c8-Screenshot_2022-06-07_at_17.00.27.png",
        "Screenshot 2022-06-07 at 17.00.27.png",
        248,
        216,
        "#202020"
      ]
    }
  ]
}
[/block]
Nested underneath, add your donut chart with the provider set. 
For the label column select *group* and for the data column select *value*.
[block:image]
{
  "images": [
    {
      "image": [
        "https://files.readme.io/77e1f4b-task-progress.png",
        "task-progress.png",
        1500,
        751,
        "#8e9192"
      ]
    }
  ]
}
[/block]
&nbsp;

Adjust the settings as desired. 
Below is a showcase of the colour palettes available:
[block:image]
{
  "images": [
    {
      "image": [
        "https://files.readme.io/28bc663-Screenshot_2022-06-07_at_17.25.30.png",
        "Screenshot 2022-06-07 at 17.25.30.png",
        630,
        859,
        "#e3e3e4"
      ]
    }
  ]
}
[/block]

[block:callout]
{
  "type": "info",
  "body": "The legend colours are determined by the alphabetical order of the labels. \nFor this reason, numeric status enums may be more suitable if precise colour coding is desired.",
  "title": "Colour order"
}
[/block]
&nbsp;

[block:api-header]
{
  "title": "External datasource"
}
[/block]
Instead of using an internal table view, you may wish to use a [Custom query](doc:custom-queries) from an external datasource.  

You will need to transform the data in the format outlined <a href="https://docs.budibase.com/docs/chart#generating-the-chart-schema">here</a>, where there is a label for each status.