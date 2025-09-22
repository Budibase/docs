---
title: Date picker
excerpt: ''
deprecated: false
hidden: false
metadata:
  title: ''
  description: ''
  robots: noindex
next:
  description: ''
---
The Date Picker allows you to select a `Date`, `DateTime` or `Time`, depending on your settings.
[block:image]
{
  "images": [
    {
      "image": [
        "https://files.readme.io/86452b5-datepicker-options.jpg",
        "datepicker-options.jpg",
        1418,
        694,
        "#f6f7f7"
      ],
      "caption": "Left: Date/time; Top-right: Date; Bottom-right: Time"
    }
  ]
}
[/block]
As you can see above there's three flavours of the date and/or time pickers.
[block:api-header]
{
  "title": "Add a date picker"
}
[/block]
The `Date Picker` needs to be a child of the [Form](doc:forms) component. 

To add the `Date Picker` component, click `Form > Date Picker`. 
[block:image]
{
  "images": [
    {
      "image": [
        "https://files.readme.io/359a870-add-date-picker.png",
        "add-date-picker.png",
        302,
        336,
        "#262728"
      ]
    }
  ]
}
[/block]
After the Date Picker is added you can start to configure it.
[block:api-header]
{
  "title": "Date, Date/Time or Time?"
}
[/block]
To choose between the different types of pickers, you can use two checkboxes in the <<glossary:Settings Panel>> to get three different results.

[block:image]
{
  "images": [
    {
      "image": [
        "https://files.readme.io/13f6cc1-date-picker-checkboxes.png",
        "date-picker-checkboxes.png",
        376,
        184,
        "#373838"
      ]
    }
  ]
}
[/block]
To get the results, only check the box which are mentioned below.

  * **Date/time**: ☑️ Show Time
  * **Date**: ☑️ Show Time + ☑️ Time Only
  * **Time**: ☑️ Time Only 
[block:api-header]
{
  "title": "Further configuration"
}
[/block]

[block:parameters]
{
  "data": {
    "h-0": "Setting",
    "h-1": "Description",
    "0-0": "Field",
    "0-1": "Connected field from the parent [Form](doc:forms) element, or custom by typing in a field name.",
    "1-0": "Label",
    "1-1": "The text visible to the user next to the `Date Picker` as a descriptor of the field",
    "2-0": "Placeholder",
    "2-1": "The text displayed in a lighter tint inside the `Date Picker`. Will only display when the picker has no value",
    "3-0": "Default Value",
    "3-1": "When a default value is provided, every time the form is opened this will be prefilled in the `Date Picker`. Entering this will also prevent the `Placeholder` from showing",
    "4-0": "Disabled",
    "4-1": "When checked, disables the field; The user cannot change the value."
  },
  "cols": 2,
  "rows": 5
}
[/block]