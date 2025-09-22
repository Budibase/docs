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

Blocks especially shine if, on a single page, you only add one way of displaying data from a [Data Provider](doc:data-provider). 

At the time of writing, there are seven types of blocks available.

<br />

## Adding a Block

To add a block to your application, head over to the _Design_ section, then press `Add component`. The blocks can be found under the _Blocks_ category.

[block:image]
{
  "images": [
    {
      "image": [
        "https://files.readme.io/75e73c0-Screenshot_2023-06-29_at_16.04.55.png",
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
        "https://files.readme.io/d766d92-Screenshot_2023-06-29_at_16.06.48.png",
        null,
        "Table block"
      ],
      "align": "center",
      "caption": "Table block"
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
        "https://files.readme.io/dbac049-Screenshot_2023-11-23_at_10.46.53.png",
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
        "https://files.readme.io/60af7bc-Screenshot_2023-11-23_at_10.49.03.png",
        "",
        ""
      ],
      "align": "center"
    }
  ]
}
[/block]


You can also use <<glossary:Binding>>s in your message. First [Eject](https://docs.budibase.com/docs/blocks#ejecting-blocks) the block so that we have access to the search field binding.

Next reference the form field [binding](doc:introduction-to-bindings) in your [Table](doc:table) _Empty text_ setting, e.g. `'{{ Form.Fields.First Name }}' not found`

[block:image]
{
  "images": [
    {
      "image": [
        "https://files.readme.io/d7d3ec1-Screenshot_2023-11-23_at_10.59.00.png",
        "",
        ""
      ],
      "align": "center"
    }
  ]
}
[/block]


[block:image]
{
  "images": [
    {
      "image": [
        "https://files.readme.io/68587f0-Screenshot_2023-11-23_at_11.00.21.png",
        "",
        ""
      ],
      "align": "center"
    }
  ]
}
[/block]


<br />

## Types of blocks

[block:parameters]
{
  "data": {
    "h-0": "Name",
    "h-1": "Description",
    "0-0": "Grid block",
    "0-1": "The [Grid block](doc:grid-block) provides your users with a convenient spreadsheet like data interface.",
    "1-0": "Table block",
    "1-1": "The [Table block](doc:table-block) is an alternative way to display table data, with further options for row actions.",
    "2-0": "Cards block",
    "2-1": "The _Cards Block_ merges three different components into one. In order, it uses [Data Provider](doc:data-provider), [Repeater](doc:repeater) and [Card](doc:card) components.  \n  \nAll the configuration options relevant to all three components are available in the sidebar. Additionally, you can easily add search fields to allow users to filter your card blocks.",
    "3-0": "Repeater block",
    "3-1": "The _Repeater Block_ is a quick way to have both the [Data Provider](doc:data-provider) and the [Repeater](doc:repeater) component into one.",
    "4-0": "Form block",
    "4-1": "The [Form Block](https://docs.budibase.com/docs/form-block) is a comprehensive component that makes building different types of forms much more convenient.",
    "5-0": "Chart block",
    "5-1": "The _Chart Block_ combines a [Data Provider](doc:data-provider) with a nested [Chart](doc:chart) that matches the type chosen from the _Chart Type_ dropdown menu.",
    "6-0": "Row explorer block",
    "6-1": "Allows you to view data in an alternative way. It combines a searchable and scrollable list of cards on the left hand side, whilst displaying a detail form on the right for the selected card."
  },
  "cols": 2,
  "rows": 7,
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
        "https://files.readme.io/4c7acb0-Screenshot_2022-11-11_at_09.46.01.png",
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
        "https://files.readme.io/22d8c89-Screenshot_2022-11-11_at_09.46.40.png",
        null,
        "Ejected content"
      ],
      "align": "center",
      "caption": "Ejected content"
    }
  ]
}
[/block]