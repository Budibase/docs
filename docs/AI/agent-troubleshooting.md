---
title: Agent troubleshooting
deprecated: false
hidden: false
metadata:
  description: kba_5h7ia
  robots: index
---
Use this guide to diagnose and fix common Agent issues.

## Quick triage

1. Confirm the model provider is enabled in [Agents Config](doc:agents-config)
2. Confirm the Agent is connected to a valid model
3. Confirm required tools are enabled
4. Run a simple known-good test prompt

## Common problems

| Problem | Likely cause | Fix |
| :------ | :----------- | :-- |
| Agent does not respond | Provider/model is not configured correctly | Re-check API credentials, model name, and provider status |
| Agent fabricates values | Missing tool-use rule or no read tool enabled | Add strict tool rules and enable required read tools |
| Agent updates data unexpectedly | Write rules are too vague | Add explicit write constraints and refusal rules |
| Automation parsing fails | Output format changes between responses | Enforce a stable JSON schema in instructions |
| Self-hosted AI requests fail | Network egress restrictions | Follow [Self-hosted AI features](doc:self-hosted-ai-features) requirements |

## Debugging checklist

When behaviour is inconsistent:

* Reduce prompt complexity and retest
* Verify the tool list in the Agent context
* Add explicit examples of valid and invalid behaviour
* Test each instruction change against a fixed regression set

## When to change instructions vs tools

Change instructions when:

* Behaviour is mostly correct but inconsistent
* Refusal or escalation logic needs tightening

Change tools when:

* The Agent cannot access required data
* The Agent has risky capabilities it should not have

## Related guides

* [Agent tools and permissions](doc:agent-tools-and-permissions)
* [Agent testing guide](doc:agent-testing-guide)