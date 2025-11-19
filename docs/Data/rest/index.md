---
title: REST API
excerpt: Access APIs using the REST data source
deprecated: false
hidden: false
metadata:
  title: ''
  description: ''
  robots: index
next:
  description: ''
  pages:
    - type: basic
      slug: rest-queries
      title: REST Queries
    - type: basic
      slug: rest-bindings
      title: REST Bindings (tutorial)
    - type: basic
      slug: rest-query-import
      title: REST Query Import
    - type: basic
      slug: rest-authentication
      title: REST Authentication
    - type: basic
      slug: rest-variables
      title: REST Variables
---
The REST data source is a powerful integration in Budibase that allows you to connect to data over HTTP.

## Add a new REST datasource

To add a new `REST` data source click:

* > API's > Add new API > Custom REST API 

<Image align="center" border={false} width="40% " src="https://files.readme.io/c46ce811c0f4f3df2df78edaff895df9e966fa33696ea655c07359cd6a7ee91c-Screenshot_2025-11-19_at_01.05.48.png" />

<br />

<Image align="center" border={false} width="80% " src="https://files.readme.io/6a5e595b7b7e919d3bee6194e0d74fb846aee47dc5529adad799997749f76dea-Screenshot_2025-11-19_at_01.08.06.png" />

## Configuration

Add additional configuration to your data source in the form of queries, default headers, authentication and variables

<Image align="center" border={false} width="70% " src="https://files.readme.io/9764f80b23e9c06bbc3abf78b62fd2b4b70a848c5a832ca53840fdf3941220c1-image.png" />

<br />

### Name

By default the REST data source will have a name like REST or REST-1, you can change this to something recognisable if desired.

### Queries

A query is an individual request in the rest data source. Either create one from scratch or import an existing. For more details see: [Rest Bindings](doc:rest-bindings)

## Video guide

<HTMLBlock>{`
<iframe src="https://player.vimeo.com/video/746819500?h=29b53dd8a1&title=0&byline=0&portrait=0" style="margin-top: -100px;" width="640" height="564" frameborder="0" allow="autoplay; fullscreen" allowfullscreen></iframe>
`}</HTMLBlock>
