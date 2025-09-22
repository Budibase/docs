---
title: Zapier
excerpt: Running a Zap from your Bapp
deprecated: false
hidden: true
metadata:
  title: ''
  description: ''
  robots: noindex
next:
  description: ''
---
## Setup

To begin, create a Zap and select `Webhooks by Zapier` as your first step, and click `Continue`.

Click `Copy` to copy the <<glossary:Webhook>> URL to the clipboard. 

Send a JSON payload to the webhook URL to setup the request body. This should match the JSON that you will be sending from Budibase. 

With the request body defined, you can use those values in your subsequent steps by selecting the `Raw Body` binding, and typing the path to the desired property.

For example:

[block:image]
{
  "images": [
    {
      "image": [
        "https://files.readme.io/df56509-small-Screenshot_2023-05-11_at_17.37.01.png",
        null,
        "Selecting the 'Raw Body' binding"
      ],
      "align": "center",
      "caption": "Selecting the 'Raw Body' binding"
    }
  ]
}
[/block]

[block:image]
{
  "images": [
    {
      "image": [
        "https://files.readme.io/0a972e7-small-Screenshot_2023-05-11_at_17.37.45.png",
        null,
        "Typing out the desired body property, i.e. 'value5'"
      ],
      "align": "center",
      "caption": "Typing out the desired body property, i.e. 'value5'"
    }
  ]
}
[/block]

***

## Pushing data to Zapier from Budibase

With you Zap configured, you can now interact with it from Budibase. 

1. Create a new automation with a [Trigger](doc:trigger).
2. Click the `+` icon, and select the `Zapier` app action.
3. Paste in the webhook URL and fill in the JSON payload as previously defined in Zapier.

![](https://files.readme.io/6cce345-zapier.gif)

***

## Using bindings

Most likely you will want to send dynamic values, such as those from your automation trigger, rather than static values previously shown. 

You can do this through [Bindings](doc:data-in-automations).

If you are using an [App action](doc:app-action) trigger, then the fields can be accessed like so:

[block:image]
{
  "images": [
    {
      "image": [
        "https://files.readme.io/675a270-small-Screenshot_2023-05-11_at_17.54.51.png",
        null,
        "App action fields binding"
      ],
      "align": "center",
      "caption": "App action fields binding"
    }
  ]
}
[/block]

> 📘 
> 
> **Note** the binding expression in this case is surrounded in double quotes because _appValue_ is of type **Text**.
> 
> For type **Number**, the quotes should not be included: `{{ trigger.fields.appValue }}`