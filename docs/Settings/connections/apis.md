---
title: APIs
---
Use **Connections > APIs** to create reusable API connection definitions for REST-based integrations.

## Create a connection

1. Open **Workspace Settings > Connections > APIs**
2. Click **Add connection**
3. Choose one of the following:
   * **Template**: Start from a preconfigured API template
   * **Create custom**: Start from a blank connection

## Configure connection details

Within the connection editor, configure:

* **Name**
* **Server/base URL**
* **Authentication** (for example Basic, Bearer, OAuth2)
* **Default headers**
* **Static variables**
* **Query parameters**
* Advanced options such as certificate validation and image download behavior (when available)

## Save, edit, and delete

* Save to make the connection available for related API requests
* Edit from the APIs list to update credentials or defaults
* Delete from the connection editor if the connection is no longer needed

## Common issues

* Missing/invalid auth values can block requests
* Incorrect base URL or query parameter defaults can cause endpoint failures
* OAuth2 misconfiguration can fail token acquisition

## Related guides

* [REST data source](doc:rest)
* [REST authentication](doc:rest-authentication)
* [REST variables](doc:rest-variables)
* [Connections overview](doc:connections)