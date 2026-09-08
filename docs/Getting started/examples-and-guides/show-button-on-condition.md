---
title: Show button on condition
excerpt: Allow end users to perform an app action only in certain cases
deprecated: false
hidden: false
metadata:
  title: ''
  description: ''
  robots: index
next:
  description: ''
---
Use conditional UI when a button should only appear after a user has searched for an existing record.

## Build the search area

1. Add a [Data provider](doc:data-provider) for the `Employees` table
2. Add a table inside the provider
3. Add a form above the provider
4. Add a text field to the form for the search term
5. Add a filter to the provider using the form field binding

## Build the create button

1. Add a button under the provider
2. Set the button text
3. Add an action to open a modal
4. Add a form block inside the modal to create a new employee

## Add the condition

1. Open the button's `Conditions` tab
2. Add a `Show Component` condition
3. Set the condition to check whether the provider has zero rows

The button only appears when the search returns no matches.

## Try it out

<HTMLBlock>{`
<iframe width="800" height="600" frameborder="0" allow="clipboard-write;camera;geolocation;fullscreen" src="https://cprem.budibase.app/embed/docs-show-button-on-condition"></iframe>
`}</HTMLBlock>

## App export

*Downloads may take a few seconds.*

<HTMLBlock>{`
<!-- Add icon library -->
<link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/4.7.0/css/font-awesome.min.css">

<!-- Full width -->
<button class="btn" onclick="window.open('https://drive.google.com/file/d/1Pm3CqW2KY9Ef1YWYMZ13n1doonFmZNLH/view?usp=sharing')" style="width:100%"><i class="fa fa-download"></i> Download</button>

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
