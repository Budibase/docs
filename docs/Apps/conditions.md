---
title: Conditional UI
excerpt: ''
deprecated: false
hidden: false
metadata:
  title: ''
  description: kba_5haf6
  robots: index
next:
  description: ''
---
Use conditional UI when a component should change based on a value or piece of logic.

Common uses include showing, hiding, disabling, or updating a setting.

## Add a condition

1. Select a component
2. Open the `Conditions` section in the settings panel
3. Select `Add condition`
4. Choose the action you want to apply
5. Define the comparison

## Condition actions

* Show
* Hide
* Update setting

## Enable or disable a condition

Use the toggle in the conditions drawer to disable a condition without deleting it.

Disabled conditions are ignored in the builder preview and the published app.

## Use role-based conditions

Conditions can also hide or show components based on the current user's role.

Role values must be uppercase:

* `BASIC`
* `POWER` (Deprecated)
* `ADMIN`

NB: Custom Roles must be referenced by their ID, not their name.
