---
title: Table
excerpt: A quickstart on using Budibase tables to interact with your data.
deprecated: false
hidden: false
metadata:
  title: ''
  description: ''
  robots: noindex
next:
  description: ''
---
![](https://files.readme.io/d373575-countries-table.png "countries-table.png")

The Table component inside Budibase is great for displaying data to users. It's highly configurable, performant and customizable. Most apps built with Budibase involve displaying data within a table, and interacting with that data.

## Getting data into a table

To get data into the Table, you need to have the table nested in a [Data Provider](doc:data-provider).

> 👍 Blocks
>
> Want to quickly load a table with data, plus add search and filter options? Use the [Table block](doc:table-block).
>
> Alternatively if your users simply need a data interface without actions, then use the [Grid block](doc:grid-block).

In the <<glossary:Settings Panel>> you will find a lot of options of customization for the Table component. You can find all the definitions below.

## General

There are several general settings for Table, most of which are shared with other components as well.

[block:parameters]
{
  "data": {
    "h-0": "Setting",
    "h-1": "Description",
    "0-0": "Name",
    "0-1": "The name of the table, which is not visible to the users, but visible in the structure sidebar",
    "1-0": "Data Provider",
    "1-1": "The provider of data for this table, this most likely is the wrapping component in your structure.",
    "2-0": "Row Count",
    "2-1": "The number of rows you want to have visible",
    "3-0": "Columns",
    "3-1": "Configure which columns you want to have displayed. See detailed explanation below",
    "4-0": "Size",
    "4-1": "Medium or Large font size",
    "5-0": "Quiet",
    "5-1": "Removes background-colour",
    "6-0": "Compact",
    "6-1": "Makes all the margins and paddings smaller, allowing for more data on screen at once.",
    "7-0": "Allow row selection",
    "7-1": "Adds checkboxes in front of rows, allowing your users to select one or more rows.  \n  \nThis will enable the `{ <table-name>.Selected rows }` binding.  \n  \n_Row selection is only compatible with internal or SQL tables_"
  },
  "cols": 2,
  "rows": 8,
  "align": [
    "left",
    "left"
  ]
}
[/block]

## Configure columns

When pressing the configure columns setting, you will be shown a modal where you can define which columns you want to display.

![](https://files.readme.io/8e48f43-define-columns.png "define-columns.png")

By default this screen is empty, but you can press `Add all columns` to automatically add all columns defined in the data.  
If you wish to remove a column, press the `X` on the right hand side.

![](https://files.readme.io/f0b93ea-all-columns.png "all-columns.png")

### Changing column labels

After you've added columns to your table, you can customize the label displayed in the UI. This is great so you don't need to stick with the column name itself. Changing this will reflect in the UI preview as soon as you hit `Save`.

### Sorting columns

In front of every column you can see a small dotted icon, dragging this allows you to reposition the columns in every order you want.

### Advanced column customization

Next we're going to look at advanced column customization. You can get to this through the gearwheel behind every column in the `Configure columns` section.

![](https://files.readme.io/774059b-advanced-customization.png "advanced-customization.png")

Pressing this icon, you will be shown a new modal screen with all the advanced options.

![](https://files.readme.io/7133616-advanced-options.png "advanced-options.png")

#### Width

The width of every column can be customized here. There are different modes supported here.

| Mode    |                                                                                                                  |
| :------ | :--------------------------------------------------------------------------------------------------------------- |
| _empty_ | By default, when the field is left empty, the margins of all columns will automatically adjust to fit the window |
| auto    | When typing `auto` into the screen, the width will adjust based on the widest value of the column                |
| custom  | A custom mode, which allows you to put any `css` supported width in here, such as `200px`                        |

#### Alignment

This setting allows you to align the text. By default `left` alignment is used, but now you can also select `center` and `right`.

#### Value

The value field allows you to override the value using [Bindings](doc:bindings). A great example of what you could do here is to convert a `cents` column to be displayed with currency symbol and decimals. So if you have 499 in your `cents` column, you could input this in the `Value` field

```handlebars
$ {{ divide Value 100 }}
```

#### Background and Text colour

Then there are the background and text colour fields. They of course go hand-in-hand. When clicking the circle behind the definition, you can pick from predefined colors, or input your own color

![](https://files.readme.io/fd1b311-colours.png "colours.png")

## Add components to your table

Adding components, such as buttons and links, to your table rows is simple. Adding a button allows you to assign button actions to rows.

![](https://files.readme.io/5b8bdc5-add_comp.gif)

## On row click

Click `Define actions` to run [Actions](doc:actions) on click of a row.

You will be able to use the `{ Clicked row }` <<glossary:Binding>> to access the object data of the clicked row.

![](https://files.readme.io/d0d0c99-Screenshot_2022-12-14_at_10.35.58.png)

![](https://files.readme.io/9c79cbb-Screenshot_2022-12-14_at_11.15.08.png)

## Advanced settings

If you need more out of your table such as footers, resizeable and searchable columns, and [conditional cell UI](https://github.com/Budibase/budibase/discussions/10204), you can check out the community [Super Table](https://github.com/poirazis/bb-component-SuperTable).

Read more about [Custom plugins](doc:custom-plugin).