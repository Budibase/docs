---
title: Trigger automation 🔒
excerpt: Run one automation from another automation
deprecated: false
hidden: false
metadata:
  title: ''
  description: ''
  robots: index
next:
  description: ''
---
Use the Trigger automation step when one automation needs to call another automation.

## Before you start

The target automation must use the `On demand` trigger.

## Configure the step

1. Choose the automation to run
2. Map any fields it expects
3. Set a timeout if needed
4. Save the step

## Outputs

The step returns:

* `Success` - whether the target automation completed successfully
* `Value` - the output returned by the target automation

## Example

If the target automation expects `employee_id`, pass `{{ trigger.id }}` from the calling automation.

## Notes

* Use this step for chained automation flows
* Keep field names clear so mappings are easy to read
* Check the target automation first if the call fails
