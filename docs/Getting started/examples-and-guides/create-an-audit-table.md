---
title: Create an Audit Table
excerpt: >-
  This guide explains how to implement a basic audit system in your app. The
  system tracks changes to the Patients table and logs those changes in a
  separate Patient audit table using automations.
deprecated: false
hidden: false
metadata:
  title: ''
  description: ''
  robots: index
next:
  description: ''
---
> This guide uses JavaScript to compare the previous and updated versions of a row.

## Scenario

This guide shows you how to track updates to patient records in a separate audit table. When a user edits a row in `Patients`, an automation compares the previous and updated data, identifies the fields that changed, and creates one row in `Patient audit` for each change.

Use this pattern to:

* Maintain a history of edits for review or compliance
* Record which fields changed and their old and new values
* Link every audit entry to the affected patient

This example records updates made after the automation is enabled. It does not create audit entries for existing data, new rows, or deleted rows.

## Create the tables

In the Data area, create a table named `Patients` with these columns:

| Column | Type |
| :--- | :--- |
| `First_name` | Text |
| `Last_name` | Text |
| `DOB` | Date/time |
| `Phone` | Text |
| `Email` | Text |
| `Address` | Long form text |
| `Last_visit_date` | Date/time |

Create a second table named `Patient audit` with these columns:

| Column | Type | Configuration |
| :--- | :--- | :--- |
| `Column_name` | Text | Stores the name of the field that changed |
| `Old_value` | Text | Stores the value before the update |
| `New_value` | Text | Stores the value after the update |
| `Action_type` | Single select | Add an `UPDATE` option |
| `Patient` | Relationship | Many audit rows to one `Patients` row |
| `Changed_at` | Date/time | Populated by the automation |

When you create the relationship, name the reciprocal field on `Patients` `Audit_logs`. A patient can then have many related audit rows.

## Generate the patient screens

1. Go to the Design area.
2. Select the plus button to add a screen.
3. Select `Table`.
4. Choose `Patients` as the data source.
5. Select `New screen`.

This generates a table that lists patients, a form for creating patient records, and a form for editing a patient when a user selects its row. Updates submitted from the edit form will trigger the automation created below.

## Create the automation

Go to the Automation area and create an automation.

### Configure the trigger

1. Select the `Row updated` trigger.
2. Set its table to `Patients`.

The trigger provides the updated row as `trigger.row` and its previous state as `trigger.oldRow`.

### Compare the old and new rows

Add a `JS Scripting` step and use the following code:

```javascript
const oldRow = $("trigger.oldRow")
const newRow = $("trigger.row")

const fieldsToCheck = [
  "First_name",
  "Last_name",
  "DOB",
  "Phone",
  "Email",
  "Address",
  "Last_visit_date",
]

const dateFields = new Set(["DOB", "Last_visit_date"])

function normalize(value, field) {
  if (value == null || value === "") return ""

  if (dateFields.has(field)) {
    const timestamp = Date.parse(value)
    return Number.isNaN(timestamp)
      ? String(value)
      : new Date(timestamp).toISOString()
  }

  if (typeof value === "object") return JSON.stringify(value)
  return String(value)
}

function auditValue(value) {
  if (value == null) return ""
  if (typeof value === "object") return JSON.stringify(value)
  return String(value)
}

return fieldsToCheck.reduce((changes, field) => {
  const oldValue = oldRow[field]
  const newValue = newRow[field]

  if (normalize(oldValue, field) !== normalize(newValue, field)) {
    changes.push({
      Column_name: field,
      Old_value: auditValue(oldValue),
      New_value: auditValue(newValue),
      Action_type: "UPDATE",
      Patient: newRow._id,
    })
  }

  return changes
}, [])
```

The script returns an array containing one object for each changed field. The explicit `fieldsToCheck` list prevents Budibase system fields and the `Audit_logs` relationship from being recorded. Add or remove names in this list if your `Patients` schema changes.

### Create an audit row for each change

1. Add a `Loop` step after `JS Scripting`.
2. Set the loop's `Binding / Value` to the output returned by the JavaScript step. Use the bindings panel to select the step output so the step number matches your automation.
3. Inside the loop, add a `Create row` action.
4. Set the action's table to `Patient audit`.
5. Map the columns as follows:

| `Patient audit` column | Value |
| :--- | :--- |
| `Column_name` | `{{ loop.currentItem.Column_name }}` |
| `Old_value` | `{{ loop.currentItem.Old_value }}` |
| `New_value` | `{{ loop.currentItem.New_value }}` |
| `Action_type` | `{{ loop.currentItem.Action_type }}` |
| `Patient` | `{{ loop.currentItem.Patient }}` |
| `Changed_at` | `{{ now }}` |

The `Patient` value is the updated patient's row ID. Budibase uses it to create the relationship between the audit row and the patient.

## Test the audit trail

1. Save and enable the automation.
2. Open the generated patient table in the app preview.
3. Edit more than one field on a patient and save the form.
4. Check the automation run log and confirm that the JavaScript step returned one object per changed field.
5. Open `Patient audit` in the Data area and confirm that a separate audit row was created for each changed field.
6. Check that every audit row contains the old value, new value, `UPDATE` action, patient relationship, and timestamp.

If no audit rows are created, confirm that the automation is enabled, the trigger watches `Patients`, and the Loop step is bound to the JavaScript step's returned array.

## View the history in your app

To make the audit history available to app users, generate a table screen for `Patient audit`. You can also add a data provider or table to the patient detail screen and filter it by the current patient's `_id`. Only expose the audit screen to roles that should be allowed to review the history.

Each update now produces one immutable audit row per changed field. Editing an audit row would alter the history, so restrict write access to `Patient audit` and let the automation be its only writer.
