---
title: Data in design
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
A [Data provider](doc:data-provider) fetches data and provides it to all child components. Any child components which take in data to display, have a *Data* setting where you can select the data provider that passes it data. You can hook up as many components as you like to the same data provider, and they'll all be in sync with each other.

Data providers have settings to control filtering, sorting, and pagination. Because all of these data settings are handled by the data provider, it keeps all components as purely presentational. You can update the source of your data provider and your whole dashboard will instantly reflect an entirely different table! 

<Image align="center" src="https://files.readme.io/d3c958e7a81c8832e27e85bfe89a6b03c47b4cdad4863a820b320ca6370c881f-Screen_Recording_2025-08-13_at_14.36.44.gif" />

> 👍 Blocks
>
> For common data presentations, you can use [Blocks](doc:blocks). 
>
> Blocks bundle a data provider with other components, thus reducing the nesting in your <Glossary>Component Tree</Glossary>.

## Fetching data

After adding a Data provider, you must navigate to the <Glossary>Settings Panel</Glossary> and select a <Glossary>Datasource</Glossary> - as shown below:

<Image align="center" src="https://files.readme.io/e45f75feaaa5e7ad6c365159a0bbe72c71bd6f16a8f541a3864194b245876177-Screenshot_2025-08-13_at_14.45.02.png" />

> 🚧 Using Multiple Data Providers
>
> Data Providers can use other Data Providers as a source
>
> Each time a Data Provider is set to fetch information from a table or query, it creates extra network traffic on screen-load. If you're re-using data in multiple components on your screen, consider using a Data Provider to fetch the table without filters, and then any subsequent Data Providers can fetch from that first Data Provider and filter as needed, cutting down on the amount of queries to your database.

## Video tutorial

<HTMLBlock>{`
<iframe src="https://player.vimeo.com/video/746819452?h=48ad358370&title=0&byline=0&protrait=0" style="margin-top: -100px;" width="640" height="564" frameborder="0" allow="autoplay; fullscreen" allowfullscreen></iframe>
`}</HTMLBlock>
