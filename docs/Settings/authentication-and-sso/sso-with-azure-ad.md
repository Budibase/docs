---
title: SSO with Azure AD
excerpt: Configure SSO using OpenID Connect and Azure AD
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

First look for the Microsoft Entra ID service and click it.

[block:image]
{
  "images": [
    {
      "image": [
        "https://files.readme.io/3173c9b6f49976bdcc559d3aebe0a05f3c35babd17435d339967b8b7124e2a8a-entraid_search.png",
        "",
        "Searching for entra ID"
      ],
      "align": "center"
    }
  ]
}
[/block]


### Create the application

Create the Budibase application using a new 'App Registration'

[block:image]
{
  "images": [
    {
      "image": [
        "https://files.readme.io/43b64dcdd942fc78d1bf65f9c7c66d1869ca2d1be5581c8f18b86d074c2f6482-image.png",
        "azure-add-application.png",
        ""
      ],
      "align": "center"
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
        "https://files.readme.io/aa3f2ab586d039fe59b59d9f809df0b1a2c427abb6e46991aae661733fa91509-register_application.png",
        "azure-add-application-2.png",
        ""
      ],
      "align": "center"
    }
  ]
}
[/block]


#### Finding your callback URL

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

#### Add your callback URL

Switch back to your browser tab for Azure and paste the Callback URL from Budibase into redirect url area.

[block:image]
{
  "images": [
    {
      "image": [
        "https://files.readme.io/6ce33436e3106d54e0581c9c5d2bbe2fcd3120a1343e52705516e0934da37ef6-image.png",
        "azure-callback.png",
        "Callback for azure ad"
      ],
      "align": "center"
    }
  ]
}
[/block]


### Find your configuration details

**Configuration URL**

Visit 'Overview' > 'Endpoints'.

[block:image]
{
  "images": [
    {
      "image": [
        "https://files.readme.io/46e2a0fc1f372c0a9f6d95f53ef0fd3177e2e0b1d31adefbc4c8261e005f27f7-Screenshot_2025-01-13_at_14.29.06.png",
        "azure-configurationurl0.png",
        ""
      ],
      "align": "center"
    }
  ]
}
[/block]


Use the **OpenID Connect metadata document** field as your Configuration URL in Budibase.

> 📘 
> 
> Newer versions of Azure Portal may include a generic OpenID URL like: `https://login.microsoftonline.com/common/v2.0/.well-known/openid-configuration`
> 
> In that case you will need to manually edit the URL and include the Azure Tenant ID: `https://login.microsoftonline.com/[AZURE_TENANT_ID]/.well-known/openid-configuration`

![](https://files.readme.io/7fc1142-azure-configurationurl.png "azure-configurationurl.png")

**Client ID**

Visit 'Overview'

[block:image]
{
  "images": [
    {
      "image": [
        "https://files.readme.io/6f24e243a3e6ca5b89350f398696f3bae56e1e86184cd096d7c2487ae2d93fc3-Screenshot_2025-01-13_at_14.32.04.png",
        "azure-clientid.png",
        ""
      ],
      "align": "center"
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
        "https://files.readme.io/6a21a87ca387ca71a1bd5510cb710ea518882d22c7925c3f9360f4be058ad32a-certificates_and_secrets.png",
        "azure-clientsecret.png",
        ""
      ],
      "align": "center"
    }
  ]
}
[/block]


View your newly created secret

![](https://files.readme.io/c38ccd6-image.png)

Use the **Value** field as your Client Secret in Budibase.