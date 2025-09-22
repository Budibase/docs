---
title: MongoDB
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
MongoDB is a modern NoSQL database, that can be connected to Budibase with a few clicks. 

Before we get started, make sure you've got the following: 

* `ConnectionString` for connecting to the database remotely including username and password
* The Database name 

In addition, ensure you have added the Budibase IP to the Mongo Atlas IP Access List.\
Check [Whitelisting](doc:whitelisting) for the Budibase IP if you're using the cloud-hosted solution.

Now that you have everything you need to hook up your MongoDB installation to Budibase, let's get started.

> 📘 ConnectionString
>
> Don't know how to get the ConnectionString? Check this useful [guide by MongoDB](https://docs.mongodb.com/drivers/node/current/fundamentals/connection/).

> 👍 Don't have a MongoDB instance?
>
> The easiest way to get started is by signing up for the (from) free offering from Mongo directly: <a href="https://www.mongodb.com/atlas/database" target="_blank">MongoDB Atlas</a>. We've also used MongoDB Atlas for writing this guide, and testing our integrations!

## Connect your MongoDB

To connect your MongoDB <Glossary>Data Source</Glossary>, head over to the data section in the Budibase builder UI. Then, click the `Add source` button in the left-hand settings panel to add a new data source.

<Image alt="Press the `+` icon to add a data source" align="center" src="https://files.readme.io/7a77d59-Screenshot_2023-06-27_at_12.10.36.png">
  Press the `+` icon to add a data source
</Image>

You will be presented a dialog, in which you choose `MongoDB`. Then you will be presented with the connection configuration.

<Image title="mongo-connectionstring.jpeg" alt={673} align="center" src="https://files.readme.io/7acce0f-mongo-connectionstring.jpeg">
  A standard connectionstring when connecting to MongoDB Atlas
</Image>

Paste your ConnectionString, and enter the database name which you want to connect with, and click `Save and continue to query`.

Pressing this button will save the ConnectionString into your Budibase installation. 

> 📘 Connect to MongoDB Atlas
>
> Connecting to a hosted instance of MongoDB Atlas should be straightforward, but do check the useful guide on <a href="https://www.mongodb.com/docs/atlas/connect-to-database-deployment/#use-the-connect-to-your-database-deployment-dialog-to-connect" target="_blank">connecting to a database</a>

## Adding a query

Now that you have added the connection to your database, you can start querying your data to use it straight away in your application.

The first step is to click the 'Add query' button, which is located on the data source page you just added. If you're not on this page, click on the MongoDB connection in the list of data sources on the left.

![](https://files.readme.io/29d5e4b-queries.png "queries.png")

### Query configuration

![](https://files.readme.io/d478411-query-configuration.png "query-configuration.png")

Configuring your query is essential in making sure it runs correctly. In the table below you'll find what each field means.

| Field        | Description                                                                                                                                               |
| :----------- | :-------------------------------------------------------------------------------------------------------------------------------------------------------- |
| Query Name   | The name you want to give the query, this is a visual name. The name is used when selecting a <Glossary>Data Sources</Glossary> inside the design section |
| Function     | The action you want to perform. This is a MongoDB specified function. Choosing a function influences the options you get offered to you for actionTypes   |
| Access Level | Which level do you want to be able to access this query?                                                                                                  |
| Collection   | The MongoDB collection you want to query                                                                                                                  |
| Action Types | The action-type defined by MongoDB, based on the Function you've selected.                                                                                |

> 👍 What do the action types mean?
>
> The action types are defined by MongoDB. You can read more about those in the [MongoDB Documentation](https://docs.mongodb.com/v4.4/reference/method/js-collection/)

### Create query

You have the option to insert one or many documents into a collection. 

When inserting a single document, provide a payload within the query box. 

![](https://files.readme.io/cd3e4b3-Screenshot_2022-06-17_at_11.50.46.png "Screenshot 2022-06-17 at 11.50.46.png")

In this case, an ObjectId is automatically generated for the new document.\
If you want to specify an ObjectId, you can do that as follows: 

![](https://files.readme.io/2a5b095-Screenshot_2022-06-17_at_11.54.46.png "Screenshot 2022-06-17 at 11.54.46.png")

> 🚧 Document ID
>
> In MongoDB you can use most data types as a document ID, however the default and recommended type is [ObjectId](https://www.mongodb.com/docs/manual/reference/method/ObjectId/)

When inserting many, you must provide an array of objects.

![](https://files.readme.io/1139ebd-Screenshot_2022-06-17_at_12.03.59.png "Screenshot 2022-06-17 at 12.03.59.png")

### Read query

The most basic query you can do is a *find* with no query body.\
This will return all data available within the specified collection.

![](https://files.readme.io/b80361e-Screenshot_2022-06-17_at_11.44.02.png "Screenshot 2022-06-17 at 11.44.02.png")

A filter object can be added to the query box. For example, get all documents in the collection where age is greater than 40:

![](https://files.readme.io/18cecf7-Screenshot_2022-06-17_at_11.43.33.png "Screenshot 2022-06-17 at 11.43.33.png")

A full list of query operators can be found here: [https://www.mongodb.com/docs/manual/reference/operator/query/](https://www.mongodb.com/docs/manual/reference/operator/query/)

### Update query

When performing an update you must provide two objects:

1. **uired]** F** Filter - find the documents to change.
2. **uired]** U** Update - instructions for the modifications to make.
3. **ional]** O** Options - additional update parameters (more [here](https://www.mongodb.com/docs/v4.4/reference/method/db.collection.updateOne/))

For example, set the *retired* property to true for all documents that have an age over 65:

![](https://files.readme.io/f5d94e4-Screenshot_2022-06-17_at_12.23.37.png "Screenshot 2022-06-17 at 12.23.37.png")

If *updateOne* was used instead, then only the first filter match would have been updated.

A full list of update operators can be found here: [https://www.mongodb.com/docs/manual/reference/operator/update/](https://www.mongodb.com/docs/manual/reference/operator/update/)

### Delete query

To delete ALL records from a collection, run a query with no filter and the *deleteMany* action type set.\
**Careful!**

Otherwise, you can add a filter to delete all matching records: 

![](https://files.readme.io/b172b92-Screenshot_2022-06-17_at_17.13.47.png "Screenshot 2022-06-17 at 17.13.47.png")

If *deleteOne* was used instead, then only the first filter match would have been deleted.

In addition, a number of non-mandatory options are available: [https://www.mongodb.com/docs/v4.4/reference/method/db.collection.deleteOne/](https://www.mongodb.com/docs/v4.4/reference/method/db.collection.deleteOne/)

> 🚧 Stringify the queries
>
> If you take a look at the MongoDB documentation, and you find queries there, they're most likely not stringified. As the `Fields` box only supports JSON objects, you should convert it to strings.

### Bindings

Bindings in Queries allow you to insert data when using the query. You can use Handlebar [Bindings](doc:bindings) inside the query. A simple, but common, example of a binding would be an ObjectID. This allows you to query a single ID based on a binding you've specified, even from the UI of your application.

Let's take a look at an example where we pass the ID from a binding into the query. Our binding looks like this.

![](https://files.readme.io/f13b018-Screenshot_2022-06-17_at_12.51.35.png "Screenshot 2022-06-17 at 12.51.35.png")

Then, adjusting our query, we add the `id` using handlebars directly into the string

![](https://files.readme.io/2830edf-Screenshot_2022-06-17_at_12.47.08.png "Screenshot 2022-06-17 at 12.47.08.png")

Now, wherever you use the created query as a data source in a [Data Provider](doc:data-provider), you can configure the bindings directly from there, using the gearwheel behind the provider selection

![](https://files.readme.io/c136975-configure-binding.png "configure-binding.png")

This will then open up the configuration modal, where you can bind the value, for example using a [Form](doc:forms) input. 

![](https://files.readme.io/d6e9ca3-mongodb-query-binding.png "mongodb-query-binding.png")

### Transformer

The transformer is intended for you to have a layer between the data received from your MongoDB database, and how it ends up in your interface. By default you `return` the data directly received, but manipulating, or restructuring, data in the transformer can be very useful to be able to limit what is returned, or to make it more eye-friendly.

The `transformer` box accepts JavaScript, and is ran within a function. This means you have to return the data you want to get back from the query.

> 👍 Transformer
>
> To understand how Transformers work, read about them on the [Transformers page](doc:transformers)

## Saving the query

Now that you have configured the entire query correctly, it's time to save the query. You can't save the query without running it first so we know it actually is working.

So the first thing you want to do now, is click the `Run Query` button

![](https://files.readme.io/b2b5724-mongo-run-query.png "mongo-run-query.png")

As soon as you click the button, the query will be executed. When the query is successful, the result will be displayed below. There you can inspect the result, configure the schema and preview it in a table.

![](https://files.readme.io/70ff61e-mongo-runquery-result.png "mongo-runquery-result.png")

### Configuring schema

Configuring the schema is important for Budibase, as it allows the interface to understand what kind of data it is dealing with. In order for you to configure the data, click the `Schema` Tab, which is next to the `JSON` tab in the results section. You should then be presented with a page like this:

![](https://files.readme.io/2edbd43-mongo-results-schema.png "mongo-results-schema.png")

## Aggregations

MongoDB aggregations allow multiple documents to be grouped and processed. 

This is done through *pipelines* which contain a number of *stages*. More from the official docs here: [MongoDB aggregations](https://www.mongodb.com/docs/manual/aggregation/).

To use aggregations within Budibase, select the **Aggregate** function.

![](https://files.readme.io/db42f82-Screenshot_2022-11-11_at_10.34.04.png)

There are two modes in which you can interact with aggregations: JSON and Pipeline.

### Json

This is the default mode. Simply enter an array of stages to be processed.

![](https://files.readme.io/95a2d7d-Screenshot_2022-11-11_at_10.42.11.png)

### Pipeline

Whilst the JSON mode can do everything you need, you may find the GUI mode makes your pipeline easier to manage. 

Add as many stages as you like with the `+` button, delete stages with the trashcan icon, and use the arrows to swap stages.

![](https://files.readme.io/0efef57-Screenshot_2022-11-11_at_10.47.35.png)

A benefit of using the Pipeline mode is that it provides the available aggregation stages in a dropdown, and selecting a stage will fill out a template of relevant properties, which can be easily altered.

***

<br />

## Video tutorial

<Embed url="https://www.youtube.com/watch?v=OjGZ841KgBk" title="How to build a MongoDB admin panel in just a few minutes | Budibase | MongoDB" favicon="https://www.google.com/favicon.ico" image="https://i.ytimg.com/vi/OjGZ841KgBk/hqdefault.jpg" provider="youtube.com" href="https://www.youtube.com/watch?v=OjGZ841KgBk" typeOfEmbed="youtube" html="%3Ciframe%20class%3D%22embedly-embed%22%20src%3D%22%2F%2Fcdn.embedly.com%2Fwidgets%2Fmedia.html%3Fsrc%3Dhttps%253A%252F%252Fwww.youtube.com%252Fembed%252FOjGZ841KgBk%253Ffeature%253Doembed%26display_name%3DYouTube%26url%3Dhttps%253A%252F%252Fwww.youtube.com%252Fwatch%253Fv%253DOjGZ841KgBk%26image%3Dhttps%253A%252F%252Fi.ytimg.com%252Fvi%252FOjGZ841KgBk%252Fhqdefault.jpg%26key%3D7788cb384c9f4d5dbbdbeffd9fe4b92f%26type%3Dtext%252Fhtml%26schema%3Dyoutube%22%20width%3D%22854%22%20height%3D%22480%22%20scrolling%3D%22no%22%20title%3D%22YouTube%20embed%22%20frameborder%3D%220%22%20allow%3D%22autoplay%3B%20fullscreen%22%20allowfullscreen%3D%22true%22%3E%3C%2Fiframe%3E" />
