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


To add an Icon component, click `Add component` and search for "Icon", or locate it under the *Basic* section.

  Adding an icon component
</Image>

Within the <Glossary>Settings Panel</Glossary> under the *Icon* setting, a button will show the currently selected icon, or `Pick icon` if no icon has been selected. Click the button to change the icon.


This will allow you to filter the Font Awesome library alphabetically or search for keywords.

<br />

## Using an icon as a button

Icons support the **On Click** event. You can define all of the [Actions](doc:actions) that a button can.

  Define click actions in the settings panel
</Image>

## Tutorial: Displaying options as icons

In this tutorial, we will create an app with the [sample data](https://docs.budibase.com/docs/data-sources#sample-data), and display an icon based on the *Item Tags* value of the *Inventory* table. To do this, we will make use of [Conditional UI](doc:conditions).

1. Add a [Data provider](doc:data-provider) for the *Inventory* table.
2. Add a [Repeater](doc:repeater) nested inside the data provider.
3. Nest an Icon component within the repeater. This will display an icon for each tag.

4. Select the icon component on the far right of the screen. You should see its settings. 
5. Click the conditions tab

6. Click the `no conditions set` button, this will open a drawer were you can configure your conditions
7. Click the `Add condition` button to create your conditions. In our case, we are going to use the update setting option. This will allow us to dynamically change the icon based on the inventory table's tag values. (Use the duplicate button to make your life easier!)


### Result

Using a container to hold the Icon, and a Text component to accompany it, we can then show the item tags and an accompanying icon. 

