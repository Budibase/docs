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

<HTMLBlock>{`
<iframe src="https://player.vimeo.com/video/840833107?badge=0&amp;autopause=0&amp;player_id=0&amp;app_id=58479" width="635" height="410" frameborder="0" allow="autoplay; fullscreen; picture-in-picture" allowfullscreen title="Adding a data provider"></iframe>
`}</HTMLBlock>

> 👍 Blocks
>
> For common data presentations, you can use [Blocks](doc:blocks). 
>
> Blocks bundle a data provider with other components, thus reducing the nesting in your <Glossary>Component Tree</Glossary>.

## Fetching data

After adding a Data provider, you must navigate to the <Glossary>Settings Panel</Glossary> and select a <Glossary>Datasource</Glossary> - as shown below:

![](https://files.readme.io/c318eac-b94b86a-image_9.png "b94b86a-image_9.png")

## Video tutorial

<HTMLBlock>{`
<iframe src="https://player.vimeo.com/video/746819452?h=48ad358370&title=0&byline=0&protrait=0" style="margin-top: -100px;" width="640" height="564" frameborder="0" allow="autoplay; fullscreen" allowfullscreen></iframe>
`}</HTMLBlock>
