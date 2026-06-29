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
The schedule trigger is ideal for periodically running queries, fetching data, or even sending emails.

For this guide, we will fetch the Stargazer count of a GitHub repository every working day at 9 a.m. and send a Discord notification.

## Creating the automation

To create an automation with the schedule trigger, head over to the Automation Section and create a new Automation by clicking the `+` icon in the left-hand menu. A dialog will pop up, in which you can enter the name of your automation, and you can select the `Schedule` trigger.

<Image align="center" border={false} width="600px" src="https://files.readme.io/ec8c908e9097cb1ea9bb02e35aded81cbf36664e6f3aff8b698e09cbf8aec204-Screenshot_2025-07-16_at_15.42.44.png" />

Then, click `Save`, and a new automation will be created using a `Schedule Trigger`.

## Configuring the schedule

The schedule trigger provides several ways to define when your automation should run. You can choose from a variety of presets or provide a custom cron expression.

### Period

You can select the frequency of your schedule using the **Period** dropdown:

* **Regular intervals**: Choose a specific interval in minutes or hours (e.g., every 15 minutes, every 2 hours).
* **Daily**: Run the automation once every day at a specific time.
* **Weekly**: Select specific days of the week and a time for the automation to run.
* **Monthly**: Select specific days of the month (1-31) and a time.
* **Cron expression**: Provide a standard 5-part cron expression for advanced scheduling needs.

### Timezone

By default, schedules use **UTC**. You can select a specific timezone (e.g., `Europe/London`, `America/New_York`) to ensure your automation runs at the correct local time, accounting for daylight savings shifts automatically.

### Next Executions

The configuration panel displays a list of the next four scheduled execution times in your selected timezone. This helps you verify that your schedule is configured correctly.

## Advanced: Cron expressions

If you select the **Cron expression** period, you can enter a series of numbers or stars. The order is from small to big:

* Minutes
* Hours
* Day of the Month
* Month
* Day of the Week

We have presets available within the cron builder that can be selected to generate a cron expression for you. Additionally, for Premium or Enterprise tenants, you can use the AI assistant to generate expressions from a natural language prompt.

Cron Scheduling can be very powerful, but you'll need to understand syntax. For every field, you can use the following expressions:

* **Plain numbers**: From 0 to 59 for minutes, 0-23 for hours, and 1-12 for Months.
* **Ranges**: `5-10` in the minutes section would mean every minute from the 5th until the 10th minute.
* **Separations**: Multiple numbers or ranges, like `4,8,12` in the months column would be the 4th, 8th and 12th month only. Separations can also have ranges, such as `5-10,35-40` in the minutes column, which would be every minute between the 5th and 10th minute, and every minute between the 35th and 40th minute.
* **A `*`**: This means `every`. So if you have only stars everywhere, that means every minute, of every hour, of every day of every month.

Example: To run a job every working day at 3 a.m. UTC, you would use the following cron expression: `0 3 * * 1-5`

## Timestamp binding

A binding is available for the timestamp of when the schedule job was triggered.  
This returns the number of <a href="https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Date/getTime">epoch milliseconds</a>

<Image align="center" border={false} src="https://files.readme.io/515145ac4ecde0dc4606a400b931e3a9b3418b263d6e90316a05d33e26be20c1-Screenshot_2024-10-24_at_13.12.55.png" />

## Performing an API call

Now that we've set up our `Schedule Trigger`, it is time to perform a REST call to fetch some information. For this tutorial, we've created a new [REST API](doc:rest) Data Source, added [Bindings](doc:rest-bindings) to the API call to allow customization, and we've set up a [Transformer](doc:transformers) to turn the data into quick, usable data. But you can set up whatever you want here, even regular queries to <Glossary>Data Sources</Glossary>.

If you want to read more about setting up a REST API, Bindings, and Transformers, we recommend checking out the linked pages.

We end up with something like this:

<Image align="center" border={false} src="https://files.readme.io/ba9b2965c4714bb101db89f12134a4de44d98a63a1bbb3b8eda90da1aa2d5a00-Screenshot_2025-04-04_at_13.19.34.png" />

When running a test you can see the API call and the transformer worked as expected, and it returns the stargazer count of the Github repository of choice.

<Image align="center" border={false} src="https://files.readme.io/291389b40583576d7816695bef54c51114c47e85e5a63ea44cc0fa9d28a36ef9-Screenshot_2025-04-04_at_13.21.16.png" />

For reference, we've transformed the result from the public <a href="https://docs.github.com/en/rest/search#search-repositories" target="_blank">Github Search API</a> like this:

```javascript
return data.items[0].stargazers_count
```

## Using the data

Now we have a scheduled trigger and an API call is done at that exact time. The only thing that remains is using the result of the API call. For this purpose, we're going to be firing a Discord notification.

First, we're retrieving a DIscord Webhook URL, setting the botname, optionally add a nice profile picture, and then set the binding to display the number of stars.

<Image align="center" border={false} src="https://files.readme.io/578debdb33a09a9b35ce92cb7b0a33a92a43cdf756668b35e6c66f723f07af7e-Screenshot_2025-04-04_at_13.21.46.png" />

As you can see, we formulated a nice message, and used the `value` from the API call from `step 1`. Our binding ends up to look like this:

```handlebars
You now have {{ steps.External Data Connector.response }} stargazers
```

And this works, because our Discord bot just sent this message

<Image border={false} src="https://files.readme.io/a00d149-discord-result.png" title="discord-result.png" />