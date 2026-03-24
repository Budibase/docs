---
title: Messaging channels
deprecated: false
hidden: false
metadata:
  robots: index
---
Use this page to deploy an agent to external messaging channels after [Agent chat](doc:agent-chat) is working.

Agent chat is the recommended first deployment path. Slack, Microsoft Teams, and Discord are optional channels for users who need agent access in existing chat tools.

## Before you start

Make sure you have:

* A working [Agents config](doc:agents-config)
* A saved agent with a connected AI model
* An agent set to **Live**
* `Agent chat` already validated in App Portal

## Link requirement for external channels

Before a user can chat with an agent in Slack, Microsoft Teams, or Discord, they must link their messaging identity to a Budibase account.

Use `/link` (Teams also accepts `link`) in the channel conversation to start linking.

If a user sends a normal message before linking, Budibase sends a private link prompt and guides them through account linking.

## Recommended rollout order

1. Enable and test [Agent chat](doc:agent-chat)
2. Configure one external channel
3. Run end-to-end tests in that channel
4. Add additional channels only after the first is stable

## Available channel guides

* [Slack](doc:messaging-channels-slack)
* [Microsoft Teams](doc:messaging-channels-microsoft-teams)
* [Discord](doc:messaging-channels-discord)

## Important endpoint note

Budibase channel webhooks are validated against the production workspace route. Use the endpoint URL generated in the deployment UI, and do not replace the workspace segment manually.

## Related guides

* [Agent chat](doc:agent-chat)
* [Agent building 101](doc:agent-building-101)
* [Agent testing guide](doc:agent-testing-guide)
