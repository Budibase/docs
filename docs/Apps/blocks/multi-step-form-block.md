---
title: Multi-step form block
excerpt: The all-in-one component for creating and managing a multi-step form
deprecated: false
hidden: false
metadata:
  title: ''
  description: kba_5h8g2
  robots: index
next:
  description: ''
---
Use the Multi-step form block when you want to manage step-based forms in one component.

## General settings

Choose the data source and form type once. These settings apply to every step in the block.

Supported form types:

* Create
* Update
* View

## Steps

Start with one step, then add more as needed. Use the step controls to move between steps, add steps, or delete steps.

Step titles can use the current step binding:

```text
Step {{ Multi-step Form Block.Current Step }}
```

You can also add a description for each step.

## Fields

Show or hide fields per step so each step only contains the inputs it needs.

## Buttons

Budibase adds the usual step navigation buttons automatically. The final step keeps the save action, while earlier steps use step navigation actions.

## Initial step

Set the initial step when you want the form to open on something other than step 1, such as when using persisted state.
