---
title: REST Templates
deprecated: false
hidden: false
metadata:
  robots: index
---
REST templates provide prebuilt connection starters under **Settings > Connections > APIs**.

Templates are useful when you want known endpoint structures, default headers, and static variables preloaded.

## What templates usually include

Templates can provide:

* Base URL defaults
* Suggested endpoint actions
* Required static variables (for example owner/repo, project identifiers)
* Suggested auth pattern
* Template collections with child APIs for the same provider

Template content can still be edited after creation.

## Create a connection from a template

1. Open **Workspace Settings > Connections > APIs**
2. Click **Add connection**
3. Select a template
4. Open the generated connection draft
5. Set a clear **Display name**
6. If prompted, select the specific API in the template collection
7. In **Credentials**, verify:
   * Base URL
   * URL parameters
   * Headers
   * Static variables
8. In **Authentication**, add required auth config
9. Click **Save**

## Shared vs independent template collections

Some template collections include child APIs and use one of two connection modes:

* **Shared**: child APIs share connection settings (for example base URL and auth). You choose the child API when creating or editing queries.
* **Independent**: each child API is treated as its own connection choice. You select the child API when creating the connection.

## Validate the template connection

1. Click **Open in API Editor**
2. Open a template query
3. Fill required bindings
4. Click **Send**
5. Confirm expected response
6. Click **Save Query**

## Troubleshooting template setup

* `401/403` after template import: auth is missing or invalid
* `404` on template query: base URL/path mismatch for your target service
* Empty response: required bindings not set or wrong defaults
* Template variable locked/required: ensure value exists in **Credentials > Static Variables**
* Missing endpoint list for a child API: confirm the correct child API is selected for the connection or query

## When to use Create custom instead

Use **Create custom** when:

* Your API is not covered by templates
* You need custom request/response shaping from the start
* You want to define naming conventions and query layout manually

## Related guides

* [REST API](doc:rest)
* [REST queries](doc:rest-queries)
* [REST authentication](doc:rest-authentication)
* [REST variables](doc:rest-variables)
