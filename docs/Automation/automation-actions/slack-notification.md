---
title: Slack
excerpt: Send Slack notifications from an automation
deprecated: false
hidden: false
metadata:
  title: ''
  description: ''
  robots: index
next:
  description: ''
---
Use the Slack action when an automation should post a message to a Slack channel.

## Before you start

Make sure you have:

* A Slack workspace
* A Slack app with incoming webhooks enabled
* The webhook URL for the target channel

## Configure the action

The Slack action uses two fields:

| Setting | Purpose |
| :-- | :-- |
| Incoming Webhook URL | The Slack webhook URL for the channel |
| Message | The text Budibase posts when the automation runs |

## Use bindings

Use bindings to include values from the trigger row or earlier steps.

Example:

```handlebars
Woohoo, we just made a new sale in {{ trigger.row.Country }}

Check out the sale using the link below:
https://joe.budibase.app/app/tutorials#/sales/{{ trigger.id }}
```

## Test

Test the automation with a sample row first.

Confirm the message posts to the correct channel and the bindings resolve as expected.
