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
> 
> 
> To receive a response you can make use of [Synchronous automations 🔒](doc:synchronous-automations).

## Creating the Automation

To use the App Action trigger, you will need to create an automation with the App Action defined as trigger. Head over to the Automation section, create a new automation, and select `App Action` as the trigger you want to start your automation with.

![](https://files.readme.io/6d49743-app-action.png "app-action.png")

Once you've entered the name and picked `App Action` you can click `Save` and your automation is created.

## Defining Fields

You now can define fields that you want to have applied to the automation. This enters data into your automation which you can use in future steps. 

Right now, 5 different types of fields are supported: Text, Number, DateTime, Boolean and Array. Add as many as you will want to have inside your automation.

![](https://files.readme.io/b7dfbb6-app-action-fields-setup.png "app-action-fields-setup.png")

You can use these fields in the next steps, check the [Working with data in automations guide](doc:data-in-automations) to learn how.

## Populating Fields from the UI

Now that you have defined fields to be used in your automation, you can call this automation from the UI and populate the fields you just defined.

First, add a button to your application in the Design Section of Budibase. Then, head over to the `Define Actions` button in the <<glossary:Settings Panel>>.

![](https://files.readme.io/e3f52b1-define-actions.png "define-actions.png")

A modal will open where you can define [Actions](doc:actions). Create a new action by clicking the `Add Action` button, and then choose `Trigger Automation` from the options.

Then you'll want to use the automation you've already created, so select `Use an existing automation` and then from the dropdown pick the one you created.

![](https://files.readme.io/2e1b9b5-selected-automation.png "selected-automation.png")

Next we're going to be adding the fields we've defined in our automation. When you click the `Add Field` button as displayed in the image above, you can pick from all the fields you've already defined.

![](https://files.readme.io/defb2e0-defined-fields.png "defined-fields.png")

After selecting the field you want to populate you can enter the value. This can be static text, or through [Bindings](doc:bindings). You could even use [JavaScript Bindings](doc:javascript) for it.

Whatever you choose for bindings, you will receive the result back in your automation, which you can then use in next steps.

## Using Trigger Fields

This subject touches upon [working with data in automations](doc:data-in-automations), but I wanted to highlight the specific data that comes in with this trigger.

One popular thing to do with an `App Action trigger` is to create one, or multiple, rows in the database. You could use this action to populate multiple tables, or even <<glossary:Data Sources>> at once.

Let's take a look at the `Create Row` action. Select the table you want to create a row in, and then use [Bindings](doc:bindings) to use the `trigger.fields.` object to populate the data you want.

![](https://files.readme.io/b9a5650-trigger-fields-data.png "trigger-fields-data.png")

As you can see we're using the same names of fields we've defined in the first step.

And if you want, at this stage, you could create another `Create Row`, or other of course, action to create a row in another table, or somewhere else entirely. This could also be a good moment to duplicate data to [MongoDB](doc:mongodb) or [Airtable](doc:airtable) for example.

## Video tutorial

[block:html]
{
  "html": "<iframe src=\"https://player.vimeo.com/video/746819221?h=7d0a827590&title=0&portrait=0&byline=0\" style=\"margin-top: -100px;\" width=\"640\" height=\"564\" frameborder=\"0\" allow=\"autoplay; fullscreen\" allowfullscreen></iframe>"
}
[/block]