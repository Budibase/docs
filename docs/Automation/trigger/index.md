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
Every automation starts with a trigger.

The trigger listens for an event and starts the automation when that event occurs.

## Trigger types

Budibase supports these trigger types:

* Row created
* Row deleted
* Row updated
* Webhook
* App action
* Cron schedule
* Email received

## Row triggers

Row triggers respond to rows created, updated, or deleted through Budibase.

Changes made directly in an external datasource do not fire Budibase row triggers.

## Webhook triggers

Use a webhook trigger when another application needs to start a Budibase automation.

Use this when:

* The event starts in another service
* You need to pass a JSON payload into Budibase
* You want an external system to call Budibase on demand

## Trigger guidance

Keep triggers narrow and predictable:

* Use one trigger per automation
* Pick the trigger type that matches the source of the event
* Use app action, cron, or email triggers only when they fit the workflow

If Budibase does not provide the trigger type you need, use a webhook-based integration.
