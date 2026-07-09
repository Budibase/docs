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
The Accordion component is a collapsible container allowing users to toggle its body content's visibility. It is particularly useful for organising content in a space-efficient manner, such as FAQs, settings panels, or grouped information.

## Features

* **Collapsible Sections**: Users can expand or collapse content panels to show or hide information.
* **Customisable Header**: The accordion heading can be customised with a label and styling options.
* **Dynamic Content**: Supports nested components or any child content within the expandable body.

## Settings

| Setting       | Description                                                                                                                                                                     |
| :------------ | :------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ |
| Label         | A text string that serves as the heading for the accordion section. This label is always visible, whether the accordion is expanded or collapsed.                               |
| Bold          | A boolean option that, when enabled, renders the label text in bold to emphasize the section heading.                                                                           |
| Default State | Determines whether the accordion should be open or closed when the component is first rendered. This allows for tailored user experiences, especially in forms or detail views. |

## Component support

The Accordion component can render nested components within its body:

* When the accordion is open, all child components are visible.
* When the accordion is closed, the child content is hidden from view.

This makes the Accordion ideal for embedding forms, lists, media, or any reusable component inside a collapsible container.

## FAQ example

```Text CSV
Question,Answer
"What is your return policy?","We accept returns within 30 days of purchase. Items must be in original condition and accompanied by a receipt."
"How can I track my order?","After placing an order, you'll receive a tracking number via email once your package ships."
"Do you offer international shipping?","Yes, we ship to most countries worldwide. Shipping costs and delivery times vary depending on the destination."
"Can I change or cancel my order?","Orders can be changed or canceled within 2 hours of placing them. Please contact our support team immediately."
"Are your products eco-friendly?","We prioritize sustainability and use eco-friendly materials whenever possible. Check product pages for more details."
```

### Component tree

In the component tree, the Accordion acts as a parent container for any content you want to show or hide.

Typical structure:

1. Add `Accordion` to your screen
2. Nest content components inside the Accordion body (for example `Text`, `Form`, `Repeater`, or `Container`)
3. Optionally nest additional components inside those children for more complex layouts

Example tree:

- `Screen`
- `Accordion (FAQ: Shipping)`
- `Text` (question/intro)
- `Container`
- `Text` (answer)

All nested child components remain in the tree at all times, but their visibility in the app is controlled by whether the Accordion is expanded or collapsed.

