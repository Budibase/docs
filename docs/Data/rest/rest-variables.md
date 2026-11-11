---
title: REST variables
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
Use REST variables to reuse values across multiple queries in the same connection.

## Variable types

* **Static variables**: manually defined constant values
* **Dynamic variables**: values extracted from response headers or body data

## Static variables

Use static variables for shared constants:

* API version
* Host or tenant identifiers
* Shared language or region codes
* Reused query fragments

### Create static variables

1. Open **Settings > Connections > APIs**
2. Open the connection
3. Go to **Credentials**
4. Add entries under **Static Variables**
5. Save the connection

## Dynamic variables

Use dynamic variables to chain queries.

Common patterns:

* Auth query returns a token used by later queries
* Lookup query returns an ID used by an update or delete query
* Cursor response field reused for pagination calls

### Create dynamic variables

1. Open the connection in API Editor
2. Run a source query
3. Create a dynamic variable from a response header or schema field
4. Name the variable clearly
5. Save the query changes

### Edit dynamic variables

1. Open the connection in **Settings > Connections > APIs**
2. Go to **Credentials**
3. Open **Dynamic Variables**
4. Update the expression or path
5. Save and retest downstream queries

## Expression examples

Header-derived value:

```handlebars
{{ info.headers.[set-cookie] }}
```

Body-derived value:

```handlebars
{{ data.0.[id] }}
```

Nested body path example:

```handlebars
{{ data.0.[user._id] }}
```

## Variables vs bindings

Use **variables** when values should be shared across queries.
Use **bindings** when values are supplied per execution.

## Common issues

* Variable resolves empty: the source query response shape changed
* Variable points to an object instead of a scalar: the expression path is too broad
* Query retries or fails with variable errors: the source variable query is not returning the expected value

## Related guides

* [REST bindings (tutorial)](doc:rest-bindings)
* [REST queries](doc:rest-queries)
