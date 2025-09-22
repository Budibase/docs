---
title: SSO with Auth0
excerpt: Configure SSO using OpenID Connect and Auth0
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
  "body": "To become familiar with OpenID Connect in Budibase, see: [OpenID Connect](doc:openid-connect)",
  "title": "OpenID Connect"
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
        "https://files.readme.io/c2c0abb-auth0-create-application.png",
        "auth0-create-application.png",
        1085,
        163,
        "#f6f2f7"
      ]
    }
  ]
}
[/block]
Select 'Regular Web Applications'.
[block:image]
{
  "images": [
    {
      "image": [
        "https://files.readme.io/bc6acd7-auth0-regular-web.png",
        "auth0-regular-web.png",
        828,
        737,
        "#eeeef0"
      ]
    }
  ]
}
[/block]
### Find your configuration details

Visit the 'Settings' tab in your application.
[block:image]
{
  "images": [
    {
      "image": [
        "https://files.readme.io/6f28742-auth0-copy-details.png",
        "auth0-copy-details.png",
        1031,
        644,
        "#f9f9f9"
      ]
    }
  ]
}
[/block]
**Configuration URL**

Use the **Domain** field to construct your Configuration URL in Budibase. e.g. `https://{domain}/.well-known/openid-configuration`

**Client ID**

Use the **Client ID** field as your Client ID in Budibase.

**Client Secret**

Use the **Client Secret** field as your Client ID in Budibase.

### Add your callback URL

Scroll down to the 'Application URIs' section and enter your callback URL
[block:image]
{
  "images": [
    {
      "image": [
        "https://files.readme.io/34b880b-auth0-callback.png",
        "auth0-callback.png",
        984,
        465,
        "#f9f8f8"
      ]
    }
  ]
}
[/block]