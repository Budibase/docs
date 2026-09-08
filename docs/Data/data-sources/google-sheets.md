---
title: Google Sheets
excerpt: Connect a Google Sheet as a datasource
deprecated: false
hidden: false
metadata:
  title: ''
  description: ''
  robots: index
next:
  description: ''
---
Use Google Sheets when you want Budibase to read and write sheet data directly.

Budibase works best with simple tabular sheets. Make sure the first row contains headers.

## Connect the sheet

1. Add a datasource and select `Google Sheets`
2. Sign in with a Google account that can access the spreadsheet
3. Paste the Google Sheet URL
4. Select the worksheets to import
5. Save the datasource

## Work with sheet data

Each worksheet appears as a grid in Budibase.

You can:

* View rows in the builder
* Add, edit, and delete rows
* Use the sheet as a form schema
* Use row actions such as `Save Row`

## Add a query

Use a query when you need to create, read, update, or delete rows from a sheet.

1. Open the Google Sheets datasource
2. Click `Add query`
3. Choose the operation you need
4. Provide the sheet name
5. Add the row data or row index required by the query

## Query types

### Create

Insert a new row by providing the sheet name and a JSON payload of column names and values.

### Read

Return all rows from a sheet. Use a transformer if you need to filter or reshape the data.

### Update

Update an existing row by providing the sheet name, row index, and new values. Row indexes start at zero for the first data row below the header.

### Delete

Delete a row by providing the sheet name and row index. Rows below the deleted row shift up.

## Notes

* Your sheet must have a header row
* Self-hosted installations need Google SSO configured
* Use exact sheet and column names to avoid import errors
