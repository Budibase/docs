---
title: Save two linked tables in one form
excerpt: 'Example: Creating an employee record and linking them to a newly created job'
deprecated: false
hidden: false
metadata:
  title: ''
  description: ''
  robots: index
next:
  description: ''
---
Use this pattern when one form needs to create a parent row and optionally create a related child row.

## Build the form

1. Add a [Form block](doc:form-block)
2. Set the table to `Jobs`
3. Eject the form block
4. Add an [Options picker](doc:option-picker) for choosing an existing or new employee
5. Add conditions so the relationship field and the new employee fields only show when needed

## Save the rows

1. Save the job first
2. Save the employee second when `NEW` is selected
3. Use the saved job ID to link the employee row to the new job

## Why this works

The first save creates the job row, and the second save can reference that new job ID.

## App export

<HTMLBlock>{`
<!-- Add icon library -->
<link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/4.7.0/css/font-awesome.min.css">

<!-- Full width -->
<button class="btn" onclick="window.open('https://drive.google.com/uc?export=download&id=1C3ZY2NhLtzOxl235EGugu2UJynxROSwV')" style="width:100%"><i class="fa fa-download"></i> Download</button>

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
