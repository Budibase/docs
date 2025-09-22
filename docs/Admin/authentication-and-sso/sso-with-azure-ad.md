---
title: SSO with Azure AD
excerpt: Configure SSO using OpenID Connect and Azure AD
deprecated: false
hidden: false
metadata:
  title: ''
  description: ''
  robots: noindex
next:
  description: ''
---
> 📘 OpenID Connect
> 
> To become familiar with OpenID Connect in Budibase, see: [OpenID Connect](doc:openid-connect)

## Configuration

### Create the application

Create the Budibase application using a new 'App Registration'

![](https://files.readme.io/3855d30-azure-add-application.png "azure-add-application.png")

Add the application name

![](https://files.readme.io/311e313-azure-add-application-2.png "azure-add-application-2.png")

Ignore the Redirect URI for now.

### Find your configuration details

**Configuration URL**

Visit 'Overview' > 'Endpoints'.

![](https://files.readme.io/ec62487-azure-configurationurl0.png "azure-configurationurl0.png")

Use the **OpenID Connect metadata document** field as your Configuration URL in Budibase.

![](https://files.readme.io/7fc1142-azure-configurationurl.png "azure-configurationurl.png")

**Client ID**

Visit 'Overview'

![](https://files.readme.io/8c62325-azure-clientid.png "azure-clientid.png")

Use the **Application (client) ID** field as your Client ID in Budibase.

**Client Secret**

Visit 'Certificates & secrets', click on 'Add client secret', give your secret a description/expiry, and save.

![](https://files.readme.io/a475e25-azure-clientsecret.png "azure-clientsecret.png")

View your newly created secret

![](https://files.readme.io/9beb081-azure-clientsecret2.png "azure-clientsecret2.png")

Use the **Value** field as your Client Secret in Budibase.

### Add your callback URL

Visit 'Authentication' and click 'Add a platform' -> 'Web'. Enter your callback URL.

![](https://files.readme.io/f46c0b9-azure-callback.png "azure-callback.png")