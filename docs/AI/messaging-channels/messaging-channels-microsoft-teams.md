---
title: Microsoft Teams messaging channel
deprecated: false
hidden: false
metadata:
  description: kba_5v2ki
  robots: index
---
Use this guide to deploy an agent to Microsoft Teams.

## Before you start

Make sure you have:

* A Microsoft 365 tenant with Teams access
* An Azure app registration for your bot
* A live agent with an AI model connected
* Access to **Agents** -> your agent -> **Deployment**

## Configure Microsoft Teams in Budibase

1. Open your agent in **Agents**
2. Go to **Deployment**
3. In **Messaging channels**, click **Manage** for **Microsoft Teams**
4. Enter:
   * **App ID (client ID)**
   * **Client secret (value)**
   * **Directory (tenant) ID (Azure AD tenant ID)**
   * **Idle timeout (minutes)** (optional)
5. Click **Save channel**
6. Copy the generated **Messaging endpoint URL**

## Configure your Teams bot endpoint

In your Azure bot configuration, set the bot messaging endpoint to the Budibase **Messaging endpoint URL**.

Use a single-tenant setup that matches your tenant ID.

## Enable and verify

1. In Budibase **Deployment**, toggle Microsoft Teams to **Enabled**
2. Open Teams and message the bot
3. Run `link` or `/link`, then complete the Budibase account linking flow
4. Test commands:
   * `ask <message>` to continue the current conversation
   * `new <message>` to start a new conversation

Plain text messages are treated as `ask`.
If you send a normal message before linking, Budibase sends a private link prompt.

## Working with documents (RAG)

When your agent uses documents to answer questions (Retrieval-Augmented Generation), Budibase can provide direct download links to those sources within Teams.

### Source citations
In **personal conversations**, your agent will automatically provide the specific document sources it used to generate its reply as a set of interactive buttons below the message. Each button includes a direct, authenticated link to download the file.

To ensure privacy and security, source download links are **not** provided when the agent is chatting in a **channel or group conversation**.

### Disabling source downloads
You can control whether users are allowed to download knowledge sources through the agent's operation settings:
1. Open your agent in **Agents**
2. Select the **Operations** tab
3. Locate your live operation and click the settings icon
4. Toggle **Allow knowledge source download** off if you want to prevent download links from being generated in personal chats.

## Troubleshooting

* `Not configured` in Budibase: confirm **App ID**, **Client secret**, and **Tenant ID** are saved.
* Teams cannot deliver messages: verify the bot messaging endpoint matches the Budibase URL exactly.
* Authentication failures from Teams: check bot credentials and tenant alignment.
* Teams prompts to link before answering: run `link` or `/link` and complete the account link handoff.
* Webhook route errors: use the exact Budibase-generated endpoint URL from **Deployment**.

## Related guides

* [Messaging channels](doc:messaging-channels)
* [Slack messaging channel](doc:messaging-channels-slack)
* [Discord messaging channel](doc:messaging-channels-discord)
