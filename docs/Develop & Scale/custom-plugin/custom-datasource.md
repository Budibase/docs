---
title: Datasource
excerpt: Write a custom datasource integration
deprecated: false
hidden: false
metadata:
  title: ''
  description: ''
  robots: noindex
next:
  description: ''
---
[block:html]
{
  "html": "<div style=\"padding:0 0 0 0;position:relative;\"><iframe title=\"vimeo-player\" src=\"https://player.vimeo.com/video/754726312?h=033f1262fa\" width=\"640\" height=\"360\" frameborder=\"0\" allowfullscreen></iframe></div><script src=\"https://player.vimeo.com/api/player.js\"></script>"
}
[/block]



## Purpose

Datasource plugins are simple in their nature, allowing you to write an extension to Budibase that defines external [CRUD](https://en.wikipedia.org/wiki/Create,_read,_update_and_delete) operations that are useful to your business. Datasource plugins are data centric, focused on getting the data you need into Budibase so that you can build apps quickly and easily.

## Getting started

Make sure you have the latest [Budibase CLI](https://docs.budibase.com/docs/budibase-cli-setup) installed. Even if you have previously installed the CLI, you may want to install it again to be sure you have the latest version.

Also make sure that you have **node v16+** installed. You can run `node --version` to see if you need to upgrade.

Please note that datasource plugins can only be used in self host installations - they cannot be imported to the Budibase Cloud.

Once that's done, we need to initialise a template for our datasource. 

Navigate to the folder location you want to create your plugin, and execute the following command:

```shell
budi plugins --init datasource
```



Next you will receive a series of prompts to enter details about your datasource. You can press enter without providing a value if you are happy to use the placeholder.

![](https://files.readme.io/a8176c5-Screenshot_2022-09-16_at_09.34.23.png)

Within the newly created custom datasource project you should see a tree structure as follows:

```yaml
src:
  datasource.ts: The code for your custom datasource. Do not rename.

test:
  index.spec.ts: A Jest test file that includes template unit tests for each CRUD method.
  
package.json: The version, license and dependencies for your datasource.

schema.json: The meta data and available builder settings for your datasource. 
```



<br />

## Building your datasource

After you have created your new datasource directory, execute the following:

```shell Shel
cd my-datasource
yarn build
```



Assuming you have [updated the server env variable](https://docs.budibase.com/docs/custom-plugin#hot-reloading-developers-only) you should now be able to see your datasource template in Budibase:

![](https://files.readme.io/dd1c862-Screenshot_2022-09-16_at_09.51.03.png)

<br />

### datasource.ts

This is where your code will live for your datasource. It is recommended that it is developed in TypeScript. The default implementation is a basic HTTP connector, but you can make use of a wide range of npm packages to build the desired integration. 

To make sure your saved changes are passed through to your Budibase server, you must execute a `yarn watch` within your custom datasource project. This will allow your local Budibase app builder to see those changes in real-time, which is very handy for getting your datasource to behave just right. 

As the file is TypeScript, it is recommended that you use the **import** keyword over **require**. E.g

> 👍 
> 
> ```javascript
> import Surreal from "surrealdb.js"
> ```

> ❗ 
> 
> ```javascript
> const Surreal = require("surrealdb.js");
> ```

#### Methods

The `datasource.ts` file contains four CRUD methods which must be implemented. 

The signature of each method should match the definition provided by the [Schema](/docs/custom-datasource-schema).

You will also notice a `request` method in the created template. This is not mandatory, however it can be useful to have a method that executes shared code between your CRUD methods. 

<br />

### Test

The `index.spec.ts` test file includes template unit test methods for each CRUD method in your datasource. You can implement these to meet your own specification, however failing tests wont prevent the datasource from being built and used within the Budibase builder.

<br />

### Schema

On the next page we will discuss the intricacies of the datasource schema.json file - which defines the inputs and outputs of your datasource and its queries.

You can jump to the datasource schema page [here](/docs/custom-datasource-schema).

<br />

### Adding an icon

By default your custom datasource will present with the following icon:

[block:image]
{
  "images": [
    {
      "image": [
        "https://files.readme.io/9d3534d-Screenshot_2022-10-13_at_10.28.10.png",
        null,
        "Default icon"
      ],
      "align": "center",
      "caption": "Default icon"
    }
  ]
}
[/block]

It is nice to add an icon to your custom datasource so that it is distinguishable from other custom datasources. Simply add an **svg** file to the root of your project. It should be called `icon.svg`.

[block:image]
{
  "images": [
    {
      "image": [
        "https://files.readme.io/1c5c5e9-Screenshot_2022-10-13_at_10.37.57.png",
        null,
        "Custom icon examples"
      ],
      "align": "center",
      "caption": "Custom icon examples"
    }
  ]
}
[/block]

<br />

## Example: n8n workflow connector

This tutorial will show you how to build an n8n connector that can perform CRUD operations on workflows.

This example will assume you have configured the server [plugins directory env var](https://docs.budibase.com/docs/custom-plugin#hot-reloading-developers-only)

### Step 1 - Initialise

Initialise your custom datasource as follows:

![](https://files.readme.io/8a6bc30-cli-create-n8n.png)

Next make sure the Budibase dev environment is running. 

Open the newly created custom datasource directory in your IDE, for example VSCode, and run `yarn watch`. Verify your plugin is available in the plugins list in the Budibase portal. 

![](https://files.readme.io/be3b1b1-plugins-item.png)

<br />

### Step 2 - Schema updates

Update the `schema.json` to include the **host** and **apiKey** settings.

![](https://files.readme.io/a93cb46-schema-change.png)

You can also update the **docs** link and **friendlyName**.

Next update the **read** property of the schema. This will determine the available fields available for reading our n8n workflows. It should look as follows:

![](https://files.readme.io/39754ab-schema-read.png)

You will need to refresh your Budibase builder webpage to pull in schema changes. To test things so far, if you add a new datasource it should look as follows:

![](https://files.readme.io/fa7cbd4-add_datasource.png)

![](https://files.readme.io/2e35118-Screenshot_2022-09-16_at_20.03.58.png)

And the **Read** query:

![](https://files.readme.io/38e3962-Screenshot_2022-09-16_at_20.05.22.png)

<br />

### Step 3- Read method implementation

Whilst we have provided the interface to let Budibase know which fields to expect for the custom datasource read method, we still have to write the implementation.

First lets replace the existing config properties with the new ones: **host** and **apiKey**. Replace all references to the old properties with the new ones throughout the file.

![](https://files.readme.io/3ae534b-constructor.png)

Next update the `read` method as follows:

```javascript
async read(query: { id: number, active: string, tags: string, limit: number, cursor: string }) {
    const opts = {
      method: "GET",
    }
    if (query.id > -1) {
      return this.request(`${this.host}/api/v1/workflows/${query.id}`, opts)
    }
    let queryParams = ""
    if (query.active) {
      queryParams += `&active=${query.active}`
    }
    if (query.tags) {
      queryParams += `&tags=${query.tags}`
    }
    if (query.limit) {
      queryParams += `&limit=${query.limit}`
    }
    if (query.cursor) {
      queryParams += `&cursor=${query.cursor}`
    }
    return this.request(`${this.host}/api/v1/workflows?${queryParams}`, opts)
  }
```



If an ID is provided then get the data for that particular workflow, otherwise grab all workflows using the optional query params.

Finally, the n8n API expects the **apiKey** in the header, so we can add that in the `request` method as all calls will need authenticated.

![](https://files.readme.io/83ff3cb-Screenshot_2022-09-16_at_21.21.34.png)

The official n8n API workflow docs can be found [here](https://docs.n8n.io/api/api-reference/#tag/Workflow).

**Get all workflows**

![](https://files.readme.io/722fa7b-Screenshot_2022-09-16_at_21.23.51.png)

A similar process can be followed to implement the Create, Update and Delete methods. Remember to update the schema as needed.

<br />

### Step 4 - Adding an additional method

So far we have demonstrated how to implement CRUD methods for a custom datasource, but what if we want to add additional methods? For example, the n8n workflows API includes CRUD operations, but it also has endpoints for activating/deactivating workflows. 

First add the additional method properties to the schema like so: 

![](https://files.readme.io/18a2be4-Screenshot_2022-09-17_at_15.40.57.png)

Upon refreshing your local Budibase builder webpage (you may also need to navigate out of your app and back in), then you should see the changes:

![](https://files.readme.io/e1de7f8-Screenshot_2022-09-17_at_15.46.08.png)

Next add another method to your `CustomIntegration` class as follows:

```javascript
async activate(query: { id: string, active: string }) {
    const opts = {
      method: "POST",
    }
    if (query.active === "true") {
      return this.request(`${this.host}/api/v1/workflows/${query.id}/activate`, opts)
    }
    if (query.active === "false") {
      return this.request(`${this.host}/api/v1/workflows/${query.id}/deactivate`, opts)
    }
    throw new Error("Active must be 'true' or 'false'")
  }
```



Depending on the state of the active flag, the `activate` or `deactivate` endpoint is called. An error is thrown if a boolean is not provided.

You can view the finished datasource plugin, and also use the GitHub URL to import the plugin: <https://github.com/melohagan/budibase-datasource-n8n-workflow>

<br />

## Example: SQL query

The previous example shows you how to include functions with _field_ type. You may want your custom datasource to support SQL queries with basic syntax highlighting.

> 📘 
> 
> This example is taken from the [SurrealDB custom datasource integration](https://github.com/melohagan/budibase-datasource-surrealdb)

1. First update your schema to include a function that takes a _sql_ type function.

![](https://files.readme.io/614c131-Screenshot_2022-09-20_at_13.09.00.png)

2. Next include the `SqlQuery` type from Budibase types.

![](https://files.readme.io/8eaf7d2-Screenshot_2022-09-20_at_13.15.28.png)

3. Finally update your method signature to include the _query_ parameter. You can access the SQL string via `query.sql`

![](https://files.readme.io/1efa0b7-Screenshot_2022-09-20_at_13.16.56.png)

**Result**

![](https://files.readme.io/9686598-Screenshot_2022-09-20_at_13.17.32.png)

<br />

## Example: Extra fields for handling modes

So far we have looked at examples where we perform CRUD operations within a single domain/mode. In this example we will look at handling different modes for when you want to mostly share CRUD functionality, but make slightly different calls depending on the selected mode.

> 📘 
> 
> Specifically, we will be looking at handling CRUD operations for Subscriptions, Subscription Items and Subscription Schedules, all in one [datasource plugin](https://github.com/melohagan/budibase-datasource-stripe-subscriptions)

Update the schema to include the `extra` property. In this case it was placed _after_ the `query` property:

```json json
"extra": {
      "type": {
        "displayName": "Type",
        "type": "list",
        "required": true,
        "data": {
          "create": [
            "Subscriptions",
            "Subscription Items",
            "Subscription Schedules"
          ],
          "read": [
            "Subscriptions",
            "Subscription Items",
            "Subscription Schedules"
          ],
          "update": [
            "Subscriptions",
            "Subscription Items",
            "Subscription Schedules"
          ],
          "delete": [
            "Subscriptions",
            "Subscription Items",
            "Subscription Schedules"
          ],
          "list": [
            "Subscriptions",
            "Subscription Items",
            "Subscription Schedules"
          ],
          "searchSubscriptions": [
            "Subscriptions"
          ],
          "releaseSchedule": [
            "Subscription Schedules"
          ]
        }
      }
    }
```



The lists indicate which options are available depending on which function has been selected. For example:

![](https://files.readme.io/3ae1a76-Screenshot_2022-09-20_at_17.44.50.png)

![](https://files.readme.io/3c1c52d-Screenshot_2022-09-20_at_17.45.27.png)

Next we can use the _extra_ information to make a decision about which endpoint to hit. For example, the **create** method can be changed to the following:

```javascript
async create(query: { json: object; extra: { [key: string]: string } }) {
    if (query.extra.type === "Subscriptions") {
      return await this.stripe.subscriptions.create(query.json as Stripe.SubscriptionCreateParams)
    }
    if (query.extra.type === "Subscription Items") {
      return await this.stripe.subscriptionItems.create(query.json as Stripe.SubscriptionItemCreateParams)
    }
    if (query.extra.type === "Subscription Schedules") {
      return await this.stripe.subscriptionSchedules.create(query.json as Stripe.SubscriptionScheduleCreateParams)
    }
    throw new Error("You must provide a type!")
  }
```