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

> 📘 OpenID Connect
>
> To become familiar with OpenID Connect in Budibase, see: [OpenID Connect](doc:openid-connect)

## Configuration

### Add a Client

Create a new client by visiting the 'Clients' pane from the left-hand side of your Keycloak admin console. Then give it an ID and select 'openid-connect' from the dropdown. Alternatively, bypass this step if you have a client already created. 

![1632](https://files.readme.io/ad46b3c-Keycloak_-_Create_Client.png "Keycloak - Create Client.png")

### Configure the Client

In the Client configuration screen \(accessed by clicking on the Client ID within the Clients pane\), change the 'Access Type' dropdown to be 'Confidential'.

![1666](https://files.readme.io/5208426-Keycloak_-_Access_Type.png "Keycloak - Access Type.png")

Next add the Callback URL to the 'Valid Redirect URIs' field ands then click 'Save'

![1574](https://files.readme.io/e0172e2-Keycloak_-_Redirect_URI.png "Keycloak - Redirect URI.png")

### Find your configuration details

#### Client ID

The Client ID field in Budibase should be the same ID as you gave the Client in Keycloak earlier.

![2320](https://files.readme.io/6e900e0-Keycloak_-_Client_ID.png "Keycloak - Client ID.png")

#### Client Secret

You can find the Client Secret from the Credentials tab in the Client Configuration screen

![1676](https://files.readme.io/8bc7ee8-Keycloak_-_Client_Secret.png "Keycloak - Client Secret.png")

#### Configuration URL

Visit the 'Realms' pane from the left hand side of your Keycloak admin console. Then click on the OpenID Endpoint Configuration link and copy the URL that opens. 

![1692](https://files.readme.io/d56c61c-Keycloak_-_Well-known_configuration.png "Keycloak - Well-known configuration.png")

![1072](https://files.readme.io/8e189ee-Keycloak_-_URL.png "Keycloak - URL.png")
