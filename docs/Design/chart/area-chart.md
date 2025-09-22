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

And that is all you need to do to get an area chart set up. But of course, you customize much more in the <Glossary>Settings Panel</Glossary>. To read more about further customization, check the reference table below.

> 📘 Numeric data only
>
> Of course, line charts need to have a scale, so for the data column(s), you can only select [Numeric](doc:number) columns

## Settings panel

The settings panel has quite a few customization options, allowing you to get the most out of your bar chart.

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
        The Labels you want to display with your data. These are displayed on the X-axis
      </td>
    </tr>

    <tr>
      <td>
        Data Column(s)
      </td>

      <td>
        The data you want to display as lines. This has to be [numeric](doc:number). Can be multiple
      </td>
    </tr>

    <tr>
      <td>
        Format
      </td>

      <td>
        Will divide labels by thousand or million on the axis and adds a `K` or `M` to the axis respectively
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
        Curve
      </td>

      <td>
        The type of line you want to have.  

        * \*Smooth\*\*: A curved line flowing with the data  
        * \*Straight\*\*: A line straight from point to point  
        * \*Stepline\*\*: A line which remains horizontal, and drops down completely for the next data point. See below the reference table for an example of all three.
      </td>
    </tr>

    <tr>
      <td>
        Data Labels
      </td>

      <td>
        Will display the value on every point on the graph
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
        Will display, in the upper-right corner, the label for each of the data columns displayed on the chart
      </td>
    </tr>

    <tr>
      <td>
        Stacked
      </td>

      <td>
        Check this setting to have the different data columns stacked, which means they won't overlay but be stacked on top of each other.\
        You can see the difference between stacked and not stacked below the reference table
      </td>
    </tr>
  </tbody>
</Table>

### Stacked vs non-stacked comparison

<Image title="area-stacked-comparison.png" alt={1958} align="center" src="https://files.readme.io/f5eb085-area-stacked-comparison.png">
  Not stacked (left) and Stacked (right) comparison
</Image>
