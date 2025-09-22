---
title: Synchronous automations 🔒
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
[block:html]
{
  "html": "<style type=\"text/css\">\n  .markdown-body>.img:not(.lightbox.open) img{ float: none!important;margin-left: 0;}\n</style>"
}
[/block]

Synchronous automations allow users to receive feedback from their automation, in the Design section or via a webhook response. 

Automations are usually asynchronous, this means that when an automation runs, it does so in the background and the user is unable to access its result, but with synchronous automations the result is available to the user. 

> 📘 Licensing🔒
> 
> The following features are available to:
> 
> - **All installations** with a Business or Enterprise license

<br />

## Creating a Synchronous Automation

You can make an automation synchronous by adding a **Collect Data** step. 

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

A **Collect** block will simply return whatever binding or value is passed to it. 

Once this block has been added, you can access the result of your automation as a Budibase user, or external user depending on whether your automation trigger is an [App action](doc:app-action) or [Webhook](doc:webhook). 

> 📘 Last step
> 
> As the **Collect Data** action returns data from your automation, it must be the last step. Otherwise you will see that the action is greyed out:
> 
> ![](https://files.readme.io/14b06ac-last_step.png)

<br />

## Webhook

When using the [Webhook](doc:webhook) trigger, you can return data to the caller of the trigger URL. 

For example consider this webhook automation that queries an Employees table, filtering on the _City_ that is passed into the trigger:

![](https://files.readme.io/6b9c9d8-filtering.png)

We can then specify data that should be returned to the caller of the trigger, in this case simply all of the rows matching the city provided.

![](https://files.readme.io/d53ae9d-collect_data.png)

After publishing this automation, we can see the result in our POST request:

[block:image]
{
  "images": [
    {
      "image": [
        "https://files.readme.io/6bee45d-string_trigger.png",
        null,
        null
      ],
      "align": "center"
    }
  ]
}
[/block]

You can now see the response from the **Collect Data** step has been provided in the response of the trigger call. Note that value in this case is a string - this is because **Handlebars always return strings.**

If you want to ensure that the correct typing is returned, such as for numbers and arrays, then you can use a JavaScript binding instead.

[block:image]
{
  "images": [
    {
      "image": [
        "https://files.readme.io/49c7141-return.png",
        null,
        "Making sure an array is returned"
      ],
      "align": "center",
      "caption": "Making sure an array is returned"
    }
  ]
}
[/block]

And now the result:

[block:image]
{
  "images": [
    {
      "image": [
        "https://files.readme.io/e096211-obj_trigger.png",
        null,
        null
      ],
      "align": "center"
    }
  ]
}
[/block]

<br />

## App action

For users to access the result of your automations in a published Budibase app, you will need to configure an [App action](doc:app-action) trigger within the _Design_ section. Click on `Define actions` to open the actions drawer to create a new or use an existing synchronous automation.

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

> 🚧 Timeout
> 
> As shown in the screenshot, a synchronous automation can run for up to 120 seconds, or less if required.

Once added this provides a binding with the result of the automation to any following action, through [Chaining actions](doc:chaining-actions). 

In this example, we will use the binding to add the result of an automation into [App state](doc:app-state) and then display it in a paragraph component. 

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

We can now preview our app and click the [Button](doc:button) for which our actions are defined. 

![](https://files.readme.io/35dd737-image.png)

The automation result is stored in to state, and due to the binding of that state to the paragraph, appears on screen whenever the `Trigger` button is clicked.

Instead of displaying the result in a paragraph, you could just as easily use the **Show Notification** action, or any other combination of actions.

> 📘 Automation Result
> 
> The automation result binding will only be available if your automation has a **Collect Data** step.