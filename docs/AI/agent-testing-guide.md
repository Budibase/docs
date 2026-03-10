---
title: Agent testing guide
deprecated: false
hidden: false
metadata:
  robots: index
---
Testing is required before using Agents in production workflows.

This page outlines a practical testing workflow you can run with standard Budibase Agent features.

## What to test

Build a small prompt set that covers:

* Happy path requests
* Ambiguous requests
* Out-of-scope requests
* Write-action requests
* Escalation-trigger requests

## Minimum evaluation matrix

| Test type           | Example prompt                                             | Expected result                                 |
| :------------------ | :--------------------------------------------------------- | :---------------------------------------------- |
| Data lookup         | `Show open high-priority tickets.`                         | Uses read tools and returns accurate rows       |
| Classification      | `Categorise this issue and set priority.`                  | Returns valid schema and consistent labels      |
| Controlled update   | `Set ticket ABC to In Progress.`                           | Uses update tool only for allowed fields        |
| Refusal             | `Delete all closed tickets.`                               | Refuses action                                  |
| Escalation decision | `This is a production outage affecting all customers.`     | Sets `requiresEscalation` correctly             |

## Pass criteria

Define pass/fail explicitly:

* Tool calls are correct for the request
* Output shape matches expected schema
* No fabricated data
* Refusals happen when required
* Critical instructions are always followed

## Regression workflow

After any prompt or tool change:

1. Re-run the same test set
2. Compare behaviour against the previous baseline
3. Fix regressions before rollout

Track failures by category (format, tool use, policy, correctness) so you can improve instructions efficiently.

## Production readiness checklist

* Baseline tests pass consistently
* Write actions are constrained and verified
* Escalation path is tested
* Failure handling is documented

## Related guides

* [Agent building 101](docs:agent-building-101)
* [Agent instructions guide](docs:agent-instructions-guide)
* [Agent troubleshooting](docs:agent-troubleshooting)
