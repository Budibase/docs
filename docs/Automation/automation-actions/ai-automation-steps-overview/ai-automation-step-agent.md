---
title: Agent
excerpt: ''
deprecated: false
hidden: false
metadata:
  title: ''
  description: kba_5hcaq
  robots: index
next:
  description: ''
---
The Agent step runs a pre-configured AI Agent from your workspace inside an automation flow. Unlike single-prompt steps, it can use configured tools to complete multi-step tasks.

> 💡 You need to [enable AI](doc:quickstart-budibase-ai) to use this feature.

## Before you start

Create and test an Agent first, then reference it in your automation:

* [Agent building 101](doc:agent-building-101)
* [Agents Config](doc:agent-config)

## Behavior

Automation agents run in a **goal-oriented** mode. Unlike interactive chat agents, they are optimized to focus on completing the specific task defined in the prompt rather than maintaining a conversational tone.

## Permissions

Agents executed via an automation step can run using either the **Requester**'s identity or an **Admin** identity.

* **Requester (Default)**: The agent uses the identity and permissions of the user who triggered the automation. If the automation was not triggered by an authenticated user (e.g. a cron trigger), the step will fail if configured to run as the requester.
* **Admin**: The agent runs with full administrative permissions. This allows it to perform system tasks and access data without being constrained by the triggering user's role.

If the agent triggers a tool that requires human approval (escalation), the automation will pause. Once the action is approved by a human, the agent will resume execution using the permissions of the original automation requester.

## Example use cases

* Looking up workspace data with tools, then returning an answer.
* Running an Agent to decide and execute follow-up actions in a workflow.
* Producing structured JSON output for downstream automation steps.

## Inputs

* Agent (required) - The Agent configuration to run.
* Prompt (required) - The task or question sent to the Agent.
* Run as (required) - Choose which identity the agent uses to access data. Options are **Requester** (default) or **Admin**.
* Use structured output (optional) - Enables schema-constrained output.
* Output Schema (optional) - JSON schema used when structured output is enabled.

## Output

* `success` - Whether the Agent completed successfully.
* `response` - The Agent's response text.
* `output` - Structured object output when an output schema is used.
