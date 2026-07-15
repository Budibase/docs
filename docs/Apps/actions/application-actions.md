---
title: Application actions
excerpt: Actions for navigation, notifications, modals, and automations.
deprecated: false
hidden: false
metadata:
  title: ''
  description: ''
  robots: index
next:
  description: ''
  pages:
    - type: basic
      slug: form-actions
      title: Form actions
---
Use application actions when a user interaction should change screens, open UI, show feedback, or trigger automation.

## Navigate To

Use this action to open a URL or another screen.

If the destination is a URL, you can open it in a new tab.

If the destination is a screen, you can open it in the current tab or in a modal.

## Trigger automations

Use this action to run an existing automation.

Pass values into the automation with fields on the action.

This is useful when a user action should kick off a background process.

## Logout

Use this action to sign the current user out and optionally redirect them.

## Close screen modal

Use this action to close the current screen modal.

You can also navigate to another screen after closing.

## Close modal

Use this action to close the currently open modal component.

## Open modal

Use this action to open a modal component that already exists on the current screen.

## Show notification

Use this action to show a success, warning, error, or info message.

You can include bindings in the message text.

## Prompt user

Use this action to confirm a user decision before continuing a chain of actions.

If the user cancels, later actions do not run.

## Open side panel

Use this action to open one of the screen's side panels.

## Close side panel

Use this action to close the currently open side panel.
