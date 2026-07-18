---
title: Cascading dropdown filters
excerpt: 'Example: Filter a city picker by the chosen country of another options picker'
deprecated: false
hidden: false
metadata:
  title: ''
  description: kba_5hi6a
  robots: index
next:
  description: ''
---
Use cascading dropdown filters when one picker should limit the values in another.

## Scenario

This guide uses a `Country` table and a related `City` table.

The country picker controls which cities appear in the city picker.

## Build the form

1. Add a [Form](doc:forms)
2. Set the form schema to `Country`
3. Add a [Data provider](doc:data-provider) for the country table
4. Add an [Options picker](doc:option-picker) for the country field
5. Add a [Relationship picker](doc:filter-by-relationships) for the cities field

## Filter the cities

1. Open the relationship picker filters
2. Match the city rows to the selected country
3. Disable the city picker until a country is selected
4. Clear the city value when the country changes

## Why this matters

This keeps the second picker limited to valid values and avoids stale selections.

## Try it out

<HTMLBlock>{`
<iframe width="800" height="600" frameborder="0" allow="clipboard-write;camera;geolocation;fullscreen" src="https://cprem.budibase.app/embed/guide-cascading-dropdown-filtering"></iframe>
`}</HTMLBlock>

<HTMLBlock>{`
<!-- Add icon library -->
<link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/4.7.0/css/font-awesome.min.css">

<!-- Full width -->
<button class="btn" onclick="window.open('https://drive.google.com/uc?export=download&id=1XlnVqqCYv4JyWGhEIo_R6KLMTIYtcQeu')" style="width:100%"><i class="fa fa-download"></i> Download</button>

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
