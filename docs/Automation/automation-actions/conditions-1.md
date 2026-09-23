---
title: Condition
excerpt: Run actions only when a check passes
deprecated: false
hidden: false
metadata:
  title: ''
  description: ''
  robots: index
next:
  description: ''
---
Use a condition when an automation should continue only if a check passes.

## How it works

The condition step evaluates the current row or trigger data.

If the condition passes, the automation continues. If it fails, the automation stops.

## Common use case

Use a condition when you want to:

* Send an email only for accepted orders
* Continue only when a flag is enabled
* Stop a workflow when required data is missing

## Configure the step

1. Add a condition step
2. Choose the field or binding to check
3. Select the comparison
4. Enter the value to compare against
5. Add the next step after the condition

## Notes

* You can chain multiple condition steps
* Each condition adds another check before later steps run
* Use Notify on stop when you want a visible warning if the condition fails
