---
title: REST queries
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
## Creating a new request

First, create a REST datasource if you do not have one already. For more details, see: [REST](doc:rest). Click the **Add query** button to open the query editor.

![](https://files.readme.io/90a4546-Screenshot_2022-01-04_at_11.22.12_1.png "Screenshot 2022-01-04 at 11.22.12 (1).png")

***

### Name your query

Give your query a recognizable name that will appear in the datasource navigator. For example, a query that retrieves a list of applications could be called applications. 

![](https://files.readme.io/79f159c-Screenshot_2022-01-04_at_11.35.09.png "Screenshot 2022-01-04 at 11.35.09.png")

***

### API endpoint URL

Enter the URL of the API endpoint you are using. The URL is the requested resource including the protocol, domain name, and path. 

![](https://files.readme.io/d3b6ce9-Screenshot_2022-01-04_at_13.20.07.png "Screenshot 2022-01-04 at 13.20.07.png")

***

### Method

Select the HTTP method used by the API endpoint you are using. 

* GET retrieves data from an API.
* POST sends new data to an API.
* PATCH and PUT update existing data.
* DELETE removes existing data.

![](https://files.readme.io/a124afd-Screenshot_2022-01-04_at_11.37.37.png "Screenshot 2022-01-04 at 11.37.37.png")

***

### Access level

Select the access level required by the logged-in end-user. If the user visits a page where a query is executed and the access level is beyond the scope of the user's access the query will not run.

![](https://files.readme.io/4b0b571-Screenshot_2022-01-04_at_13.21.49.png "Screenshot 2022-01-04 at 13.21.49.png")

***

### Params

 URL parameters can be configured in the params tab. 

* Parameters are appended to the end of the request URL, following *?* and listed in key value pairs, separated by *&* using the following syntax: *?status=all\&other=value*
* Parameters can be hardcoded or they can use bindings or variables. 

![](https://files.readme.io/fc4c06e-Screenshot_2022-01-04_at_13.34.14.png "Screenshot 2022-01-04 at 13.34.14.png")

***

### Bindings

Use bindings to supply additional information to the query at runtime. Using the example from above we can replace the hardcoded value of *all* with a binding named *status* that has a default value of *all*. Now we can change the value of *status* by supplying it from within an application using the query. 

![](https://files.readme.io/3600cb6-Screenshot_2022-01-04_at_13.31.34.png "Screenshot 2022-01-04 at 13.31.34.png")

***

### Headers

Use headers to supply key-value pairs accepted by your API. 

* Switch the Active toggle to off to prevent the headers from being sent while keeping it's configuration. 
* Headers can be hardcoded or they can use [REST Bindings](doc:rest-bindings)  or [REST Variables](doc:rest-variables).

![](https://files.readme.io/0569efd-Screenshot_2022-01-04_at_15.38.48.png "Screenshot 2022-01-04 at 15.38.48.png")

***

### Body

Use a request body to send information to an API endpoint. 

* The Content-Type header will automatically be set when using:
  * raw(JSON) / application/json
  * raw(XML) / application/xml
  * raw(Text) / text/plain
* If you manually select a Content-Type header, that value will be overridden by the body type
* The body can be hardcoded or it can use [REST Bindings](doc:rest-bindings) or [REST Variables](doc:rest-variables) .

![](https://files.readme.io/6762fb3-Screenshot_2022-01-04_at_15.44.42.png "Screenshot 2022-01-04 at 15.44.42.png")

***

### Transformer

[Transformers](doc:transformers) can be used to augment the format of the returned data.

![](https://files.readme.io/8dc9b53-Screenshot_2022-01-04_at_16.07.50.png "Screenshot 2022-01-04 at 16.07.50.png")

***

### Authentication

Preset authentication strategies configured at the REST data source level can be used to authenticate queries. For more information on using [REST Authentication](doc:rest-authentication).

![](https://files.readme.io/6b960c3-Screenshot_2022-01-04_at_16.11.02.png "Screenshot 2022-01-04 at 16.11.02.png")

***

### Sending the request

When your query is crafted you can use the **Send** button to preview the results of your query. When your query has been successfully executed you may save the query using **Save Query**

![](https://files.readme.io/920a65b-Screenshot_2022-01-04_at_15.59.24.png "Screenshot 2022-01-04 at 15.59.24.png")

### Posting form data to a REST query

If you have a [Form](doc:forms)  setup in a screen, you can pass bindings through to a POST query to handle a submission.

This is done in a similar manner as [posting form data to a custom query](https://docs.budibase.com/docs/data-sources#tutorial-posting-form-data-to-a-custom-query). 

***

## Using response data

When your query is crafted you can use the **Send** button to preview the results of your query. When your query has been successfully executed you may save the query using **Save Query**.

The saved query can then be used as the data source of a [Data Provider](doc:data-provider) or by the [Execute Query](doc:referencing) action.  

***

### Modifying the schema

The response schema may be updated by:

* Adding or removing fields
* Changing the data type used when displaying the result in tables

![](https://files.readme.io/496ce40-Screenshot_2022-01-04_at_16.03.14.png "Screenshot 2022-01-04 at 16.03.14.png")

***

### Creating dynamic variables

The response schema and headers can be used to create dynamic variables. For more information on static and dynamic variables see [REST Variables](doc:rest-variables) 

![](https://files.readme.io/3aaa81c-Screenshot_2022-01-04_at_16.04.27.png "Screenshot 2022-01-04 at 16.04.27.png")

![](https://files.readme.io/a83f2cc-Screenshot_2022-01-04_at_16.05.44.png "Screenshot 2022-01-04 at 16.05.44.png")
