---
title: Discord
excerpt: Add Discord notifications to your Budibase automations.
deprecated: false
hidden: false
metadata:
  title: ''
  description: ''
  robots: index
next:
  description: ''
---
The Discord notification is a webhook that sends messages from your Budibase app to a Discord channel.

## Settings

The Discord [Action](doc:automation-actions) has four settings:

<Table align={["left","left"]}>
  <thead>
    <tr>
      <th>
        Setting
      </th>

      <th>
        Description
      </th>
    </tr>
  </thead>

  <tbody>
    <tr>
      <td>
        Incoming Webhook URL
      </td>

      <td>
        Add your Discord Webhook URL.

        To find the URL, open Server Settings, go to Integrations, and open the Webhooks section. You can then view an existing webhook or create a new one.
      </td>
    </tr>

    <tr>
      <td>
        Bot Name
      </td>

      <td>
        Copy the name of your bot from Discord.
      </td>
    </tr>

    <tr>
      <td>
        Bot Avatar
      </td>

      <td>
        Add an image URL to the Bot Avatar field if you want a custom avatar. Discord scales the image automatically, so use a larger square image for best results.
      </td>
    </tr>

    <tr>
      <td>
        Message
      </td>

      <td>
        The content you want to send to your Discord channel when your automation is triggered.
      </td>
    </tr>
  </tbody>
</Table>

 

***

 

## Tutorial - When a new record is added, send a Discord notification

This tutorial shows how to send a Discord notification when a new record is created. It assumes your data and screens are already set up. If not, see the [Quickstart: Budibase DB](doc:build-a-crud-app).

Our Discord notification automation will consist of two automation blocks:

1. Trigger - Row created
2. Action - Discord notification

### Add Trigger - Row created

Give your new automation a name. This example uses `Discord notification`. Select the `Row Created` trigger, then click `Save`.

Open the `Row created` automation and select your table. In this example, the table is `Sales`.

### Add Action - Discord

Click the small plus icon under the Trigger automation step, select Discord, then click `Save`.

Now set up the Discord action. If you do not have a Discord channel, create one first.

#### Get your incoming Webhook

Open your Server Settings, go to the Integrations tab, open Webhooks, select your webhook, and click `Copy Webhook Url`.

#### Create a new Discord Webhook

If you do not have a webhook yet, click `Create Webhook`.

You can:

* **Edit the avatar:** By clicking the avatar next to the Name in the top left
* **Choose what channel the Webhook posts to:** By selecting the desired text channel in the dropdown menu
* **Name your Webhook:** Good for distinguishing multiple webhooks for multiple different services.

Discord will generate a webhook. Click `Copy Webhook URL`.

Paste your Discord Webhook URL into the Discord Webhook URL input in the [Action](doc:automation-actions) step.

In the Bot name field, add the name of your bot. Leave the Bot avatar field blank if you do not want one.

In the Message input, add the message Budibase should post when a new row is created. You can bind values from the new record. In this example, use:

```handlebars
We just made a new sale in {{ trigger.row.Country }}

Check out the sale using the link below:
https://joe.budibase.app/app/tutorials#/sales/{{ trigger.id }}
```

The example uses automation [bindings](doc:bindings) to pull data into the message. For more detail, see [Data in automations](doc:contextual-bindings).

#### Trigger output bindings - Trigger.Row

To pull data from your trigger record, use `trigger.row`. Add the field or column name to the binding to target a specific value, such as `trigger.row.Country`.

To let users open the specific record page, add a link to the message.

To create a link, publish the application first. Save the automation, click `Publish app`, open the published app, and copy the base URL.

#### Trigger output bindings - Trigger.ID

Go back to the automation message, paste your base URL, append the Trigger ID output, and click `Save`.

### Test automation

Click `Finish and test automation`, then select your table from the dropdown.

In the column or field you referenced in your `trigger.row` binding, add a value. This example uses `Budiland` in the `Country` field. Click `Test` to send a message to your Discord channel.

If everything looks correct, click `Publish app`. Add a new record in your app and confirm that a Discord notification appears in your channel.
