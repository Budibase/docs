---
title: Email listener
excerpt: 'Trigger budibase automations when an email hits your folder/inbox '
deprecated: false
hidden: false
metadata:
  robots: index
---
The Email trigger lets your automation start whenever a new email arrives in a mailbox or folder you specify. It connects to your IMAP server (Gmail, Outlook, or any IMAP-compatible provider), checks for new messages on a short polling interval, and fires when an email matches your conditions. When it runs, the trigger exposes the message’s subject, sender, recipients, date, plain-text and HTML body, and any attachments so you can use them in later steps.

If your flow also needs to send or reply to emails, set up SMTP first. The IMAP trigger doesn’t require SMTP to receive messages, but you’ll need SMTP for outbound mail. For a quick setup guide, follow the steps on the Email (SMTP) setup page [here]() .

<br />

## Setup

To configure the trigger, open your app in Builder and go to Automations. Add a trigger and choose Email (IMAP). In the setup form, enter your IMAP host and port, enable SSL/TLS, and provide the mailbox username and password

<Image border={false} src="https://files.readme.io/d0f421f19d3daec97bc045dbfbef2e024b6438ac245c01260d00398d20433655-image.png" />

<br />

The Email (IMAP) trigger listens to the mailbox you set up in Settings → Email → IMAP. When a new email arrives, Budibase detects it, converts the message into a payload (subject, from/to, date, body text/HTML, attachments), and starts your automation. You can then map those fields in downstream steps (e.g., create a record with From/To/Body). Budibase tracks each email’s UID, so the same message won’t trigger twice

<br />

<br />

<br />
