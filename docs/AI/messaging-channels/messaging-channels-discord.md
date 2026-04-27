---
title: Discord messaging channel
deprecated: false
hidden: false
metadata:
  robots: index
---
Use this guide to deploy an agent to Discord.

## Before you start

Make sure you have:

* A Discord application and bot
* A Discord server (guild) where you can install the bot
* A live agent with an AI model connected
* Access to **Agents** -> your agent -> **Deployment**

## Configure Discord in Budibase

1. Open your agent in **Agents**
2. Go to **Deployment**
3. In **Messaging channels**, click **Manage** for **Discord**
4. Enter:
   * **Application ID**
   * **Public key**
   * **Bot token**
   * **Guild ID**
   * **Idle timeout (minutes)** (optional)
5. Click **Enable channel**
6. Copy:
   * **Discord invite URL**
   * **Webhook URL**

## Configure your Discord app

1. Use the generated **Discord invite URL** to add the bot to your server
2. In the Discord Developer Portal, set the interactions endpoint to the Budibase **Webhook URL**
3. Save the interactions endpoint configuration

When channel enable runs successfully, Budibase syncs `/ask`, `/new`, and `/link` commands.

## Enable and verify

1. In Budibase **Deployment**, confirm Discord is **Enabled**
2. In Discord, run:
   * `/link` and complete the Budibase account linking flow
   * `/ask` with a message
   * `/new` to start a new conversation
3. Confirm responses appear in Discord

If you try `/ask` before linking, Budibase prompts you to link your account first.

## Troubleshooting

* `Not connected` in Budibase: confirm all four required values are saved.
* Command sync fails: re-check **Application ID**, **Bot token**, and **Guild ID**.
* Interactions fail: verify the Discord interactions endpoint exactly matches the Budibase **Webhook URL**.
* Discord prompts to link before answering: run `/link` and complete the account link handoff.
* Signature validation errors: confirm **Public key** matches the key in your Discord application.
* Webhook route errors: use the exact Budibase-generated endpoint URL from **Deployment**.

## Related guides

* [Messaging channels](doc:messaging-channels)
* [Slack messaging channel](doc:messaging-channels-slack)
* [Microsoft Teams messaging channel](doc:messaging-channels-microsoft-teams)
