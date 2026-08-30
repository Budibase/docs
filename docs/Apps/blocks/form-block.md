---
title: Form block
excerpt: The fastest way to build forms
deprecated: false
hidden: false
metadata:
  title: ''
  description: kba_5h8aq
  robots: index
next:
  description: ''
---
Use the Form block to create a form quickly from a table, view, or relationship schema.

## Types

| Type | Behavior |
| :-- | :-- |
| Create | Starts with blank fields and creates a new row |
| Update | Loads row data and updates an existing row |
| View | Loads row data as read-only |

## Schema and row ID

Choose a schema to generate the fields automatically.

For `Update` and `View`, set the Row ID so the form knows which row to load.

If you need a custom schema, eject the block and build the form manually with a Form component.

## Fields

Use the settings panel to:

* Show or hide fields
* Reorder fields
* Change labels
* Set fields to read-only or disabled

## Buttons

The block includes preset save buttons for the selected form type. Use the settings panel to edit the button actions or move the buttons to the top of the form.

## Ejecting

Eject the block when you need full control over the underlying form components and layout.
