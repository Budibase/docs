---
title: Slack
excerpt: Add Slack notifications to your Budibase automations.
deprecated: false
hidden: false
metadata:
  title: ''
  description: ''
  robots: index
next:
  description: ''
---
Use the Slack action to send automation messages to a Slack channel.

## Before you start

Make sure you have:

* A Slack workspace
* A Slack app with incoming webhooks enabled
* The webhook URL for the channel you want to post to

## Slack action settings

The Slack action uses two fields:

| Setting | Purpose |
| :--- | :--- |
| Incoming Webhook URL | The Slack webhook URL for the target channel. |
| Message | The text Budibase posts when the automation runs. |

You can include bindings in the message to insert values from the trigger row or previous steps.

## Use bindings

Use bindings to include row values in the Slack message.

Example:

```handlebars
Woohoo, we just made a new sale in {{ trigger.row.Country }}

Check out the sale using the link below:
https://joe.budibase.app/app/tutorials#/sales/{{ trigger.id }}
```

## Set up Slack

Create a Slack app with incoming webhooks enabled, then paste the generated webhook URL into Budibase.

## Test

Test the automation with a sample row first. Confirm the message posts to the correct channel and the bindings resolve as expected.

## Related guides

* [Action steps](doc:automation-actions)
* [Triggers](doc:trigger)
* [Automation testing](doc:activating-and-testing)
