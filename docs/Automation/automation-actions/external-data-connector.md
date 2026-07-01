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

<Image align="center" src="https://files.readme.io/2611a0f29399ada4c89da916e3e84eb4ee60256957cbe2744f1241fd0fc30058-Screenshot_2025-04-09_at_13.51.18.png" />

External Data Connector action steps can be used to run a query from the Data section, either from a [Data Source Custom Query](https://docs.budibase.com/docs/data-sources#custom-queries), or from a [REST query](https://docs.budibase.com/docs/rest-queries).

When using a connector template that does not yet have an active connection, the setup panel will display a **Connect to [Connector Name]** button. Clicking this button will automatically open the API explorer and guide you through setting up a new connection for that template, streamlining the integration process.

If the query to your External Data Connector takes parameters, they can be set as part of the flow by using the bindings drawer or simply manually-typed.

<Image align="center" src="https://files.readme.io/f65d9028b99f29cfd6d8e34ae06b152d27d8c7fa8f78144e48fe75772d40e2e6-Screenshot_2025-04-09_at_13.48.17.png" />

The response from the query will then be available in bindings for the subsequent steps in your automation, for example, if your query returns an array, it will be possible to pass that array on to another Action step such as Create Row, and use the Looping feature to create a row per element in the array.

<Image align="center" src="https://files.readme.io/17bd73b8a72d58a91f6e74b65059ccecc5b3d545d3747ccedf90bad2b03026a1-Screenshot_2025-04-09_at_13.52.00.png" />