---
title: Lookup record
excerpt: Check if a record exists
deprecated: false
hidden: false
metadata:
  title: ''
  description: ''
  robots: index
next:
  description: ''
---
Use a lookup query when a form needs to check whether a record exists before the user continues.

## Build the query

1. Open the relevant datasource
2. Create a query that looks up the row you need
3. Add a binding for the lookup value
4. Save and test the query

## Build the form

1. Add a [Form](doc:forms)
2. Add the input field you want to check
3. Add a button to run the lookup query

## Add the actions

1. Run the lookup query
2. Save the returned row ID to app state
3. Stop the action chain when the query returns no rows
4. Show a warning notification when the record is not found

## Show the result

1. Add a [Repeater](doc:repeater) or [Form block](doc:form-block)
2. Filter the data by the saved row ID
3. Hide the component when no record was found

## Try it out

<HTMLBlock>{`
<iframe width="800" height="600" frameborder="0" allow="clipboard-write;camera;geolocation;fullscreen" src="https://cprem.budibase.app/embed/guide-lookup-record"></iframe>
`}</HTMLBlock>

<HTMLBlock>{`
<!-- Add icon library -->
<link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/4.7.0/css/font-awesome.min.css">

<!-- Full width -->
<button class="btn" onclick="window.open('https://drive.google.com/uc?export=download&id=1OtSRe8pC_kg2ni5_4srWFzEuA_M9D2DT')" style="width:100%"><i class="fa fa-download"></i> Download</button>

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
