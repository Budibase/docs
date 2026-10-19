---
title: Agent activity
excerpt: Monitor and track interactions with your AI agents.
deprecated: false
hidden: false
metadata:
  description: Understand how to use the Activity page to monitor agent requests and operations.
  robots: index
---

Agent activity allows you to monitor all interactions with your AI agents across different channels. It provides a centralized view of requests, tool executions, their statuses, and the specific operations triggered by your agents.

## Accessing activity

You can find the **Activity** section in the side navigation of your Budibase builder workspace. This view is available for all applications containing agents and provides a history of agent actions in your production environment.

The activity view is organized into two primary tabs:
*   **Requests**: Focuses on high-level user prompts and agent responses.
*   **Actions**: Tracks the specific tool calls and technical operations performed by agents during a session.

## Monitoring agent actions

The Activity page displays a list of recent requests and sessions tracked by your agents. Each entry includes critical operational metadata:

*   **Requests**: A descriptive title generated based on the user's prompt and the triggered operation.
*   **Source**: Indicates which agent handled the request.
*   **Status**: Shows the current state of the request (e.g., Completed).
*   **Updated**: A relative timestamp showing when the request was last active.

### Metrics overview

At the top of the Activity page, summary metrics provide a high-level view of your agent's performance:

*   **All sessions**: The total number of tracked interaction sessions.
*   **Completed**: Requests that successfully finished processing.
*   **Processing**: Active requests currently being handled by the agent.
*   **Needs input**: Requests waiting for user clarification or additional data.
*   **Failed**: Requests that encountered errors during execution.

## Request details and timeline

Clicking on any request in the table opens a side panel with detailed information and an interaction timeline.

### Details

The details section provides granular data about a specific interaction:

*   **Status**: The final or current status of the request.
*   **Error**: The specific error message if the request has a **Failed** status. Tool-specific validation errors are summarized to show exactly which input failed requirements.
*   **Source**: The specific agent used.
*   **Operation**: The name of the specific agent operation triggered.
*   **Created by**: The user who initiated the prompt.
*   **Channel**: The communication channel where the request originated (e.g., Slack, MS Teams, Discord, or Portal Chat).
*   **Created at**: The exact timestamp of the initial prompt.

### Timeline

The timeline tracks the lifecycle of a request, from its creation through various operation stages, including internal tool calls. This is useful for debugging multi-step agent interactions or verifying that the correct logic was executed in response to a user prompt.

The timeline includes:
*   **Agent started/executed**: The high-level status of the agent run.
*   **Tool executed**: Recorded when an agent successfully calls a Budibase tool (e.g., "Tool executed: List rows - Customers").
*   **Tool failed**: Recorded when a tool call encounters an error, including descriptive validation failure messages.

If an operation or tool call fails, the timeline provides detailed error feedback to help you understand what went wrong during execution.