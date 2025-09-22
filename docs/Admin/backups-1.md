---
title: Backups 🔒
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
Budibase provides options for backing up, as well as restoring your applications.

## Unlocking backups

If you are on a free tier of Budibase, you will be presented with the following screen in the backups section

![](https://files.readme.io/87b5d85-image.png)

You can click [Upgrade](doc:usage) to unlock Backups or click `View Plans` to navigate to the [pricing page](https://www.budibase.com/pricing) to see the full range of options in more detail.

## Creating a backup

With the feature enabled, you will be presented with the oppurtunity to create your first backup. 

<Image width="300px" src="https://files.readme.io/77327bc-image.png" />

Clicking the `Create Backup` button will then present the following modal where you can name your backup and create it. 

<Image width="300px" src="https://files.readme.io/9971644-image.png" />

> 📘 A backup will also be created every time you publish an application

## Managing your backups

![](https://files.readme.io/6fe05d4-image.png)

After creating your backup, you are presented with the above table, where you can see specific details about your backups, as well as manage them. The `types`column specifies what your backup actually is

> 📘 Backup Types
>
> * *All* - Every backup type
> * *Publish* - A backup that is created whenever your app is published
> * *Pre-restore* - A backup that is created whenever you restore from an existing backup
> * *Manual Restore* - This is a type that denotes when a backup was restored, no operations can be performed this. It is purely informational.

### Creating a backup

<Image width="200px" src="https://files.readme.io/3871936-image.png" />

Clicking the button located above the table will take you through the Create new backup flow, documented [above](https://docs.budibase.com/docs/backups-1#creating-a-backup). 

### Filtering

There are multiple ways for you to filter your backups

You can sort this table by the `type` of the backup:

<Image width="250px" src="https://files.readme.io/c5ffe28-image.png" />

You can also filter by range, this will allow you to select backups from between two particular dates:

<Image width="300px" src="https://files.readme.io/6fbd1e4-image.png" />

> 📘
>
> You can also filter by a combination of both. If using both, the filter will be done first on type `type` of backup, and then by the Date Range.

## Restoring your application from a backup

To restore your application from a previously created backup, simply click the three dots for the backup you want to bring up the actions menu, and then click `Restore`

<Image width="250px" src="https://files.readme.io/bea0128-image.png" />

This will then bring up two modals, the first of which is a confirmation of what you are about to restore. 

<Image width="300px" src="https://files.readme.io/7c01d71-image.png" />

The second modal will prompt you to create a backup based on the state of you application right before you click restore. This means you will have something to restore back to if necessary.

<Image width="300px" src="https://files.readme.io/f7b6a4a-image.png" />

## Other actions

As shown above, opening the actions menu for a particular backup, will provide you with other options:

* *Delete* - Deletes the selected backup
* *Download* - Downloads a copy of that backup to your local machine. You can then use the [Import App](https://docs.budibase.com/docs/export-and-import-apps#import-app) functionality to create a new app from this backup
* *Update* - Updates the name of the backup.
