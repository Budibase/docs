---
title: State explorer interface
excerpt: >-
  The State Explorer Interface enhances visibility and control over state
  management by clearly outlining where state variables are used and modified.
  This improves troubleshooting, debugging, and overall app maintainability.
deprecated: false
hidden: false
metadata:
  title: ''
  description: kba_5h88y
  robots: index
next:
  description: ''
---
The State Explorer shows where a state value is set and where it is used on the current screen.

Use it when you need to trace a state value through a screen without hunting through components manually.

## Open the State Explorer

1. Open the **State** tab beside **Components** and **Bindings**
2. Select a state variable from the dropdown
3. Enter a temporary value if you want to preview the screen with sample data

## Read the results

The State Explorer separates usage into two groups:

* **Controlled by** lists components that update the state value
* **Updates** lists components that read the state value

Use these lists to find the exact component or binding that needs to change.

## Jump to a component

Click any entry in the list to open the related component settings or binding. This is the fastest way to update a state variable that is used in multiple places.
