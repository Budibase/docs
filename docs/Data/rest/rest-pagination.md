---
title: REST pagination
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
Paginated REST API calls can be connected to a paginated Table. 

To setup, click on the  'Pagination' tab of your REST Query.

## Configuration

**Pagination type:** 

* Page number based
* Cursor based

**Pagination parameters location**: The location that the paging parameters should be injected. 

* Query params
* Request body

> 🚧 Param Conflicts
>
> Make sure that the field names used in the Pagination tab do not conflict with any names used in the Params tab of your query.

***

<Table align={["left","left"]}>
  <thead>
    <tr>
      <th>
        Page Number Based
      </th>

      <th>
        Cursor Based
      </th>
    </tr>
  </thead>

  <tbody>
    <tr>
      <td>
        * \*Page number name\*\*:
          Query/Request Body field name for the page number
      </td>

      <td>
        * \*Request cursor name\*\*: Query/Request Body field name for the cursor token
      </td>
    </tr>

    <tr>
      <td>
        * \*Page size name\*\*:\
          Query/Request Body field name for the page size
      </td>

      <td>
        * \*Request limit name\*\*:\
          Query/Request Body field name for the max results
      </td>
    </tr>

    <tr>
      <td>

      </td>

      <td>
        * \*Response body name for cursor\*\*:\
          Response Body field path for the next cursor token.

        *This path will be taken directly from the API response before transformation*
      </td>
    </tr>
  </tbody>
</Table>

***

> 📘 Before and After Cursors
>
> Some API's offer a before and after cursor. Budibase only takes a 'next' token, however as you iterate forward through the table, the tokens of the previous pages are automatically kept in memory and used when stepping backwards.
>
> With that in mind, you could also use the API's 'before' token to paginate results in reverse order.

You can then select this query as the data source for a table, making sure the 'Paginate' checkbox is ticked.

***

## Example: Recent Tweets

For this example, we will be using Twitter's recent tweets API as it supports cursor based pagination:\
[https://developer.twitter.com/en/docs/twitter-api/tweets/search/api-reference/get-tweets-search-recent](https://developer.twitter.com/en/docs/twitter-api/tweets/search/api-reference/get-tweets-search-recent)

1. Create a new REST Datasource. Add in your Bearer token for Authentication.

2. Click **Add query** and input **GET**: [https://api.twitter.com/2/tweets/search/recent](https://api.twitter.com/2/tweets/search/recent) 

3. Add some query params:

![1262](https://files.readme.io/9f6b3ff-Screenshot_2022-03-24_at_16.13.48.png "Screenshot 2022-03-24 at 16.13.48.png")

4. Add the pagination params:

![1262](https://files.readme.io/696e500-Screenshot_2022-03-24_at_16.17.14.png "Screenshot 2022-03-24 at 16.17.14.png")

5. Exclude the meta data from the response using the transformer, and click 'Send'.\
   Under the Schema tab, undesired fields can be removed with the 'X'.\
   Then click 'Save'.

![980](https://files.readme.io/e674577-Screenshot_2022-03-24_at_16.18.25.png "Screenshot 2022-03-24 at 16.18.25.png")

6. Finally a paginated table can be created, linked to our query datasource:

![980](https://files.readme.io/3b4392a-Screenshot_2022-03-24_at_16.23.02.png "Screenshot 2022-03-24 at 16.23.02.png")
