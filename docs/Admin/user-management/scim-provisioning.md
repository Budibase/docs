---
title: SCIM provisioning 🔒
excerpt: Manage users and groups externally
deprecated: false
hidden: false
metadata:
  title: ''
  description: ''
  robots: index
next:
  description: ''
---
SCIM (System for Cross-domain Identity Management) is an open standard for managing user identity information. 

It allows you to manage your users and groups outside of Budibase using any Identity and Access Management service that supports SCIM. Examples include _Azure Active Directory_ and _Okta_. 

Changes to users and groups made in your external IAM can be synced across to Budibase users and groups through a process known as **provisioning**.

It is worth noting that this is a one-way process. When SCIM is enabled, you will no longer be able to edit users and groups within Budibase; you can only make changes via your external service.

## Unlocking SCIM provisioning

Contact sales to enquire about upgrading to the enterprise plan <https://budibase.com/contact/>

## Enable SCIM

Login to the Budibase portal, and click on the `Settings` tab. Select the `Auth` tab. 

[block:image]
{
  "images": [
    {
      "image": [
        "https://files.readme.io/44a9a9db5f559e8869f52173a040090efbe546573559ca79d382ad11568e6817-Screenshot_2024-09-09_at_13.55.16.png",
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

## Example: Azure Active Directory

This example will look at provisioning active directory users from Azure into Budibase

### Step 1 - Create an enterprise application

First, we need to create an Enterprise application to manage the users and groups that we want to provision for Budibase.

Log in to Azure Active Directory, and Navigate to `Enterprise applications`.

Click on `New application`

[block:image]
{
  "images": [
    {
      "image": [
        "https://files.readme.io/490a35324402396291773e97bbe1759ffdfc2f2e51eb6eb94797725d4ed03713-Screenshot_2025-01-31_at_15.27.21.png",
        "",
        ""
      ],
      "align": "center"
    }
  ]
}
[/block]


Then click on `Create your own application`. A side panel should appear on the right hand side of your screen.

[block:image]
{
  "images": [
    {
      "image": [
        "https://files.readme.io/d17ae6eedb5f0c10512876f5b0eba229336275671d411b7a8f00258b4cbe18c5-create_your_own_application.png",
        null,
        "Create new application"
      ],
      "align": "center",
      "caption": "Create new application"
    }
  ]
}
[/block]


Select the _(Non-gallery)_ option and give your app a name.

[block:image]
{
  "images": [
    {
      "image": [
        "https://files.readme.io/7db5c5403f6ffd05c6df1ad3bae330591e769c56f400aca7b001ef354f6a6003-Screenshot_2025-01-13_at_14.05.21.webp",
        null,
        ""
      ],
      "align": "center"
    }
  ]
}
[/block]


Assuming you already have some users in your active directory, you can now add them to your enterprise application.

Click on your application, and then click `Users and groups` under the _Manage_ section. You can then click on `Add user/group` to add users individually or as user groups.

[block:image]
{
  "images": [
    {
      "image": [
        "https://files.readme.io/0debe66ff28ffea535b2a93a8f36907ef3833660f20c8bda538221241d15c1f4-Screenshot_2025-01-24_at_14.19.58.webp",
        null,
        ""
      ],
      "align": "center"
    }
  ]
}
[/block]


### Step 2 - Provisioning

Under the _Manage_ section, click on `Provisioning`. Then click `Connect your application`.

[block:image]
{
  "images": [
    {
      "image": [
        "https://files.readme.io/323d41d0a5af817706b995d8c7a7a6ecf6d1309b41412a4a8dfd997f2432700f-Screenshot_2025-01-31_at_14.56.01.png",
        "",
        ""
      ],
      "align": "center"
    }
  ]
}
[/block]


Copy and paste the URL and Token from the Budibase settings page as the admin credentials.

[block:image]
{
  "images": [
    {
      "image": [
        "https://files.readme.io/cb73d271933fc3b8732d4f6618b4c9fb3b3ac364879aff38ba9193209512e31f-Screenshot_2025-01-13_at_14.08.00.webp",
        null,
        ""
      ],
      "align": "center"
    }
  ]
}
[/block]


Click `Test Connection` to verify everything is correct. If all the information is correct, a notification will appear saying the connection was successful. The Create button at the bottom of this page will change from grayed out to blue when you successfully test the Budibase connection. Click the `Create` button.

You will then be redirected to the Overview area for Provisioning. You can now click `Start provisioning` to sync your users and groups from your Azure enterprise app into Budibase.

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


The Budibase portal now shows the users who have synced under the `Users` tab.

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


### Step 3 - Setup SSO and give app access

Finally, we need to ensure that provisioned users can log in to Budibase. In this case, you can follow the [SSO with Azure AD](doc:sso-with-azure-ad) guide.

Furthermore, make sure you have given your users and groups [Application access](doc:application-access).

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


## Managing SCIM

### Initial SCIM Sync Activation

#### What happens when a SCIM sync is activated for the first time?

- User Matching
  - Existing Budibase users are matched with SCIM users by email.
  - Matched users are marked as externally synced and managed externally thereafter.
- Group Matching:
  - Existing groups are matched by name.
  - Groups with matching names (e.g., “engineering”) are taken over as externally synced.
- User Assignment in Synced Groups:
  - Existing assigned users will be wiped out
  - SCIM specified users will be mapped to the group.

### Managing SCIM Users

#### How to manage SCIM users?

- Identifying Synced Users:
  - Synced users are marked with a sync logo in the Budibase builder.
  - Certain fields will be read-only for synced users.
- Fields for Synced Users:
  - Read-Only Fields: Email, name, and surname (managed via external SCIM datasource).
  - Editable Fields: Role and other non-synced fields can be edited in Budibase.
- Non-SCIM Users:
  - Users created manually or not matched with SCIM are fully editable in Budibase.

### Managing SCIM Groups

### How to manage SCIM groups?

- Identifying Synced Groups:
  - Synced groups are marked with a sync logo in the Budibase builder.
  - Some fields will be read-only for synced groups.
- Editable Fields for Synced Groups:
  - Read-Only Fields: Group name (managed via SCIM).
  - Editable Fields: Icons and other non-synced fields can be edited in Budibase.
- Non-SCIM Groups:
  - Groups created manually or not matched with SCIM are fully managed in Budibase.