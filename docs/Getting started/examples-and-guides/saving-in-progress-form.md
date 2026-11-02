---
title: Save an in-progress form
excerpt: Allow your end users to pick up where they left off
deprecated: false
hidden: false
metadata:
  title: ''
  description: ''
  robots: index
next:
  description: ''
---
Use this pattern when a multi-step form should remember the user's progress after refresh or return visits.

Save both the current step and the current form values to app state.

## Build the form

1. Add a create form
2. Split it into multiple form steps
3. Add back and next buttons for navigation

## Save progress

1. Update the step value in app state when the user moves between steps
2. Persist the step value
3. Save the current form values to a separate state key
4. Persist the form values

## Restore progress

1. Bind the form's initial step to the saved step state
2. Bind each field's default value to the saved form state
3. Clear the saved state after submission

## Why this works

The step state restores where the user was, and the form value state restores the entered values.

## App export

<HTMLBlock>{`
<!-- Add icon library -->
<link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/4.7.0/css/font-awesome.min.css">

<!-- Full width -->
<button class="btn" onclick="window.open('https://drive.google.com/uc?export=download&id=1kTtNhwEj6zMBv-HJ1ELEyPA7_bXMeySU')" style="width:100%"><i class="fa fa-download"></i> Download</button>

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
