---
title: SSO with Azure AD
excerpt: 'description: Configure SSO using OpenID Connect and Azure AD'
deprecated: false
hidden: false
metadata:
  title: ''
  description: ''
  robots: noindex
next:
  description: ''
---
[block:callout]
{
  "type": "info",
  "title": "OpenID Connect",
  "body": "To become familiar with OpenID Connect in Budibase, see: [OpenID Connect](doc:openid-connect)"
}
[/block]

[block:api-header]
{
  "title": "Configuration"
}
[/block]
### Create the application

Create the Budibase application using a new 'App Registration'
[block:image]
{
  "images": [
    {
      "image": [
        "https://files.readme.io/3855d30-azure-add-application.png",
        "azure-add-application.png",
        494,
        259,
        "#f4f1f0"
      ]
    }
  ]
}
[/block]
Add the application name
[block:image]
{
  "images": [
    {
      "image": [
        "https://files.readme.io/311e313-azure-add-application-2.png",
        "azure-add-application-2.png",
        871,
        464,
        "#f9f9f9"
      ]
    }
  ]
}
[/block]
Ignore the Redirect URI for now.

### Find your configuration details

**Configuration URL**

Visit 'Overview' > 'Endpoints'.
[block:image]
{
  "images": [
    {
      "image": [
        "https://files.readme.io/ec62487-azure-configurationurl0.png",
        "azure-configurationurl0.png",
        449,
        167,
        "#f4f3f3"
      ]
    }
  ]
}
[/block]
Use the **OpenID Connect metadata document** field as your Configuration URL in Budibase.
[block:image]
{
  "images": [
    {
      "image": [
        "https://files.readme.io/7fc1142-azure-configurationurl.png",
        "azure-configurationurl.png",
        842,
        384,
        "#efe9e8"
      ]
    }
  ]
}
[/block]
**Client ID**

Visit 'Overview'
[block:image]
{
  "images": [
    {
      "image": [
        "https://files.readme.io/8c62325-azure-clientid.png",
        "azure-clientid.png",
        783,
        395,
        "#f4f4f5"
      ]
    }
  ]
}
[/block]
Use the **Application (client) ID** field as your Client ID in Budibase.

**Client Secret**

Visit 'Certificates & secrets', click on 'Add client secret', give your secret a description/expiry, and save.
[block:image]
{
  "images": [
    {
      "image": [
        "https://files.readme.io/a475e25-azure-clientsecret.png",
        "azure-clientsecret.png",
        1313,
        702,
        "#faf9f9"
      ]
    }
  ]
}
[/block]
View your newly created secret
[block:image]
{
  "images": [
    {
      "image": [
        "https://files.readme.io/9beb081-azure-clientsecret2.png",
        "azure-clientsecret2.png",
        1046,
        238,
        "#f9f9f9"
      ]
    }
  ]
}
[/block]
Use the **Value** field as your Client Secret in Budibase.

### Add your callback URL

Visit 'Authentication' and enter your callback URL
[block:image]
{
  "images": [
    {
      "image": [
        "https://files.readme.io/f46c0b9-azure-callback.png",
        "azure-callback.png",
        986,
        500,
        "#f7f8f8"
      ]
    }
  ]
}
[/block]