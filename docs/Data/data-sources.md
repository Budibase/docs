---
title: Datasources
excerpt: Connecting Budibase to databases and APIs
deprecated: false
hidden: false
metadata:
  title: ''
  description: ''
  robots: index
next:
  description: ''
---
Budibase can store your data inside the [native internal database](doc:budibasedb) (CouchDB). This is the default datasource unless you opt to connect another datasource to Budibase.

[block:image]
{
  "images": [
    {
      "image": [
        "https://files.readme.io/871c14b5e6a9cc7be62d9e033fc4e01215b6cc46d441197a116ec1b82a73ef32-Screenshot_2024-11-18_at_14.03.12.png",
        null,
        "List of app datasources"
      ],
      "align": "center",
      "caption": "List of app datasources"
    }
  ]
}
[/block]


Budibase supports connection to a range of remote datasources. More information about connecting Budibase to each of these datasources is nested in this section of the documentation.

Furthermore, if a datasource you want to use is missing, it is possible to build a [custom datasource](https://docs.budibase.com/docs/custom-datasource).

## Schema

When [Fetching tables](https://docs.budibase.com/docs/sql-datasource#fetching-tables) from external SQL databases, Budibase will attempt to match the external data types to the internal [Budibase DB](https://docs.budibase.com/docs/budibasedb) types. These default types can be changed by clicking the three dots icon beside the table column, and selecting `Edit column`:

[block:image]
{
  "images": [
    {
      "image": [
        "https://files.readme.io/9cf0e74302083a93b28cb4462fd4c91adb79704a8dce1abfddf34692f5f71148-Screen_Recording_2024-11-18_at_14.11.39.gif",
        null,
        "Editing a column type, demonstrated on an MS SQL database"
      ],
      "align": "center",
      "caption": "Editing a column type, demonstrated on an MS SQL database"
    }
  ]
}
[/block]


[block:image]
{
  "images": [
    {
      "image": [
        "https://files.readme.io/3d31beae646454b039d6d5c5d4a03451eb1eb57b0f32bab14018c98e923ccd29-Screenshot_2024-11-18_at_14.06.43.png",
        null,
        "Column types displayed in a dropdown when creating a new column for the internal Budibase DB"
      ],
      "align": "center",
      "caption": "Column types displayed in a dropdown when creating a new column for the internal Budibase DB"
    }
  ]
}
[/block]


For other basic datasources and [Custom queries](https://docs.budibase.com/docs/data-sources#custom-queries), the schema will be determined by selecting types in the query output.

[block:image]
{
  "images": [
    {
      "image": [
        "https://files.readme.io/4b2ab33a732fb6d85217064e3b6ee54695bcac99e9a53d3054673e8026e3ecbc-Screenshot_2024-11-18_at_14.28.44.png",
        null,
        ""
      ],
      "align": "center"
    }
  ]
}
[/block]


The schema is important, as it will affect how [sorting and filtering](https://docs.budibase.com/docs/data-provider#pagination-and-sorting) is applied in the design section.

## Sample data

Budibase provides the option of adding some sample data to allow new users to explore the various [Data types](https://docs.budibase.com/docs/budibasedb#data-types) available, and quickly build an app for learning purposes. While it is an internal Budibase DB source, it will be kept separate to the other internal DB tables that you create. 

[block:image]
{
  "images": [
    {
      "image": [
        "https://files.readme.io/059e435-Screenshot_2024-01-16_at_10.29.58.png",
        "",
        "Use sample data"
      ],
      "align": "center",
      "caption": "Use sample data"
    }
  ]
}
[/block]


If you do not need this data, it can easily be removed in the same way as other additional datasources. Simply click on the ellipsis to the right of the sample data source and click _Delete_.

[block:image]
{
  "images": [
    {
      "image": [
        "https://files.readme.io/fbec395-Screenshot_2024-01-16_at_10.30.56.png",
        null,
        "Sample data"
      ],
      "align": "center",
      "caption": "Deleting sample data"
    }
  ]
}
[/block]


## Security

When connecting to an external datasource you must allow Budibase access. Normally datasources will be protected by a firewall and you will need to open firewall access to your datasource from the Budibase cloud or from your self-hosted Budibase. Port numbers and user management differ across each type of datasource so if you have difficulty connecting you should speak to the Database Administrator for your organisation.

<br />

***

<br />

# Custom queries

Budibase supports the ability to write custom queries. These queries can be really useful if you want to perform advanced joins or server-side filtering.

To write custom queries, head over to your <<glossary:Datasource>>, and scroll down until you find the queries section. Click the `Add Query` button, which will guide you to a form to configure your query. 

> 📘 Budibase DB
> 
> The internal Budibase DB is a unique datasource that does not support custom queries.  
> It does however support [Views](https://docs.budibase.com/docs/views)

An example would be to query all pet names from a specific owner. For this demonstration we've used a custom binding to insert the `ownerID` into the query.

![](https://files.readme.io/3ffa1e1-4a73ef1-query-owners-pets.png "4a73ef1-query-owners-pets.png")

> 📘 Read or Write
> 
> If you want to use a custom query with a [Data provider](doc:data-provider), you must select **Read** as the function of your query.
> 
> Other query types, such as Create, can be used by the [Execute Query action](https://docs.budibase.com/docs/data-sources#tutorial-posting-form-data-to-a-custom-query).

## Using query bindings

You can also override the default binding values. 

When you use the query as a data source for your provider, you can click on the cog icon.

[block:image]
{
  "images": [
    {
      "image": [
        "https://files.readme.io/57a650621aadab43d4eafa8f9388d1ffc177ca7197536cc91447883962dff0c4-Screenshot_2024-11-18_at_14.43.48.png",
        "Screenshot 2022-04-04 at 14.52.37.png",
        ""
      ],
      "align": "center"
    }
  ]
}
[/block]


This will show a query bindings drawer where you can add a dynamic value to override the default.

![](https://files.readme.io/42caffe-Screenshot_2022-04-04_at_14.59.01.png "Screenshot 2022-04-04 at 14.59.01.png")

## Editing custom queries

A list of your custom queries can be found underneath the associated data sources. Click on the query to be able to edit the config. 

It is also possible to **delete** queries that are no longer needed, or **duplicate** queries, which can useful in cases where an additional query only requires minor changes. 

To access these options, hover over the query and click the **…** 

[block:image]
{
  "images": [
    {
      "image": [
        "https://files.readme.io/7e1448b97d5f0bb9da4102944f59fe3d08a7017503e8163f3a45b22dacf233ed-59bba93f-75d9-47f1-a384-0230567b52c9.png",
        "Screenshot 2022-05-09 at 08.59.35.png",
        null
      ],
      "align": "center"
    }
  ]
}
[/block]


## Tutorial: Posting form data to a custom query

1. Add your query to a datasource, in this example we'll use [PostgreSQL](https://docs.budibase.com/docs/postgresql-1). Add your bindings with some optional defaults, and then reference them within your query.

![](https://files.readme.io/c3c5a07-Screenshot_2022-11-15_at_11.15.59.png)

2. Add a [Form](doc:forms) with fields for each of the bindings, except for the _id_ which will come from the [URL ID](https://docs.budibase.com/docs/url-parameters) binding.

![](https://files.readme.io/7ebc1ef-Screenshot_2022-11-15_at_12.47.12.png)

3. **Define actions** for the 'Submit' button. Choose the **Execute Query** action and pick _PostgreSQL_ as the datasource. You should now be able to see and select your custom query.

![](https://files.readme.io/b2e874e-Screenshot_2022-11-15_at_12.49.34.png)

4. Finally map your form field bindings to your custom query bindings like so:

![](https://files.readme.io/382af3b-Screenshot_2022-11-15_at_12.51.51.png)

Click **Save** to finish.