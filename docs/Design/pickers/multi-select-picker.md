---
title: Multi-select picker
excerpt: ''
deprecated: false
hidden: false
metadata:
  title: ''
  description: ''
  robots: index
next:
  description: ''
---
The `multi-select` option is almost entirely the same as the [Options Picker](doc:option-picker), with the only difference being you can select more than one option in the dropdown.

> 📘 Explore features at Option Picker
>
> To explore most features the multi-option picker offers, head over to the [Option Picker](doc:option-picker) page. This includes sources for the options, autocomplete, and more.

## Adding multi-select picker

To add the multi-select picker, choose it from \`Form > Multi-select Picker. Make sure the picker is wrapped in a [Form](doc:forms) element to function correctly.

![](https://files.readme.io/4ea4a11-Screenshot_2023-07-04_at_12.13.17.png)

## Adding options to the picker

To add options, head over to the [Option Picker](doc:option-picker#displaying-options-in-the-options-picker) page.

## Retrieving data from the picker

Opposed to the option picker which returns 1 value, the multi-select picker returns an array of items, even if only one item is selected. When using the data, make sure you handle the data as an array in that situation. Storing the array in a text field will either fail or stringify.

## Checkboxes

A multi-select picker can be displayed as a list of tickable options, or as a set of checkboxes. This is purely a visual choice and does not affect the functionality. 

The use of checkboxes can be switched easily:

![](https://files.readme.io/b4f7e4c-checkboxes.png)

If you choose checkboxes, you will also have the option to determine if they should be displayed horizontally or vertically.

![](https://files.readme.io/2b6368c-Screenshot_2022-07-20_at_16.44.40.png)

![](https://files.readme.io/b42619a-Screenshot_2022-07-20_at_16.44.57.png)

## Tutorial: Sum of selected items

In this tutorial we will display the sum of selected items from a multi-select picker.

Start by creating your table of items. Give each item a *Text* name and *Number* cost.

![](https://files.readme.io/87a8975-table.png)

Next create a new [Formula](https://docs.budibase.com/docs/formula) column. This will be used to display a pretty formatted label for the item options. 

Call it 'Label' and use the following binding: `{{ Name }} [ ${{ Cost }} ]`

![](https://files.readme.io/58a210a-Screenshot_2022-07-20_at_16.47.58.png)

In the Design section add a [Data Provider](https://docs.budibase.com/docs/data-provider) for the 'Items' table, and nest a [Form](https://docs.budibase.com/docs/forms) with a multi-select picker. 

Give the field a name, and within the settings set the *Options Source* to point at the data provider. Set the label and value columns to 'Label' and 'Cost' respectively. 

![](https://files.readme.io/a439b64-Screenshot_2022-07-20_at_16.53.31.png)

Finally, add a [Paragraph](https://docs.budibase.com/docs/paragraph) element nested within your form. Assign the following binding text: `Total Cost: ${{ sum New Form.Fields.MultiPicker }}`

#### Result

![](https://files.readme.io/724ea67-sum-multi-select.gif)
