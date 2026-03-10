---
title: Agent instructions guide
deprecated: false
hidden: false
metadata:
  robots: index
---
Instructions are the most important control for Agent behaviour.

This page shows how to write prompts that are clear, testable, and safe.

## Core structure

Use this structure for production Agents:

1. Role: What the Agent is responsible for
2. Inputs: What data it receives
3. Tools: Which tools it can use
4. Actions: What it should do
5. Output: Expected format and tone
6. Rules: Hard constraints and refusal criteria

## Recommended template

```markdown Instructions
**Agent role**
You are a [role] for [team or process].

**Inputs**
You receive [fields/data sources].

**Available tools**
{{ tool_1 }}
{{ tool_2 }}

**Actions**
- [action 1]
- [action 2]

**Output**
Return [plain text / JSON schema / markdown].

**Rules**
- Use tools for all live data access
- Never invent missing values
- Only perform write actions when explicitly requested
- Refuse requests outside your scope
```

## Output design

If downstream automations use the Agent response, prefer structured outputs.

Example:

```json
{
  "category": "string",
  "priority": "Low | Medium | High",
  "requiresEscalation": true
}
```

Keep field names stable. Changing response shape can break automations and scripts.

## Instruction quality checklist

Before publishing, ensure that:

* Scope is explicit and narrow
* Tool usage expectations are explicit
* Write permissions are tightly constrained
* Escalation and refusal rules are clear
* Output format is deterministic

## Common issues

* Vague goals: Agent gives inconsistent answers
* Missing tool rules: Agent hallucinates data
* No refusal criteria: Agent attempts unsupported tasks
* Free-form output where JSON is required: automation parsing fails

## Related guides

* [Agent building 101](docs:agent-building-101)
* [Agent tools and permissions](docs:agent-tools-and-permissions)
* [Agent testing guide](docs:agent-testing-guide)
