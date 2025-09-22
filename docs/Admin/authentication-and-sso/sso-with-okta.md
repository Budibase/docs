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

> 📘 OpenID Connect
>
> To become familiar with OpenID Connect in Budibase, see: [OpenID Connect](doc:openid-connect)

## Configuration

### Create the application

Create the Budibase application in your Applications list.

![706](https://files.readme.io/0fb65cd-okta-create.png "okta-create.png")

Select `OIDC - OpenID Connect` and `Web Application`

![986](https://files.readme.io/ab388e0-okta-create-oidc.png "okta-create-oidc.png")

Enter your application name on the next screen and save.

### Find your configuration details

Visit the 'General' tab in your application.

![741](https://files.readme.io/be5f814-okta-id-secret.png "okta-id-secret.png")

**Client ID**

Use the **Client ID** field as your Client ID in Budibase.

**Client Secret**

Use the **Client Secret** field as your Client ID in Budibase.

**Configuration URL**

Visit the 'Sign On' tab in your application.

![767](https://files.readme.io/d528712-okta-url.png "okta-url.png")

Use the **Issuer** field to construct your Configuration URL in Budibase. e.g. `https://{Issuer}/.well-known/openid-configuration`

### Add your callback URL

Visit the 'General' tab in your application, scroll down and edit the 'General Settings' section. Enter your callback URL

![762](https://files.readme.io/feb845f-okta-callback.png "okta-callback.png")
