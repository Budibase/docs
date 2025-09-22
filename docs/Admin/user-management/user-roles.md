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
At a high level, a user can have access to the [Portal](doc:portal) as an **Admin**, or simply be a **Member**, i.e. an <<glossary:End User>> of authorised apps.

Additional fine-tuning of permissions can be achieved through the [Creator role](https://docs.budibase.com/docs/application-access#creators-) which allows a user to be a <<glossary:Builder>> of some apps, and be restricted to an <<glossary:End User>> for others.

## Access permission

There are three levels of user role permissions within Budibase:

- Workspace Admin - Has full access to all apps and settings in your account
- Creator - Can create and edit apps they have access to
- App User - Can only use published apps they have access to

[block:image]
{
  "images": [
    {
      "image": [
        "https://files.readme.io/0968500e50db2283bc22f147001a330966a3b8de2edefe3664b112cfdc181a59-Screenshot_2025-04-17_at_10.44.09_AM.png",
        "",
        "Admin users can add new users"
      ],
      "align": "center",
      "caption": "Admin users can add new users"
    }
  ]
}
[/block]


> 📘 Publish your application to give users access.
> 
> App Users are only be able to view published applications.
> 
> The Workspace Admin role allows the user to manage users and global settings.

## Changing permissions

A **Workspace Admin** user can edit user permissions within the [Portal](doc:portal), by clicking on the `Users` tab.

[block:image]
{
  "images": [
    {
      "image": [
        "https://files.readme.io/7637d3f41e9e48bfbe12d4129106ca4be1416f1ccad72d1a4a25bbe8bbfbc3db-Screenshot_2024-08-29_at_10.00.20.png",
        "",
        ""
      ],
      "align": "center"
    }
  ]
}
[/block]


Click on the user you want to change, and then set the _Role_.

[block:image]
{
  "images": [
    {
      "image": [
        "https://files.readme.io/107d36bd2acb3c1e267810b8cca65473a800c2fceae81c5776fff887a0c570f0-Screenshot_2025-04-17_at_10.46.49_AM.png",
        "",
        ""
      ],
      "align": "center"
    }
  ]
}
[/block]


You can close the screen once you're happy with the change in your access. The permissions save automatically.

## App specific roles

All users in your app without `Workspace Admin` permission will only see applications you give them access to. But not only can you configure which applications each user can see, you can also configure their role in each application.

There are several roles to choose from, which impact what the user can do and see in your application based on the roles you've defined for each section inside your application.  
<a href="https://docs.budibase.com/docs/screens#access-level">Access levels</a> can be set for your each of your screens.

Higher-tier roles will be able to see everything lower tiers can see, plus their own role-specific elements. This means an `Admin` role can see all the pages built for Power, Basic, and Public roles.

| Order | Role     | Description                                         |
| :---- | :------- | :-------------------------------------------------- |
| 1     | Public   | Can see un-authenticated. Cannot be given to a user |
| 2     | App user | Lowest authenticated role                           |
| 3     | Admin    | Highest authenticated role                          |

> 📘 Order matters!
> 
> The order of user role matters. Higher roles can see everything from lower roles as well as their own.

### Adding custom roles

The core app roles cannot be deleted, however you can add and remove any number of custom roles if you need more granular access control. 

Within your app, navigate to the [Users table](https://docs.budibase.com/docs/users-table) and click on _Edit roles_.

![](https://files.readme.io/5591bd9-Screenshot_2022-10-13_at_08.43.00.png)

A modal will pop up to enter data into. Select _Create new role_.

![](https://files.readme.io/034350a-Screenshot_2022-10-13_at_11.22.30.png)

**Inherits Role** determines the rank of your new role. In this case, a _Super_ user will be able to access all screens of access level Super, Power, Basic and Public, but will not be able to access Admin app screens.

**Base Permissions** determines the permissions of the role. Options include:

| Order | Role     | Description                                                                                                                                                                                                     |
| :---- | :------- | :-------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| 1     | Public   | <ul> <li>Unauthenticated or general users</li> <li>No permissions; cannot access non-public sources or screens</li> </ul>                                                                                       |
| 2     | App user | <ul> <li>Regular authenticated users</li> <li>Can interact with provided content/features</li> </ul>                                                                                                            |
| 3     | Admin    | <ul> <li>Highest-level non-builder users</li> <li>Inherits all lower-role access; can manage users and view all screens</li> </ul>                                                                              |
| 4     | Creator  | <ul> <li>App builders and developer</li> <li>Full admin rights plus builder access; can create and manage apps</li> <li>Perform [admin functions](https://docs.budibase.com/docs/portal#admin-portal)</li></ul> |