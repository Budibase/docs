---
title: SSO with OneLogin
excerpt: Configure SSO using OpenID Connect and OneLogin
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

![937](https://files.readme.io/3e476ee-onelogin-create.png "onelogin-create.png")

Type 'openid connect' and select 'Openid Connect \(OIDC\)'

![653](https://files.readme.io/a333c2f-onelogin-openid.png "onelogin-openid.png")

Give your application a name and save

![701](https://files.readme.io/d828fc5-onelogin-add-name.png "onelogin-add-name.png")

Visit the 'SSO' tab and choose

* 'Application Type' = 'Web'
* 'Authentication Method' = 'POST'

![430](https://files.readme.io/f99daab-onelogin-type.png "onelogin-type.png")

### Find your configuration details

Visit the 'SSO' tab in your application.

![1042](https://files.readme.io/6cefc2c-onelogin-details.png "onelogin-details.png")

**Client ID**

Use the **Client ID** field as your Client ID in Budibase.

**Client Secret**

Use the **Client Secret** field as your Client ID in Budibase.

**Configuration URL**

Use the **Issuer URL** field to construct your Configuration URL in Budibase. e.g. `https://{Issuer URL}/.well-known/openid-configuration`

### Add your callback URL

Visit the 'Configuration' tab in your application and enter your callback URL

![747](https://files.readme.io/a11cd57-onelogin-callback.png "onelogin-callback.png")
