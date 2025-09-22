---
title: Export and Import Apps
excerpt: Methods for moving an App or backing up the design and data of an App
deprecated: false
hidden: false
metadata:
  title: ''
  description: ''
  robots: noindex
next:
  description: ''
---
Use the methods below to move a Budibase App from one Budibase installation to another, or to backup the design and data in your App. Admins and Developers can export any app as a JSON blob text file.

The exported file will include all [Budibase DB](doc:budibasedb) data, data connector configurations, query configs and builder data for all your screens.  

> ❗️ Security
> 
> If it is a production app, be vigilant about whom you share the app export files with.  
> Are you confident you won't be leaking database credentials, user identity information, authentication keys, or any other sensitive information?

## Export an App

To export an app, click on the **Manage** button in the app list

![](https://files.readme.io/587b492-Screenshot_2022-06-14_at_15.56.56.png "Screenshot 2022-06-14 at 15.56.56.png")

This will bring you to the overview screen. From here you can expand the ellipsis and choose:

- **Export latest** will export the development version of your app including any changes since your last publish
- **Export published** will export only the last published version of your app

![](https://files.readme.io/49a7010-Screenshot_2022-10-13_at_10.03.02.png)

After choosing an export option you will be given the choice for _Exclude Rows_. This will exclude all the data rows from your internal [Budibase DB](doc:budibasedb)  tables in the export, however datasource **configuration and credentials will still be exported**.

![](https://files.readme.io/1d92916-Screenshot_2022-10-13_at_10.21.43.png)

## Import app

You can create an app by importing an app export file.

Within the _Apps_ screen, click the **Create new app** button. From here, click on the **Import app** button:

![](https://files.readme.io/129750f-Screenshot_2022-06-14_at_16.03.04.png "Screenshot 2022-06-14 at 16.03.04.png")

This will present a modal, into which you can drag the app export file, and click **Import app** to finish.

![](https://files.readme.io/9144850-Screenshot_2022-06-14_at_16.04.33.png "Screenshot 2022-06-14 at 16.04.33.png")