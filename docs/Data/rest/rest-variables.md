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
REST variables let you reuse values across multiple queries in the same connection.

## Variable types

* **Static variables**: manually defined constant values
* **Dynamic variables**: values extracted from response headers/body

## Static variables

Use static variables for shared constants:

* API version
* Host/tenant identifiers
* Shared language/region codes
* Reused query fragments

### Create static variables

1. Open **Settings > Connections > APIs**
2. Open your connection
3. Go to **Credentials**
4. Add entries under **Static Variables**
5. Click **Save**

## Dynamic variables

Use dynamic variables to chain queries.

Common patterns:

* Auth query returns token used by later queries
* Lookup query returns ID used by update/delete query
* Cursor response field reused for pagination calls

### Create dynamic variables

1. Open connection in API Editor
2. Run a source query
3. Create dynamic variable from response header or schema field.
4. Name the variable clearly.
5. Save query changes.

### Edit dynamic variables

1. Open connection in **Settings > Connections > APIs**.
2. Go to **Credentials**.
3. Open **Dynamic Variables**.
4. Update expression/path.
5. Save and retest downstream queries.

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

* Variable resolves empty: source query response shape changed.
* Variable points to object instead of scalar: expression path too broad.
* Query retries/fails with variable errors: source variable query not returning expected value.

## Related guides

* [REST bindings (tutorial)](doc:rest-bindings)
* [REST queries](doc:rest-queries)
