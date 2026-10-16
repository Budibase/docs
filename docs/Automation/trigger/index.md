---
title: Triggers
excerpt: Start automations from events
deprecated: false
hidden: false
metadata:
  title: ''
  description: ''
  robots: index
next:
  description: ''
---
Every automation starts with one trigger. The trigger defines what starts the automation and what data is available to its steps.

## Choose a trigger

When you create an automation, choose the trigger that matches the source of the event:

* [Row created](doc:row-triggers#row-created) runs after Budibase adds a row to the selected table.
* [Row updated](doc:row-triggers#row-updated) runs after Budibase changes an existing row in the selected table.
* [Row deleted](doc:row-triggers#row-deleted) runs after Budibase removes a row from the selected table.
* [On demand](doc:app-action) runs when it is invoked by a user or agent. Define fields on the trigger to pass data into the automation.
* [Webhook](doc:webhook) runs when an external application sends an HTTP POST request to its endpoint.
* [Schedule](doc:cronjob) runs at a recurring interval or specified time.
* [Email received](doc:email-listener) runs when a new message arrives in the configured mailbox.

## Row actions

[Row actions](doc:row-actions) also start automations, but you create them from a table or view rather than from the automation trigger list. Use a row action when a user should start a workflow for a specific row.

After creating the row action, build its automation and choose which views and roles can use it.

## Row trigger behavior

Row triggers respond to rows created, updated, or deleted through Budibase.

Changes made directly in an external datasource do not fire Budibase row triggers.

For row created and row updated triggers, you can add [trigger filters](doc:row-trigger-filters) to run the automation only when a row meets specific conditions.

If an event occurs outside Budibase, use a webhook or another integration to notify Budibase when it happens.
