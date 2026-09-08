---
title: JSON
excerpt: Store structured JSON data in Budibase DB
deprecated: false
hidden: false
metadata:
  title: ''
  description: ''
  robots: index
next:
  description: ''
---
Use a JSON column when a row needs to store structured data with nested fields or arrays.

JSON columns include a schema so Budibase can expose the available bindings and form fields.

## Create a JSON column

1. Open the table
2. Click `Create column`
3. Set the type to `JSON`
4. Define the schema
5. Save the column

Use the form editor for simple structures. Use the raw JSON schema editor when you need nested objects or arrays.

## Use JSON columns

Budibase treats schema fields as normal top-level fields in tables, forms, filters, and bindings.

That means you can:

* Bind to nested values
* Filter on nested values
* Display nested fields in tables
* Save nested fields from forms

## Arrays

JSON arrays can be used with repeaters and table blocks.

When an array contains objects, Budibase exposes the object fields automatically.

When an array contains primitives, Budibase exposes a `value` field.

## Notes

* The schema controls which nested fields are available in the builder
* Fields not in the schema can still be stored, but they will not have bindings
* Use the JSON form component to validate input before saving
