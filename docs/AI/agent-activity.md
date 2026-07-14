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
*   **Status**: Shows the current state of the request (e.g., Completed).
*   **Updated**: A relative timestamp showing when the request was last active.

### Metrics overview

At the top of the Activity page, summary metrics provide a high-level view of your agent's performance:

*   **All actions**: The total number of tracked interactions.
*   **Completed**: Requests where the underlying goal was successfully met, as judged by the agent's outcome evaluation.
*   **Processing**: Active requests currently being handled by the agent.
*   **Needs input**: Requests waiting for user clarification or human approval (escalation).
*   **Failed**: Requests that could not be fulfilled or encountered terminal errors.

## Request details and timeline

Clicking on any request in the table opens a side panel with detailed information and an interaction timeline.

### Details

The details section provides granular data about a specific interaction:

*   **Status**: The final or current status of the request. The final status is determined by evaluating whether the user's original goal was actually achieved.
*   **Source**: The specific agent used.
*   **Operation**: The names of the tools or automation workflows the agent utilized to fulfill the request.
*   **Created by**: The user who initiated the prompt.
*   **Channel**: The communication channel where the request originated (e.g., Slack, MS Teams, Discord, or Portal Chat).
*   **Created at**: The exact timestamp of the initial prompt.

### Timeline

The timeline tracks the lifecycle of a request, from its creation through every operational step. It provides a transparent record of how the agent attempted to fulfill the request:

*   **User messages**: The original prompt and any follow-up clarifications.
*   **Tool calls**: Each specific action the agent took (e.g., searching a database or triggering an automation), including a short summary of the result.
*   **Escalations**: When an agent requires human intervention, the timeline records when the request was escalated and to whom.
*   **Escalation outcomes**: Records whether a human approved, rejected, or allowed the escalation to expire.
*   **Status changes**: Transitions between different request states.

This visibility is essential for debugging multi-step agent interactions and verifying that the agent followed the intended logic and permissions.