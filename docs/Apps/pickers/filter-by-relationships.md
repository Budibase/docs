---
title: Relationship picker
excerpt: ''
deprecated: false
hidden: false
metadata:
  title: ''
  description: ''
  robots: index
next:
  description: ''
---
Use the Relationship Picker for relationship fields.

It automatically loads options from the related table.

## How it works

The picker uses:

* The related table's display column as the label
* The related row `_id` as the stored value

## Default values

To set default values, return an array of related row IDs.

This usually means fetching the related rows with a Data provider and mapping the returned rows to `_id`.

## Filter the options

Use filtering when the related table has many rows or when the available options should depend on another field.

Relationship pickers support a hard limit of 100 options.

## On change

Use the Fetch Row action if you need the selected related row data in another action.

## Common use

Relationship pickers are commonly used for:

* One-to-many and many-to-many fields
* Cascading dropdowns
* Related record filters

## Related pages

* [Chaining actions](doc:chaining-actions)
* [Data provider](doc:data-provider)
