---
title: Charts
excerpt: Visualise your data
deprecated: false
hidden: false
metadata:
  title: ''
  description: ''
  robots: noindex
next:
  description: ''
---
Whilst there are a variety of chart types, all charts have some common properties:

* Title
* Provider
* Label Column
* Data Column(s)
* Width & Height
* Margin
* Custom CSS
* Conditions

## Providing data

Charts allow you to visualise data from a [Data Provider](doc:data-provider), which can have datasources such as:

* <Glossary>Budibase DB</Glossary> 
* [REST Queries](doc:rest-queries) 
* [Custom Queries](doc:custom-queries)

## Displaying data

The data displayed in your chart will be determined by the label and data columns. 

**Label Column** Provides the name of each categorical variable.\
**Data Column(s)** Provides the value or range of values for each label.   

> 🚧 Data column type
>
> Data columns must be numeric

## Generating the chart schema

For table datasources, the available options for the label and data columns will match the columns of the table.

Data from REST Queries on the other hand, will likely need to be transformed to be suitable for use in charts.

In particular, your [Transformer](doc:transformers) and <Glossary>Schema</Glossary> should align with the following:

![](https://files.readme.io/673ca59-Screenshot_2022-04-26_at_15.58.08.png "Screenshot 2022-04-26 at 15.58.08.png")

Naturally you would replace the strings and numbers with response data from your API.

### Many data columns

Most chart types can make use of more than one value column. Thus, additional value fields would be needed in your schema.

For example, you may want to display the change in average temperature between seasons for each country: 

![](https://files.readme.io/1a25614-Screenshot_2022-04-26_at_16.48.50.png "Screenshot 2022-04-26 at 16.48.50.png")

![](https://files.readme.io/a8eaf9f-Screenshot_2022-04-26_at_16.50.16.png "Screenshot 2022-04-26 at 16.50.16.png")
