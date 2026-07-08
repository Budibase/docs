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
Forms are the primary building blocks of data-heavy applications. Use them to create and edit data with a consistent layout and theme.

Forms are built from three main component types:

1. **Form component**
2. **Field group component**
3. **Input components**

## Form component

The Form component is the top-level container. All [Field groups](doc:field-groups) must be placed inside it.

You can also use fields independently of a form when you need simpler input controls, such as search fields.

### Form schema

Forms have an optional **Schema** setting. The schema can be a table, view, relationship, or custom source.

Choosing a schema helps with:

* Picking field names from a dropdown
* Matching validation to the selected data type
* Generating form components automatically
* Creating rows with the correct table schema

> 🚧 Schema from query
>
> When using a [custom query](https://docs.budibase.com/docs/custom-queries) or [REST query](https://docs.budibase.com/docs/rest-queries) as the schema source, the form fields cannot be linked to the query schema.

### Form type

A form can be in `Create` mode or `Update` mode.

In `Create` mode, fields start blank unless they have a <Glossary>Default Value</Glossary>.

In `Update` mode, fields are populated from the parent [Repeater](doc:repeater) data, unless the schema is custom.

## Inputs

Each input component represents a single field. The field name comes from the schema or can be typed manually if no schema is set.

### Custom Inputs / Fields

You can add custom fields that are not part of the schema. Data <Glossary>Binding</Glossary>s always reflect the names of the fields in the form.

### Help text setting

Use help text to give context or explain validation. If validation fails, the help text is replaced with the error message.

## Nesting non-form components

Forms can contain any components, not just fields. Use [Field groups](doc:field-groups) to manage layout.
