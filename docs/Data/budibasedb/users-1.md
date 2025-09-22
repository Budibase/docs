---
title: User
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
The User column type allows you to select a Budibase user from a dropdown list as determined by the [Application access](doc:application-access).  This list will include all admins of the tenant, and any members of the app.

Toggle `Allow multiple users` on to make the list a multi-select.

<Image alt="User column type" align="center" width="350px" src="https://files.readme.io/9ad6a82-Screenshot_2023-10-30_at_14.53.21.png">
  Adding a User column type
</Image>

With the user column added, you can now click the `+` within your data grid view to select a user as identified by their searchable email address.

<Image alt="Searching for and adding a user" align="center" src="https://files.readme.io/a3e2801-user_col.png">
  Searching for and adding a user
</Image>

> 👍 SQL support
>
> The user column is available for both the <Glossary>Budibase DB</Glossary> and external [SQL databases](doc:sql-datasource).
>
> In the case of SQL, when a user column is added within Budibase, it will create a varchar column in your table to hold the user id:
>
> <Image align="center" width="360px" src="https://files.readme.io/2018311-sql.png" />

<br />

***

<br />

## Usage

A common usage of user columns in your tables is to indicate *ownership* or *assignment*. 

For example, I can add an 'Assignee' user column to a 'Jobs' table to indicate who is responsible for completing that job. 

<Image align="center" src="https://files.readme.io/30a33d7-Screenshot_2023-11-03_at_13.03.13.png" />

When making use of a user column in your [Forms](doc:forms), you need to use the [User Field](https://docs.budibase.com/docs/pickers#user-field) component.

<br />

### Show current user records

For single user columns, you can [filter](doc:searchfilter-data) on the currently logged in user by using the `{{ Current User._id }}` [binding](https://docs.budibase.com/docs/users-table#current-user-bindings).

<Image align="center" src="https://files.readme.io/96e4eaf-Screenshot_2023-11-03_at_16.00.31.png" />

If your user column has *Allow multiple users* enabled, then the filter will be a [contains](https://docs.budibase.com/docs/multi-select#filtering) like so:

<Image align="center" src="https://files.readme.io/c4b0dec-Screenshot_2023-11-03_at_16.05.54.png" />

<br />

***

<br />

## Migrate to user column

> 📘
>
> As of **v2.11.0** you will no longer be able to create a relationship between the [Users table](doc:users-table) and a <Glossary>Budibase DB</Glossary>.
>
> To accommodate this change, apps that were created before **v2.11.0** can migrate existing user table relationship fields to the new user column, as outlined below.

1. Open your existing app and navigate to the Budibase table that contains a user relationship
2. Click the hamburger menu, and select the last option: `Migrate to user column`

<Image align="center" src="https://files.readme.io/c19c5d3-Screenshot_2023-11-03_at_16.28.38.png" />

3. Click `Continue` to create the new user column. As warned, you may need to update some existing bindings

<Image align="center" src="https://files.readme.io/10b98fa-Screenshot_2023-11-03_at_16.30.18.png" />

<Image alt="User column added" align="center" src="https://files.readme.io/7346683-Screenshot_2023-11-03_at_16.31.17.png">
  User column added
</Image>

This will remove the link from the **App users** table and can improve the performance of your apps.

It should also be noted that if you were [displaying user data](https://docs.budibase.com/docs/fetching-data#display-user-specific-data) through a migrated relationship link, this would also need to be updated as shown in the 'Usage' section above.
