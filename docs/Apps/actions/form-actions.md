---
title: Form actions
excerpt: Actions for working with form values and steps.
deprecated: false
hidden: false
metadata:
  title: ''
  description: kba_5h81u
  robots: index
next:
  description: ''
  pages:
    - type: basic
      slug: logic-actions
      title: Logic actions
---
Use form actions when an action needs to change a form field, move between steps, or validate a form.

## Update field value

Use this action to set a form field to a literal value or binding.

You can also reset a field to its default value.

## Scroll to field

Use this action to scroll a form field into view.

This is useful for validation errors or long forms.

## Validate form

Use this action to validate a selected form.

If validation fails, the form shows the relevant errors.

## Change form step

Use this action with multi-step forms to move between steps.

Available step targets include:

* Next step
* Previous step
* First step
* Specific step

## Clear form

Use this action to clear the values from a selected form.

This is commonly used after a submit or confirmation prompt.

## On change

Form fields can trigger actions when their value changes.

Picker fields update when the selection changes. Text inputs update when focus leaves the field.

Use the `{{ Field Value }}` binding to read the value that triggered the action.
