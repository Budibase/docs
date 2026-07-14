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

Use a realm other than `master`. In Keycloak, `master` is reserved for top-level administration.

To create a new realm, sign in at `<keycloak-url>/admin`, open the realm dropdown on the left, click "Create realm", and save the new realm name.

<Image align="center" border={false} src="https://files.readme.io/957c91a662ca8696665cc22ecbe319692f24b7d07e23fabdc054367afa0aaa23-Screenshot_2025-02-04_at_10.51.08.png" />

### Add a Client

Create a client in Keycloak before you configure Budibase.

Open the **Clients** pane in the Keycloak admin console and click **Create client**.

<Image align="center" border={false} src="https://files.readme.io/112a5b17673f3a9f3313d942145f8b4affcc597a6a7561041462e1b61ee9614a-Screenshot_2024-11-22_at_10.30.07.png" />

Give the client an ID, select **OpenID Connect**, and continue. Use this client ID in Budibase.

If you already have a suitable client, skip this step.

<Image align="center" border={false} src="https://files.readme.io/07ae55f746ca8d70c5b9694d2ceb86770ced2e8a83bb624efbe1bbd17d66d17e-Screenshot_2024-11-22_at_10.32.33.png" />

### Capability config

In the Capability config screen, enable **Client authentication**. This generates the client secret you will use in Budibase.

<Image align="center" border={false} src="https://files.readme.io/df22126ffb44bbbdf5112fbaafb83c5f61288f69625a97df526a234d7da799b0-Screenshot_2024-11-22_at_10.35.53.png" />

Next, copy the callback URL from your Budibase portal under **Settings > Auth > OpenID Connect**.

Add the callback URL to **Valid Redirect URIs** in Keycloak, then save.

<Image align="center" border={false} src="https://files.readme.io/127f9072c684c38084d1a9f670d00e5b576cd66b718ab0d5fa206b0c15112aac-Screenshot_2024-11-22_at_10.39.16.png" />

### Find your configuration details

#### Client ID

The Client ID in Budibase should match the client ID you created in Keycloak.

<Image align="center" border={false} src="https://files.readme.io/6fe793e019bdc6e370c598ba095b1c29515756442bd9afa8271b115af8272e6c-Screenshot_2024-11-22_at_10.42.05.png" />

#### Client Secret

Find the Client Secret on the **Credentials** tab in the client configuration screen.

<Image align="center" border={false} src="https://files.readme.io/1019ca8e37fa5a7b48e28198d60b5032a3c96291f83de5c0a267fcd621576b2b-Screenshot_2024-11-22_at_10.42.52.png" />

Add it to the **Client secret** field in the Budibase OIDC panel.

#### Configuration URL

Open **Realm settings** in the Keycloak admin console, then open the **General** tab. Scroll to **OpenID Endpoint Configuration** and copy the URL.

Paste the URL into the **Configuration URL** field in Budibase.

## Managing Users

After Budibase is set up, create users in the Keycloak realm.

Open the **Users** tab in the Keycloak admin panel and click **Create user**.

Enter a username and email address.

<Image align="center" border={false} src="https://files.readme.io/3d0f45fba07dbc51b77be0eee219bbd0c55d4bbb25a92d30eb101a837be9ceda-Screenshot_2025-02-04_at_11.16.03.png" />

To add a password, open the **Credentials** tab and click **Set Password**. Turn off **Temporary** if the user should not change the password on first sign in.

You can now sign in through Budibase using Keycloak.

<Image align="center" border={false} src="https://files.readme.io/f86697d99b9e945cc79df97924cc31c0915320b5111a0b1ef4fbb9b33f23a4fd-Screenshot_2025-09-25_at_09.20.55.png" />
