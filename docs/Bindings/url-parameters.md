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
URL variables let you pass information from one screen to another. For example, you can pass a row ID from a list screen to a detail screen and use it to load the selected record.

You can pass URL variables from:

1. [Link element](doc:link)
2. A `Navigate To` action

## Navigate To

Some templates, such as the *Client Contact List* app, use [row buttons](doc:button) instead of links. Tables can also run actions [when a user clicks a row](doc:table#on-row-click).

To open a detail screen for the selected row:

1. Create a detail screen with a path such as `/clients/:id`. A word prefixed with a colon in a screen path defines a URL variable.
2. Add a `Navigate To` action to the link, button, or table row on the list screen.
3. In the action's URL, pass a binding for the selected row ID in place of `:id`. Depending on the component, this could be a repeater row binding or `{{ Clicked row._id }}`. At runtime, the resulting path will look like `/clients/12345`.

On the detail screen, access the value with the `{{ URL.id }}` <Glossary>Binding</Glossary>. The binding name must match the name after the colon in the screen path.

To load only the selected client, add a filter to the [Data provider](doc:data-provider) on the detail screen:

1. Set the filter field to `_id`.
2. Set the operator to `Equals`.
3. Set the value to the `{{ URL.id }}` binding.

You can then use a [Repeater](doc:repeater) or another component to display fields from the filtered client.

## Multiple variables

While passing a row ID is the most common use case, you can define multiple variables in a screen path. Separate each variable with a slash, for example `/clients/:id/:companyId/:timestamp`.

Access each value through its corresponding URL binding, such as `{{ URL.id }}` or `{{ URL.companyId }}`.

A detailed example is available in this [discussion](https://github.com/Budibase/budibase/discussions/5299#discussioncomment-2530261).

## Test URL variables

When you edit a screen that contains URL variables, the **Screen settings** panel shows the route structure and lets you enter a temporary value for each variable. Enter a representative value, such as a row ID, to make it available under **URL** in the bindings drawer.

Temporary values only affect the builder. Use them to check how different records populate your components without repeatedly previewing or publishing the app.
