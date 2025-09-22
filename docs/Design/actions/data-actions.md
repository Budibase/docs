---
title: Data actions
excerpt: These are data based actions; CRUD and other data manipulations.
deprecated: false
hidden: false
metadata:
  title: ''
  description: ''
  robots: index
next:
  description: ''
  pages:
    - type: basic
      slug: application-actions
      title: Application actions
---
## Save Row

Saving a row can mean two things: updating or adding a new row. Depending on what you want to do you will have to structure this action differently. 

If you're adding, updating or viewing any row the easiest way is to add a [Form Block](doc:form-block) component. Here you can choose to create, update or read, depending on your selection you will be prompted with additional fields. For update and read you will have to pass in the `Row ID` into the row field, this is what will be use to update the specific record back to your chosen data source. In this instance you don't have to worry about the `Save Row` action as it already preconfigured for you. (You can [eject blocks](https://docs.budibase.com/docs/blocks#ejecting-blocks) if you want to see a good example of how the `Save row` action is configured). However, if you did  go down the regular [Form](doc:form) route your save row action would look something to the below.

![](https://files.readme.io/fcb7ce5-actionsnewrow_1.png "actionsnewrow (1).png")

Updating a row can be done in a number of different ways. If you have a structure containing a [Data provider](https://docs.budibase.com/docs/data-provider) and a [Repeater](https://docs.budibase.com/docs/repeater), selecting the repeater as your <Glossary>Datasource</Glossary> will make it so you can correctly get the values from the specific row. To change a field you then take advantage of the add column button that is at the bottom. Click it, select the field you want to change, and type in the value you want to change it to (or use a binding). A descriptive image of this is shown below:

![](https://files.readme.io/af5f1c8-actions.png "actions.png")

If you are not using a repeater, an alternative way to update a row is to add the **\_id** column and provide a value that matches an existing id.\
For example, you could be passing a task id in the URL:

![](https://files.readme.io/a76c3a3-Screenshot_2022-05-10_at_16.48.11.png "Screenshot 2022-05-10 at 16.48.11.png")

## Duplicate Row

This action allows you to clone a row into any table with shared column names.\
If you are performing this action from a <a href="https://docs.budibase.com/docs/button#adding-buttons-to-table-rows">row button</a> click, then no **\_id** needs to be provided. 

Alternatively, your button could be nested within a [Repeater](https://docs.budibase.com/docs/repeater). The below example shows how this would be setup with a repeater. 

![Duplicate data action setup demo.](https://files.readme.io/e69e07e-Screenshot_2023-05-18_at_09.44.48.png)

## Delete Row

This action is used to delete rows from your data source. It's used much in the same way that you would when updating a row. The main difference being you don't have to select a data source. You only have to select the table and pass the correct `Row ID` <Glossary>binding</Glossary>. For this example we will pass the `Row ID` via a [URL variable](doc:url-parameters), then the `Row ID` will be passed into the delete on click action used to delete the record from the [Budibase DB](doc:budibasedb). 

![Setup for deleting rows from tables.](https://files.readme.io/06d2677-Screenshot_2023-05-18_at_10.06.54.png)

Below I've attached a gif of the above 3 actions in action. 

![](https://files.readme.io/2c40547-Save_duplicate_and_delete.gif)

## Fetch row

This action allows you to fetch a table row from any table within your app.  This action works the same `Delete Row` where you have select a table and reference the `Row ID`. 

![Fetched row action example.](https://files.readme.io/35152f1-Screenshot_2023-05-18_at_11.07.01.png)

This can be used alongside other actions a good example of this is with [App state](doc:app-state). You can fetch the row then create a state to hold all the data related to the row fetched. This can then be used to as the basis to bind to different components within your app. 

Below there is a simple demo showing this in action. This is a very simple demo and its only outputting the entire fetch object to a paragraph component. You can break this up into multiple components and output different parts of the object if you so choose. 

![Fetch row example demo.](https://files.readme.io/49b0e68-fetch_row_example.gif)

## Execute Query

The `Execute Query` action requires separate configuration as the queries need to be setup before they can be used by this action within your apps. There are many ways to use this action. For instances, you can use it to send the query results to a [REST API](doc:rest), retrieve results from a query created using an [External data source](doc:data-sources), and so on.

In the example below we will be focusing on using this with a REST datasource. This example won't be too in-depth and shall only show a basic get REST query. This will also be used in a similar fashion to `Fetch rows` action, where we will storing it as state to display the object.

![Setup of Execute query action.](https://files.readme.io/b7ae389-Screenshot_2023-05-18_at_12.19.32.png)

For anything more advance have a read through the [REST API](doc:rest) docs. It will show you how to import and configure everything necessary to perform a more advanced action. 

![Query app action demo](https://files.readme.io/39d08fb-query_action.gif)

## Refresh Data Provider

This is mainly used for [External datasources](doc:data-sources) for example the [REST API](doc:rest) as it requires the recalling of queries in order to refresh [Data providers](doc:data-provider) after other actions have been performed. A good example for this is when you update a user record within a [Form](doc:form) inside a [Side panel](doc:side-panel). Once updated you would want to chain the `Refresh Data Provider` action afterwards to refresh the changes made without having to refresh the page to see these changes.

## Update State

Allows you to set a state value, or delete the key entirely. When entering an identifying *Key* you can select an existing one from the dropdown, or simply manually type into the text box to create a new key.

<Image align="center" src="https://files.readme.io/1ddf044-Screenshot_2024-01-11_at_10.57.54.png" />

Your state variable can then be accessed, anywhere in your app, via the state <Glossary>Binding</Glossary>, in this case: `{{ State.employee_id }}`.

See [App state](doc:app-state) for further reading and examples.

## Upload File To S3

To be used with the [S3 File Upload](doc:s3-file-upload) component.

## Export Data

This action is used to export selected rows within a table to either a CSV or JSON file. To set this up quickly add a [Table Block](doc:table-block) component to a screen, then enable the `Row selection` checkbox. From here eject the block using the `Eject block` button. Once ejected add a button component within the [Data provider](doc:data-provider) created from the ejection. You should have a similar structure to the below image.

![](https://files.readme.io/4ceb0e3-Screenshot_2023-05-18_at_13.34.38.png)

After this click on the `Define actions` button and add the `Exported Data` action, bind everything up correctly similar to whats shown below.

![](https://files.readme.io/09ed970-Screenshot_2023-05-18_at_13.39.09.png)

Once this has been done, it should export the rows selected and output it as the selected export.

![](https://files.readme.io/df4bc40-Export_data_action_example..gif)

![Downloaded CSV due to the result of the export data action.](https://files.readme.io/bb41e11-Screenshot_2023-05-19_at_07.57.15.png)

#### Configure delimiter

The default delimiter (separator) for CSV exports is a comma `,` . It is however possible to change this to one of a preset list of options. This feature does not apply to JSON file exports.

<Image alt="Using the tab key delimiter" align="center" src="https://files.readme.io/d64482d-tab_delimiter.png">
  Using the tab key delimiter
</Image>

#### Configure export columns

By default *all* table columns will be included in the export, however you can use a subset and provide custom labels.

Click the *Export columns* button and add the specific columns you want to export. You can also drag-and-drop the columns to rearrange the column order in the export.

<Image alt="Only include these three columns in the data export" align="center" src="https://files.readme.io/4e7070d-Screenshot_2024-02-27_at_13.07.38.png">
  Only include these three columns in the data export
</Image>

<Image alt="Exported CSV file" align="center" src="https://files.readme.io/af5c4ac-csv.png">
  Exported CSV file
</Image>

> 🚧 Limitations
>
> **Export Data** does not work with the [REST API](https://github.com/Budibase/budibase/issues/7348) datasource or other [Custom queries](https://docs.budibase.com/docs/data-sources#custom-queries).

## Clear Row Selection

Deselects any selected rows of the chosen table. 

<Image align="center" src="https://files.readme.io/a26a4a3-clear_row_selection.png" />

<Image align="center" src="https://files.readme.io/7dea71c-selected_rows.gif" />

Can also be useful in combination with the **Open Side Panel** action.
