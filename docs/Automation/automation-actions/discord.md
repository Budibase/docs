---
title: Discord
excerpt: Send Discord notifications from an automation
deprecated: false
hidden: false
metadata:
  title: ''
  description: ''
  robots: index
next:
  description: ''
---
Use the Discord action to post a message to a Discord channel.

## Configure the action

The Discord action uses these settings:

| Setting | Purpose |
| :-- | :-- |
| Incoming Webhook URL | The Discord webhook URL |
| Bot Name | The name shown in Discord |
| Bot Avatar | Optional image URL for the bot |
| Message | The content to send |

## Create the webhook

1. Open Discord server settings
2. Go to **Integrations**
3. Open **Webhooks**
4. Create or select a webhook
5. Copy the webhook URL

## Add the action to an automation

1. Create or open an automation
2. Add the Discord action
3. Paste the webhook URL
4. Set the bot name
5. Add the message text
6. Save the action

## Use bindings

Use bindings in the message when you want to include values from the trigger or previous steps.

Example:

```handlebars
We just created a new sale for {{ trigger.row.Country }}.
```

## Notes

* Use a square image for the bot avatar if you add one
* Publish the app before testing links back to a live record
* Use `trigger.row` to access fields from a row trigger
