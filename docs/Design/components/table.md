---
title: Table
excerpt: A quickstart on using Budibase tables to interact with your data.
deprecated: false
hidden: false
metadata:
  title: ''
  description: ''
  robots: index
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

In the **Settings Panel** you will find a lot of options of customization for the Table component. You can find all the definitions below.

## General

There are several general settings for Table, most of which are shared with other components as well.

| Setting | Description |
|---------|-------------|
| Name | The name of the table, which is not visible to the users, but visible in the structure sidebar |
| Data Provider | The provider of data for this table, this most likely is the wrapping component in your structure. |
| Row Count | The number of rows you want to have visible |
| Columns | Configure which columns you want to have displayed. See detailed explanation below |
| Size | Medium or Large font size |
| Quiet | Removes background-colour |
| Compact | Makes all the margins and paddings smaller, allowing for more data on screen at once. |
| Allow row selection | Adds checkboxes in front of rows, allowing your users to select one or more rows.<br/><br/>This will enable the `{{ <table-name>.Selected rows }}` binding.<br/><br/>_Row selection is only compatible with internal or SQL tables_ |


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

You will be able to use the `{{ Clicked row }}` **Binding** to access the object data of the clicked row. 

![](https://files.readme.io/d0d0c99-Screenshot_2022-12-14_at_10.35.58.png)

![](https://files.readme.io/9c79cbb-Screenshot_2022-12-14_at_11.15.08.png)

If you wanted to access a property of the clicked row, for example the **\_id**, then you would write your binding like so: `{{ Clicked row._id }}`

## Selected rows binding

If your table has the _Allow row selection_ checkbox ticked, then you will be able to make use of the `Selected Rows` **Binding**. 

This can be found underneath your table within the bindings drawer:

![Selected rows](https://files.readme.io/2ede4df-selected_rows.png)


When using this binding, an array of the selected row data will be made available:

![Selected row data](https://files.readme.io/2470495-Screenshot_2024-02-14_at_11.36.06.png)


This binding can be used to [Delete the selected rows](https://docs.budibase.com/docs/data-actions#delete-row):

![Delete selected rows](https://files.readme.io/3cbdaf6-Screenshot_2024-02-14_at_11.38.35.png)

*Delete selected rows*


You could also [pluck](https://docs.budibase.com/docs/array-helpers#pluck) a field from the selected rows, such as an ID, to show which rows have been selected in a readable way: `{{ pluck Table Block 1.Selected Rows 'id' }}`

![Displaying the IDs of the selected rows using the 'pluck' helper](https://files.readme.io/ee5de44-Screenshot_2024-02-14_at_11.43.19.png)

*Displaying the IDs of the selected rows using the 'pluck' helper*


Furthermore, you can combine `pluck` with `sum` to count a total, such as the kilogram _weight_ of the selected items: `{{ toFixed (sum (pluck Table Block 1.Selected Rows 'KGS')) 2 }} KG`. 

[toFixed](https://docs.budibase.com/docs/number-helpers#tofixed) in this case ensures there are always two decimals points in the printed value.

![Displaying the sum total weight of the selected rows](https://files.readme.io/b0028e7-Screenshot_2024-02-14_at_11.54.11.png)

*Displaying the sum total weight of the selected rows*


### Deprecation - Selected row ids

Prior to **v2.19.2**, the selected rows binding provided a list of **Row _id**s only. This binding has been kept for backwards compatibility, however in future it will be removed. This change has been made because the new binding is more useful, allowing you to do the calculations outlined above.

![Please update your selected rows binding to the new one](https://files.readme.io/3b649c6-Screenshot_2024-02-14_at_12.03.12.png)

*Please update your selected rows binding to the new one*


***

## Advanced settings

If you need more out of your table such as footers, resizeable and searchable columns, and  [conditional cell UI](https://github.com/Budibase/budibase/discussions/10204), you can check out the community [Super Table](https://github.com/poirazis/bb-component-SuperTable). 

Read more about [Custom plugins](doc:custom-plugin).