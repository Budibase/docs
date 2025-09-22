---
title: Google Sheets
excerpt: ''
deprecated: false
hidden: false
metadata:
  title: ''
  description: ''
  robots: index
next:
  description: ''
---
Google Sheets is a spreadsheet program included as part of the free, web-based Google Docs Editors suite.

## Setup

Navigate to the spreadsheet you want to integrate into Budibase. Copy the URL.

![](https://files.readme.io/5feaf25-Screenshot_2022-09-05_at_11.21.27.png)

## Connect

Click the `+` button to add a datasource, and then select 'Google Sheets'.

![](https://files.readme.io/8cfccf3d2fe0b0b2036d898f42f57945fcd26697df5126e30dceab677fe78bab-image.png)

You will then be prompted to sign-in with a Google account. This account should have permissions to view the spreadsheet you want to work with.

![](https://files.readme.io/096a6ca-Screenshot_2022-09-05_at_11.27.31.png)

Allow Budibase to access your Google account.

![](https://files.readme.io/b32a6e1-Screenshot_2022-09-05_at_11.29.01.png)

> ❗️ Self-hosting
>
> If you are self-hosted, you will need to setup [Google SSO](https://docs.budibase.com/docs/sso-with-google)

Once you have authenticated with Google, you will be asked to provide your Google Sheet URL

![](https://files.readme.io/e03a8b1-Screenshot_2023-06-27_at_12.26.03.png)

Once Budibase successfully connects to your Google Sheet, you can select which worksheets to import (or skip): 

![](https://files.readme.io/fb85e77-Screenshot_2023-06-27_at_12.26.10.png)

> 🚧 Header row needed
>
> Your worksheets will need to have a header row to successfully import into Budibase. Your header row must be the first row in each sheet.

## Data view

Each sheet can be viewed and edited as a grid within the Budibase builder. 

![](https://files.readme.io/bdfb0bd9c762c62a57a2ccb506f6519cf2da6cd331034e04d7b6b4a8ba2c588b-image.png)

You can edit columns, add rows, edit rows and delete rows via the Grid interface. Changes made in Budibase will be reflected in that sheet of your Google spreadsheet. You can also create views that will not be reflected in your Google Sheet, but will help you visualise existing data.

![](https://files.readme.io/16e9bdc-Screenshot_2023-06-27_at_12.34.04.png)

In addition, Google Sheets data tables can utilise the row actions, such as [Save Row](https://docs.budibase.com/docs/actions#save-row) and be used as a [Form schema](https://docs.budibase.com/docs/forms#form-schema)

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

![](https://files.readme.io/fd66d8ef963f4adb57b475f0e711689a540fed6612997dc0e8fd9c37c52ce7f3-image.png)

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
