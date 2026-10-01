---
title: Create a secure public form
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
Use this pattern when unauthenticated users should submit data, but only app admins should access the stored records.

The public screen submits form data through an automation, which writes to the secure table.

## Build the table

Create the table that will store the submitted data.

## Build the screen

1. Create a new screen
2. Set the screen access to `Public user`
3. Add a form with fields that match the table schema

## Build the automation

1. Create an automation triggered by an app action
2. Set the automation role to `Public user`
3. Add fields that match the form
4. Add a create row step for the secure table
5. Bind the trigger fields into the row columns

## Submit the form

1. Add a button to the public screen
2. Trigger the automation on click
3. Pass the form field values into the automation

## Why this works

The public user can only call the automation, not read the secure table directly.

## App export

*Downloads may take a few seconds.*

<HTMLBlock>{`
<!-- Add icon library -->
<link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/4.7.0/css/font-awesome.min.css">

<!-- Full width -->
<button class="btn" onclick="window.open('https://drive.google.com/uc?export=download&id=1nInFRXnaX7N4u3F-zIOtKBdIQAP1SIsf')" style="width:100%"><i class="fa fa-download"></i> Download</button>

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
