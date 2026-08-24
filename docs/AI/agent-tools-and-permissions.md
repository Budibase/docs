---
title: Agent tools and permissions
deprecated: false
hidden: false
metadata:
  description: kba_5v2gy
  robots: index
---
Tools determine what data your Agent can read or change, and which actions it can trigger.

Effective tool design is the main way to keep Agent behaviour safe and predictable.

## Principle: least privilege

Only enable tools required for the Agent's job.

Example for a support triage Agent:

* Required: list tickets, get ticket, update ticket
* Not required: delete ticket, manage users, publish apps

## Configuring tools for operations

Tools are configured at the **Operation** level. While Budibase automatically discovers available tools from your data sources and automations, you must explicitly enable and configure them for each operation.

### Adding tools

You can add tools to an operation in two ways:

1.  **Rail Actions**: Click the **Add tools** button in the Tools section of the operation rail.
2.  **Editor Autocomplete**: While writing instructions, type `{{` and select **Add tool** from the autocomplete menu. This allows you to configure and insert a tool binding in a single step.

### Execution principals

When a tool is enabled, you can configure its **Run as** (Execution principal) setting in the tool configuration:

*   **Requester**: The tool runs using the permissions of the user interacting with the Agent. This is the safest default for most user-facing tools.
*   **Admin (elevated)**: The tool runs with full administrative permissions. Use this sparingly for background tasks or strictly controlled operations.

## Agent data scope

To ensure data security and optimize token usage, Budibase automatically restricts the data exposed to AI Agents.

### Field exclusions

When an Agent interacts with a table, it only sees plain-text and primitive data fields. The following field types are automatically excluded from the Agent's view:

*   **Link fields**: Relationships to other tables (joined data) are not exposed to prevent accidental data leaks.
*   **Formula fields**: Calculations and relationship-derived values are hidden from the Agent.

These exclusions apply to both the table schema (metadata) and the actual row data returned by tools.

### Helper tool scoping

Budibase provides helper tools like `list_tables` and `get_table` to help Agents discover workspace structure. These helpers are automatically scoped to the current operation:

*   **list_tables**: Only returns tables that have at least one tool (e.g., `Search Rows`) explicitly enabled for the current operation.
*   **get_table**: Can only retrieve details for tables that are already configured for the operation.

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
   1. The agent can read data and perform limited, explicitly scoped write operations. Writes should be constrained (e.g., specific fields, specific objects, or be behind approval workflows) and validated through tests before being enabled in production.
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

### Renaming and stability

Budibase automatically maintains connections between your Agents and their tools. If you rename a **Datasource**, **REST API**, or **Query**, Budibase will automatically update:

1. Any references to that tool in Agent **prompt instructions**.
2. The **enabled tools** list for all affected Agents.

This ensures that reorganizing your data or APIs does not break your existing Agent configurations.

### Naming constraints

To ensure compatibility with AI providers (like OpenAI), tool names are subject to a **64-character limit**. 

If a tool name derived from an entity name (like a table or query) exceeds this limit, Budibase automatically truncates the name and appends a unique hash to prevent collisions. For example, a tool for a very long table name might appear as `VeryLongTableName_a1b2c3d4e5f6_get_row` instead of the full name. 

Keep table and query names reasonably concise to ensure tool names remain human-readable for the Agent and in activity logs.

## Checklist before enabling a tool

* Is this tool essential for the Agent's task?
* What is the worst-case outcome if it is misused?
* Do instructions define when it can be used?
* Is this tool covered by tests?

## Related guides

* [Agent instructions guide](doc:agent-instructions-guide)
* [Agent testing guide](doc:agent-testing-guide)
* [Agent troubleshooting](doc:agent-troubleshooting)