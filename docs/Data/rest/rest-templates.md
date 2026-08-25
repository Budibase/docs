---
title: REST Templates
deprecated: false
hidden: false
metadata:
  robots: index
---
REST templates provide connection starters and allow you to reuse OpenAPI specifications across your workspace. You can find them under **Settings > APIs > API Specs**.

Templates are useful when you want known endpoint structures, default headers, and static variables preloaded.

## What templates usually include

Templates can provide:

* Base URL defaults
* Suggested endpoint actions
* Required static variables (for example owner/repo, project identifiers)
* Suggested auth pattern
* Template collections with child APIs for the same provider

Template content can still be edited after creation.

## Custom REST templates

You can upload your own OpenAPI 2.0 or 3.0 schemas (JSON or YAML) to create custom templates. This allows you to standardize API connections across your workspace without manually configuring the same endpoints repeatedly.

### Importing a custom spec

1. Go to **Workspace Settings > APIs > API Specs**.
2. Click **Import OpenAPI spec**.
3. Provide a name and description.
4. Upload your `.json` or `.yaml` file.
5. Click **Import**.

Once imported, your spec will appear in the **Imported API specs** section, where you can update the metadata or delete it if it is not in use.

## Create a connection from a template

1. Open **Workspace Settings > APIs > API Specs**
2. Locate the desired template in the **Imported** or **Pre-built** sections.
3. Click **Connect** next to the template name.
4. Set a clear **Display name** for the connection.
5. If prompted, select the specific API in the template collection
6. In **Credentials**, verify:
   * Base URL
   * URL parameters
   * Headers
   * Static variables
7. In **Authentication**, add required auth config
8. Click **Save**

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

Use **Create custom** connection when:

* Your API is not covered by existing templates and you do not have an OpenAPI spec to import.
* You need custom request/response shaping from the start
* You want to define naming conventions and query layout manually

## Related guides

* [REST API](doc:rest)
* [REST queries](doc:rest-queries)
* [REST authentication](doc:rest-authentication)
* [REST variables](doc:rest-variables)