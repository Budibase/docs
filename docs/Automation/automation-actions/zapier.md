---
title: Zapier
excerpt: Running a Zap from your Bapp
deprecated: false
hidden: false
metadata:
  title: ''
  description: ''
  robots: index
next:
  description: ''
---
## Setup

To begin, create a Zap and select `Webhooks by Zapier` as your first step, and click `Continue`.

Click `Copy` to copy the <Glossary>Webhook</Glossary> URL to the clipboard. 

Send a JSON payload to the webhook URL to setup the request body. This should match the JSON that you will be sending from Budibase. 

With the request body defined, you can use those values in your subsequent steps by selecting the `Raw Body` binding, and typing the path to the desired property.

For example:

<Image alt="Selecting the 'Raw Body' binding" align="center" src="https://files.readme.io/df56509-small-Screenshot_2023-05-11_at_17.37.01.png">
  Selecting the 'Raw Body' binding
</Image>

<Image alt="Typing out the desired body property, i.e. 'value5'" align="center" src="https://files.readme.io/0a972e7-small-Screenshot_2023-05-11_at_17.37.45.png">
  Typing out the desired body property, i.e. 'value5'
</Image>

***

## Pushing data to Zapier from Budibase

With your Zap configured, you can now interact with it from Budibase. 

1. Create a new automation with a [Trigger](doc:trigger).
2. Click the `+` icon, and select the `Zapier` app action.
3. Paste in the webhook URL and fill in the JSON payload as previously defined in Zapier.

![](https://files.readme.io/6cce345-zapier.gif)

***

## Using bindings

Most likely you will want to send dynamic values, such as those from your automation trigger, rather than static values previously shown. 

You can do this through [Bindings](doc:data-in-automations).

If you are using an [App action](doc:app-action) trigger, then the fields can be accessed like so:

<Image alt="App action fields binding" align="center" src="https://files.readme.io/675a270-small-Screenshot_2023-05-11_at_17.54.51.png">
  App action fields binding
</Image>

> 📘
>
> **Note** the binding expression in this case is surrounded in double quotes because *appValue* is of type **Text**.
>
> For type **Number**, the quotes should not be included: `{{ trigger.fields.appValue }}`
