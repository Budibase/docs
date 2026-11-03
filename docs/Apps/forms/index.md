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
Use forms to collect and validate input when creating or updating data.

The Form component does not save a row by itself. Add button actions to validate and save the form, or use a [Form block](doc:form-block) for a generated form with save behaviour included.

Forms are built from three main component types:

1. `Form`
2. `Field group`
3. Input components

## Form component

The Form component is the top-level container. Place [Field groups](doc:field-groups) inside it. Input components can also be used without a form, for example as search fields.

Use a form when you want Budibase to collect field values and apply validation rules before an action runs.

### Form schema

A form can use a table, view, query, relationship, field, JSON array, or custom schema.

Choosing a schema helps with:

* Picking field names from a dropdown
* Matching validation to the selected data type
* Generating form components automatically
* Saving data with the expected table shape

> 🚧 Schema from query
>
> When using a [custom query](doc:sql-workflow#custom-queries) or [REST query](https://docs.budibase.com/docs/rest-queries), the field list comes from the query parameters rather than the response schema.

### Form type

* `Create` starts with blank fields unless a default value is set
* `Update` fills fields from matching table or view data provided by an ancestor component, such as a [Repeater](doc:repeater)

## Inputs

Each input represents a single field. The field name comes from the schema or can be typed manually if no schema is set.

Use custom fields when the form needs values that are not part of the schema. Form bindings always reflect the field names in the form.

Help text gives users context or validation guidance. If validation fails, Budibase replaces the help text with the error message.

## Nesting non-form components

Forms can contain other components as well. Use [Field groups](doc:field-groups) to manage layout.

## Related pages

* [Form block](doc:form-block)
* [Field groups](doc:field-groups)
* [Form bindings](doc:form-bindings)
* [Form validation](doc:form-validation)
* [Multi-step form block](doc:multi-step-form-block)
