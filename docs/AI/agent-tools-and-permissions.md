---
title: Agent tools and permissions
deprecated: false
hidden: false
metadata:
  robots: index
---
Tools determine what data your Agent can read or change, and which actions it can trigger.

Effective tool design is the main way to keep Agent behaviour safe and predictable.

## Principle: least privilege

Only enable tools required for the Agent's job.

Example for a support triage Agent:

* Required: list tickets, get ticket, update ticket
* Not required: delete ticket, manage users, publish apps

## Read vs write tools

Separate read and write capabilities in both tooling and instructions.

Read tools:

* Safe default
* Useful for Q&A, lookup, and summaries

Write tools:

* Higher risk
* Require explicit user intent
* Should include additional rules and testing

## Permission patterns

Use one of these patterns:

1. Read-only Agent
   1. The agent can retrieve and analyse data, but cannot modify anything. This is a default starting point. It’s the safest option and ideal for validation, reporting, auditing, and insight generation.
2. Read + controlled updates
   1. The agent can read data and perform limited, explicitly scoped write operations. Writes should be constrained (e.g., specific fields, specific objects, or behind approval flows) and validated through tests before being enabled in production.
3. Read + updates + automation triggers
   1. The agent can read data, make approved updates, and trigger downstream workflows or automations. This pattern is suitable for more mature, production-grade use cases where the agent is trusted to take actions that may have cascading effects.

Start with `read-only`, then add writes only when validated by tests.

## Guardrails for write actions

When enabling `update` tools, include rules like:

* Only update allowed fields.
* Never overwrite non-empty critical fields unless asked.
* Confirm target row before writing.
* Refuse destructive requests.

## Tool naming and clarity

Prefer clear tool names that map directly to real entities (`Tickets.Get Row`, `Tickets.Update Row`).

Ambiguous names increase wrong-tool calls and prompt complexity.

## Checklist before enabling a tool

* Is this tool essential for the Agent's task?
* What is the worst-case outcome if it is misused?
* Do instructions define when it can be used?
* Is this tool covered by tests?

## Related guides

* [Agent instructions guide](docs:agent-instructions-guide)
* [Agent testing guide](docs:agent-testing-guide)
* [Agent troubleshooting](docs:agent-troubleshooting)
