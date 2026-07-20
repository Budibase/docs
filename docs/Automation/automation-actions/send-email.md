---
title: Send Email
excerpt: Send an email from an automation
deprecated: false
hidden: false
metadata:
  title: ''
  description: ''
  robots: index
next:
  description: ''
---
Use the Send Email action when an automation should send a message through SMTP.

## Before you start

Make sure email is configured in `Settings > Email`.

## Configure the action

All Send Email fields support bindings.

| Setting | Purpose |
| :-- | :-- |
| Send To / From | Email addresses used by the message |
| CC / BCC | Optional copy recipients |
| Email subject | The subject line |
| HTML Contents | The email body |

You can separate multiple addresses with commas.

## Use bindings

Use bindings to personalize the subject or body with values from the trigger or previous steps.

Example:

```handlebars
Subject: New request from {{ trigger.row.Name }}

Hello {{ trigger.row.Name }},

Your request has been received.
```

## Attachments and invites

You can add:

* A calendar invite
* One or more file attachments

For attachments, return an array of objects with `url` and `filename`.

## Notes

* Keep the email short and clear
* Use real data from the automation instead of hard-coded text
* Use the same SMTP configuration across related automations
