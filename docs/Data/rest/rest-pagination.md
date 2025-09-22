---
title: REST pagination
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
Paginated REST API calls can be connected to a paginated Table. 

To setup, click on the  'Pagination' tab of your REST Query.
[block:api-header]
{
  "title": "Configuration"
}
[/block]
**Pagination type:** 
 - Page number based
 - Cursor based

**Pagination parameters location**: The location that the paging parameters should be injected. 
 - Query params
 - Request body
[block:callout]
{
  "type": "warning",
  "title": "Param Conflicts",
  "body": "Make sure that the field names used in the Pagination tab do not conflict with any names used in the Params tab of your query."
}
[/block]
----

[block:parameters]
{
  "data": {
    "h-0": "Page Number Based",
    "h-1": "Cursor Based",
    "0-0": "**Page number name**:\nQuery/Request Body field name for the page number",
    "1-0": "**Page size name**:\nQuery/Request Body field name for the page size",
    "0-1": "**Request cursor name**: Query/Request Body field name for the cursor token",
    "1-1": "**Request limit name**:\nQuery/Request Body field name for the max results",
    "2-1": "**Response body name for cursor**:\nResponse Body field path for the next cursor token.\n\n_This path will be taken directly from the API response before transformation_"
  },
  "cols": 2,
  "rows": 3
}
[/block]
----

[block:callout]
{
  "type": "info",
  "title": "Before and After Cursors",
  "body": "Some API's offer a before and after cursor. Budibase only takes a 'next' token, however as you iterate forward through the table, the tokens of the previous pages are automatically kept in memory and used when stepping backwards.\n\nWith that in mind, you could also use the API's 'before' token to paginate results in reverse order."
}
[/block]
You can then select this query as the data source for a table, making sure the 'Paginate' checkbox is ticked.

----


[block:api-header]
{
  "title": "Example: Recent Tweets"
}
[/block]
For this example, we will be using Twitter's recent tweets API as it supports cursor based pagination: 
https://developer.twitter.com/en/docs/twitter-api/tweets/search/api-reference/get-tweets-search-recent

1. Create a new REST Datasource. Add in your Bearer token for Authentication.

2. Click **Add query** and input **GET**: https://api.twitter.com/2/tweets/search/recent 

3. Add some query params:
[block:image]
{
  "images": [
    {
      "image": [
        "https://files.readme.io/9f6b3ff-Screenshot_2022-03-24_at_16.13.48.png",
        "Screenshot 2022-03-24 at 16.13.48.png",
        1262,
        424,
        "#1c1c1d"
      ]
    }
  ]
}
[/block]
4. Add the pagination params:
[block:image]
{
  "images": [
    {
      "image": [
        "https://files.readme.io/696e500-Screenshot_2022-03-24_at_16.17.14.png",
        "Screenshot 2022-03-24 at 16.17.14.png",
        1262,
        424,
        "#1e1f1f"
      ]
    }
  ]
}
[/block]
5. Exclude the meta data from the response using the transformer, and click 'Send'. 
Under the Schema tab, undesired fields can be removed with the 'X'. 
Then click 'Save'.
[block:image]
{
  "images": [
    {
      "image": [
        "https://files.readme.io/e674577-Screenshot_2022-03-24_at_16.18.25.png",
        "Screenshot 2022-03-24 at 16.18.25.png",
        980,
        853,
        "#191e23"
      ]
    }
  ]
}
[/block]
6. Finally a paginated table can be created, linked to our query datasource:
[block:image]
{
  "images": [
    {
      "image": [
        "https://files.readme.io/3b4392a-Screenshot_2022-03-24_at_16.23.02.png",
        "Screenshot 2022-03-24 at 16.23.02.png",
        980,
        881,
        "#a3a3a4"
      ]
    }
  ]
}
[/block]