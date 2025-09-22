---
title: Views
excerpt: Learn more about views within Budibase
deprecated: false
hidden: false
metadata:
  title: ''
  description: ''
  robots: noindex
next:
  description: ''
---
Views are virtual tables that present data from a table with a preset filter or grouping. 

When you create a View within Budibase, it presents you with all the data from its linked table. This provides you with a canvas to manipulate your data without changing the data within the original table. This is crucial, as it protects your original data. It also allows you to create:

1. Filters
2. Sort
3. Hide columns

When designing your UI, you can use a View with auto-generated screens, as well as for custom UI development. Say you have a table of Sales employees, and their total sales, you can create a view which gives you the total sales of all Sales employees. You can then reference the data from this View in the *Design* section of Budibase.

## How to create a new view

> 📘 Internal Budibase DB only
>
> Currently views are only available for the internal DB. For other data sources, you may be able to make use of [Custom queries](https://docs.budibase.com/docs/data-sources#custom-queries).
>
> You must have created a table before you can create a view.

To create a new view, click the `Create view` button, and give it a name.

<HTMLBlock>{`
<div style="padding:75% 0 0 0;position:relative;"><iframe src="https://player.vimeo.com/video/728551346?h=c61332fc57&amp;badge=0&amp;autopause=0&amp;player_id=0&amp;app_id=58479" frameborder="0" allow="autoplay; fullscreen; picture-in-picture" allowfullscreen style="position:absolute;top:0;left:0;width:100%;height:100%;" title="filter-view.mov"></iframe></div>
`}</HTMLBlock>

## Filters

One of the core features of views is the ability to filter rows according to particular criteria. When a Row is filtered, it is not deleted—it's just hidden from the particular view you're using and remains within the table (views are virtual tables!).

Try adding filters when:

* You need to focus on rows that meet certain conditions (e.g. Classes between May and June, and taught by Albert Einstein).
* You need to display certain information, to certain people (e.g Each salesperson can only view their own commission).

### How to create a new filter

To create a new filter:

1. Click the `Filter` button
2. Click `Add Filter`
3. Select the Column you would like to filter
4. Select a filter function
5. Type your query
6. Click `Save`

You can also save a filtered table as a new view:

<Image align="center" src="https://files.readme.io/6aa3650-Screenshot_2023-09-08_at_15.36.32.png" />
