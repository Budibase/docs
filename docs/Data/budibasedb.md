---
title: Budibase DB
excerpt: ''
deprecated: false
hidden: false
metadata:
  title: ''
  description: ''
  robots: noindex
next:
  description: ''
---
Budibase DB is our native datasource. Any data you add here is stored directly on your Budibase instance.

## Creating a table

You can create a table when you are in the Data section of the application builder. 

The recommended flow is to go to your Budibase DB instance from the sidebar, and then click the `Create new table` button.

[block:image]
{
  "images": [
    {
      "image": [
        "https://files.readme.io/2cdb03b-create-table.png",
        "create-table.png",
        260
      ],
      "align": "center",
      "caption": "Create a new table using this button"
    }
  ]
}
[/block]

When creating a new Budibase DB table you can choose which built-in (auto types) columns you want to have. Each of these will be automatically maintained, created and updated based on the properties. You can choose to omit as you see fit. These can be added post-creation too through the `Create column` button, by selecting the _Auto Column_ type.

| Name       | Description                            |
| :--------- | :------------------------------------- |
| Auto ID    | An automatically generated ID          |
| Created by | The user who created the row           |
| Created at | When this row was created              |
| Updated by | The user who updated the row last      |
| Updated at | The time when the row was updated last |

[block:image]
{
  "images": [
    {
      "image": [
        "https://files.readme.io/2eb2df5-Screenshot_2022-12-12_at_08.51.57.png",
        null,
        "All auto columns selected by default"
      ],
      "align": "center",
      "caption": "All auto columns selected by default"
    }
  ]
}
[/block]

[block:image]
{
  "images": [
    {
      "image": [
        "https://files.readme.io/8bb21d9-Screenshot_2022-12-12_at_10.13.44.png",
        null,
        "Adding an auto column at a later point"
      ],
      "align": "center",
      "caption": "Adding an auto column at a later point"
    }
  ]
}
[/block]

### Adding columns

To add new columns to an existing Budibase DB table, navigate to the table you want to edit, then click the `+` button along the top-right of the grid view. This will display a dialog where you can configure the column you want to add.

[block:image]
{
  "images": [
    {
      "image": [
        "https://files.readme.io/f4ffcbd-add-new-column.png",
        "add-new-column.png",
        "Adding a required text column"
      ],
      "align": "center",
      "caption": "Adding a required text column"
    }
  ]
}
[/block]

### Editing columns

1. Step into the table through the sidebar
2. Hover over the column name you want to edit
3. Click the three dots and select _Edit column_

[block:image]
{
  "images": [
    {
      "image": [
        "https://files.readme.io/7db9965-edit_col.png",
        null,
        "Click the pencil icon to edit column"
      ],
      "align": "center",
      "caption": "Click the pencil icon to edit column"
    }
  ]
}
[/block]

### Selecting the display column

The display column is an important aspect when you're setting up relationships in tables. The column you select as a display column will be the one visually displayed inside a relationship column in another table.

Selecting a column during the table creation is only possible if you import data using a `CSV` file. To select a display column in any other situation, edit the column you want to make the display. This will give you the _Use as table display column_ option as shown below.

[block:image]
{
  "images": [
    {
      "image": [
        "https://files.readme.io/6a5e268-make-display-column.png",
        "make-display-column.png",
        "Selecting the display column"
      ],
      "align": "center",
      "caption": "Selecting the display column"
    }
  ]
}
[/block]

Alternatively you can set the display column from the edit column dropdown. 

[block:image]
{
  "images": [
    {
      "image": [
        "https://files.readme.io/5dfb8fc-Screenshot_2023-06-28_at_15.13.35.png",
        null,
        "Use as display column"
      ],
      "align": "center",
      "caption": "Use as display column"
    }
  ]
}
[/block]

> 👍 Create table from CSV
> 
> You can [Import a CSV/JSON](doc:csv-import) file as a new Budibase table.

***

## Data types

Within Budibase DB there are several data types to choose.

| Name                                          | Description                                                                                                                    |
| :-------------------------------------------- | :----------------------------------------------------------------------------------------------------------------------------- |
| [Text](doc:text)                              | Storage of (relatively) short text                                                                                             |
| Long Form Text                                | Allows you to store large amounts of texts, also supports markdown                                                             |
| Options                                       | Predefined list of options of which one can be selected                                                                        |
| [Multi-select](doc:multi-select)              | Predefined list of options of which multiple can be selected                                                                   |
| [Number](doc:number)                          | Storage of number                                                                                                              |
| [Boolean (True/False)](doc:boolean-truefalse) | Storage of true/false                                                                                                          |
| [Date/time](doc:datetime)                     | Storage of a date with a time                                                                                                  |
| [Attachments](doc:attachments)                | Storage of a file. Limited to 20MB per file                                                                                    |
| [Relationships](doc:relationships)            | Creates a link between this table and another table                                                                            |
| [Formula](doc:formula)                        | Allows you to set a formulated column, which will be calculated based on what you define. You can use handlebars or JavaScript |
| [JSON](doc:json)                              | Allows you to store JSON within a row, with the option to define a schema                                                      |
| [Barcode/QR](doc:barcodeqr)                   | A text representation of a barcode or QR code                                                                                  |
| Auto Column                                   | Auto columns can be added post-creation of the database by selecting data type.                                                |

If using an external [SQL Datasource](doc:sql-datasource), the native SQL data types will be mapped to one of these Budibase types for use in your apps. For more detail, look [here](https://github.com/Budibase/budibase/blob/178fd100af09ac1bc8b8395db52c629c572dc4bb/packages/server/src/integrations/utils.ts) for how the mappings are handled.

## Column definitions

Common column options:

| Property Name               | Description                                                                                                               |
| :-------------------------- | :------------------------------------------------------------------------------------------------------------------------ |
| Name                        | The name of the column, used for querying and displaying                                                                  |
| Type                        | The type of data you want to store.                                                                                       |
| Use as table display column | Enabling this will make the newly created column the display column. This will also automatically make the field required |
| Primary index               | Enabling this allows you to search in this field                                                                          |
| Secondary index             | When primary index is in use, you can enable a second index for searching                                                 |

<br>
Data type specific column options:

| Property Name                   | Description                                                                                                                              | Data Types            |
| :------------------------------ | :--------------------------------------------------------------------------------------------------------------------------------------- | :-------------------- |
| Enable Rich Text Format Support | Enabling this will allow you to store markdown                                                                                           | Long Form Text        |
| Options                         | The select-able options available for this column, one per line.                                                                         | Options, Multi-select |
| Table                           | Allow a relationship to the specified table                                                                                              | Relationship          |
| Column name in other table      | The relationship created will also be visible in the related table, this will set the new column name on the related table               | Relationship          |
| Formula                         | Allows you to set a formulated column, which will be calculated based on what you define. Allows you to define handlebars and JavaScript | Formula               |

## Constraints

The following column constraints are available:

| Constraint Name | Description                                                                          | Data Types |
| :-------------- | :----------------------------------------------------------------------------------- | :--------- |
| Required        | When enabled, a value must be set for this field                                     | All        |
| Maximum Length  | The maximum length that can be stored in this column                                 | Text       |
| Min Value       | When set, any value entered in the database lower than this number will be rejected  | Number     |
| Max Value       | When set, any value entered in the database higher than this number will be rejected | Number     |
| Earliest        | When set, any date before the specified date is rejected for new rows                | Date/Time  |
| Latest          | When set, any date after the specified date is rejected for new rows                 | Date/Time  |

> 📘 External datasource constraints
> 
> You can add Budibase constraints to external table columns, however this is entirely for form validation and will not restrict the data that is saved.  
> Instead, you must add data constraints yourself to any external table schemas.

***

## Data sync between environments

When using the <<glossary:Budibase DB>>, there are two environments to consider.

The **Development** environment represents the data that you see and interact with when using the app builder, which includes the _Data_ and _Design_ sections, and the [App preview](https://docs.budibase.com/docs/quickstart#preview-and-publish). 

If in doubt, you can see if you are in the dev environment from the URL, which will show `/app/app_dev_abc...` in the path. In production, the URL will appear without the `_dev` part.

**Production** represents your live environment. This is the data that your <<glossary:End User>>s will interact with. When in the app builder, production data will continuously sync and update your development data, although a page refresh may be needed to see the new changes.

Whenever you [Publish](https://docs.budibase.com/docs/quickstart#preview-and-publish) your app, any edits, inserts or deletes made in your dev data will be pushed into production, which may overwrite existing data.

> 📘 External datasources
> 
> Things are a little different when using an external database such as [SQL](doc:sql-datasource).  
> In this case the data in either environment will read and write to the database that you connected to.
> 
> You can use [Environment variables 🔒](doc:environment-variables) to make use of development and production databases.