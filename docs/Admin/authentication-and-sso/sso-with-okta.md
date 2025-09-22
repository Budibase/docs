---
title: SSO with Okta
excerpt: ''
deprecated: false
hidden: false
metadata:
  title: ''
  description: ''
  robots: index
next:
  description: ''
---
---
description: Configure SSO using OpenID Connect and Okta
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

Create the Budibase application in your Applications list.
[block:image]
{
  "images": [
    {
      "image": [
        "https://files.readme.io/0fb65cd-okta-create.png",
        "okta-create.png",
        706,
        387,
        "#eef0f6"
      ]
    }
  ]
}
[/block]
Select `OIDC - OpenID Connect` and `Web Application`
[block:image]
{
  "images": [
    {
      "image": [
        "https://files.readme.io/ab388e0-okta-create-oidc.png",
        "okta-create-oidc.png",
        986,
        849,
        "#efeff0"
      ]
    }
  ]
}
[/block]
Enter your application name on the next screen and save.

### Find your configuration details

Visit the 'General' tab in your application.
[block:image]
{
  "images": [
    {
      "image": [
        "https://files.readme.io/be5f814-okta-id-secret.png",
        "okta-id-secret.png",
        741,
        550,
        "#f8f9f9"
      ]
    }
  ]
}
[/block]
**Client ID**

Use the **Client ID** field as your Client ID in Budibase.

**Client Secret**

Use the **Client Secret** field as your Client ID in Budibase.

**Configuration URL**

Visit the 'Sign On' tab in your application.
[block:image]
{
  "images": [
    {
      "image": [
        "https://files.readme.io/d528712-okta-url.png",
        "okta-url.png",
        767,
        723,
        "#f9f8f8"
      ]
    }
  ]
}
[/block]
Use the **Issuer** field to construct your Configuration URL in Budibase. e.g. `https://{Issuer}/.well-known/openid-configuration`

### Add your callback URL

Visit the 'General' tab in your application, scroll down and edit the 'General Settings' section. Enter your callback URL
[block:image]
{
  "images": [
    {
      "image": [
        "https://files.readme.io/feb845f-okta-callback.png",
        "okta-callback.png",
        762,
        480,
        "#faf9fa"
      ]
    }
  ]
}
[/block]