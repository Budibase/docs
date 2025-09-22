---
title: Form block
excerpt: The fastest way to build forms
deprecated: false
hidden: false
metadata:
  title: ''
  description: ''
  robots: noindex
next:
  description: ''
---
Form blocks combine all the necessary components to build a comprehensive and flexible form.

There are three key types.

| Type   | Fields                                                                     | Save button                  |
| :----- | :------------------------------------------------------------------------- | :--------------------------- |
| Create | Provides blank fields to be filled out.                                    | Creates a new row.           |
| Update | Provides pre-populated fields based on the record that matches the row ID. | Updates the existing record. |
| View   | Provides pre-populated *read-only* fields based on the provided row ID.    | N/A                          |

Next you can select a table which will provide the <Glossary>Datasource</Glossary> and <Glossary>Schema</Glossary>. This supports both the Budibase internal table, as well as the core SQL databases.

If you want to use a [custom schema](https://docs.budibase.com/docs/forms#form-schema) then you will need to **Eject** the block.

### Row ID

When selecting *Update* or *View* type, you will need to provide a row ID so that the form block knows which row data to populate the fields with. 

If left blank, it will assume to look for the **\_id** field.

![](https://files.readme.io/0c072a0-Screenshot_2022-11-22_at_16.13.49.png)

### Fields

After you pick a table schema, you will be able to select fields to show from a multi-select dropdown.

![](https://files.readme.io/de0bd67-Screenshot_2022-11-04_at_15.39.37.png)

The order in which you select the fields will determine the order they appear within the form.

### Buttons

Depending on the selected type, you will have the option to show or hide the form action buttons. For example, *Update* type will have the following options:

![](https://files.readme.io/8839bb0-Screenshot_2022-11-22_at_16.04.27.png)

If you do not want to perform navigation after the button presses, simply clear the navigation field.

### Ejecting

A form block can be ejected to expose it's constituent parts. When a *Create* type form is ejected, it will appear similar to the following:

![](https://files.readme.io/ddfbe33-Screenshot_2022-11-22_at_16.08.08.png)

The *Update* type is similar, but will also include the [Data provider](https://docs.budibase.com/docs/data-provider) and [Repeater](https://docs.budibase.com/docs/repeater) necessary to provide the row detail. 

![](https://files.readme.io/c3a3562-Screenshot_2022-11-22_at_16.10.14.png)
