---
title: Forms
excerpt: Learn about building forms with Budibase.
deprecated: false
hidden: false
metadata:
  title: ''
  description: ''
  robots: index
next:
  description: ''
---
Use forms to create and edit data with a consistent layout.

Forms are built from three main component types:

1. `Form`
2. `Field group`
3. Input components

## Form component

The Form component is the top-level container. Place [Field groups](doc:field-groups) inside it.

Use a form when you want Budibase to handle submitted values, validation, and save actions together.

### Form schema

A form can use a table, view, relationship, or custom source as its schema.

Choosing a schema helps with:

* Picking field names from a dropdown
* Matching validation to the selected data type
* Generating form components automatically
* Saving data with the expected table shape

> 🚧 Schema from query
>
> When using a [custom query](https://docs.budibase.com/docs/custom-queries) or [REST query](https://docs.budibase.com/docs/rest-queries) as the schema source, the form fields cannot be linked to the query schema.

### Form type

* `Create` starts with blank fields unless a default value is set
* `Update` fills fields from the parent [Repeater](doc:repeater) or row binding

## Inputs

Each input represents a single field. The field name comes from the schema or can be typed manually if no schema is set.

Use custom fields when the form needs values that are not part of the schema. Form bindings always reflect the field names in the form.

Help text gives users context or validation guidance. If validation fails, Budibase replaces the help text with the error message.

## Nesting non-form components

Forms can contain other components as well. Use [Field groups](doc:field-groups) to manage layout.
