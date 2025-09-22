---
title: Bar Chart
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
The bar chart is a very basic, but powerful, method of displaying data in such a way it makes much more sense immediately, compared to simply browsing the data in tables.

![](https://files.readme.io/4ff30c3-barcharts.png "barcharts.png")

## Adding a Bar Chart

To add a bar chart to your UI, you need to connect it to your data source using a [Data Provider](doc:data-provider). After adding the `data provider`, add the `Chart > Bar Chart` component to it, and you'll be able to link up the data from your table. 

![](https://files.readme.io/15be8d6-Screenshot_2023-07-04_at_13.41.04.png)

> 👍 Grouping data
>
> To group data inside a bar chart, use [Views](doc:views) on top of your data. This way, you can hook up your chart using the data provider linked to the view instead.

## Displaying data

Now that you have the data linked up to your bar chart, you can select which columns you want to display. For example, we have a table with cars and their mileage, and displaying this in a bar chart is only a few clicks.

![](https://files.readme.io/29a411c-mileage-barchart.png "mileage-barchart.png")

To get this view, head over to the <Glossary>Settings Panel</Glossary>, and select the `License Plate` as the label column, and the mileage as the data column(s). And to get the bars horizontally, instead of vertical, check the `Horizontal` setting in the <Glossary>Settings Panel</Glossary>. And there you have it.

This is just one of the many things you can do with the bar chart, explore all the features from the <Glossary>Settings Panel</Glossary> below. 

> 📘 Numeric data only
>
> Of course, bars need to have a size, so for the data column(s), you can only select [Numeric](doc:number) columns (eg; containing values that can be converted to numbers)

## Settings panel

The settings panel for the bar chart has the following options. Generic styling settings are omitted from this overview.

<Table align={["left","left"]}>
  <thead>
    <tr>
      <th>
        Setting
      </th>

      <th>
        Description
      </th>
    </tr>
  </thead>

  <tbody>
    <tr>
      <td>
        Provider
      </td>

      <td>
        The [Data Provider](doc:data-provider) as a parent of your chart
      </td>
    </tr>

    <tr>
      <td>
        Label Column
      </td>

      <td>
        The Labels you want to display with your data. These are on the X-axis in standard mode, or on the Y-axis on `Horizontal` mode
      </td>
    </tr>

    <tr>
      <td>
        Data Column(s)
      </td>

      <td>
        The data you want to display with the labels. This has to be numeric. Can be multiple
      </td>
    </tr>

    <tr>
      <td>
        Format
      </td>

      <td>
        Will divide by thousand or million on the axis and adds a `K` or `M` to the axis respectively
      </td>
    </tr>

    <tr>
      <td>
        Y-axis Label\
        X-axis label
      </td>

      <td>
        The labels you want to display next to the Y and X-axis.
      </td>
    </tr>

    <tr>
      <td>
        Width\
        Height
      </td>

      <td>
        The size you want the chart to be, supports all CSS supported sizes
      </td>
    </tr>

    <tr>
      <td>
        Colours
      </td>

      <td>
        Choose from one of the predefined colour-palettes
      </td>
    </tr>

    <tr>
      <td>
        Stacked
      </td>

      <td>
        Check this setting to have the different data columns stacked (aka, on the same line instead of each column as a separate bar) in the chart
      </td>
    </tr>

    <tr>
      <td>
        Horizontal
      </td>

      <td>
        Displays the bars horizontally, rather than vertically, when checked. The labels will move to the Y-axis when this is checked
      </td>
    </tr>

    <tr>
      <td>
        Data Labels
      </td>

      <td>
        Will display the value of the bar on top of the bar when checked
      </td>
    </tr>

    <tr>
      <td>
        Animate
      </td>

      <td>
        Will animate when the data changes or on startup. Data-change can happen through [Dynamic filter's](doc:dynamic-filter) for example.
      </td>
    </tr>

    <tr>
      <td>
        Legend
      </td>

      <td>
        Displays the label for each colour visible on the chart as a legend in the upper-right corner
      </td>
    </tr>
  </tbody>
</Table>
