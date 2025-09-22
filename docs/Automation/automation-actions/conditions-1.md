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

[block:image]
{
  "images": [
    {
      "image": [
        "https://files.readme.io/1618162d1a89aa128e5d43b814919371be405dcbc4296831b3b5c28214f12ae9-Screenshot_2024-11-07_at_09.07.33.png",
        "Screenshot 2022-05-04 at 12.34.49.png",
        ""
      ],
      "align": "center"
    }
  ]
}
[/block]


and you want to send an [Email](doc:email) to notify the shopper of their purchase, but _only_ if the order is accepted.

## Steps

1. Create an automation using the **Row Updated** trigger.

[block:image]
{
  "images": [
    {
      "image": [
        "https://files.readme.io/b0a416825c60bc684664cf346de642349461fba5a5be896ed2c0b0f413b9fef9-Screenshot_2025-04-09_at_11.27.24.png",
        "Screenshot 2022-05-04 at 12.43.54.png",
        null
      ],
      "align": "center"
    }
  ]
}
[/block]


2. Add a condition action.  
   The updated order must have had the _Accepted_ flag turned on to be able to continue.

[block:image]
{
  "images": [
    {
      "image": [
        "https://files.readme.io/2f8b2bd5818e2d598ac74fb489675ca8263cbc5b6c4f6471e4721068a6908101-Screenshot_2025-04-09_at_11.27.34.png",
        "Screenshot 2022-05-04 at 12.46.27.png",
        509
      ],
      "align": "center"
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
        "https://files.readme.io/4c6da835fe0adebc505fc10718b6ab15974e5f8e6253e09d3d425b114d84518f-Screenshot_2025-04-09_at_11.27.50.png",
        "Screenshot 2022-05-04 at 12.47.43.png",
        509
      ],
      "align": "center"
    }
  ]
}
[/block]


> 📘 Multiple Conditions
> 
> You can add as many condition actions as you like.  
> When chained in a row, it effectively creates a logical AND expression.