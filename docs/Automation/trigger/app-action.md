---
title: User action
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
The User Action trigger is intended to be called from the UI of your Budibase application. 

> 📘 Fire and forget
> 
> Automations run asynchronously on a background thread; therefore, once an automation is triggered from the client, there will be no returned response by default. 
> 
> To receive a response, you can make use of [Synchronous automations 🔒](doc:synchronous-automations).

## Creating the Automation

To use the User Action trigger, you will need to create an automation with it defined as the trigger. Head over to the Automation section, create a new automation, and select `User Action` as the trigger you want to start your automation with.

[block:image]
{
  "images": [
    {
      "image": [
        "https://files.readme.io/8b4017b916087019d82ab5c92af232a789e5cabf3bfbbcb1091e144e5e5dc859-Screenshot_2025-07-16_at_14.50.23.png",
        "",
        ""
      ],
      "align": "center",
      "sizing": "600px"
    }
  ]
}
[/block]


Once you've entered the name and picked `User Action,` you can click `Save,` and your automation will be created.

## Defining Fields

You can now define fields by clicking on the automation step. This should open a side panel on the right of your screen. These fields will be the ones you want to have applied to the automation. This will enter data into your automation, which you can use in future steps. 

Right now, 5 different types of fields are supported: Text, Number, DateTime, Boolean, and Array. Add as many as you wish to have inside your automation.

[block:image]
{
  "images": [
    {
      "image": [
        "https://files.readme.io/bb70f46a99104ff20c059ad2a871f1ed0d21d63535612bdc57dc9d7649c18ca2-Screenshot_2025-07-16_at_15.10.19.png",
        "",
        ""
      ],
      "align": "center"
    }
  ]
}
[/block]


You can use these fields in the next steps, check the [Working with data in automations guide](doc:data-in-automations) to learn how.

## Populating Fields from the UI

Now that you have defined fields to be used in your automation, you can call this automation from the UI and populate the fields you just selected.

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


A modal will open where you can define [Actions](doc:actions). Create a new action by choosing `Trigger Automation` from the options and clicking the `Add Action` button.

Then select your app action type automation from the dropdown list. Only app action automations will appear in this list.

[block:image]
{
  "images": [
    {
      "image": [
        "https://files.readme.io/b1375bdc5478a65628ff35dce509ba82df84ed058f13c84eedb939b692a6e2f9-Screenshot_2025-07-16_at_15.06.52.png",
        "",
        ""
      ],
      "align": "center"
    }
  ]
}
[/block]


<br />

After selecting your app action and any fields you created, they will be pulled through below the select automation. You can freely type the values you wish to pass. Or you can use any available bindings and pass those to the automation instead.

After selecting the field you want to populate, you can enter the value. This can be static text, or through [Bindings](doc:bindings). You could even use [JavaScript Bindings](doc:javascript) for it.

Whatever you choose for bindings, you will receive the result back in your automation, which you can then use in the next steps.

## Using Trigger Fields

This subject touches upon [working with data in automations](doc:data-in-automations), but I wanted to highlight the specific data that comes in with this trigger.

One popular thing to do with a `User Action trigger` is creating one or multiple database rows. You could use this action to populate various tables, or even <<glossary:Data Sources>> at once.

Let's take a look at the `Create Row` action. Click the Create Row step to open its settings. Select the table you want to create a row in, and then use [Bindings](doc:bindings) to use the `trigger.fields.` object to populate the data you want.

[block:image]
{
  "images": [
    {
      "image": [
        "https://files.readme.io/7640712b23d37f2a3c89c2c859b0797132df066af1ca73bdbf7a53f47ce3afa3-Screenshot_2025-07-16_at_15.26.22.png",
        "",
        ""
      ],
      "align": "center",
      "sizing": "600px"
    }
  ]
}
[/block]


<br />

As you can see, we're using the same names for the fields we defined in the first step.

And if you want, at this stage, you could create another `Create Row`, or another action to create a row in another table, or somewhere else entirely. This could also be a good moment to duplicate data to [MongoDB](doc:mongodb).