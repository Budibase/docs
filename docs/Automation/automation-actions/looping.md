---
title: Loop
excerpt: >-
  Looping is useful when you want to process multiple items or perform an action
  repeatedly, such as sending a message to every contact in your database.
deprecated: false
hidden: false
metadata:
  title: ''
  description: ''
  robots: index
next:
  description: ''
---
> 🚧 Iteration hard limit
>
> Users who self-host can configure this by changing the `AUTOMATION_MAX_ITERATIONS` environment variable.
>
> * For docker-compose users, update docker-compose.yaml > app-service > environment.
> * For Kubernetes users update values.yaml > `automationMaxIterations`

The Loop step repeats one or more automation actions for each item in a list.

## Settings

### Binding / Value

Binding / Value is the list or array that you want to iterate over.

### Max loop iterations

Max loop iterations sets a soft limit for the step. The platform hard limit still applies.

If the loop reaches the limit, it stops and returns a `MAX_ITERATIONS_REACHED` status.

### Failure conditions

Failure Condition stops the loop when the current item matches the value you provide.

If the condition is met, the loop stops early and returns a `FAILURE_CONDITION_MET` status.

## Bindings

Steps inside the loop get the current item plus any bindings from earlier steps.

Steps after the loop get the full loop output.
