---
title: CouchDB
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
Apache CouchDB is an open-source NoSQL database.

At Budibase we use CouchDB as the underlying technology of our internal [Budibase DB](doc:budibasedb).

## Connect

To start, click on the `Add source` button of the **Data** section, select *CouchDB*, and click `Continue`.

<Image alt="CouchDB datasource" align="center" src="https://files.readme.io/3c00104-Screenshot_2023-02-03_at_13.32.37.png">
  CouchDB datasource
</Image>

Next enter a connection URL and database to connect to. Click `Save and continue to query`.

![](https://files.readme.io/8d8b14b-Screenshot_2023-02-03_at_13.33.28.png)

### Providing a username and password

If you need to authenticate with a username and password, you can that by providing them in the URL as so:

<Image alt="Providing a username and password" align="center" src="https://files.readme.io/0f121ca-Screenshot_2023-02-03_at_13.52.26.png">
  Providing a username and password
</Image>

## Adding a query

You can add a query by clicking `Add query` on the CouchDB configuration page.

![](https://files.readme.io/31cc125-Screenshot_2023-02-03_at_14.09.51.png)

> 🚧 Connecting to a BudibaseDB
>
> You can use this connector to connect to your internal Budibase tables, including the [Users table](doc:users-table).
>
> We recommend that you do not do this, because a bad write/delete could break your apps. 
>
> If you are determined, you will need to [port forward](https://docs.budibase.com/docs/accessing-couchdb).

There are a number of query types available, which are chosen from the *Function* dropdown.

![](https://files.readme.io/93e9756-Screenshot_2023-02-03_at_14.15.18.png)

For more information on query syntax for this connector, you can look at the [PouchDB API docs](https://pouchdb.com/api.html).

### Read

Performs an **allDocs** query against your configured database. If you choose to provide no query body, you still need to add `{}` into the box.

![](https://files.readme.io/313251b-Screenshot_2023-02-03_at_14.22.41.png)

### Get / Delete

Allows you to retrieve or remove a single document by **id**.

In this example a <Glossary>Binding</Glossary> called *doc\_id* is being used, so that the query can be used to obtain any document specified in your app. See more here: [Custom queries](doc:custom-queries) 

![](https://files.readme.io/8101bbd-Screenshot_2023-02-03_at_14.24.26.png)

### Create / Update

More here: [https://pouchdb.com/api.html#create\_document](https://pouchdb.com/api.html#create_document).

Provide a JSON payload. In the case of *Update* you will need to specify a document **\_id**. 

When creating a document you do not need to provide an id. An automatically generated id will be returned in the response.

![](https://files.readme.io/66c17e8-Screenshot_2023-02-03_at_14.37.46.png)
