---
title: REST pagination
excerpt: Configure paginated REST queries for table/repeater data
deprecated: false
hidden: false
metadata:
  robots: index
---
Use pagination when an API returns list data in pages.

## Before you start

1. Create and save a REST connection
2. Create and validate a list query
3. Confirm which pagination model the API uses

## Pagination models

| Model | Typical request fields | Typical response fields |
| :-- | :-- | :-- |
| Page number | `page`, `limit` | `totalPages`, `page`, `hasNext` |
| Offset/limit | `offset`, `limit` | `total`, `offset`, `count` |
| Cursor | `cursor`, `limit` | `nextCursor` or bookmark token |

## Configure query pagination

1. Open the query in API Editor
2. Enable pagination
3. Select the pagination type
4. Map the request field names
5. Map the response field path for the next page value
6. Click **Send** to validate progression
7. Save the query

## Cursor-specific guidance

* Map to the API field that returns the next cursor token
* Verify the token comes from the raw response path expected by Budibase
* Ensure stable sort order to avoid duplicate or missing rows

## Use paginated query in components

1. Bind the query or data provider to a table or repeater
2. Enable component pagination controls where applicable
3. Validate first, next, previous, and final page behavior

## Troubleshooting matrix

| Symptom | Likely cause | Fix |
| :-- | :-- | :-- |
| Always shows page 1 | Request page or cursor field not mapped | Re-check request field mapping |
| Stops after first page | Response continuation path incorrect | Correct the response field path |
| Duplicate rows across pages | Non-deterministic API sorting | Add stable sort in the API query |
| Missing rows | Offset or page-size mismatch | Verify API math and defaults |

## Related guides

* [REST queries](doc:rest-queries)
* [REST variables](doc:rest-variables)
