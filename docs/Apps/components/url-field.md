---
title: URL Field
excerpt: Form fields for collecting website URLs
deprecated: false
hidden: false
metadata:
  title: ''
  description: ''
  robots: index
next:
  description: ''
---
The `URL Field` component is a specialised text input for collecting web addresses in forms.

It behaves like a standard text field, but it is configured for URL entry and browser autocomplete, which makes it a better fit for website links and other URL-style values.

## Adding a URL field

The `URL Field` component must be nested inside a [Form](doc:forms) component.

To add it to a screen, click `Form > URL Field`.

## Common settings

| Setting       | Description                                                                                           |
| :------------ | :---------------------------------------------------------------------------------------------------- |
| Field         | Connected field from the parent form, or a custom field name entered manually.                       |
| Label         | Text shown to the user next to the input.                                                             |
| Placeholder   | Hint text shown inside the input before a value is entered.                                          |
| Default Value | Pre-fills the field when the form first loads.                                                        |
| Help Text     | Supporting text displayed beneath the input.                                                          |
| Disabled      | Prevents the user from editing the value.                                                             |
| Read only     | Displays the value without allowing edits.                                                            |
| On change     | Triggers configured actions when the field value changes.                                             |
| Validation    | Lets you require valid URL values and choose which protocols are accepted, such as `http` or `https`. |

## Validation

By default, the URL field validates values as website URLs and accepts `http` and `https` links.

You can update the validation rule to allow additional protocols when needed, such as `ftp` or `mailto`.

If you are collecting standard website links, keep the default `http` and `https` protocols selected.
