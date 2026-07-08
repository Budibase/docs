---
title: Data in design
excerpt: ''
deprecated: false
hidden: false
metadata:
  title: ''
  description: ''
  robots: index
next:
  description: ''
---
A [Data provider](doc:data-provider) fetches data and passes it to child components. Any component that displays data has a **Data** setting where you can choose the provider.

Data providers control filtering, sorting, and pagination. This keeps the components presentational and makes it easier to reuse the same source across a screen.

> 👍 Blocks
>
> For common data presentations, use [Blocks](doc:blocks).
>
> Blocks bundle a data provider with other components and reduce nesting in your <Glossary>Component Tree</Glossary>.

## Fetching data

After adding a data provider, open the <Glossary>Settings Panel</Glossary> and select a <Glossary>Datasource</Glossary>.

> 🚧 Using Multiple Data Providers
>
> Data providers can use other data providers as a source.
>
> Reusing a single unfiltered provider can reduce extra network traffic when multiple components need the same data.
