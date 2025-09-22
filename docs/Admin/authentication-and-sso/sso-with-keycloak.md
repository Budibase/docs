---
title: SSO with Keycloak
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
description: Configure SSO using OpenID Connect and Keycloak
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
### Add a Client

Create a new client by visiting the 'Clients' pane from the left-hand side of your Keycloak admin console. Then give it an ID and select 'openid-connect' from the dropdown. Alternatively, bypass this step if you have a client already created. 
[block:image]
{
  "images": [
    {
      "image": [
        "https://files.readme.io/ad46b3c-Keycloak_-_Create_Client.png",
        "Keycloak - Create Client.png",
        1632,
        606,
        "#fafbfc"
      ]
    }
  ]
}
[/block]
### Configure the Client

In the Client configuration screen \(accessed by clicking on the Client ID within the Clients pane\), change the 'Access Type' dropdown to be 'Confidential'.
[block:image]
{
  "images": [
    {
      "image": [
        "https://files.readme.io/5208426-Keycloak_-_Access_Type.png",
        "Keycloak - Access Type.png",
        1666,
        100,
        "#fbfbfb"
      ]
    }
  ]
}
[/block]
Next add the Callback URL to the 'Valid Redirect URIs' field ands then click 'Save'
[block:image]
{
  "images": [
    {
      "image": [
        "https://files.readme.io/e0172e2-Keycloak_-_Redirect_URI.png",
        "Keycloak - Redirect URI.png",
        1574,
        96,
        "#f3f4f5"
      ]
    }
  ]
}
[/block]
### Find your configuration details

#### Client ID

The Client ID field in Budibase should be the same ID as you gave the Client in Keycloak earlier.
[block:image]
{
  "images": [
    {
      "image": [
        "https://files.readme.io/6e900e0-Keycloak_-_Client_ID.png",
        "Keycloak - Client ID.png",
        2320,
        478,
        "#f3f3f4"
      ]
    }
  ]
}
[/block]
#### Client Secret

You can find the Client Secret from the Credentials tab in the Client Configuration screen
[block:image]
{
  "images": [
    {
      "image": [
        "https://files.readme.io/8bc7ee8-Keycloak_-_Client_Secret.png",
        "Keycloak - Client Secret.png",
        1676,
        554,
        "#f9f9f9"
      ]
    }
  ]
}
[/block]
#### Configuration URL

Visit the 'Realms' pane from the left hand side of your Keycloak admin console. Then click on the OpenID Endpoint Configuration link and copy the URL that opens. 
[block:image]
{
  "images": [
    {
      "image": [
        "https://files.readme.io/d56c61c-Keycloak_-_Well-known_configuration.png",
        "Keycloak - Well-known configuration.png",
        1692,
        820,
        "#f9f9f9"
      ]
    }
  ]
}
[/block]

[block:image]
{
  "images": [
    {
      "image": [
        "https://files.readme.io/8e189ee-Keycloak_-_URL.png",
        "Keycloak - URL.png",
        1072,
        66,
        "#303134"
      ]
    }
  ]
}
[/block]