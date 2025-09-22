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

Then, in the <Glossary>Settings Panel</Glossary> you will be able to configure your chart to display exactly what you want. First, you want to select the correct [Data Provider](doc:data-provider), if you have more than one as a parent. The second step is to select a `Label column`. The Label Column defines the labels on your X-axis. Lastly, you'll want to select a `Data column`. This column will represent the data drawn in the chart. For this to work the column will of course have to be numeric. 

And that's it, you have your line chart. Want to understand all the possible customization settings? Check the reference below.

> 📘 Numeric data only
>
> Of course, line charts need to have a scale, so for the data column(s), you can only select [Numeric](doc:number) columns

## Settings panel

The settings panel has quite a few customization options, allowing you to get the most out of your line chart.

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
  </tbody>
</Table>

## Line Chart curve types

There are three kinds of curves you can choose from in a line chart. In the image below you can see all three, with the same data-set, as a comparison.

![](https://files.readme.io/4b2560a-linechart-types.png "linechart-types.png")
