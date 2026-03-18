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
Budibase supports OAuth2 in REST connections using **Client Credentials**.

This is intended for machine-to-machine API access.

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
2. Open/create a connection
3. Go to **Authentication**
4. Click **Add authentication**
5. Choose **OAuth2** type
6. Enter required fields
7. Save

## Use OAuth2 in queries

1. Click **Open in API Editor**
2. Open/create query
3. Select OAuth2 config in query auth settings
4. Click **Send**
5. Save query

## Example (Spotify)

* Service URL: `https://accounts.spotify.com/api/token`
* Grant type: `Client Credentials`

Use your provider-issued client ID and client secret.

## Troubleshooting matrix

| Error | Typical cause | Action |
| :-- | :-- | :-- |
| `invalid_client` | Bad client ID/secret | Re-copy credentials from provider |
| `unsupported_grant_type` | Wrong grant configured | Set Client Credentials |
| `invalid_scope` | Scope format/value invalid | Match provider scope syntax |
| API call still unauthorized | Wrong auth config selected in query | Re-select auth config and resend |

## Related guides

* [REST authentication](doc:rest-authentication)
* [REST queries](doc:rest-queries)
