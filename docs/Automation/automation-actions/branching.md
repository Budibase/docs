---
title: Branching
excerpt: Split an automation into conditional paths
deprecated: false
hidden: false
metadata:
  title: ''
  description: ''
  robots: index
next:
  description: ''
---
Use branching when one automation should follow different paths for different conditions.

## How branching works

Create a branch from an existing step, then add conditions to each path.

Only the first matching branch runs.

## Common uses

Branching is useful when you want to:

* Route requests by type
* Send different notifications for different values
* Run different backend steps for different rows

## Build a branch

1. Add a branching step to an automation
2. Add one or more branches
3. Add conditions to each branch
4. Reorder branches if needed
5. Add the actions for each path

## Notes

* A branch with no condition always matches
* Use descriptive names for each branch
* Keep the number of branches small when possible
