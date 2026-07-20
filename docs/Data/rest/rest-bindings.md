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
Use bindings to pass runtime values into REST queries.

Bindings are useful for values that change by user, row, form input, URL parameter, or action context.

```handlebars
{{ bindingName }}
```

## Create a binding in a query

1. Open a query in API Editor
2. Add a value in the URL, params, headers, or body using binding syntax
3. Define binding name and default value
4. Click **Send** to test the default
5. Save the query

## Where bindings can be used

* URL/path segments
* Query params
* Headers
* Request body
* Transformer scripts

## Example

Return records by status.

1. Create a `GET` query for the list endpoint
2. Add query param `status`
3. Set value to `{{ status }}`
4. Set default binding value to `all`
5. Send query and confirm response
6. Save query
7. In an app action, execute query and pass `status` dynamically

## Passing bindings from forms

1. Add form fields
2. Configure button action **Execute query**
3. Map form values to query bindings
4. Run action
5. Confirm API receives mapped values

## Binding design guidelines

* Use descriptive names such as `userId`, `status`, and `startDate`
* Set safe defaults for optional values
* Avoid reusing one binding name for different concepts
* Match the string, number, or date format expected by the API

## Troubleshooting

* Binding appears literal in request: syntax is not parsed correctly
* Value missing at runtime: no input is mapped in the action
* Wrong filter result: the default value is taking precedence

## Related guides

* [REST queries](doc:rest-queries)
* [REST variables](doc:rest-variables)
* [Bindings in forms](doc:form-bindings)
