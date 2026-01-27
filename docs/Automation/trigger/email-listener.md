---
title: Email listener
excerpt: 'Trigger budibase automations when an email hits your folder/inbox '
deprecated: false
hidden: false
metadata:
  robots: index
---
The Email trigger lets your automation start whenever a new email arrives in a mailbox or folder you specify. It connects to your IMAP server (Gmail, Outlook, or any IMAP-compatible provider), checks for new messages on a short polling interval, and fires when an email matches your conditions. When it runs, the trigger exposes the message’s subject, sender, recipients, date, plain-text and HTML body, and any attachments so you can use them in later steps.

If your flow also needs to send or reply to emails, set up SMTP first. The IMAP trigger doesn’t require SMTP to receive messages, but you’ll need SMTP for outbound mail. For a quick setup guide, follow the steps on the Email (SMTP) setup page <Anchor label="here" target="_blank" href="https://docs.budibase.com/update/docs/email#/">here</Anchor>.

## Setup

To configure the trigger, create a new **Email received** type automation. Click on the initial step and enter your IMAP host and port, enable SSL/TLS, and provide the mailbox username and password

<Image align="center" border={false} width="500px" src="https://files.readme.io/23e0d24f4b49d2ed1ddf7bb17e9f8d152892dbead2716e44ceb585ae3059be8e-Screenshot_2026-01-27_at_13.56.29.png" />

<Image align="center" alt="Showing the various configuration settings to get the email listener setup" border={false} src="https://files.readme.io/8f5e7feffd3881546c8290388dd7ac1133b57ec4c9d711b4c531e16158e6ec23-Screenshot_2026-01-27_at_14.02.44.png" />

The Email (IMAP) trigger listens to the mailbox you set up within the initial step of the automation. When a new email arrives, Budibase detects it, converts the message into a payload (subject, from/to, date, body text/HTML, attachments), and starts your automation. You can then map those fields in downstream steps (e.g., create a record with From/To/Body). Budibase tracks each email’s UID, so the same message won’t trigger twice.

## Example

This is an example of how you can use Budibase's email automation trigger to populate a table with the contents of an email, this is useful when testing this feature as you can see what is being output from the automation

<Image border={false} src="https://files.readme.io/5e9c0fe8be6549944b38484b16222b8dafd36825bbfedc66728b15a92eab6dfb-image.png" />

When an email is received, it will trigger the _create row_ action which we have set up to populate our table 'emailz' based on three fields, _body_, _from_ and _subject_. These have been selected from the Email's trigger outputs

<Image align="center" border={false} width="60% " src="https://files.readme.io/1e8fa39359c5a35de6d2c5b4e3b613d4c592ae62acd9873d06ca7029786bcc99-Screenshot_2026-01-27_at_14.10.30.png" />

Now, each time an email is received, Budibase runs the automation and creates a new row in 'Emailz' with the sender’s email address in _from_  and the message content in _body_. There may not always be a subject, but if there is, it will be in _subject_

<Image border={false} src="https://files.readme.io/101b8dc64d446242cae1f9dfb9e0482d7324ec4924e7dc116e91fe61678575f6-image.png" />
