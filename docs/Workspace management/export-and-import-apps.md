---
title: Export and import workspaces
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
You can use the methods below to move a Budibase workspace from one Budibase installation to another or back up your workspace app and data. Admins and Developers can export any app as a JSON blob text file.

The exported file will include all [Budibase DB](doc:budibasedb) data, data connector configurations, query configs, and builder data for all your screens.  

> 🚧 Security
>
> When exporting a production workspace, be vigilant about whom you share the workspace export files with.\
> Are you confident you won't leak database credentials, user identity information, authentication keys, or other sensitive information?
>
> We also recommend that you make use of the password-based app export encryption.

## Export a workspace

To export a workspace from the Workspace dashboard with just a few clicks, select the three dots next to the app that you'd like to export:

<Image align="center" src="https://files.readme.io/e531bd69b187a5f5b9742980cda14d78479c7446b8635ebab6317cca38f2056d-Screenshot_2025-08-20_at_12.45.38.png" />

This will bring up a few options to choose from: 

* **Duplicate** will create a copy of your workspace
* **Export latest edited** will export the development version of your app, including any changes since your last publish
* **Export latest published** will export only the last published version of your workspace
* **Delete** will delete your workspace

<br />

After choosing an export option, you will be given the option to *Export rows from internal tables*. This will include or exclude all the data rows from your internal [Budibase DB](doc:budibasedb)  tables in the export; however, data source **configuration and credentials will still be exported**.

<Image align="center" src="https://files.readme.io/1129a3f732b109d75a92a100879edd9b7084e079adad86f02f8800b6294a02f4-Screenshot_2024-10-24_at_16.13.08.png" />

<br />

In addition to that, you'll be presented with the option *Encrypt my export* which will allow you to add a password to encrypt your export:

<Image align="center" width="450px" src="https://files.readme.io/371a3b3db5041098d5de42776c27c8934462e404598d136d85b4d1013bdbe006-Screenshot_2025-08-20_at_12.48.46.png" />

Alternatively, you can click on the app you'd like to export, navigate to the **Settings** section, select General, and scroll down to export, and you should be able to export your workspace form here as well, whilst inside it.

<Image align="center" src="https://files.readme.io/5049aa8202f5e43cb7dbf58558991437593ee43d39e34eaad046c40f45fccbc5-Screenshot_2025-08-20_at_12.49.06.png" />

<br />

> 👍 Environment variables
>
> By using [Environment variables 🔒](doc:environment-variables), you can exclude secrets and datasource credentials from your workspace exports.

## Import a workspace

You can create a workspace by importing a workspace export file.

Within the *Apps* screen, click the **Create new workspace** button. From here, click on the **Import workspace** button:

<Image align="center" src="https://files.readme.io/ad90712a293df0311aefa38dac2cb94d9fd3cc63bbceaa85fe1a9a518308be26-Screenshot_2025-08-20_at_12.51.35.png" />

This will present a modal window into which you can drag the app export file and click **Import workspace** to finish.

<Image align="center" src="https://files.readme.io/b9e039f3d04cdd4ec6452c43bde964b1144b0570e70ae17636dbd1075aa02654-Screenshot_2025-08-20_at_12.51.58.png" />

> 👍 Backups
>
> [Workspace backups 🔒](doc:backups-1) can be imported like you would import a manual export.
>
> The benefit of using backups is that they will automatically be created when publishing your app.

## Import a workspace and retain your users table

If you need to retain your users and data tables, but override your screens and automations, you can import your screens and datasources within your workspace settings.

<Image align="center" src="https://files.readme.io/ef9690b32c948fc45a022bd3ab6342f65eaa66f85e71c2bb23bb0711d06b50ad-Screenshot_2025-08-20_at_12.52.50.png" />
