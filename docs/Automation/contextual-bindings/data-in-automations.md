---
title: Bindings in automations
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
Automations in Budibase deal a lot with data. Something [Triggers](doc:trigger) the automation, and then actions can be performed based on that. But how do you deal with data inside automation?

This in-depth guide will explain the best way to deal with data in automations.

## Trigger Data

Let's begin to look at the data coming in through a trigger. We're going to be looking at the `Row Created` action, but this same flow also works for all other actions. 

> 👍 Follow along
> 
> To follow along with our example, load the csv-data from the [Quickstart](doc:quickstart) guide.

First, define a `Row Created` Trigger.

[block:image]
{
  "images": [
    {
      "image": [
        "https://files.readme.io/04f4a8aaba18f7e5cc9d12ebd8cfc1ed685662ad3a0471e557db67457c9bda61-Screenshot_2025-03-12_at_10.31.38.png",
        "row-created-trigger.png",
        "Row create initial trigger pointed at a specific table"
      ],
      "align": "center"
    }
  ]
}
[/block]


We've selected the table `Fleet` which we want to monitor, and then our `Trigger` is defined correctly.

Next step, create an action. Choose any action you want, but in our example we're going to be adding a `Condition` action to make sure we're only running this action on cars that are newer than 2015. Alternatively, you can apply filters to the initial trigger. If whatever filter provided doesn't match the automation simply won't run.

Inside the `Condition` action you can see the field `Reference Value`, this is where the [Bindings](doc:bindings) come in. When clicking the lightning icon you can select from the predefined value of `Trigger.row`. This is what we want to use, as that is an object containing the data from the table. 

Look at the table to see what the data-structure is and what the name of the column is, then add that to your binding.

[block:image]
{
  "images": [
    {
      "image": [
        "https://files.readme.io/0f849b601c8e8f42a548816be8e683b21d1219d19808b1c8f2074968fede9cfc-Screenshot_2025-03-12_at_10.35.12.png",
        "trigger-data-field.png",
        null
      ],
      "align": "center"
    }
  ]
}
[/block]


Doing the same in JavaScript binding is of course also possible.

[block:image]
{
  "images": [
    {
      "image": [
        "https://files.readme.io/f169d6c5cb262c4c4072cb79b8c85d5ba6a31ac8ee30393b66b8aec4b5ebe93c-Screenshot_2025-03-12_at_10.35.49.png",
        "trigger-data-field-javascript.png",
        null
      ],
      "align": "center"
    }
  ]
}
[/block]


And then of course we're setting our value `2015` and the `greater than` condition accordingly.

[block:image]
{
  "images": [
    {
      "image": [
        "https://files.readme.io/00b85017f50a6ba41a1a1170d4d8369851de8a84e6552df5dcdb0f9b731be953-Screenshot_2025-03-12_at_10.36.34.png",
        "condition-configuration.png",
        null
      ],
      "align": "center"
    }
  ]
}
[/block]


> 👍 Trigger.row
> 
> `Trigger.row` will always contain the row from the trigger, in an object format, when the action is row-related. No matter how many actions you've added in between, the data will be there to be used as an object.

## Querying data with trigger data as filter

Next, now that we've set our arbitrary condition, we're going to do an arbitrary query on the `Fleet` table from the same year as the newly added car. For this, we'll need to use the `Trigger row` data to match this.

First, let's add the `Query Rows` action, and select the same table, `Fleet` as the source for querying. Then, we're going to define a filter. 

Click the `Define Filters` button  in the `Query Rows` action to get started

[block:image]
{
  "images": [
    {
      "image": [
        "https://files.readme.io/3a7b0a5d4e0b5e954c2ebe6e20549510f1447a65f47d1c56ad3afca3787d2458-Screenshot_2025-03-12_at_10.37.18.png",
        "define-filters.png",
        null
      ],
      "align": "center"
    }
  ]
}
[/block]


A modal will be presented, in which we're going to add a filter for `Year`. Use the `binding` property, and enter \`{{ trigger.row.Year }}\`\`, or click the lightning bolt to use the [Bindings](doc:bindings) overlay.

[block:image]
{
  "images": [
    {
      "image": [
        "https://files.readme.io/8f12d6fa2579595d4f99a6f37b4965173140fb0d162aa019c0be64f5c52a9c99-Screenshot_2025-03-12_at_10.37.39.png",
        "query-rows-filter-year.png",
        null
      ],
      "align": "center"
    }
  ]
}
[/block]


Click save, and your filter is now defined to take the newly created car as a source for querying. Complete the setup for `Query Rows` by setting the limit to 1, and then setting sorting to your own wishes.

Now you can test your automation to see what data is returned. In the `output` section you should see a JSON representation of returned data from the `Fleet` table.

[block:image]
{
  "images": [
    {
      "image": [
        "https://files.readme.io/39c6abe9ad3a2ad5a41f8e2329357727a3526fc5a16f5188fec4543bb7c097cb-Screenshot_2025-03-12_at_10.45.59.png",
        "data-results.png",
        null
      ],
      "align": "center"
    }
  ]
}
[/block]


## Using Automation Step Data

Every automation step generates data you can use, from `booleans` if things went successful, to query data. Each step generates an item in the bindable `Steps` object available throughout the automation. Take the condition action we've defined in the `Trigger Data` step above. Considering the output is only a boolean, it will return a boolean. But as the condition halts automation execution, we only will ever see `true` returned, nonetheless, this boolean can be found under `Steps.1.success`. 

Next of course is the more logical data to use, the car queried in step 2. For the purpose of demonstration, we're going to send a Discord Notification with the Make and Model of the car we just queried.

Enter the Discord Webhook URL and bot-name accordingly, and then we're going to the fun part. Binding data from the `Query Rows` in step 2.

Step 2, or `steps.2` in [Bindings](doc:bindings), contains a `rows` array, giving you the results of the query. Considering we have limited the query to 1 item, we're going to have to use `steps.2.rows.0` to reach the data.

```handlebars
Your {{ steps.2.rows.0.Make }} {{ steps.2.rows.0.Model }} {{steps.2.rows.0.[License Plate]}} was just automatically queried
```

And with that handlebars expression, I just received the following message in Discord:

`Your Toyota FJ Cruiser CJE-7940 was just automatically queried`

## Using Query Result as a condition

Of course in the example above we've used the "Happy Path" as an example. We know we're going to get results with the query, but you might want to halt the automation if you get no results. 

You can do this by adding a `condition` action in between the Discord Notification and the Query Rows action, and then bind the `Success` state of the Query Rows as a condition as shown below.

[block:image]
{
  "images": [
    {
      "image": [
        "https://files.readme.io/2af6539810f44d0ca2017cc1c0eb606b082d6ada0ce10fd33728ab444071e274-Screenshot_2025-03-12_at_10.47.20.png",
        "condition-query-result.png",
        null
      ],
      "align": "center"
    }
  ]
}
[/block]


By comparing the `success` state of a query with `true` you can continue automation if you have a result, or abort the automation if you have not.