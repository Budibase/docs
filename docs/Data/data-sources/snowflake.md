---
title: Snowflake
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
Snowflake is a solution for data warehousing, data lakes, data engineering, data science, data application development, and securely sharing and consuming shared data.

Whilst you can add primary keys and use Snowflake for OLTP, by default tables do not have primary keys.
Particularly within Budibase, the Snowflake connector is designed for [Custom queries](doc:custom-queries), thus is most appropriate for OLAP purposes.
https://www.snowflake.com/guides/olap-vs-oltp
[block:api-header]
{
  "title": "Setup"
}
[/block]
Snowflake has the following hierarchy for data:

- Warehouse
- Database
- Schema
- Table

To use the Snowflake connector in Budibase, you will need to have each of these elements. 
Upon creation of a new Snowflake account, there will be sample data that you can use to verify your connection. 
[block:image]
{
  "images": [
    {
      "image": [
        "https://files.readme.io/3a7c341-Screenshot_2022-07-04_at_10.47.24.png",
        "Screenshot 2022-07-04 at 10.47.24.png",
        510,
        452,
        "#f2f3f5"
      ]
    }
  ]
}
[/block]
Warehouses can be found and added under the *Admin* tab. The default warehouse is *COMPUTE_WH*.

You will also need your **account name**. This can be found under *Admin > Accounts*.

Click on the clip icon beside the account. The account name will be your snowflakecomputing subdomain, in this case: `hffwdhe-bn85610`
[block:image]
{
  "images": [
    {
      "image": [
        "https://files.readme.io/e5f601c-Screenshot_2022-07-04_at_11.18.43.png",
        "Screenshot 2022-07-04 at 11.18.43.png",
        510,
        532,
        "#f2f3f3"
      ]
    }
  ]
}
[/block]

[block:api-header]
{
  "title": "Connect"
}
[/block]
When you add a new Snowflake <<glossary:Data Source>> you will be presented with a config dialog to fill in.
[block:image]
{
  "images": [
    {
      "image": [
        "https://files.readme.io/d2e759d-Screenshot_2022-07-04_at_12.57.13.png",
        "Screenshot 2022-07-04 at 12.57.13.png",
        609,
        486,
        "#1c1e20"
      ]
    }
  ]
}
[/block]

[block:api-header]
{
  "title": "Query"
}
[/block]
Snowflake can perform the standard SQL queries as you would expect, however it also has some nifty syntax to query JSON as well. 

The sample *WEATHER* schema contains a JSON object with a nested array of weather information. 
This can be seen when running a query via the [SnowSQL CLI] (https://docs.snowflake.com/en/user-guide/snowsql.html)
[block:image]
{
  "images": [
    {
      "image": [
        "https://files.readme.io/a2be443-Screenshot_2022-07-04_at_14.13.55.png",
        "Screenshot 2022-07-04 at 14.13.55.png",
        706,
        665,
        "#316ec9"
      ]
    }
  ]
}
[/block]
This structure can be flattened as needed, and then queried using the `:` notation to grab nested properties.
https://docs.snowflake.com/en/user-guide/querying-semistructured.html
[block:image]
{
  "images": [
    {
      "image": [
        "https://files.readme.io/d15f8a5-Screenshot_2022-07-04_at_14.28.41.png",
        "Screenshot 2022-07-04 at 14.28.41.png",
        679,
        957,
        "#191818"
      ]
    }
  ]
}
[/block]
You can also see how [Bindings](doc:bindings) can be used, in this case as a filter. 

It would be possible to [Transform](doc:transformers) the data rather than do the mapping as part of the query, however this is not advisable as the performance will be much better on the cloud servers. 

 **Preview**
[block:image]
{
  "images": [
    {
      "image": [
        "https://files.readme.io/21489f6-Screenshot_2022-07-04_at_14.32.49.png",
        "Screenshot 2022-07-04 at 14.32.49.png",
        650,
        326,
        "#101010"
      ]
    }
  ]
}
[/block]

[block:callout]
{
  "type": "warning",
  "title": "Limit",
  "body": "A data warehouse query could potentially return huge amounts of data that could strain the UI. \nFor this reason, if you're not targeting specific data with a filter, use a limit in your queries, e.g. SELECT * FROM MyTable LIMIT 1000;"
}
[/block]