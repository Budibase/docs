---
title: REST OAuth2
excerpt: ''
deprecated: false
hidden: false
metadata:
  title: ''
  description: ''
  robots: index
next:
  description: ''
  pages:
    - type: basic
      slug: rest
      title: REST API
---
Budibase uses the Client Credentials Grant, which is a grant type in OAuth2 used for machine-to-machine authentication. This is typically is used when an application needs to access resources without user interaction. Unlike other OAuth2 flows, this one does not involve a user login. Instead, it uses a Client ID and Client Secret to obtain an access token directly from the authorisation server. More information on this grant type can be found [here](https://oauth.net/2/grant-types/client-credentials/).

## Setup

### Managing OAuth2 configuration

In Budibase, OAuth2 is managed on a per-app basis. To set your OAuth2 authentication:

1. Go to the Budibase Dashboard.
2. Select the app you want to configure.
3. In the app, navigate to the Settings tab using the top navigation bar.
4. Click on the OAuth2 option in the sub-navigation menu.

<Image align="center" src="https://files.readme.io/7ca47a2d286326f36ea44e82b1903706fa8af9e6e975fa0b1f650e521290d3d4-Screenshot_2025-03-26_at_10.23.55.png" />

You will now be on the OAuth2 configuration page, where you can add and manage different OAuth2 credentials. On this page, you will be able to view any previous OAuth2 credentials. You can update all the fields or even delete any configurations.

### Creating a new OAuth2 configuration

To create your first OAuth2 configuration:

1. Click the "Add OAuth2" button located above and to the right of the table.
2. A modal will appear, allowing you to enter the necessary configuration details.

<Image align="center" src="https://files.readme.io/add56d473a32ffa51874c37a3ea9679b2e7a875a48019da7e1c124b5befd123e-Screenshot_2025-06-18_at_11.58.50.png" />

### Fields Configuration

Nearly all fields in this form are required to set up OAuth2 authentication. Here’s what each field does:

* The **Name** field is the unique identifier for the OAuth2 configuration. Use descriptive names (e.g., Spotify Client Auth, Internal API Auth) for easy reference.
* The **Authentication method** field Specifies how credentials are sent during authentication. The two options are;
  * **Basic**: Uses the Authorisation: Bearer &lt;token&gt; header for each connection.
  * **POST**: Includes the credentials in the body of the request under the access\_token property.
* The **Grant type** field defines the OAuth2 authorisation method. (**Currently, Budibase only supports the Client Credentials grant type.**)
* The **Service URL** field is the URL where the OAuth2 flow sends the credentials. This must be a full URL (including https\://) pointing to the token endpoint.
* The **Client ID** field is the unique identifier for the service you are connecting to.
* The **Client Secret** field is used to validate the client’s authenticity.
* The **Scope** defines the specific permissions or access levels the client requests. This new field refines access control by allowing a more granular definition of what resources and actions are permitted.

## Example setup

Let’s walk through an example using Spotify’s OAuth2 Client Credentials flow.

### Create Spotify OAuth2 credentials

1. Go to the [Spotify Developer Dashboard](https://developer.spotify.com/).
2. Log in and create a new app.
3. Copy the Client ID and Client Secret in the app settings.

### Configure OAuth2 in Budibase

1. Navigate to the OAuth2 configuration page.
2. Click "Add OAuth2".

<Image align="center" src="https://files.readme.io/e5a5650e332e5fc0e957d7002225a81b51ada9f776f3f3255d537c553246bd57-Screenshot_2025-03-26_at_10.35.54.png" />

3. Fill in the fields as follows:
   1. Name: Spotify Client Auth
   2. Authentication Method: Basic
   3. Grant Type: Client Credentials
   4. Service URL: [https://accounts.spotify.com/api/token](https://accounts.spotify.com/api/token)
   5. Client ID: &lt;your-client-id&gt;
   6. Client Secret: &lt;your-client-secret&gt;
4. Click Confirm.

<Image align="center" src="https://files.readme.io/474928503d266fe8e1def75e4419d43f8d5c2d7c05c8a3a0a2ae605f1906c3c6-Screenshot_2025-06-18_at_12.04.25.png" />

Now that you have successfully set up your OAuth2 configuration with Spotify. We can start using the Spotify API and our OAuth2 configuration to validate any requests made to it. We can do this using our [REST datasource](doc:rest).

## Testing your OAuth2 configuration

1. On the same app you set your OAuth2 configuration, add a new REST datasource

<Image align="center" src="https://files.readme.io/a9a66c07b593afd92484885d1ad714f143958052dc50546b3fe9c90668b6ff77-Screenshot_2025-03-26_at_09.47.27.png" />

2. Add a new query. In our case, we will be using a get-query

<Image align="center" src="https://files.readme.io/6660692ffc6629358cac568cfdfdbf097a836cd7105965731b0f8faba00c9669-Screenshot_2025-03-26_at_09.59.43.png" />

3. Add the URL you wish to hit when sending the request to the API (I'm using: [https://api.spotify.com/v1/artists/`{{id}}`](https://api.spotify.com/v1/artists/`{{id}}`))
4. Select your OAuth2 authentication

<Image align="center" src="https://files.readme.io/286fb14910f4b8f7983a27c2f44661de70d09cbe0bc41eddb5fb92948c7d056b-Screenshot_2025-03-26_at_10.07.00.png" />

5. Click save
6. Send your request, and you should be able to see a successful response from the API.

<Image align="center" src="https://files.readme.io/87ad5b3dc872704af7a9d2039d2d8648478425616e48bd53159cd3ffc8c3bbd1-Screenshot_2025-03-26_at_10.37.35.png" />