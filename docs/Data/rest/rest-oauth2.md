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
Use OAuth2 when your REST connection needs machine-to-machine access.

Budibase supports OAuth2 in REST connections using **Client Credentials**.

## Required OAuth2 fields

| Field | Purpose |
| :-- | :-- |
| Name | Label used in auth selection |
| Authentication method | How client credentials are sent |
| Grant type | Must be Client Credentials |
| Service URL | Provider token endpoint |
| Client ID | OAuth application client ID |
| Client Secret | OAuth application secret |
| Scope | Optional/required provider scopes |

## Configure OAuth2 in a connection

1. Open **Settings > Connections > APIs**
2. Open or create a connection
3. Go to **Authentication**
4. Click **Add authentication**
5. Choose **OAuth2** type
6. Enter required fields
7. Save the auth config

## Use OAuth2 in queries

1. Click **Open in API Editor**
2. Open or create a query
3. Select the OAuth2 config in the query auth settings
4. Click **Send**
5. Save the query

## Example (Spotify)

* Service URL: `https://accounts.spotify.com/api/token`
* Grant type: `Client Credentials`

Use your provider-issued client ID and client secret.

## Troubleshooting matrix

| Error | Typical cause | Action |
| :-- | :-- | :-- |
| `invalid_client` | Bad client ID or secret | Re-copy credentials from the provider |
| `unsupported_grant_type` | Wrong grant configured | Set Client Credentials |
| `invalid_scope` | Scope format or value invalid | Match the provider scope syntax |
| API call still unauthorized | Wrong auth config selected in query | Re-select the auth config and resend |

## Related guides

* [REST authentication](doc:rest-authentication)
* [REST queries](doc:rest-queries)
