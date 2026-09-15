---
title: Email
excerpt: ''
deprecated: false
hidden: false
metadata:
  title: ''
  description: ''
  robots: index
next:
  description: ''
  pages:
    - type: basic
      slug: email-templates
      title: Email Templates
---
Configure SMTP so Budibase can send emails for invitations, password recovery, and automation actions.

## Before you start

Make sure you have:

* An SMTP provider such as Gmail SMTP or SendGrid
* The host, port, username, and password for that provider
* Access to the Budibase admin portal

## Configure SMTP

1. Open the Budibase admin portal.
2. Go to `Settings > Email`.
3. Enter the SMTP details.
4. Save the configuration.

### SMTP settings

| Setting | Purpose |
| :--- | :--- |
| Host | SMTP server address. |
| Security type | Encryption mode used by the server. |
| Port | SMTP port exposed by the server. |
| From email address | Address used as the sender. |
| Require sign-in | Enables SMTP authentication. |
| Username | SMTP account username. |
| Password | SMTP account password. |

Use the values required by your provider. For modern SMTP setups, ports `587` and `2525` are the most common choices.

## Email templates

Budibase email templates are managed on a separate page.

See [Email templates](doc:email-templates) for the available templates and how to edit them.

## Use email in automations

Once SMTP is configured, you can send email from automation actions.

Common uses include:

* User invitations
* Password recovery
* Workflow notifications
* Approval and rejection messages

Keep sender addresses and template content aligned with your domain so mail is less likely to be flagged as suspicious.

## Troubleshooting

If email does not send:

* Confirm the SMTP host and port are correct
* Check whether authentication is required
* Verify the from address is allowed by the provider
* Confirm the provider is not blocking the connection

## Related guides

* [Automation actions](doc:automation-actions)
* [User management](doc:user-management)
* [Branding](doc:branding)
* [Email templates](doc:email-templates)
