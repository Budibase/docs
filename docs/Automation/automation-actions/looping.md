---
title: Loop
excerpt: Repeat actions for each item in a list
deprecated: false
hidden: false
metadata:
  title: ''
  description: ''
  robots: index
next:
  description: ''
---
Use the Loop step when you need to run one or more actions for each item in a list.

## Configure the loop

### Binding / Value

The list or array to iterate over.

### Max loop iterations

The soft limit for the step.

If the loop reaches the limit, it stops and returns `MAX_ITERATIONS_REACHED`.

### Failure condition

Stop the loop when the current item matches the value you provide.

If the condition is met, the loop stops early and returns `FAILURE_CONDITION_MET`.

## Bindings

Steps inside the loop get the current item plus any bindings from earlier steps.

Steps after the loop get the full loop output.

## Notes

* Self-hosted installations can adjust the loop limit with `AUTOMATION_MAX_ITERATIONS`
* Use loops for repeated notifications, row creation, or per-item processing
