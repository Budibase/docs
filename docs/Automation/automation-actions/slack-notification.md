---
title: Slack
excerpt: This tutorial will help you add a Slack automation to your Budibase app.
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

## Configure the Slack app

1. Create a Slack app.
2. Enable incoming webhooks.
3. Add a webhook to the workspace.
4. Copy the generated webhook URL.
5. Paste it into the Budibase Slack action.

## Build the automation

The common pattern is:

1. Add a trigger, such as `Row Created`.
2. Add the Slack action.
3. Map the values you want to send into the message.
4. Test the automation.
5. Publish it when the message looks correct.

## Use trigger data

Use trigger bindings to include row values in the Slack message.

Example:

```handlebars
Woohoo, we just made a new sale in {{ trigger.row.Country }}

Check out the sale using the link below:
https://joe.budibase.app/app/tutorials#/sales/{{ trigger.id }}
```

## Test and publish

Test the automation with a sample row first.

Then confirm:

* The webhook posts to the correct channel
* The message includes the expected bindings
* The automation runs when the trigger fires

Once the test passes, publish the app.

## Related guides

* [Action steps](doc:automation-actions)
* [Triggers](doc:trigger)
* [Automation testing](doc:activating-and-testing)
