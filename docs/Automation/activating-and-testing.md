---
title: Testing
excerpt: ''
deprecated: false
hidden: false
metadata:
  title: ''
  description: kba_5hc8y
  robots: index
next:
  description: ''
---
Automations run in both the builder preview and published apps. In the builder, they run against development data and skip logging, so test them before you publish them.

## Test an automation

1. Open the automation.
2. Click `Run test`.
3. Provide test data when prompted.
4. Review the run output and step-by-step progress.

Webhook and cron triggers do not always require the same prompt data as row-based triggers.

## What to check

Use the run output to confirm:

* The trigger fired with the expected input
* Each step ran in the right order
* Outputs passed correctly between steps
* Errors were handled in the intended place

If the automation writes data, verify the target rows or records changed as expected.

## Debugging

Use the debugging tools when a test does not behave as expected.

Focus on:

* The step that failed first
* Any upstream output that differs from the expected shape
* The `Errors` panel for a direct error message

When a failure is hard to trace, re-run the automation with a smaller input set and confirm each step separately.

## Production readiness

Before activating an automation, make sure:

* The happy path passes
* Error handling has been tested
* Any external services are reachable
* Any write actions are safe to repeat

## Related guides

* [Automation steps](doc:automation-steps)
* [Automation building 101](doc:automation-building-101)
* [User management](doc:user-management)
