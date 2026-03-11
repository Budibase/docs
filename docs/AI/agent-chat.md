---
title: Agent chat
deprecated: false
hidden: false
metadata:
  robots: index
---
Agent chat is a built-in, user-facing chat app for running your live agents with controlled access.

Use this page after completing [Agents config](doc:agents-config).

## Before you start

Make sure you have:

* A working AI config and default model in Workspace Settings
* A saved agent with an AI model connected
* An agent set to **Live**

## Enable agent chat for an agent

1. Open your agent in **Agents**
2. Go to the **Deployment** tab
3. Find **Agent Chat**
4. Use the toggle to enable the channel

When enabled, Budibase updates chat configuration for that agent.

## Configure settings for one agent

From **Agent Chat** click **Manage** to open agent settings.

You can configure:

* **Access role**: Minimum app role required to use that agent in chat
* **Conversation starters**: Up to 3 starter prompts shown in chat

If the agent is live, saving these settings will require a workspace publish to apply the changes.

## Access agent chat

Agent chat is accessed from the **App Portal**.

To open the chat app for an agent:

1. Open **Agents**
2. Select an agent
3. Open the **Deployment** tab
4. Click **Open chat**

This takes you directly to the chat screen in the App Portal.

### Access role behavior

* New chat-enabled agents default to `BASIC` access role unless changed
* Access role can be updated per agent from settings

### Conversation starter behavior

* Starters are stored per agent
* Empty values are ignored
* Only the first 3 non-empty starters are kept


## Embed chat in app screens

To embed chat inside an app screen, use the [Chatbox component](doc:chatbox) under **Apps**.

## Runtime states users can see

Depending on configuration, users may see:

* No agents configured for chat
* Agents configured but none enabled
* Selected agent unavailable for chat
* No live/deployed chat access for the current setup

When these states appear, verify deployment status and agent chat enablement.

## Troubleshooting

If Agent Chat does not work as expected:

* Confirm [Agents config](doc:agents-config) is valid and the agent has a connected model
* Confirm the agent is **Live**
* Confirm the agent is enabled in Chat settings
* Open chat from **Agents** -> **Deployment** -> **Open chat** to verify the App Portal route
* Re-open the chat app after publish to pick up latest settings

## Related guides

* [Agents config](doc:agents-config)
* [Chatbox component](doc:chatbox)
* [Agent building 101](doc:agent-building-101)
* [Agent testing guide](doc:agent-testing-guide)
* [Agent troubleshooting](doc:agent-troubleshooting)
