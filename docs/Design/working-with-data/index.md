---
title: Data in design
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
A [data provider component](https://docs.budibase.com/docs/data-provider) fetches data and provides it to all child components. Any child components which take in data to display, have a simple *Data* setting where you can select the data provider that passes it data. You can hook up as many components as you like to the same data provider, and they'll all be in sync with each other.

Data providers have settings to control filtering, sorting, and pagination. Because all of these data settings are handled by the data provider, it keeps all components as purely presentational. You can update the source of your data provider and your whole dashboard will instantly reflect an entirely different table!

![](https://files.readme.io/89c88b9-data-in-design-overview.gif "data-in-design-overview.gif")

## Fetching data

> 📘
>
> To fetch and display data within your user interface, you need to use the [Data Provider](doc:data-provider).

After adding a Data Provider, you must navigate to the settings panel (the right panel) and select a data source - the dropdown beside the label data. See the image below:

![](https://files.readme.io/c318eac-b94b86a-image_9.png "b94b86a-image_9.png")

## Video tutorial

<HTMLBlock>{`
<iframe src="https://player.vimeo.com/video/746819452?h=48ad358370&title=0&byline=0&protrait=0" style="margin-top: -100px;" width="640" height="564" frameborder="0" allow="autoplay; fullscreen" allowfullscreen></iframe>
`}</HTMLBlock>
