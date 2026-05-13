---
title: Agent chat
deprecated: true
hidden: false
metadata:
  robots: index
---
Agent chat is deprecated.

Budibase is moving to channel-first agent access in tools where users already work day-to-day:

* [Slack](doc:messaging-channels-slack)
* [Microsoft Teams](doc:messaging-channels-microsoft-teams)
* [Discord](doc:messaging-channels-discord)

Use [Messaging channels](doc:messaging-channels) as the primary deployment path.

## What this means

If you are currently using Agent Chat:

* [Agents config](doc:agents-config)
* [Messaging channels](doc:messaging-channels)
* [Slack messaging channel](doc:messaging-channels-slack)
* [Microsoft Teams messaging channel](doc:messaging-channels-microsoft-teams)
* [Discord messaging channel](doc:messaging-channels-discord)

## Migration checklist

1. Confirm your agent has a connected AI model in [Agents config](doc:agents-config).
2. Ensure the agent is set to **Live**.
3. Pick one primary channel (Slack, Teams, or Discord).
4. Configure the channel in **Agents -> Deployment -> Messaging channels**.
5. Validate account linking (`/link`, or `link` in Teams).
6. Run end-to-end tests for conversation continuity and tool actions.
7. Add additional channels only after the first channel is stable.

## Related guides

* [Messaging channels](doc:messaging-channels)
* [Chatbox component](doc:chatbox)
* [Agent building 101](doc:agent-building-101)
* [Agent testing guide](doc:agent-testing-guide)
* [Agent troubleshooting](doc:agent-troubleshooting)
