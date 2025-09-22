---
title: SCIM provisioning 🔒
excerpt: Manage users and groups externally
deprecated: false
hidden: false
metadata:
  title: ''
  description: ''
  robots: noindex
next:
  description: ''
---
SCIM (System for Cross-domain Identity Management) is an open standard for managing user identity information. 

It allows you to manage your users and groups outside of Budibase using any Identity and Access Management service that supports SCIM. Examples include _Azure Active Directory_ and _Okta_. 

Changes to users and groups made in your external IAM can be synced across to Budibase users and groups through a process known as **provisioning**.

It is worth noting that this is a one way process. When SCIM is enabled, you will no longer be able to edit users and groups within Budibase; it will only be possible to make changes via your external service.

## Unlocking SCIM provisioning

Contact sales to enquire about upgrading to the enterprise plan <https://budibase.com/contact/>

## Enable SCIM

Login to the Budibase portal, and click on the `Settings` tab. Select the `Auth` tab. 

[block:image]
{
  "images": [
    {
      "image": [
        "https://files.readme.io/968a122-settings_auth.png",
        null,
        ""
      ],
      "align": "center"
    }
  ]
}
[/block]

Scroll to the bottom of the page, and under SCIM toggle _Activated_ on. The provisioning _URL_ and _Token_ will become available to quickly copy using the clipboard buttons to the right of the fields.  

[block:image]
{
  "images": [
    {
      "image": [
        "https://files.readme.io/1242196-settings_auth_scim.png",
        null,
        ""
      ],
      "align": "center"
    }
  ]
}
[/block]

> 👍 Enforced SSO
> 
> When using SCIM, users can only log-in to Budibase using [SSO](doc:authentication-and-sso). With this in mind, we recommend that you [Enforce SSO 🔒](doc:enforced-sso).

***

<br />

## Example: Azure Active Directory

This example will look at provisioning active directory users from Azure into Budibase

<br />

### Step 1 - Create an enterprise application

First we need to create an **Enterprise application** to manage the users and groups that we want to provision for Budibase.

Log-in to Azure Active Directory, and click `Enterprise applications` under the _Manage_ section.

[block:image]
{
  "images": [
    {
      "image": [
        "https://files.readme.io/357bea8-manage_enterprise_app.png",
        null,
        ""
      ],
      "align": "center"
    }
  ]
}
[/block]

[block:image]
{
  "images": [
    {
      "image": [
        "https://files.readme.io/8e893a4-new_enterprise_app.png",
        null,
        "Create new application"
      ],
      "align": "center",
      "caption": "Create new application"
    }
  ]
}
[/block]

Click on `New application`, then click on `Create your own application`. Select the _(Non-gallery)_ option and give your app a name.

[block:image]
{
  "images": [
    {
      "image": [
        "https://files.readme.io/51453ab-create_your_own_app.png",
        null,
        ""
      ],
      "align": "center"
    }
  ]
}
[/block]

Assuming you already have some users in your active directory, you can now add them to your enterprise application.

Click on your application, and then click `Users and groups` under the _Manage_ section. You can then click on `Add user/group` to add users individually or user groups.

[block:image]
{
  "images": [
    {
      "image": [
        "https://files.readme.io/ef06744-ent_app_users.png",
        null,
        ""
      ],
      "align": "center"
    }
  ]
}
[/block]

<br />

### Step 2 - Provisioning

Under the _Manage_ section click on `Provisioning`. Next select 'Automatic' under _Provisioning Mode_. Copy and paste the _URL_ and _Token_ from the Budibase settings page as the admin credentials.

[block:image]
{
  "images": [
    {
      "image": [
        "https://files.readme.io/55eba2c-automatic_provisioning.png",
        null,
        ""
      ],
      "align": "center"
    }
  ]
}
[/block]

Click `Test Connection` to verify everything is correct, and make sure to click the `Save` button at the top.

You can now click `Start provisioning` to sync your users and groups from your Azure enterprise app into Budibase.

[block:image]
{
  "images": [
    {
      "image": [
        "https://files.readme.io/d3a3f27-start_provisioning.png",
        null,
        ""
      ],
      "align": "center"
    }
  ]
}
[/block]

Under the `Users` tab in the Budibase portal, you can now see the users that have synced across.

[block:image]
{
  "images": [
    {
      "image": [
        "https://files.readme.io/63e45d2-budibase_synced_users.png",
        null,
        ""
      ],
      "align": "center"
    }
  ]
}
[/block]

There is also a note in this section indicating that users are being synced from your AD.

If you provide a first and last name for your Azure users, this will also be passed through, however other settings such as [User roles](doc:user-roles) and [App roles](https://docs.budibase.com/docs/user-roles#app-specific-roles) must be set within Budibase.

[block:image]
{
  "images": [
    {
      "image": [
        "https://files.readme.io/45086bb-first_and_lastnames.png",
        null,
        ""
      ],
      "align": "center"
    }
  ]
}
[/block]

[block:image]
{
  "images": [
    {
      "image": [
        "https://files.readme.io/2ce8015-anna_payne_budibase.png",
        null,
        ""
      ],
      "align": "center"
    }
  ]
}
[/block]

<br />

### Step 3 - Setup SSO and give app access

Finally we need to make sure that provisioned users can log-in to Budibase. In this case you can follow the [SSO with Azure AD](doc:sso-with-azure-ad) guide.

Furthermore make sure you have given your users and groups [Application access](doc:application-access).

[block:image]
{
  "images": [
    {
      "image": [
        "https://files.readme.io/b449fc0-carol_app_access.png",
        null,
        "Giving Carol basic app access"
      ],
      "align": "center",
      "sizing": "640px",
      "caption": "Giving Carol basic app access"
    }
  ]
}
[/block]

[block:html]
{
  "html": "<div style=\"padding:49.77% 0 0 0;position:relative;\"><iframe src=\"https://player.vimeo.com/video/846757473?badge=0&amp;autopause=0&amp;player_id=0&amp;app_id=58479\" frameborder=\"0\" allow=\"autoplay; fullscreen; picture-in-picture\" allowfullscreen style=\"position:absolute;top:0;left:0;width:90%;height:100%;\" title=\"SCIM: User log-in with SSO\"></iframe></div><script src=\"https://player.vimeo.com/api/player.js\"></script>"
}
[/block]