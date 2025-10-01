---
title: Embedded app
excerpt: Embed a Budibase app as an iframe within your own webpages.
deprecated: false
hidden: false
metadata:
  title: ''
  description: ''
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

<Image align="center" border={false} src="https://files.readme.io/dc125e295c4fda098787de840fdbb51a4e789bb58a56274c8480ca2961d92eea-Screenshot_2025-10-01_at_15.06.30.png" />

You can use the select input field in the above image to select which app you'd like to copy the iframe code of. This will change the displayed iframe in the textarea below.

#### Publishing your app

You can publish your app by clicking the drop-down in the top-right corner of the screen, and clicking `Publish`.

<Image align="center" alt="Published apps support embedding" border={false} caption="Published apps support embedding" src="https://files.readme.io/164138c-publish.png" />

Once you app is published, you will see a new button appear: `</> Embed`. Clicking this button will take you to the Embed settings section.

<Image align="center" alt="Click the 'Copy code' to quick copy the iframe contents" border={false} caption="Highlight the iframe, right click and copy the code" src="https://files.readme.io/0edd65769ac076e9d789b550fa9c8c6025a4cf59556758de853bfd7d35fc6e76-Screenshot_2025-10-01_at_15.06.30.png" />

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

<Image align="center" alt="Turning app navigation off" border={false} caption="Turning app navigation off" src="https://files.readme.io/5aa6655-Screenshot_2023-06-28_at_11.12.55.png" />

<Image align="center" alt="The 'Clients' table view can now be embedded as an inline widget" border={false} caption="The 'Clients' table view can now be embedded as an inline widget" src="https://files.readme.io/36ccbd9-Screenshot_2023-06-28_at_11.17.55.png" />

***

<br />

## Embed component

The feature of embedding a Budibase app as an iframe should not be confused with the Embed [Component](doc:components) within the **Design** section.

A common use-case for the embed component is to add [Global styling](https://docs.budibase.com/docs/custom-css#global-styling) to your app screens. You could however also use it to embed iframes, including another Budibase app!

<Image align="center" alt="Adding an Embed component" border={false} caption="Adding an Embed component" src="https://files.readme.io/bc1eada-adding_embed.png" />

<Image align="center" alt="Adding an iframe to the Embed component - in this case another Budibase app!" border={false} caption="Adding an iframe to the Embed component - in this case another Budibase app!" src="https://files.readme.io/0f307d9-Screenshot_2023-06-28_at_11.25.51.png" />
