---
title: Discord
excerpt: This tutorial will help you add a Discord automation to your Budibase app.
deprecated: false
hidden: false
metadata:
  title: ''
  description: ''
  robots: index
next:
  description: ''
---
The Discord notification is a webhook that allows you to send notifications from your Budibase app to a Discord channel.
[block:api-header]
{
  "title": "Settings"
}
[/block]
The Discord [Action](doc:automation-actions) has four settings:
[block:parameters]
{
  "data": {
    "h-0": "Setting",
    "h-1": "Description",
    "0-0": "Incoming Webhook URL",
    "1-0": "Bot Name",
    "0-1": "Add your Discord Webhook URL.\n\nTo find your Discord Webhook URL:\n  * Open your Server Settings and head into the Integrations tab.\n  * Navigate to the Webhooks section and either View Webhooks or Create a new webhook.\n\nFurther information and directions on how to find your Discord webhook URL:\n\nhttps://support.discord.com/hc/en-us/articles/228383668-Intro-to-Webhooks",
    "1-1": "Copy the name of your bot from Discord",
    "3-0": "Message",
    "3-1": "The content you would like to send to your Discord channel when your automation is triggered.",
    "2-0": "Bot Avatar",
    "2-1": "To give your bot an avatar, add your image link to the Bot Avatar field. For example:\n\nhttps://res.cloudinary.com/daog6scxm/image/upload/v1632818347/logo/budibase-icon-500_svrfwf.png\n\nOn Discord, the avatar size is 128 x 128 pixels. However, you'll actually want to upload a larger square image. Discord will automatically scale your image down to the appropriate dimensions, but you'll retain high-quality resolution in the process."
  },
  "cols": 2,
  "rows": 4
}
[/block]
&nbsp;

---

&nbsp;
[block:api-header]
{
  "title": "Tutorial - When a new record is added, send a Discord notification"
}
[/block]
The following tutorial will demonstrate how to send a Discord notification when a new record is created. We will assume you have your data setup and design screens built. If you don't, check out the [Quickstart: Budibase DB](doc:build-a-crud-app).

Our Discord notification automation will consist of two automation blocks:
1. Trigger - Row created
2. Action - Discord notification

Click the add automation icon.
[block:image]
{
  "images": [
    {
      "image": [
        "https://files.readme.io/f9da284-CleanShot_2022-04-27_at_12.31.192x.png",
        "CleanShot 2022-04-27 at 12.31.19@2x.png",
        502,
        74,
        "#272727"
      ]
    }
  ]
}
[/block]
&nbsp;

### Add Trigger - Row created

Give your new automation a name - we will name ours `Discord notification`. Select the 'Row Created' trigger. Then click 'Save'.
[block:image]
{
  "images": [
    {
      "image": [
        "https://files.readme.io/59b0157-CleanShot_2022-04-27_at_12.32.282x.png",
        "CleanShot 2022-04-27 at 12.32.28@2x.png",
        1866,
        1508,
        "#131314"
      ]
    }
  ]
}
[/block]
Now click the 'SETUP' dropdown on your new automation block, and select your table - in our case Sales.
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
&nbsp;

### Add Action - Discord
Now click the small plus icon button under the Trigger automation block, select Discord, then click Save.
[block:image]
{
  "images": [
    {
      "image": [
        "https://files.readme.io/5112809-CleanShot_2022-04-27_at_12.33.51.gif",
        "CleanShot 2022-04-27 at 12.33.51.gif",
        1200,
        675,
        "#1a1a1a"
      ],
      "caption": "Add discord action to budibase"
    }
  ]
}
[/block]
Now it's time to set up our Discord action. If you don't have a Discord channel, [please set one up](https://discord.com/blog/starting-your-first-discord-server#:~:text=To%20make%20a%20new%20channel,and%20choose%20%E2%80%9Ccreate%20channel.%E2%80%9D). 

#### Get your incoming Webhook

Open your Server Settings and head into the Integrations tab. Click on View Webhooks, select your Webhook, and click 'Copy Webhook Url'.
[block:image]
{
  "images": [
    {
      "image": [
        "https://files.readme.io/6449cc6-CleanShot_2022-04-27_at_12.16.062x.png",
        "CleanShot 2022-04-27 at 12.16.06@2x.png",
        1432,
        576,
        "#383a3f"
      ]
    }
  ]
}
[/block]
#### Create a new Discord Webhook
If you don't have a Webhook to connect to, click the "Create Webhook" button to create a new webhook.

You'll have a few options here. You can:

  * **Edit the avatar: **By clicking the avatar next to the Name in the top left
  * **Choose what channel the Webhook posts to:** By selecting the desired text channel in the dropdown menu
  * **Name your Webhook: **Good for distinguishing multiple webhooks for multiple different services.

Discord will generate you a webhook. Click the 'Copy Webhook URL' button.
[block:image]
{
  "images": [
    {
      "image": [
        "https://files.readme.io/dad41fa-CleanShot_2022-04-27_at_12.15.162x.png",
        "CleanShot 2022-04-27 at 12.15.16@2x.png",
        1336,
        572,
        "#383a43"
      ]
    }
  ]
}
[/block]
Paste your Discord Webhook URL into the Incoming Webhook Url input within your [Action](doc:automation-actions) automation block.

In the Bot name field, add the name of your Bot. We've not got an avatar, so we'll leave the Bot avatar field blank.
[block:image]
{
  "images": [
    {
      "image": [
        "https://files.readme.io/992b1a9-CleanShot_2022-04-27_at_12.17.442x.png",
        "CleanShot 2022-04-27 at 12.17.44@2x.png",
        1424,
        900,
        "#1e2126"
      ]
    }
  ]
}
[/block]
In the Message input, add the message you would like Budibase to post to your Budibase channel when a new row is created. You can bind values from the newly created record to your message. For our use case, I want to send the following notification to our channel:
[block:code]
{
  "codes": [
    {
      "code": "We just made a new sale in {{ trigger.row.Country }}\n\nCheck out the sale using the link below:\nhttps://joe.budibase.app/app/tutorials#/sales/{{ trigger.id }}\n\n",
      "language": "handlebars"
    }
  ]
}
[/block]
From the above, you can see I have used automation [bindings](doc:bindings) to pull data into our message. Check out the following documentation to learn more about how to use [Data in automations](doc:contextual-bindings).
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
Click `Finish and test automation`. **Then select your table from the dropdown.**

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
In the Column/Field you referenced in your trigger.row binding above (we used Country), add a value - we'll add `Budiland` to the 'Country field'. Click 'Test'. You should now see a message on your Discord channel.

If you are happy, click 'Publish app'. Add a new record within your app, and like magic, watch as a new Discord notification appears within your channel.
[block:image]
{
  "images": [
    {
      "image": [
        "https://files.readme.io/839f2a1-CleanShot_2022-04-27_at_12.25.212x.png",
        "CleanShot 2022-04-27 at 12.25.21@2x.png",
        2696,
        198,
        "#3d3e44"
      ]
    }
  ]
}
[/block]