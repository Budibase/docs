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

At the time of writing, there are seven types of blocks available.

<br />

## Adding a Block

To add a block to your application, head over to the *Design* section, then press `Add component`. The blocks can be found under the *Blocks* category.

![](https://files.readme.io/75e73c0-Screenshot_2023-06-29_at_16.04.55.png)

Once you choose one of the blocks you want to have, it will appear in the design window.

<br />

## Configuring Blocks

Configuration of blocks is done by clicking the block you just added to open the <Glossary>Settings Panel</Glossary>.

![](https://files.readme.io/d766d92-Screenshot_2023-06-29_at_16.06.48.png)

In this panel, all configuration options are displayed in a structured manner. The most important selection you will have to make first is picking which data table you want to be displayed. This will automatically give you all options of all the available <Glossary>Data Sources</Glossary>.

All other options available to you in the <Glossary>Settings Panel</Glossary> are comprised of the different [Components](doc:components) that were merged within the block you just selected. To learn about which components are used for each block, look at the respective section below.

<br />

## Types of blocks

### Grid block

The [Grid block](doc:grid-block) provides your users with a convenient spreadsheet like data interface.

### Table block

The [Table block](doc:table-block) is an alternative way to display table data, with further options for row actions. 

### Cards block

The *Cards Block* is a useful block that merges three different components into one. In order, it uses [Data Provider](doc:data-provider), [Repeater](doc:repeater) and [Card](doc:card) components. 

All the configuration options relevant to all three components are available in the sidebar. 

### Repeater block

The *Repeater Block* is a quick way to have both the [Data Provider](doc:data-provider) and the [Repeater](doc:repeater) component into one. This way you can still configure *what* exactly is repeated within the repeater, but don't have to worry about having both the repeater component and the datasource component.

### Form block

The [Form Block](https://docs.budibase.com/docs/form-block) is a comprehensive component that makes building different types of forms much more convenient.

### Chart block

The *Chart Block* combines a [Data Provider](doc:data-provider) with a nested [Chart](doc:chart) that matches the type chosen from the *Chart Type* dropdown menu.

### Row explorer block

Allows you to view data in an alternative way. It combines a searchable and scrollable list of cards on the left hand side, whilst displaying a detail form on the right for the selected card. 

<br />

## Ejecting blocks

As mentioned, blocks combine various components for convenience. Whilst there are many settings, sometimes blocks wont provide the full flexibility you are after. In this case, you can *eject* the block. 

An ejected block will split a single block component into its constituent components. To eject a block, you can press the `Eject block` button in the settings panel, or select the option from the component tree. 

<Image alt="Eject block button in the settings panel" align="center" src="https://files.readme.io/8b91651-eject_block.png">
  Eject block button in the settings panel
</Image>

<br />

<Image alt="Eject block from component tree" align="center" src="https://files.readme.io/4c7acb0-Screenshot_2022-11-11_at_09.46.01.png">
  Eject block from component tree
</Image>

<br />

<Image alt="Ejected content" align="center" src="https://files.readme.io/22d8c89-Screenshot_2022-11-11_at_09.46.40.png">
  Ejected content
</Image>
