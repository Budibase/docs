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
Use app scripts to add custom scripts, styles, and external references to your app.

These scripts are injected into the app shell and apply across the app.

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

## Script content

You can add:

* JavaScript
* CSS
* External stylesheets
* External JavaScript references

## Use CSP whitelist domains

Use the CSP whitelist when your scripts need to fetch resources from other domains at runtime.

You do not need to whitelist domains for scripts that are already loaded through App Scripts.

## Common use cases

App scripts are commonly used for:

* Global styling overrides
* External libraries
* Embedded widgets
* Runtime configuration
