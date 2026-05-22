---
title: On demand
excerpt: >-
  Trigger your Budibase automation when an action takes place in your Budibase
  app.
deprecated: false
hidden: false
metadata:
  title: ''
  description: kba_5hdqa
  robots: index
next:
  description: ''
---
The On demand trigger runs when invoked from the UI of your Budibase application, or by an agent workflow.

> 📘 Fire and forget
>
> Automations run asynchronously on a background thread; therefore, once an automation is triggered from the client, there will be no returned response by default. 
>
> To receive a response, you can make use of [Synchronous automations 🔒](doc:synchronous-automations).

## Creating the Automation

Create a new automation in the Automation section, choose `On demand` as the trigger, enter a name, and click `Save`.

## Defining Fields

Click the trigger step to open the right-hand panel and define your fields. These fields are the input data passed into your automation for use in later steps.

Supported field types are `Text`, `Number`, `DateTime`, `Boolean`, and `Array`.

You can use these fields in the next steps, check the [Working with data in automations guide](doc:data-in-automations) to learn how.

## Populating Fields from the UI

Now that you have defined fields to be used in your automation, you can call this automation from the UI and populate the fields you just selected.

Add a button in the Design section, then open its `No actions set` option in the <Glossary>Settings Panel</Glossary>.

A modal will open where you can define [Actions](doc:actions). Create a new action by choosing `Trigger Automation` from the options and clicking the `Add Action` button.

Then select your On demand automation from the dropdown list. Only On demand automations will appear in this list.

After selecting your On demand automation and any fields you created, they will be pulled through below the select automation. You can freely type the values you wish to pass. Or you can use any available bindings and pass those to the automation instead.

After selecting the field you want to populate, you can enter the value. This can be static text, or through [Bindings](doc:bindings). You could even use [JavaScript Bindings](doc:javascript) for it.

Whatever you choose for bindings, you will receive the result back in your automation, which you can then use in the next steps.

## Using Trigger Fields

This subject touches upon [working with data in automations](doc:data-in-automations), but I wanted to highlight the specific data that comes in with this trigger.

One popular thing to do with an `On demand` trigger is creating one or multiple database rows. You could use this action to populate various tables, or even <Glossary>Data Sources</Glossary> at once.

Let's take a look at the `Create Row` action. Click the step to open its settings, select your table, and use [Bindings](doc:bindings) with `trigger.fields` to map incoming values.

As you can see, we're using the same names for the fields we defined in the first step.

And if you want, at this stage, you could create another `Create Row`, or another action to create a row in another table, or somewhere else entirely. This could also be a good moment to duplicate data to [MongoDB](doc:mongodb).