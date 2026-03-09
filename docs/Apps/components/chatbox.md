---
title: Chatbox
excerpt: Embed your agent chat experience inside an app screen.
deprecated: false
hidden: true
metadata:
  title: ''
  description: ''
  robots: index
next:
  description: ''
---
The Chatbox component lets you place the Budibase chat experience directly inside your app.

It uses the same chat setup from [Agent chat](docs:agent-chat), including agent availability, access roles, defaults, and conversation starters.

## Before you start

Make sure you have:

* Completed [Agents config](docs:agents-config)
* Enabled at least one live agent in [Agent chat](docs:agent-chat)
* Set your chat app to live in the Builder Chat page

## Add the Chatbox component

1. Open your app in **Design**
2. Click **Add component**
3. Open the **AI** category
4. Select **Chatbox**

You can then resize and position the component like other screen components.

## Chatbox settings

| Setting | Description |
| :--- | :--- |
| Intro text | Short text shown above the conversation area. |
| Input placeholder | Placeholder text in the chat input box. |
| Send button label | Label shown on the send action button. |

## Styling

Chatbox supports:

* Padding
* Background
* Border

For best results, give Chatbox enough vertical space so users can view history and compose messages comfortably.

## Runtime behavior

In app runtime, Chatbox:

* Loads enabled agents from the workspace chat configuration
* Uses the configured default agent for starting new chats
* Shows per-agent conversation starters when configured
* Hides unavailable agents from the enabled list

If no agents are configured or enabled, users see an empty-state message instead of a chat session.

## Access and availability

Agent availability in Chatbox depends on Agent Chat configuration:

* Agent must be enabled in chat settings
* Agent should be live
* User must meet the configured access role
* Chat app must be live (not paused)

Update these from [Agent chat](docs:agent-chat) if a component appears but users cannot start conversations.

## Troubleshooting

If Chatbox is visible but not usable:

* Confirm chat is live in the Builder Chat page
* Confirm at least one live agent is enabled in Agent Chat
* Confirm your user role has access to the selected agent
* Re-open the app after publish to load the latest chat settings

## Related guides

* [Agent chat](docs:agent-chat)
* [Agents config](docs:agents-config)
* [Agent building 101](docs:agent-building-101)
