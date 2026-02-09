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
> When exporting a production workspace, be vigilant about whom you share the workspace export files with.  
> Are you confident you won't leak database credentials, user identity information, authentication keys, or other sensitive information?
>
> We also recommend that you make use of the password-based app export encryption.

## Export a workspace

1. To export a workspace, first select the workspace you wish to export from the workspace dropdown.

<Image align="center" border={false} src="https://files.readme.io/116718b0d553d1dd4ca450c6b68d4536478185b9782e26ee72fd4c8c7d2735e2-Screenshot_2026-02-09_at_14.48.50.png" />

2. Next click on **Settings** at the bottom left of your screen.  

   <Image border={false} />
3. Click on **General**  

   <Image align="center" border={false} src="https://files.readme.io/f91294f6b6c7ec7f481cdffc7e2f89744e044688ca172453e6e83b15471edb67-Screenshot_2026-02-09_at_14.51.08.png" />
4. Scroll down to where it says **Export** section  

   <Image border={false} />

This will bring up a few options to choose from:

* **Export latest edited** will export the development version of your app, including any changes since your last publish
* **Export latest published** will export only the last published version of your workspace

After choosing an export option, you will be given the option to _Export rows from internal tables_. This will include or exclude all the data rows from your internal [Budibase DB](doc:budibasedb)  tables in the export; however, data source **configuration and credentials will still be exported**.

<Image align="center" border={false} src="https://files.readme.io/1129a3f732b109d75a92a100879edd9b7084e079adad86f02f8800b6294a02f4-Screenshot_2024-10-24_at_16.13.08.png" />

<br />

In addition to that, you'll be presented with the option _Encrypt my export_ which will allow you to add a password to encrypt your export:

<Image align="center" border={false} width="450px" src="https://files.readme.io/371a3b3db5041098d5de42776c27c8934462e404598d136d85b4d1013bdbe006-Screenshot_2025-08-20_at_12.48.46.png" />

Alternatively, you can click on the app you'd like to export, navigate to the **Settings** section, select General, and scroll down to export, and you should be able to export your workspace form here as well, whilst inside it.

<Image align="center" border={false} src="https://files.readme.io/5049aa8202f5e43cb7dbf58558991437593ee43d39e34eaad046c40f45fccbc5-Screenshot_2025-08-20_at_12.49.06.png" />

<br />

> 👍 Environment variables
>
> By using [Environment variables 🔒](doc:environment-variables), you can exclude secrets and datasource credentials from your workspace exports.

## Import a workspace

You can create a workspace by importing a workspace export file.

Within the _Apps_ screen, click the **Create new workspace** button. From here, click on the **Import workspace** button:

<Image align="center" border={false} src="https://files.readme.io/ad90712a293df0311aefa38dac2cb94d9fd3cc63bbceaa85fe1a9a518308be26-Screenshot_2025-08-20_at_12.51.35.png" />

This will present a modal window into which you can drag the app export file and click **Import workspace** to finish.

<Image align="center" border={false} src="https://files.readme.io/b9e039f3d04cdd4ec6452c43bde964b1144b0570e70ae17636dbd1075aa02654-Screenshot_2025-08-20_at_12.51.58.png" />

> 👍 Backups
>
> [Workspace backups 🔒](doc:backups-1) can be imported like you would import a manual export.
>
> The benefit of using backups is that they will automatically be created when publishing your app.

## Import a workspace and retain your users table

If you need to retain your users and data tables, but override your screens and automations, you can import your screens and datasources within your workspace settings.

<Image align="center" border={false} src="https://files.readme.io/ef9690b32c948fc45a022bd3ab6342f65eaa66f85e71c2bb23bb0711d06b50ad-Screenshot_2025-08-20_at_12.52.50.png" />
