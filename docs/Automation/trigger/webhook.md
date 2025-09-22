---
title: Webhook
excerpt: >-
  Trigger your Budibase automations when something happens in an external
  application
deprecated: false
hidden: false
metadata:
  title: ''
  description: ''
  robots: noindex
next:
  description: ''
---
> A webhook is an HTTP-based callback function that allows lightweight, event-driven communication between two APIs.

Contextually, webhooks allow Budibase to listen for an external application event, and trigger an automation. A payload will be included in the trigger that gives Budibase information about the event.

<HTMLBlock>{`
<iframe src="https://player.vimeo.com/video/746819163?h=8810e10ddd&title=0&portrait=0&byline=0" style="margin-top:-100px; margin-bottom: -50px;" width="640" height="564" frameborder="0" allow="autoplay; fullscreen" allowfullscreen></iframe>
`}</HTMLBlock>

## Setup

Create a new automation and select `Webhook` as the trigger.

![](https://files.readme.io/859449a-Screenshot_2022-08-31_at_13.38.49.png)

This will present you with a box that contains two URLs:

![](https://files.readme.io/aeacc2a-Screenshot_2022-08-31_at_14.16.40.png)

The **Schema URL** is required to tell Budibase what payload to expect from the external application. 

Click the `Set Up Webhook` button. This will bring up a dialog with the schema URL. Copy the schema URL. 

Let's assume for this example we want to save a row to a Budibase table any time a new issue is created in our GitHub repo. 

Conveniently we can grab an [example payload](https://docs.github.com/en/developers/webhooks-and-events/webhooks/webhook-events-and-payloads#webhook-payload-example-when-someone-edits-an-issue) from the GitHub webhook docs. 

Next open Postman, or any other REST query tool, and POST the example payload to the schema URL.

![](https://files.readme.io/2151db6-Screenshot_2022-08-31_at_14.17.38.png)

After you receive the `200 OK` response, you should now see that Budibase has successfully picked up on the schema. Click *Finished*.

![](https://files.readme.io/0ca3d13-Screenshot_2022-08-31_at_14.18.04.png)

Finally click the `Publish` button in the top right of the screen to make the automation live.

## Link the trigger application

Copy the **Trigger URL** from your Budibase automation and paste it into the *Payload URL* of your GitHub webhook.  

Make sure **Content type** is *application/json*

![](https://files.readme.io/33f3c2c-Screenshot_2022-08-31_at_16.55.44.png)

Click `Add webhook`. 

To test, add an new issue in your GitHub repo. Within a minute, you will be able to see that the automation was triggered via the [Automtion history](https://docs.budibase.com/docs/logs).

![](https://files.readme.io/ec0b85c-Screenshot_2022-08-31_at_14.25.13.png)

![](https://files.readme.io/b65fd04-Screenshot_2022-08-31_at_14.28.09.png)

## Trigger body

Now that we know that GitHub events are being picked up by our Budibase application, lets do something with the event data. For example, we may want to create a new row in our own 'Issues' table.

Create a new 'Issues' table with a text *Name* column, a number *Number* column, and an options type *Tag* column.

![](https://files.readme.io/90062d0-Screenshot_2022-08-31_at_14.31.23.png)

![](https://files.readme.io/0685387-Screenshot_2022-08-31_at_14.31.44.png)

Next within the *Automate* tab, add an additional [Condition](https://docs.budibase.com/docs/conditions-1) step. This is because we only want to create a row if the GitHub action type is *opened*. 

Add the `{{ trigger.action }}` binding to the *Reference Value* field. 

![](https://files.readme.io/85f624c-Screenshot_2022-08-31_at_16.58.12.png)

Select condition *Equals* comparison value 'opened'.

![](https://files.readme.io/d2ce01f-Screenshot_2022-08-31_at_16.58.31.png)

Add another automation step for **Create Row**. Select *Use bindings* as well as the 'Issues' table. Fill in the bindings.

![](https://files.readme.io/8c0fc8b-Screenshot_2022-08-31_at_14.49.01.png)

You can click `Finish and test automation` to verify your automation. Don't forget to press **Publish** when you're done.

Now when a new issue is created in your GitHub repo, you should see a new row in your Budibase table.

![](https://files.readme.io/cd4d76d-Screenshot_2022-08-31_at_16.59.39.png)

![](https://files.readme.io/b50e4be-Screenshot_2022-08-31_at_17.00.25.png)
