---
title: Make (Integromat)
excerpt: Executing Make tasks and workflows from Budibase
deprecated: false
hidden: false
metadata:
  title: ''
  description: ''
  robots: noindex
next:
  description: ''
---
To get started, follow the Make guide on setting up a [Webhook](https://www.make.com/en/help/tools/webhooks). 

If you have correctly determined your data structure in Make, you should be able to see the available bindings that your <Glossary>Webhook</Glossary> offers to subsequent steps:

<Image alt="Available Make Webhook bindings" align="center" src="https://files.readme.io/465ec63-small-Screenshot_2023-05-11_at_16.52.41.png">
  Available Make Webhook bindings
</Image>

## Pushing data to your Make scenario

1. Create a new automation with [Trigger](doc:trigger) 
2. Click the `+` to add a step. Select `Make`.

![](https://files.readme.io/8607c60-make.gif)

3. Enter the Make webhook URL and JSON payload.

> 👍
>
> Click on the webhook step in your Make scenario and click `Copy address to clipboard` to get the URL
>
> ![](https://files.readme.io/4972274-small-Screenshot_2023-05-11_at_17.04.17.png)

When entering the payload data, your JSON payload should match the values of your Make webhook data structure. In this example it would appear as follows:

```json
{
  "value1": "ONE",
  "value2": "TWO",
  "value3": "THREE",
  "value4": "FOUR",
  "value5": "FIVE"
}
```

***

## Using bindings

Most likely you will want to send dynamic values, such as those from your automation trigger, rather than static values previously shown. 

You can do this through [Bindings](doc:data-in-automations).

If you are using an [App action](doc:app-action) trigger, then the fields can be accessed like so:

<Image alt="App action with 'test' field" align="center" src="https://files.readme.io/ae3f35d-small-Screenshot_2023-05-11_at_18.02.41.png">
  App action with 'test' field
</Image>

<Image alt="Using the app action 'test' field value" align="center" src="https://files.readme.io/150e507-small-Screenshot_2023-05-11_at_18.05.20.png">
  Using the app action 'test' field value
</Image>

> 📘
>
> **Note** the binding expression in this case is surrounded in double quotes because *appValue* is of type **Text**.
>
> For type **Number**, the quotes should not be included: `{{ trigger.fields.appValue }}`
