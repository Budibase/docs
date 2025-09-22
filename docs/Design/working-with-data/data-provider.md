---
title: Data provider
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
The data provider component is one of the most important components in Budibase. It exposes data to any components that expect data input on that particular screen. In previous versions of Budibase, only components nested inside Data Providers could access the data, but that is no longer the case.

For example, all components under the _Data_ section can be provided data. 

[block:image]
{
  "images": [
    {
      "image": [
        "https://files.readme.io/9a68da4e2da9cf1158e41e277425dbbc2e9390a2146f8070fc0e830052725777-Screenshot_2025-08-15_at_14.21.24.png",
        null,
        "Add component: Data section"
      ],
      "align": "center",
      "caption": "Add component: Data section"
    }
  ]
}
[/block]


In addition, the following components can make use of data providers:

- [Options pickers](https://docs.budibase.com/docs/option-picker#displaying-options-in-the-options-picker)
- [Blocks](https://docs.budibase.com/docs/blocks)
- [Charts](doc:chart)

[block:image]
{
  "images": [
    {
      "image": [
        "https://files.readme.io/59f7375088c35203d3051db394b38a477a441d573df626b275eb53a0465ec53a-Screenshot_2025-08-15_at_14.24.21.png",
        null,
        "All of these nested components can access the New Data Provider"
      ],
      "align": "center",
      "caption": "All of these nested components can access the New Data Provider"
    }
  ]
}
[/block]


[block:image]
{
  "images": [
    {
      "image": [
        "https://files.readme.io/6d44d482c3894efec3da6987c47ef36623d9608b908a68d42c920fc259b43d85-Screenshot_2025-08-15_at_14.25.21.png",
        null,
        "Selecting a Data Provider"
      ],
      "align": "center",
      "caption": "Selecting a Data Provider"
    }
  ]
}
[/block]


<br />

## Making use of your datasources

A data provider can make all [Datasources](doc:data-sources) available for consumption within your apps. This includes, but is not limited to:

- The internal [Budibase DB](doc:budibasedb) tables
- External [SQL Datasources](doc:sql-datasource)
- [Custom queries](https://docs.budibase.com/docs/custom-queries)
- [REST API](doc:rest)

Once you have added your data provider you need to select which datasource you want to use. Simply click on the _Data_ dropdown.

[block:image]
{
  "images": [
    {
      "image": [
        "https://files.readme.io/d9daa86821b2e453843ddd8106b91a915989507b20daf7a75ef8b8cac356c445-Screenshot_2025-08-15_at_14.26.39.png",
        "datasource.png",
        "Providing data from the ServiceLog table"
      ],
      "align": "center",
      "caption": "Providing data from the Users table"
    }
  ]
}
[/block]


> 🚧 Nested data provider
> 
> Whilst you can nest data providers, you may find there to be some performance issues. 
> 
> It is worth considering if you could display the additional data in another [Screen](doc:screens) or [Modal](https://docs.budibase.com/docs/screens#modal-screen).

<br />

In addition to controlling which datasource that should be available to your child components, data providers also allow you to sort, limit, paginate and filter the data that will ultimately be presented in your app screen.

<br />

## Pagination and sorting

To determine the sorting of the data rows provided, select a _Sort Column_ and _Sort Order_. 

[block:image]
{
  "images": [
    {
      "image": [
        "https://files.readme.io/423e01d3b9b41cab1f7f7798cd10c9b7198c7f62b76cb3d4a3517fcb2d08fd99-Screenshot_2025-08-15_at_14.34.49.png",
        null,
        ""
      ],
      "align": "center"
    }
  ]
}
[/block]


In this instance, the [Table](https://docs.budibase.com/docs/table) component can override the default sorting set by the data provider, however with other components the sorting will be static.

[block:image]
{
  "images": [
    {
      "image": [
        "https://files.readme.io/21711e69ba0265bb777ff74355efc15adf582447c77fddff0075298bfeb79a11-Screenshot_2025-08-15_at_14.35.59.png",
        "",
        ""
      ],
      "align": "center"
    }
  ]
}
[/block]


You can also see that a **limit** of 5 has been set. This sets the maximum number of rows that can be presented per page. 

Limits, sorting and pagination are done through server side queries where possible for performance, e.g. if the datasource was PostgreSQL, or the Internal Budibase DB. It is worth noting however, that [Custom queries](https://docs.budibase.com/docs/custom-queries) and [REST queries](https://docs.budibase.com/docs/rest-queries) data provider settings are handled client side. As a result, in these cases, sorting will apply on a per page basis only. 

The type of sorting will be determined by the data type of the chosen column. For example text columns will be sorted alphabetically, whereas number columns will be sorted numerically. 

With pagination checked, this can be used by not only tables, but all components that are linked to that data provider. For example, a paginated data provider for a chart component will cause the chart to re-render with the new data as each page is cycled through. 

<br />

## Filtering

To add filters to a data provider, click **Define filters**. 

[block:image]
{
  "images": [
    {
      "image": [
        "https://files.readme.io/65f7a13087f0167f79a3873ff22343700f1578ba9782e11741dc8785de1f2319-Screenshot_2025-08-15_at_14.37.03.png",
        null,
        ""
      ],
      "align": "center"
    }
  ]
}
[/block]


This will bring up a drawer from which you can select _match all_ or _match any_ mode.

You can then select the column you wish to filter on, alongside the operator. Click **Add filter** to filter on additional columns. 

[block:image]
{
  "images": [
    {
      "image": [
        "https://files.readme.io/5b1dcb30e729484f5a21ab753797f968df6e312fa5127b9563b5098a9df1dd65-Screenshot_2025-08-15_at_14.42.25.png",
        null,
        ""
      ],
      "align": "center"
    }
  ]
}
[/block]


Click [here](https://docs.budibase.com/docs/searchfilter-data) for more on filtering. In this example, we are using a form component with a single text field in it, as seen in the builder screenshots above.

Similar to sorting, filtering will be performed server side for SQL datasource and the internal Budibase DB, however for custom queries the filtering will be client side. Thus when using custom queries, it is recommended that you provide any filters within the query. 

<br />

## When to use a repeater

If you want to build something a bit more custom than a table; maybe you want a container with some buttons that trigger an action or automation, then you will need the [Repeater](doc:repeater) component. Here's an example of a list of improvements suggested by staff that could help minimize risks and improve safety. 

[block:image]
{
  "images": [
    {
      "image": [
        "https://files.readme.io/db5c1939aae11fc9fa869fd30c7af897519be1e546c610d792b3787d22853384-Screenshot_2025-08-15_at_15.29.40.png",
        "data-provider-repeater-example.png",
        ""
      ],
      "align": "center"
    }
  ]
}
[/block]