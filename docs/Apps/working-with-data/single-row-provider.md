---
title: Single Row Provider
excerpt: >-
  Like a [Data Provider](https://docs.budibase.com/update/docs/data-provider),
  only more targeted.
deprecated: false
hidden: false
metadata:
  description: kba_5hc76
  robots: index
---
Using a Single Row Provider, it is possible to fetch all data from a single row in the specified table, when supplied with an `_id`. This can be useful to supplement the on-click actions of a [Table](https://docs.budibase.com/docs/table), or [Chart ](https://docs.budibase.com/docs/chart), for example.

## Example

In a workspace which contains the Budibase DB sample data, create an app and add a blank screen.

Add a Data Provider to your screen, and set it to fetch the Expenses table.

Add a Pie Chart and nest it inside the Data Provider. Set the Label column to "Expense ID" and the Data Column to "Cost". Your Pie Chart should now populate. Hovering over each segment will show the cost.

In the On-click segment [actions](https://docs.budibase.com/docs/actions) of the Pie Chart, add an "Update State" action, which sets the value `{{Clicked segment._id }}` on the key of "clicked_segment". Remember to Save your changes.

Next, add a Modal, and set it to be a sibling of the Data Provider (not nested within). You can do this by dragging it around on the component tree. Inside the Modal, add a Single Row Provider, and set it's Datasource to be the same Expenses table as the Pie Chart, and set the Row ID to be `{{ State.clicked_segment }}`

Inside the Single Row Provider, add a Text component, and open the bindings drawer using the lightning-bolt icon. Click into the "New Single Row Provider" option, and you'll see the column names from the expenses table. Using the binding for each of these will return the value in that column for the clicked segment.

Here's some example text you could use:

```markdown
###### ITEM ID: {{ [New Single Row Provider].Expenses.[Expense ID] }}

# {{ [New Single Row Provider].Expenses.Cost }}

{{ [New Single Row Provider].Expenses.Notes }}

Expense Categories
{{ [New Single Row Provider].Expenses.[Expense Tags] }}
```

<br />

Head back to the On-click actions of the Pie Chart and add another action, this time use the "Open Modal" action, and select your modal from the dropdown list.

You can test this in Preview, or take a closer look in the builder by fetching a row ID from the table. To do this, view your Expenses table in the data section, and right click on a row to copy the row `_id`. Head back to your app and visit the "State" panel - select your state variable and paste in the row ID you copied. You should now be able to see actual values in the Text component of the Single Row Provider.