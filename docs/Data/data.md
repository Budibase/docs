---
title: Introduction to data
excerpt: ''
deprecated: false
hidden: false
metadata:
  title: ''
  description: ''
  robots: noindex
next:
  description: >-
    Now that you understand the basics of data sources, you might want to dive
    into these pages next
  pages:
    - type: basic
      slug: budibasedb
      title: BudibaseDB
    - type: basic
      slug: postgresql
      title: PostgreSQL + MySQL
    - type: basic
      slug: mongodb
      title: MongoDB
    - type: basic
      slug: airtable
      title: Airtable
    - type: basic
      slug: rest
      title: REST API
---
The data section in the Budibase UI is where you add and manage your data. Budibase apps rely on data and it is strongly advised to create your data structure before designing your web application. Your data structure will involve tables, columns, rows, and views - these are the building blocks that hold and present your data in a structured manner.

Predefining the data structure also greatly helps in building the UI as the UI can be automatically generated based on the data structure, as well as any logic, filtering, and sorting.

Within Budibase we have a single built-in <Glossary>Datasource</Glossary> and several external datasources. When using a self-hosted instance of Budibase, an external datasource can still live on the same device, just not within the Budibase container.

## Getting started with data

By default, every Budibase application will start with a <Glossary>Budibase DB</Glossary> datasource. This database contains a [Users table](doc:users-table) which is considered a special table. This table includes all the users who have access to your application, with their respective roles.

This table is not removable as the functioning of your application depends on it. Any further BudibaseDB tables will also be added to this same source.

<HTMLBlock>{`
<div style="padding:56.25% 0 0 0;position:relative;"><iframe src="https://player.vimeo.com/video/719112585?h=4e3d1c370e&amp;badge=0&amp;autopause=0&amp;player_id=0&amp;app_id=58479" frameborder="0" allow="autoplay; fullscreen; picture-in-picture" allowfullscreen style="position:absolute;top:0;left:0;width:100%;height:100%;" title="03-relationships-with-head"></iframe></div><script src="https://player.vimeo.com/api/player.js"></script>
`}</HTMLBlock>

## Adding new datasources

You can easily add new datasources to any Budibase application. There are a broad set of available external datasources you can connect to right from the Budibase UI. 

You can add new data sources by clicking the `Add source` button on the top left of the screen when you're in your app on the Data tab, as seen in the image below.

<Image alt="Adding a datasource" align="center" src="https://files.readme.io/ad4bf3e-Screenshot_2022-12-12_at_08.19.51.png">
  Adding a datasource
</Image>

Once you've clicked the `Add source` button, you'll see a modal presented with the available datasources. Pick your datasource of choice, and you will be presented with a configuration screen to connect to your remote datasource.

<Image alt="Choose a datasource" align="center" src="https://files.readme.io/8d2e7b0-Screenshot_2023-06-27_at_12.06.35.png">
  Choose a datasource
</Image>

You can add as many datasources as you need following the same process.

To know more about a particular datasource, look at the relevant documentation page in the menu.
