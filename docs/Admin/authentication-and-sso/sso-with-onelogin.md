---
title: SSO with OneLogin
excerpt: Configure SSO using OpenID Connect and OneLogin
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

Create the budibase application in your Applications list.
[block:image]
{
  "images": [
    {
      "image": [
        "https://files.readme.io/3e476ee-onelogin-create.png",
        "onelogin-create.png",
        937,
        333,
        "#d5d8da"
      ]
    }
  ]
}
[/block]
Type 'openid connect' and select 'Openid Connect \(OIDC\)'
[block:image]
{
  "images": [
    {
      "image": [
        "https://files.readme.io/a333c2f-onelogin-openid.png",
        "onelogin-openid.png",
        653,
        348,
        "#f7f9fa"
      ]
    }
  ]
}
[/block]
Give your application a name and save
[block:image]
{
  "images": [
    {
      "image": [
        "https://files.readme.io/d828fc5-onelogin-add-name.png",
        "onelogin-add-name.png",
        701,
        354,
        "#f5f8f8"
      ]
    }
  ]
}
[/block]
Visit the 'SSO' tab and choose

* 'Application Type' = 'Web'
* 'Authentication Method' = 'POST'
[block:image]
{
  "images": [
    {
      "image": [
        "https://files.readme.io/f99daab-onelogin-type.png",
        "onelogin-type.png",
        430,
        355,
        "#f5f7f8"
      ]
    }
  ]
}
[/block]
### Find your configuration details

Visit the 'SSO' tab in your application.
[block:image]
{
  "images": [
    {
      "image": [
        "https://files.readme.io/6cefc2c-onelogin-details.png",
        "onelogin-details.png",
        1042,
        440,
        "#f4f6f7"
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

Use the **Issuer URL** field to construct your Configuration URL in Budibase. e.g. `https://{Issuer URL}/.well-known/openid-configuration`

### Add your callback URL

Visit the 'Configuration' tab in your application and enter your callback URL
[block:image]
{
  "images": [
    {
      "image": [
        "https://files.readme.io/a11cd57-onelogin-callback.png",
        "onelogin-callback.png",
        747,
        401,
        "#f7f5f5"
      ]
    }
  ]
}
[/block]