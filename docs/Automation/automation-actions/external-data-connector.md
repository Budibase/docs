---
title: External Data Connector
excerpt: Connect to data from an external source
deprecated: false
hidden: true
metadata:
  title: ''
  description: ''
  robots: index
next:
  description: ''
  pages:
    - type: basic
      slug: looping
      title: Looping
---
## Usage

<Image align="center" src="https://files.readme.io/d1bc024-image.png" />

External Data Connector action steps can be used to run a query from the Data section, either from a [Data Source Custom Query](https://docs.budibase.com/docs/data-sources#custom-queries), or from a [REST query](https://docs.budibase.com/docs/rest-queries).

If the query to your External Data Connector takes parameters, they can be set as part of the flow by using the bindings drawer or simply manually-typed.

![](https://files.readme.io/94ef9a8-image.png)

The response from the query will then be available in bindings for the subsequent steps in your automation, for example, if your query returns an array, it will be possible to pass that array on to another Action step such as Create Row, and use the Looping feature to create a row per element in the array.

![](https://files.readme.io/44f4ee7-image.png)
