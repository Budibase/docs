---
title: REST authentication
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
Configure REST authentication on the connection, then select it on each query.

## Supported auth types in Connections

* **Basic**: username/password
* **Bearer**: token-based header
* **OAuth2 (Client Credentials)**: machine-to-machine token flow

## Configure authentication on a connection

1. Open **Settings > Connections > APIs**
2. Open the connection
3. Go to **Authentication**
4. Click **Add authentication**
5. Select the auth type
6. Fill in the required fields
7. Save the auth config

You can store multiple auth configs on one connection.

## Select auth in a query

1. Open the connection in **API Editor**
2. Open or create a query
3. Select auth config for the query
4. Click **Send**
5. Save the query

## Auth configuration guidance

* Create separate auth entries per environment when needed
* Use clear names such as `Prod Bearer` and `Staging OAuth2`
* Re-test affected queries after editing a shared auth config

## Using SSO token bindings

If SSO is configured, you can bind the current user token in request fields.

```handlebars
{{ Current User.OAuthToken }}
```

Common usage:

* Authorization header values
* Request body fields for delegated APIs
* Request params in legacy endpoints

## Troubleshooting matrix

| Symptom | Likely cause | Fix |
| :-- | :-- | :-- |
| `401 Unauthorized` | Missing/wrong credentials | Verify auth values and query auth selection |
| `403 Forbidden` | Valid auth, insufficient scope/role | Check provider scopes/permissions |
| Works in one query but not another | Query using different auth config | Compare auth selection per query |
| Token expires quickly | Provider token policy | Use OAuth2 flow and retest token lifecycle |

## Related guides

* [REST OAuth2](doc:rest-oauth2)
* [REST queries](doc:rest-queries)
* [OpenID Connect](doc:openid-connect)
