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

When you create a view within Budibase, it presents you with all the data from its linked table. This provides you with a canvas to manipulate your data without changing the data within the original table. This is crucial, as it protects your original data. It also allows you to create:

1. Filters
2. Groups
3. Calculations

When designing your UI, you can reference data from your views. So, if you have a table of sales people and their total sales, you can create a view and a _Calculation_ which gives you the total sales of all sales people. You can then reference the data from this view in the _Design_ section of Budibase, and display the answer to the calculation.

## How to create a new view

> 📘 Internal Budibase DB only
> 
> Currently views are only available for the internal DB. For other data sources, you may be able to make use of [Custom queries](https://docs.budibase.com/docs/data-sources#custom-queries).
> 
> You must have created a table before you can create a view.

To create a new table, click the `Add view` button, and give it a name.

By default, a view will display all the data in your table. You should add a filter and/or a calculation to change data is displayed.

[block:html]
{
  "html": "<div style=\"padding:75% 0 0 0;position:relative;\"><iframe src=\"https://player.vimeo.com/video/728551346?h=c61332fc57&amp;badge=0&amp;autopause=0&amp;player_id=0&amp;app_id=58479\" frameborder=\"0\" allow=\"autoplay; fullscreen; picture-in-picture\" allowfullscreen style=\"position:absolute;top:0;left:0;width:100%;height:100%;\" title=\"filter-view.mov\"></iframe></div>"
}
[/block]

## Filters

One of the core features of views is the ability to filter rows according to particular criteria. When a Row is filtered, it is not deleted—it's just hidden from the particular view you're using and remains within the table (views are virtual tables!).

Try adding filters when:

- You need to focus on rows that meet certain conditions (e.g. Classes between May and June, and taught by Albert Einstein).
- You need to display certain information, to certain people (e.g Each salesperson can only view their own commission).

### How to create a new Filter

To create a new Filter:

1. Click the `Filter` button
2. Click `Add Filter`
3. Select the Column you would like to filter
4. Select a filter function
5. Type your query
6. Click `Save`



## Calculations

Within Budibase, calculations are predefined formulas. Instead of writing the formulas, you can simply select from the list of predefined options.

### How to create a new Calculation

> 📘 
> 
> You must have an active Calculation to use the Group feature

To create a new Group:

1. Click the `Group` button
2. Select the Column you would like to Group by.
3. Click `Save`

## Groups

Budibase's Group feature allows you to group your rows together based on the column of your choosing. You can only apply a group to a calculation.