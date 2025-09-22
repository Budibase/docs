---
title: Query Rows
excerpt: Pulling rows from a table
deprecated: false
hidden: false
metadata:
  title: ''
  description: ''
  robots: noindex
next:
  description: ''
---
The query rows action allows you to pull data from a table, with several filtering and sorting options available.

[block:image]
{
  "images": [
    {
      "image": [
        "https://files.readme.io/34bf823-Screenshot_2023-04-21_at_11.31.02.png",
        null,
        "Query rows action"
      ],
      "align": "center",
      "caption": "Query rows action"
    }
  ]
}
[/block]

<br />

### Table

The first dropdown requires that you select a table. 

If you forget to choose a table, the error output of the automation will inform you.

[block:image]
{
  "images": [
    {
      "image": [
        "https://files.readme.io/fdd5c1e-Screenshot_2023-04-21_at_11.34.53.png",
        null,
        "Make sure to select a table for your Query Rows action!"
      ],
      "align": "center",
      "caption": "Make sure to select a table for your Query Rows action!"
    }
  ]
}
[/block]

With a table selected, you can select an optional **Sort Column** and **Sort Order**. If these fields are left blank, then the rows will be returned in no particular order.

You can also choose to add an optional **Limit** to the number of rows returned, otherwise the default maximum limit will be used.

| Internal DB                       | SQL DB                            |
| :-------------------------------- | :-------------------------------- |
| Maximum of **1000** rows returned | Maximum of **5000** rows returned |

<br />

### Filtering

You may provide filters when querying table rows by clicking the `Define filters` button. Filters can be against static values, or against [Bindings](doc:data-in-automations).

[block:image]
{
  "images": [
    {
      "image": [
        "https://files.readme.io/f3589fe-Screenshot_2023-04-21_at_11.41.13.png",
        null,
        "Filtering rows"
      ],
      "align": "center",
      "caption": "Filtering rows (static value and binding examples)"
    }
  ]
}
[/block]

The final setting is labelled **When filter empty**. This determines what data is returned if a <<glossary:Binding>> value is used in a filter, but is empty.

For example, in the screenshot above we filter on the `{{ trigger.fields.Name }}` binding. If that binding was empty, then you have the choice of returning:

- All table rows
- No table rows

> 🚧 Update/Delete rows
> 
> If you are looping over the output of a **Query Rows** action to perform updates or deletes in the next step, it is important that you consider what happens if your binding is blank.



<br />

### Using the query rows output

You can access the output of a **Query Rows** action through the <<glossary:Binding>>: `{{ steps.X.rows }}`, where 'X' is the step number of your action.

For example you would use `{{ steps.1.rows }}` for the following action:

[block:image]
{
  "images": [
    {
      "image": [
        "https://files.readme.io/33370c6-Screenshot_2023-04-21_at_11.52.45.png",
        null,
        null
      ],
      "align": "center",
      "caption": "Step 1: Query Rows"
    }
  ]
}
[/block]

This binding is particularly useful in automation [Looping](doc:looping), where you want to perform an action for each row retrieved.