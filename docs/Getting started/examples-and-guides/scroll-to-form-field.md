---
title: Scroll to form field
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
Use `Scroll To Field` when a form action should move the view to a specific field.

## Scenario

Use this pattern when a multi-step form should move the user to the next section after changing steps.

## Build the form

1. Add a [Form](doc:forms)
2. Set the form schema
3. Add a `Form Step`
4. Add a headline for each step
5. Add the relevant `Field Group` components

## Add the actions

1. Add a button to the first step
2. Add a `Change Form Step` action
3. Add a `Scroll To Field` action
4. Choose the target form and field

Repeat the same pattern for later steps if you want the view to keep following the form.

## Try it out

<HTMLBlock>{`
<iframe width="800" height="600" frameborder="0" allow="clipboard-write;camera;geolocation;fullscreen" src="https://cprem.budibase.app/embed/guide-scroll-to-form-field"></iframe>
`}</HTMLBlock>

## App export

*Downloads may take a few seconds.*

<HTMLBlock>{`
<!-- Add icon library -->
<link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/4.7.0/css/font-awesome.min.css">

<!-- Full width -->
<button class="btn" onclick="window.open('https://drive.google.com/uc?export=download&id=1kKeBOAvVQZEFCUawoshlIyZoulA9pyBX')" style="width:100%"><i class="fa fa-download"></i> Download</button>

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
