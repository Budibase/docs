---
title: Users table
excerpt: ''
deprecated: false
hidden: false
metadata:
  title: ''
  description: kba_5hfpe
  robots: index
next:
  description: ''
---
The **App users** table stores the users who can access your app.

It is a read-only Budibase DB table that sits at the top of the datasource list.

## What it contains

The users table includes standard user fields and any custom columns added by Budibase.

You can use those values in bindings, filters, and conditional logic.

## Updated By columns

When you add an `Updated By` auto column to another table, Budibase creates a linked field in the users table.

Use these columns to display user-specific data for the current logged-in user.

## Current User bindings

Use the `Current User` bindings to access logged-in user data in the builder.

Common uses include:

* Displaying the current user name
* Filtering rows assigned to the current user
* Using the user OAuth token in API headers

## User columns

Budibase now prefers user columns over direct relationships to the users table.

If you have an older app, you can migrate existing user-table relationship fields to a user column.

## Migrate existing relationships

1. Open the table that contains the user relationship
2. Open the table menu
3. Choose `Migrate to user column`
4. Follow the prompts

Update any bindings that referenced the old relationship field after the migration.
