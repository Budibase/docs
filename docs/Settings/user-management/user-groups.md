---
title: User groups 🔒
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
User groups allow an **Account Admin** to easily assign and manage users' access to apps.

## Unlocking user groups

If you are using the free tier, you will see the following under the User groups section:

<Image align="center" border={false} src="https://files.readme.io/5b20e6a5ea2fa3d2494b59fc36265c851e7901e78f4baaa1ed38b31c118f1e34-Screenshot_2025-09-29_at_14.07.20.png" />

You can click [Upgrade](doc:usage) to unlock User groups or click `View Plans` to navigate to the [pricing page](https://www.budibase.com/pricing) to see the full range of options in more detail.

<br />

## Creating a user group

A searchable table of user groups can be found under the _Manage_ section of the [Portal](doc:portal).

<Image align="center" border={false} src="https://files.readme.io/f5c1b61dcd8bb90368bad90216a00c15d49df53dfabd8a4390cc74d213be248a-Screenshot_2024-09-09_at_11.16.32.png" />

In this view you get a quick summary of the number of users and apps in each user group.

To add a user group, click on `Add group`.

This will pop-up a modal from which you can enter a team name, as well as select an icon and colour.

You can also mark the group as **Default**. When a default group is configured, new users are automatically assigned to it if no group is selected during invite or creation.

<Image align="center" border={false} src="https://files.readme.io/4b32798623711bcca22687b4a5a1ea4d87636152bbbffe171b6bb3bd94f921f5-Screenshot_2024-09-09_at_11.17.51.png" />

Next you will be brought to screen where you can [Add user](https://docs.budibase.com/docs/user-groups#adding-a-user-to-a-group) and [Add app](https://docs.budibase.com/docs/user-groups#adding-apps-to-a-user-group) for your new group. When finished, the back button will take you back to the table of user groups.

<Image align="center" border={false} src="https://files.readme.io/4eeeb37f8b4335a4d56059acfc4a4e9dc62c12cd6672c43ea2d3da61dd0b59a9-Screenshot_2024-09-09_at_12.13.42.png" />

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

<Image align="center" border={false} src="https://files.readme.io/d23e0b58e2bd0b28e680b2f5e180f83e57f4b99ddccc02e6e5265148c968e66f-Screenshot_2024-09-09_at_12.14.47.png" />

<br />

## Adding a user to a group

When you click `Add user` you will be presented with a searchable list of all the user email addresses. For your convenience, when you select a user it will float to the top of the dropdown, which itself will remain expanded so you can easily click through and add multiple users. When done simply click and empty part of the page.

<Image align="center" border={false} src="https://files.readme.io/c7138f63d9970564ef5880b7b4f678a6ad48ea3d24585b17dabc72223f864009-Screenshot_2024-09-09_at_12.15.31.png" />

To remove users, click the entries with the blue tick to unselect them.

Alternatively, you can add a user to a group from the users' detail page, which you can access by clicking on a user within the users list of the group. Alternatively you can select `Users` under the _Manage_ section of the portal, and then click on a user from the users table.

Here you will be able to see the user groups the selected user belongs to:

<Image border={false} src="https://files.readme.io/97dfa13-Screenshot_2022-10-20_at_15.56.56.png" />

To remove access to a group click the `X` beside the group.

To add this user to another group, click `Add to user group`. This will provide a convenient searchable dropdown for selecting and unselecting user groups.

<Image align="center" border={false} src="https://files.readme.io/d84f1c357af48988db013a716d16cf4be7ac8f5f295336b8219a3c0ea625856d-Screenshot_2024-09-09_at_12.59.23.png" />

<br />

## Adding workspaces to a user group

From the builder, open your workspace and click on the settings navigation link. Then users

<Image align="center" border={false} src="https://files.readme.io/d11ad62c12929ee59d2b2aa2d68f2c1ed9c8079cdabd179054c099793e186c4b-Screenshot_2025-09-29_at_13.38.21.png" />

This will open up a side panel from which you can add groups or individual users by setting their permission-level for that app.

<Image align="center" border={false} src="https://files.readme.io/13d76c0f3c81d7132265756370a10ba08b187e11b0ad8b9df533e8ef7e0fbe39-Screenshot_2024-09-09_at_13.16.18.png" />

<br />

## Individual roles and group roles

If a user has access to an app, but is also a member of a user group, then the highest permission available will be given.

For example, consider this app:

<Image border={false} src="https://files.readme.io/36b7420-Screenshot_2022-10-20_at_16.22.09.png" />

Harold is a member of the Super group which has _Power_ access to this app. However he is also an _Admin_ user of this app. Therefore the highest role is chosen, and he will have _Admin_ access.

On the other hand, consider the case where Harold has _Basic_ permissions for the app.

<Image border={false} src="https://files.readme.io/9e33a8e-Screenshot_2022-10-20_at_16.25.42.png" />

Because Harold is a member of the Super group, he will be given _Power_ permissions.

<br />

## User groups limit

Some plans have a limit on the number of available user groups, for example the **Pro plan** offers five user groups. As you approach your limit, you should receive a warning email similar to the following:

<Image align="center" alt="Email notification" border={false} caption="Email notification" src="https://files.readme.io/d2a8ed2-Screenshot_2022-10-20_at_16.49.41.png" />

You may need to [upgrade](doc:usage) your plan, or delete unused user groups.
