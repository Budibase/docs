---
title: Agent tools and permissions
deprecated: false
hidden: true
metadata:
  robots: index
---
Tools determine what your Agent can read, change, and trigger.

Good tool design is the main way to keep Agent behaviour safe and predictable.

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
2. Read + controlled updates
3. Read + updates + automation triggers

Start with `read-only`, then add writes only when validated by tests.

## Guardrails for write actions

When enabling update tools, include rules like:

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
