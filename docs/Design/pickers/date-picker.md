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

<Image title="datepicker-options.jpg" alt={1418} align="center" src="https://files.readme.io/86452b5-datepicker-options.jpg">
  Left: Date/time; Top-right: Date; Bottom-right: Time
</Image>

As you can see above there's three flavours of the date and/or time pickers.

## Add a date picker

The `Date Picker` needs to be a child of the [Form](doc:forms) component. 

To add the `Date Picker` component, click `Form > Date Picker`. 

![](https://files.readme.io/7a390a5-Screenshot_2023-07-04_at_12.15.43.png)

After the Date Picker is added you can start to configure it.

## Date, Date/Time or Time?

To choose between the different types of pickers, you can use two checkboxes in the <Glossary>Settings Panel</Glossary> to get three different results.

![](https://files.readme.io/13f6cc1-date-picker-checkboxes.png "date-picker-checkboxes.png")

To get the results, only check the box which are mentioned below.

* **Date/time**: ☑️ Show Time
* **Date**: ☑️ Show Time + ☑️ Time Only
* **Time**: ☑️ Time Only 

## Further configuration

| Setting       | Description                                                                                                                                                                 |
| :------------ | :-------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| Field         | Connected field from the parent [Form](doc:forms) element, or custom by typing in a field name.                                                                             |
| Label         | The text visible to the user next to the `Date Picker` as a descriptor of the field                                                                                         |
| Placeholder   | The text displayed in a lighter tint inside the `Date Picker`. Will only display when the picker has no value                                                               |
| Default Value | When a default value is provided, every time the form is opened this will be prefilled in the `Date Picker`. Entering this will also prevent the `Placeholder` from showing |
| Disabled      | When checked, disables the field; The user cannot change the value.                                                                                                         |
