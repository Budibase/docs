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
Icons are scalable vector graphics, which means that they look great on high-resolution displays.

<Image align="center" src="https://files.readme.io/084579369256a577b089ba99b11a4cff8acd794c8b40731bb1b896034ca7afae-Screenshot_2025-08-21_at_11.42.08.png" />

To add an Icon component, click `Add component` and search for "Icon", or locate it under the *Basic* section.

<Image alt="Adding an icon component" align="center" src="https://files.readme.io/ed10922d2bf0d1776342c9571494cd9e0522c8a1974866fbb493e95d71e01d3a-Screenshot_2025-08-21_at_11.38.51.png">
  Adding an icon component
</Image>

Within the <Glossary>Settings Panel</Glossary> under the *Icon* setting, a button will show the currently selected icon, or `Pick icon` if no icon has been selected. Click the button to change the icon.

<Image align="center" src="https://files.readme.io/99ec32665a406c9b4b2f438c7e20539da4d857aee2348649b1505b9507da5636-Screenshot_2025-08-21_at_11.42.46.png" />

This will allow you to filter the Font Awesome library alphabetically or search for keywords.

<br />

## Using an icon as a button

Icons support the **On Click** event. You can define all of the [Actions](doc:actions) that a button can.

<Image alt="Define click actions in the settings panel" align="center" src="https://files.readme.io/62aa1913fd00d216b657911f00a532ca4b8ccbc23dc6891ee046ae713e24bdf2-Screenshot_2025-08-21_at_11.43.23.png">
  Define click actions in the settings panel
</Image>

## Tutorial: Displaying options as icons

In this tutorial, we will create an app with the [sample data](https://docs.budibase.com/docs/data-sources#sample-data), and display an icon based on the *Item Tags* value of the *Inventory* table. To do this, we will make use of [Conditional UI](doc:conditions).

1. Add a [Data provider](doc:data-provider) for the *Inventory* table.
2. Add a [Repeater](doc:repeater) nested inside the data provider.
3. Nest an Icon component within the repeater. This will display an icon for each tag.

   <Image align="center" src="https://files.readme.io/aea4cc0bcaaacabc881a2bc15c06bf1829a04af78d5b9f7860357576e7d4178e-Screenshot_2025-08-21_at_11.45.22.png" />
4. Select the icon component on the far right of the screen. You should see its settings. 
5. Click the conditions tab

   <Image align="center" src="https://files.readme.io/4ac1a767df466d10155ac91d4de18a9f40a0551d913a6d55bd7dd4840c767346-Screenshot_2024-09-27_at_13.22.56.png" />
6. Click the `no conditions set` button, this will open a drawer were you can configure your conditions
7. Click the `Add condition` button to create your conditions. In our case, we are going to use the update setting option. This will allow us to dynamically change the icon based on the inventory table's tag values. (Use the duplicate button to make your life easier!)

   <Image align="center" src="https://files.readme.io/3d0891de053e4da016fe2a529de8030aab1012502e9cf8fe8a20f6f69002c8f9-Screenshot_2025-08-21_at_11.49.49.png" />

### Result

Using a container to hold the Icon, and a Text component to accompany it, we can then show the item tags and an accompanying icon. 

<Image align="center" src="https://files.readme.io/e1d65921b4fe8c89cad130ac1a021853e777ef9123ea51b0811ab4e20f901fc0-Screenshot_2025-08-21_at_11.50.13.png" />
