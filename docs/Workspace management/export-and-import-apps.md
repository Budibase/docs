---
title: Export and import workspaces
excerpt: >-
  Methods for moving an application or backing up the design and data of an
  application
deprecated: false
hidden: false
metadata:
  title: ''
  description: kba_5hmv6
  robots: index
next:
  description: ''
---
You can use the methods below to move a Budibase workspace from one Budibase installation to another or back up your workspace app and data. Admins and Developers can export any app as a JSON blob text file.

The exported file will include all [Budibase DB](doc:budibasedb) data, data connector configurations, query configs, and builder data for all your screens.

> ⚠️ Security
>
> When exporting a production workspace, be vigilant about whom you share the workspace export files with.  
> Are you confident you won't leak database credentials, user identity information, authentication keys, or other sensitive information?
>
> We also recommend that you make use of the password-based app export encryption.

## Export a workspace

1. To export a workspace, first select the workspace you wish to export from the workspace dropdown.

<Image align="center" border={false} src="https://files.readme.io/116718b0d553d1dd4ca450c6b68d4536478185b9782e26ee72fd4c8c7d2735e2-Screenshot_2026-02-09_at_14.48.50.png" />

2. Next click on **Settings** at the bottom left of your screen.

   <Image align="center" border={false} src="https://files.readme.io/4d60219260719c3c3d6386277bbf937be94126a086210ce47c0da73025e554a0-Screenshot_2026-02-09_at_14.50.01.png" />
3. Click on **General**

   <Image align="center" border={false} src="https://files.readme.io/f91294f6b6c7ec7f481cdffc7e2f89744e044688ca172453e6e83b15471edb67-Screenshot_2026-02-09_at_14.51.08.png" />
4. Scroll down to where it says **Export** section

   <Image align="center" border={false} src="https://files.readme.io/505e744e2a12ce0f07ae64fa0d468393e2a57e20f05cd02f5b7136d4a279e89a-Screenshot_2026-02-09_at_14.53.23.png" />

This will bring up a few options to choose from:

* **Export latest edited** will export the development version of your app, including any changes since your last publish
* **Export latest published** will export only the last published version of your workspace

After choosing an export option, you will be given the option to _Export rows from internal tables_. This will include or exclude all the data rows from your internal [Budibase DB](doc:budibasedb)  tables in the export; however, data source **configuration and credentials will still be exported**.

<Image align="center" border={false} src="https://files.readme.io/1129a3f732b109d75a92a100879edd9b7084e079adad86f02f8800b6294a02f4-Screenshot_2024-10-24_at_16.13.08.png" />

<br />

In addition to that, you'll be presented with the option _Encrypt my export_ which will allow you to add a password to encrypt your export:

<Image align="center" border={false} width="450px" src="https://files.readme.io/371a3b3db5041098d5de42776c27c8934462e404598d136d85b4d1013bdbe006-Screenshot_2025-08-20_at_12.48.46.png" />

> 💡 Environment variables
>
> By using [Environment variables 🔗](doc:environment-variables), you can exclude secrets and datasource credentials from your workspace exports.

## Import a workspace

You can create a workspace by importing a workspace export file.

Within the workspace picker, you should see a + symbol to the right. Click this, and it will prompt you to either Import or create a new workspace.

<Image align="center" border={false} src="https://files.readme.io/34a34246b85b92ba496e9629004c9c845740b5e0673a64ff1de3f92d0e20a724-Screenshot_2026-02-09_at_14.56.49.png" />

If you click the import button, the UI will change slightly. This will change the modal window so you can drag the workspace export file and click **Create workspace** to finish.

<Image align="center" border={false} src="https://files.readme.io/ad13bae143414ba60aecaa5a04d19732cd68848aa7ea18283c94331eee0f7c0b-Screenshot_2026-02-09_at_14.58.27.png" />

> 💡 Backups
>
> [Workspace backups 🔗](doc:backups-1) can be imported like you would import a manual export.
>
> The benefit of using backups is that they will automatically be created when publishing your app.

## Import into an existing workspace

You can import a workspace export into an existing workspace by going to **Settings > General > Import**. This is useful if you want to update the design of an existing app or add new functionality without affecting your existing data.

<Image align="center" border={false} src="https://files.readme.io/ef9690b32c948fc45a022bd3ab6342f65eaa66f85e71c2bb23bb0711d06b50ad-Screenshot_2025-08-20_at_12.52.50.png" />

When importing into an existing workspace:
* **Existing data is preserved**: Tables and rows that already exist in your workspace will not be overwritten or deleted.
* **New tables and rows are added**: Any new tables included in the export will be created, and their associated row data will be imported.
* **Users and roles are protected**: The internal Users table and existing roles are preserved to ensure your user management remains intact.