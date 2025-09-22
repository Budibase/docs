---
title: Progress Donut Chart
excerpt: ''
deprecated: false
hidden: true
metadata:
  title: ''
  description: ''
  robots: index
next:
  description: ''
---
It is possible to display a progress bar using a [Donut Chart](doc:pie-donut-chart). 

This can be useful when building KPI dashboards or other task tracking apps.

## Data

You may have a table with tasks, each with a status such as:

![957](https://files.readme.io/f7cd280-Screenshot_2022-06-07_at_16.39.54.png "Screenshot 2022-06-07 at 16.39.54.png")

To provide our progress chart with the correct data, we will need to create a [View](doc:views) so that the tasks can be grouped by status. 

First click the 'Calculate' button and select *The Count of Status.* 

![388](https://files.readme.io/2482cb5-Screenshot_2022-06-07_at_16.55.34.png "Screenshot 2022-06-07 at 16.55.34.png")

Next click the 'Group by' button, and select 'Status'.

![361](https://files.readme.io/33beba8-Screenshot_2022-06-07_at_16.56.20.png "Screenshot 2022-06-07 at 16.56.20.png")

![722](https://files.readme.io/92bd716-Screenshot_2022-06-07_at_16.56.53.png "Screenshot 2022-06-07 at 16.56.53.png")

## Design

Add a [Data Provider](doc:data-provider) with the view as its datasource.

![248](https://files.readme.io/f0050c8-Screenshot_2022-06-07_at_17.00.27.png "Screenshot 2022-06-07 at 17.00.27.png")

Nested underneath, add your donut chart with the provider set.\
For the label column select *group* and for the data column select *value*.

![1500](https://files.readme.io/77e1f4b-task-progress.png "task-progress.png")

 

Adjust the settings as desired.\
Below is a showcase of the colour palettes available:

![630](https://files.readme.io/28bc663-Screenshot_2022-06-07_at_17.25.30.png "Screenshot 2022-06-07 at 17.25.30.png")

> 📘 Colour order
>
> The legend colours are determined by the alphabetical order of the labels.\
> For this reason, numeric status enums may be more suitable if precise colour coding is desired.

 

## External datasource

Instead of using an internal table view, you may wish to use a [Custom query](doc:custom-queries) from an external datasource.  

You will need to transform the data in the format outlined <a href="https://docs.budibase.com/docs/chart#generating-the-chart-schema">here</a>, where there is a label for each status.
