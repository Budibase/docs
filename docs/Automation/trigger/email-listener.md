---
title: Email listener
excerpt: 'Trigger budibase automations when an email hits your folder/inbox '
deprecated: false
hidden: false
metadata:
  robots: index
---
The Email trigger lets your automation start whenever a new email arrives in a mailbox or folder you specify. It connects to your IMAP server (Gmail, Outlook, or any IMAP-compatible provider), checks for new messages on a short polling interval, and fires when an email matches your conditions. When it runs, the trigger exposes the message’s subject, sender, recipients, date, plain-text and HTML body, and any attachments so you can use them in later steps.

If your flow also needs to send or reply to emails, set up SMTP first. The IMAP trigger doesn’t require SMTP to receive messages, but you’ll need SMTP for outbound mail. For a quick setup guide, follow the steps on the Email (SMTP) setup page <Anchor label="here" target="_blank" href="https://docs.budibase.com/update/docs/email#/">here</Anchor> .

## Setup

To configure the trigger, open your app in Builder and go to Automations. Add a trigger and choose Email (IMAP). In the setup form, enter your IMAP host and port, enable SSL/TLS, and provide the mailbox username and password

<Image border={false} src="https://files.readme.io/d0f421f19d3daec97bc045dbfbef2e024b6438ac245c01260d00398d20433655-image.png" />

<br />

The Email (IMAP) trigger listens to the mailbox you set up in Settings → Email → IMAP. When a new email arrives, Budibase detects it, converts the message into a payload (subject, from/to, date, body text/HTML, attachments), and starts your automation. You can then map those fields in downstream steps (e.g., create a record with From/To/Body). Budibase tracks each email’s UID, so the same message won’t trigger twice

<br />

## Example

This is an example of how you can use budibase's email automation trigger to populate a table with the contents of an email, this is useful when testing this feature as you can see what is being output from the automation

<Image border={false} src="https://files.readme.io/5e9c0fe8be6549944b38484b16222b8dafd36825bbfedc66728b15a92eab6dfb-image.png" />

When an email is received, it will trigger the _create row_ action which we have set up to populate our table 'emailz' based on three fields, _body_, _from_ and _subject_. These have been selected from the Email's trigger outputs

<Image align="center" border={false} width="60% " src="https://files.readme.io/15ee4a16d209fa889ba94c376248308ecbc27cbd5aba8401b955da5d30fe6b83-image.png" />

<br />

Now, each time an email is received, Budibase runs the automation and creates a new row in 'Emailz' with the sender’s email address in _from_  and the message content in _body_. There may not always be a subject, but if there is it will be in _subject_

<Image border={false} src="https://files.readme.io/101b8dc64d446242cae1f9dfb9e0482d7324ec4924e7dc116e91fe61678575f6-image.png" />

<br />