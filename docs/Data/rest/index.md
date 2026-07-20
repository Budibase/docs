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
Use the REST data source when you want Budibase to connect to an external API.

REST setup has two parts:

* **Connection settings** in **Workspace Settings > Connections > APIs**
* **Query settings** in the API Editor

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

## Connection tabs

| Tab | Purpose | Typical fields |
| :-- | :-- | :-- |
| Authentication | Reusable auth definitions for queries | Basic, Bearer, OAuth2 |
| Credentials | Shared request defaults | Base URL, URL parameters, headers, static variables |
| Advanced | Transport behavior | Reject unauthorized, Download images |

## Create a query

1. Open the API builder sidebar and click **New API**
2. Or open an existing connection and click **Open in API Editor**
3. Select or create the connection
4. Set the method and endpoint path
5. Add any required params, headers, body fields, or bindings
6. Select an auth config if needed
7. Click **Send**
8. Review the response and schema
9. Click **Save Query**

## Common migration notes (old to new UI)

* Older docs may reference **APIs** or **datasources** from legacy menus
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
