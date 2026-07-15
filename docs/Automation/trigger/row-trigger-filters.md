---
title: Row trigger filters
excerpt: ''
deprecated: false
hidden: false
metadata:
  title: ''
  description: kba_5hdz6
  robots: index
next:
  description: ''
---
Row trigger filters let you limit when a row created or row updated automation runs.

## Use filters

Add a filter when the automation should only run for rows that match a specific condition, such as an `Approved` flag or a particular status value.

## Row created

For row created triggers, the filter is checked against the new row. If the row matches, the automation runs.

## Row updated

For row updated triggers, the automation only runs when the row changes into a matching state.

For example, if the filter is `Status = Approved`, the trigger runs when a row changes from `Requested` to `Approved`. It does not run again on later edits if the row is already approved.
