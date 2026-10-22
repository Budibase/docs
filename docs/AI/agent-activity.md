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

You can find the **Activity** section in the side navigation of your Budibase builder workspace. This view is available for all applications containing agents and provides a history of agent actions and automation runs in both your development and production environments.

## Activity tabs

The Activity section is divided into two primary tabs:

*   **Requests**: Tracks high-level agent conversations and requests, providing context for each interaction.
*   **Actions**: Provides a granular history of individual execution steps and events triggered by both agents and automations.

## Monitoring actions

The Activity page displays a list of recent items. Each entry includes critical operational metadata:

*   **Type**: Indicates whether the entry is an Agent request or an Automation run.
*   **Asset**: The specific agent or automation involved.
*   **Triggered by**: Provides attribution for who or what initiated the action (e.g., a specific User, a Schedule, or a Webhook).
*   **Status**: Shows the current state of the request or action.
*   **Updated**: A relative timestamp showing when the item was last active.

### Metrics overview

At the top of the Activity page, summary metrics provide a high-level view of performance:

*   **All actions**: The total number of tracked interactions.
*   **Completed**: Items that successfully finished processing.
*   **Active**: Items currently being handled (previously labeled as *Processing*).
*   **Waiting**: Items currently paused or awaiting human intervention (e.g., approvals or escalations).
*   **Failed**: Items that encountered errors during execution.

### Filtering

You can filter the activity list by:
*   **Status**: View only items with a specific status (e.g., Failed or Waiting).
*   **Environment**: Switch between **Production** and **Development** history to debug app logic before publishing.

## Details and timeline

Clicking on any item in the table opens a side panel with detailed information and an interaction timeline.

### Details

The details section provides granular data about a specific interaction:

*   **Status**: The final or current status of the interaction.
*   **Type**: The source type (Agent or Automation).
*   **Asset**: The specific name of the agent or automation at the time of execution.
*   **Triggered by**: Detailed attribution including the user name, system trigger, or schedule.
*   **Environment**: Whether the action occurred in the Production or Development environment.
*   **Actions**: The number of individual events recorded within this session.
*   **Started at**: The exact timestamp of the initial execution.

### Timeline

The timeline tracks the lifecycle of an item, from its creation through various operation stages. This is useful for debugging multi-step interactions or verifying that the correct logic was executed in response to a trigger.

If an operation fails, the timeline provides detailed error feedback to help you understand what went wrong during execution.