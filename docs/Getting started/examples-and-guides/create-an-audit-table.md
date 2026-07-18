---
title: Create an Audit Table
excerpt: >-
  This guide explains how to implement a basic audit system in your app. The
  system tracks changes to the Patients table and logs those changes in a
  separate Patient audit table using automations.
deprecated: false
hidden: false
metadata:
  title: ''
  description: ''
  robots: index
next:
  description: ''
---
Use this pattern when you need a basic audit trail for row updates.

When a user updates a row in `Patients`, an automation compares the old and new values and logs each change in `Patient audit`.

## Build the tables

Create `Patients` and `Patient audit`.

Store the field name, old value, new value, action type, related patient, and timestamp in the audit table.

## Build the screen

Generate a table screen for `Patients`.

This gives you the list screen plus the create and edit forms.

## Build the automation

1. Trigger the automation when a `Patients` row is updated
2. Add a JavaScript step to compare the old and new row values
3. Return one item for each changed field
4. Loop over the returned items
5. Create one audit row per changed field

## Why this works

Each update produces one audit row per changed field, so you can review the history later.

## App export

<HTMLBlock>{`
<!-- Add icon library -->
<link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/4.7.0/css/font-awesome.min.css">

<!-- Full width -->
<button class="btn" onclick="window.open('https://drive.google.com/uc?export=download&id=1HHuNFxrIg7b_QT5kiJIo4qtBmnh4jKbV')" style="width:100%"><i class="fa fa-download"></i> Download</button>

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
