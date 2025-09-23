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

<Image align="center" src="https://files.readme.io/bef001ffddec8584ace8475d321bea07425c9a48d655bbbba8b813a62f804932-Screenshot_2025-08-15_at_08.31.16.png" />

If you don't already have data like this but still want to continue with the walkthrough:

* Create Head to the Data section and create a new table in your workspace
* Create a text-column, and a Single-Select column.
* In the Single-Select column, set the possible options for your tasks that best suit your needs. Here we'll be using "Pending", "In Progress", and "Complete".
* Fill in with some sample tasks and set their statuses.

### Preparing the Data

To provide our progress chart with the correct data, we will need to create a [View](doc:views) so that the tasks can be grouped by status. 

First click the 'Create new view' button, select 'Calculation', and set the name of the view to something descriptive like "Tasks Progress Report"

<Image align="center" src="https://files.readme.io/81f68fab2abab72610ac2e1fbf631e9d7f5930811d15957dbb1b3b6d38bdafde-Screenshot_2025-08-15_at_08.38.29.png" />

You'll be met with a very blank table - don't panic, we need to configure our calculations. Click "Configure Calculations". In this case we want to count how many tasks have each status. This is almost read as a sentence when we see the calculation is "Calculate the" `Count` "of" `task` `Group by` "status" - we're counting how many tasks have a particular status.

<Image align="center" src="https://files.readme.io/05fb1366f0a70d682317c1334515fdc5a0f8467f84d306ab7a19138f8d8b50c9-Screenshot_2025-08-15_at_08.41.52.png" />

With my sample data, I can then see that I've got 3 rows, one for each status, and the "Count task" tells me how many tasks have that status assigned.

<Image align="center" src="https://files.readme.io/8b6128b0e4297bf589f865436f76c8e7f8eb18dc91bd9a35c515b8289d002d80-Screenshot_2025-08-15_at_08.43.37.png" />

## Apps > Design

In your workspace, add an App and create a new screen. Add a [Data Provider](doc:data-provider) with the view as its datasource.

<Image align="center" src="https://files.readme.io/b6aaa320992bc4fa1523d2f0c8fb7c5896a10f6d33f794bef250e0621f29af6e-Screenshot_2025-08-15_at_08.46.11.png" />

Nested underneath, add your donut chart with the provider set.\
For the label column select *Status* and for the data column select *Count Task*.

<Image align="center" src="https://files.readme.io/17ed29a04490b9157ff95ea4018d7c88f6afd31ba957379b2fdbb804774c4b37-Screenshot_2025-08-15_at_08.47.40.png" />

 

Adjust the settings as desired, for example setting colours specific to the status.

![](https://files.readme.io/9bf7961f24fc44be13f68369f289181299243ad6c058a99094fea1f25c8483ee-image.png)

### Adding more functionality

 Using the Donut Chart's "On Click Actions" we can display the data that a user clicks on. Add an "On Click Segment" action and set the Clicked Segment's status into state. This will set the string "In Progress" in state, when the "In Progress" segment is clicked.

<Image align="center" src="https://files.readme.io/ac348aa872a7e9ed91331931de02f4ce0a12ced3b073e7be87200f1c9e1bb390-Screenshot_2025-08-15_at_09.07.04.png" />

Next, in your Screen, add a repeater block set to display the Tasks table (not the Tasks view calculation). Use a filter on the Status column to match the `clicked_tasks` variable we set in state.

<Image align="center" src="https://files.readme.io/a90708e259c75a2e7bed6414e7d14ae3e5ff46cdaf326343e27f6679e04cb49e-Screenshot_2025-08-15_at_09.10.29.png" />

Now in your Repeater Block, you'll have every task with the status that the user clicks on in the donut chart. Add a Text component to the repeater block and use it to display your task and status.

<Image align="center" src="https://files.readme.io/627a3b5e039ed8457f37d913564ede4afb3fd794bda6d40c551b447c7a48537b-Screenshot_2025-08-15_at_09.17.48.png" />

<Image align="center" src="https://files.readme.io/c82c7ab0d8f9f6c4e26cbaed3b8500344e46d4bce675e7fa410430f810f6e90e-Screen_Recording_2025-08-15_at_09.20.16.gif" />

## External datasource

Instead of using an internal table view, you may wish to use a [Custom query](doc:custom-queries) from an external datasource.  

You will need to transform the data in the format outlined <a href="https://docs.budibase.com/docs/chart#generating-the-chart-schema">here</a>, where there is a label for each status.
