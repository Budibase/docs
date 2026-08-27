---
title: Progressive Web Apps 📱
excerpt:
 >-
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
To turn your Budibase app into a Progressive Web App (PWA), open the app in the builder and head to Settings >> Progressive Web App. Here you can configure 

> 💡
>
> Progressive Web Apps (PWAs) are limited to Enterprise-tier Budibase tenants.

## App Details

| Attribute   | Usage                                                                                                                                                                                                                                                                                                                                                                                                                      |
| :---------- | :------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| App Name    | The title given to your app, which it will be referred to in most circumstances.                                                                                                                                                                                                                                                                                                                                           |
| Short Name  | Used to specify a short name for your web application, which may be used when the full name is too long for the available space.(Not supported in Firefox) |
| Description | Displayed in the modal which prompts the user to download the PWA                                                                                                                                                                                                                                                                                                                                                          |

## Appearance

<br />

### App Icons

In order to provide the required icons for all required formats, we recommend using a tool like [PWA Builder](https://www.pwabuilder.com/imageGenerator) to generate a .zip file containing all the required sizes and formats. 

When uploading your zip file, the following limits apply:
* **Max file count**: 100 files
* **Max file size**: 10MB per file
* **Max total uncompressed size**: 50MB 
* **Max directory depth**: 10 levels
* **Symlinks**: Symlinks are not supported and will cause the upload to fail

The example below 

<Image alt="An example modal when a user clicks to download a PWA" align="center" src="https://files.readme.io/fd51185ee3e1ae0087bf1c75b7989a6d2044b8136340b753bb86ec36de6a521a-image.png">

### Colors

The Theme color chosen will be used for the app's title-bar. The Background color will be used while the app is loading, though behaviour may differ on some devices.

<Image align="center" src="https://files.readme.io/d50e74a90016e55cdf415e37fc6ba9fd29aba6dea7acf3f7c208bd903b0a3ddc-image.png" />

<br />

<Image align="center" src="https://files.readme.io/5099591806b1c58ea64d9a1937c063260e3ffea1bfa704dc0a84d12fca49d82b-image.png" />

### Display Mode

Only available on mobile devices, these setting impacts how the app is displayed. Broken down explanations for each option are below.

#### Standalone

* What it does: Displays the PWA in an app-like window without browser UI (no URL bar or tabs).
* Where supported: All platforms (desktop and mobile).
* Best for: General-purpose PWAs mimicking native apps.
* Benefit: Clean, app-like experience with some access to browser tools (mostly on desktop).

#### Fullscreen

* What it does: Hides all browser UI, status bar, and navigation controls, giving your PWA full screen real estate.
* Where supported: Only on Android (native support); use Fullscreen API on desktop/iPadOS as a fallback.
* Best for: Immersive apps like games, VR/AR experiences.
* Benefit: Maximises visual space and immersion.

#### Minimal UI

* What it does: Shows basic browser navigation (e.g., back/reload buttons or a title bar), but hides full browser chrome.
* Where supported: Android and desktop.
* Best for: Apps that benefit from slight browser context (e.g., light tools or content viewers).
* Benefit: Balances app-like feel with minimal navigation support.

More extensive information on this can be found [here](https://web.dev/learn/pwa/app-design#display_modes).