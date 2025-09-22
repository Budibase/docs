---
title: Slack
excerpt: This tutorial will help you add a Slack automation to your Budibase app.
deprecated: false
hidden: false
metadata:
  title: ''
  description: ''
  robots: noindex
next:
  description: ''
---
The Slack notification is a webhook that allows you to send notifications from your Budibase app to a Slack channel.
[block:api-header]
{
  "title": "Settings"
}
[/block]
The Slack [Action](doc:automation-actions) has two settings:
[block:parameters]
{
  "data": {
    "h-0": "Setting",
    "h-1": "Description",
    "0-0": "Incoming Webhook URL",
    "1-0": "Message",
    "0-1": "Further information and directions on how to find your Slack channel's webhook URL:\n\nhttps://slack.com/intl/en-gb/help/articles/115005265063-Incoming-webhooks-for-Slack\n\nhttps://api.slack.com/messaging/webhooks",
    "1-1": "The content you would like to send to your Slack channel when your automation is triggered."
  },
  "cols": 2,
  "rows": 2
}
[/block]

[block:api-header]
{
  "title": "Tutorial"
}
[/block]
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
        "https://files.readme.io/3b032dd-CleanShot_2022-04-19_at_15.14.00.png",
        "CleanShot 2022-04-19 at 15.14.00.png",
        1253,
        721,
        "#0f0f10"
      ],
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
        597,
        290,
        "#1c1c1c"
      ],
      "caption": "trigger setup"
    }
  ]
}
[/block]
### Add Action - Slack
Now click the small plus icon button under the Trigger automation block, select Slack, then click Save.
[block:image]
{
  "images": [
    {
      "image": [
        "https://files.readme.io/ebd020f-CleanShot_2022-04-19_at_15.18.55.png",
        "CleanShot 2022-04-19 at 15.18.55.png",
        1241,
        825,
        "#0e0e0f"
      ]
    }
  ]
}
[/block]
Now it's time to set up our Slack action. If you don't have a Slack channel, please set one up. To get your Incoming Webhook URL, [create a Slack App](https://api.slack.com/apps?new_app=1).

When creating a Slack app, choose 'From Scratch'.
[block:image]
{
  "images": [
    {
      "image": [
        "https://files.readme.io/6eeea71-CleanShot_2022-04-19_at_15.23.05.png",
        "CleanShot 2022-04-19 at 15.23.05.png",
        631,
        404,
        "#d1d1d1"
      ]
    }
  ]
}
[/block]
Name your Slack app, and choose your Workspace.
[block:image]
{
  "images": [
    {
      "image": [
        "https://files.readme.io/733cc0d-CleanShot_2022-04-19_at_15.24.44.png",
        "CleanShot 2022-04-19 at 15.24.44.png",
        662,
        545,
        "#c4c6c6"
      ]
    }
  ]
}
[/block]
Then select Incoming Webhooks.
[block:image]
{
  "images": [
    {
      "image": [
        "https://files.readme.io/a75e819-CleanShot_2022-04-19_at_15.25.06.png",
        "CleanShot 2022-04-19 at 15.25.06.png",
        684,
        654,
        "#f0f0f0"
      ],
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
        673,
        69,
        "#ebeeed"
      ],
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
        668,
        166,
        "#f6f6f6"
      ],
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
        529,
        471,
        "#f2f4f4"
      ],
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
        673,
        142,
        "#f4f4f4"
      ],
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
        "https://files.readme.io/8a6c8f4-CleanShot_2022-04-19_at_15.30.08.png",
        "CleanShot 2022-04-19 at 15.30.08.png",
        639,
        403,
        "#1c2027"
      ]
    }
  ]
}
[/block]
In the Message input, add the message you would like Budibase to post to your Slack channel when a new row is created. You can bind values from the newly created record to your message. For our use case, I want to send the following notification to our channel:
[block:code]
{
  "codes": [
    {
      "code": "Woohoo, we just made a new sale in {{ trigger.row.Country }}\n\nCheck out the sale using the link below:\nhttps://joe.budibase.app/app/tutorials#/sales/{{ trigger.id }}\n\n",
      "language": "handlebars"
    }
  ]
}
[/block]

From the above, you can see I have used automation [Bindings](doc:bindings) to pull data into our message.
[block:image]
{
  "images": [
    {
      "image": [
        "https://files.readme.io/22371d7-CleanShot_2022-04-19_at_15.44.02.gif",
        "CleanShot 2022-04-19 at 15.44.02.gif",
        798,
        426,
        "#1b1b1b"
      ]
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
        "https://files.readme.io/ac82ee9-CleanShot_2022-04-19_at_16.42.26.png",
        "CleanShot 2022-04-19 at 16.42.26.png",
        494,
        477,
        "#18181a"
      ]
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
        2076,
        900,
        "#f7f7f8"
      ],
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