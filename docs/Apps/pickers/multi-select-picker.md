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
The `multi-select` option works like the [Option Picker](doc:option-picker), but it lets you select more than one option in the dropdown.

> 📘 Explore features at Option Picker
>
> To explore most features the multi-select picker offers, head over to the [Option Picker](doc:option-picker) page. This includes sources for the options, autocomplete, and more.

## Adding the picker

To add the multi-select picker, choose it from `Form > Multi-select Picker`. Make sure the picker is wrapped in a [Form](doc:forms) element to function correctly.

## Adding options to the picker

To add options, head over to the [Option Picker](doc:option-picker#displaying-options-in-the-options-picker) page.

## Retrieving data from the picker

Unlike the option picker, which returns one value, the multi-select picker returns an array of items even if only one item is selected. Handle the result as an array. Storing the array in a text field will either fail or stringify.

## Checkboxes

A multi-select picker can display as tickable options or as checkboxes. This is a visual choice and does not affect functionality. If you use checkboxes, you can also choose whether they display horizontally or vertically.

## Tutorial: Sum of selected items

To calculate the sum of selected items:

1. Create an `Items` table with `Name` and `Cost` fields.
2. Add a formula column called `Label` with `{{ Name }} [ ${{ Cost }} ]`.
3. Add a data provider for the `Items` table and nest a form with a multi-select picker.
4. Set the picker `Options Source` to the data provider.
5. Set the label column to `Label` and the value column to `Cost`.
6. Add a paragraph with `Total Cost: ${{ sum New Form.Fields.Item }}`.
