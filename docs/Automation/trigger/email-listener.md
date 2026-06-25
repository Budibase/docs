---
title: Email listener
excerpt: 'Trigger budibase automations when an email hits your folder/inbox '
deprecated: false
hidden: false
metadata:
  description: kba_5hdtu
  robots: index
---
The Email Received automation triggers whenever a new email arrives in a mailbox that you've connected to. It connects to your IMAP server (Gmail, Outlook, Microsoft 365, or any IMAP-compatible provider), checks for new messages on a short polling interval, and fires when an email matches your conditions. When it runs, the trigger exposes the message’s subject, sender, recipients, date, plain-text, and HTML body so you can use them in later steps.

If your flow also needs to send or reply to emails, set up SMTP first. The IMAP trigger doesn’t require SMTP to receive messages, but you’ll need SMTP for outbound mail. For a quick setup guide, follow the steps on the Email (SMTP) setup page <Anchor label="here" target="_blank" href="https://docs.budibase.com/update/docs/email#/">here</Anchor>.

## Setup

To configure the trigger, create a new **Email received** type automation. Click on the initial step and enter your IMAP host and port, enable SSL/TLS, and provide the mailbox username and password

<Image align="center" border={false} width="500px" src="https://files.readme.io/23e0d24f4b49d2ed1ddf7bb17e9f8d152892dbead2716e44ceb585ae3059be8e-Screenshot_2026-01-27_at_13.56.29.png" />

<Image align="center" alt="Showing the various configuration settings to get the email listener setup" border={false} src="https://files.readme.io/8f5e7feffd3881546c8290388dd7ac1133b57ec4c9d711b4c531e16158e6ec23-Screenshot_2026-01-27_at_14.02.44.png" />

The Email received trigger listens to the mailbox you set up within the initial step of the automation. When a new email arrives, Budibase detects it, converts the message into a payload (subject, from/to, date, body text/HTML), and starts your automation. You can then map those fields in downstream steps (e.g., create a record with From/To/Body). Budibase tracks each email’s UID, so the same message won’t trigger twice.

## Microsoft 365 / Azure Entra ID

If your mailbox is hosted in Exchange Online, the Microsoft guide on enabling IMAP access is relevant for the mailbox-level settings, but Budibase also needs an OAuth2 connection and Exchange Online app/service-principal setup.

Budibase's IMAP trigger uses the OAuth2 client credentials flow for machine-to-machine access. In practice, that means:

1. Create an OAuth2 connection in Budibase under **Workspace Settings > Connections > APIs**.
2. Set the token endpoint to your Entra tenant, for example `https://login.microsoftonline.com/<tenant-id>/oauth2/v2.0/token`.
3. Use the app registration's client ID and client secret.
4. Set the scope to `https://outlook.office365.com/.default`.
5. In the **Email received** trigger, choose **OAuth2** as the authentication method and select the Budibase OAuth2 connection.

For the Exchange Online side, the mailbox must allow IMAP and the app must be granted access to the mailbox. A working setup looks like this:

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

The Graph `User.Read` entry above is included from the working tenant setup that was shared with us. Budibase's IMAP trigger does not require Microsoft Graph for mail polling itself; the important part is the Exchange Online IMAP permission and mailbox access.

`your-graph-scope-id` should be replaced with the scope ID for the Graph permission you grant, and `your-exchange-online-role-id` should be replaced with the Exchange Online role ID from your tenant setup or the value your engineer provides.

The Microsoft article is mainly useful for the IMAP mailbox setting itself: <Anchor label="Configure mailbox access" target="_blank" href="https://learn.microsoft.com/en-us/exchange/clients/pop3-and-imap4/configure-mailbox-access">Microsoft Learn</Anchor>.

## Example

This is an example of how you can use Budibase's email automation trigger to populate a table with the contents of an email. This is useful when testing this feature, as you can see what is being output from the automation

<Image border={false} src="https://files.readme.io/5e9c0fe8be6549944b38484b16222b8dafd36825bbfedc66728b15a92eab6dfb-image.png" />

When an email is received, it triggers the _create row_ action, which we have set up to populate our 'emailz' table based on three fields: _body_, _from_, and _subject_. These have been selected from the Email's trigger outputs

<Image align="center" border={false} width="60% " src="https://files.readme.io/1e8fa39359c5a35de6d2c5b4e3b613d4c592ae62acd9873d06ca7029786bcc99-Screenshot_2026-01-27_at_14.10.30.png" />

Now, each time an email is received, Budibase runs the automation and creates a new row in 'Emailz' with the sender’s email address in _from_  and the message content in _body_. There may not always be a subject, but if there is, it will be in _subject_

<Image border={false} src="https://files.readme.io/101b8dc64d446242cae1f9dfb9e0482d7324ec4924e7dc116e91fe61678575f6-image.png" />