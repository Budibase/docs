---
title: Row actions
excerpt: >-
  A key addition in Budibase v3 is Row Actions, these are used for creating and
  progressing workflows.
deprecated: false
hidden: false
metadata:
  title: ''
  description: kba_5hdxe
  robots: index
next:
  description: ''
---
Row actions let you trigger a workflow from a table row.

Configure the action on the table, then enable it per view to control who can run it.

## Setup

1. Go to the data and select the table/view you wish to create a row action on
2. Click the **Row actions** button beside **Access** above your table
   This opens the row action controls for the selected table or view.
3. A context menu will appear, providing you with some information about row actions
4. Click the **Create row action** button
5. Type a name for the row action, such as `accept`, `deny`, or `assign`
6. Click the **Create** button
7. Build the automation that should run for this row action
8. Return to the table and enable the action for the views and roles that should see it
9. Users will then see a dropdown on the table row with the available actions

## Design

Row actions are also available as a design-time action. See [Row action](doc:data-actions#row-action) for configuration details.

There are two common ways to add them to a screen:

1. Add a [table](doc:table) component and use `Add button` in the settings panel.
2. Choose a custom button or a row action.
3. The button label matches the row action name.

The button appears in the table and can be made collapsible if you have several actions.

You can use the button to trigger the row action automation directly from the table.

### Form block

A [form block](doc:form-block) can also generate row action buttons automatically. Use an update form type so the action works on existing data rather than creating new rows.

You can add a [Row action](doc:data-actions#row-action) to any component that supports [actions](doc:actions).
