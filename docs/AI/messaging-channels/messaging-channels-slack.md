---
title: Slack messaging channel
deprecated: false
hidden: false
metadata:
  description: kba_5h742
  robots: index
---
Use this guide to deploy an agent to Slack.

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
7. (Optional) Toggle **File attachments** to **Enabled**. This requires a `GEMINI_API_KEY` to be set in your Budibase server environment.

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
* `files:read`

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

Slack threads are used as conversation boundaries automatically. Once an agent is engaged in a thread (e.g., via a mention), it will automatically process and respond to subsequent replies in that same thread, even without further mentions.

If you send a message before linking, Budibase prompts you privately to complete account linking first.

### Slash commands

* `/ask <message>`: Continue the current conversation.
* `/new <message>`: Start a new conversation, clearing the message and file history for the current thread.
* `/link`: Link your Slack user to your Budibase account.
* `/unlink`: Unlink your accounts.

## Working with documents (RAG)

When your agent uses documents to answer questions (Retrieval-Augmented Generation), Budibase can provide direct download links to those sources within Slack.

### Source citations
In **personal conversations (DMs)**, your agent will automatically append a list of the specific document sources it used to generate its reply. Each source includes a direct, authenticated link to download the file.

To ensure privacy and security, source download links are **not** provided when the agent is chatting in a **channel or group conversation**.

### Conversation attachments
If **File attachments** is enabled in the agent deployment settings, users can upload files directly in Slack conversations. The agent will process these files and use their content to answer subsequent questions in that thread. 

* **Supported formats**: PDF, CSV, TXT, Markdown, JSON, YAML, and XML.
* **Limits**: Up to 3 files per conversation, maximum 20MB per file.
* **Clearing files**: Use the `/new` command to clear attached files and start a fresh conversation.

## Troubleshooting

* `Not configured` in Budibase: confirm both **Bot token** and **Signing secret** are saved.
* Slack events not reaching Budibase: re-check **Request URL** and reinstall the app after scope/event changes.
* Bot does not respond in channels: confirm the bot was invited to that channel.
* Bot prompts to link before answering: run `/link` in Slack and complete the link handoff.
* Webhook route errors: use the exact Budibase-generated endpoint URL from **Deployment**.
* **File processing fails**: ensure `GEMINI_API_KEY` is correctly configured and the Slack app has the `files:read` scope.

## Related guides

* [Messaging channels](doc:messaging-channels)
* [Microsoft Teams messaging channel](doc:messaging-channels-microsoft-teams)
* [Discord messaging channel](doc:messaging-channels-discord)