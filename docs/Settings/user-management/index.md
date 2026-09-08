---
title: User management
excerpt: >-
  Manage users, roles, groups, and SCIM provisioning across Budibase.
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
      slug: adding-users
      title: Adding Users
    - type: basic
      slug: user-roles
      title: User Roles
    - type: basic
      slug: workspace-access
      title: Workspace Access
    - type: basic
      slug: in-app-user-management
      title: In-app User Management
    - type: basic
      slug: user-groups
      title: User Groups
    - type: basic
      slug: scim-provisioning
      title: SCIM Provisioning
---
Use user management to control who can sign in, what access they have, and how they are grouped across Budibase.

Users are shared across the whole Budibase installation.

## Invite users

You can invite users from two places:

* The `Invite users` button in the builder sidebar
* `Settings` > `People` in the Budibase portal

Use [Adding users](doc:adding-users) for the full invite flow.

## Reset passwords

If a user needs a password reset:

1. Open the user list.
2. Open the user menu next to the email address.
3. Select `Force password reset`.

Budibase generates a temporary password and prompts the user to change it after sign-in.

## Roles

Users can have both tenant-level and workspace-level access.

Use `User Roles` to configure access to specific apps and workspaces.

## Delete users

Delete users from the user menu when they no longer need access.

Treat deletion as permanent. If you need the user again later, invite them again instead.

## Related guides

* [Adding Users](doc:adding-users)
* [User Roles](doc:user-roles)
* [Workspace Access](doc:workspace-access)
* [In-app User Management](doc:in-app-user-management)
* [User Groups](doc:user-groups)
* [SCIM Provisioning](doc:scim-provisioning)
