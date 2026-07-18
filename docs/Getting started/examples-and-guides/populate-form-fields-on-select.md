---
title: Populate form fields on select
excerpt: Auto-filling a form for a chosen record
deprecated: false
hidden: false
metadata:
  title: ''
  description: ''
  robots: index
next:
  description: ''
---
Use this pattern when a picker should load a selected record into a form.

The picker stores the selected row ID in app state, and the form reads that value back.

## Build the picker

1. Add a [Form](doc:forms)
2. Add a [Data provider](doc:data-provider)
3. Add an [Options picker](doc:option-picker)
4. Set the picker to use the data provider
5. Set the picker value to the row `_id`
6. Save the selected `_id` into app state on change

## Build the detail form

1. Add a [Form block](doc:form-block)
2. Set the form type to `View`
3. Point it at the same table
4. Bind the Row ID to the saved state value

## Why this works

The picker chooses the record and the form reads the matching row directly from the table.

## Try it out

<HTMLBlock>{`
<iframe width="800" height="600" frameborder="0" allow="clipboard-write;camera;geolocation;fullscreen" src="https://cprem.budibase.app/embed/guide-populate-form-fields-on-select"></iframe>
`}</HTMLBlock>

<HTMLBlock>{`
<!-- Add icon library -->
<link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/4.7.0/css/font-awesome.min.css">

<!-- Full width -->
<button class="btn" onclick="window.open('https://drive.google.com/uc?export=download&id=1r88gcVMZUV1ehsSob-uKKnCRkZMI-pHv')" style="width:100%"><i class="fa fa-download"></i> Download</button>

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
