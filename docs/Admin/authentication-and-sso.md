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
<HTMLBlock>{`
<iframe src="https://player.vimeo.com/video/746819086?h=c5ab385933&title=0&portrait=0&byline=0" style="margin-top: -80px;" width="640" height="564" frameborder="0" allow="autoplay; fullscreen" allowfullscreen></iframe>
`}</HTMLBlock>

## Getting started with SSO

* [OpenID Connect (OIDC)](doc:openid-connect)
* [Google](doc:sso-with-google)

### Using the OAuth token

When a user logs in using SSO then you will be able to access the OAuth token via the binding: `{{ Current User.OAuthToken }}`.

This is useful if you need to use an API that requires a session based authorisation header.
