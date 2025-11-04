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


To configure the trigger, open your app in Builder and go to Automations. Add a trigger and choose Email (IMAP). In the setup form, enter your IMAP host and port, enable SSL/TLS, and provide the mailbox username and password. Choose the folder to monitor (such as INBOX, Support, or Leads), set the polling frequency, and optionally add filters like a specific From address, a subject keyword, or “has attachments.” Use Test connection to confirm access, then save. Budibase tracks message UIDs to avoid duplicates and will only trigger on newly received mail that meets your filters.
