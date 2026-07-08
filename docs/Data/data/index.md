---
title: Introduction to data
excerpt: ''
deprecated: false
hidden: false
metadata:
  title: ''
  description: ''
  robots: index
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
      slug: rest
      title: REST API
---
Use the Data section to add and manage the tables, views, and datasources that power your workspace.

Your data model should usually come first. It shapes the screens, automations, filters, and permissions you build later.

## What data is for

Use data to:

* Store rows and fields in a structured way
* Define relationships between records
* Control what users can read or write
* Generate screens and automation inputs

## Budibase DB

Every workspace starts with a Budibase DB datasource.

The built-in `Users` table lives there as well and cannot be removed.

Use Budibase DB when you want the simplest path to app data or when you are prototyping a new workflow.

## Add datasources

Add datasources from the Data tab.

Common source types include:

* External SQL databases
* REST APIs
* Document databases
* Budibase DB tables

After you add a datasource, you can create tables, configure views, and reuse that data across apps and automations in the same workspace.

## Data workflow

A typical workflow looks like this:

1. Define the data model.
2. Add the datasource.
3. Configure tables and columns.
4. Add views and permissions.
5. Build screens and automations on top of that data.

## Related guides

* [BudibaseDB](doc:budibasedb)
* [PostgreSQL + MySQL](doc:postgresql)
* [MongoDB](doc:mongodb)
* [REST API](doc:rest)
