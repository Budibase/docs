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
  robots: index
next:
  description: ''
---
Use a webhook trigger when an external service needs to start a Budibase automation.

The external system sends a JSON payload to Budibase, and Budibase uses that payload to start the automation.

## Set up the trigger

1. Create a new automation.
2. Select `Webhook` as the trigger.
3. Open the trigger settings.
4. Copy the schema URL.
5. Send a sample payload to that URL.
6. Refresh the builder after Budibase accepts the schema.

Use a payload from the external service you plan to connect, then shape the automation around the fields Budibase receives.

## Link the external app

Copy the trigger URL from Budibase into the external system’s webhook configuration.

Make sure the external service sends JSON to the trigger URL.

## Build from the payload

Once Budibase knows the payload shape, you can add steps that use the trigger data.

Common patterns include:

* Creating a row from the payload
* Filtering on a field such as an action or event type
* Triggering a follow-up automation

## Test the workflow

After publishing the automation:

1. Send a real event from the external app.
2. Confirm the automation runs.
3. Check the automation history for the result.
4. Verify any downstream row or action changes.

## Related guides

* [Automation steps](doc:automation-steps)
* [Automation testing](doc:activating-and-testing)
* [Automation logs](doc:logs)
