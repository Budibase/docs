---
title: Send Email
excerpt: Send an email through a configured SMTP server
deprecated: false
hidden: false
metadata:
  title: ''
  description: ''
  robots: index
next:
  description: ''
---
Use the Send Email action after you configure SMTP in Budibase.

## Before you start

Make sure email is configured in `Settings > Email`.

## Send Email settings

All fields support bindings.

| Setting | Purpose |
| :--- | :--- |
| Send To / From | Email addresses used by the message. |
| CC / BCC | Optional copy recipients. |
| Email subject | The subject line. |
| HTML Contents | The email body. |

You can supply multiple addresses by separating them with commas.

## Use bindings

Use bindings to personalize the message with values from the trigger row or earlier steps.

Example:

```handlebars
Subject: New request from {{ trigger.row.Name }}

Hello {{ trigger.row.Name }},

Your request has been received.
```

## Calendar invites

Optionally add a calendar invite to the email.

Use this when the message should include meeting details or another scheduled event.

## Attachments

To add attachments, provide:

* A file URL
* A filename

If you need multiple attachments, return an array of objects with `url` and `filename`.

Example:

```javascript
return $("trigger.row.photos").map(photo => {
  return { url: photo.url, filename: photo.name }
})
```

## Example workflow

A common pattern is:

1. Trigger an automation from a row or app action.
2. Prepare the email body with bindings.
3. Send the email to the user or team that needs it.
4. Add attachments or a calendar invite if needed.

## Good practice

Keep the message:

* Short
* Clear
* Bound to real data
* Styled consistently with your branding

## Related guides

* [Email](doc:email)
* [Action steps](doc:automation-actions)
* [Bindings in automations](doc:data-in-automations)
