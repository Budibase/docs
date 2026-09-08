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

## Create a new table

1. Click `Add source`
2. Select `Upload CSV / JSON`
3. Upload the file
4. Enter a table name
5. Review the detected columns
6. Choose the data type for each column
7. Click `Create`

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

## Notes

* CSV imports need a header row
* JSON imports use the same import flow
* Rows without a matching identifier are imported as new records
