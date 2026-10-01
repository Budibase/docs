---
title: Synchronous automations 🔒
excerpt: Return data from an automation run
deprecated: false
hidden: false
metadata:
  title: ''
  description: kba_5hdoi
  robots: index
next:
  description: ''
---
Use synchronous automations when the caller needs data from the automation run.

Most automations run asynchronously. A synchronous automation returns data to the caller.

> 📘 Licensing🔒
>
> This feature is available on Premium and Enterprise plans.

## Create a synchronous automation

Add a `Collect Data` step to make an automation synchronous.

The `Collect Data` step returns the binding or value passed into it.

The step must be the last step in the automation.

## Webhook use case

Use a [Webhook](doc:webhook) trigger when an external service needs to call the automation and receive data back.

The response can include the value returned by the `Collect Data` step.

If you need a number or array, use a JavaScript binding instead of a Handlebars value.

## On demand use case

Use an [On demand](doc:app-action) trigger when a screen action needs to receive the automation result.

Typical flow:

1. Trigger the automation from a button
2. Store the result in app state
3. Bind the state value to a component

## Notes

* Synchronous automations can run for up to 120 seconds
* The automation result binding is only available when the automation includes `Collect Data`
* Use chaining actions to pass the result into later steps
