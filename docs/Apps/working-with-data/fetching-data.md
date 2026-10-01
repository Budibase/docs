---
title: Displaying data
excerpt: ''
deprecated: false
hidden: false
metadata:
  title: ''
  description: kba_5hc02
  robots: index
next:
  description: ''
---
After you add a Data provider, connect a component that can display the returned rows.

Common display components include:

* [Card](doc:card)
* [Chart](doc:chart)
* [Repeater](doc:repeater)

## Share one data source

Use a single Data provider when multiple components need the same rows. This reduces duplicate queries and keeps the screen easier to maintain.

## Common pattern

1. Add a Data provider
2. Choose a datasource
3. Add a display component such as a Table, Chart, Card, or Repeater
4. Bind the display component to the provider

## Reuse data

If a screen needs the same data in several places, fetch it once and reuse the provider rather than building separate queries for each component.
