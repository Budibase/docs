---
title: Grid block
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
The grid block allows you to copy your [Budibase DB](doc:budibasedb) and [SQL](doc:sql-datasource) tables as seen in the **Data** section into your apps for end-users.

It is the quickest, most direct way to provide your users with a CRUD interface. 

Add a Grid block in a couple of clicks!

1. In the *Design* section, click `Add component`. 
2. Under the *Blocks* category, click `Grid block`.

> 👍
>
> You can also add a Grid block by searching for "Grid" and pressing the Enter key.

<Image alt="Adding the Grid block" align="center" src="https://files.readme.io/a84dd03-search.png">
  Adding the Grid block
</Image>

<Image align="center" src="https://files.readme.io/7306362-Screenshot_2023-11-27_at_11.16.44.png" />

With the Grid block added, you will want to select a *Table* in the <Glossary>Settings Panel</Glossary>.

<br />

## Configure columns

Grid block columns can be configured under the *Columns* section of the settings. Click the cog icon beside a column to change its label.

Click on `Configure columns` to determine which columns should be included in your grid view and to change their labels. The underlying database column name will still be shown above the label for reference.

<Image alt="Giving the 'Last Name' column the display label 'Surname'" align="center" src="https://files.readme.io/5952240-Screenshot_2023-11-27_at_11.21.16.png">
  Giving the 'Last Name' column the display label 'Surname'
</Image>

Columns can be shown or hidden with the toggle switches, and the column order can be set by dragging and dropping columns.

> 📘 In-app column width and order
>
> The initial width and order of your columns will match the grid in the **Data** section.
>
> Users can use the mouse to drag columns to change their order, or drag edges to resize the width. These changes will only apply to the users' session.
>
> Also note that the [Display column](https://docs.budibase.com/docs/budibasedb#selecting-the-display-column) will always be pinned.

<br />

## Sorting

Select a *Sort column* and *Sort order* to set the initial default sorting; either ascending or descending. You can also set an initial sort on a column that is not being displayed. 

A user can still override this sort by clicking the three dots beside a column. Text fields can be sorted alphabetically, whereas number fields will be sorted numerically. 

<HTMLBlock>{`
<div style="padding:71.41% 0 0 0;position:relative;"><iframe src="https://player.vimeo.com/video/842095454?badge=0&amp;autopause=0&amp;player_id=0&amp;app_id=58479" frameborder="0" allow="autoplay; fullscreen; picture-in-picture" allowfullscreen style="position:absolute;top:0;left:0;width:100%;height:100%;" title="Sorting a Grid block"></iframe></div><script src="https://player.vimeo.com/api/player.js"></script>
`}</HTMLBlock>

<br />

## Row settings

The Grid block offers a few row settings, including a mix of style and function. 

| Setting              | Description                                                                      |
| :------------------- | :------------------------------------------------------------------------------- |
| Row height           | Set the height of the grid rows (Small, Medium and Large). The default is small. |
| High contrast        | If checked, the Grid rows will be striped.                                       |
| Add/Edit/Delete rows | Uncheck to prevent users from adding/editing/deleting rows.                      |

<HTMLBlock>{`
<div style="padding:81.22% 0 0 0;position:relative;"><iframe src="https://player.vimeo.com/video/842121638?badge=0&amp;autopause=0&amp;player_id=0&amp;app_id=58479" frameborder="0" allow="autoplay; fullscreen; picture-in-picture" allowfullscreen style="position:absolute;top:0;left:0;width:100%;height:100%;" title="row settings"></iframe></div><script src="https://player.vimeo.com/api/player.js"></script>
`}</HTMLBlock>

If you want to increase the number of rows displayed on screen, simply increase the height of the grid block in the *Styles* tab.

![](https://files.readme.io/75b42f7-height.png)

<br />

## Search

Search can be added to a Grid block through the use of <Glossary>Binding</Glossary>s and filtering [Using a form and text input](https://docs.budibase.com/docs/adding-a-search-field#2-using-a-form-and-text-input-flexible-way). 

If you want to allow users to set their own [Dynamic filters](doc:dynamic-filter) or want a more convenient way to add search fields, you may wish to explore the [Table block](doc:table-block).
