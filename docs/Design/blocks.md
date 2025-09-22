---
title: Blocks
excerpt: Working with pre-built components in the Design Section
deprecated: false
hidden: false
metadata:
  title: ''
  description: ''
  robots: noindex
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

As of this moment, there are 3 types of blocks available to be used immediately.

<br />

## Adding a Block

To add a block to your application, head over to the design section, then press the `Blocks` tab to pick a block of choice.

![](https://files.readme.io/029961c-add-block.png "add-block.png")

Once you choose one of the blocks you want to have, it will appear in the design straight away. The only thing you have to do now is position the block in the place on your page where you want it to be.

<br />

## Configuring Blocks

Configuration of blocks is done by clicking the block you just added. Immediately a settings panel will appear on the right.

![](https://files.readme.io/b3dcd71-table-block-settings.png "table-block-settings.png")

In this panel, all configuration options are displayed in a structured manner. The most important selection you will have to make first is picking which data table you want to be displayed. This will automatically give you all options of all the available <<glossary:Data Sources>>.

All other options available to you in the settings panel are comprised of the different [Components](doc:components) that were merged within the block you just selected. To learn about which components are used for each block, look at the respective section below.

<br />

## Types of blocks

### Table block

The [Table block](doc:table-block) is the easiest way to quickly display and action table data. 

### Cards block

The _Cards Block_ is a useful block that merges three different components into one. In order, it uses [Data Provider](doc:data-provider), [Repeater](doc:repeater) and [Card](doc:card) components. 

All the configuration options relevant to all three components are available in the sidebar. 

### Repeater block

The _Repeater Block_ is a quick way to have both the [Data Provider](doc:data-provider) and the [Repeater](doc:repeater) component into one. This way you can still configure _what_ exactly is repeated within the repeater, but don't have to worry about having both the repeater component and the datasource component.

### Form block

The [Form Block](https://docs.budibase.com/docs/form-block) is a comprehensive component that makes building different types of forms much more convenient.

### Chart block

The _Chart Block_ combines a [Data Provider](doc:data-provider) with a nested [Chart](doc:chart) that matches the type chosen from the _Chart Type_ dropdown menu.

### Row explorer block

Allows you to view data in an alternative way. It combines a searchable and scrollable list of cards on the left hand side, whilst displaying a detail form on the right for the selected card. 

<br />

## Ejecting blocks

As mentioned, blocks combine various components for convenience. Whilst there are many settings, sometimes blocks wont provide the full flexibility you are after. In this case, you can _eject_ the block. 

An ejected block will split a single block component into its constituent components. To eject a block, you can press the `Eject block` button in the settings panel, or select the option from the component tree. 

[block:image]
{
  "images": [
    {
      "image": [
        "https://files.readme.io/4754671-Screenshot_2022-11-11_at_09.14.00.png",
        null,
        "Eject block button in the settings panel"
      ],
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
      "caption": "Ejected content"
    }
  ]
}
[/block]