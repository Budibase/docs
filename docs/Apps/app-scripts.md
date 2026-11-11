---
title: App scripts 🔒
excerpt: This adds the ability to add custom scripts and stylesheets to your apps.
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
      slug: custom-css
      title: Custom CSS
---
Use app scripts to add custom scripts, styles, and external resources to your app.

App scripts are injected into the app shell and apply across the app. Only add
code from sources you trust, because it can change the appearance and behaviour
of the entire app.

## Unlock app scripts

App scripts require an enterprise plan.

## Add a script

1. Open app settings
2. Go to `App Scripts`
3. Select `Add script`
4. Enter a name
5. Choose whether the script loads in the head or body
6. Add the HTML, script, or style content
7. Save the script

To update or remove a saved script, select it in the App Scripts table. You can
then edit its configuration or select `Delete`.

## Script content

You can add:

* JavaScript
* CSS
* External stylesheets
* External JavaScript references

The HTML is added to either the `<head>` or `<body>` of the app, according to
the selected location. For example:

```html
<script src="https://example.com/widget.js"></script>
```

```html
<style>
  html * {
    font-family: Inter, sans-serif !important;
  }
</style>
```

## Domain whitelisting for Content Security Policy (CSP)

Browsers use [Content Security Policy (CSP)](https://developer.mozilla.org/en-US/docs/Web/HTTP/Guides/CSP)
to control which resources a page can load. If an app script fetches data or
loads additional resources from another domain at runtime, the app's CSP may
block the request.

Add a domain to the script's `CSP whitelist` field when:

* The script makes an AJAX or `fetch` request to an external API
* The script loads resources such as images, fonts, frames, media, or additional
  JavaScript from another domain at runtime

Enter one domain per line. Wildcard subdomains are supported. For example:

```text
https://api.example.com
https://*.example.com
```

Saved entries are added to the relevant CSP resource directives across the app.

You do not need to add the source of an external `<script>` tag that you load
directly through App Scripts. Budibase adds the page's CSP nonce to those script
tags automatically.

## Common use cases

App scripts are commonly used for:

* Global styling overrides
* External libraries
* Embedded widgets
* Runtime configuration
