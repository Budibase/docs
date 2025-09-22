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

## Configuration

**Pagination type:** 

- Page number based
- Cursor based

**Pagination parameters location**: The location that the paging parameters should be injected. 

- Query params
- Request body

> 🚧 Param Conflicts
> 
> Make sure that the field names used in the Pagination tab do not conflict with any names used in the Params tab of your query.

***

[block:parameters]
{
  "data": {
    "h-0": "Page Number Based",
    "h-1": "Cursor Based",
    "0-0": "**Page number name**:  \nQuery/Request Body field name for the page number",
    "0-1": "**Request cursor name**: Query/Request Body field name for the cursor token",
    "1-0": "**Page size name**:  \nQuery/Request Body field name for the page size",
    "1-1": "**Request limit name**:  \nQuery/Request Body field name for the max results",
    "2-0": "",
    "2-1": "**Response body name for cursor**:  \nResponse Body field path for the next cursor token.  \n  \n_This path will be taken directly from the API response before transformation_"
  },
  "cols": 2,
  "rows": 3,
  "align": [
    "left",
    "left"
  ]
}
[/block]


***

> 📘 Before and After Cursors
> 
> Some API's offer a before and after cursor. Budibase only takes a 'next' token, however as you iterate forward through the table, the tokens of the previous pages are automatically kept in memory and used when stepping backwards.
> 
> With that in mind, you could also use the API's 'before' token to paginate results in reverse order.

You can then select this query as the data source for a table, making sure the 'Paginate' checkbox is ticked.

***

## Example: Public API

For this example, we will be using Budibase's public API as it supports page number based pagination: <https://docs.budibase.com/reference/rowsearch>. We will also be using a sample table for this.

1. Create a new REST Datasource. Add the below settings to your headers and click the save button
   1. content-type -> set to application/json
   2. x-budibase-app-id (Can be found in your URL of the table you wish to search with)
   3. x-budibase-api-key You can find your api key [here](doc:user-settings#view-api-key)

2. Click **Add query** and input: <https://budibase.app/api/public/v1/tables/ta_bb_employee/rows/search>

3. Change the method to **POST**

4. Switch to the body tab and select raw and add your search object
   ```Text JSON
   {"query": {"string": {"First Name": ""}}, "limit": 2, "paginate": true, "bookmark": 1}
   ```

[block:image]
{
  "images": [
    {
      "image": [
        "https://files.readme.io/0f66c33c760d721d762d1aa3770eb96447ec8e27bf3a6bfcc4f11885ee975f58-Screenshot_2024-12-18_at_14.19.21.png",
        "Screenshot 2022-03-24 at 16.13.48.png",
        1262
      ],
      "align": "center"
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
        "https://files.readme.io/258c7f52a43c9a70170f6b164a39d3343ed343c2798e7af4f5fca016184bfadf-Screenshot_2024-12-18_at_14.19.51.png",
        "Screenshot 2022-03-24 at 16.17.14.png",
        1262
      ],
      "align": "center"
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
        "https://files.readme.io/cbf293b54360c9526fad3a2a66479ea06fa4964b1c23e6cf4a23ad7281666b84-Screenshot_2024-12-18_at_14.20.26.png",
        "Screenshot 2022-03-24 at 16.18.25.png",
        980
      ],
      "align": "center"
    }
  ]
}
[/block]


6. Finally a paginated table can be created with the help of a data provider being used as the source of the table.

[block:image]
{
  "images": [
    {
      "image": [
        "https://files.readme.io/ed9edf399b1191fd43ea10bc31fed219f3bc7cee2b97c6b76139117eb89121b0-20241218_142221.gif",
        "Screenshot 2022-03-24 at 16.23.02.png",
        980
      ],
      "align": "center"
    }
  ]
}
[/block]