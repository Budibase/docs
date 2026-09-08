---
title: Progressive Web Apps 🔒
excerpt: >-
  PWAs allow your users to install your app on their device similar to a native
  app
deprecated: false
hidden: false
metadata:
  title: ''
  description: ''
  robots: index
next:
  description: ''
---
Use Progressive Web App settings to let users install your app on their device.

> 💡
>
> Progressive Web Apps (PWAs) are limited to Enterprise-tier Budibase tenants.

## App Details

| Attribute   | Usage                                                                                                                                                                                                                                                                                             |
| :---------- | :------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ |
| App Name    | The title given to your app, which it will be referred to in most circumstances.                                                                                                                                                                                                                  |
| Short Name  | Used to specify a short name for your web application, which may be used when the full name is too long for the available space.(Not supported in Firefox) |
| Description | Displayed in the modal which prompts the user to download the PWA                                                                                                                                                                                                                                 |

Set these values to control how the app is named in the install prompt and on the user's device.

## Appearance

### App Icons

Generate the icon set with a tool such as [PWA Builder](https://www.pwabuilder.com/imageGenerator), then use the resulting sizes and formats for the app icon field.

### Colors

The theme color controls the app title bar. The background color applies while the app is loading.

### Display Mode

Display mode affects how the app opens on supported devices.

#### Standalone

* Displays the app without browser chrome
* Supported on desktop and mobile
* Best for general-purpose installed apps

#### Fullscreen

* Hides browser UI and uses the full screen
* Best for immersive experiences
* Support varies by platform

#### Minimal UI

* Shows a small amount of browser UI
* Best for apps that still benefit from basic browser context
* Support varies by platform

More extensive information on this can be found [here](https://web.dev/learn/pwa/app-design#display_modes).
