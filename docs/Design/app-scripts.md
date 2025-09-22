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
These scripts are injected into your app's server-side rendered HTML skeleton and take effect immediately. This allows them to override or manipulate any part of your app.

## Unlocking app scripts

You must upgrade to an enterprise plan to unlock app script functionality. For more information, contact our [sales team here](https://budibase.com/contact/).

## Setup

You can configure app scripts in your app settings under a page titled "App Scripts."

<Image align="center" src="https://files.readme.io/e57bc023bb188834da406b56be7983215ea96599292b425a5d27fe223650fc5b-424046547-e3489213-f4ba-4c98-a125-789f9fcccf95.png" />

You can add a new script by clicking the "Add script" button in the top right of the table. The configuration of each script is broken down into 3 key elements;

* The Name field is a descriptive title of what your script does
* The Location field is a options picker that will control whether this script is added to the head of the page or the body
* The HTML field is where you can add the content to the head or body of your app. You can include:
  * JavaScript scripts
  * CSS styles
  * External style sheets
  * Additional JavaScript references

You can save your app script configurations once you've filled out the fields.

To view your saved scripts, return to the "App Scripts" page. Click a row to open the form with pre-filled information. You can then save, cancel, or delete the script as needed.

<Image align="center" src="https://files.readme.io/26c9b8aa41a8bae060a7a71275dca23cd210a5e6f2f63ac02288446ecba3f678-424046658-9e23fc06-54d3-4260-9739-220ccfce9c7d.png" />

## Domain Whitelisting for Content Security Policy (CSP)

You can now specify external domains to be added to your app's [Content Security Policy (CSP)](https://developer.mozilla.org/en-US/docs/Web/HTTP/Guides/CSP), enabling safe access to external resources or APIs.

This configuration is available under the "App Scripts" page in a new section titled "CSP Whitelist Domains."

### Why is this needed?

Browsers use CSP to control which resources a page can load. By default, only safe resources from your app’s domain are allowed. If your scripts fetch data or load additional resources from external domains, CSP may block them unless those domains are explicitly allowed.

### When do I need to use this?

You **only** need to add a domain to the CSP whitelist if:

* A script or style you've added fetches additional resources (e.g., images, styles, JS) from other domains at runtime
* Your script makes AJAX/fetch requests to a different domain (e.g., calling an external API)

You **do not need** to whitelist a domain if:

* You're just loading an external script via the App Scripts feature. These scripts are automatically secured with a nonce.
* You're using self-hosted Budibase with CSP disabled. In that case, all domains are already allowed.

### How to add domains

On the “App Scripts” page:

1. Scroll to the CSP whitelist section

   <Image align="center" src="https://files.readme.io/fa121e77fac020590f735313c8e3bbd3b677badd5b73512e93415764ecaa9462-430933139-08694736-329a-4d63-9dc5-b0665ef57375.png" />
2. Add one or more domains (e.g., [https://api.example.com](https://api.example.com))
3. Save your changes

Domains added here will be included in the default-src directive of your app’s CSP, allowing access to most types of external resources.

## Examples

### Changing font to inter

* Add the relevant style sheets
* Then override the font with the below inline styling

```Text HTML
<link rel="preconnect" href="https://fonts.googleapis.com">
<link rel="preconnect" href="https://fonts.gstatic.com" crossorigin>
<link href="https://fonts.googleapis.com/css2?family=Inter:ital,opsz,wght@0,14..32,100..900;1,14..32,100..900&display=swap" rel="stylesheet">

<style>
  html * {
    font-family: Inter, sans-serif !important;
  }
</style>
```

<Image align="center" src="https://files.readme.io/a0ae06455bdd3258d1896cc0d9de38f817bab20533db86138d279f751e32d45e-424047891-3afc06ef-ff2e-430d-a312-93b6b3db28b8.png" />

### Adding a chatbot

This requires two scripts,  

* A script in the head that will link to the chatbot's JS file.

  ```Text HTML
  <script async defer type="module" src="https://unpkg.com/@pragmasoft-
  ukraine/kite-chat-component/dist/kite-chat-component.mjs"/>
  ```

  <Image align="center" src="https://files.readme.io/9741eba0039fa18829869d891bb711152d8d5c7181c8b6cff1e1a9d13024a77f-424053361-a57e3e13-d6f6-40a2-8400-d8ca98b67ed1.png" />
* A script in the body that will add the following web component in the body to render the chatbot.

  ```Text HTML
  <kite-chat></kite-chat>
  ```

  <Image align="center" src="https://files.readme.io/cacf1adcafe5baad0599dea0bfb8dc3209ac6a5237975442f7b9679c245bfb72-424053449-619a5662-df26-48a8-82a0-a844d0720597.png" />

#### Result

<Image align="center" src="https://files.readme.io/81a5e44c04099689de34762ba11cd721ee33c84884acc79dfeeece412b5ef4da-424053125-ffe144f4-8fa3-4ad2-9710-19148ab364ad.png" />
