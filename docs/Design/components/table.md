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
The table allows you to copy your [Budibase DB](doc:budibasedb) and [SQL](doc:sql-datasource) tables as seen in the **Data** section into your apps for end-users.

It is the quickest, most direct way to provide your users with a CRUD interface. 

Add a table in a couple of clicks!

1. In the *Design* section, click `Add component`. 
2. Under the *Blocks* category, click `table`.

> 👍
>
> You can also add a table by searching for "Table" and pressing the Enter key.

<Image alt="Adding the table" align="center" src="https://files.readme.io/f7f25c9-Screenshot_2024-04-10_at_11.28.49.png">
  Adding the table
</Image>

<Image align="center" src="https://files.readme.io/7306362-Screenshot_2023-11-27_at_11.16.44.png" />

With the table added, you will want to select a *Table* in the <Glossary>Settings Panel</Glossary>.

## Configure columns

Table columns can be configured under the *Columns* section of the settings. Click the cog icon beside a column to change its label.

Click on `Configure columns` to determine which columns should be included in your table view and to change their labels. The underlying database column name will still be shown above the label for reference.

<Image alt="Giving the 'Last Name' column the display label 'Surname'" align="center" src="https://files.readme.io/5952240-Screenshot_2023-11-27_at_11.21.16.png">
  Giving the 'Last Name' column the display label 'Surname'
</Image>

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

![](https://files.readme.io/d0d0c99-Screenshot_2022-12-14_at_10.35.58.png)

![](https://files.readme.io/9c79cbb-Screenshot_2022-12-14_at_11.15.08.png)

If you wanted to access a property of the clicked row, for example the **\_id**, then you would write your binding like so: `{{ Clicked row._id }}`

## Sorting

Select a *Sort column* and *Sort order* to set the initial default sorting; either ascending or descending. You can also set an initial sort on a column that is not being displayed. 

A user can still override this sort by clicking the three dots beside a column. Text fields can be sorted alphabetically, whereas number fields will be sorted numerically. 

<HTMLBlock>{`
<div style="padding:71.41% 0 0 0;position:relative;"><iframe src="https://player.vimeo.com/video/842095454?badge=0&amp;autopause=0&amp;player_id=0&amp;app_id=58479" frameborder="0" allow="autoplay; fullscreen; picture-in-picture" allowfullscreen style="position:absolute;top:0;left:0;width:100%;height:100%;" title="Sorting a Table"></iframe></div><script src="https://player.vimeo.com/api/player.js"></script>
`}</HTMLBlock>

## Row settings

The table offers a few row settings, including a mix of style and function. 

| Setting              | Description                                                                       |
| :------------------- | :-------------------------------------------------------------------------------- |
| Row height           | Set the height of the table rows (Small, Medium and Large). The default is small. |
| High contrast        | If checked, the table rows will be striped.                                       |
| Add/Edit/Delete rows | Uncheck to prevent users from adding/editing/deleting rows.                       |

<HTMLBlock>{`
<div style="padding:81.22% 0 0 0;position:relative;"><iframe src="https://player.vimeo.com/video/842121638?badge=0&amp;autopause=0&amp;player_id=0&amp;app_id=58479" frameborder="0" allow="autoplay; fullscreen; picture-in-picture" allowfullscreen style="position:absolute;top:0;left:0;width:100%;height:100%;" title="row settings"></iframe></div><script src="https://player.vimeo.com/api/player.js"></script>
`}</HTMLBlock>

If you want to increase the number of rows displayed on screen, simply increase the height of the table in the *Styles* tab.

<Image align="center" src="https://files.readme.io/b6e89cf-Screenshot_2024-04-10_at_12.06.35.png" />

## Search

Search can be added to a table through the use of <Glossary>Binding</Glossary>s and filtering [Using a form and text input](https://docs.budibase.com/docs/adding-a-search-field#2-using-a-form-and-text-input-flexible-way).

## Selected rows binding

If your table has the *Allow row selection* checkbox ticked, then you will be able to make use of the `Selected Rows` <Glossary>Binding</Glossary>. 

This can be found underneath your table within the bindings drawer:

<Image align="center" src="https://files.readme.io/0bc2c7d-Screenshot_2024-04-10_at_12.08.42.png" />

When using this binding, an array of the selected row data will be made available:

<Image align="center" className="border" border={true} src="https://files.readme.io/ce9e495-Screenshot_2024-04-10_at_12.11.10.png" />

This binding can be used to [Delete the selected rows](https://docs.budibase.com/docs/data-actions#delete-row):

<Image alt="Delete selected rows" align="center" src="https://files.readme.io/3cbdaf6-Screenshot_2024-02-14_at_11.38.35.png">
  Delete selected rows
</Image>

You could also [pluck](https://docs.budibase.com/docs/array-helpers#pluck) a field from the selected rows, such as an ID, to show which rows have been selected in a readable way: `{{ pluck Table Block 1.Selected Rows 'id' }}`

<Image alt="Displaying the IDs of the selected rows using the 'pluck' helper" align="center" src="https://files.readme.io/f7af098-Screenshot_2024-04-10_at_12.15.21.png">
  Displaying the IDs of the selected rows using the 'pluck' helper
</Image>

Furthermore, you can combine `pluck` with `sum` to count a total, such as the kilogram *weight* of the selected items: `{{ toFixed (sum (pluck Table Block 1.Selected Rows 'KGS')) 2 }} KG`. 

[toFixed](https://docs.budibase.com/docs/number-helpers#tofixed) in this case ensures there are always two decimals points in the printed value.

<Image alt="Displaying the sum total weight of the selected rows" align="center" src="https://files.readme.io/b0028e7-Screenshot_2024-02-14_at_11.54.11.png">
  Displaying the sum total weight of the selected rows
</Image>

### Deprecation - Selected row ids

Prior to **v2.19.2**, the selected rows binding provided a list of <Glossary>Row _id</Glossary>s only. This binding has been kept for backwards compatibility, however in future it will be removed. This change has been made because the new binding is more useful, allowing you to do the calculations outlined above.

<Image alt="Please update your selected rows binding to the new one" align="center" src="https://files.readme.io/3b649c6-Screenshot_2024-02-14_at_12.03.12.png">
  Please update your selected rows binding to the new one
</Image>

## Advanced settings

If you need more out of your table such as footers, resizeable and searchable columns, and  [conditional cell UI](🔗), you can check out the community [Super Table](🔗). 

Read more about [Custom plugins](🔗).

## Table Block deprecation

If you still have access to the table block component you can view relevant documentation associated with it [here](doc:table-block-deprecated).
