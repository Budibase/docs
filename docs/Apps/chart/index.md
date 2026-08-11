---
title: Charts
excerpt: Visualise your data.
deprecated: false
hidden: false
metadata:
  title: ''
  description: ''
  robots: index
next:
  description: ''
---
Use charts to present numeric data from a [Data provider](doc:data-provider).

All charts share the same core settings:

* Title
* Provider
* Label column
* Data column(s)
* Width and height
* Margin
* Custom CSS
* Conditions

## Choose a source

Charts allow you to visualise data from a [Data Provider](doc:data-provider), which can have datasources such as:
 
* <Glossary>Budibase DB</Glossary>
* External Data Tables like MS SQL
* [REST Queries](doc:rest-queries) 
* [Custom Queries](doc:custom-queries)
* JSON/CSV

## Use chart data

The label column names each category.

The data column or columns provide the numeric values for each label.

REST queries and custom queries often need a transformer so the returned data matches the chart schema.

## Common chart types

* Area
* Bar
* Candlestick
* Gauge
* Histogram
* Line
* Pie
* Progress donut
