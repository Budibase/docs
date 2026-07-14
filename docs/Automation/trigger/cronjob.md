---
title: Schedule trigger
excerpt: Trigger your Budibase automations at regular intervals or specific times.
deprecated: false
hidden: false
metadata:
  title: ''
  description: kba_5hds2
  robots: index
next:
  description: ''
---
The schedule trigger is ideal for periodically running queries, fetching data, or sending emails.

This guide fetches the Stargazer count of a GitHub repository every working day at 9 a.m. and sends a Discord notification.

## Creating the automation

To create an automation with the schedule trigger, go to the Automation section and create a new automation by clicking the `+` icon in the left-hand menu. Enter a name and select the `Schedule` trigger.

Then click `Save` to create the automation.

## Configuring the schedule

The schedule trigger provides several ways to define when your automation should run. You can choose from presets or provide a custom cron expression.

### Period

You can select the frequency of your schedule using the **Period** dropdown:

* **Regular intervals**: Choose a specific interval in minutes or hours (e.g., every 15 minutes, every 2 hours).
* **Daily**: Run the automation once every day at a specific time.
* **Weekly**: Select specific days of the week and a time for the automation to run.
* **Monthly**: Select specific days of the month (1-31) and a time.
* **Cron expression**: Provide a standard 5-part cron expression for advanced scheduling needs.

### Timezone

By default, schedules use **UTC**. You can select a specific timezone, such as `Europe/London` or `America/New_York`, to run at the correct local time.

### Next Executions

The configuration panel displays the next four scheduled execution times in your selected timezone.

## Advanced: Cron expressions

If you select the **Cron expression** period, you can enter a series of numbers or stars. The order is from smallest to largest:

* Minutes
* Hours
* Day of the Month
* Month
* Day of the Week

The cron builder includes presets that can generate an expression for you. For Premium or Enterprise tenants, you can also use the AI assistant to generate expressions from a natural language prompt.

Cron scheduling can be powerful, but you need to understand the syntax. For every field, you can use the following expressions:

* **Plain numbers**: From 0 to 59 for minutes, 0-23 for hours, and 1-12 for months.
* **Ranges**: `5-10` in the minutes section would mean every minute from the 5th until the 10th minute.
* **Separations**: Multiple numbers or ranges, like `4,8,12` in the months column would be the 4th, 8th and 12th month only. Separations can also have ranges, such as `5-10,35-40` in the minutes column, which would be every minute between the 5th and 10th minute, and every minute between the 35th and 40th minute.
* **A `*`**: This means `every`. So if you have only stars everywhere, that means every minute, of every hour, of every day of every month.

Example: To run a job every working day at 3 a.m. UTC, you would use the following cron expression: `0 3 * * 1-5`

## Timestamp binding

A binding is available for the timestamp of when the schedule job was triggered.  
This returns the number of <a href="https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Date/getTime">epoch milliseconds</a>.

## Performing an API call

Now that you have set up the `Schedule Trigger`, perform a REST call to fetch some information. For this tutorial, create a new [REST API](doc:rest) data source, add [Bindings](doc:rest-bindings) to the API call, and set up a [Transformer](doc:transformers) to turn the data into usable output. You can also use regular queries to <Glossary>Data Sources</Glossary>.

If you want to read more about REST APIs, bindings, and transformers, see the linked pages.

We end up with something like this:

When you run a test, you can see the API call and transformer return the stargazer count for the chosen GitHub repository.

For reference, the result from the public <a href="https://docs.github.com/en/rest/search#search-repositories" target="_blank">GitHub Search API</a> is transformed like this:

```javascript
return data.items[0].stargazers_count
```

## Using the data

Now that the scheduled trigger runs the API call, use the result to send a Discord notification.

First, retrieve a Discord Webhook URL, set the bot name, optionally add a profile picture, and then set the binding to display the number of stars.

The message uses the `value` from the API call in `step 1`. The binding looks like this:

```handlebars
You now have {{ steps.External Data Connector.response }} stargazers
```

That works because the Discord bot sends the message.
