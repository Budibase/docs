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

<Image align="center" src="https://files.readme.io/2f4b476-Screenshot_2023-10-13_at_17.29.45.png" />

In the event that no match could be found for your Row Id, can specify the **Empty text** property. This text value will be displayed to the user instead of a Form block

### Fields

After you pick a table schema, see that the 'Fields' section will now be populated with a complete list of all fields in your current schema.

<Image align="center" src="https://files.readme.io/c0d1d62-Screenshot_2023-10-13_at_17.14.52.png" />

The order in which you select the fields will determine the order they appear within the form. To reorder your fields, mouse over and drag the entry you wish to move and drop it in it's new home in the list. This reordering will be instantly reflected in the builder

#### Field Configuration

Clicking on the **Cog** icon on the list will bring up the configuration menu relevant to the selected field type. In the pop-up modal, you can make fine-grain changes to the configuration for each field.

<Image align="center" src="https://files.readme.io/e68c15c-Screenshot_2023-10-13_at_17.18.27.png" />

#### Visibility

The toggle on the right-hand side of each field illustrates which fields are currently visible in the Form block. Simply toggle it into the off position if it is not required for your current form. You can always reset the toggle again if you need it later.

<Image align="center" src="https://files.readme.io/422b421-Screenshot_2023-10-13_at_17.25.38.png" />

### Buttons

Depending on the selected type, you will have the option to show or hide the form action buttons. For example, *Update* type will have the following options:

<Image align="center" src="https://files.readme.io/415aac9-Screenshot_2023-10-13_at_17.27.47.png" />

If would like a particular button to disappear, simply delete the label and it will be removed from the form.

If you do not want to perform navigation after the button presses, simply clear the navigation field.

### Ejecting

A form block can be ejected to expose it's constituent parts. When a *Create* type form is ejected, it will appear similar to the following:

![](https://files.readme.io/ddfbe33-Screenshot_2022-11-22_at_16.08.08.png)

The *Update* type is similar, but will also include the [Data provider](https://docs.budibase.com/docs/data-provider) and [Repeater](https://docs.budibase.com/docs/repeater) necessary to provide the row detail. 

![](https://files.readme.io/c3a3562-Screenshot_2022-11-22_at_16.10.14.png)
