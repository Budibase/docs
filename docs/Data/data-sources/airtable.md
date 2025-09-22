---
title: Airtable
excerpt: ''
deprecated: false
hidden: true
metadata:
  title: ''
  description: ''
  robots: index
next:
  description: ''
---
Airtable can be connected to Budibase through some simple configuration. This allows you to enhance both tools, and let them work together easily.

> 👍 Airtable API page
> 
> Most, if not all, IDs, examples and data structures, for connecting to your Airtable Base(s) can be found in the amazing API reference page from Airtable. They offer a complete API overview entirely tailored to your base. To make the integration with Budibase as smooth as possible, keep the tab open.
> 
> <a href="https://airtable.com/api" target="_blank">Head over to the Airtable API page</a>

## Connect Airtable to Budibase

To connect Airtable to Budibase, you need to add a new Data Source. Head over to the data section in the Budibase UI, and click the `Add source` button in the left navigation. 

![](https://files.readme.io/d7da399-Screenshot_2023-06-27_at_12.10.36.png)

A dialog will open, allowing you to choose which data source you want to add. Choose Airtable, and click continue. 

You will be prompted to enter your API key and the base. You can get your API key from your <a href="https://airtable.com/account" target="_blank">Account page inside Airtable</a>. To retrieve the `base` from Airtable, head over to the <a href="https://airtable.com/api" target="_blank">REST API page</a>. This page should list all your bases for you. Click on the base you want to connect, and the `base ID` should be given to you.

Enter the data into the configuration, and click `Save` to store the details of your integration. This is all you need to do to connect Airtable. The next step, is to query your data.

## Query Airtable data

To query data from your Airtable base, click the `Add query` button below the Airtable configuration

![](https://files.readme.io/02704af-airtable-add-query.png "airtable-add-query.png")

First, enter a name for your query, this is purely cosmetical and has no impact on the inner workings. It will be displayed to you when you pick a data source in a [Data Provider](doc:data-provider) in the Budibase Design section.

Choose the function you want to perform. There are detailed instructions on how to complete each function below.

Then there are the specific fields.

![](https://files.readme.io/da9edcf-airtable-fields.png "airtable-fields.png")

The `Table` field accepts both the table name and the table ID. It is highly recommended to enter the ID as shown above. You can retrieve the ID for your table from the <a href="https://airtable.com/api" target="_blank">Airtable REST API page</a>. 

The `View` field accepts the name of the view you've created in your base. The default is `Grid view` (yes, including a space).

The `NumRecords` field is an optional field, by default all data will be returned, but if you want to limit the results you could enter a number here.

After filling in all these details, you should be able to `Run Query` and then preview the results below the query. If you're happy with the results, you can click the `Save` button.

### Function: read

When you select the `read` function, you will be querying data from Airtable, so you can display it in your application. You don't need any further instructions based on the configuration you've already done above. 

### Function: create

When you choose the `Create` function, you will be able to insert records directly into your Airtable view. A `Query` field will be displayed, in which you can enter a `JSON` object for a single records, like so

```json
{
  "Name": "The Budibase Card",
  "Start date": "2022-03-29",
  "Deadline": "2022-03-31",
  "Status": "To do",
  "Priority": "High"
}
```

The structure of course depends on what kind of data you're storing inside your Airtable. Luckily you can find this structure easily in the API page of Airtable, but you could also use the `Read` function to fetch the data you already have stored in your Airtable.

Once you're happy with your data, click the `Run Query` button, and you should see your newly created data appear in Airtable directly.

### Function: update

The `Update` function works almost the same as the `Create` function, the only difference is: you need a record ID in addition to the table name. You can find the record ID by doing a `Read` function first, store the record ID, and then send an `Update` function. This is where [Bindings](doc:bindings) come in.

### Function: delete

The `Delete` function also requires a query, but this time much simpler than `Create` and `Update`. All you have to provide is the `ID` and the `deleted` boolean, like so:

```json
{
  "id": "rechNCPnvIRob8Ytz",
  "deleted": true
}
```

You can retrieve the ID of the data you want to Delete using a `Read` function. If you want to integrate this into your UI, you will have to look into [Bindings](doc:bindings).

## Bindings

Bindings in Queries allow you to insert data when using the query. You can use HandleBar [Bindings](doc:bindings) inside the query. A simple, but common, example of a binding would be a record ID. This allows you to, for example, update a single record based on a binding you've specified, even from the UI of your application.

Let's take a look at an example where we pass the ID from a binding into the query. Our binding looks like this.

![](https://files.readme.io/6af491a-mongodb-binding.png "airtable-binding.png")

Then, adjusting our query, we add the `id` using handlebars directly into the string

![](https://files.readme.io/7902140-airtable-binding.png "airtable-binding.png")

Now, wherever you use the created query as a data source in a [Data Provider](doc:data-provider), you can configure the bindings directly from there, using the gearwheel behind the provider selection

![](https://files.readme.io/b7a426f-airtable-query-selector.png "airtable-query-selector.png")

This will then open up the configuration modal, where you can bind the value, for example using a [Form](doc:forms) input. 

![](https://files.readme.io/d6e9ca3-mongodb-query-binding.png "airtable-query-binding.png")

## Retrieving relational data

You can have relationships between Airtables, however there is no joining functionality. Instead you must make two REST calls.

This means two [Data providers](doc:data-provider) with a filter will be involved in order to display the related data within your app.

You can also use [Action chaining](doc:chaining-actions) to aggregate the data of multiple tables from one button click. 

In this example there are many classes with many students.

1. Within Airtable, add a RecordID column to your Students table. This will allow us to filter for the students that attend a particular class.

![](https://files.readme.io/d1bd779-Screenshot_2022-07-15_at_13.43.39.png)

2. Also within Airtable, link your Classes table to your Students table. 

![](https://files.readme.io/aa1ae3f-Screenshot_2022-07-15_at_13.48.22.png)

3. Add a read query for the class table. 

![](https://files.readme.io/4772010-Screenshot_2022-07-15_at_13.51.12.png)

4. Add a read query for the students table.

![](https://files.readme.io/7e47bb9-Screenshot_2022-07-15_at_13.52.40.png)

5. In the Design section, add a [Repeater Block](https://docs.budibase.com/docs/blocks#repeater-block) for the Classes query, and a [Table Block](https://docs.budibase.com/docs/blocks#table-block) nested underneath for the Students query.  
   You can add the class title for each of the student tables, and configure the columns to avoid adding the id strings.
6. Add a filter to the students table block as follows:         

![](https://files.readme.io/31285cf-Screenshot_2022-07-15_at_14.04.46.png)

7. The final result should appear as follows:

![](https://files.readme.io/1558128-Screenshot_2022-07-15_at_14.07.33.png)