---
title: Cron job
excerpt: Trigger your Budibase automations using a cron job
deprecated: false
hidden: false
metadata:
  title: ''
  description: ''
  robots: noindex
next:
  description: ''
---
The cron job trigger is the ideal way to periodically run queries, fetch data or even send emails.

For this guide, we're going to be fetching the Stargazer count of a Github repository every night at 3 AM on every working day and sending a Discord notification for it.

## Creating the automation

To create an automation with the cron job trigger, head over to the Automation Section, and create a new Automation by clicking the `+` icon in the left-hand menu . A dialog will pop up, in which you can enter the name of your automation, and you can select the `Cron Trigger`

![](https://files.readme.io/18b8b94-create-cron-trigger.png "create-cron-trigger.png")

Then, click `Save` and a new automation will be created with a `Cron Trigger`.

## Configuring the cron expression

The cron job expression is a series of numbers or stars. The order is from small to big:

* Minutes
* Hours
* Day of the Month
* Month
* Day of the Week

Cron Scheduling can be very powerful, but you'll need to understand syntax. For every field you can use the following expressions:

* Plain numbers: From 0 to 59 for minutes, 0-23 for hours and 1-12 for Months.
* Ranges: `5-10` in the minutes section would mean every minute from the 5th until the 10th minute
* Separations: Multiple numbers or ranges, like `4,8,12` in the months column would be the 4th, 8th and 12th month only. Separations can also have ranges, such as `5-10,35-40` in the minutes column would be every minute between the 5th and 10th minute, AND every minute between the 35th and 40th minute.
* A `*`: This means `every`. So if you have only stars everywhere, that means every minute, of every hour, of every day of every month.

Combinations of everything can lead up to complicated schedules! 

For our example, we're going to be running this cronjob every working day, at 3AM. We end up with this cron expression: `0 3 * * 1-5`

![](https://files.readme.io/bd6f364-cron-trigger-setup.png "cron-trigger-setup.png")

## Timestamp binding

A binding is available for the timestamp of when the cron job was triggered.\
This returns the number of <a href="https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Date/getTime">epoch milliseconds</a>

![](https://files.readme.io/b212faa-Screenshot_2022-05-18_at_16.03.46.png "Screenshot_2022-05-18_at_16.03.46.png")

## Performing an API call

Now that we've set up our `Cron Trigger` it is time to perform a REST call to fetch some information. For this tutorial we've created a new [REST API](doc:rest) Data Source, added [Bindings](doc:rest-bindings) to the API call to allow customization, and we've set up a [Transformer](doc:transformers) to turn the data in quick usable data. But you can set up whatever you want here, even regular queries to <Glossary>Data Sources</Glossary>.

If you want to read more about setting up a REST API, Bindings and Transformers we recommend checking out the linked pages.

We end up with something like this:

![](https://files.readme.io/25f4675-api-call.png "api-call.png")

When running a test you can see the API call and the transformer worked as expected, and it returns the stargazer count of the Github repository of choice.

![](https://files.readme.io/3cc9e9f-api-call-result.png "api-call-result.png")

For reference, we've transformed the result from the public <a href="https://docs.github.com/en/rest/search#search-repositories" target="_blank">Github Search API</a> like this:

```javascript
return data.items[0].stargazers_count
```

## Using the data

Now we have a scheduled Cron Trigger, and an API call is done at that exact time. The only thing that remains is using the result of the API call. For this purpose, we're going to be firing a Discord notification.

First, we're retrieving a DIscord Webhook URL, setting the botname, optionally add a nice profile picture, and then set the binding to display the number of stars.

![](https://files.readme.io/1213785-discord-setup.png "discord-setup.png")

As you can see, we formulated a nice message, and used the `value` from the API call from `step 1`. Our binding ends up to look like this:

```handlebars
You now have {{ steps.1.info.0.value }} stargazers
```

And this works, because our Discord bot just sent this message

![](https://files.readme.io/a00d149-discord-result.png "discord-result.png")

## Video tutorial

<HTMLBlock>{`
<iframe src="https://player.vimeo.com/video/746819203?h=8e0b6ec994&title=0&portrait=0&byline=0" style="margin-top: -100px;" width="640" height="564" frameborder="0" allow="autoplay; fullscreen" allowfullscreen></iframe>
`}</HTMLBlock>
