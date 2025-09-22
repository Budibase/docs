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
User groups allow an **admin** to easily assign and manage users' access to apps.

## Unlocking user groups

If you are using the free tier, you will see the following under the User groups section:

![](https://files.readme.io/3db9982-Screenshot_2022-10-20_at_16.33.41.png)

You can click [Upgrade](doc:usage) to unlock User groups or click `View Plans` to navigate to the [pricing page](https://www.budibase.com/pricing) to see the full range of options in more detail.

<br />

## Creating a user group

A searchable table of user groups can be found under the *Manage* section of the [Portal](doc:portal).

![](https://files.readme.io/e037c72-Screenshot_2022-10-20_at_15.32.00.png)

In this view you get a quick summary of the number of users and apps in each user group.

To add a user group, click on `Create user group`.

This will pop-up a modal from which you can enter a team name, as well as select an icon and colour.

![](https://files.readme.io/175ff8b-Screenshot_2022-10-20_at_15.33.51.png)

Next you will be brought to screen where you can [Add user](https://docs.budibase.com/docs/user-groups#adding-a-user-to-a-group) and [Add app](https://docs.budibase.com/docs/user-groups#adding-apps-to-a-user-group) for your new group. When finished, the back button will take you back to the table of user groups.

![](https://files.readme.io/8eb7541-Screenshot_2022-10-20_at_15.37.26.png)

If you want to change the team name, icon or colour, this can be done through the context menu in the top right corner. The user group can also be deleted if you decide you no longer need it.

![](https://files.readme.io/58ca828-Screenshot_2022-10-20_at_15.38.15.png)

<br />

## Adding a user to a group

When you click `Add user` you will be presented with a searchable list of all the user email addresses. For your convenience, when you select a user it will float to the top of the dropdown, which itself will remain expanded so you can easily click through and add multiple users. When done simply click and empty part of the page.

![](https://files.readme.io/eafbdbf-Screenshot_2022-10-20_at_15.48.53.png)

To remove users, click the entries with the blue tick to unselect them.

Alternatively, you can add a user to a group from the users' detail page, which you can access by clicking on a user within the users list of the group. Alternatively you can select `Users` under the *Manage* section of the portal, and then click on a user from the users table.

Here you will be able to see the user groups the selected user belongs to:

![](https://files.readme.io/97dfa13-Screenshot_2022-10-20_at_15.56.56.png)

To remove access to a group click the `X` beside the group. 

To add this user to another group, click `Add to user group`. This will provide a convenient searchable dropdown for selecting and unselecting user groups.

![](https://files.readme.io/327e498-Screenshot_2022-10-20_at_15.58.51.png)

<br />

## Adding apps to a user group

When you click `Add app` a dialog wizard will appear. First select an app to grant this group access to:

![](https://files.readme.io/c983876-Screenshot_2022-10-20_at_16.04.26.png)

Click `Next`. Now select an [App role](https://docs.budibase.com/docs/user-roles#app-specific-roles). All users in the group will have the selected app role for the chosen app. Click `Confirm` to finish.

![](https://files.readme.io/53e17c9-Screenshot_2022-10-20_at_16.08.26.png)

 App permissions can be removed by clicking the `X` beside the app in the user group page.

![](https://files.readme.io/33f9dd1-Screenshot_2022-10-20_at_16.09.51.png)

<br />

## Individual roles and group roles

If a user has access to an app, but is also a member of a user group, then the highest permission available will be given.

For example, consider this app:

![](https://files.readme.io/36b7420-Screenshot_2022-10-20_at_16.22.09.png)

Harold is a member of the Super group which has *Power* access to this app. However he is also an *Admin* user of this app. Therefore the highest role is chosen, and he will have *Admin* access.

On the other hand, consider the case where Harold has *Basic* permissions for the app.

![](https://files.readme.io/9e33a8e-Screenshot_2022-10-20_at_16.25.42.png)

Because Harold is a member of the Super group, he will be given *Power* permissions. 

<br />

## User groups limit

Some plans have a limit on the number of available user groups, for example the **Pro plan** offers five user groups. As you approach your limit, you should receive a warning email similar to the following:

<Image alt="Email notification" src="https://files.readme.io/d2a8ed2-Screenshot_2022-10-20_at_16.49.41.png">
  Email notification
</Image>

You may need to [upgrade](doc:usage) your plan, or delete unused user groups.
