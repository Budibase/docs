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
At a high level, a user can have access to the [Portal](doc:portal) as an **Admin**, or simply be a **Member**, i.e. an <Glossary>End User</Glossary> of authorised apps.

Additional fine-tuning of permissions can be achieved through the [Creator role](https://docs.budibase.com/docs/application-access#creators-) which allows a user to be a <Glossary>Builder</Glossary> of some apps, and be restricted to an <Glossary>End User</Glossary> for others.

## Access permission

There are two levels of user role permissions within Budibase:

* Member
* Admin

<Image alt="Admin users can add new users" align="center" src="https://files.readme.io/14b7c64-Screenshot_2023-11-02_at_14.30.33.png">
  Admin users can add new users
</Image>

> 📘 Publish your application to give members access.
>
> Members are only be able to view published applications.
>
> Admin permission allows the user to manage users and global settings.

## Changing permissions

An **admin** user can edit user permissions within the [Portal](doc:portal), by clicking on the `Users` tab.

<Image align="center" src="https://files.readme.io/ce19e38-users.png" />

Click on the user you want to change, and then set the *Role*.

<Image align="center" src="https://files.readme.io/ee27311-Screenshot_2023-11-02_at_14.40.45.png" />

Once you're happy with your access change, you can close the screen. The permissions save automatically.

## App specific roles

All users in your app without `Admin` permission will only see applications you give them access to. But not only can you configure which applications each user can see, you can also configure their role in each application.

There are several roles to choose from, which impact what the user will be able to do and see in your application based on the roles you've defined for each section inside your application.\ <a href="https://docs.budibase.com/docs/screens#access-level">Access levels</a> can be set for your each of your screens.

Higher tier roles will be able to see everything lower tiers can see, plus their own role-specific elements. This means, an `Admin` role can see all the pages built for Power, Basic and Public roles.

| Order | Role   | Description                                            |
| :---- | :----- | :----------------------------------------------------- |
| 1     | Public | Can see un-authenticated. Cannot be given to a user    |
| 2     | Basic  | Lowest authenticated role                              |
| 3     | Power  | Has all permissions of Basic and Public, but not Admin |
| 4     | Admin  | Highest authenticated role                             |

> 📘 Order matters!
>
> The order of user role matters. Higher roles can see everything from lower roles as well as their own.

### Adding custom roles

The core app roles cannot be deleted, however you can add and remove any number of custom roles if you need more granular access control. 

Within your app, navigate to the [Users table](https://docs.budibase.com/docs/users-table) and click on *Edit roles*.

![](https://files.readme.io/5591bd9-Screenshot_2022-10-13_at_08.43.00.png)

A modal will pop up to enter data into. Select *Create new role*.

![](https://files.readme.io/034350a-Screenshot_2022-10-13_at_11.22.30.png)

**Inherits Role** determines the rank of your new role. In this case, a *Super* user will be able to access all screens of access level Super, Power, Basic and Public, but will not be able to access Admin app screens.

**Base Permissions** determines the read/write permissions of the role. Options include:

<Table align={["left","left","left"]}>
  <thead>
    <tr>
      <th>
        Order
      </th>

      <th>
        Role
      </th>

      <th>
        Description
      </th>
    </tr>
  </thead>

  <tbody>
    <tr>
      <td>
        1
      </td>

      <td>
        Public
      </td>

      <td>
        <ul> <li>No permissions</li> </ul>
      </td>
    </tr>

    <tr>
      <td>
        2
      </td>

      <td>
        Read Only
      </td>

      <td>
        <ul> <li>Read data from queries, tables and views</li> </ul>
      </td>
    </tr>

    <tr>
      <td>
        3
      </td>

      <td>
        Read/Write
      </td>

      <td>
        <ul> <li>Read</li> <li>Write to tables</li> <li>POST queries</li> <li>Trigger automations</li> </ul>
      </td>
    </tr>

    <tr>
      <td>
        4
      </td>

      <td>
        Power
      </td>

      <td>
        <ul> <li>Read/Write</li> <li>Read from the Users table</li> </ul>
      </td>
    </tr>

    <tr>
      <td>
        5
      </td>

      <td>
        Admin
      </td>

      <td>
        <ul> <li>Read/Write</li> <li>Perform [admin functions](https://docs.budibase.com/docs/portal#admin-portal)</li> </ul>
      </td>
    </tr>
  </tbody>
</Table>
