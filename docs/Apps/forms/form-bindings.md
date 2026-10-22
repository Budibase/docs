---
title: Form bindings
excerpt: When and how to use bindings in forms
deprecated: false
hidden: false
metadata:
  title: ''
  description: ''
  robots: index
next:
  description: ''
---
Use form bindings when field values need to come from dynamic data.

Common uses include:

* Default values
* Dynamic labels and placeholders
* On change actions
* Conditional UI
* Filtering

## Read values into a form

Bind a field to query output, app state, or a repeater when you want the form to load existing data.

## Write values from a form

Use form field bindings in create queries or save actions to pass submitted values into the database or API request.

## On change

Use `On change` when a field should update another field or trigger an action as soon as its value changes.

Common uses include:

* Calculating derived values
* Updating helper fields
* Showing or hiding controls based on the selected value

## Good practice

* Keep binding names stable
* Use default values for loaded data
* Use `Configure validation` when user input must match a rule
