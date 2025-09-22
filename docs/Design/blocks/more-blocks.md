---
title: More Blocks
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
## Repeater Block

A repeater block and be used to iterate over rows in a table. Components nested inside a Repeater block will be repeated for as many rows are returned by the table. The bindings drawer will also have access the schema of the data source.  This can be useful for creating project dashboards.

### Repeater Block Example

Add a repeater block set to the data source of the Jobs table in the Budibase sample data. Inside the repeater block, add a Container with a nested Headline component and Paragraph component, displaying the Customer Name and Job Notes, respectively.

![](https://files.readme.io/288ef66f66ca6ea596b13564318b2aabe7d51b59ee92455a932afddf64906b44-image.png)

This will display on the screen as a container-per row, with each container showing a different row from the Jobs table. With some styling applied to containers and some filtering based on dates we can very quickly produce a dashboard to show the status of jobs.

[block:image]
{
  "images": [
    {
      "image": [
        "https://files.readme.io/a136c9593f7b2f8c790bfbcb39e2b8da93ddbc4a50b778a32f56284810a6f303-Screenshot_2024-08-28_at_13.52.36.png",
        "",
        ""
      ],
      "align": "center"
    }
  ]
}
[/block]


<br />

## Cards Block

[block:image]
{
  "images": [
    {
      "image": [
        "https://files.readme.io/4433d02567d850469f525fe65917ebcdae58967336dfc59a524106df84a86b0e-Screenshot_2024-08-28_at_13.55.57.png",
        "",
        ""
      ],
      "align": "center",
      "sizing": "50% "
    }
  ]
}
[/block]


Cards Blocks are a quick and easy way to display a few attributes, and an image. A great example of this would be a staff roster. By default, Cards Blocks have a Title, Subtitle, and Description, a well as an optional Image URL. This can be useful for "Meet the Team" style pages, or inventory/e-commerce applications. As with the Repeater Block, a Cards block will iterate over the rows of the data source, and bindings will be available in the bindings Drawer based on the schema of the data source.

[block:image]
{
  "images": [
    {
      "image": [
        "https://files.readme.io/70108b9995e10d9dc0b9015c96d5ea5afd00f258e25e14eafef2c142040f7f8b-Screenshot_2024-08-28_at_14.02.31.png",
        null,
        ""
      ],
      "align": "center",
      "sizing": "50% "
    }
  ]
}
[/block]


## Chart Block

| Type        | Description                                                                                                                                                                                                               | Requirements                                                              |
| :---------- | :------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ | :------------------------------------------------------------------------ |
| Pie         | Circular graphic divided into "slices", where the greater the arc-length is proportional to the numerical value.                                                                                                          | Label (text), Data (numerical)                                            |
| Donut       | Similar to the Pie Chart, a Donut Chart is a segmented ring, where segment-sizes are proportional to the numerical value.                                                                                                 | Label (text), Data (numerical)                                            |
| Bar         | Presents categorical data with rectangular bars with heights or lengths proportional to the values that they represent.                                                                                                   | Label (text), Data (numerical)                                            |
| Line        | Displays information as a series of data points connected by straight line segments                                                                                                                                       | Label (text), Data (numerical)                                            |
| Area        | Similar to a line chart, an area chart also shades the area beneath the line. Multiple data lines can be chosen for display. The order in which data lines are chosen will determine which shaded area shows over others. | Label (text), Data (numerical)                                            |
| Histogram   |                                                                                                                                                                                                                           | Value (numerical)                                                         |
| Candlestick | Typically used to show share prices                                                                                                                                                                                       | Open price, High price, Low price, Close price (all numerical), and Date. |

[block:image]
{
  "images": [
    {
      "image": [
        "https://files.readme.io/15c1d5a1b2f27e26ec96d406cc1d08022cf34eaeb749e5dcd24e42da9ca44700-Screenshot_2024-08-28_at_13.26.16.png",
        "",
        "An example Pie chart, using the BudibaseDB Sample Data (Label: Customer Name, Data: Quote Price)"
      ],
      "align": "center",
      "sizing": "50% ",
      "caption": "An example Pie chart, using the BudibaseDB Sample Data (Label: Customer Name, Data: Quote Price)"
    }
  ]
}
[/block]


[block:image]
{
  "images": [
    {
      "image": [
        "https://files.readme.io/d2dda866bee4e5bcddd52a4df7233d6f3a09335ae025642324bab4bf74e16ff4-Screenshot_2024-08-28_at_13.26.27.png",
        "",
        "An example Donut chart, using the BudibaseDB Sample Data (Label: Customer Name, Data: Quote Price)"
      ],
      "align": "center",
      "sizing": "50% ",
      "caption": "An example Donut chart, using the BudibaseDB Sample Data (Label: Customer Name, Data: Quote Price)"
    }
  ]
}
[/block]


[block:image]
{
  "images": [
    {
      "image": [
        "https://files.readme.io/88555ebc9f6863cd9352a7cac07ffd094e52da67db16c2258daae0708e84daeb-Screenshot_2024-08-28_at_13.26.39.png",
        "",
        "An example Bar chart, using the Budibase DB Sample Data (Label: Customer Name, Data: Quote Price & Updated Price)"
      ],
      "align": "center",
      "sizing": "50% ",
      "caption": "An example Bar chart, using the Budibase DB Sample Data (Label: Customer Name, Data: Quote Price & Updated Price)"
    }
  ]
}
[/block]


[block:image]
{
  "images": [
    {
      "image": [
        "https://files.readme.io/763da104473283d093575b3d77e39fdb25f485053ea4ee2cec97bb2b2fb40508-Screenshot_2024-08-28_at_15.06.56.png",
        null,
        "An example Line chart using fabricated data in a BudibaseDB table"
      ],
      "align": "center",
      "caption": "An example Line chart using fabricated data in a BudibaseDB table"
    }
  ]
}
[/block]


[block:image]
{
  "images": [
    {
      "image": [
        "https://files.readme.io/2d15e101c4e333b992507838eb2f93ef551199b357930f7e1c2a21985311a756-Screenshot_2024-08-28_at_15.08.22.png",
        "",
        "An example Area chart using fabricated data in a BudibaseDB table"
      ],
      "align": "center",
      "caption": "An example Area chart using fabricated data in a BudibaseDB table"
    }
  ]
}
[/block]


[block:image]
{
  "images": [
    {
      "image": [
        "https://files.readme.io/3dccdc776f0196eb46d78f11ccf120fbc315e7706621a10f1f38fc88ef1974f0-Screenshot_2024-08-28_at_13.26.49.png",
        "",
        "An example Histogram chart, using the BudibaseDB sample data (Value: Quote Price, Bucket Count: 6)"
      ],
      "align": "center",
      "sizing": "50% ",
      "caption": "An example Histogram chart, using the BudibaseDB sample data (Value: Quote Price, Bucket Count: 6)"
    }
  ]
}
[/block]


[block:image]
{
  "images": [
    {
      "image": [
        "https://files.readme.io/62bea66cbebc2e3a9abbba2c2284fe8c8b0477d3e3443a6628cd6bb243b7858e-Screenshot_2024-08-28_at_15.09.15.png",
        "",
        "An example candlestick chart, using a REST API query to fetch data from <https://www.alphavantage.co/>"
      ],
      "align": "center",
      "caption": "An example candlestick chart, using a REST API query to fetch data from <https://www.alphavantage.co/>"
    }
  ]
}
[/block]


<br />

## Row Explorer

![](https://files.readme.io/7969eeb1ec694b730b0b9f1c0b0d5599b4f14fe5b22cdce43603710970a812f5-image.png)

A row explorer block helps give a brief overview of all rows in a datasource, and then a closer look at one row at a time. Built into the block is a search-field, as well as an update-row form.

[block:image]
{
  "images": [
    {
      "image": [
        "https://files.readme.io/dc3ba3db8159ac17415d9008d67016adc5b7a19e202cb402753c362dcd3e5157-Screenshot_2024-08-28_at_15.33.43.png",
        "",
        ""
      ],
      "align": "center"
    }
  ]
}
[/block]