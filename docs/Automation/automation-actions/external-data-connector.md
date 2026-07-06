---
title: External Data Connector
excerpt: Connect to data from an external source
deprecated: false
hidden: false
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

External Data Connector action steps can be used to run a query from the Data section, either from a [Data Source Custom Query](https://docs.budibase.com/docs/data-sources#custom-queries), or from a [REST query](https://docs.budibase.com/docs/rest-queries).

When using a connector template that does not yet have an active connection, the setup panel will display a **Connect to [Connector Name]** button. Clicking this button will automatically open the API explorer and guide you through setting up a new connection for that template, streamlining the integration process.

If the query to your External Data Connector takes parameters, they can be set as part of the flow by using the bindings drawer or simply manually-typed.

Parameters can be passed in through bindings or entered manually.

The response from the query will then be available in bindings for the subsequent steps in your automation, for example, if your query returns an array, it will be possible to pass that array on to another Action step such as Create Row, and use the Looping feature to create a row per element in the array.

The returned data is then available to later steps in the automation, including looped actions over arrays.
