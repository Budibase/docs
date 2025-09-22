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

<Image title="datepicker-options.jpg" alt={1418} src="https://files.readme.io/86452b5-datepicker-options.jpg">
  Left: Date/time; Top-right: Date; Bottom-right: Time
</Image>

As you can see above there's three flavours of the date and/or time pickers.

## Add a date picker

The `Date Picker` needs to be a child of the [Form](doc:forms) component. 

To add the `Date Picker` component, click `Form > Date Picker`. 

![302](https://files.readme.io/359a870-add-date-picker.png "add-date-picker.png")

After the Date Picker is added you can start to configure it.

## Date, Date/Time or Time?

To choose between the different types of pickers, you can use two checkboxes in the <Glossary>Settings Panel</Glossary> to get three different results.

![376](https://files.readme.io/13f6cc1-date-picker-checkboxes.png "date-picker-checkboxes.png")

To get the results, only check the box which are mentioned below.

* **Date/time**: ☑️ Show Time
* **Date**: ☑️ Show Time + ☑️ Time Only
* **Time**: ☑️ Time Only 

## Further configuration

<Table align={["left","left"]}>
  <thead>
    <tr>
      <th>
        Setting
      </th>

      <th>
        Description
      </th>
    </tr>
  </thead>

  <tbody>
    <tr>
      <td>
        Field
      </td>

      <td>
        Connected field from the parent [Form](doc:forms) element, or custom by typing in a field name.
      </td>
    </tr>

    <tr>
      <td>
        Label
      </td>

      <td>
        The text visible to the user next to the `Date Picker` as a descriptor of the field
      </td>
    </tr>

    <tr>
      <td>
        Placeholder
      </td>

      <td>
        The text displayed in a lighter tint inside the `Date Picker`. Will only display when the picker has no value
      </td>
    </tr>

    <tr>
      <td>
        Default Value
      </td>

      <td>
        When a default value is provided, every time the form is opened this will be prefilled in the `Date Picker`. Entering this will also prevent the `Placeholder` from showing
      </td>
    </tr>

    <tr>
      <td>
        Disabled
      </td>

      <td>
        When checked, disables the field; The user cannot change the value.
      </td>
    </tr>
  </tbody>
</Table>
