---
title: Data actions
excerpt: Actions for saving, updating, exporting, and fetching data.
deprecated: false
hidden: false
metadata:
  title: ''
  description: kba_5v2iq
  robots: index
next:
  description: ''
  pages:
    - type: basic
      slug: application-actions
      title: Application actions
---
Use data actions when user input should create, update, delete, export, or refresh data.

## Save row

Use this action to create or update a row.

If you are using a form block, the save action is already configured for you.

For custom forms, add the columns you want to update and bind the values into the action.

When updating a row directly, provide the row `_id`.

## Duplicate row

Use this action to copy a row into another table with matching columns.

If the action is triggered from a row button, the row context can supply the source row automatically.

## Delete row

Use this action to delete a row by table and row ID.

## Fetch row

Use this action to read a single row and pass it into state or another component.

## Execute query

Use this action to run a saved query.

This is common for REST queries and external datasources.

## Refresh data provider

Use this action to reload a data provider after another action changes data.

## Update state

Use this action to set or clear an app state value.

## Upload file to S3

Use this action with the [S3 File Upload](doc:s3-file-upload) component.

## Export data

Use this action to export selected table rows as CSV or JSON.

You can choose the delimiter for CSV exports and limit the exported columns.

## Clear row selection

Use this action to deselect any currently selected table rows.

## Download file

Use this action to download a file from an attachment column or a URL.

## Row action

Use this action to trigger a row action automation.

You must provide the table or view, row ID, and row action to run.

Enable confirmation if users should confirm before the automation starts.
