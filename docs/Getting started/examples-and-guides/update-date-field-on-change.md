---
title: Update date field on change
excerpt: For example automatically setting an end date when a start date is selected
deprecated: false
hidden: false
metadata:
  title: ''
  description: ''
  robots: index
next:
  description: ''
---
Use this pattern when one field should recalculate related date fields as the user changes a value.

## Scenario

This guide uses a duration field to update start and end dates automatically.

## Build the form

1. Add a [Form](doc:forms) for the `Jobs` table
2. Add a number field for the duration
3. Add a date picker for the start date
4. Add a date picker for the end date

## Add the actions

1. Add a `Validate Form` action to the duration field
2. Add an `Update Field Value` action that calculates the start date
3. Add a matching `Update Field Value` action for the end date
4. Add a guard so the end date only updates when the start date exists

Use bindings to read the current value and JavaScript to add or subtract days.

## Why this works

The user edits one value, and the other dates stay in sync.

## App export

*Downloads may take a few seconds.*

<HTMLBlock>{`
<!-- Add icon library -->
<link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/4.7.0/css/font-awesome.min.css">

<!-- Full width -->
<button class="btn" onclick="window.open('https://drive.google.com/uc?export=download&id=12ZhDQNPHR6M-vAmxUGmlkgGwn4KpGleL')" style="width:100%"><i class="fa fa-download"></i> Download</button>

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
