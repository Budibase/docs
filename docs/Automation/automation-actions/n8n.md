---
title: n8n
excerpt: Trigger an n8n workflow from Budibase
deprecated: false
hidden: false
metadata:
  title: ''
  description: ''
  robots: index
next:
  description: ''
---
## Setup

Within **n8n** create a [Webhook trigger node](https://docs.n8n.io/integrations/builtin/core-nodes/n8n-nodes-base.webhook/). Optionally configure the *Authentication*, and select the desired *HTTP Method*.

Copy the webhook URL. Use the *Test URL* while you are building the workflow, then switch to the *Production URL* when you are ready.

Add any additional nodes you need after the webhook trigger.

## Budibase DB node

It is also possible to connect to the <Glossary>Budibase DB</Glossary> within your **n8n** workflow using the [budibase-db-n8n-node](https://github.com/melohagan/budibase-db-n8n-node).

Read more on installation: [Install community nodes in the n8n app](https://docs.n8n.io/integrations/community-nodes/installation/gui-install/).
After installing the community node, n8n exposes a Budibase DB node that you can add to your workflow.

## Triggering an n8n workflow from Budibase

Create or open a Budibase automation. For this example, use an [On demand](doc:app-action) automation.

Add the `n8n` automation action step, paste the webhook URL, and match the HTTP method to the n8n node.

Run a test. If the webhook is configured correctly, the execution appears in the n8n workflow history.

### Authorization

The Authorization field maps to the [Authorization HTTP header](https://developer.mozilla.org/en-US/docs/Web/HTTP/Headers/Authorization).

For Basic auth, provide the header in this format:

```text
Basic BASE64_ENCODED(username:password)
```

If the header is missing or malformed, the request returns `401`.

> 🚧 Keep credentials safe
>
> Ideally you should not save credentials as plain text in your Budibase apps. Use [Environment variables 🔒](doc:environment-variables) to keep these credentials safe!

## Passing Budibase array to n8n

> 🚧 n8n doesn't accept query step bindings
>
> * Currently n8n payload won't accept Budibase's query step bindings. Instead you have to first return it via a JavaScript step and then use that output in the n8n step.

This is going to be a very simple example.

1. Add a query step before the n8n action step
2. Limit the query result set if needed
3. Add a JavaScript step that returns the query rows in a payload shape n8n accepts
4. Pass the JavaScript output into the n8n payload
5. Test the automation

The output should appear in the n8n execution history with the payload you sent from Budibase.
