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

<Image align="center" src="https://files.readme.io/1618162d1a89aa128e5d43b814919371be405dcbc4296831b3b5c28214f12ae9-Screenshot_2024-11-07_at_09.07.33.png" />

and you want to send an [Email](doc:email) to notify the shopper of their purchase, but *only* if the order is accepted.

## Steps

1. Create an automation using the **Row Updated** trigger.

![](https://files.readme.io/9f880a3-Screenshot_2022-05-04_at_12.43.54.png "Screenshot 2022-05-04 at 12.43.54.png")

2. Add a condition action.\
   The updated order must have had the *Accepted* flag turned on to be able to continue.

<Image align="center" src="https://files.readme.io/b0001f3f492a0fc399ddf2fe6a8e920dbfe9c143d48ba7c6591ce2ebf8d4c81e-Screenshot_2024-11-07_at_09.06.54.png" />

3. Add the send email action.

<Image align="center" src="https://files.readme.io/ff488b53fa61eee9cbe2c6e7987616792008ca3b31686e1feecfe9f82df3eac4-Screenshot_2024-11-07_at_09.07.00.png" />

> 📘 Multiple Conditions
>
> You can add as many condition actions as you like.\
> When chained in a row, it effectively creates a logical AND expression.
