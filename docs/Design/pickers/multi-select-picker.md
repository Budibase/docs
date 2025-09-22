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

![](https://files.readme.io/8a0f3431a502371aebc19537988b569c201f2d552da76805ee373fe9fcfa6faa-image.png)

If you choose checkboxes, you will also have the option to determine if they should be displayed horizontally or vertically.

![](https://files.readme.io/fde8ef29572cbb6a6c731b4e00178f140ef298c0c98c36677501358090ee1f91-image.png)

![](https://files.readme.io/b42619a-Screenshot_2022-07-20_at_16.44.57.png)

## Tutorial: Sum of selected items

In this tutorial we will display the sum of selected items from a multi-select picker.

Start by creating your table of items. Give each item a _Text_ name and _Number_ cost.

![](https://files.readme.io/a95ba851f5e9bcc221479498d2a4e86f19997f4120f4ebd39274738dfa09f002-image.png)

Next create a new [Formula](https://docs.budibase.com/docs/formula) column. This will be used to display a pretty formatted label for the item options. 

Call it 'Label' and use the following binding: `{{ Name }} [ ${{ Cost }} ]`

![](https://files.readme.io/b6697ffd9058ce4ca1f14eeb747c54136ecfe5bdaa563e424b5233d70533c967-image.png)

In the Design section add a [Data Provider](https://docs.budibase.com/docs/data-provider) for the 'Items' table, and nest a [Form](https://docs.budibase.com/docs/forms) with a multi-select picker. 

Give the field a name, and within the settings set the _Options Source_ to point at the data provider. Set the label and value columns to 'Label' and 'Cost' respectively. 

![](https://files.readme.io/ed50b934b37d48b31f194930d9b75fb64727fa5d5161f15a4239f355c0c3b682-image.png)

<br />

Finally, add a [Paragraph](https://docs.budibase.com/docs/paragraph) element nested within your form. Assign the following binding text: `Total Cost: ${{ sum  New Form.Fields.Item  }}`

#### Result

![](https://files.readme.io/0666529ff6641fbfd4ff21611e2c1d5acc8f5bf6f1b4a1897efde62ee2ee93ee-Screen_Recording_2024-09-25_at_11.53.33.gif)