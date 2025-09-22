---
title: Application access
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
To access user management in the builder, click on the **Users** button in the header:

<Image align="center" src="https://files.readme.io/a6f6b616add1b420ae5e21d5f156f40cbe3ae8868cca75af878f93f0840a876a-Screenshot_2024-08-29_at_14.30.26.png" />

**Admin** users can manage user access to their application from within the application builder.

<br />

## Who has access to my application?

The user management side-bar will display an overview of all the current users and groups in the system that have access to your application.

<Image alt="Users side panel" align="center" width="300px" src="https://files.readme.io/21496a3-user_snapshot.png">
  Users side panel
</Image>

> 📘
>
> By default, the first **50** application users will appear in the **Users** section, followed by all members of the **Groups**(🔒). 
>
> If you can't see a user in the list, use the search bar at the top.

### Admins

Admin tenant users have global access to *any* application. They will always be listed here with **Admin** access and cannot be changed:

<Image alt="Admin and developer users will always have the 'Admin' app role" align="center" width="300px" src="https://files.readme.io/2f85813-admin.png">
  Admin users will always have the 'Admin' app role
</Image>

### Creators 🔒

**Creator** users can build and develop some applications, while being an <Glossary>End User</Glossary> for other applications.

This provides fine-grain control, allowing you to give admin like permissions for certain applications to your team, while ensuring they cannot access all your applications.

<Image alt="Application Creator permissions" align="center" width="300px" src="https://files.readme.io/b1f3857-Screenshot_2023-09-08_at_09.46.09.png">
  Application Creator permissions
</Image>

### Application users

App users only have access to published applications on which they been granted at least **Basic** access permission. You can update an <Glossary>End User</Glossary>s access permissions at any time. If necessary you may also `Remove` their access entirely.

<Image alt="Remove user option" align="center" width="300px" src="https://files.readme.io/a732324-app_user.png">
  Remove user option
</Image>

If you remove an <Glossary>End User</Glossary>s access within the user side-panel, that user will no longer be able to access the application when they log in.

### User groups 🔒

> 📘
>
> [User groups](doc:user-groups) are a premium feature.

Any user groups with access to your application will be displayed along with its total membership count. Updates to the group access level will be applied to all member users. Selecting the `Remove` option in the access dropdown will remove the group from the application and thereby revoke access of any members.

<Image alt="Group access levels" align="center" width="300px" src="https://files.readme.io/3c3ccd4-groups.png">
  Group access levels
</Image>

### Group user access 🔒

Users who have been indirectly granted access to an application via membership of a **User group** will appear muted in the **Users** list. Clicking on the access dropdown will outline where they inherited their access from.

<Image alt="Note showing the user group that provided this user basic access " align="center" width="300px" src="https://files.readme.io/4444d81-groupaccess.png">
  Note showing the user group that provided this user basic access 
</Image>

Even though the above user has been granted **Basic** access to the application by their group, you can apply an override that will apply only to that app user:

<Image alt="Overriding the group permission" align="center" width="300px" src="https://files.readme.io/dee9401-override.png">
  Overriding the group permission
</Image>

As you can see above, the user `s.donaghy@email.com` was initially only granted **Basic** access to the application as a member of the **Press Team**. Now they have been upgraded to **Power** user.

Removing an app user access override will revert them to their group access level.

<br />

## Finding and inviting users

The access panel will display only users or groups who *currently* have access to your application. If you wish to add any new users or groups to the application you can use the search bar.

<Image alt="Searching for groups and users" align="center" width="300px" src="https://files.readme.io/19397d3-search.png">
  Searching for groups and users
</Image>

**Users** can be found by entering their *email address* and **Groups** can be found by entering their *name*.

### Inviting new users

If your user doesn't appear when searching the system, you will be presented with the option to invite them to your Budibase tenant.

<Image alt="Invite a new user" align="center" src="https://files.readme.io/e70041d-invite_user.png">
  Invite a new user
</Image>

After clicking the `Invite user` button, you will be able to provide the user invite email address, assign them a [User role](doc:user-roles), and an <Glossary>App Access Level</Glossary>. 

<Image alt="Add user" align="center" src="https://files.readme.io/53119e2-Add_new_user.png">
  Add user
</Image>

Click the `Add user` button to send an invite email to the new user. Invitations to Budibase will remain active for **7 days**, after which they will be deleted. Any invites currently open in the tenant will be listed at the top of the user side-panel in the builder:

<Image
  alt="Pending invite for Ellen

 







In the time before a user accepts their invitation, you still have the option to update their access level to any application on your tenant."
  align="center"
  width="300px"
  src="https://files.readme.io/3e32c86-pending_invites.png"
>
  Pending invite for Samantha
</Image>

By default, Budibase will assign **Basic** access. Before a user accepts their invitation, you still have the option to update their access level to any application on your tenant.

> 🚧
>
> Valid SMTP configuration must be available to allow the sending of email invites.

### Create a user with a temporary password

In the event that the Budibase tenant does not have valid SMTP email settings readily available, the fallback behaviour is to create a new user and output temporary credentials.

<Image alt="Adding a user with a temporary password" align="center" width="300px" src="https://files.readme.io/9a7767e-nosmtp.png">
  Adding a user with a temporary password
</Image>

Keep a note of the credentials and relay them to your new user. They will be prompted to change them upon first login.
