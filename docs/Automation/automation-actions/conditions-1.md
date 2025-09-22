---
title: Condition
excerpt: Create conditional automation workflows
deprecated: false
hidden: false
metadata:
  title: ''
  description: ''
  robots: noindex
next:
  description: ''
---
It is possible to perform an automation action only if certain trigger criteria are met.

For example, you may have a table of Orders as follows
[block:image]
{
  "images": [
    {
      "image": [
        "https://files.readme.io/7f8de29-Screenshot_2022-05-04_at_12.34.49.png",
        "Screenshot 2022-05-04 at 12.34.49.png",
        775,
        103,
        "#1b1b1b"
      ]
    }
  ]
}
[/block]
and you want to send an [Email](doc:email) to notify the shopper of their purchase, but _only_ if the order is accepted.
[block:api-header]
{
  "title": "Steps"
}
[/block]
1. Create an automation using the **Row Updated** trigger.
[block:image]
{
  "images": [
    {
      "image": [
        "https://files.readme.io/9f880a3-Screenshot_2022-05-04_at_12.43.54.png",
        "Screenshot 2022-05-04 at 12.43.54.png",
        509,
        302,
        "#202020"
      ]
    }
  ]
}
[/block]
2. Add a condition action. 
    The updated order must have had the *Accepted* flag turned on to be able to continue.
[block:image]
{
  "images": [
    {
      "image": [
        "https://files.readme.io/9e41bb2-Screenshot_2022-05-04_at_12.46.27.png",
        "Screenshot 2022-05-04 at 12.46.27.png",
        509,
        340,
        "#1d1d1d"
      ]
    }
  ]
}
[/block]
3. Add the send email action.
[block:image]
{
  "images": [
    {
      "image": [
        "https://files.readme.io/00bcbbf-Screenshot_2022-05-04_at_12.47.43.png",
        "Screenshot 2022-05-04 at 12.47.43.png",
        509,
        456,
        "#1d2229"
      ]
    }
  ]
}
[/block]

[block:callout]
{
  "type": "info",
  "title": "Multiple Conditions",
  "body": "You can add as many condition actions as you like. \nWhen chained in a row, it effectively creates a logical AND expression."
}
[/block]