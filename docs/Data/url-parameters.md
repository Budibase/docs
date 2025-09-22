---
title: URL variables
excerpt: Passing data between screens
deprecated: false
hidden: false
metadata:
  title: ''
  description: ''
  robots: noindex
next:
  description: ''
---
Oftentimes you will need to pass information between screens. This takes two main forms:

1. [Link element](doc:link)
2. 'Navigate To' Action

A common example is opening a detailed view for a row entry.

## Navigate To

Some templates such as the _Client Contact List_ app use <a href="https://docs.budibase.com/docs/button#adding-buttons-to-table-rows">row buttons</a> instead of links. Tables also allow you to define actions [on row click](https://docs.budibase.com/docs/table-block#on-row-click).

In these cases, navigation is controlled by the navigation action:

![](https://files.readme.io/39afb8b-Screenshot_2022-04-20_at_17.05.15.png "Screenshot 2022-04-20 at 17.05.15.png")

Here we are passing the row id of the client into the URL path. 

In the `/clients/:id` details screen we will be able to make use of this row id.  
A word prefixed with a colon within a route denotes a path variable. 

The id is accessed using the `{{ URL.id }}` <<glossary:Binding>>

For example, because we only want to show the chosen client, we can add the following <a href="https://docs.budibase.com/docs/searchfilter-data#static-filtering">Filter</a> to the clients' <a href="https://docs.budibase.com/docs/data-provider">Data Provider</a>

![](https://files.readme.io/e0eff42-Screenshot_2022-04-20_at_19.01.31.png "Screenshot 2022-04-20 at 19.01.31.png")

This can then be used in conjunction with a [Repeater](doc:repeater) to access the fields of the filtered client:



## Multiple variables

Whilst passing a row id is the most common use case, you can pass many variables into the URL, with each being separated by a slash, e.g. `/clients/:id/:companyId/:timestamp/:customName/:etc`

A detailed example can be found in this [discussion](https://github.com/Budibase/budibase/discussions/5299#discussioncomment-2530261).

<br />

## Video tutorial

[block:html]
{
  "html": "<iframe src=\"https://player.vimeo.com/video/746819326?h=2aa914721e&title=0&portrait=0&byline=0\" style=\"margin-top: -100px;\" width=\"640\" height=\"564\" frameborder=\"0\" allow=\"autoplay; fullscreen\" allowfullscreen></iframe>"
}
[/block]