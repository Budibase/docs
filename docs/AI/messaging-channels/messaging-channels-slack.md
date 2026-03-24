---
title: Slack messaging channel
deprecated: false
hidden: false
metadata:
  robots: index
---
Use this guide to deploy an agent to Slack after confirming [Agent chat](doc:agent-chat).

## Before you start

Make sure you have:

* A Slack workspace where you can create apps
* A live agent with an AI model connected
* Access to **Agents** -> your agent -> **Deployment**

## Configure Slack in Budibase

1. Open your agent in **Agents**
2. Go to **Deployment**
3. In **Messaging channels**, click **Manage** for **Slack**
4. Enter:
   * **Bot token**
   * **Signing secret**
   * **Idle timeout (minutes)** (optional)
5. Click **Save channel**
6. Copy the generated **Messaging endpoint URL**

## Configure your Slack app

### 1. Create or update app

Create a Slack app for your workspace, or use an existing one.

### 2. Add bot scopes

In **OAuth & Permissions**, add:

* `chat:write`
* `app_mentions:read`
* `im:history`
* `channels:history`
* `groups:history`
* `mpim:history`
* `users:read`

### 3. Configure event subscriptions

1. Open **Event Subscriptions**
2. Enable events
3. Set **Request URL** to the Budibase **Messaging endpoint URL**
4. Subscribe to bot events:
   * `app_mention`
   * `message.im`
   * `message.channels`
   * `message.groups`
   * `message.mpim`

### 4. Reinstall app

Reinstall the app to your workspace after changing scopes or events.

### 5. Invite bot

Invite the bot to channels you want it to serve, for example:

`/invite @your-bot`

## Enable and verify

1. In Budibase **Deployment**, toggle Slack to **Enabled**
2. In Slack, mention the bot in a channel or send a DM
3. Run `/link` and complete the Budibase account linking flow
4. Send a message and confirm the agent responds

Slack threads are used as conversation boundaries automatically.

If you send a message before linking, Budibase prompts you privately to complete account linking first.

## Troubleshooting

* `Not configured` in Budibase: confirm both **Bot token** and **Signing secret** are saved.
* Slack events not reaching Budibase: re-check **Request URL** and reinstall the app after scope/event changes.
* Bot does not respond in channels: confirm the bot was invited to that channel.
* Bot prompts to link before answering: run `/link` in Slack and complete the link handoff.
* Webhook route errors: use the exact Budibase-generated endpoint URL from **Deployment**.

## Related guides

* [Messaging channels](doc:messaging-channels)
* [Microsoft Teams messaging channel](doc:messaging-channels-microsoft-teams)
* [Discord messaging channel](doc:messaging-channels-discord)
