---
title: Filter a table with an options picker
excerpt: Filter by region dropdown or country name
deprecated: false
hidden: false
metadata:
  title: ''
  description: kba_5hi9u
  robots: index
next:
  description: ''
---
Use an options picker when the table should filter from a fixed list instead of free-text search.

## Scenario

This guide filters a sales table by region.

You can adapt the same pattern for any field with a fixed set of values.

## Build the screen

1. Add a [Table](doc:table) for the sales data
2. Add a [Form](doc:forms)
3. Add an [Options picker](doc:option-picker) inside the form
4. Set the picker field and label to `Region`
5. Use custom options for the allowed values

## Add the filter

1. Open the table settings
2. Add a filter on the region column
3. Bind the filter value to the options picker field

## Multi-select variant

Use a [Multi-select picker](doc:multi-select-picker) and an `Is In` filter when users should choose more than one region.

## App export

*Downloads may take a few seconds.*

<HTMLBlock>{`
<!-- Add icon library -->
<link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/4.7.0/css/font-awesome.min.css">

<!-- Full width -->
<button class="btn" onclick="window.open('https://drive.google.com/file/d/13NI6ECG4ay4njmM9e8TbgQXI5ZhMBcGM/view?usp=sharing', 'Download app export')" style="width:100%"><i class="fa fa-download"></i> Download</button>

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
