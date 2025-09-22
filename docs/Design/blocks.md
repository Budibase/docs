---
title: Blocks
excerpt: Working with pre-built components in the Design Section
deprecated: false
hidden: false
metadata:
  title: ''
  description: ''
  robots: index
next:
  description: Learn more about the individual components mentioned in this guide
  pages:
    - type: basic
      slug: card
      title: Card
    - type: basic
      slug: repeater
      title: Repeater
    - type: basic
      slug: table
      title: Table
---
Blocks in the Budibase are pre-built components comprised of multiple [Components](doc:components)  themselves. They perform a common functionality and take away the complexity of having to repeat yourself.

At the time of writing, there are seven types of blocks available.

<br />

## Adding a Block

To add a block to your application, head over to the _Design_ section, then press `Add component`. The blocks can be found under the _Blocks_ category.

[block:image]
{
  "images": [
    {
      "image": [
        "https://files.readme.io/ea39a70b86b611cc999282263b786e5179d1d9c188108b493db35c31f60910ea-Screenshot_2024-08-28_at_09.01.37.png",
        null,
        "List of available blocks"
      ],
      "align": "center",
      "caption": "List of available blocks"
    }
  ]
}
[/block]


Once you choose one of the blocks you want to have, it will appear in the design window.

<br />

## Configuring Blocks

Configuration of blocks is done by clicking the block you just added to open the <<glossary:Settings Panel>>.

[block:image]
{
  "images": [
    {
      "image": [
        "https://files.readme.io/dbaa97b37f30367f3c51744cd1e837210a82be382f129c9e00ae96e144f100a2-Screenshot_2024-08-28_at_09.04.33.png",
        null,
        "Table block"
      ],
      "align": "center",
      "caption": "Form block"
    }
  ]
}
[/block]


The most important selection you will have to make first is picking which data table you want to use. Click the _Data_ dropdown to see the list of available <<glossary:Datasource>>s.

Other settings are composed of the different [Components](doc:components) that were encapsulated within the block. To learn about which components are used for each block, look at the respective section below.

### Empty text

Most blocks support a custom message when no data is found. This is most likely to occur when [filtering](doc:searchfilter-data) returns no results. For example:

[block:image]
{
  "images": [
    {
      "image": [
        "https://files.readme.io/3ff071c3136092b2012b452101c77972aee5658f61d2f10cff7c3ad4c35d7692-Screenshot_2024-08-28_at_09.06.56.png",
        "",
        "Custom no rows found text"
      ],
      "align": "center",
      "caption": "Empty text setting"
    }
  ]
}
[/block]


[block:image]
{
  "images": [
    {
      "image": [
        "https://files.readme.io/7e5caecf417c638b63b3a63257ab0bd4f56ec4129dbefb39f7df5a6649ffb241-Screenshot_2024-08-28_at_09.08.20.png",
        "",
        ""
      ],
      "align": "center"
    }
  ]
}
[/block]


You can also use <<glossary:Binding>>s in your message. 

## Types of blocks

[block:parameters]
{
  "data": {
    "h-0": "Name",
    "h-1": "Description",
    "0-0": "Cards block",
    "0-1": "The _Cards Block_ merges three different components into one. In order, it uses [Data Provider](doc:data-provider), [Repeater](doc:repeater) and [Card](doc:card) components.  \n  \nAll the configuration options relevant to all three components are available in the sidebar. Additionally, you can easily add search fields to allow users to filter your card blocks.",
    "1-0": "Repeater block",
    "1-1": "The _Repeater Block_ is a quick way to have both the [Data Provider](doc:data-provider) and the [Repeater](doc:repeater) component into one.",
    "2-0": "Form block",
    "2-1": "The [Form Block](https://docs.budibase.com/docs/form-block) is a comprehensive component that makes building different types of forms much more convenient.",
    "3-0": "Multi-Step Form Block",
    "3-1": "The Multi-Step Form Block allows large forms to be broken up into pages.",
    "4-0": "Chart block",
    "4-1": "The _Chart Block_ combines a [Data Provider](doc:data-provider) with a nested [Chart](doc:chart) that matches the type chosen from the _Chart Type_ dropdown menu.",
    "5-0": "Row explorer block",
    "5-1": "Allows you to view data in an alternative way. It combines a searchable and scrollable list of cards on the left hand side, whilst displaying a detail form on the right for the selected card."
  },
  "cols": 2,
  "rows": 6,
  "align": [
    "left",
    "left"
  ]
}
[/block]


<br />

## Ejecting blocks

As mentioned, blocks combine various components for convenience. Whilst there are many settings, sometimes blocks wont provide the full flexibility you are after. In this case, you can _eject_ the block. 

An ejected block will split a single block component into its constituent components. To eject a block, you can press the `Eject block` button in the settings panel, or select the option from the component tree. 

[block:image]
{
  "images": [
    {
      "image": [
        "https://files.readme.io/8b91651-eject_block.png",
        null,
        "Eject block button in the settings panel"
      ],
      "align": "center",
      "caption": "Eject block button in the settings panel"
    }
  ]
}
[/block]


<br />

[block:image]
{
  "images": [
    {
      "image": [
        "https://files.readme.io/1cf729c06b32fb2deab5b36d8c4a31f536ba542678c3cac7d2d9cd0ec26726b0-Screenshot_2024-08-28_at_09.38.39.png",
        null,
        "Eject block from component tree"
      ],
      "align": "center",
      "caption": "Eject block from component tree"
    }
  ]
}
[/block]


<br />

[block:image]
{
  "images": [
    {
      "image": [
        "https://files.readme.io/3cffadb5d3ad077e3f28c4b6b79bc0fe03d4f8a7d34c162c304e09c817b220ae-Screenshot_2024-08-28_at_09.39.37.png",
        null,
        "Ejected content"
      ],
      "align": "center",
      "caption": "Ejected content"
    }
  ]
}
[/block]