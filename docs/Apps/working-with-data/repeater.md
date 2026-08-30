---
title: Repeater
excerpt: ''
deprecated: false
hidden: false
metadata:
  title: ''
  description: kba_5hc3m
  robots: index
next:
  description: ''
---
Use the Repeater component to render the same content once for each row returned by a Data provider.

## Setup

1. Add a [Data provider](doc:data-provider)
2. Add a Repeater inside the Data provider
3. Select the Data provider as the Repeater source
4. Nest the components you want repeated

## Settings

Repeater settings are similar to [Container](doc:container) settings. Use them to control layout, spacing, and visibility.

Use the no-rows message when the data source returns an empty result set.

## Common use

Repeaters are useful when you need a custom row layout instead of a table.

Common patterns include:

* Cards
* Lists with buttons
* Detail panels
* Nested related data

## Edit screens

Repeaters are often used on edit screens to load one row of data into a form.

1. Filter the Data provider by row ID or URL variable
2. Add a Repeater to unwrap the single returned row
3. Nest the form inside the Repeater
4. Set the form type to `Update`
