---
title: Agent activity
excerpt: Monitor and track interactions with your AI agents.
deprecated: false
hidden: false
metadata:
  description: Understand how to use the Activity page to monitor agent requests and operations.
  robots: index
---

Agent activity allows you to monitor all interactions with your AI agents across different channels. It provides a centralized view of requests, their statuses, and the specific operations triggered by your agents.

## Accessing activity

You can find the **Activity** section in the side navigation of your Budibase builder workspace. This view is available for all applications containing agents and provides a history of agent actions in your production environment.

## Monitoring agent actions

The Activity page displays a list of recent requests tracked by your agents. Each entry includes critical operational metadata:

*   **Requests**: A descriptive title generated based on the user's prompt and the triggered operation.
*   **Source**: Indicates which agent handled the request.
*   **Status**: Shows the current state of the request (e.g., Completed, Processing, Needs input, or Failed).
*   **Updated**: A relative timestamp showing when the request was last active.

### Metrics overview

At the top of the Activity page, summary metrics provide a high-level view of your agent's performance:

*   **All requests**: The total number of tracked interactions.
*   **Completed**: Requests that successfully finished processing.
*   **Processing**: Active requests currently being handled by the agent.
*   **Needs input**: Requests waiting for user clarification or human approval (escalation).
*   **Failed**: Requests that encountered errors during execution.

### Filtering by status

To help you find specific requests, you can use the status filter dropdown located above the requests table. This allows you to view only requests of a certain type, such as those currently **Processing** or those that have **Failed**.

## Request details and timeline

Clicking on any request in the table opens a side panel with detailed information and an interaction timeline.

### Details

The details section provides granular data about a specific interaction:

*   **Status**: The final or current status of the request.
*   **Source**: The specific agent used.
*   **Operation**: The names of the tools or automation workflows the agent utilized to fulfill the request.
*   **Created by**: The user who initiated the prompt.
*   **Channel**: The communication channel where the request originated (e.g., Slack, MS Teams, Discord, or Portal Chat).
*   **Created at**: The exact timestamp of the initial prompt.

### Timeline

The timeline tracks the lifecycle of a request in real-time, from its creation through various operation stages. It records critical events including:

*   **User messages**: A summary of the intent behind each user prompt in the interaction.
*   **Tool executions**: Which tools or automations were called and their outcome.
*   **Escalations**: When human approval was requested, including the specified recipients.
*   **Status changes**: Transitions between processing states (e.g., when a request moves from Processing to Completed).

The timeline is useful for debugging multi-step agent interactions or verifying that the correct logic was executed in response to a user prompt.