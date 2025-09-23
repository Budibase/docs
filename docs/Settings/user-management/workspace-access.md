---
title: Workspace access
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
To access user management in the builder, click on the **Invite member** at the bottom of the left side panel:

[block:image]
{
  "images": [
    {
      "image": [
        "https://files.readme.io/e2ef3f669feabfdef50b32df3311457fb9767562301a6dfae9e6a8fc50c7f895-Screenshot_2025-09-16_at_13.20.17.png",
        null,
        ""
      ],
      "align": "center"
    }
  ]
}
[/block]


**Admin** users can manage user access to their application from within the application builder.

<br />

## Who has access to my workspace?

The user management sidebar will display an overview of all the current users and groups that have access to your workspace. Depending on the access level, some users will only have access to your published apps, while others will have access to the builder.

[block:image]
{
  "images": [
    {
      "image": [
        "https://files.readme.io/0791e11732f4366059a6189addc22ba70b511d4e874f3bc12f48453f8c773e22-Screenshot_2025-09-17_at_05.51.54.png",
        null,
        "Users side panel"
      ],
      "align": "center",
      "sizing": "300px",
      "caption": "Users side panel"
    }
  ]
}
[/block]


> 📘 
> 
> By default, the first **50** workspace users will appear in the **Users** section, followed by all members of the **Groups**(🔒). 
> 
> If you can't see a user in the list, you can just use the search bar at the top.

### Workspace admins

Workspace admins have global access to _any_ workspace. Regardless of the role they have, they should have access to the builder and will always have the highest permissions for a workspace.

### Creators 🔒

**Creator** users can build and develop some workspaces, while being an <<glossary:End User>> for other workspaces.

This provides fine-grain control, allowing you to give admin-like permissions for certain workspaces to your team, while ensuring they cannot access all your workspaces.

[block:image]
{
  "images": [
    {
      "image": [
        "https://files.readme.io/9505efa69c4be2bfbd0174d8f20d589f899c31300d09cda021d3fef408d1867d-Screenshot_2025-09-16_at_13.24.05.png",
        "",
        "Application Creator permissions"
      ],
      "align": "center",
      "sizing": "300px",
      "caption": "Application Creator permissions"
    }
  ]
}
[/block]


> 🚧 
> 
> Changing a user role from "App user" to "Can edit" will also convert that user into a creator-type user.

### App users

App users only have access to published applications inside a workspace to which they have been granted at least **App user** access permission. You can update an <<glossary:End User>>s access permissions anytime. If necessary, you may also `Remove` their access entirely.

[block:image]
{
  "images": [
    {
      "image": [
        "https://files.readme.io/caaefe45cf84defd5567b00506af20e0644421a6d8d8882f6fc2e3bd2091b4de-Screenshot_2025-09-16_at_13.51.42.png",
        null,
        "Remove user option"
      ],
      "align": "center",
      "sizing": "300px",
      "caption": "Remove user option"
    }
  ]
}
[/block]


If you remove an <<glossary:End User>>s access within the user side-panel, that user can no longer access the workspace or applications when they log in.

### User groups 🔒

> 📘 
> 
> [User groups](doc:user-groups) is an enterprise feature.

Any user groups with access to your application will be listed along with their total membership count. Changes to a group’s access level apply to all of its members. If you select Remove from the access dropdown, the group will be removed from the workspace, and its members will lose access. 

[block:image]
{
  "images": [
    {
      "image": [
        "https://files.readme.io/bcf9e8b9fd348c84ee2a160a725d08ea10b85f7df22b04b5874dc68f91773064-Screenshot_2025-09-17_at_06.00.16.png",
        null,
        "Group access levels"
      ],
      "align": "center",
      "sizing": "300px",
      "caption": "Group access levels"
    }
  ]
}
[/block]


### Group user access 🔒

Users indirectly granted access to a workspace via a **User group** will appear muted in the **Users** list.

[block:image]
{
  "images": [
    {
      "image": [
        "https://files.readme.io/76d75bdefb831912f7e93bb0f20b4a8e1afc0a295ee5d4bfc4ab863ad194cb29-Screenshot_2025-09-17_at_06.01.09.png",
        null,
        "Note showing the user group that provided this user basic access "
      ],
      "align": "center",
      "sizing": "300px",
      "caption": "Note showing the user group that provided this app user access "
    }
  ]
}
[/block]


Even though their group has granted the above user **App user** access to the application, you can apply an override that will apply only to that app user:

[block:image]
{
  "images": [
    {
      "image": [
        "https://files.readme.io/683c9066e241be99dfde1abd3cc807da03b69f293d7937891cd307bd5403a714-Screenshot_2025-09-17_at_06.01.40.png",
        null,
        "Overriding the group permission"
      ],
      "align": "center",
      "sizing": "300px",
      "caption": "Overriding the group permission"
    }
  ]
}
[/block]


As you can see above, the user `test+1@test.com` was initially only granted **App user** access to the application as a member of the **Developer Team**. They can also be upgraded to an **Admin** user.

Removing an app user access override will revert them to their group access level.

<br />

## Finding and inviting users

The access panel will display only users or groups who currently have access to your application. You can use the search bar to add new users or groups.

[block:image]
{
  "images": [
    {
      "image": [
        "https://files.readme.io/19397d3-search.png",
        null,
        "Searching for groups and users"
      ],
      "align": "center",
      "sizing": "300px",
      "caption": "Searching for groups and users"
    }
  ]
}
[/block]


**Users** can be found by entering their _email address_ and **Groups** can be found by entering their _name_.

### Inviting new users

If your user doesn't appear when searching the system, you will be presented with the option to invite them to your Budibase tenant.

[block:image]
{
  "images": [
    {
      "image": [
        "https://files.readme.io/52b33118cc1277c3ec7cd4d5be4e7ea09c7057d7416eb260a51f2615abedc891-Screenshot_2025-09-17_at_06.04.24.png",
        "",
        "Invite a new user"
      ],
      "align": "center",
      "caption": "Invite a new user"
    }
  ]
}
[/block]


After clicking the `Invite user` button, you will be able to provide the user invite email address, assign them a [User role](doc:user-roles), and an <<glossary:App Access Level>>. 

[block:image]
{
  "images": [
    {
      "image": [
        "https://files.readme.io/1cec657dcb537abe0b0f6d9ac9ab656ea530ee91686f94f825b981ef1163da9d-Screenshot_2025-09-17_at_06.03.52.png",
        "",
        "Add user"
      ],
      "align": "center",
      "caption": "Add user"
    }
  ]
}
[/block]


Click the `Add user` button to send an invite email to the new user. Invitations to Budibase will remain active for **7 days**, after which they will be deleted. Any invites currently open in the tenant will be listed at the top of the user side-panel in the builder:

By default, Budibase will assign **App user** access. Before a user accepts their invitation, you still have the option to update their access level to any application on your tenant.

> 🚧 
> 
> A valid SMTP configuration must be available to send email invites.

### Create a user with a temporary password

If the Budibase tenant does not readily available valid SMTP email settings, the fallback behaviour is to create a new user and output temporary credentials.

[block:image]
{
  "images": [
    {
      "image": [
        "https://files.readme.io/9a7767e-nosmtp.png",
        null,
        "Adding a user with a temporary password"
      ],
      "align": "center",
      "sizing": "300px",
      "caption": "Adding a user with a temporary password"
    }
  ]
}
[/block]


Keep a note of the credentials and relay them to your new user. They will be prompted to change them upon first login.