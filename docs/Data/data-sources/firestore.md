---
title: Firestore
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
Cloud Firestore is a flexible, scalable database for mobile, web, and server development from Firebase and Google Cloud.

Setup
-----

To get started, add a project through the Firebase console and create a Firestore database:  
<https://firebase.google.com/docs/firestore/quickstart>

Connect
-------

You will need to use a **Service Account** in order to be able to access your Firestore via the Budibase connector.

To get the required credentials, within the Firebase console, click on the cog icon beside _Project Overview_ and then select the _Service accounts_ tab.

![](https://files.readme.io/b2b801a-Screenshot_2022-06-10_at_15.15.39.png "Screenshot 2022-06-10 at 15.15.39.png")

Next, click **Generate new private key** button. This will download a json file that will contain the credentials you need to connect.

In particular:

- client_email
- private_key
- project_id

Whenever you add a new Firestore <<glossary:Data Source>> you will be prompted to enter these fields: 

![](https://files.readme.io/e7f5de2-Screenshot_2022-06-10_at_15.29.52.png "Screenshot 2022-06-10 at 15.29.52.png")

With your Firestore config saved, you will now be able to add a query.

Create query
------------

1. Select the 'Create' function
2. Enter a collection to save the new document to
3. Enter the JSON payload into the query box
4. The newly created document will be returned with a randomly generated unique id

![](https://files.readme.io/ba27a2d-Screenshot_2022-06-10_at_16.49.14.png "Screenshot 2022-06-10 at 16.49.14.png")

![](https://files.readme.io/9528acc-Screenshot_2022-06-10_at_16.50.01.png "Screenshot 2022-06-10 at 16.50.01.png")

#### Bindings

You can also use <a href="https://docs.budibase.com/docs/custom-queries#using-query-bindings">bindings</a> like so:

![](https://files.readme.io/3ef13c8-Screenshot_2022-06-10_at_16.52.48.png "Screenshot 2022-06-10 at 16.52.48.png")

Read query
----------

For these examples, there is a collection named _test_ with five documents representing various fruit and veg.  
Select the 'Read' function.

#### Get all documents from a collection

1. Enter the name of the collection into the collection field
2. Leave the filter fields blank

![](https://files.readme.io/fa78832-Screenshot_2022-06-10_at_16.05.14.png "Screenshot 2022-06-10 at 16.05.14.png")

![](https://files.readme.io/264e439-Screenshot_2022-06-10_at_16.09.23.png "Screenshot 2022-06-10 at 16.09.23.png")

#### Using filter fields

These map to the parameters of the <a href="https://cloud.google.com/nodejs/docs/reference/firestore/latest/firestore/query#_google_cloud_firestore_Query_where_member_1_">where clause</a> 

1. Enter the field name: 'color'
2. Select the 'equals' filter comparison
3. Enter the filter value: 'yellow'

![](https://files.readme.io/3ff4303-Screenshot_2022-06-10_at_17.11.17.png "Screenshot 2022-06-10 at 17.11.17.png")

![](https://files.readme.io/c3a3ef4-Screenshot_2022-06-10_at_16.15.51.png "Screenshot 2022-06-10 at 16.15.51.png")

The full list of supported filter comparisons can be found <a href="https://firebase.google.com/docs/reference/js/firestore_#wherefilterop">here</a>

#### Bindings

You can also use <a href="https://docs.budibase.com/docs/custom-queries#using-query-bindings">bindings</a> like so:

![](https://files.readme.io/9dda221-Screenshot_2022-06-10_at_16.27.03.png "Screenshot 2022-06-10 at 16.27.03.png")

Update query
------------

Select the 'Update' function.

#### Update by id

1. Enter the name of the collection into the collection field
2. Leave the filter fields blank
3. In the query box, enter the **id** to match on, and the field values to update to

![](https://files.readme.io/90dd6e1-Screenshot_2022-06-10_at_16.59.04.png "Screenshot 2022-06-10 at 16.59.04.png")

![](https://files.readme.io/805e8bd-Screenshot_2022-06-10_at_16.59.30.png "Screenshot 2022-06-10 at 16.59.30.png")

Delete query
------------

Select the 'Delete' function.

#### Delete by id

1. Enter the name of the collection into the collection field
2. Leave the filter fields blank
3. In the query box, enter the **id** to match on

![](https://files.readme.io/0f746de-Screenshot_2022-06-10_at_17.04.58.png "Screenshot 2022-06-10 at 17.04.58.png")

![](https://files.readme.io/7c72644-Screenshot_2022-06-10_at_17.05.15.png "Screenshot 2022-06-10 at 17.05.15.png")

As with other data sources, you can [Transform](doc:transformers) any query results.

For example, you may want to <a href="https://github.com/Budibase/budibase/discussions/6686#discussioncomment-3172147">access the latitude and longitude from a GeoPoint</a>

Sub-collection
--------------

To query a sub-collection simply provide the path within the _Collection_ field

![](https://files.readme.io/d646220-Screenshot_2022-08-16_at_14.39.43.png)

![](https://files.readme.io/98222f8-Screenshot_2022-08-16_at_14.41.17.png)

You can also use bindings within the collection path like so:

![](https://files.readme.io/89e4c5c-Screenshot_2022-08-17_at_08.54.33.png)