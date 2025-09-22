---
title: Checkbox
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
The `checkbox` component allows you to let the user check a box, or not. 

![](https://files.readme.io/a61ec50-checkbox.png "checkbox.png")

## Adding a checkbox

The `Checkbox` component requires a [Form](doc:forms) component to be a parent.

To add a `Checkbox` component to your app, you need to click `Form > Checkbox`

![](https://files.readme.io/f2f63ef-Screenshot_2023-07-04_at_11.40.44.png)

## Customising the Checkbox

To customise the checkbox, there are several settings in the <<glossary:Settings Panel>> that can be used.

| Setting              | Description                                                                                 |
| :------------------- | :------------------------------------------------------------------------------------------ |
| Default Value        | Accepts `true` or `false` as values to have it checked or unchecked respectively            |
| Text                 | The text shown to the right of the checkbox, this text is also clickable with the checkbox. |
| Size                 | The size of the text and the checkbox, there's presets from `small` to `extra large`.       |
| Disabled / Read only | When checked, the user cannot change the value                                              |

It is worth noting that the checkbox integrates closely with [boolean](doc:boolean-truefalse) types. It can be used to represent whether a column's value in a table is either true or false.