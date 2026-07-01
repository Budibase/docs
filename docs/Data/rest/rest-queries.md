---
title: REST queries
excerpt: ''
deprecated: false
hidden: false
metadata:
  title: ''
  description: ''
  robots: index
next:
  description: ''
---
REST queries are configured in API Editor for a saved REST connection.

## Create a query

1. Open the API builder
2. Click **New API** in the sidebar to create a draft query
3. Select the API connection to use
4. Enter a clear query name
5. Set HTTP method
6. Enter endpoint path or full URL. Note that full URLs must include the protocol (e.g., `https://example.com`).
7. Configure Params, Headers, Body, and Bindings
8. Select an auth config (if required)
9. Click **Send**
10. Validate response and schema
11. Click **Save Query**

You can also start from **Workspace Settings > Connections > APIs** and click **Open in API Editor** on an existing connection.

## Query fields reference

| Area | What to configure | Notes |
| :-- | :-- | :-- |
| Method | `GET`, `POST`, `PUT`, `PATCH`, `DELETE` | Must match endpoint contract |
| URL/Path | Endpoint path or full URL | Usually path + connection base URL. Full URLs require a protocol prefix. |
| Params | Query-string key/value pairs | Supports bindings |
| Headers | Request headers | Supports bindings and shared defaults |
| Body | Payload for write/query APIs | Use valid JSON/XML/Text as required |
| Projects | Assign query to one or more projects | Used for organizing workspace resources |
| Auth selection | Connection auth config to apply | Choose per-query |
| Transformer | JavaScript response shaping | Re-test schema after changes |

## Query lifecycle checklist

Before first use:

1. Send query and confirm status code
2. Validate response shape matches expected schema
3. Save query

Before production use:

1. Test with realistic runtime bindings
2. Validate empty-state response behavior
3. Validate error-state handling in app actions

## Transformer example (flatten nested response)

javascript
const from = data.from
const to = data.to

return {
  fromId: from.id,
  fromSections: from.sections,
  toId: to.id,
  toSections: to.sections,
}


After applying a transformer:

1. Click **Send**.
2. Confirm schema fields.
3. Save the query.

## Common issues

* **Missing protocol**: Full URLs must include `http://` or `https://` to be valid. The **Send** button will be disabled and a warning displayed if the protocol is missing.
* `401/403`: wrong or missing auth config.
* `404`: wrong path or base URL.
* `400/422`: request payload does not match API contract.
* Empty rows with `200`: binding values not populated as expected.
* Schema mismatch in app: query changed but app bindings not updated.

## Related guides

* [REST API](doc:rest)
* [REST authentication](doc:rest-authentication)
* [REST bindings (tutorial)](doc:rest-bindings)
* [REST variables](doc:rest-variables)
* [REST query import](doc:rest-query-import)
* [REST pagination](doc:rest-pagination)
