---
title: Export and import apps
excerpt: >-
  Methods for moving an application or backing up the design and data of an
  application
deprecated: false
hidden: false
metadata:
  title: ''
  description: ''
  robots: index
next:
  description: ''
---
Use the methods below to move a Budibase App from one Budibase installation to another, or to backup the design and data in your App. Admins and Developers can export any app as a JSON blob text file.

The exported file will include all [Budibase DB](doc:budibasedb) data, data connector configurations, query configs and builder data for all your screens.  

> 🚧 Security
> 
> When exporting a production app, be vigilant about whom you share the app export files with.  
> Are you confident you won't be leaking database credentials, user identity information, authentication keys, or any other sensitive information?
> 
> We also recommend that you make use of the password based app export encryption.

## Export an application

To export an app, click on the **Manage** button in the app list

![](https://files.readme.io/587b492-Screenshot_2022-06-14_at_15.56.56.png "Screenshot 2022-06-14 at 15.56.56.png")

This will bring you to the overview screen. From here you can expand the ellipsis and choose:

- **Export latest** will export the development version of your app including any changes since your last publish
- **Export published** will export only the last published version of your app

![](https://files.readme.io/49a7010-Screenshot_2022-10-13_at_10.03.02.png)

After choosing an export option you will be given the choice for _Exclude Rows_. This will exclude all the data rows from your internal [Budibase DB](doc:budibasedb)  tables in the export, however datasource **configuration and credentials will still be exported**.

[block:image]
{
  "images": [
    {
      "image": [
        "https://files.readme.io/3e47bbe-Screenshot_2023-09-22_at_13.39.55.png",
        null,
        ""
      ],
      "align": "center"
    }
  ]
}
[/block]


> 👍 Environment variables
> 
> By using [Environment variables 🔒](doc:environment-variables), you can exclude secrets and datasource credentials from your app exports.

## Import an application

You can create an app by importing an app export file.

Within the _Apps_ screen, click the **Create new app** button. From here, click on the **Import app** button:

![](https://files.readme.io/129750f-Screenshot_2022-06-14_at_16.03.04.png "Screenshot 2022-06-14 at 16.03.04.png")

This will present a modal, into which you can drag the app export file, and click **Import app** to finish.

![](https://files.readme.io/9144850-Screenshot_2022-06-14_at_16.04.33.png "Screenshot 2022-06-14 at 16.04.33.png")

> 👍 Backups
> 
> [App backups 🔒](doc:backups-1) can be imported in the same way you would import a manual export.
> 
> The benefit of using backups is that they will automatically be created when publishing your app.

## Import an application and retain your users table

If you need to retain your users and data tables, but override your screens and automations, you can import your screens and datasources within your application settings.



[block:image]
{
  "images": [
    {
      "image": [
        "https://files.readme.io/7e5ab9a-Screenshot_2023-09-27_at_12.21.16.png",
        "",
        ""
      ],
      "align": "center"
    }
  ]
}
[/block]