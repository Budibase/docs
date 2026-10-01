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
Use the On demand trigger when you want an app action or agent workflow to start an automation.

> 📘 Fire and forget
>
> On demand automations run asynchronously. By default, they do not return a response to the client.
>
> If you need a response, use [Synchronous automations 🔒](doc:synchronous-automations).

## Creating the Automation

Create a new automation in the Automation section, choose `On demand` as the trigger, enter a name, and click `Save`.

## Defining Fields

Click the trigger step to open the right-hand panel and define your fields. These fields are the input data passed into your automation for later steps.

Supported field types are `Text`, `Number`, `DateTime`, `Boolean`, and `Array`.

You can use these fields in later steps. For more detail, see [Working with data in automations](doc:data-in-automations).

## Populating Fields from the UI

Now that the fields are defined, you can call the automation from the UI and populate those values.

Add a button in the Design section, then open its `No actions set` option in the <Glossary>Settings Panel</Glossary>.

A modal opens where you can define [Actions](doc:actions). Create a new action by choosing `Trigger Automation` and clicking `Add Action`.

Then select your On demand automation from the dropdown list. Only On demand automations appear here.

After selecting the automation and fields, they appear below the selector. You can enter static values or use bindings instead.

After selecting a field, enter the value. This can be static text, a [Binding](doc:bindings), or a [JavaScript Binding](doc:javascript).

Whatever values you choose, the automation can use them in later steps.

## Using Trigger Fields

This section focuses on the data that comes in with the trigger. For related guidance, see [Working with data in automations](doc:data-in-automations).

One common use for an `On demand` trigger is creating one or more database rows. You can use it to populate tables or even <Glossary>Data Sources</Glossary> at once.

The `Create Row` action is a good example. Click the step to open its settings, select your table, and use [Bindings](doc:bindings) with `trigger.fields` to map incoming values.

Use the same field names you defined in the trigger step.

You can also add another `Create Row` action, or send data to another table or data source. This is also a good place to duplicate data to [MongoDB](doc:mongodb).
