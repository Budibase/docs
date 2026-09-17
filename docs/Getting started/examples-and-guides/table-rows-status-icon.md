---
title: Table row status
excerpt: Highlight a row status with conditional styling
deprecated: false
hidden: false
metadata:
  title: ''
  description: ''
  robots: index
next:
  description: ''
---
Use conditional styling when a table cell should visually reflect a row status.

## Scenario

This pattern is useful when a field stores values like `Online` and `Offline`, or any other status values.

## Build the table

1. Add a [Table](doc:table) for the relevant data
2. Hide any actions you do not need

## Add the condition

1. Open the column settings for the status field
2. Add a condition for the `Offline` value
3. Set the cell background to red
4. Duplicate the condition for the `Online` value
5. Set the matching cell background to green

## Why this works

The table stays readable, but the status is easier to scan at a glance.

## App export

_Downloads may take a few seconds._

<HTMLBlock>{`
<!-- Add icon library -->
<link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/4.7.0/css/font-awesome.min.css">

<!-- Full width -->
<button class="btn" onclick="window.open('https://drive.google.com/file/d/1OMsPMfkk915uCSR4SPIdxzQZrWztxPbU/view?usp=sharing')" style="width:100%"><i class="fa fa-download"></i> Download</button>

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
