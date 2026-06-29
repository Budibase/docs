---
title: Condition
excerpt: Create conditional automation workflows
deprecated: false
hidden: false
metadata:
  title: ''
  description: ''
  robots: index
next:
  description: ''
---
It is possible to perform an automation action only if certain trigger criteria are met.

For example, you may have a table of Orders with an `Accepted` flag, and you want to send an [Email](doc:email) to notify the shopper of their purchase, but _only_ if the order is accepted.

## Steps

1. Create an automation using the **Row Updated** trigger.

The automation builder should now show a **Row Updated** trigger configured for the Orders table.

2. Add a condition action.
   The updated order must have had the _Accepted_ flag turned on to be able to continue.

The condition step checks whether the `Accepted` flag is enabled before the automation continues.

### Notify on stop

You can optionally enable the **Notify on stop** toggle. When enabled, if the automation stops at this condition because the criteria were not met, a notification will be displayed on the Budibase home page / builder dashboard. This is useful for monitoring specific business logic flows where a stop is noteworthy but not necessarily an error.

3. Add the send email action.

The final action sends the purchase notification after the condition passes.

> 💡 Multiple Conditions
>
> You can add as many condition actions as you like.
> When chained in a row, it effectively creates a logical AND expression.
