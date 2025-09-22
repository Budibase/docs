---
title: Public API
excerpt: Information about the public API
deprecated: false
hidden: false
metadata:
  title: ''
  description: ''
  robots: noindex
next:
  description: ''
---
This page covers some key information you need to know about using the Budibase Public API and our OpenAPI 3.0 specification. The Budibase API provides access to resources including applications, users, tables and data through a RESTful API - allowing for much deeper integration with your business use cases.

> 📘 Public API Reference
>
> This article covers the important general points about the Budibase Public API, if you are looking for in-depth information about the individual endpoints please check out our [API Reference](https://docs.budibase.com/reference).

## How to get your API key

The Budibase API requires an API key be specified as a header, specifically the `x-budibase-api-key` header. Each user will have their own API key which can be generated through the Budibase portal, you'll find this in the user dropdown menu in the top right.

<Image title="Capture.PNG" alt={409} src="https://files.readme.io/7b29204-Capture.PNG">
  User menu with API key option
</Image>

The "View API key" will open a menu, that allows generating a new API key (this will invalidate your old API key), from here you can copy your API key and start using it!

<Image title="Capture.PNG" alt={405} src="https://files.readme.io/5ddaa4f-Capture.PNG">
  API key menu
</Image>

## Getting an App ID

Data-related endpoints will require an `x-budibase-app-id` header. Your App's ID can be retrieved by accessing your app from the Budibase dashboard, and locating your App ID from your browser's address bar after the URL's `/builder/app/` path. 

For example: `<hostname>/builder/app/<your-app-id>/other-path` where `<hostname>` could be `localhost` and `<your-app-id>` could be `app_dev_567abc890opq123`.

> 📘 Published data
>
> To interact with data on your published app, simply remove the '\_dev\_' part of the app id, e.g. *app\_567abc890opq123*

## Getting a table's ID and row's ID

Data-related endpoints in the Budibase API may call for a `tableId` or `rowId`. Your desired Table ID can be retrieved by accessing your app from the Budibase dashboard and then navigating to the "Data" editor. The Table ID can be found in the address bar after the URL's `/data/table/` path.

Table ID example: `<hostname>/builder/app/<your-app-id>/data/table/<table-id>` where `<table-id>` could be `ta_123a456b789c123d345e678f`.

While browsing database tables, you can retrieve a row's ID by locating the value under the row's `ID` column. You may have to toggle "Auto columns" in order for the `ID` column to be visible. 

## Getting the OpenAPI specification

The Budibase Public API has been defined using the OpenAPI 3.0 specification which allows for easy integration between external applications and Budibase. You can learn more about the OpenAPI initiative [here](https://swagger.io/specification/).

You can find the specification for the latest release of Budibase through our Github repository.

1. [YAML specification](https://github.com/Budibase/budibase/blob/master/packages/server/specs/openapi.yaml)
2. [JSON specification](https://github.com/Budibase/budibase/blob/master/packages/server/specs/openapi.json)

## Using with Insomnia

Insomnia is an open-source REST API client for developers. To import the Budibase API Collection first choose the **Insomnia** root element as shown below:

![1381](https://files.readme.io/d6ac76c-Microsoft_Teams_Notification_2022-05-10_16-20-101.jpg "Microsoft Teams Notification 2022-05-10 16-20-10(1).jpg")

We want to import a collection from a URL so choose the **Create** button, then **URL** as shown below:

![1697](https://files.readme.io/6620265-2022-05-10_16-21-20-Create-From_URL.jpg "2022-05-10 16-21-20-Create-From_URL.jpg")

Paste the URL below into the dialog box, then choose **Fetch and Import**

```
https://raw.githubusercontent.com/Budibase/budibase/master/packages/server/specs/openapi.yaml

```

![1626](https://files.readme.io/020cf06-Insomnia_2022-05-10_16-22-491.jpg "Insomnia 2022-05-10 16-22-49(1).jpg")

You will be asked how you would like to import the collection. Choose **New** as shown below:

![1626](https://files.readme.io/e442fe1-Insomnia_2022-05-10_16-23-141.jpg "Insomnia 2022-05-10 16-23-14(1).jpg")

Next choose **Request Collection** 

![1626](https://files.readme.io/530935b-Insomnia_2022-05-10_16-23-371.jpg "Insomnia 2022-05-10 16-23-37(1).jpg")

Then **OK** to confirm the import succeeded.

![1626](https://files.readme.io/73cb733-Insomnia_2022-05-10_16-23-541.jpg "Insomnia 2022-05-10 16-23-54(1).jpg")

To view the imported API collection choose the collection name as highlighted below:

![1695](https://files.readme.io/5cd1633-2022-05-10_16-24-12-choose-collection.jpg "2022-05-10 16-24-12-choose-collection.jpg")

The next step is to personalise your environment variables to match your Budibase installation. Choose the **OpenAPI env** drop-down menu, then **Manage Environments**

![522](https://files.readme.io/b3d69d7-2022-05-10_16-27-11-Manage-Environments.jpg "2022-05-10 16-27-11-Manage-Environments.jpg")

Amend the values for each variable, entering the API key you obtained from your Budibase installation.

![1332](https://files.readme.io/28953c8-Insomnia_-_Budibase_API_1.0.0_OpenAPI_env__Search_for_applications_2022-05-10_16-29-441.jpg "Insomnia - Budibase API 1.0.0 (OpenAPI env) – Search for applications 2022-05-10 16-29-44(1).jpg")

With the environment variables set you can try making some requests. The example below shows a request to **Search for applications**. Amend the value of the **name** string (set to inventory in this example), then choose the **Send** button to view the result.

![1924](https://files.readme.io/94cf9f7-Insomnia_-_Budibase_API_1.0.0_OpenAPI_env__Search_for_applications_2022-05-10_16-28-181.jpg "Insomnia - Budibase API 1.0.0 (OpenAPI env) – Search for applications 2022-05-10 16-28-18(1).jpg")

To generate code for this request choose the drop-down arrow beside **Search for application**, then choose **Generate code**, then choose your preferred language from the top-left menu.

## Using with Postman

The Budibase OpenAPI specification makes it easy to use Budibase with Postman, you can import the Budibase API as a new collection. With Postman open choose the "**Import**" button at the top-left. Choose **Import via link** and paste the following URL:

```
https://raw.githubusercontent.com/Budibase/budibase/master/packages/server/specs/openapi.yaml
```

Choose **continue** and you should see a new collection as shown below.

<Image title="Capture.PNG" alt={571} src="https://files.readme.io/614b871-Capture.PNG">
  Postman Budibase collection
</Image>

All that you need to do to this is adjust a two parameters about the API, the authorization to input your API key and the host (by default the collection will link to the Budibase Cloud, but you may wish to target your own self hosted Budibase instance). These settings are changed within the collection settings, click the three dots icon on the Budibase API collection, then click "Edit" - see the open this opens below.

<Image title="Capture.PNG" alt={807} src="https://files.readme.io/75a0730-Capture.PNG">
  Postman edit collection menu
</Image>

First go to the "Authorization" tab and adjust the "Value" of the API key header to be that of your own API key. Then go to the "Variables" tab and change the "Current value" of the `baseUrl` variable to be wherever the Budibase instance you wish to target is hosted; make sure that the `/api/public/v1` on the end of the URL is maintained, this is required to access the Public API.
