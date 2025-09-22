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

![](https://files.readme.io/03b13e7-Screenshot_2023-06-29_at_16.17.22.png)

For example, when adding a [Details side panel](https://docs.budibase.com/docs/table-block#on-row-click) the *Row ID* will be set to the [App state](doc:app-state) of the [Clicked row](https://docs.budibase.com/docs/table#on-row-click).

### Fields

After you pick a table schema, you will be able to select fields by clicking on `Configure fields`, as well as position the *Field labels*.

![](https://files.readme.io/d436171-Screenshot_2023-06-29_at_16.18.46.png)

When configuring fields you can determine which fields should be shown in the form, the order of those fields, and the label.

<HTMLBlock>{`
<iframe src="https://player.vimeo.com/video/840889958?badge=0&amp;autopause=0&amp;player_id=0&amp;app_id=58479" width="636" height="662" frameborder="0" allow="autoplay; fullscreen; picture-in-picture" allowfullscreen title="Adding a form block"></iframe>
`}</HTMLBlock>

### Buttons

Depending on the selected type, you will have the option to show or hide the form action buttons. For example, *Update* type will have the following options:

![](https://files.readme.io/8839bb0-Screenshot_2022-11-22_at_16.04.27.png)

If you do not want to perform navigation after the button presses, simply clear the navigation field.

### Ejecting

A form block can be ejected to expose it's constituent parts. When a *Create* type form is ejected, it will appear similar to the following:

![](https://files.readme.io/ddfbe33-Screenshot_2022-11-22_at_16.08.08.png)

The *Update* type is similar, but will also include the [Data provider](https://docs.budibase.com/docs/data-provider) and [Repeater](https://docs.budibase.com/docs/repeater) necessary to provide the row detail. 

![](https://files.readme.io/c3a3562-Screenshot_2022-11-22_at_16.10.14.png)

### Notifications

You can disable notifications on form edition by selecting the 'Disable notifications' option in the block settings.

![](https://files.readme.io/c3a3562-Screenshot_2022-11-22_at_16.10.14.png)
