---
title: Adding filtering
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
Below are the different methods of filtering within Budibase.

## Dynamic filtering

If you have a [Table](doc:table) component connected to a [Data Provider](doc:data-provider) component, you can add dynamic filtering by simply adding the [Dynamic filter](doc:dynamic-filter) component. This should work as soon as you add it.

![](https://files.readme.io/d2c31f1-144852752-8817cecc-b160-4985-8911-fcadd94afbec.png "144852752-8817cecc-b160-4985-8911-fcadd94afbec.png")

  

## Static filtering

Once you have added a data source to your dataprovider component you can access the filter drawer by simply clicking on it. In the drawer that comes up, you can add an expression. This is where you select a column you want to filter on. Let's say you wanted to filter out all rows with a price greater than 100 - you would select the appropriate column, select "More than", "value" and then type in 100. You are not limited to just one expression, you can add as many as you like. 

![](https://files.readme.io/7fc93f1-filter_1.png "filter (1).png")

  

## Filtering data from the front-end

Often you will find yourself wanting to let the user filter the data on the front-end. This can be achieved as well but requires a bit more work. To get started you will need a Form component. Select the schema you want, most often it will be the same thing you select in the data provider. Inside the form, put a Data Provider component as well as a field of your choice, an easy one to get started with is the Number Field. On the field component you select the column you want to filter on. In the example below we'll use the unit price.

![](https://files.readme.io/c496a60-structure.png "structure.png")

In the data provider, select the define filters button. Next, add an expression and select the same `Unit Price` that you selected for the number field component, `More than` and `Binding`. Select the lightning bolt icon to the right and select the number field from the list of bindings that comes up. After saving your users should now be able to filter the data themselves.

![](https://files.readme.io/770e268-dynamic_filter.png "dynamic_filter.png")

  

<br />

## Video tutorial: filter with two option pickers

<HTMLBlock>{`
<div style="padding:50% 0 0 0;position:relative;"><iframe src="https://player.vimeo.com/video/742702875?h=69fa04afed&amp;badge=0&amp;autopause=0&amp;player_id=0&amp;app_id=58479" frameborder="0" allow="autoplay; fullscreen; picture-in-picture" allowfullscreen style="position:absolute;top:0;left:0;width:100%;height:100%;" title="filter-with-options-pickers.mov"></iframe></div><script src="https://player.vimeo.com/api/player.js"></script>
`}</HTMLBlock>

You can also filter using a [relationship picker](https://docs.budibase.com/docs/filter-by-relationships).
