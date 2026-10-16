---
title: Make (Integromat)
excerpt: Send data from an automation to Make
deprecated: false
hidden: false
metadata:
  title: ''
  description: ''
  robots: index
next:
  description: ''
---
Use the Make action to send data to a Make scenario.

## Before you start

Set up a Make webhook first, then copy the webhook URL.

## Add the action

1. Create an automation
2. Add a trigger
3. Add the Make action
4. Paste the webhook URL
5. Add the JSON payload
6. Save the action

## Use bindings

Use bindings in the payload when you want to pass dynamic values from the trigger.

Example:

```json
{
  "value1": "{{ trigger.fields.appValue }}"
}
```

## Notes

* Match the payload shape to the Make scenario input
* Use quotes around text bindings
* Omit quotes for numeric values
