---
title: Displaying data
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
After adding a data provider and selecting a datasource, the next step is to add a component that allows you to display your data. In many cases you will probably use one of the following components:

- [Table](doc:table) 
- [Card](doc:card)
- [Chart](doc:chart) 

After adding a data provider, chart, and table, your component tree would look like:

![](https://files.readme.io/5dacea3-image_11.png "image (11).png")

Notice, in the image below, how the one data provider supplies two components with data:

![](https://files.readme.io/f415ec3-image_12.png "image (12).png")

## Display user specific data

Sometimes, when building apps, you only want to display the data related to the user. For example, only show the sales records created by the user (specific salesperson). To do this, using the [Data Provider](doc:data-provider), in the settings panel, click the dropdown under the Data label, and under Relationships, select either `Current User.Table-Created By` or `Current User.Table-Updated By`.

![](https://files.readme.io/fc71794-CleanShot_2022-04-14_at_11.23.45.png "CleanShot 2022-04-14 at 11.23.45.png")

I've created a quick video below to help demonstrate how to do this in Budibase (including a bonus conditional UI tip).

[block:html]
{
  "html": "<div style=\"padding:56.25% 0 0 0;position:relative;\"><iframe src=\"https://player.vimeo.com/video/699377362?h=49d0a0ecc1&amp;badge=0&amp;autopause=0&amp;player_id=0&amp;app_id=58479\" frameborder=\"0\" allow=\"autoplay; fullscreen; picture-in-picture\" allowfullscreen style=\"position:absolute;top:0;left:0;width:100%;height:100%;\" title=\"New Recording - 14/04/2022, 11:14:44\"></iframe></div><script src=\"https://player.vimeo.com/api/player.js\"></script>"
}
[/block]



***



## Displaying relational data

You can also use a relationship data source to access data from any table relationship.

For example, you may be viewing the details of a manufacturer, but also want to see a list of their products on the same screen.

**Data**  
One Manufacturer -> Many Products 

**Design**

1. Add a [Table block](doc:table-block) nested below the [Repeater](doc:repeater) of the 'Manufacturer Detail' screen. 
2. Select the _Products_ relationship column from the datasource dropdown.

![](https://files.readme.io/fbbc920-1f01790-products-relationship.png)