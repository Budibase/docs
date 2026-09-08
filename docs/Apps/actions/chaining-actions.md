---
title: Chaining actions
excerpt: ''
deprecated: false
hidden: false
metadata:
  title: ''
  description: kba_5v2f6
  robots: index
next:
  description: ''
---
Use chained actions when later actions depend on the result of earlier ones.

Actions run in order. If one fails, later actions do not run.

## Access previous results

Some actions expose their output to later actions.

Common examples include:

* Save row
* Duplicate row
* Execute query
* Trigger automation

Use the action result binding from the previous step to read that output.

## Query result properties

Execute query actions also expose:

* Status code - `{{ Action 1.Query result.code }}`
* Response time - `{{ Action 1.Query result.time }}`
* Payload size - `{{ Action 1.Query result.size }}`

You can use these values in conditions or display them in the UI.

## Common pattern

Use chained actions when you need to:

* Validate a form
* Save a row
* Reuse the saved row ID in another action
* Clear the form or navigate after the save completes

## Related pages

* [Form actions](doc:form-actions)
* [Data actions](doc:data-actions)
* [Conditional UI](doc:conditions)
