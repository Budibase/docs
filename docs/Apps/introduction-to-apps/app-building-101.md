---
title: App building 101
excerpt: ''
deprecated: false
hidden: false
metadata:
  title: ''
  description: ''
  robots: index
next:
  description: ''
---
This guide walks through a simple ticketing app using Budibase DB, role-based
views, bindings, filters, and an automation.

## Set up the data

Create a `Tickets` table with these columns:

| Column | Type |
| :----- | :--- |
| `Title` | Text |
| `Description` | Long-form text |
| `Status` | Single select |
| `Priority` | Single select |
| `Time Created` | Date |
| `Resolution Notes` | Long-form text |
| `Created By` | Single user |
| `Category` | AI or text |

Use default values for `Status`, `Time Created`, and `Created By`.

Optionally use an [AI column](doc:ai-column) with `Categorise Text` for
`Category`. This requires an AI model provider; otherwise, use a text or
single-select column.

Create two [views](doc:views):

* `End User Tickets` for end users
* `Service Desk Agent Tickets` for service agents

Configure `End User Tickets` to:

* Allow the End User role to access it
* Filter rows so users only see tickets they created
* Allow users to write `Title` and `Description`, with other columns read-only

Configure `Service Desk Agent Tickets` to allow the Service Desk Agent role
full read and write access.

## Build the end user screen

Create an app named `Ticketing System`.

Generate a screen from the `End User Tickets` view using a table layout.

Use modal forms for create and edit actions.

The generated screen uses the view's write-access role. Check the screen access
setting before continuing.

Then make these changes:

* Hide any columns users do not need
* Rename the table heading
* Limit the create form to `Title` and `Description`
* Set the edit form to read-only
* Reorder the edit form fields so the most important fields are easier to scan

## Use bindings

Update the form title with values from the edit form's row. The exact component
name depends on your screen; the binding will look like this:

```handlebars
{{ [Edit row form block].End User Tickets.Category }}: {{ [Edit row form block].End User Tickets.Title }}
```

## Build the service agent screen

Generate a second screen from the `Service Desk Agent Tickets` view.

Then make these changes:

* Rename the table heading
* Hide any unneeded columns
* Remove the create row actions if agents should not create tickets here
* Reuse the same title binding pattern for the edit form
* Leave the agent form editable

## Add filtering

Add a [Filter component](doc:searchfilter-data) to the service agent screen.

Set its target to the table and choose the fields agents can filter.

## Set up email notifications

First, make sure [SMTP email](doc:email) is configured.

Create an automation with a [Row Created trigger](doc:row-triggers) for the
`Tickets` table.

Add a `Send Email (SMTP)` action. Configure `Send To`, `Send From`, and
`Subject`, then bind the message body to the created ticket data:

```markdown
## A new ticket has been submitted by {{ trigger.row.Created By.email }}

### {{ trigger.row.Category }}: {{ trigger.row.Title }}

{{ trigger.row.Description }}
```

Run a test with an existing ticket row, then activate the automation.

## Test the flow

Create a new ticket and confirm that:

* The end user screen only exposes the intended fields
* The service agent screen can filter and update tickets
* The automation sends the expected email

## Related pages

* [Screens](doc:screens)
* [Views](doc:views)
* [Automation building 101](doc:automation-building-101)
