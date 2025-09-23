---
title: Row triggers
excerpt: >-
  Trigger Budibase automations whenever table rows are created, deleted or
  updated.
deprecated: false
hidden: false
metadata:
  title: ''
  description: ''
  robots: index
next:
  description: ''
---
## Row created

This trigger type allows users to create automations based on newly created rows. When a row is created, the entire row’s object will be passed to the automation and referenced through trigger <<glossary:Binding>>s. Various steps can be added to manipulate the data, such as updating information in another table or sending the data to a [REST API](doc:external-data-connector) endpoint.

[block:image]
{
  "images": [
    {
      "image": [
        "https://files.readme.io/965dfd46b095a8adbf413c8e97e968b6ad09e322bd7ed917c6f6de5f5b90b41e-Screenshot_2025-04-04_at_13.49.43.png",
        "",
        "Table selection that the automation will watch for new rows being created"
      ],
      "align": "center"
    }
  ]
}
[/block]


## Row deleted

This trigger works similarly to created rows. It will pass in a row’s object whenever a row is deleted. This can then be used to do other operations e.g. removing it from an API or deleting a related row elsewhere within Budibase.

[block:image]
{
  "images": [
    {
      "image": [
        "https://files.readme.io/ddd99e49ddd0a0eb216bf344d134936f05287eb75183e11f9b5ca026132772ac-Screenshot_2025-04-04_at_13.50.02.png",
        "",
        "Deleted row trigger image of inital step"
      ],
      "align": "center"
    }
  ]
}
[/block]


## Row updated

Like the other two triggers listed above, this automation will run whenever a row within the chosen table is updated. 

[block:image]
{
  "images": [
    {
      "image": [
        "https://files.readme.io/04339955310dbf2dfc07829ce9ba876c68124c476f1e2cdf3d1c2487d560eb33-Screenshot_2025-04-04_at_13.50.10.png",
        "",
        "Updated row automation trigger"
      ],
      "align": "center"
    }
  ]
}
[/block]


It will provide both the old row's object (before the change). Additionally you also have access to the current values these are displayed as <<glossary:Binding>>s the names will reflect the columns of your table. 

[block:image]
{
  "images": [
    {
      "image": [
        "https://files.readme.io/ff2d9e0b432ac59542852da319eed21196f1452b30de42f5b64be6a66f166d3e-Screenshot_2025-04-04_at_13.51.41.png",
        "",
        "Image showing the old trigger row"
      ],
      "align": "center"
    }
  ]
}
[/block]


With the addition of the oldRow object, you can now perform more complex operations, such as testing if a specific value has changed and then continuing or ending the automation based on that condition.

This trigger can also be used similarly to the creation and deletion triggers, such as updating additional related records or posting updates to an API or query.