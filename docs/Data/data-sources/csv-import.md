---
title: CSV Import
excerpt: Importing a CSV or JSON into Budibase as a table
deprecated: false
hidden: false
metadata:
  title: ''
  description: ''
  robots: index
next:
  description: ''
---
When you already have existing data, you can import this using a CSV file, which will create a new table in the internal [Budibase DB](doc:budibasedb). This will automatically identify columns and create them for you, after which you can specify data types per column. 

1. Click `Add source` and select `Upload CSV / JSON`.

![](https://files.readme.io/43e243af5476f19482f320a113f233a64d2f742c8eef8e877f5fe8e202eefbfc-image.png)

2. Click `Continue`. You will now see a modal in which you can enter a table name.

![](https://files.readme.io/e178d1252880767f4d27a60dec8ffcd9d65e5e396692acb3f794ac61c7d72072-image.png)

3. Click `Upload` and select the CSV or JSON file you want to import.

> 📘 Column names
> 
> When importing a CSV, the first row will be used to determine the column names.

In the example below, I imported a CSV with 4 columns representing a table of countries. After the file was uploaded, the screen below was shown.

![](https://files.readme.io/e3cb064-csv-data-types.png "csv-data-types.png")

As you can see, it automatically identified the 4 columns and allowed me to pick the data types for each column.

4. Click `Create` to build a new table from your imported CSV/JSON file.

<br />

## Importing rows into an existing table

You may find that you want to update an existing table with new CSV/JSON data. To do so, click on the Budibase table you want to import into. Next click the `Import` button.

![](https://files.readme.io/f1a71270cb420c2d3e3c1ca2b89b1025072d3164c903b21d178fc9e56bef53eb-image.png)

Once you have selected a file, Budibase will match the column names from the CSV against the destination table. Column names that do not match will be ignored, and the modal will highlight the offending fields:

![](https://files.readme.io/33448a3-csv-4c.png)

Click `Import` to pull in the new rows.

## Updating rows with CSV

This is done in a similar fashion to importing a CSV for creating rows. The only difference being, is a toggle at the bottom which needs checked `Update existing rows`. Additionally, an identifier field needs selected. The purpose of this field is to check for records that are already existing. If one is found in the database that matches the CSV. Then this record will be updated with the CSV's data instead of a new record being created.

[block:image]
{
  "images": [
    {
      "image": [
        "https://files.readme.io/56ab4dd-Screenshot_2023-09-20_at_15.43.18.png",
        "",
        "An image depicting how to use the CSV import to update fields instead of creating new ones."
      ],
      "align": "center"
    }
  ]
}
[/block]


> 🚧 Duplicate records
> 
> As an **\_id** field is only assigned upon import, Budibase does not determine if a row has previously been imported. It will always import any rows provided in the CSV/JSON file.

<br />

> 👍 Reading CSV data from an S3 bucket
> 
> If you have a CSV file in an S3 bucket, you can use the [S3](https://docs.budibase.com/docs/s3#read-csv) connector to read the CSV data.