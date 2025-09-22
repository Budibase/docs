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

If you have a [Table](doc:table) component connected to a [Data provider](doc:data-provider) component, you can add dynamic filtering by simply adding the [Dynamic filter](doc:dynamic-filter) component. This should work as soon as you add it.

![](https://files.readme.io/d2c31f1-144852752-8817cecc-b160-4985-8911-fcadd94afbec.png "144852752-8817cecc-b160-4985-8911-fcadd94afbec.png")

## Static filtering

Once you have linked a <<glossary:Datasource>> to a component, you can access the filter drawer by clicking the button beside the _Filtering_ setting in the <<glossary:Settings Panel>>.

[block:image]
{
  "images": [
    {
      "image": [
        "https://files.readme.io/ac1dd7d-Screenshot_2023-09-07_at_11.40.50.png",
        "",
        "Adding filters to a Data provider"
      ],
      "align": "center",
      "caption": "Adding filters to a Data provider"
    }
  ]
}
[/block]

The filter drawer is where you select the columns you want to filter on. For example, you may want to return sales records for the region of Europe, where the unit price is within a range.

[block:image]
{
  "images": [
    {
      "image": [
        "https://files.readme.io/8503d6d-Screenshot_2023-09-07_at_11.55.54.png",
        "filter (1).png",
        ""
      ],
      "align": "center"
    }
  ]
}
[/block]

As shown above, you can filter on multiple columns, and even filter on the same column multiple times. 

## Filtering data from the front-end

Often you will find yourself wanting to let the user filter the data on the front-end. This can be achieved as well but requires a bit more work. To get started you will need a Form component. Select the schema you want, most often it will be the same thing you select in the data provider. Inside the form, put a Data Provider component as well as a field of your choice, an easy one to get started with is the Number Field. On the field component you select the column you want to filter on. In the example below we'll use the unit price.

![](https://files.readme.io/ece9a69-form_component-tree.png)

In the data provider, select the define filters button. Next, add an expression and select the same `Unit Price` that you selected for the number field component, `More than` and `Binding`. Select the lightning bolt icon to the right and select the number field from the list of bindings that comes up. After saving your users should now be able to filter the data themselves.

![](https://files.readme.io/770e268-dynamic_filter.png "dynamic_filter.png")

## Filtering options

When filtering, there are a couple of settings that can be tweaked that determine how the filters are handled. 

#### Behaviour

[block:image]
{
  "images": [
    {
      "image": [
        "https://files.readme.io/f7b4759-filter_behaviour.png",
        "",
        "Changing the filter behaviour"
      ],
      "align": "center",
      "caption": "Changing the filter behaviour"
    }
  ]
}
[/block]

- **Match all filters**: the default; all filters must match when returning records
- **Match any filter**: records are returned when they match on any of the provided filters

<br />

#### When filter empty

This setting is specific to filters that are using <<glossary:Binding>>s. It determines what data should be returned if the binding values are blank.

By default, if all of the filter binding values are empty, then all the rows will be returned. If _Return no rows_ is selected and the binding values are empty, then no rows will be returned.

[block:image]
{
  "images": [
    {
      "image": [
        "https://files.readme.io/6f5ef01-Screenshot_2023-09-07_at_13.13.00.png",
        "",
        ""
      ],
      "align": "center"
    }
  ]
}
[/block]

As shown above, the filters are bound to two form fields which are currently empty, therefore _all table rows_ are returned.

[block:image]
{
  "images": [
    {
      "image": [
        "https://files.readme.io/e6b955c-Screenshot_2023-09-07_at_13.16.39.png",
        "",
        ""
      ],
      "align": "center"
    }
  ]
}
[/block]

In this screenshot we can see that the _Return no rows_ option is selected, which prevents rows being displayed as the bound form values are empty.

<br />

## Video tutorial: filter with two option pickers

[block:html]
{
  "html": "<div style=\"padding:50% 0 0 0;position:relative;\"><iframe src=\"https://player.vimeo.com/video/742702875?h=69fa04afed&amp;badge=0&amp;autopause=0&amp;player_id=0&amp;app_id=58479\" frameborder=\"0\" allow=\"autoplay; fullscreen; picture-in-picture\" allowfullscreen style=\"position:absolute;top:0;left:0;width:100%;height:100%;\" title=\"filter-with-options-pickers.mov\"></iframe></div><script src=\"https://player.vimeo.com/api/player.js\"></script>"
}
[/block]

You can also filter using a [relationship picker](https://docs.budibase.com/docs/filter-by-relationships).