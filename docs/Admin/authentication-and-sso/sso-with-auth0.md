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

![1085](https://files.readme.io/c2c0abb-auth0-create-application.png "auth0-create-application.png")

Select 'Regular Web Applications'.

![828](https://files.readme.io/bc6acd7-auth0-regular-web.png "auth0-regular-web.png")

### Find your configuration details

Visit the 'Settings' tab in your application.

![1031](https://files.readme.io/6f28742-auth0-copy-details.png "auth0-copy-details.png")

**Configuration URL**

Use the **Domain** field to construct your Configuration URL in Budibase. e.g. `https://{domain}/.well-known/openid-configuration`

**Client ID**

Use the **Client ID** field as your Client ID in Budibase.

**Client Secret**

Use the **Client Secret** field as your Client ID in Budibase.

### Add your callback URL

Scroll down to the 'Application URIs' section and enter your callback URL

![984](https://files.readme.io/34b880b-auth0-callback.png "auth0-callback.png")
