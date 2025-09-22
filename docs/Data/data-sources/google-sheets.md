---
title: Google Sheets
excerpt: ''
deprecated: false
hidden: false
metadata:
  title: ''
  description: ''
  robots: noindex
next:
  description: ''
---
Google Sheets is a spreadsheet program included as part of the free, web-based Google Docs Editors suite.

## Setup

Navigate to the spreadsheet you want to integrate into Budibase. Copy the URL.

![](https://files.readme.io/5feaf25-Screenshot_2022-09-05_at_11.21.27.png)

## Connect

Click the plus icon to add a datasource, and then select 'Google Sheets'.

![](https://files.readme.io/95f314e-Screenshot_2022-09-05_at_11.25.34.png)

![](https://files.readme.io/1ee1c34-Screenshot_2022-09-05_at_11.26.43.png)

You will then be prompted to sign-in with a Google account. This account should have permissions to view the spreadsheet you want to work with.

![](https://files.readme.io/096a6ca-Screenshot_2022-09-05_at_11.27.31.png)

Allow Budibase to access your Google account.

![](https://files.readme.io/b32a6e1-Screenshot_2022-09-05_at_11.29.01.png)

> 🚧 Self-hosting
>
> If you are self-hosted, you will need to setup [Google SSO](https://docs.budibase.com/docs/sso-with-google)

You will then be redirected to the Google sheets configuration page in Budibase. Enter a useful name for the spreadsheet and paste in the URL.

Finally click `Fetch tables`. In the context of Google Sheets, each sheet of your spreadsheet will be pulled in as a table:

![](https://files.readme.io/54e0c24-Screenshot_2022-09-05_at_11.36.39.png)

As you can see, the primary key i.e. **\_id** will map to the row number of the sheet.

## Data view

Each sheet can be viewed and edited as a data table within Budibase. 

![](https://files.readme.io/205aefd-Screenshot_2022-09-05_at_11.40.33.png)

You can edit columns, add rows, edit rows and delete rows. Changes made in Budibase will be reflected in that sheet of your Google spreadsheet. 

![](https://files.readme.io/a40ca5c-Screenshot_2022-09-05_at_11.42.43.png)

![](https://files.readme.io/2af5b04-Screenshot_2022-09-05_at_11.43.53.png)

In addition, Google Sheets data tables can utlise the row actions, such as [Save Row](https://docs.budibase.com/docs/actions#save-row) and be used as a [Form schema](https://docs.budibase.com/docs/forms#form-schema)

## Query

The Google Sheets connector supports adding queries for when you might need to [transform data](https://docs.budibase.com/docs/transformers) or perform CRUD operations with specific [bindings](https://docs.budibase.com/docs/custom-queries#using-query-bindings). 

To add a query, select your Google spreadsheet datasource, and click `Add query` at the bottom of the configuration page.

![](https://files.readme.io/a9adb33-Screenshot_2022-09-05_at_12.18.47.png)

### Create

Allows you to insert a row. You must provide the name of the sheet as well as a JSON payload to specify the column names and value.

![](https://files.readme.io/4427cd3-Screenshot_2022-09-05_at_13.04.36.png)

The row number of the created entry will be returned on success.

![](https://files.readme.io/1109724-Screenshot_2022-09-05_at_13.08.11.png)

![](https://files.readme.io/b80505f-Screenshot_2022-09-05_at_13.09.01.png)

### Read

Simply returns all the rows of a specified sheet. The transformer allows you to filter and map the data into the schema you desire. 

### Update

Similar to *Create* in that you must provide a payload of data, however you must also provide a row index to be overwritten. 

> 📘 Row index
>
> Row indexing starts from zero - the first row below the header row (usually the second row).

![](https://files.readme.io/ed9e641-Screenshot_2022-09-05_at_17.04.58.png)

![](https://files.readme.io/052333b-Screenshot_2022-09-05_at_17.05.38.png)

### Delete

The same as *Update*, a sheet name and row index must be provided. That row will be deleted.

![](https://files.readme.io/d755faf-Screenshot_2022-09-05_at_17.07.56.png)

Rows will be shifted up after deletion.

![](https://files.readme.io/07371b1-Screenshot_2022-09-05_at_17.09.23.png)
