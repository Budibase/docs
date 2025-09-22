---
title: Synchronous automations 🔒
excerpt: ''
deprecated: false
hidden: true
metadata:
  title: ''
  description: ''
  robots: noindex
next:
  description: ''
---
[block:html]
{
  "html": "<style type=\"text/css\">\n  .markdown-body>.img:not(.lightbox.open) img{ float: none!important;margin-left: 0;}\n</style>"
}
[/block]

Synchronous Automations are a feature that allow users to receive feedback from their automation, in the Design section or via a webhook response. 

Automations are usually asynchronous, this means that when an automation runs, it does so in the background and the user is unable to access it's result, but with synchronous automations the result is available to the user. 

> 📘 Licensing🔒
> 
> The following features are available to:
> 
> - **All installations** with a Business license

## Creating a Synchronous Automation

You can convert an automation to a synchronous one by adding a **Collect** block. 

[block:image]
{
  "images": [
    {
      "image": [
        "https://files.readme.io/64c0a86-Screenshot_2023-06-06_at_09.19.31.png",
        null,
        ""
      ],
      "align": "left",
      "sizing": "600px",
      "border": true
    }
  ]
}
[/block]

A **Collect** block will simply return whatever binding or value is passed to it. In the below image the block will simply return the output of the [JS Scripting](doc:js-scripting) block.

Once this block has been added, you can access the result of your automation depending on whether your automation trigger is Webhook or App Action. In the following examples, a simple JS Scripting block has been used to return a value of `[1,2,3]`

## Webhook

Simply call the provided Webhook trigger URL in a client of your choice. Postman has been used in the example below. 

![](https://files.readme.io/dfb99bd-image.png)

## Actions

To access the result of your automation in the Design section you can use the Define Actions drawer to trigger a synchronous automation.

[block:image]
{
  "images": [
    {
      "image": [
        "https://files.readme.io/bd467f0-image.png",
        null,
        ""
      ],
      "align": "left",
      "sizing": "500px"
    }
  ]
}
[/block]

> 🚧 A synchronous automation can run for up to 120 seconds,  if a timeout below that is required it can be configured via the input highlighted in the screenshot

Once added this provides a binding with the result of the automation to any following action. In this example, we will use the binding to add the result of an automation into state and then into a paragraph component. 

[block:image]
{
  "images": [
    {
      "image": [
        "https://files.readme.io/be17c80-image.png",
        null,
        ""
      ],
      "align": "left",
      "sizing": "500px"
    }
  ]
}
[/block]

When the button with these actions attached is clicked, state will now be updated with a key called `result` that contains the result of our automation. 

To display this we now simply to need bind the state to the paragraph. 

[block:image]
{
  "images": [
    {
      "image": [
        "https://files.readme.io/8aa0d6e-Screenshot_2023-06-06_at_09.45.53.png",
        null,
        ""
      ],
      "align": "left",
      "sizing": "300px"
    }
  ]
}
[/block]

We can now preview our app and click the Button to which our actions are attached. 

![](https://files.readme.io/35dd737-image.png)

The automation result is stored in to state, and due to the binding of that state to the paragraph, appears on screen whenever the `Trigger` button is clicked.