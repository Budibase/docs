---
title: SSO with Keycloak
excerpt: Configure SSO using OpenID Connect and Keycloak
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

<br />

### Realm Setup

It's advised to use a realm other than the `master` realm in keycloak. The `master` realm in Keycloak contains your admin user and is meant to only be used as a top level admin space, where you can provision and manage other admin users and new realms.

To create a new realm, log in as your admin user at `<keycloak-url>/admin` and go to the realm dropdown on the left. Click "Create realm" and name your new realm, then save.

[block:image]
{
  "images": [
    {
      "image": [
        "https://files.readme.io/957c91a662ca8696665cc22ecbe319692f24b7d07e23fabdc054367afa0aaa23-Screenshot_2025-02-04_at_10.51.08.png",
        "",
        ""
      ],
      "align": "center"
    }
  ]
}
[/block]


### Add a Client

The first step of configuring Keycloak for OIDC in Budibase is to create a client. Log into Keycloak admin console with your admin credentials:

Visit the 'Clients' pane on the left side of your Keycloak admin console and click the 'Create client' button.

[block:image]
{
  "images": [
    {
      "image": [
        "https://files.readme.io/112a5b17673f3a9f3313d942145f8b4affcc597a6a7561041462e1b61ee9614a-Screenshot_2024-11-22_at_10.30.07.png",
        "",
        ""
      ],
      "align": "center"
    }
  ]
}
[/block]


Give your new client an ID and select 'OpenID Connect' from the dropdown. Then click next. This client ID will be the one you use in Budibase to connect your Keycloak instance for OIDC authentication. 

(If you have a client already created, bypass this step.)

[block:image]
{
  "images": [
    {
      "image": [
        "https://files.readme.io/07ae55f746ca8d70c5b9694d2ceb86770ced2e8a83bb624efbe1bbd17d66d17e-Screenshot_2024-11-22_at_10.32.33.png",
        "Keycloak - Create Client.png",
        1632
      ],
      "align": "center"
    }
  ]
}
[/block]


### Capability config

In the Capability config screen, toggle on 'Client authentication'. This will generate a **secret key** for the client, which you will use within the Budibase OIDC configuration later. Click the 'next' button.

[block:image]
{
  "images": [
    {
      "image": [
        "https://files.readme.io/df22126ffb44bbbdf5112fbaafb83c5f61288f69625a97df526a234d7da799b0-Screenshot_2024-11-22_at_10.35.53.png",
        "Keycloak - Access Type.png",
        1666
      ],
      "align": "center"
    }
  ]
}
[/block]


Next, we will get the Callback URL that we need to paste into Keycloak. You will find this in your Budibase portal under Settings > Auth > OpenID Connect. 

Copy the callback URL and add it to the 'Valid Redirect URIs' field in Keycloak then click 'Save'.

[block:image]
{
  "images": [
    {
      "image": [
        "https://files.readme.io/127f9072c684c38084d1a9f670d00e5b576cd66b718ab0d5fa206b0c15112aac-Screenshot_2024-11-22_at_10.39.16.png",
        "Keycloak - Redirect URI.png",
        1574
      ],
      "align": "center"
    }
  ]
}
[/block]


### Find your configuration details

#### Client ID

The Client ID field in Budibase shuld be the same ID as you gave the Client in Keycloak earlier.

[block:image]
{
  "images": [
    {
      "image": [
        "https://files.readme.io/6fe793e019bdc6e370c598ba095b1c29515756442bd9afa8271b115af8272e6c-Screenshot_2024-11-22_at_10.42.05.png",
        "Keycloak - Client ID.png",
        2320
      ],
      "align": "center"
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
        "https://files.readme.io/1019ca8e37fa5a7b48e28198d60b5032a3c96291f83de5c0a267fcd621576b2b-Screenshot_2024-11-22_at_10.42.52.png",
        "Keycloak - Client Secret.png",
        1676
      ],
      "align": "center"
    }
  ]
}
[/block]


Add this to the "Client secret" field in your Budibase OIDC panel. 

#### Configuration URL

Visit the 'Realms settings' pane on the left hand side of your Keycloak admin console. Click into the general tab at the top of this page. Scroll down to the bottom and then click on the **OpenID Endpoint Configuration** link and copy the URL.

You can then paste this URL into your Budibase OIDC Config as the Configuration URL, and Budibase will be integrated with Keycloak for OIDC.

# Managing Users

Now that Budibase is set up to authenticate using OIDC through Keycloak, we need to make sure we have users set up in our realm. To create a new user, you need to go to the **Users** tab in the Keycloak admin panel under your realm, and click "Create user"

Make sure you enter a username and email address for your user.

[block:image]
{
  "images": [
    {
      "image": [
        "https://files.readme.io/3d0f45fba07dbc51b77be0eee219bbd0c55d4bbb25a92d30eb101a837be9ceda-Screenshot_2025-02-04_at_11.16.03.png",
        "",
        ""
      ],
      "align": "center"
    }
  ]
}
[/block]


To add a password for the user, click the "Credentials" tab of the new user, and add a password by clicking the "Set Password" button. If you don't want the user to have to change the password on first log in, make sure to toggle the "Temporary" toggle off.

Now the user is created, you can sign in as that user through Budibase OIDC using Keycloak!

[block:image]
{
  "images": [
    {
      "image": [
        "https://files.readme.io/261f2281f2a16c042538c67c682636ed9908ddcbd7812ce876fdb58d0ac0217a-Screenshot_2025-02-04_at_11.22.03.png",
        "",
        ""
      ],
      "align": "center"
    }
  ]
}
[/block]