---
title: Triggers
excerpt: ''
deprecated: false
hidden: false
metadata:
  title: ''
  description: ''
  robots: index
next:
  description: ''
---
Every automation starts with a single trigger.

The trigger listens for an event, then starts the automation when that event occurs.

## Trigger types

Budibase supports these trigger patterns:

* Row created
* Row deleted
* Row updated
* Webhook
* App action
* Cron schedule
* Email received

## Row-based triggers

Row triggers only respond to rows created through Budibase.

If you use an external datasource such as PostgreSQL or MySQL, changes made directly in that database do not fire Budibase row triggers.

Use row triggers when you want to react to changes made inside Budibase itself.

## External triggers

Use a webhook trigger when another application needs to start a Budibase automation.

This is the right option when:

* The event starts in another service
* You need to pass a JSON payload into Budibase
* You want an external system to call Budibase on demand

## Trigger guidance

Keep triggers narrow and predictable:

* Use one trigger per automation
* Pick the trigger type that matches the source of the event
* Use app actions, cron, or email triggers only when they fit the workflow

If you need a trigger type that Budibase does not provide, use a webhook-based integration or raise a feature request.
