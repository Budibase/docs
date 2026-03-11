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

When enabled, Budibase creates or updates the chat app configuration for that workspace and agent.

## Configure settings for one agent

From **Agent Chat** click **Manage** to open agent settings.

You can configure:

* **Access role**: Minimum app role required to use that agent in chat
* **Conversation starters**: Up to 3 starter prompts shown in chat

If the agent is live, saving these settings will require a workspace publish to apply the changes.

## Manage the chat app for the workspace

After enabling Agent Chat for at least one agent, open the **Agent Chat** found in the top right corner of your home page in the builder.

This is a dedicated **Agent Chat** page, not another screen inside the **Agents** area.

### Add and enable agents

* Use **Add agent** to include live agents in chat
* Toggle agent availability on or off per agent
* Disabled agents remain configured but are not available to users

### Set default agent

Open an agent's settings from the **Agent Chat** page to choose the default agent.

* The default agent is used when users click **New chat**
* Only enabled agents can be default
* If no explicit default is set, the first enabled agent becomes the effective default

### Access role behavior

* New chat-enabled agents default to `BASIC` access role unless changed
* Access role can be updated per agent from settings

### Conversation starter behavior

* Starters are stored per agent
* Empty values are ignored
* Only the first 3 non-empty starters are kept

## Set chat live or pause chat

On the builder agent **configuration** section:

* Click **Set your chat live** to make chat available to users
* Click **Pause chat** to disable access

These changes publish the workspace so users see the latest chat availability.

## Open agent chat

From an agents -> selected agent -> deployment, click **Open chat** to launch the actual user-facing chat app for that agent.

## Embed chat in app screens

To embed chat inside an app screen, use the [Chatbox component](doc:chatbox) under **Apps**.

## Runtime states users can see

Depending on configuration, users may see:

* No agents configured for chat
* Agents configured but none enabled
* Selected agent unavailable for chat
* Chat paused by administrators

When these states appear, verify chat live status and agent enablement in Builder.

## Troubleshooting

If Agent Chat does not work as expected:

* Confirm [Agents config](doc:agents-config) is valid and the agent has a connected model
* Confirm the agent is **Live**
* Confirm the agent is enabled in Chat settings
* Confirm chat is set to **Live** on the Builder **Agent Chat** page
* Re-open the chat app after publish to pick up latest settings

## Related guides

* [Agents config](doc:agents-config)
* [Chatbox component](doc:chatbox)
* [Agent building 101](doc:agent-building-101)
* [Agent testing guide](doc:agent-testing-guide)
* [Agent troubleshooting](doc:agent-troubleshooting)
