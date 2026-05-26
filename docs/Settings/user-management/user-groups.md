---
title: User groups 🔒
excerpt: ''
deprecated: false
hidden: false
metadata:
  title: ''
  description: kba_5hmki
  robots: index
next:
  description: ''
---
User groups allow an **Account Admin** to easily assign and manage users' access to apps.

## Unlocking user groups

If you are using the free tier, you will see the following under the User groups section:

The section is shown as locked, with options to upgrade your plan or view available plans.

You can click [Upgrade](doc:usage) to unlock User groups or click `View Plans` to navigate to the [pricing page](https://www.budibase.com/pricing) to see the full range of options in more detail.

<br />

## Creating a user group

A searchable table of user groups can be found under the _Manage_ section of the [Portal](doc:portal).

In this view you get a quick summary of the number of users and apps in each user group.

To add a user group, click on `Add group`.

This will pop-up a modal from which you can enter a team name, as well as select an icon and colour.

You can also mark the group as **Default**. When a default group is configured, new users are automatically assigned to it if no group is selected during invite or creation.

Next you will be brought to screen where you can [Add user](https://docs.budibase.com/docs/user-groups#adding-a-user-to-a-group) and [Add app](https://docs.budibase.com/docs/user-groups#adding-apps-to-a-user-group) for your new group. When finished, the back button will take you back to the table of user groups.

If you want to change the team name, icon or colour, this can be done through the context menu in the top right corner. The user group can also be deleted if you decide you no longer need it.

## Default group behavior

Budibase supports a single default user group per tenant.

You can set or remove a group's default status from:

1. The create group modal.
2. The edit group modal.
3. The group details page.

If you set a new default group, Budibase automatically removes the default flag from the previous default group.

If you delete the current default group, new users will no longer be auto-assigned to a group until another default group is configured.

> 📘
>
> If one or more groups are explicitly selected during invite or create, those selected groups are used and the default-group fallback is not applied.

<br />

## Adding a user to a group

When you click `Add user` you will be presented with a searchable list of all the user email addresses. For your convenience, when you select a user it will float to the top of the dropdown, which itself will remain expanded so you can easily click through and add multiple users. When done simply click and empty part of the page.

To remove users, click the entries with the blue tick to unselect them.

Alternatively, you can add a user to a group from the users' detail page, which you can access by clicking on a user within the users list of the group. Alternatively you can select `Users` under the _Manage_ section of the portal, and then click on a user from the users table.

Here you will be able to see the user groups the selected user belongs to:

The user details page includes a dedicated list of current groups.

To remove access to a group click the `X` beside the group.

To add this user to another group, click `Add to user group`. This will provide a convenient searchable dropdown for selecting and unselecting user groups.

<br />

## Adding workspaces to a user group

From the builder, open your workspace and click on the settings navigation link. Then users

This will open up a side panel from which you can add groups or individual users by setting their permission-level for that app.

<br />

## Individual roles and group roles

If a user has access to an app, but is also a member of a user group, then the highest permission available will be given.

For example, consider this app:

A user might receive one role directly and a higher role from their group.

Harold is a member of the Super group which has _Power_ access to this app. However he is also an _Admin_ user of this app. Therefore the highest role is chosen, and he will have _Admin_ access.

On the other hand, consider the case where Harold has _Basic_ permissions for the app.

Because Harold is a member of the Super group, he will be given _Power_ permissions.

<br />

## User groups limit

Some plans have a limit on the number of available user groups, for example the **Pro plan** offers five user groups. As you approach your limit, you should receive a warning email similar to the following:

Budibase will show a warning and can also send a notification email as you approach your plan limit.

You may need to [upgrade](doc:usage) your plan, or delete unused user groups.