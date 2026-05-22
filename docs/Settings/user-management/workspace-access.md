---
title: Workspace access
excerpt: ''
deprecated: false
hidden: false
metadata:
  title: ''
  description: kba_5hmo2
  robots: index
next:
  description: ''
---
To access workspace user management in the Builder, click **Invite member** in the left sidebar.

Users with admin-level access can manage workspace members directly from this panel.

## Who has access to my workspace?

The workspace user panel shows all users and groups with access to the current workspace. Depending on their role, users may have builder access or published-app-only access.

> 📘
>
> By default, the first **50** workspace users will appear in the **Users** section, followed by all members of the **Groups**(🔒). 
>
> If you can't see a user in the list, you can just use the search bar at the top.

### Organisation admins

Organisation admins have global access to *any* workspace. They always have builder access and the highest permissions for a workspace.

### Creators 🔒

**Creator** users can build and develop some workspaces, while being an <Glossary>End User</Glossary> for other workspaces.

This provides fine-grain control, allowing you to give builder permissions for selected workspaces without granting full workspace admin access everywhere.

> 🚧
>
> Changing a user role from "App user" to "Can edit" will also convert that user into a creator-type user.

### App users

App users only have access to published applications inside a workspace to which they have been granted at least **App user** access permission. You can update an <Glossary>End User</Glossary>'s access permissions at any time. If necessary, you may also `Remove` their access entirely.

If you remove an <Glossary>End User</Glossary>s access within the user side-panel, that user can no longer access the workspace or applications when they log in.

### User groups 🔒

> 📘
>
> [User groups](doc:user-groups) is an enterprise feature.

Any user groups with access to your application will be listed along with their total membership count. Changes to a group’s access level apply to all of its members. If you select Remove from the access dropdown, the group will be removed from the workspace, and its members will lose access. 

### Group user access 🔒

> 📘
>
> User groups is an enterprise-only feature.

Users indirectly granted access to a workspace via a **User group** will appear muted in the **Users** list.

If a user gets workspace access through group membership (including through a default user group), the access is shown as group-managed in the workspace panel rather than forcing a direct **Basic** assignment on the user record.

Even though their group has granted the above user **App user** access to the application, you can apply an override that will apply only to that app user:

As you can see above, the user `test+1@test.com` was initially only granted **App user** access to the application as a member of the **Developer Team**. They can also be upgraded to an **Admin** user.

Removing an app user access override will revert them to their group access level.

## Finding and inviting users

The access panel will display only users or groups who currently have access to your application. You can use the search bar to add new users or groups.

**Users** can be found by entering their *email address* and **Groups** can be found by entering their *name*.

### Inviting new users

If your user doesn't appear when searching the system, you will be presented with the option to invite them to your Budibase tenant.
After clicking **Invite user**, you can:

1. Enter one or more email addresses.
2. Assign a [user role](doc:user-roles), such as Organisation admin, Creator, or End user.
3. If you select End user, choose the app role to apply in the workspace (for example Basic user, Admin user, or custom role).
4. Choose onboarding: email invite or generated password.
5. Confirm to send invites or create users.

Invitations remain active for **7 days**. Pending invites are shown at the top of the workspace user panel.

> 🚧
>
> A valid SMTP configuration must be available to send email invites.

### Create a user with a temporary password

If the Budibase tenant does not have valid SMTP settings available, the fallback behavior is to create a new user and show temporary credentials.

Keep a note of the credentials and relay them to your new user. They will be prompted to change them upon first login.