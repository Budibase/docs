---
title: Dev / Prod switcher
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
# Understanding Dev and Prod Environments

In Budibase, you can switch between two different data environments: Dev (development) and Prod (production). This is a core experience that allows you to safely build and test data changes.

## What's the Difference?

The Dev environment is for building, testing, and experimenting with data, while the prod environment is the live, <<glossary:End User>> data.

## Dev Environment

This is your data sandbox. The Dev environment is where you can freely build, edit, and construct your data, automations and apps.

- **What it's for:** Configuring your schema, experimenting with data, and making changes that aren't ready to go live.
- **The data:** Any data (records) you see or edit in Dev is test data. It is not connected to your live users. This means you can't accidentally mess up or delete real user data while you're in this environment.

> ❗️ Editing/Deleting columns
> 
> If you edit/delete a column in Dev, then click publish, the column and its data within Prod will be updated/deleted.

## Prod Environment

> 📘 Access Prod environment
> 
> To access the Prod environment, your table must be published. It it is not published, the Publish switch will be disabled. To publish your table, you must publish your workspace by clicking the Publish button.

The Prod environment contains live data. Any changes you make here will be immediately live.

- **What it's for:** Making changes that need to go live immediately and viewing real-time data.
- **The data:** Any data you see or edit in Prod is real production data. Always be careful when making changes in this environment, as they will immediately go live.

## How to Switch Environments

Switching between Dev and Prod is simple. Look for the dev/prod switcher within the action bar. Select the environment you want to switch to. That's it!

[block:image]
{
  "images": [
    {
      "image": [
        "https://files.readme.io/8afcf4d5d5dd00a250710c95efb94e8ff3328f853d8c59d6163cd9302cc5ee69-CleanShot_2025-08-13_at_11.10.542x.png",
        "",
        ""
      ],
      "align": "center"
    }
  ]
}
[/block]


<br />

## Seed Prod table with data

You can seed prod tables with dev table data by clicking the arrow beside the workspace publish button and selecting “Seed and publish”.

[block:image]
{
  "images": [
    {
      "image": [
        "https://files.readme.io/ea733e87d932871bf171b6c475989f961bc7f2fa5a02a40c50cea3d9ad748f92-prod_publish.png",
        "",
        ""
      ],
      "align": "center"
    }
  ]
}
[/block]


<br />

<br />

## External data

The switcher is fully compatible with external tables that use environment variables. If you are using an external data source and you do not environment variables, you will not have access to the table's Dev environment.