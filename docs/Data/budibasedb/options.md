---
title: Options
excerpt: >-
  `Options `data type is a straightforward way to provide _options_  for a
  dropdown list or radio buttons in forms.
deprecated: false
hidden: false
metadata:
  title: ''
  description: ''
  robots: index
next:
  description: ''
---
<br>

### Adding an `Options` column

To add an options column to your table, select "Options" from this dropdown list.

<Image align="center" width="40%" src="https://files.readme.io/0ff0db9-image.png" />

While creating the column, you will be able to add different options the user can select. These options can be edited later by clicking "Edit Column".

<Image align="center" width="33%" src="https://files.readme.io/b992f71-image.png" />

<br>

### Use in Forms

Adding a `Form Block` component to your page, and setting the `Data` to your table will automatically populate fields into your form. Opening the settings panel will allow you to customise settings around your input.

<Table align={["left","left"]}>
  <thead>
    <tr>
      <th>
        Setting
      </th>
      <th>
      </th>
    </tr>
  </thead>
  <tbody>
    <tr>
      <td>
        Label
      </td>
      <td>
        Text that will display above the input
      </td>
    </tr>
    <tr>
      <td>
        Placeholder Text
      </td>
      <td>
        Text that is displayed the field before the user makes a selection. Defaults to "Choose an option"
      </td>
    </tr>
    <tr>
      <td>
        On change
      </td>
      <td>
        [Configureable actions](https://docs.budibase.com/docs/form-actions) that run on change.
      </td>
    </tr>
    <tr>
      <td>
        Type
      </td>
      <td>
        Chose between "Select" for a dropdown menu, or "Radio Buttons".  
        Radio buttons not quite what you're looking for? [Try Multi-select picker.](https://docs.budibase.com/docs/multi-select-picker)
      </td>
    </tr>
    <tr>
      <td>
        Direction
      </td>
      <td>
        (Only available for Radio Buttons type input) Displays the options in vertically or horizontally arranged list.
      </td>
    </tr>
    <tr>
      <td>
        Default Value
      </td>
      <td>
        Assigns a default value should the user fail to make a selection
      </td>
    </tr>
    <tr>
      <td>
        Help Text
      </td>
      <td>
        Text that displays underneath, preceded by a question mark icon
      </td>
    </tr>
    <tr>
      <td>
        Alphabetical
      </td>
      <td>
        When unchecked, options will appear in the order that they shown in your data column.
      </td>
    </tr>
  </tbody>
</Table>

#### Changing the order of your options

<Image align="center" width="30%" src="https://files.readme.io/2d6ea1f-image.png" />

To Change the order the options display in your form, firstly make sure "Alphabetical" is unchecked. Then, in the Data tab, click edit your column, and drag-and-drop your options. Alphabetical being checked will not change the order the options appear in the data tab, only the order in which they are displayed to the user in the form.

<br>