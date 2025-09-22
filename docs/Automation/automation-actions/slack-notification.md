---
title: Slack
excerpt: This tutorial will help you add a Slack automation to your Budibase app.
deprecated: false
hidden: false
metadata:
  title: ''
  description: ''
  robots: index
next:
  description: ''
---
The Slack notification is a webhook that allows you to send notifications from your Budibase app to a Slack channel.

## Settings

The Slack [Action](doc:automation-actions) has two settings:

[block:parameters]
{
  "data": {
    "h-0": "Setting",
    "h-1": "Description",
    "0-0": "Incoming Webhook URL",
    "0-1": "Further information and directions on how to find your Slack channel's webhook URL:  \n  \n<https://slack.com/intl/en-gb/help/articles/115005265063-Incoming-webhooks-for-Slack>  \n  \n<https://api.slack.com/messaging/webhooks>",
    "1-0": "Message",
    "1-1": "The content you would like to send to your Slack channel when your automation is triggered."
  },
  "cols": 2,
  "rows": 2,
  "align": [
    "left",
    "left"
  ]
}
[/block]


## Tutorial

The following tutorial will demonstrate how to send a Slack notification when a new record is created. We will assume you have your data setup and design screens created. If you don't, check out the [Quickstart: Budibase DB](doc:build-a-crud-app).

Our Slack notification automation will consist of two automation blocks:

1. Trigger - Row created
2. Action - Slack notification

Click the add automation button.

### Add Trigger - Row created

Name your automation. We will name ours `Slack notification`. Select the `Row Created` trigger. Then click `Save`.

[block:image]
{
  "images": [
    {
      "image": [
        "https://files.readme.io/ef3372292cee5dd24a839950e2ef6fee84064116e6cfd75079e6441632175dc3-Screenshot_2025-04-15_at_09.10.17.png",
        "CleanShot 2022-04-19 at 15.14.00.png",
        1253
      ],
      "align": "center",
      "caption": "row created trigger"
    }
  ]
}
[/block]


Now click the SETUP dropdown on your new automation block, and select your table.

[block:image]
{
  "images": [
    {
      "image": [
        "https://files.readme.io/979de9a-CleanShot_2022-04-19_at_15.16.56.png",
        "CleanShot 2022-04-19 at 15.16.56.png",
        597
      ],
      "align": "center",
      "caption": "trigger setup"
    }
  ]
}
[/block]


### Add Action - Slack

Now click the small plus icon button under the Trigger automation block, select Slack, then click Save.

![](https://files.readme.io/ebd020f-CleanShot_2022-04-19_at_15.18.55.png "CleanShot 2022-04-19 at 15.18.55.png")

Now it's time to set up our Slack action. If you don't have a Slack channel, please set one up. To get your Incoming Webhook URL, [create a Slack App](https://api.slack.com/apps?new_app=1).

When creating a Slack app, choose 'From Scratch'.

![](https://files.readme.io/6eeea71-CleanShot_2022-04-19_at_15.23.05.png "CleanShot 2022-04-19 at 15.23.05.png")

Name your Slack app, and choose your Workspace.

![](https://files.readme.io/733cc0d-CleanShot_2022-04-19_at_15.24.44.png "CleanShot 2022-04-19 at 15.24.44.png")

Then select Incoming Webhooks.

[block:image]
{
  "images": [
    {
      "image": [
        "https://files.readme.io/a75e819-CleanShot_2022-04-19_at_15.25.06.png",
        "CleanShot 2022-04-19 at 15.25.06.png",
        684
      ],
      "align": "center",
      "border": true
    }
  ]
}
[/block]


Activate incoming webhooks by switching on the toggle.

[block:image]
{
  "images": [
    {
      "image": [
        "https://files.readme.io/d101456-CleanShot_2022-04-19_at_15.25.57.png",
        "CleanShot 2022-04-19 at 15.25.57.png",
        673
      ],
      "align": "center",
      "border": true
    }
  ]
}
[/block]


Select the Add New Webhook to Workspace button. 

[block:image]
{
  "images": [
    {
      "image": [
        "https://files.readme.io/6cee43a-CleanShot_2022-04-19_at_15.26.39.png",
        "CleanShot 2022-04-19 at 15.26.39.png",
        668
      ],
      "align": "center",
      "border": true
    }
  ]
}
[/block]


Now select the channel you would like to post to.

[block:image]
{
  "images": [
    {
      "image": [
        "https://files.readme.io/7d817c2-CleanShot_2022-04-19_at_15.27.36.png",
        "CleanShot 2022-04-19 at 15.27.36.png",
        529
      ],
      "align": "center",
      "border": true
    }
  ]
}
[/block]


Slack will generate you a webhook. Click the Copy button to copy your webhook. 

[block:image]
{
  "images": [
    {
      "image": [
        "https://files.readme.io/e711e43-CleanShot_2022-04-19_at_15.28.33.png",
        "CleanShot 2022-04-19 at 15.28.33.png",
        673
      ],
      "align": "center",
      "border": true
    }
  ]
}
[/block]


Paste your Slack Webhook URL into the Incoming Webhook Url input within your [Action](doc:automation-actions) automation block.

[block:image]
{
  "images": [
    {
      "image": [
        "https://files.readme.io/c6d0f2ec1332543e811824fd1670c7d273c4c44c176c2df309fd7c4c3ef9a3f6-Screenshot_2025-04-15_at_09.14.26.png",
        "CleanShot 2022-04-19 at 15.30.08.png",
        639
      ],
      "align": "center"
    }
  ]
}
[/block]


In the Message input, add the message you would like Budibase to post to your Slack channel when a new row is created. You can bind values from the newly created record to your message. For our use case, I want to send the following notification to our channel:

```handlebars
Woohoo, we just made a new sale in {{ trigger.row.Country }}

Check out the sale using the link below:
https://joe.budibase.app/app/tutorials#/sales/{{ trigger.id }}
```

From the above, you can see I have used automation [Bindings](doc:bindings) to pull data into our message.

[block:image]
{
  "images": [
    {
      "image": [
        "https://files.readme.io/a5dbb821609c0357cd2a30241f77e3ec5eeee493b69293829b7a560d339d8059-Screenshot_2025-04-15_at_09.14.55.png",
        "CleanShot 2022-04-19 at 15.44.02.gif",
        798
      ],
      "align": "center"
    }
  ]
}
[/block]


#### Trigger output bindings - Trigger.Row

To pull data from your Trigger record, you can use Trigger Output helpers (see Gif above). Using the helper `trigger.row` I now have access to that data from our newly created record. I add the field/column title to the binding to pull a specific field back: `trigger.row.Country`. 

To allow users to access the specific record page, we must add a link to our message. 

**To create a link, we must first Publish our application.** Save the automation, click the Publish app button. Now, go back to the app portal page (Click the Budibase icon). Locate your app, click the more icon, and click View published app. Copy your base URL - We will improve this experience soon.

#### Trigger output bindings - Trigger.ID

Now, click into your app and go back to the automation we were just creating and into the message section (where we were above). Paste your URL, and append it with the Trigger ID output. Click Save.

### Test automation

Click `Finish and test automation`. Then select your table from the dropdown.

[block:image]
{
  "images": [
    {
      "image": [
        "https://files.readme.io/84f44712d655ed63258dd7cd2049a71da02438d3be17e305f208eab163a55349-Screenshot_2025-04-15_at_09.15.25.png",
        "CleanShot 2022-04-19 at 16.42.26.png",
        494
      ],
      "align": "center"
    }
  ]
}
[/block]


In the Column/Field you referenced in your trigger.row binding, add a value - we'll add `Budiland` to the Country field. Click test. You should now see a message in your Slack channel.

[block:image]
{
  "images": [
    {
      "image": [
        "https://files.readme.io/dde9e37-CleanShot_2022-04-19_at_16.41.362x.png",
        "CleanShot 2022-04-19 at 16.41.36@2x.png",
        2076
      ],
      "align": "center",
      "border": true
    }
  ]
}
[/block]


If you are happy, click Publish app. Add a new record within your app, and like magic, watch as a new Slack notification appears within your channel. 

[block:html]
{
  "html": "<div style=\"padding:56.25% 0 0 0;position:relative;\"><iframe src=\"https://player.vimeo.com/video/700889958?h=e95984a549&amp;badge=0&amp;autopause=0&amp;player_id=0&amp;app_id=58479\" frameborder=\"0\" allow=\"autoplay; fullscreen; picture-in-picture\" allowfullscreen style=\"position:absolute;top:0;left:0;width:100%;height:100%;\" title=\"Budibase to Slack notification\"></iframe></div><script src=\"https://player.vimeo.com/api/player.js\"></script>"
}
[/block]