---
title: Embedded app
excerpt: Embed a Budibase app as an iframe within your own webpages.
deprecated: false
hidden: false
metadata:
  title: ''
  description: kba_5hhxe
  robots: index
next:
  description: ''
---
Websites will often have embedded content, for example videos from another platform such as YouTube.

This is done through an `iframe`, which is simply a HTML element that contains another HTML document inside.

In Budibase you can embed an entire published application within your webpages.

> 📘 Permissions
>
> Only application [Screens](doc:screens) with **Public** [Access level](https://docs.budibase.com/docs/screens#access-level) can be viewed within an embedded Budibase app.
>
> You must also [Manage access](https://docs.budibase.com/docs/attachments#manage-access) for any tables being used to have **Public** Read/Write access as required.

<br />

## Getting the iframe snippet

To obtain the embed code snippet, click the `Settings` tab within your workspace and then select `Apps`.

Here, you will be presented with several different tabs. Select `Embed`

You can use the app selector to choose which app's iframe code you want to copy.

#### Publishing your app

You can publish your app by clicking the drop-down in the top-right corner of the screen, and clicking `Publish`.

<br />

## Embed security settings

The Embed settings page now includes two controls that affect how your app is embedded:

* `Allowed domains` restricts which parent sites can place the app in an iframe.
* `Authenticate embedded users` lets the host site pass a signed token on the embed URL and map the token's email to an existing Budibase user.

### Allowed domains

Add one or more domains to the `Allowed domains` field to narrow the `frame-ancestors` CSP directive for embedded apps.

If the list is empty, Budibase keeps the previous behaviour and allows embedding from any origin.

Valid examples include:

* `https://example.com`
* `https://*.example.com`

### Authenticating embedded users

When `Authenticate embedded users` is enabled, the host site can append a signed token as the `jwt` query parameter on the embed URL.

Budibase verifies the token, reads the configured email claim, and looks up an existing Budibase user with that email address. If a match is found, Budibase creates a session for that user before serving the embedded app.

The verification settings support:

* `ES256` and `RS256` for public-key verification
* `HS256` for shared-secret verification
* an optional issuer check
* a configurable email claim path, such as `userdata.email`

<br />

## Settings

The iframe has a number of attributes that can be changed. We recommend that you only change the _width_, _height_ and _frameborder_ properties as changing the allow permissions could affect the working of your app.

> 🚧 Building an embedded app for mobile
>
> If you are [Designing for mobile](doc:designing-for-mobile) then be aware that the `{{ Device.Mobile }}` and `{{ Device.Tablet }}` <Glossary>Binding</Glossary>s  will always be **false** regardless of the device the embedded app is being viewed on.
> This is because the iframe has no context of the parent window.

<br />

## Creating widgets

You may find that you don't need to embed a fully fledged multi-screen app. Perhaps you want to embed a single [Table](doc:table) or [Chart](doc:chart) for example, to display on your webpage.

In this case you will want to hide the navigation links, as well as the app title and logo.

To do this, click on your app screen and in the <Glossary>Settings Panel</Glossary> toggle off `Show nav`. Remember that the access level of the screen should also be public! Publish your app for changes to take effect.

***

<br />

## Embed component

The feature of embedding a Budibase app as an iframe should not be confused with the Embed [Component](doc:components) within the **Design** section.

A common use-case for the embed component is to add [Global styling](https://docs.budibase.com/docs/custom-css#global-styling) to your app screens. You could however also use it to embed iframes, including another Budibase app!
