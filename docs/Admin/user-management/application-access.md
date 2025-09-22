---
title: Application Access
excerpt: ''
deprecated: false
hidden: false
metadata:
  title: ''
  description: ''
  robots: noindex
next:
  description: ''
---
**Developer** and **Admin** users can manage access to an application from within the application builder itself.\
To access user management in the builder, click on the **Users** button in the header:

![](https://files.readme.io/15e71a9-users_button_header.png)

## Who has access to my application?

The user management side-bar will display an overview of all the current users and groups in the system that have access to your application.

<Image align="left" width="300px" src="https://files.readme.io/21496a3-user_snapshot.png" />

> 📘
>
> By default, the first **50** app users with direct access will appear in the **Users** section. Below that, all members of the **Groups**(🔒) will then be listed. If you can't see a user in the list, use the search bar at the top.

### Admins and Developers

**Admin** and **Developer** users have global access to any application currently on a given tenant. They will always be listed here with**Admin** access and it cannot be changed:

<Image align="left" width="300px" src="https://files.readme.io/2f85813-admin.png" />

### App Users

App users only have access to published applications on which they been granted at least **Basic** access permission. You can update an app users access permissions at any time and, if necessary, **remove** their access entirely.

<Image align="left" width="300px" src="https://files.readme.io/a732324-app_user.png" />

If you remove an **App users** access in the user side-panel, the application will no longer be listed for them when they log in.

### Groups 🔒

> 📘
>
> User groups are a premium feature and you can find out more about them [here](doc:user-groups)

Any groups with access to your application will be displayed along with its total membership count. Updates to the group access level will be applied to all member users. Selecting the **remove** option in the access dropdown will remove the group from the application and thereby access by any users in it.

<Image align="left" width="300px" src="https://files.readme.io/3c3ccd4-groups.png" />

### Group User Access 🔒

Users who have been indirectly granted access to an application via membership of a **user group** will appear muted in the **Users** list. Clicking on the access dropdown will outline where they inherited their access from.

<Image align="left" width="300px" src="https://files.readme.io/4444d81-groupaccess.png" />

Even though the above user has been granted **Basic** access to the application by their group, you can apply an override that will apply only to that app user:

<Image align="left" width="300px" src="https://files.readme.io/dee9401-override.png" />

As you can see above, the user **[s.donagy@email.com](mailto:s.donagy@email.com)** was initially only granted **Basic** access to the application as a member of the **Press Team**. Now they have been upgraded to **Power** user.

Removing an App user access override will revert them to their group access level.

## Finding and Inviting Users

The access panel will display only users or groups who **currently** have access to your application. If you wish to add any new users or groups to the application you can use the search bar.

<Image align="left" width="300px" src="https://files.readme.io/19397d3-search.png" />

**Users** can be found by entering their **email address** and **Groups** can be found by entering their **name**.

### Inviting new users

If your user doesn't appear when searching the system, you will be presented with the option to invite them to your Budibase tenant.

<Image align="left" width="300px" src="https://files.readme.io/3a4f7e5-search_none.png" />

After clicking the **Add user** button, an email will be sent to the user presenting them with the ability to accept. Invites to Budibase will remain active for **7 days**, after which they will be deleted. Any invites currently open in the tenant will be listed at the top of the user side-panel in the builder:

<Image align="left" width="300px" src="https://files.readme.io/ee9c56f-invite_success.png" />

By default, Budibase will assign **Basic** access to the application through which they were invited. Budibase will not grant any others by default.

In the time before a user accepts their invitation, you still have the option to update their access level to any application on your tenant.

> 🚧
>
> Valid SMPT configuration must be available to allow the sending of email invites.

### Fallback onboarding

In the event that the Budibase tenant does not have valid SMTP email settings readily available, the fallback behaviour is to create a new user and output some temporary credentials.

<Image align="left" width="300px" src="https://files.readme.io/9a7767e-nosmtp.png" />

Keep a note of the credentials and relay them to your new users. They will be prompted to change them upon first logging in.
