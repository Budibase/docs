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
For Budibase to send emails, you must configure an SMTP Mail Server, such as Gmail SMTP or SendGrid. After you have set this up, you can [invite users](doc:user-management) and send emails using the email [Action](doc:automation-actions).

### Email setup

<HTMLBlock>{`
<div style="padding:56.25% 0 0 0;position:relative;"><iframe src="https://player.vimeo.com/video/719112528?h=3d06fb10c7&amp;badge=0&amp;autopause=0&amp;player_id=0&amp;app_id=58479" frameborder="0" allow="autoplay; fullscreen; picture-in-picture" allowfullscreen style="position:absolute;top:0;left:0;width:100%;height:100%;" title="02-smtp-with-head"></iframe></div><script src="https://player.vimeo.com/api/player.js"></script>
`}</HTMLBlock>

<Table align={["left","left","left"]}>
  <thead>
    <tr>
      <th>
        Property
      </th>

      <th>
        Description
      </th>

      <th>
        Example answer
      </th>
    </tr>
  </thead>

  <tbody>
    <tr>
      <td>
        Host
      </td>

      <td>
        An SMTP email server will have an address (or addresses) that can be set and is generally formatted as smtp.serveraddress.com.
      </td>

      <td>
        smtp.example.invalid
      </td>
    </tr>

    <tr>
      <td>
        Security type
      </td>

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

      <td>
        [no-reply@example.invalid](mailto:no-reply@example.invalid)
      </td>
    </tr>

See [Email templates](doc:email-templates) for the available templates and how to edit them.

## Use email in automations

      <td>
        True
      </td>
    </tr>

    <tr>
      <td>
        Username (visible when require sign-in is checked)
      </td>

      <td>
        Username for SMTP server
      </td>

      <td>
        example-user
      </td>
    </tr>

* User invitations
* Password recovery
* Workflow notifications
* Approval and rejection messages

Keep sender addresses and template content aligned with your domain so mail is less likely to be flagged as suspicious.

      <td>
        example-password
      </td>
    </tr>
  </tbody>
</Table>

If email does not send:

Budibase comes with five different email templates: Password Recovery, User Invitation, User Welcome, Base Format, and Custom.

## Related guides

* [Automation actions](doc:automation-actions)
* [User management](doc:user-management)
* [Branding](doc:branding)
* [Email templates](doc:email-templates)
