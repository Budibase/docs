---
title: SSO with Auth0
excerpt: Configure SSO using OpenID Connect and Auth0
deprecated: false
hidden: false
metadata:
  title: ''
  description: ''
  robots: index
next:
  description: ''
---
> 📘 OpenID Connect
> 
> To become familiar with OpenID Connect in Budibase, see: [OpenID Connect](doc:openid-connect)

## Configuration

### Create the application

Create the budibase application in your Applications list.

![](https://files.readme.io/c2c0abb-auth0-create-application.png "auth0-create-application.png")

Select the 'web' tab, then click create.

[block:image]{"images":[{"image":["https://files.readme.io/f99b2ea-Screenshot_2024-04-03_at_08.35.49.png","auth0-regular-web.png",null],"align":"center"}]}[/block]

### Find your configuration details

Visit the 'Settings' tab in your application.

![](https://files.readme.io/6f28742-auth0-copy-details.png "auth0-copy-details.png")

**Configuration URL**

Use the **Domain** field to construct your Configuration URL in Budibase. e.g. `https://{domain}/.well-known/openid-configuration`

**Client ID**

Use the **Client ID** field as your Client ID in Budibase.

**Client Secret**

Use the **Client Secret** field as your Client Secret in Budibase.

### Finding your callback URL

Navigate to Settings -> Auth within Budibase. Scroll down to where it says "OpenID Connect" and find the field labeled `Callback URL`.

[block:image]
{
  "images": [
    {
      "image": [
        "https://files.readme.io/5bb0daa-Screenshot_2024-02-23_at_11.52.38.png",
        "",
        "Show casing were to get the callback url within Budibase"
      ],
      "align": "center"
    }
  ]
}
[/block]


If you are using our cloud service, the URL contained within is exactly what you need.

For self-hosted users, it will likely display `http://localhost:10000/api/global/auth/oidc/callback`. This will need to be changed depending on how you are hosting it: `http[s]://[your-budibase.com]/api/global/auth/oidc/callback`. The parts that likely need to be changed are enclosed within square brackets.

### Add your callback URL

Scroll down to the 'Application URIs' section and enter your callback URL

[block:image]
{
  "images": [
    {
      "image": [
        "https://files.readme.io/0a31fcd-34b880b-auth0-callback.png",
        "auth0-callback.png",
        "Azure auth0 callback url"
      ],
      "align": "center"
    }
  ]
}
[/block]