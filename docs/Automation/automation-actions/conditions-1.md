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

For example, you may have a table of Orders as follows

![775](https://files.readme.io/7f8de29-Screenshot_2022-05-04_at_12.34.49.png "Screenshot 2022-05-04 at 12.34.49.png")

and you want to send an [Email](doc:email) to notify the shopper of their purchase, but *only* if the order is accepted.

## Steps

1. Create an automation using the **Row Updated** trigger.

![509](https://files.readme.io/9f880a3-Screenshot_2022-05-04_at_12.43.54.png "Screenshot 2022-05-04 at 12.43.54.png")

2. Add a condition action.\
   The updated order must have had the *Accepted* flag turned on to be able to continue.

![509](https://files.readme.io/9e41bb2-Screenshot_2022-05-04_at_12.46.27.png "Screenshot 2022-05-04 at 12.46.27.png")

3. Add the send email action.

![509](https://files.readme.io/00bcbbf-Screenshot_2022-05-04_at_12.47.43.png "Screenshot 2022-05-04 at 12.47.43.png")

> 📘 Multiple Conditions
>
> You can add as many condition actions as you like.\
> When chained in a row, it effectively creates a logical AND expression.
