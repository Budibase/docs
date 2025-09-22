---
title: Embedded app
excerpt: Embed a Budibase app as an iframe within your own webpages.
deprecated: false
hidden: false
metadata:
  title: ''
  description: ''
  robots: noindex
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

To get the embed code snippet, click on the `Settings` tab within your app, and then click `Embed`.

Here you can see and copy the iframe contents.

[block:image]
{
  "images": [
    {
      "image": [
        "https://files.readme.io/d8b063e-Screenshot_2023-06-28_at_09.58.17.png",
        null,
        "Note: Embeds will only work with a published app"
      ],
      "align": "center",
      "caption": "Note: Embeds will only work with a published app"
    }
  ]
}
[/block]

#### Publishing your app

You can publish your app by clicking the drop-down in the top-right corner of the screen, and clicking `Publish`.

[block:image]
{
  "images": [
    {
      "image": [
        "https://files.readme.io/164138c-publish.png",
        null,
        "Published apps support embedding"
      ],
      "align": "center",
      "caption": "Published apps support embedding"
    }
  ]
}
[/block]

Once you app is published, you will see a new button appear: `</> Embed`. Clicking this button will take you to the Embed settings section.

[block:image]
{
  "images": [
    {
      "image": [
        "https://files.readme.io/6ea4755-copy_code.png",
        null,
        "Click the 'Copy code' to quick copy the iframe contents"
      ],
      "align": "center",
      "caption": "Click the 'Copy code' button to quick copy the iframe contents"
    }
  ]
}
[/block]

<br />

## Settings

The iframe has a number of attributes that can be changed. We recommend that you only change the _width_, _height_ and _frameborder_ properties as changing the allow permissions could affect the working of your app. 

> 🚧 Building an embedded app for mobile
> 
> If you are [Designing for mobile](doc:designing-for-mobile) then be aware that the `{{ Device.Mobile }}` and `{{ Device.Tablet }}` <<glossary:Binding>>s  will always be **false** regardless of the device the embedded app is being viewed on.  
> This is because the iframe has no context of the parent window.

<br />

## Creating widgets

You may find that you don't need to embed a fully fledged multi-screen app. Perhaps you want to embed a single [Table](doc:table) or [Chart](doc:chart) for example, to display on your webpage. 

In this case you will want to hide the navigation links, as well as the app title and logo. 

To do this, click on your app screen and in the <<glossary:Settings Panel>> toggle off `Show nav`. Remember that the access level of the screen should also be public! Publish your app for changes to take effect.

[block:image]
{
  "images": [
    {
      "image": [
        "https://files.readme.io/5aa6655-Screenshot_2023-06-28_at_11.12.55.png",
        null,
        "Turning app navigation off"
      ],
      "align": "center",
      "caption": "Turning app navigation off"
    }
  ]
}
[/block]

[block:image]
{
  "images": [
    {
      "image": [
        "https://files.readme.io/36ccbd9-Screenshot_2023-06-28_at_11.17.55.png",
        null,
        "The 'Clients' table view can now be embedded as an inline widget"
      ],
      "align": "center",
      "caption": "The 'Clients' table view can now be embedded as an inline widget"
    }
  ]
}
[/block]

***

<br />

## Embed component

The feature of embedding a Budibase app as an iframe should not be confused with the Embed [Component](doc:components) within the **Design** section. 

A common use-case for the embed component is to add [Global styling](https://docs.budibase.com/docs/custom-css#global-styling) to your app screens. You could however also use it to embed iframes, including another Budibase app!

[block:image]
{
  "images": [
    {
      "image": [
        "https://files.readme.io/bc1eada-adding_embed.png",
        null,
        "Adding an Embed component"
      ],
      "align": "center",
      "caption": "Adding an Embed component"
    }
  ]
}
[/block]

[block:image]
{
  "images": [
    {
      "image": [
        "https://files.readme.io/0f307d9-Screenshot_2023-06-28_at_11.25.51.png",
        null,
        "Adding an iframe to the Embed component - in this case another Budibase app!"
      ],
      "align": "center",
      "caption": "Adding an iframe to the Embed component - in this case another Budibase app!"
    }
  ]
}
[/block]