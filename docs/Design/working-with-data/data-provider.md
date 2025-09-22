---
title: Data provider
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
The data provider component is one of the most important components in Budibase. It exposes data to any child components that expect data input.

For example, all components under the *Data* section can be provided data. 

<Image alt="Add component: Data section" src="https://files.readme.io/af2aa63-Screenshot_2022-10-07_at_11.16.05.png">
  Add component: Data section
</Image>

In addition, the following components can make use of data providers:

* [Options pickers](https://docs.budibase.com/docs/option-picker#displaying-options-in-the-options-picker)
* [Blocks](https://docs.budibase.com/docs/blocks)
* [Charts](doc:chart)

<Image alt="All of these nested components can access the New Data Provider" src="https://files.readme.io/be54d51-data_provider_nested.png">
  All of these nested components can access the New Data Provider
</Image>

<Image alt="Selecting a Data Provider" src="https://files.readme.io/381cfaf-Screenshot_2022-10-07_at_12.01.14.png">
  Selecting a Data Provider
</Image>

<br />

## Making use of your datasources

A data provider can make all [Datasources](doc:data-sources) available for consumption within your apps. This includes, but is not limited to:

* The internal [Budibase DB](doc:budibasedb) tables
* External [SQL Datasources](doc:sql-datasource)
* [Custom queries](https://docs.budibase.com/docs/custom-queries)
* [REST API](doc:rest)

Once you have added your data provider you need to select which datasource you want to use. Simply click on the *Data* dropdown.

<Image title="datasource.png" alt="Providing data from the ServiceLog table" src="https://files.readme.io/8247e63-datasource.png">
  Providing data from the ServiceLog table
</Image>

> 🚧 Nested data provider
>
> Whilst you can nest data providers, you may find there to be some performance issues. 
>
> It is worth considering if you could display the additional data in another [Screen](doc:screens) or [Modal](https://docs.budibase.com/docs/screens#modal-screen).

<br />

In addition to controlling which datasource that should be available to your child components, data providers also allow you to sort, limit, paginate and filter the data that will ultimately be presented in your app screen.

<br />

## Pagination and sorting

To determine the sorting of the data rows provided, select a *Sort Column* and *Sort Order*. 

![](https://files.readme.io/8cf7684-sorting.png)

In this instance, the [Table](https://docs.budibase.com/docs/table) component can override the default sorting set by the data provider, however with other components the sorting will be static.

You can also see that a **limit** of 10 has been set. This sets the maximum number of rows that can be presented per page. 

Limits, sorting and pagination are done through server side queries where possible for performance, e.g. if the datasource was PostgreSQL, or the Internal Budibase DB. It is worth noting however, that [Custom queries](https://docs.budibase.com/docs/custom-queries) and [REST queries](https://docs.budibase.com/docs/rest-queries) data provider settings are handled client side. As a result, in these cases, sorting will apply on a per page basis only. 

The type of sorting will be determined by the data type of the chosen column. For example text columns will be sorted alphabetically, whereas number columns will be sorted numerically. 

With pagination checked, this can be used by not only tables, but all components that are linked to that data provider. For example, a paginated data provider for a chart component will cause the chart to re-render with the new data as each page is cycled through. 

<br />

## Filtering

To add filters to a data provider, click **Define filters**. 

![](https://files.readme.io/870ff6e-Screenshot_2022-10-07_at_17.03.16.png)

This will bring up a drawer from which you can select *match all* or *match any* mode.

You can then select the column you wish to filter on, alongside the operator. Click **Add filter** to filter on additional columns. 

![](https://files.readme.io/11adf8b-match-all.png)

Click [here](https://docs.budibase.com/docs/searchfilter-data) for more on filtering. 

Similar to sorting, filtering will be performed server side for SQL datasource and the internal Budibase DB, however for custom queries the filtering will be client side. Thus when using custom queries, it is recommended that you provide any filters within the query. 

<br />

## When to use a repeater

If you want to build something a bit more custom than a table; maybe you want a list of cards, then you will need the [Repeater](doc:repeater) component. Here's an example of a list of service logs:

![](https://files.readme.io/0f430ca-data-provider-repeater-example.png "data-provider-repeater-example.png")
