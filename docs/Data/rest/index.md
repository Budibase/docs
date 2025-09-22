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

<Image align="center" src="https://files.readme.io/cb8d19fc220c338a372cb022acbe5131b9995d58a9bdf51a4499bcbaffb39ba8-Screenshot_2024-12-11_at_09.04.46.png" />

## Add a new REST datasource

To add a new `REST` data source click: 

* Data > Sources > Add > Rest > Continue

![](https://files.readme.io/09366c0-1_rest.png)

## Configuration

Add additional configuration to your data source in the form of queries, default headers, authentication and variables. Use the **Save** button when you have completed your changes. 

### Name

By default the REST data source will have a name like REST or REST-1, you can change this to something recognisable if desired.

### Queries

A query is an individual request in the rest data source. Either create one from scratch or import an existing. For more details see: [Rest Bindings](doc:rest-bindings)

## Video guide

<HTMLBlock>{`
<iframe src="https://player.vimeo.com/video/746819500?h=29b53dd8a1&title=0&byline=0&portrait=0" style="margin-top: -100px;" width="640" height="564" frameborder="0" allow="autoplay; fullscreen" allowfullscreen></iframe>
`}</HTMLBlock>
