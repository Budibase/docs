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
  description: ''
  robots: index
next:
  description: ''
---
## Overview

The State Explorer Interface provides users with greater visibility and control over state variables used within a screen. It enables users to see:

* Which state variables are in use
* Where they are being used
* Which components they are attached to

Previously, there was no way to track which state variables were used or which components they were associated with. This feature addresses that gap, improving debugging and interface management.

## Accessing the State Explorer

To open the State Explorer Interface:

1. Navigate to the State tab to the right of Components and Bindings.
2. Click on the tab to reveal the State Variables selection field.
3. The first state variable in the list is selected by default.
4. To view a different state variable, select it from the dropdown list.

   <Image align="center" width="450px" src="https://files.readme.io/bcfc0dbcd3ddf49a79dd8b5254a8b8925262d8c8d4cf897221401d3992ee836a-Screenshot_2025-08-20_at_11.24.41.png" />
5. Below the **State variables** selection field, you will see the **Set Temporary Value for Design Preview field**.

### Set Temporary Value for Design Preview

The Set Temporary Value for Design Preview field allows users to input a temporary value for preview purposes. This field can either be manually typed into or set using available internal Budibase bindings, providing flexibility when testing or designing interfaces.

<Image align="center" src="https://files.readme.io/1a9c331a89b56c92fd2b48897731db21e0fa33670153ed1d4e7f00e3ee6f16ea-Screenshot_2025-01-30_at_13.57.59.png" />

## Understanding State Usage

When a state variable is selected, the State Explorer displays relevant information about its usage within the current screen. This information is categorised into two sections:

### Controlled By

This category lists state variables that are set/modified. These include:

* Input fields updating state
* Button on clicks that trigger state changes
* Other interactive elements affecting state values

<Image align="center" src="https://files.readme.io/d714057c83aed344c3ed0c1a7b268cc6c2d5853f0a191cadee49b45376989bba-Screenshot_2025-01-30_at_14.14.51.png" />

### Updates

This section shows where the state variables are being used. Examples include:

* A Paragraph component displaying the state value
* A Form Block applying the state variable to the RowID setting
* Data provider and or table filters

<Image align="center" src="https://files.readme.io/d524bf8e46ed84d848bef6426c6af348897c57d4c173672ae09efb1f587cc49e-Screenshot_2025-01-30_at_14.16.44.png" />

## Navigating to Components

For each entry in the Controlled By and Updates sections, the associated component is listed as a clickable item. Clicking on a component will navigate directly to its Settings or Binding area, allowing users to see and modify how the state variable is used.
