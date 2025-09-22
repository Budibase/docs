---
title: Cron job
excerpt: Trigger your Budibase automations using a cron job
deprecated: false
hidden: false
metadata:
  title: ''
  description: ''
  robots: index
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

- Minutes
- Hours
- Day of the Month
- Month
- Day of the Week

We have presets available that can be selected to generate a cron expression for you. Additionally, there is an AI column that you can prompt to generate CRON expressions for you.

Cron Scheduling can be very powerful, but you'll need to understand syntax. For every field you can use the following expressions:

- Plain numbers: From 0 to 59 for minutes, 0-23 for hours and 1-12 for Months.
- Ranges: `5-10` in the minutes section would mean every minute from the 5th until the 10th minute
- Separations: Multiple numbers or ranges, like `4,8,12` in the months column would be the 4th, 8th and 12th month only. Separations can also have ranges, such as `5-10,35-40` in the minutes column would be every minute between the 5th and 10th minute, AND every minute between the 35th and 40th minute.
- A `*`: This means `every`. So if you have only stars everywhere, that means every minute, of every hour, of every day of every month.

Combinations of everything can lead to complicated schedules! 

For example, we will run this cronjob every working day, at 3AM. We end up with this cron expression: `0 3 * * 1-5`

[block:image]
{
  "images": [
    {
      "image": [
        "https://files.readme.io/ac360a02b0040ae0641cbfd3c796e56a8b48162b322e53d0e367bbea8fd2c69f-Screenshot_2024-10-24_at_10.55.26.png",
        "cron-trigger-setup.png",
        ""
      ],
      "align": "center"
    }
  ]
}
[/block]


The last section of the CRON automation shows a summary of when the automation is going to the next trigger. This extra layer helps you understand what your CRON expression is doing after writing it.

## Timestamp binding

A binding is available for the timestamp of when the cron job was triggered.  
This returns the number of <a href="https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Date/getTime">epoch milliseconds</a>

[block:image]{"images":[{"image":["https://files.readme.io/515145ac4ecde0dc4606a400b931e3a9b3418b263d6e90316a05d33e26be20c1-Screenshot_2024-10-24_at_13.12.55.png","Screenshot_2022-05-18_at_16.03.46.png",null],"align":"center"}]}[/block]

## Performing an API call

Now that we've set up our `Cron Trigger` it is time to perform a REST call to fetch some information. For this tutorial we've created a new [REST API](doc:rest) Data Source, added [Bindings](doc:rest-bindings) to the API call to allow customization, and we've set up a [Transformer](doc:transformers) to turn the data in quick usable data. But you can set up whatever you want here, even regular queries to <<glossary:Data Sources>>.

If you want to read more about setting up a REST API, Bindings and Transformers we recommend checking out the linked pages.

We end up with something like this:

[block:image]{"images":[{"image":["https://files.readme.io/8f36aa4f16d3bdb2f126919314bdf4c7e05306e70207180ecf7d92e8418db331-Screenshot_2024-10-24_at_13.15.04.png","api-call.png",null],"align":"center"}]}[/block]

When running a test you can see the API call and the transformer worked as expected, and it returns the stargazer count of the Github repository of choice.

[block:image]{"images":[{"image":["https://files.readme.io/7c77adaf816f59b0cd6892a3820ce9aa5b7f2fea4bfafc28d04bbe9f7f32946d-Screenshot_2024-10-24_at_13.15.17.png","api-call-result.png",null],"align":"center"}]}[/block]

For reference, we've transformed the result from the public <a href="https://docs.github.com/en/rest/search#search-repositories" target="_blank">Github Search API</a> like this:

```javascript
return data.items[0].stargazers_count
```

## Using the data

Now we have a scheduled Cron Trigger, and an API call is done at that exact time. The only thing that remains is using the result of the API call. For this purpose, we're going to be firing a Discord notification.

First, we're retrieving a DIscord Webhook URL, setting the botname, optionally add a nice profile picture, and then set the binding to display the number of stars.

[block:image]{"images":[{"image":["https://files.readme.io/9bb0c2ce017e51b7aab41c0ebf6a38efda07484d18230fa8057a5f2040d86c1a-Screenshot_2024-10-24_at_13.18.02.png","discord-setup.png",null],"align":"center"}]}[/block]

As you can see, we formulated a nice message, and used the `value` from the API call from `step 1`. Our binding ends up to look like this:

```handlebars
You now have {{ steps.External Data Connector.response }} stargazers
```

And this works, because our Discord bot just sent this message

![](https://files.readme.io/a00d149-discord-result.png "discord-result.png")

## Video tutorial

[block:html]
{
  "html": "<iframe src=\"https://player.vimeo.com/video/746819203?h=8e0b6ec994&title=0&portrait=0&byline=0\" style=\"margin-top: -100px;\" width=\"640\" height=\"564\" frameborder=\"0\" allow=\"autoplay; fullscreen\" allowfullscreen></iframe>"
}
[/block]