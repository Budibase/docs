---
title: Displaying data
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
After adding a data provider and selecting a datasource, the next step is to add a component that allows you to display your data. In many cases you will use one of the following components:

* [Card](doc:card)
* [Chart](doc:chart) 
* [Repeater](doc:repeater)

In the below example, a single Data Provider can supply information to the Sales Bar Chart, as well as a Repeater that displays a Container with a Headline and Paragraph *for every row the data provider returns*.

<Image align="center" src="https://files.readme.io/31a052230e504d8ce8ad432d0ffa33518792f5ca11728aea1a16e7e39f75cea5-Screenshot_2024-10-24_at_10.25.03.png" />

## Display user specific data

Sometimes, when building apps, you only want to display the data related to the user. For example, only show the sales records related to the user (specific salesperson). To do this, using the [Data provider](doc:data-provider), in the settings panel, click the dropdown under the Data label, and under Relationships, select either `Current User.sales`.

<Image align="center" src="https://files.readme.io/f17b00ad5e753ee2d1203e832cf51d3123945228f027620aecc1d1a080c7f1b3-Screenshot_2024-10-24_at_10.39.04.png" />

I've created a quick video below to help demonstrate how to do this in Budibase (including a bonus conditional UI tip).

<HTMLBlock>{`
<div style="padding:56.25% 0 0 0;position:relative;"><iframe src="https://player.vimeo.com/video/699377362?h=49d0a0ecc1&amp;badge=0&amp;autopause=0&amp;player_id=0&amp;app_id=58479" frameborder="0" allow="autoplay; fullscreen; picture-in-picture" allowfullscreen style="position:absolute;top:0;left:0;width:100%;height:100%;" title="New Recording - 14/04/2022, 11:14:44"></iframe></div><script src="https://player.vimeo.com/api/player.js"></script>
`}</HTMLBlock>

***

## Displaying relational data

You can also use a relationship data source to access data from any table relationship.

**Data**\
One User -> Sales 

**Design**

1. Add a [Data Provider](doc:data-provider) and nest inside it a [Bar Chart](doc:bar-chart) and [Repeater](doc:repeater) as siblings.
2. Set the Data Provider's source to the Relationship of Current User.sales
3. In the Repeater, add a container with headlines or paragraphs to display information from the table.

This arrangement will show only sales made by the current user.

<br />

<Image align="center" src="https://files.readme.io/db987ea5cc155d775fe6c14c1ac29759c64c3bb77442098c47f0fbabc34cadc1-Screenshot_2024-10-24_at_11.07.58.png" />

<br />

> 🚧 Using Multiple Data Providers
>
> Data Providers can use other Data Providers as a source
>
> Each time a Data Provider is set to fetch information from a table or query, it creates extra network traffic on screen-load. If you're re-using data in multiple components on your screen, consider using a Data Provider to fetch the table without filters, and then any subsequent Data Providers can fetch from that first Data Provider and filter as needed, cutting down on the amount of queries to your database.
