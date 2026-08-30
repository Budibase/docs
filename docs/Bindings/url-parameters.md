---
title: URL variables
excerpt: Passing data between screens
deprecated: false
hidden: false
metadata:
  title: ''
  description: kba_5hf0i
  robots: index
next:
  description: ''
---
Sometimes you need to pass information between screens. There are two common ways to do that:

1. [Link element](doc:link)
2. 'Navigate To' Action

One common example is opening a detailed view for a row.

## Navigate To

Some templates, such as the *Client Contact List* app, use <a href="https://docs.budibase.com/docs/button#adding-buttons-to-table-rows">row buttons</a> instead of links. Tables also let you define actions [on row click](https://docs.budibase.com/docs/table-block#on-row-click).

In these cases, navigation is controlled by the navigation action:

Here, pass the client's row ID into the URL path.

In the `/clients/:id` details screen, you can use that row ID. A word prefixed with a colon in a route denotes a path variable.

Access the ID using the `{{ URL.id }}` <Glossary>Binding</Glossary>.

For example, if you only want to show the chosen client, add the following <a href="https://docs.budibase.com/docs/searchfilter-data#static-filtering">Filter</a> to the client's <a href="https://docs.budibase.com/docs/data-provider">Data Provider</a>.

Use it with a [Repeater](doc:repeater) to access the fields of the filtered client.

## Multiple variables

While passing a row ID is the most common use case, you can pass multiple variables in the URL, each separated by a slash, for example `/clients/:id/:companyId/:timestamp/:customName/:etc`.

A detailed example is available in this [discussion](https://github.com/Budibase/budibase/discussions/5299#discussioncomment-2530261).

<br />

## Testing URL Variables

A `Temporary URL variables` input is available in the Screen Settings area. It previews how a URL is structured, such as `edit/{variable}`, so you can pass variables while building screens.

This lets you see data populate components without previewing or publishing changes. It helps you understand how different records affect the layout.

### Benefits:

* Eliminates the need to repeatedly use Preview or Publish to test variable-driven screens.
* Speeds up development by reducing context switching.
* Provides instant feedback on how records populate within components.
