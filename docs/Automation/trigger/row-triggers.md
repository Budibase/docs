---
title: Row triggers
excerpt: >-
  Trigger Budibase automations whenever table rows are created, deleted or
  updated.
deprecated: false
hidden: false
metadata:
  title: ''
  description: ''
  robots: index
next:
  description: ''
---
Row triggers let you run an automation when a row is created, deleted, or updated.

## Row created

Use this trigger when a new record should start a workflow. The trigger passes the full row object into the automation, so later steps can create related records, send notifications, or sync the new data to another system.

## Row deleted

Use this trigger when the workflow should react to a delete. Common uses include cleaning up related records, revoking access, or logging the change elsewhere.

## Row updated

Use this trigger when a workflow should react to edits on an existing row. The trigger exposes both the previous row values and the updated row values, so you can compare fields and branch the automation based on what changed.

## Typical outputs

The row payload is available as trigger bindings. For updates, the automation also receives the old row object, which is useful when you only want to continue if a specific field changed.
