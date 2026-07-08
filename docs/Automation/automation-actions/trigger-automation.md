---
title: Trigger automation 🔒
excerpt: Trigger an On demand automation from another automation
deprecated: false
hidden: false
metadata:
  title: ''
  description: ''
  robots: index
next:
  description: ''
---
Use the Trigger automation step to call an on-demand automation from another automation.

## Before you start

The target automation must use the `On demand` trigger.

## Step settings

Choose the automation to run, then map any fields it expects.

Use `Timeout (ms)` if you need to wait for the result.

## Outputs

The step exposes two outputs:

* `Success` - a boolean that indicates whether the target automation completed successfully
* `Value` - the output returned by the target automation

## Example

If the target automation expects `employee_id`, pass `{{ trigger.id }}` from the calling automation.

## Related guides

* [Triggers](doc:trigger)
* [Bindings in automations](doc:data-in-automations)
* [Action steps](doc:automation-actions)
