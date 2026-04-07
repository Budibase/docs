---
title: User roles
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
At a high level, a user can have tenant-level access in the [Portal](doc:portal), and they can also have workspace-level app access.

Additional fine-tuning is available through the Creator role and workspace app roles, allowing one user to build in some workspaces while being an <Glossary>End User</Glossary> in others.

## Access permission

There are three core tenant roles in Budibase:

* Organisation admin: Full access to settings and all workspaces.
* Creator: Builder access for assigned workspaces.
* End user: No builder access; published-app usage only.

> 📘 Publish your application to give users access.
>
> End users are only able to view published applications.
>
> Organisation admins can manage users and global settings.

## Changing permissions

An Organisation admin can edit tenant user roles from **Portal** > **Settings** > **People**.

1. Open the user record.
2. Change the tenant role.
3. Save if prompted (or close if auto-save is enabled in your environment).

## Workspace specific roles

Users without Organisation admin permissions only see workspaces they are granted access to. Within each workspace, you can set app-level roles that control what data and screens they can access.

These app roles work with [screen access levels](https://docs.budibase.com/docs/screens#access-level) and determine what a user can do inside published apps.

Users can receive workspace access directly or through user groups. If access is inherited from a group, Budibase treats that as group-managed access in workspace membership views.

Higher-tier roles inherit lower-tier visibility. For example, an `Admin` app role can see content available to `Basic` and `Public`.

| Order | Role     | Description                                         |
| :---- | :------- | :-------------------------------------------------- |
| 1     | Public   | Can see un-authenticated. Cannot be given to a user |
| 2     | App user | Lowest authenticated role                           |
| 3     | Admin    | Highest authenticated role                          |

> 📘 Order matters!
>
> The order of user role matters. Higher roles can see everything from lower roles as well as their own.

### Adding custom roles

The core workspaces roles cannot be deleted, however you can add and remove any number of custom roles if you need more granular access control.

Within your workspace:

1. Open the Data section.
2. Click **Manage roles**.
3. Create a new custom role.
4. Set its inherited role and base permissions.

**Inherits Role** determines the rank of your new role. In this case, a _Super_ user will be able to access all screens of access level Super, Power, Basic and Public, but will not be able to access Admin app screens.

**Base Permissions** determines the permissions of the role. Options include:

| Order | Role     | Description                                                                                                                                                                                                     |
| :---- | :------- | :-------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| 1     | Public   | <ul> <li>Unauthenticated or general users</li> <li>No permissions; cannot access non-public sources or screens</li> </ul>                                                                                       |
| 2     | App user | <ul> <li>Regular authenticated users</li> <li>Can interact with provided content/features</li> </ul>                                                                                                            |
| 3     | Admin    | <ul> <li>Highest-level non-builder users</li> <li>Inherits all lower-role access; can manage users and view all screens</li> </ul>                                                                              |
| 4     | Creator  | <ul> <li>App builders and developer</li> <li>Full admin rights plus builder access; can create and manage apps</li> <li>Perform [admin functions](https://docs.budibase.com/docs/portal#admin-portal)</li></ul> |
