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

[block:image]
{
  "images": [
    {
      "image": [
        "https://files.readme.io/0ff0db9-image.png",
        null,
        ""
      ],
      "align": "center",
      "sizing": "40% "
    }
  ]
}
[/block]


While creating the column, you will be able to add different options the user can select. These options can be edited later by clicking "Edit Column".

[block:image]
{
  "images": [
    {
      "image": [
        "https://files.readme.io/b992f71-image.png",
        null,
        ""
      ],
      "align": "center",
      "sizing": "33% "
    }
  ]
}
[/block]


<br>

### Use in Forms

Adding a `Form Block` component to your page, and setting the `Data` to your table will automatically populate fields into your form. Opening the settings panel will allow you to customise settings around your input.

[block:parameters]
{
  "data": {
    "h-0": "Setting",
    "h-1": "",
    "0-0": "Label",
    "0-1": "Text that will display above the input",
    "1-0": "Placeholder Text",
    "1-1": "Text that is displayed the field before the user makes a selection. Defaults to \"Choose an option\"",
    "2-0": "On change",
    "2-1": "[Configureable actions](https://docs.budibase.com/docs/form-actions) that run on change.",
    "3-0": "Type",
    "3-1": "Chose between \"Select\" for a dropdown menu, or \"Radio Buttons\".  \n  \nRadio buttons not quite what you're looking for? [Try Multi-select picker.](https://docs.budibase.com/docs/multi-select-picker)",
    "4-0": "Direction",
    "4-1": "(Only available for Radio Buttons type input) Displays the options in vertically or horizontally arranged list.",
    "5-0": "Default Value",
    "5-1": "Assigns a default value should the user fail to make a selection",
    "6-0": "Help Text",
    "6-1": "Text that displays underneath, preceded by a question mark icon",
    "7-0": "Alphabetical",
    "7-1": "When unchecked, options will appear in the order that they shown in your data column. "
  },
  "cols": 2,
  "rows": 8,
  "align": [
    "left",
    "left"
  ]
}
[/block]


#### Changing the order of your options

[block:image]
{
  "images": [
    {
      "image": [
        "https://files.readme.io/2d6ea1f-image.png",
        null,
        ""
      ],
      "align": "center",
      "sizing": "30% "
    }
  ]
}
[/block]


To Change the order the options display in your form, firstly make sure "Alphabetical" is unchecked. Then, in the Data tab, click edit your column, and drag-and-drop your options. Alphabetical being checked will not change the order the options appear in the data tab, only the order in which they are displayed to the user in the form.

<br>