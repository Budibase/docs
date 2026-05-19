---
title: Table
excerpt: Lift your tables from the Data section into your Design
deprecated: false
hidden: false
metadata:
  title: ''
  description: ''
  robots: index
next:
  description: ''
---
The table allows you to display tables and queries, as seen in the **Data** section, in your apps and screens for end-users.

It is the quickest, most direct way to provide your users with a CRUD interface.

Add a table in a couple of clicks!

1. In an _App_, within a screen, click `Add component`.
2. Under the _Data_ category, click `table`.

<Callout icon="👍" theme="okay">
  You can also add a table by searching for "Table" and pressing the Enter key.
</Callout>



With the table added, you will want to select a _Table_ in the <Glossary>Settings Panel</Glossary>.

## Configure columns

Table columns can be configured under the _Columns_ section of the settings. Click the cog icon beside a column to change its label.

Click on `Configure columns` to determine which columns should be included in your table view and to change their labels. The underlying database column name will still be shown above the label for reference.


Columns can be shown or hidden with the toggle switches, and the column order can be set by dragging and dropping columns.

> 📘 In-app column width and order
>
> The initial width and order of your columns will match the table in the **Data** section.
>
> Users can use the mouse to drag columns to change their order, or drag edges to resize the width. These changes will only apply to the users' session.
>
> Also note that the [Display column](https://docs.budibase.com/docs/budibasedb#selecting-the-display-column) will always be pinned.

## On row click

Click `Define actions` to run [Actions](doc:actions) on click of a row.

You will be able to use the `{{ Clicked row }}` <Glossary>Binding</Glossary> to access the object data of the clicked row.



If you wanted to access a property of the clicked row, for example the **_id**, then you would write your binding like so: `{{ Clicked row._id }}`

## Sorting

Select a _Sort column_ and _Sort order_ to set the initial default sorting; either ascending or descending. You can also set an initial sort on a column that is not being displayed.

A user can still override this sort by clicking the three dots beside a column. Text fields can be sorted alphabetically, whereas number fields will be sorted numerically.


<br />

## Row settings

The table offers a few row settings, including a mix of style and function.

| Setting              | Description                                                                       |
| :------------------- | :-------------------------------------------------------------------------------- |
| Row height           | Set the height of the table rows (Small, Medium and Large). The default is small. |
| High contrast        | If checked, the table rows will be striped.                                       |
| Add/Edit/Delete rows | Uncheck to prevent users from adding/editing/deleting rows.                       |


<br />

If you want to increase the number of rows displayed on screen, simply increase the height of the table in the _Styles_ tab, or drag the component larger when displayed on a screen or inside a container set to "Grid".


<br />

## Search

Search can be added to a table through the use of <Glossary>Binding</Glossary>s and filtering [Using a form and text input](https://docs.budibase.com/docs/adding-a-search-field#2-using-a-form-and-text-input-flexible-way).

Some field types also allow searching directly within the table's column. If you hover over a column and see a magnifying glass icon, you can click it to add a search input field in the column header. Typing into this field will perform a basic search on the data in that column.

## Selected rows binding

If your table has the _Allow row selection_ checkbox ticked, then you will be able to make use of the `Selected Rows` <Glossary>Binding</Glossary>.

Current behavior: in **v2.19.2+**, `Selected Rows` returns an array of full row objects (not just row IDs).

This can be found underneath your table within the bindings drawer:


When using this binding, an array of the selected row data will be made available:


This binding can be used to [Delete the selected rows](https://docs.budibase.com/docs/data-actions#delete-row):


You could also [pluck](https://docs.budibase.com/docs/array-helpers#pluck) a field from the selected rows, such as an ID, to show which rows have been selected in a readable way: `{{ pluck New Table.Selected rows 'id' }}`


### Conditional formatting

With conditional formatting, you can now add conditional logic to either a cell or rows within your table. To make your formatting dynamic, you can set rules that change the format of cells based on their value. This can be done on a range of fields types, options, formulas, strings, numbers etc.

You can find conditional formatting options under the column settings:


The above will open a new drawer when clicked, were you can begin adding your conditions in relation to the column you have selected.


There are a few settings you need to be aware of.

* Cell ~ This will only apply styling to the specific cell chosen
* Row ~ This will apply styling to the entire row whenever the condition is met
* Background colour ~ This allows you to change the background colour of a cell or row
* Text colour ~ This allows you to change only the text colour of the cell or row

It’s worth noting that the order of your conditions matter, as Budibase processes these conditions from top to bottom. This is more specific to numbers as depending on the situation you may want to apply styling to higher values first and then apply styling to lower values next. Therefore you will need to order the conditions accordingly.

### Deprecation - Selected row ids

Prior to **v2.19.2**, the selected rows binding provided a list of <Glossary>Row _id</Glossary>s only. This binding has been kept for backwards compatibility, however in future it will be removed. This change has been made because the new binding is more useful, allowing you to do the calculations outlined above.


## Advanced settings

If you need more out of your table such as footers, resizeable and a more customisable search experience, you can check out the community [Super Table](https://github.com/poirazis/bb-component-SuperTable).

Read more about [Custom plugins](https://github.com/Budibase/plugins).

<br />
