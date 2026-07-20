---
title: REST templates
excerpt: Start REST connections from a template
deprecated: false
hidden: false
metadata:
  title: ''
  description: ''
  robots: index
---
Use REST templates when you want a prebuilt starting point for a connection.

Templates can include endpoint structure, default headers, static variables, and suggested auth.

## What templates usually include

Templates can provide:

* Base URL defaults
* Suggested endpoints
* Required static variables such as owner, repo, or project identifiers
* Suggested auth patterns
* Template collections with child APIs for the same provider

Template content can still be edited after creation.

## Create a connection from a template

1. Open **Workspace Settings > Connections > APIs**
2. Click **Add connection**
3. Select a template
4. Open the generated connection draft
5. Set a clear **Display name**
6. If prompted, select the specific API in the template collection
7. In **Credentials**, verify the base URL, URL parameters, headers, and static variables
8. In **Authentication**, add any required auth config
9. Click **Save**

## Shared vs independent template collections

Some template collections include child APIs and use one of two connection modes:

* **Shared**: child APIs share connection settings such as base URL and auth
* **Independent**: each child API is treated as its own connection choice

## Validate the template connection

1. Click **Open in API Editor**
2. Open a template query
3. Fill required bindings
4. Click **Send**
5. Confirm expected response
6. Click **Save Query**

## Troubleshooting template setup

* `401/403` after template import: auth is missing or invalid
* `404` on a template query: the base URL or path does not match the target service
* Empty response: required bindings are missing or have the wrong defaults
* Template variable locked or required: ensure the value exists in **Credentials > Static Variables**
* Missing endpoint list for a child API: confirm the correct child API is selected

## When to use Create custom instead

Use **Create custom** when:

* Your API is not covered by templates
* You need custom request or response shaping from the start
* You want to define naming conventions and query layout manually

## Related guides

* [REST API](doc:rest)
* [REST queries](doc:rest-queries)
* [REST authentication](doc:rest-authentication)
* [REST variables](doc:rest-variables)
