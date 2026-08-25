---
title: Messaging channels
deprecated: false
hidden: false
metadata:
  robots: index
---
Use this page to deploy an agent to external messaging channels where your users already work.

Slack and Microsoft Teams are the primary deployment paths for live agent conversations.

## Before you start

Make sure you have:

* A working [Agents config](doc:agents-config)
* A saved agent with a connected AI model
* An agent set live (status **Live**)

## Link requirement for external channels

Before a user can chat with an agent in Slack or Microsoft Teams, they must link their messaging identity to a Budibase account.

Use `/link` (Teams also accepts `link`) in the channel conversation to start linking.

If a user sends a normal message before linking, Budibase sends a private link prompt and guides them through account linking.

## Recommended rollout order

1. Configure one channel first
2. Run end-to-end tests in that channel
3. Add additional channels only after the first is stable
4. Standardize account linking and support runbooks for each channel

## Available channel guides

* [Slack](doc:messaging-channels-slack)
* [Microsoft Teams](doc:messaging-channels-microsoft-teams)

## Important endpoint note

Budibase channel webhooks are validated against the production workspace route. Use the endpoint URL generated in the deployment UI, and do not replace the workspace segment manually.

## Related guides

* [Agent building 101](doc:agent-id-building-101)
* [Agent testing guide](doc:agent-testing-guide)