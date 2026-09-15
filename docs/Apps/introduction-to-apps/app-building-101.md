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
This guide walks through a simple ticketing app using Budibase DB, role-based views, bindings, filters, and an automation.

## What you will build

You will create:

* A ticket table with role-specific views
* A screen for end users to submit tickets
* A screen for service agents to review and update tickets
* An email notification when a ticket is created

## Set up the data

Create a `Tickets` table with these columns:

* `Title`
* `Description`
* `Status`
* `Priority`
* `Time Created`
* `Resolution Notes`
* `Created By`
* `Category`

Use default values for `Status`, `Time Created`, and `Created By`.

Set `Category` using an AI column with text categorization.

Create two views:

* `End User Tickets` for end users
* `Service Desk Agent Tickets` for service agents

The end user view should only allow users to edit `Title` and `Description`.

The service agent view should allow full read and write access.

## Create the app

Create a new app and name it `Ticketing System`.

## Build the end user screen

Generate a screen from the `End User Tickets` view using a table layout.

Use modal forms for create and edit actions.

Then make these changes:

* Hide any columns users do not need
* Rename the table heading
* Limit the create form to `Title` and `Description`
* Set the edit form to read-only
* Reorder the edit form fields so the most important fields are easier to scan

## Use bindings

Update the form title to include both `Category` and `Title` from the selected row.

Use a binding like this:

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

Add a Filter component to the service agent screen.

Set the target component to the table and choose the fields agents should filter by.

This lets agents narrow the list without changing the underlying data.

## Set up email notifications

Create an automation that runs when a row is created in `Tickets`.

Add a `Send Email (SMTP)` action and set:

* `Send To`
* `Send From`
* `Subject`

Then bind the message body to the created ticket data:

```markdown
## A new ticket has been submitted by {{ trigger.row.Created By.email }}

### {{ trigger.row.Category }}: {{ trigger.row.Title }}

{{ trigger.row.Description }}
```

## Test the flow

Create a new ticket and confirm that:

* The end user screen only exposes the intended fields
* The service agent screen can filter and update tickets
* The automation sends the expected email
