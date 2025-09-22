---
title: Candlestick Chart
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
The CandleStick chart is a chart type often used in Financial charts. You can configure both a bar and a line on the same row.

![1886](https://files.readme.io/8c633da-candlestick.png "candlestick.png")

There's a lot of data being displayed on a single column, so when you want to use this graph you need to have access to 4 different [Numeric](doc:number) data-points per column. This could also be a great candidate to transform the data through [Views](doc:views) when you want to do some calculation based on data points you have in your database.

## Adding a Candlestick Chart

To add the Candlestick chart, first place a [Data Provider](doc:data-provider) and add the chart nested to it. To add the chart, click `Chart > Candlestick Chart`

![234](https://files.readme.io/6f9d686-add-candlestick-chart.png "add-candlestick-chart.png")

## Displaying data

Now that the Candlestick chart has been added to the UI, you can display data. For this type of chart you'll need 4 types of [Numeric](doc:number) datapoints. 

These 4 data points, or `columns`, are for the following fields:

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
        Open
      </td>

      <td>
        The opening for the `bar` inside the chart
      </td>
    </tr>

    <tr>
      <td>
        Close
      </td>

      <td>
        The closing for the `bar` inside the chart
      </td>
    </tr>

    <tr>
      <td>
        High
      </td>

      <td>
        The high for the `line` inside the chart
      </td>
    </tr>

    <tr>
      <td>
        Low
      </td>

      <td>
        The low for the `line` inside the chart
      </td>
    </tr>
  </tbody>
</Table>

> 👍 What determines the colour?
>
> When colour will be red or green depending on the `open` and `close` values. If `close` is a lower number than `open`, the colour will be red. If the `close` is higher than the `open` then the colour will be green. This also applies to the line in the chart, not just the bar.

The labels on the x-axis are supposed to be dates, this is a financial chart after all. So when picking the `Date column`, make sure you use a [Date/time](doc:datetime) field for best results.

There aren't a whole lot of other customization options in the <Glossary>Settings Panel</Glossary> for the Candlestick chart, but of course, there are some. You can find them in the reference table below.

## Settings panel

> 📘 Data columns
>
> There are 4 data column fields, which are explained in the `Displaying data` section above.

Besides the settings already explained, there are a few which you can still configure in the <Glossary>Settings Panel</Glossary>.

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
        Animate
      </td>

      <td>
        Will animate when the data changes or on startup. Data-change can happen through [Dynamic filter's](doc:dynamic-filter) for example.
      </td>
    </tr>
  </tbody>
</Table>
