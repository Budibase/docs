---
title: CSV Import
excerpt: Import CSV or JSON data into Budibase
deprecated: false
hidden: false
metadata:
  title: ''
  description: ''
  robots: index
next:
  description: ''
---
Use CSV import when you already have data and want to create a table from it.

Budibase can also import JSON files using the same flow.

## Before you start

For CSV files:

* Include a header row
* Use one column per field
* Keep column names unique
* Check date and number formats before importing

For JSON files, use an array of objects where each object represents a row.

## Create a new table

1. Open the **Data tables** link
2. Click `Add source`
3. Select `Upload CSV / JSON`
4. Upload the file
5. Enter a table name
6. Review the detected columns
7. Choose the data type for each column
8. Click `Create`

When you import a CSV, the first row is used as the column header row.

## Import into an existing table

Use this flow when you want to add rows to an existing Budibase table.

1. Open the target table
2. Click `Import`
3. Upload the CSV or JSON file
4. Match the source columns to the destination columns
5. Ignore any columns that do not match
6. Click `Import`

## Update existing rows

You can also update rows from an import.

1. Open the import flow for the target table
2. Enable `Update existing rows`
3. Select the identifier field
4. Import the file

Budibase uses the identifier field to match incoming rows against existing records.

## Review imported data

After importing, open the new or updated table and check:

* Column names and data types
* Date and number formatting
* Empty values
* Relationship fields that may need to be configured manually

If the import does not look right, adjust the source file and import again before building screens or automations on top of the table.

## Notes

* CSV imports need a header row
* JSON imports use the same import flow
* Rows without a matching identifier are imported as new records
