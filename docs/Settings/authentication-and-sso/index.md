---
title: Authentication and SSO
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
## Getting started with SSO

* [OpenID Connect (OIDC)](doc:openid-connect)
* [Google](doc:sso-with-google)

### Using the OAuth token

When a user logs in using SSO then you will be able to access the OAuth token via the binding: `{{ Current User.OAuthToken }}`.

This is useful if you need to use an API that requires a session based authorisation header.
