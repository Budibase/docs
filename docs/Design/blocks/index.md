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

To add a block to your application, head over to the *Design* section, then press `Add component`. The blocks can be found under the *Blocks* category.

<Image alt="List of available blocks" align="center" src="https://files.readme.io/ea39a70b86b611cc999282263b786e5179d1d9c188108b493db35c31f60910ea-Screenshot_2024-08-28_at_09.01.37.png">
  List of available blocks
</Image>

Once you choose one of the blocks you want to have, it will appear in the design window.

<br />

## Configuring Blocks

Configuration of blocks is done by clicking the block you just added to open the <Glossary>Settings Panel</Glossary>.

<Image alt="Table block" align="center" src="https://files.readme.io/dbaa97b37f30367f3c51744cd1e837210a82be382f129c9e00ae96e144f100a2-Screenshot_2024-08-28_at_09.04.33.png">
  Form block
</Image>

The most important selection you will have to make first is picking which data table you want to use. Click the *Data* dropdown to see the list of available <Glossary>Datasource</Glossary>s.

Other settings are composed of the different [Components](doc:components) that were encapsulated within the block. To learn about which components are used for each block, look at the respective section below.

### Empty text

Most blocks support a custom message when no data is found. This is most likely to occur when [filtering](doc:searchfilter-data) returns no results. For example:

<Image alt="Custom no rows found text" align="center" src="https://files.readme.io/3ff071c3136092b2012b452101c77972aee5658f61d2f10cff7c3ad4c35d7692-Screenshot_2024-08-28_at_09.06.56.png">
  Empty text setting
</Image>

<Image align="center" src="https://files.readme.io/7e5caecf417c638b63b3a63257ab0bd4f56ec4129dbefb39f7df5a6649ffb241-Screenshot_2024-08-28_at_09.08.20.png" />

You can also use <Glossary>Binding</Glossary>s in your message. 

## Types of blocks

<Table align={["left","left"]}>
  <thead>
    <tr>
      <th>
        Name
      </th>

      <th>
        Description
      </th>
    </tr>
  </thead>

  <tbody>
    <tr>
      <td>
        Cards block
      </td>

      <td>
        The *Cards Block* merges three different components into one. In order, it uses [Data Provider](doc:data-provider), [Repeater](doc:repeater) and [Card](doc:card) components.  

        All the configuration options relevant to all three components are available in the sidebar. Additionally, you can easily add search fields to allow users to filter your card blocks.
      </td>
    </tr>

    <tr>
      <td>
        Repeater block
      </td>

      <td>
        The *Repeater Block* is a quick way to have both the [Data Provider](doc:data-provider) and the [Repeater](doc:repeater) component into one.
      </td>
    </tr>

    <tr>
      <td>
        Form block
      </td>

      <td>
        The [Form Block](https://docs.budibase.com/docs/form-block) is a comprehensive component that makes building different types of forms much more convenient.
      </td>
    </tr>

    <tr>
      <td>
        Multi-Step Form Block
      </td>

      <td>
        The Multi-Step Form Block allows large forms to be broken up into pages.
      </td>
    </tr>

    <tr>
      <td>
        Chart block
      </td>

      <td>
        The *Chart Block* combines a [Data Provider](doc:data-provider) with a nested [Chart](doc:chart) that matches the type chosen from the *Chart Type* dropdown menu.
      </td>
    </tr>

    <tr>
      <td>
        Row explorer block
      </td>

      <td>
        Allows you to view data in an alternative way. It combines a searchable and scrollable list of cards on the left hand side, whilst displaying a detail form on the right for the selected card.
      </td>
    </tr>
  </tbody>
</Table>

<br />

## Ejecting blocks

As mentioned, blocks combine various components for convenience. Whilst there are many settings, sometimes blocks wont provide the full flexibility you are after. In this case, you can *eject* the block. 

An ejected block will split a single block component into its constituent components. To eject a block, you can press the `Eject block` button in the settings panel, or select the option from the component tree. 

<Image alt="Eject block button in the settings panel" align="center" src="https://files.readme.io/8b91651-eject_block.png">
  Eject block button in the settings panel
</Image>

<br />

<Image alt="Eject block from component tree" align="center" src="https://files.readme.io/1cf729c06b32fb2deab5b36d8c4a31f536ba542678c3cac7d2d9cd0ec26726b0-Screenshot_2024-08-28_at_09.38.39.png">
  Eject block from component tree
</Image>

<br />

<Image alt="Ejected content" align="center" src="https://files.readme.io/3cffadb5d3ad077e3f28c4b6b79bc0fe03d4f8a7d34c162c304e09c817b220ae-Screenshot_2024-08-28_at_09.39.37.png">
  Ejected content
</Image>
