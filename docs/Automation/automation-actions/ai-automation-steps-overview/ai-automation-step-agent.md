---
title: Agent
excerpt: ''
deprecated: false
hidden: false
metadata:
  title: ''
  description: ''
  robots: index
next:
  description: ''
---
The Agent step runs a pre-configured AI Agent from your workspace inside an automation flow. Unlike single-prompt steps, it can use configured tools to complete multi-step tasks.

> 📘 You need to [enable AI](docs:quickstart-budibase-ai) to use this feature.

## Before you start

Create and test an Agent first, then reference it in your automation:

* [Agent building 101](docs:agent-building-101)
* [Agents Config](docs:agents-config)

## Example use cases

* Looking up workspace data with tools, then returning an answer.
* Running an Agent to decide and execute follow-up actions in a workflow.
* Producing structured JSON output for downstream automation steps.

## Inputs

* Agent (required) - The Agent configuration to run.
* Prompt (required) - The task or question sent to the Agent.
* Use structured output (optional) - Enables schema-constrained output.
* Output Schema (optional) - JSON schema used when structured output is enabled.

## Output

* `success` - Whether the Agent completed successfully.
* `response` - The Agent's response text.
* `output` - Structured object output when an output schema is used.
