---
title: Email listener
excerpt: 'Trigger budibase automations when an email hits your folder/inbox '
deprecated: false
hidden: false
metadata:
  description: kba_5hdtu
  robots: index
---
The Email Received trigger runs when Budibase finds a new message in a connected mailbox. It polls an IMAP server, checks for unread messages, and exposes the email subject, sender, recipients, date, plain-text body, and HTML body for later steps.

If you also need to send email, configure SMTP separately. Receiving messages only requires IMAP.

## Setup

To configure the trigger:

1. Create a new **Email received** automation
2. Open the trigger step
3. Enter the IMAP host and port
4. Enable SSL/TLS if required
5. Add the mailbox username and password

Use the mailbox settings to point Budibase at the folder you want to monitor. In most cases you only need the host, port, security settings, username, and password.

When a new email arrives, Budibase converts it into a payload and starts the automation. The same message will not trigger twice.

## Microsoft 365 / Azure Entra ID

If your mailbox is hosted in Exchange Online, you also need OAuth2 and mailbox-level IMAP access.

Budibase's IMAP trigger uses the OAuth2 client credentials flow for machine-to-machine access. Configure it as follows:

1. Create an OAuth2 connection in Budibase under **Workspace Settings > Connections > APIs**.
2. Set the token endpoint to your Entra tenant, for example `https://login.microsoftonline.com/<tenant-id>/oauth2/v2.0/token`.
3. Use the app registration's client ID and client secret.
4. Set the scope to `https://outlook.office365.com/.default`.
5. In the **Email received** trigger, choose **OAuth2** as the authentication method and select the Budibase OAuth2 connection.

The mailbox must allow IMAP and the app must have access to it. A working setup looks like this:

```powershell
Connect-ExchangeOnline -UserPrincipalName redacted@bongotown.onmicrosoft.com -Device
Connect-MgGraph -Scopes "Application.Read.All" -UseDeviceAuthentication
Get-MgServicePrincipal -Filter "appId eq 'your-app-registration-client-id'" | Select-Object Id
New-ServicePrincipal -AppId your-app-registration-client-id -ServiceId your-exchange-online-service-principal-id -DisplayName "EmailTownUSA"
Set-CASMailbox -Identity redacted@bongotown.onmicrosoft.com -ImapEnabled $true
Add-MailboxPermission -Identity redacted@bongotown.onmicrosoft.com -User your-exchange-online-service-principal-id -AccessRights FullAccess
```

If IMAP does not appear in the app registration's API permissions, add the Exchange Online resource entry to the app manifest and grant admin consent when you save it:

```json
{
  "requiredResourceAccess": [
    {
      "resourceAppId": "your-graph-resource-app-id",
      "resourceAccess": [
        {
          "id": "your-graph-scope-id",
          "type": "Scope"
        }
      ]
    },
    {
      "resourceAppId": "your-exchange-online-resource-app-id",
      "resourceAccess": [
        {
          "id": "your-exchange-online-role-id",
          "type": "Role"
        }
      ]
    }
  ]
}
```

The Graph `User.Read` entry above comes from the working tenant setup that was shared with us. Budibase does not need Microsoft Graph for polling itself. The important part is Exchange Online IMAP access plus mailbox permission.

Replace `your-graph-scope-id` and `your-exchange-online-role-id` with the values from your tenant.

The Microsoft article is mainly useful for the mailbox IMAP setting itself: <Anchor label="Configure mailbox access" target="_blank" href="https://learn.microsoft.com/en-us/exchange/clients/pop3-and-imap4/configure-mailbox-access">Microsoft Learn</Anchor>.

## Example

Use the trigger outputs to map the message subject, sender, and body into a table.

When an email is received, trigger a create row action and map `_body`, `_from`, and `_subject` into the target table. If the subject is empty, you can still create the row from the sender and body fields.

Each time an email is received, Budibase runs the automation and creates a new row with the sender, body, and subject values.
