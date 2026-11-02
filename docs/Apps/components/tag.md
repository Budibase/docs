---
title: Tag
excerpt: ''
deprecated: false
hidden: false
metadata:
  title: ''
  description: kba_5habm
  robots: index
next:
  description: ''
---
Use the `Tag` component for short labels such as statuses, categories, and related values.

## Customise the tag

| Setting | Description |
| :-- | :-- |
| Size | Set the text size |
| Color | Set the tag color |
| Allow delete | Show an `X` delete control |
| On click delete | Configure what happens when the delete control is clicked |

## Common use

Tags work best when the value is short and repeatable.

Common examples include:

* Record statuses
* Category labels
* Related items in a repeater
* Filter chips in compact views

## Tutorial pattern

Use a repeater when the tag values come from related data:

1. Build the parent list or detail view
2. Add a repeater for the related items
3. Add the Tag component inside the repeater
4. Bind the text to the related field
5. Use [Conditional UI](doc:conditions) to vary the color when needed

If you need delete support, enable `Allow delete` and wire the delete control to an action.
