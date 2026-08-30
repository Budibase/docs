---
title: Bindings in automations
excerpt: ''
deprecated: false
hidden: false
metadata:
  title: ''
  description: kba_5hdj6
  robots: index
next:
  description: ''
---
Automations in Budibase often move data between triggers and actions. This guide shows how to work with that data inside an automation.

## Trigger Data

Start with data coming in through a trigger. This example uses the `Row Created` trigger, but the same pattern works for other triggers too.

> 👍 Follow along
>
> To follow along with our example, load the csv-data from the [Quickstart](doc:quickstart) guide.

First, define a `Row Created` trigger.

Select the `Fleet` table you want to monitor.

Next, add an action. This example uses a `Condition` action so the automation only continues for cars newer than 2015. You can also apply filters to the trigger instead.

Inside the `Condition` action, use the `Reference Value` field. Click the lightning icon and select `Trigger.row`, which contains the row data from the table.

Check the table to confirm the column name, then add it to the binding.

Compare it to the current year using the `{{ now }}` binding. This returns a UTC timestamp.

Set the value to `2015` and use the `greater than` condition.

> 👍 Trigger.row
>
> `Trigger.row` always contains the row from the trigger when the action is row-related. The value remains available even after additional actions.

## Querying data with trigger data as filter

Now query the `Fleet` table for the same year as the newly added car. Use the `Trigger.row` data to match the year.

Add the `Query Rows` action and select the `Fleet` table as the source. Then define a filter.

Click `Define Filters` in the `Query Rows` action to get started.

A modal opens where you can add a filter for `Year`. Use the `binding` property and enter `{{ trigger.row.Year }}`, or click the lightning bolt to use the [Bindings](doc:bindings) overlay.

Click save and the filter is ready. Set the query limit to 1 and configure sorting as needed.

Test the automation to see what data is returned. In the `output` section, you should see a JSON representation of the returned `Fleet` data.

## Using Automation Step Data

Every automation step generates data you can use, from booleans to query results. Each step adds an item to the bindable `Steps` object available throughout the automation. In the condition action from the `Trigger Data` step above, the boolean result is available under `Steps.1.success`.

Next, use the row returned in step 2. For this example, send a Discord notification with the Make and Model of the car you queried.

Enter the Discord Webhook URL and bot name, then bind data from the `Query Rows` step.

Step 2, or `steps.2` in [Bindings](doc:bindings), contains a `rows` array. Because the query is limited to 1 item, use `steps.2.rows.0` to reach the data.

```handlebars
Your {{ steps.2.rows.0.Make }} {{ steps.2.rows.0.Model }} {{steps.2.rows.0.[License Plate]}} was just automatically queried
```

And with that handlebars expression, I just received the following message in Discord:

`Your Toyota FJ Cruiser CJE-7940 was just automatically queried`

## Using Query Result as a condition

The example above uses the "happy path". You might want to halt the automation if the query returns no results.

You can do this by adding a `condition` action between the Discord notification and the `Query Rows` action, then binding the `Success` state of `Query Rows` as a condition.

By comparing the `success` state of a query with `true`, you can continue the automation if you have a result or stop it if you do not.
