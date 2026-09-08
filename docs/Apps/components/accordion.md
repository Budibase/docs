---
title: Accordion
excerpt: ''
deprecated: false
hidden: false
metadata:
  title: ''
  description: kba_5h8zm
  robots: index
next:
  description: ''
---
Use the Accordion component to hide and reveal grouped content.

## Features

* Collapsible sections
* Customisable header
* Nested child content

## Settings

| Setting | Description |
| :-- | :-- |
| Label | Heading text shown on the accordion |
| Bold | Render the label in bold |
| Default State | Choose whether the accordion starts open or closed |

## Use it for

* FAQs
* Settings panels
* Grouped form sections
* Supporting content that should stay compact

## Structure

The Accordion acts as the parent container for any content you want to show or hide.

1. Add `Accordion` to your screen
2. Nest content components inside the body
3. Add more nested components if the content needs further structure

When the Accordion is open, child components are visible. When it is closed, they are hidden.
