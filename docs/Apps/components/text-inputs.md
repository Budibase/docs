---
title: Text inputs
excerpt: Form fields that accept typed input.
deprecated: false
hidden: false
metadata:
  title: ''
  description: kba_5hade
  robots: index
next:
  description: ''
---
Use text inputs when users need to type a value into a form.

Common text input types include:

* Text field
* Number field
* Password field
* URL field
* Long form field
* JSON field
* BigInt field

## Add a text input

1. Add a [Form](doc:forms)
2. Add the text input inside the form
3. Bind the field to a form schema field or enter a custom field name

## Common settings

* Field
* Label
* Placeholder
* Default value
* Disabled

## On change

Use `On change` when the action should run after the user leaves the field or presses Enter.

Use `{{ Field Value }}` to reference the current value.

## Run on input

Use `Run on input` when the action should fire while the user is typing or pasting.

## Field types

* Text field for inline text
* URL field for web addresses
* Number field for numeric values
* Password field for hidden text
* Long form field for multiline input
* JSON field for JSON data
* BigInt field for very large integers
