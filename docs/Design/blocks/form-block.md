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
| View   | Provides pre-populated _read-only_ fields based on the provided row ID.    | N/A                          |

Next you can select a table which will provide the <<glossary:Datasource>> and <<glossary:Schema>>. This supports both the Budibase internal table, as well as the core SQL databases.

If you want to use a [custom schema](https://docs.budibase.com/docs/forms#form-schema) then you will need to **Eject** the block.

### Row ID

When selecting _Update_ or _View_ type, you will need to provide a row ID so that the form block knows which row data to populate the fields with. 

![](https://files.readme.io/03b13e7-Screenshot_2023-06-29_at_16.17.22.png)

For example, when adding a [Details side panel](https://docs.budibase.com/docs/table-block#on-row-click) the _Row ID_ will be set to the [App state](doc:app-state) of the [Clicked row](https://docs.budibase.com/docs/table#on-row-click).

### Fields

After you pick a table schema, you will be able to configure your fields using the right side panel. 

[block:image]
{
  "images": [
    {
      "image": [
        "https://files.readme.io/87f9496-Screenshot_2023-09-08_at_09.55.43.png",
        null,
        null
      ],
      "align": "center",
      "sizing": "250px",
      "caption": "Form field configuration"
    }
  ]
}
[/block]

Click on the cog to customize field placement, actions, validation, and much more.

[block:image]
{
  "images": [
    {
      "image": [
        "https://files.readme.io/68c3510-Screenshot_2023-09-08_at_09.56.51.png",
        "",
        ""
      ],
      "align": "center",
      "sizing": "350px",
      "caption": "Configuring form fields"
    }
  ]
}
[/block]

When configuring fields you can determine which fields should be shown in the form, the order of those fields, and the label.

[block:html]
{
  "html": "<iframe src=\"https://player.vimeo.com/video/840889958?badge=0&amp;autopause=0&amp;player_id=0&amp;app_id=58479\" width=\"636\" height=\"662\" frameborder=\"0\" allow=\"autoplay; fullscreen; picture-in-picture\" allowfullscreen title=\"Adding a form block\"></iframe>"
}
[/block]

### Buttons

Depending on the selected type, you will have the option to show or hide the form action buttons. For example, _Update_ type will have the following options:

[block:image]
{
  "images": [
    {
      "image": [
        "https://files.readme.io/bae3e67-Screenshot_2023-09-08_at_10.01.20.png",
        null,
        null
      ],
      "align": "center"
    }
  ]
}
[/block]

To hide the save or delete button, simply remove the label value from the field input.

If you do not want to perform navigation after the button presses, you can clear the navigation field.

### Ejecting

A form block can be ejected to expose it's constituent parts. When a _Create_ type form is ejected, it will appear similar to the following:

![](https://files.readme.io/ddfbe33-Screenshot_2022-11-22_at_16.08.08.png)

The _Update_ type is similar, but will also include the [Data provider](https://docs.budibase.com/docs/data-provider) and [Repeater](https://docs.budibase.com/docs/repeater) necessary to provide the row detail. 

![](https://files.readme.io/c3a3562-Screenshot_2022-11-22_at_16.10.14.png)

### Notifications

You can disable notifications on form edition by selecting the 'Disable notifications' option in the block settings.

![](https://files.readme.io/c3a3562-Screenshot_2022-11-22_at_16.10.14.png)