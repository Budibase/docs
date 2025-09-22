---
title: CSV Import
excerpt: Importing a CSV or JSON into Budibase as a table
deprecated: false
hidden: false
metadata:
  title: ''
  description: ''
  robots: noindex
next:
  description: ''
---
When you already have existing data, you can import this using a CSV file when creating a [Budibase DB](doc:budibasedb) table. This will automatically identify columns and create them for you, after which you can specify data types per column. 

1. Click `Add source` and select `Budibase DB`.

![](https://files.readme.io/aaea6e6-csv-1.png)

2. Click `Continue`. You will now see a modal in which you can enter a table name and select the auto columns you want.

![](https://files.readme.io/eed0bf4-csv-2.png)

3. Click `Upload` and select the CSV or JSON file you want to import.

> 📘 Column names
>
> When importing a CSV, the first row will be used to determine the column names.

In the example below I imported a CSV with 4 columns representing a table of countries. After the file uploaded the screen below was shown.

![](https://files.readme.io/e3cb064-csv-data-types.png "csv-data-types.png")

As you can see, it automatically identified the 4 columns and allowed me to pick the data types for each column.

4. Click `Create` to build a new table from your imported CSV/JSON file.

<br />

## Importing rows into an existing table

You may find that you want to update an existing table with new CSV/JSON data. To do so, click on the Budibase table you want to import into. Next click the `Import` button.

![](https://files.readme.io/d595075-csv-4.png)

![](https://files.readme.io/f29d611-csv-4b.png)

Once you have selected a file, Budibase will match the column names from the CSV against the destination table. Column names that do not match will be ignored, and the modal will highlight the offending fields:

![](https://files.readme.io/33448a3-csv-4c.png)

Click `Import` to pull in the new rows.

> 🚧 Duplicate records
>
> As an **\_id** field is only assigned upon import, Budibase does not determine if a row has previously been imported. It will always import any rows provided in the CSV/JSON file.

<br />

> 👍 Reading CSV data from an S3 bucket
>
> If you have a CSV file in an S3 bucket, you can use the [S3](https://docs.budibase.com/docs/s3#read-csv) connector to read the CSV data.
