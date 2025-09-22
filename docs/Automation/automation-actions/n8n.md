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
        "https://files.readme.io/05f78ca-webhook_n8n.png",
        "",
        ""
      ],
      "align": "center"
    }
  ]
}
[/block]


Click on the webhook URL to copy it to clipboard. You can start with the _Test URL_ to make sure things are working as expected before using the _Production URL_.

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
        "https://files.readme.io/3318df5-Screenshot_2024-02-21_at_10.11.38.png",
        "",
        "Triggering an n8n workflow from a Budibase automation"
      ],
      "align": "center",
      "caption": "Triggering an n8n workflow from a Budibase automation"
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
        "https://files.readme.io/5b80256-Screenshot_2024-02-21_at_10.29.53.png",
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
        "https://files.readme.io/73da9e1-Screenshot_2024-02-21_at_10.31.44.png",
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