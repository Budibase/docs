---
title: Card
excerpt: >-
  This is one of the Budibase UI components within the design area of the
  platform.
deprecated: false
hidden: false
metadata:
  title: ''
  description: ''
  robots: index
next:
  description: >-
    Quickly convert your data to a list of cards? Check the Blocks page to learn
    more about the Cards Block
  pages:
    - type: basic
      slug: blocks
      title: Blocks
---
Use the Card component to display records in a compact layout.

> 📘 Cards Block
>
> Use the Cards [Block](doc:blocks) if you want to render a data source as a card list.

## Layout

Cards support two layout modes:

* **Vertical** places the image above the text
* **Horizontal** places the image to the left of the text

Use `Horizontal` in the <Glossary>Settings Panel</Glossary> to switch layout modes.

## Card elements

| Element | Description |
| :-- | :-- |
| Title | Primary label |
| Subtitle | Secondary label below the title |
| Description | Supporting text below the subtitle |
| Image | Optional image shown above or beside the text |

## Button

Cards can also show an optional button. Set the button label with text or a binding, then configure the click action from the settings panel.

> 👍 Define Actions
>
> See [Actions](doc:actions) for how to configure the button click.

## Common use

Cards work well for:

* Search results
* Related records
* Profile summaries
* Dashboard summaries

## Tutorial pattern

To build a card list from data:

1. Add a data provider
2. Add a repeater inside the data provider
3. Add a card inside the repeater
4. Bind the title, description, image, and button fields to the row data
