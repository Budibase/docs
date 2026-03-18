---
title: REST bindings (tutorial)
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
Bindings pass runtime values into REST queries.

Use bindings for values that vary by user, row, form input, URL parameter, or action context.

## Binding syntax

Use handlebars syntax:

```handlebars
{{ bindingName }}
```

## Create a binding in a query

1. Open a query in API Editor
2. Add a value in URL/Params/Headers/Body using binding syntax
3. Define binding name and default value
4. Click **Send** to test defaults
5. Save query

## Where bindings can be used

* URL/path segments
* Query params
* Headers
* Request body
* Transformer scripts

## Example: filtered list query

Query goal: return records by status.

1. Create a `GET` query for the list endpoint
2. Add query param `status`
3. Set value to `{{ status }}`
4. Set default binding value to `all`
5. Send query and confirm response
6. Save query
7. In an app action, execute query and pass `status` dynamically

## Passing bindings from forms

Typical flow:

1. Add form fields
2. Configure button action **Execute query**
3. Map form values to query bindings
4. Run action
5. Confirm API receives mapped values

## Binding design guidelines

* Use descriptive names (`userId`, `status`, `startDate`).
* Set safe defaults for optional values.
* Avoid reusing one binding name for different concepts.
* Validate string/number/date formatting expected by API.

## Troubleshooting

* Binding appears literal in request: syntax not parsed correctly
* Value missing at runtime: no input mapped in action
* Wrong filter result: default value taking precedence unexpectedly

## Related guides

* [REST queries](doc:rest-queries)
* [REST variables](doc:rest-variables)
* [Bindings in forms](doc:form-bindings)
