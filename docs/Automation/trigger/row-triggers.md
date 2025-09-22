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
        "https://files.readme.io/8322bf6-Screenshot_2024-07-10_at_12.24.03.png",
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
        "https://files.readme.io/9bbb5cc-Screenshot_2024-07-10_at_13.35.35.png",
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
        "https://files.readme.io/013525a-Screenshot_2024-07-10_at_13.36.26.png",
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
        "https://files.readme.io/16ad79d-Screenshot_2024-07-10_at_13.38.35.png",
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