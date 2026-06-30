---
title: Human-in-the-loop (Escalations)
deprecated: false
hidden: false
metadata:
  description: Learn how to configure human-in-the-loop approvals for AI agent operations.
  robots: index
---

Human-in-the-loop (HITL) allows your AI Agents to pause when they encounter high-risk actions or ambiguous situations and request explicit approval from a human reviewer.

By adding an **Escalation** to an agent operation, you ensure that the agent cannot proceed with a tool call (like updating a record or triggering a payment) without a digital signature from an authorized user.

## How it works

1.  **Model Detection**: When an agent operation is configured with escalation, the agent is granted an `escalate` tool.
2.  **Call to Escalate**: If the agent's instructions or logic dictate that approval is required, it calls the `escalate` tool with a summary of the request.
3.  **Suspension**: The agent run is immediately suspended. In the chat, the user sees a "Pending Approval" card.
4.  **Notification**: Budibase sends a notification to your configured **Escalation Recipients** via Slack, Microsoft Teams, Discord, or Telegram.
5.  **Review**: The reviewer approves or rejects the request directly from their messaging app or the Budibase builder.
6.  **Resume**: Once approved, the agent run automatically resumes, receives the "Approved" confirmation, and continues to fulfill the original request.

## Configuring Escalations

Escalations are configured at the **Operation** level.

### 1. Add Recipients

To enable escalation, you must specify who can review the requests:

1.  Open your agent in **Agents**.
2.  Select the **Operations** tab and edit an operation.
3.  Locate the **Escalation Recipients** section.
4.  Click **Add recipient** and select a connected messaging channel (e.g., Slack).
5.  Choose a **User DM** or a specific **Channel** to receive the approval request.

### 2. Update Instructions

Update your operation's instructions to define exactly when the agent should call for help. For example:

markdown
**Rules**
- Before processing any refund over $100, you MUST call the `escalate` tool to get manager approval.
- Provide a clear summary of the order ID and refund amount in the escalation request.


## Reviewing Requests

### Messaging Channels

Reviewers receive an interactive message (e.g., a Slack Block or Teams Adaptive Card). They can click **Approve** or **Reject** immediately. The agent will then post its final response back to the original requester in the channel.

### Agent Activity

You can monitor the status of all HITL requests in the **Activity** section. Requests awaiting review will show a status of **Suspended** or **Needs Input**.

## Related guides

* [Agent tools and permissions](doc:agent-tools-and-permissions)
* [Messaging channels](doc:messaging-channels)
* [Agent activity](doc:agent-activity)