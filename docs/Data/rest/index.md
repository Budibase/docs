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
Budibase REST integrations are configured from **Workspace Settings > Connections > APIs**.

A REST integration has two layers:

* **Connection-level config** in Settings (auth, base URL, shared headers/variables)
* **Query-level config** in API Editor (method, path, body, bindings, pagination, transformer, projects)

## Create a REST connection

1. Open your workspace
2. Go to **Workspace Settings > Connections > APIs**
3. Click **Add connection**
4. Choose either:
    * **Create custom** for direct/manual setup
    * A **template** for a pre-seeded setup
5. Enter a **Display name**
6. Open **Credentials** and set **Base URL**
7. Add any required shared headers/URL params/static variables
8. Click **Save**

## Connection tabs reference

| Tab | Purpose | Typical fields |
| :-- | :-- | :-- |
| Authentication | Reusable auth definitions for queries | Basic, Bearer, OAuth2 |
| Credentials | Shared request defaults | Base URL, URL parameters, headers, static variables |
| Advanced | Transport behavior | Reject unauthorized, Download images |

## Open the API Editor and create your first query

You can start query creation from either path below:

1. In the API builder sidebar, click **New API** to start a draft query
2. In Settings, open a saved connection and click **Open in API Editor**
3. Select or create the connection for your draft query
4. Set method and endpoint path
5. Add required params/headers/body
6. Pick auth config if needed
7. Click **Send**
8. Review response and schema
9. Click **Save Query**

## Common migration notes (old to new UI)

* Older docs and workflows may reference **APIs** or **datasources** from legacy menus
* Current workflow for REST setup starts in **Settings > Connections > APIs**
* Query authoring still happens in the API Editor via **Open in API Editor**

## Recommended reading order

1. [REST Templates](doc:rest-templates)
2. [REST queries](doc:rest-queries)
3. [REST authentication](doc:rest-authentication)
4. [REST bindings (tutorial)](doc:rest-bindings)
5. [REST variables](doc:rest-variables)
6. [REST query import](doc:rest-query-import)
7. [REST pagination](doc:rest-pagination)
8. [REST OAuth2](doc:rest-oauth2)
9. [REST example](doc:rest-example)
