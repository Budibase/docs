---
title: Calculate field value on save
excerpt: Displaying a preferred unit to end users, but always save a standardised unit
deprecated: false
hidden: false
metadata:
  title: ''
  description: kba_5hi4i
  robots: index
next:
  description: ''
---
Use this pattern when users enter values in one unit, but the table should always store a standard unit.

## Build the form

1. Add a create form for the table
2. Add an options picker for the unit field
3. Use custom options for the supported units

## Calculate the value

1. Add an `On change` action to the unit picker
2. Read the previous unit and the new unit
3. Recalculate the value with `Update Field Value`

## Save the row

1. Add a save button
2. Save the form data
3. Multiply the entered value by the selected unit factor before saving
4. Clear the form after saving

## Why this works

The user sees the unit they selected, but the table always stores one consistent value.

## Workspace export

*Downloads may take a few seconds.*

<HTMLBlock>{`
<!-- Add icon library -->
<link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/4.7.0/css/font-awesome.min.css">

<!-- Full width -->
<button class="btn" onclick="window.open('https://drive.google.com/file/d/1k9c3g4pjFxySGNc1QhV7kVKtWt3KfJ5X/view?usp=sharing')" style="width:100%"><i class="fa fa-download"></i> Download</button>

<style>
  .btn {
    background-color: #3571de;
    border: none;
    color: white;
    padding: 12px 30px;
    cursor: pointer;
    font-size: 16px;
  }

  .btn:hover {
    background-color: #2e64c9;
  }
</style>
`}</HTMLBlock>
