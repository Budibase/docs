---
title: Icon
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
The Icon component uses the fantastic [Font Awesome](https://fontawesome.com/) icon font, a project by Dave Gandy. Altogether Font Awesome provides more than 1500 symbols and glyphs for web-related actions. These icons are great, because they enable you to easily change color, size, and more via the Design panel. They are scalable vector graphics, which means that they look great on high-resolution displays.

![](https://files.readme.io/6a2b8c2-CleanShot_2022-03-09_at_17.36.27.png "CleanShot 2022-03-09 at 17.36.27.png")

To add an Icon component, click `Add component` and search for "Icon", or locate it under the *Basic* section.

<Image alt="Adding an icon component" align="center" src="https://files.readme.io/d980cdb-Screenshot_2023-02-07_at_12.32.03.png">
  Adding an icon component
</Image>

Within the <Glossary>Settings Panel</Glossary> under the *Icon* setting, a button will show the currently selected icon, or `Pick icon` if no icon has been selected. Click the button to change the icon.

![](https://files.readme.io/6ede971-Screenshot_2023-02-07_at_12.31.01.png)

This will allow you to filter the Font Awesome library alphabetically, or search for keywords.

<br />

## Using an icon as a button

Icons support the **On Click** event. You can define all of the [Actions](doc:actions) that a button can.

<Image alt="Define click actions in the settings panel" align="center" src="https://files.readme.io/c99440d-Screenshot_2023-02-07_at_13.32.58.png">
  Define click actions in the settings panel
</Image>

<br />

## Tutorial: Displaying options as icons

In this tutorial, we will create an app with the [sample data](https://docs.budibase.com/docs/data-sources#sample-data), and display an icon based on the *Item Tags* value of the *Inventory* table. To do this, we will make use of [Conditional UI](doc:conditions).

1. Add a [Data provider](doc:data-provider) for the *Inventory* table.
2. Nest a [Table](doc:table) underneath. Click `Configure columns` and `Add all columns`. Remove all columns except for *Item Name*, and `Save`.
3. Nest a [Repeater block](https://docs.budibase.com/docs/blocks#repeater-block) under the table. Select *Item Tags* as the datasource.

<Image alt="For each table row, iterate over each tag" align="center" src="https://files.readme.io/37f34de-Screenshot_2023-02-07_at_12.53.04.png">
  For each table row, iterate over each tag
</Image>

4. Nest an Icon component within the repeater block. This will display an icon for each tag.
5. Click `Configure conditions` to set the **icon** depending on the tag name. Use the duplicate button to make your life easier!

<Image alt="Duplicate condition" align="center" src="https://files.readme.io/e245991-Screenshot_2023-02-07_at_13.13.15.png">
  Duplicate condition
</Image>

![](https://files.readme.io/8aa19ae-Screenshot_2023-02-07_at_13.16.59.png)

The <Glossary>Binding</Glossary> value in this instance is: `{{ Tags Repeater block.Item Tags.value }}`.

6. Set the icon *Size* to 'Large' and change the layout of the repeater block to 'Row layout'.

<Image alt="Row layout" align="center" src="https://files.readme.io/0e417d0-Screenshot_2023-02-07_at_13.26.04.png">
  Row layout
</Image>

#### Result

![](https://files.readme.io/564262c-Screenshot_2023-02-07_at_13.28.22.png)

> 👍
>
> You can also use a similar process to dynamically set the color of the icons.
