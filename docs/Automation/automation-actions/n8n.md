---
title: n8n
excerpt: Trigger an n8n workflow from Budibase
deprecated: false
hidden: false
metadata:
  title: ''
  description: ''
  robots: index
next:
  description: ''
---
## Setup

Within **n8n** create a [Webhook trigger node](https://docs.n8n.io/integrations/builtin/core-nodes/n8n-nodes-base.webhook/). Optionally configure the _Authentication_, and select the desired _HTTP Method_.

[block:image]
{
  "images": [
    {
      "image": [
        "https://files.readme.io/868fc995a6bd7c1b954a3679174e65cdfce68531f159d492e6f52940388da0a3-Screenshot_2025-04-10_at_12.57.36.png",
        "",
        ""
      ],
      "align": "center"
    }
  ]
}
[/block]


Click on the webhook URL to copy it to clipboard. You can start with the _Test URL_ to make sure things are working as expected before using the _Production URL_.

[block:image]
{
  "images": [
    {
      "image": [
        "https://files.readme.io/fc1cf123d65ead7cc9347bc5359508e105120cc942c7e031fc3ac557662f5914-Screenshot_2025-04-10_at_13.21.34.png",
        "",
        ""
      ],
      "align": "center"
    }
  ]
}
[/block]


Click listen for test event just before you run the automation in Budibase.

Connect additional nodes to your **n8n** webhook trigger as desired.

## Budibase DB node

It is also possible to connect to the <<glossary:Budibase DB>> within your **n8n** workflow using the [budibase-db-n8n-node](https://github.com/melohagan/budibase-db-n8n-node).

Read more on installation: [Install community nodes in the n8n app](https://docs.n8n.io/integrations/community-nodes/installation/gui-install/).

[block:image]
{
  "images": [
    {
      "image": [
        "https://files.readme.io/bd12cde-Screenshot_2024-02-21_at_10.01.16.png",
        "",
        "Install the Budibase DB node"
      ],
      "align": "center",
      "border": true,
      "caption": "Install the Budibase DB node"
    }
  ]
}
[/block]


[block:image]
{
  "images": [
    {
      "image": [
        "https://files.readme.io/0f65f09-Screenshot_2024-02-21_at_10.03.30.png",
        "",
        "Budibase DB node will then be available"
      ],
      "align": "center",
      "border": true,
      "caption": "Budibase DB node will then be available"
    }
  ]
}
[/block]


## Triggering an n8n workflow from Budibase

First, we will create our automation in Budibase. For this example, we will use [app action](doc:app-action) automation.

With the webhook setup in **n8n**, and the URL copied, you can now add the `n8n` automation action step in your automation.

[block:image]
{
  "images": [
    {
      "image": [
        "https://files.readme.io/f567feb-n8n_step.png",
        "",
        "Adding the n8n action step"
      ],
      "align": "center",
      "caption": "Adding the n8n action step"
    }
  ]
}
[/block]


Next enter the _Webhook URL_ that you copied, and make sure the _Method_ matches correctly.

[block:image]
{
  "images": [
    {
      "image": [
        "https://files.readme.io/950388cc909c4c6d1f3a02306c77f027ebd9ace3a956ce14ac82c510e0d4d651-Screenshot_2025-04-11_at_08.21.11.png",
        "",
        "Triggering an n8n workflow from a Budibase automation"
      ],
      "align": "center",
      "caption": "Triggering an n8n workflow from a Budibase automation"
    }
  ]
}
[/block]


After running a test of the automation in Budibase. You should see the output on N8N.

[block:image]
{
  "images": [
    {
      "image": [
        "https://files.readme.io/910bae5572e20fc099e7da3f212eae65dc1bd07b1a83c8f4b21b19a5c1874cab-Screenshot_2025-04-11_at_13.31.32.png",
        "",
        ""
      ],
      "align": "center"
    }
  ]
}
[/block]


### Authorization

The authorization field is optional, and represents the [Authorization HTTP header](https://developer.mozilla.org/en-US/docs/Web/HTTP/Headers/Authorization). 

Consider an **n8n** webhook with _Basic_ authentication set as _user_: 'test', _password_: 'admin'.

[block:image]
{
  "images": [
    {
      "image": [
        "https://files.readme.io/7a6bb16-Screenshot_2024-02-21_at_10.26.12.png",
        "",
        ""
      ],
      "align": "center"
    }
  ]
}
[/block]


The automation action step will return with a `401` error if the _Authorization_ field is not set:

[block:image]
{
  "images": [
    {
      "image": [
        "https://files.readme.io/0f41077b50e7183abe3b1c4f562990530ece75fe8fae2f77b4d7635e3b0e6936-Screenshot_2025-04-11_at_08.28.41.png",
        "",
        "Authorization needs to be set"
      ],
      "align": "center",
      "caption": "Authorization needs to be set"
    }
  ]
}
[/block]


In the case of _Basic_ auth you need to provide the header in the following format:`Basic BASE64_ENCODED(username:password)`, which would look result in something like this:

[block:image]
{
  "images": [
    {
      "image": [
        "https://files.readme.io/1562c3c7ca132a4b9b8a1c13189310f9b194657fa51f4d2597de18fac69c66ae-Screenshot_2025-04-11_at_08.36.24.png",
        "",
        ""
      ],
      "align": "center"
    }
  ]
}
[/block]


> 🚧 Keep credentials safe
> 
> Ideally you should not save credentials as plain text in your Budibase apps. Use [Environment variables 🔒](doc:environment-variables) to keep these credentials safe!

## Passing Budibase array to n8n

> 🚧 n8n doesn't accept query step bindings
> 
> - Currently n8n payload won't accept Budibase's query step bindings. Instead you have to first return it via a JavaScript step and then use that output in the n8n step.

This is going to be a very simple example.

1. Add a query step before you n8n automation step.

   [block:image]{"images":[{"image":["https://files.readme.io/57bac22f04b57dc90110484e0004a5af9e0b26847fef63898fa643b54b865aa4-Screenshot_2025-04-11_at_08.45.17.png","",""],"align":"center"}]}[/block]
2. For this example, we are going to limit the objects queried to 2
3. Add a JavaScript step and return the query rows. This will format the array in a way that will be accepted by n8n.

   [block:image]{"images":[{"image":["https://files.readme.io/e28042cf7d50d33e9d078d2c9f598e4a22a403f3f2d54b4f3d8eff0e922fdbcc-Screenshot_2025-04-11_at_13.22.28.png","",""],"align":"center"}]}[/block]
4. Pass the query step output inside the n8n payload
5. Test and send

   [block:image]{"images":[{"image":["https://files.readme.io/c9b09f93c4bb6a093e439c09ee384bab9a60fbd7b3bbfcab572fc4590c349378-Screenshot_2025-04-11_at_13.23.08.png","",""],"align":"center"}]}[/block]
6. Output in n8n

   [block:image]{"images":[{"image":["https://files.readme.io/ee20e15bf329fa13ab823253bcc4c93b8f83bb74051115d1b19f8d6ca0736ef0-Screenshot_2025-04-11_at_13.25.14.png","",""],"align":"center"}]}[/block]