---
title: User
excerpt: Store Budibase users in Budibase DB
deprecated: false
hidden: false
metadata:
  title: ''
  description: ''
  robots: index
next:
  description: ''
---
Use user columns when a row needs to reference one or more Budibase users.

## Create a user column

1. Open the table
2. Click `Create column`
3. Choose `Single User` or `Multi User`
4. Save the column

The dropdown includes app members and tenant admins.

## Use user columns

User columns are commonly used for:

* Ownership
* Assignment
* Approvals

In forms, use the [User Field](https://docs.budibase.com/docs/pickers#user-field) component.

## Filter by current user

Use `{{ Current User._id }}` to filter rows for the logged-in user.

Use a contains filter when the column allows multiple users.

## SQL support

User columns also work with external SQL datasources.

Budibase stores the user ID in a varchar column in the SQL table.

## Migrate existing relationships

Apps created before v2.11.0 can migrate user-table relationship fields to user columns.

1. Open the table
2. Open the table menu
3. Choose `Migrate to user column`
4. Follow the prompts to create the new column

Update any bindings that referenced the old relationship field.
