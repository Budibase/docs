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

<Image align="center" src="https://files.readme.io/05f78ca-webhook_n8n.png" />

Click on the webhook URL to copy it to clipboard. You can start with the *Test URL* to make sure things are working as expected before using the *Production URL*.

Connect additional nodes to your **n8n** webhook trigger as desired.

## Budibase DB node

It is also possible to connect to the <Glossary>Budibase DB</Glossary> within your **n8n** workflow using the [budibase-db-n8n-node](https://github.com/melohagan/budibase-db-n8n-node).

Read more on installation: [Install community nodes in the n8n app](https://docs.n8n.io/integrations/community-nodes/installation/gui-install/).

<Image alt="Install the Budibase DB node" align="center" border={true} src="https://files.readme.io/bd12cde-Screenshot_2024-02-21_at_10.01.16.png">
  Install the Budibase DB node
</Image>

<Image alt="Budibase DB node will then be available" align="center" border={true} src="https://files.readme.io/0f65f09-Screenshot_2024-02-21_at_10.03.30.png">
  Budibase DB node will then be available
</Image>

## Triggering an n8n workflow from Budibase

With the webhook setup in **n8n**, and the URL copied, you can now add the `n8n` automation action step in your automation.

<Image alt="Adding the n8n action step" align="center" src="https://files.readme.io/f567feb-n8n_step.png">
  Adding the n8n action step
</Image>

Next enter the *Webhook URL* that you copied, and make sure the *Method* matches correctly.

<Image alt="Triggering an n8n workflow from a Budibase automation" align="center" src="https://files.readme.io/7d54bb0e2fea49ec74e2725dc02e186ca6cc0b326b2a37464cc0ec19a9b0b7fa-Screenshot_2024-11-07_at_11.46.27.png">
  Triggering an n8n workflow from a Budibase automation
</Image>

### Authorization

The authorization field is optional, and represents the [Authorization HTTP header](https://developer.mozilla.org/en-US/docs/Web/HTTP/Headers/Authorization). 

Consider an **n8n** webhook with *Basic* authentication set as *user*: 'test', *password*: 'admin'.

<Image align="center" src="https://files.readme.io/7a6bb16-Screenshot_2024-02-21_at_10.26.12.png" />

The automation action step will return with a `401` error if the *Authorization* field is not set:

<Image alt="Authorization needs to be set" align="center" src="https://files.readme.io/5b80256-Screenshot_2024-02-21_at_10.29.53.png">
  Authorization needs to be set
</Image>

In the case of *Basic* auth you need to provide the header in the following format:`Basic BASE64_ENCODED(username:password)`, which would look result in something like this:

<Image align="center" src="https://files.readme.io/e21782d72607ecd78e8ccd252cdc64dfb751334d8d02b310a48a442caf3fbf79-Screenshot_2024-11-07_at_11.47.13.png" />

> 🚧 Keep credentials safe
>
> Ideally you should not save credentials as plain text in your Budibase apps. Use [Environment variables 🔒](doc:environment-variables) to keep these credentials safe!
