---
title: Displaying data
excerpt: ''
deprecated: false
hidden: false
metadata:
  title: ''
  description: kba_5hc02
  robots: index
next:
  description: ''
---
After adding a data provider and selecting a datasource, the next step is to add a component that allows you to display your data. In many cases you will use one of the following components:

* [Card](doc:card)
* [Chart](doc:chart) 
* [Repeater](doc:repeater)

In the below example, a single Data Provider can supply information to the Sales Bar Chart, as well as a Repeater that displays a Container with a Text component *for every row the data provider returns*.

<Image align="center" src="https://files.readme.io/a9f7d6f55f32a684ca3483aabfbe61b11dd960a092b5536372da893ba11b5b69-Screenshot_2025-08-14_at_10.38.06.png" />

<br />

> 🚧 Using Multiple Data Providers
>
> Data Providers can use other Data Providers as a source
>
> Each time a Data Provider is set to fetch information from a table or query, it creates extra network traffic on screen-load. If you're re-using data in multiple components on your screen, consider using a Data Provider to fetch the table without filters, and then any subsequent Data Providers can fetch from that first Data Provider and filter as needed, cutting down on the amount of queries to your database.