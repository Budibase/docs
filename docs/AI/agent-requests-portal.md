---
title: Agent requests portal
excerpt: Monitor your own AI agent requests and respond to approvals.
deprecated: false
hidden: false
metadata:
  description: Understand how to use the Requests portal to monitor your agent interactions and manage pending escalations.
  robots: index
---

The Agent requests portal provides end-users with a centralized view of their interactions with AI agents. Here, users can track the status of their requests and respond to any pending approvals (escalations) required for an agent to complete its task.

## Accessing requests

You can access the requests portal by navigating to the **Requests** tab in the top navigation bar of the Budibase portal. This view is available to all users who have interacted with AI agents or are assigned as approvers for agent operations.

## Monitoring your requests

The Requests page displays a list of recent interactions involving you. This includes requests you have raised and requests where your input is required as an approver.

Each entry in the list includes:
*   **Status indicator**: A color-coded dot showing the request state.
    *   **Orange**: Needs input (awaiting your approval).
    *   **Blue**: Open or currently processing.
    *   **Gray**: Closed (successfully completed or failed).
*   **Title**: A descriptive title for the request.
*   **Date**: When the request was last active.

You can use the tabs at the top of the page to filter the list:
*   **Needs input**: Only requests awaiting your approval.
*   **My requests**: Only requests that you initiated.
*   **All**: A complete history of your agent interactions.

## Request details and escalations

Clicking on a request in the list opens a detailed view providing granular data about the interaction and any pending actions.

### Details

The details section provides context about the request:
*   **Requested**: The exact date and time the prompt was submitted.
*   **Submitted by**: The user who initiated the interaction.
*   **Channel**: The communication channel where the request originated (e.g., Slack, MS Teams, or Discord).
*   **ID**: The unique identifier for the request, which can be copied for troubleshooting.

### Responding to escalations

If an agent operation requires manual intervention, it will appear as an **Escalation** within the request details. If you are an assigned approver, you can respond directly from this page.

To resolve an escalation:
1.  Review the escalation title and any provided context.
2.  Add an optional **Note** or **Reason** for your decision.
3.  Click the **Accept** (check icon) or **Reject** (cross icon) button.

Once you have responded, the agent will continue its task according to your decision. The status of the escalation will update to reflect the outcome (e.g., Approved, Rejected, or Expired).