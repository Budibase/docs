---
title: App action
excerpt: >-
  Trigger your Budibase automation when an action takes place in your Budibase
  app.
deprecated: false
hidden: false
metadata:
  title: ''
  description: ''
  robots: index
next:
  description: ''
---
The App Action trigger is intended to be called from the UI of your Budibase application. 

> 📘 Fire and forget
> 
> Automations run asynchronously on a background thread, therefore once an automation is triggered from the client, there will be no returned response by default. 
> 
> To receive a response you can make use of [Synchronous automations 🔒](doc:synchronous-automations).

## Creating the Automation

To use the App Action trigger, you will need to create an automation with the App Action defined as trigger. Head over to the Automation section, create a new automation, and select `App Action` as the trigger you want to start your automation with.

![](https://files.readme.io/6d49743-app-action.png "app-action.png")

Once you've entered the name and picked `App Action` you can click `Save` and your automation is created.

## Defining Fields

You can now define fields by clicking on the automation step. This should open a side panel on the right of your screen. These fields will be the ones you want to have applied to the automation. This will enter data into your automation, which you can use in future steps. 

Right now, 5 different types of fields are supported: Text, Number, DateTime, Boolean and Array. Add as many as you will want to have inside your automation.

[block:image]
{
  "images": [
    {
      "image": [
        "https://files.readme.io/67c9f8a0b0d971bc1250838d8421c5b73a6b2806fdd88be0d5ad2a8835890476-Screenshot_2025-04-04_at_11.54.57.png",
        "app-action-fields-setup.png",
        ""
      ],
      "align": "center"
    }
  ]
}
[/block]


You can use these fields in the next steps, check the [Working with data in automations guide](doc:data-in-automations) to learn how.

## Populating Fields from the UI

Now that you have defined fields to be used in your automation, you can call this automation from the UI and populate the fields you just defined.

First, add a button to your application in the Design Section of Budibase. Then, head over to the `No actions set` setting of the button in the <<glossary:Settings Panel>>.

[block:image]
{
  "images": [
    {
      "image": [
        "https://files.readme.io/b1a5ffd8870a96de512a6236ed767c35b23570b55db6e345cd44a38533241cfe-Screenshot_2024-10-24_at_10.23.39.png",
        "define-actions.png",
        ""
      ],
      "align": "center"
    }
  ]
}
[/block]


A modal will open where you can define [Actions](doc:actions). Create a new action by clicking the `Add Action` button, and then choose `Trigger Automation` from the options.

Then select your app action type automation from the dropdown list. Only app action automations will appear in this list.

[block:image]
{
  "images": [
    {
      "image": [
        "https://files.readme.io/fac93a04b5ca44442605fae4a4d1b9ef46c4d5989ffe422e8abebcfd7a74c29a-Screenshot_2024-10-24_at_10.23.44.png",
        "selected-automation.png",
        ""
      ],
      "align": "center"
    }
  ]
}
[/block]


After selecting your app action any fields you created, will be pulled through below the select automation. You can free type the values you wish to pass. Or you can use any available bindings and pass those- to the automation instead.

After selecting the field you want to populate you can enter the value. This can be static text, or through [Bindings](doc:bindings). You could even use [JavaScript Bindings](doc:javascript) for it.

Whatever you choose for bindings, you will receive the result back in your automation, which you can then use in next steps.

## Using Trigger Fields

This subject touches upon [working with data in automations](doc:data-in-automations), but I wanted to highlight the specific data that comes in with this trigger.

One popular thing to do with an `App Action trigger` is to create one, or multiple, rows in the database. You could use this action to populate multiple tables, or even <<glossary:Data Sources>> at once.

Let's take a look at the `Create Row` action. Click the Create Row step to open its settings. Select the table you want to create a row in, and then use [Bindings](doc:bindings) to use the `trigger.fields.` object to populate the data you want.

[block:image]
{
  "images": [
    {
      "image": [
        "https://files.readme.io/58809f3b901c37bcce06e2256faf7afd54feb4dd76ad968319792f6effa1f4ce-Screenshot_2025-04-04_at_11.55.43.png",
        "trigger-fields-data.png",
        ""
      ],
      "align": "center"
    }
  ]
}
[/block]


As you can see we're using the same names of fields we've defined in the first step.

And if you want, at this stage, you could create another `Create Row`, or other of course, action to create a row in another table, or somewhere else entirely. This could also be a good moment to duplicate data to [MongoDB](doc:mongodb).