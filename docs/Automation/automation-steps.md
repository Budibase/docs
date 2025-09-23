---
title: Introduction to automations
excerpt: ''
deprecated: false
hidden: false
metadata:
  title: ''
  description: ''
  robots: index
next:
  description: ''
---
Budibase's Automations give you the ability to build your backend logic into your Budibase workspaces and handle processes like sending emails when data is updated or a condition is met.  Automations can also be used for integrating with external platforms and services, for example, if you already have web services that are deeply integrated into your processes then automations can be used to receive or send data automatically between the two systems. Multiple apps can share the same automations, provided they are within the same workspace. 

[block:image]
{
  "images": [
    {
      "image": [
        "https://files.readme.io/f7f6d64cf49f854775d980e62b73155fbf5f72d71b60ad762f0f7a3969fd338b-Screenshot_2025-08-14_at_14.21.03.png",
        "CleanShot 2022-03-08 at 15.35.36@2x.png",
        ""
      ],
      "align": "center"
    }
  ]
}
[/block]


Once configured, your automation will run as part of your workspace in the Budibase hosting platform making this a backend process that will run at any time when triggered. 

> 🚧 Publish app
> 
> Automations will only run in published apps.  
> You can however [Test](doc:activating-and-testing) your automations before publishing.

## Getting started

To get started with Automations, open (or create) a Workspace, and click into the Automations tab in the builder, from here you will see the button to "New automation", this will ask you for a name for your automation - you're now ready to get started.

The next sections will cover the two major components of an automation, [Triggers](doc:trigger) and [Actions](doc:actions) . It will also cover [Contextual bindings](doc:contextual-bindings) , allowing chaining of the various automation steps together.

[block:image]
{
  "images": [
    {
      "image": [
        "https://files.readme.io/824f70477b75aa162b9ae067bc19048b44b109413a72e388af92a48a19b0cb58-Screen_Recording_2025-08-14_at_14.25.50.gif",
        "",
        ""
      ],
      "align": "center"
    }
  ]
}
[/block]


Automations are unique to each Workspace you have, but can be triggered by any app within a workspace.

[block:image]
{
  "images": [
    {
      "image": [
        "https://files.readme.io/d9efb0c6514432afe570423d82c76e307cfc579e687fba52f77b380ffda83fd6-Screenshot_2025-08-14_at_14.41.12.png",
        "",
        ""
      ],
      "align": "center"
    }
  ]
}
[/block]


Automations can be toggled Off/Live from the automation dashboard. Turning an automation off will impact every implementation of that automation, in every app that it is used.