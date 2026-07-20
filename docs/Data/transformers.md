---
title: Transformers
excerpt: Shape query results before they reach your app
deprecated: false
hidden: false
metadata:
  title: ''
  description: ''
  robots: index
next:
  description: ''
---
Use a transformer when a query returns data in a shape that needs to be simplified or reshaped before it reaches your app.

Transformers are written in JavaScript.

## What transformers receive

Transformers can access:

* `data` - the query results
* `params` - the bindings passed to the query

## Create a transformer

1. Create a datasource and query
2. Open the transformer editor for the query
3. Write JavaScript to reshape the response
4. Send the query to test the output
5. Save the query

## Return shape

A transformer must return an array.

If you return a single object, Budibase wraps it as one row.

If you return an array of values, Budibase treats each value as a row.

## Example

Use a transformer to count breweries by state.

```javascript
const counts = {}

for (const brewery of data) {
  const state = brewery.state
  counts[state] = (counts[state] || 0) + 1
}

return Object.entries(counts).map(([state, count]) => ({
  state,
  count,
}))
```

You can also add derived fields, such as a flag URL, before returning the final rows.

## Common uses

* Flatten nested API responses
* Count or group records
* Add derived fields
* Convert API data into a table-friendly shape

## Notes

* Keep the query working first, then refine the transformer
* Use `params` for binding values passed into the query
* Re-test the query after changing the transformer
