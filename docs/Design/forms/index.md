---
title: Forms
excerpt: Learn about building forms with Budibase.
deprecated: false
hidden: false
metadata:
  title: ''
  description: ''
  robots: noindex
next:
  description: ''
---
![](https://files.readme.io/dc1e84d-form.png)

Forms are the primary building blocks of any data-heavy application. With Budibase you can build rich, themeable forms to create and edit your data. Forms are built up from 3 main component types: 

1. **Form component**
2. **Field group component**
3. **Input components**

## Form component

The Form component is the top-level component of forms. All field groups and fields must be placed inside a form, and they won't work outside it. The form component is flexible and allows you to control layout, design, and theme. 

### Form schema

Forms have a **Schema** setting which is optional. The schema for a form can be a table, view, relationship or "custom". A custom schema means that there is no backing data source schema.

Choosing a form schema has the following advantages:

* When adding fields, field names can be chosen from a dropdown rather than being typed
* Field validation is automatically added to match the schema
* If you want to create rows in a table using your form data, you'll need to choose the correct schema for the table you'll be saving your data to
* Fields will be able to automatically prevent you entering an illegal field name for a certain data type
* Form components can be automatically generated to match the schema

> 🚧 Schema from query
>
> When using a [custom query](https://docs.budibase.com/docs/custom-queries) or [REST query](https://docs.budibase.com/docs/rest-queries) as the schema source, the form fields cannot be linked to the query schema.

### Form type

A form can be in 'Create' mode or 'Update' mode. 

In *Create* mode, the form fields will be initially blank, with the exception of those with an assigned <Glossary>Default Value</Glossary> 

In *Update* mode, the form fields will automatically be populated from the parent [Repeater](doc:repeater) data, assuming the form schema is not set to custom.

![](https://files.readme.io/48e7ee1-update-create-form-type.gif "update-create-form-type.gif")

## Field groups

Field groups are components that group fields together. They allow your fields to be neatly aligned with each other and let you style your fields with consistent label positions.

Choosing a form schema has the following advantages:

* When adding fields, field names can be chosen from a dropdown rather than being typed
* Field validation is automatically added to match the schema
* If you want to create rows in a table using your form data, you'll need to choose the correct schema for the table you'll be saving your data to
* Fields will be able to automatically prevent you from entering an illegal field name for a certain data type
* Form components can be automatically generated to match the schema

### Generating Fields Automatically

Field groups have a powerful function that can save you a lot of time when working on forms - they let you reset them, which automatically populates them with all the fields in your form schema. This means you can generate a full form in one click, or you can add in missing fields if you change your schema.\
When you select a field group component in the builder, you'll be able to press "Reset Fields" in the settings panel to perform this function.

![](https://files.readme.io/a1cb9c8-image_13.png "image (13).png")

## Inputs

Each input component represents a single field in the form. There are different components for every data type. All fields have a field and label setting. The field is the name of the field or property of the schema. This can be free typed or if a schema exists on the form, selected from a list. There are unique components for every type of data, and if your form has a schema then you'll only be able to choose field names that fit the particular type of component that is selected. The label setting is the label that will be displayed beside or above your field. Most fields also have a placeholder setting to control the text displayed when the field is empty.

### Custom Inputs / Fields

Whether your form has a schema or not, you can always add custom fields that don't exist in the schema by free typing the name of the field. Data bindings will always reflect the names of all the fields in your form - so even if you don't have a schema on your form, you'll be able to bind to any of your fields.

## Embedding non-form content

 Forms can contain any content - not just field groups and fields - so you can easily nest any other components alongside your form components. The best way to achieve this neatly is to always put groups of fields inside a field group component, then you can simply include any other components inside your form, besides the field groups.

## Video tutorial

<HTMLBlock>{`
<iframe src="https://player.vimeo.com/video/746819373?h=9e45332e9c&title=0&portrait=0&byline=0" style="margin-top: -100px;" width="640" height="564" frameborder="0" allow="autoplay; fullscreen" allowfullscreen></iframe>
`}</HTMLBlock>
