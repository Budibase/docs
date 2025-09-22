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

It allows you to manage your users and groups outside of Budibase using any Identity and Access Management service that supports SCIM. Examples include *Azure Active Directory* and *Okta*. 

Changes to users and groups made in your external IAM can be synced across to Budibase users and groups through a process known as **provisioning**.

It is worth noting that this is a one way process. When SCIM is enabled, you will no longer be able to edit users and groups within Budibase; it will only be possible to make changes via your external service.

## Unlocking SCIM provisioning

Contact sales to enquire about upgrading to the enterprise plan [https://budibase.com/contact/](https://budibase.com/contact/)

## Enable SCIM

Login to the Budibase portal, and click on the `Settings` tab. Select the `Auth` tab. 

<Image align="center" src="https://files.readme.io/44a9a9db5f559e8869f52173a040090efbe546573559ca79d382ad11568e6817-Screenshot_2024-09-09_at_13.55.16.png" />

Scroll to the bottom of the page, and under SCIM toggle *Activated* on. The provisioning *URL* and *Token* will become available to quickly copy using the clipboard buttons to the right of the fields.  

<Image align="center" src="https://files.readme.io/1242196-settings_auth_scim.png" />

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

Log-in to Azure Active Directory, and click `Enterprise applications` under the *Manage* section.

<Image align="center" src="https://files.readme.io/357bea8-manage_enterprise_app.png" />

<Image alt="Create new application" align="center" src="https://files.readme.io/8e893a4-new_enterprise_app.png">
  Create new application
</Image>

Click on `New application`, then click on `Create your own application`. Select the *(Non-gallery)* option and give your app a name.

<Image align="center" src="https://files.readme.io/51453ab-create_your_own_app.png" />

Assuming you already have some users in your active directory, you can now add them to your enterprise application.

Click on your application, and then click `Users and groups` under the *Manage* section. You can then click on `Add user/group` to add users individually or user groups.

<Image align="center" src="https://files.readme.io/ef06744-ent_app_users.png" />

<br />

### Step 2 - Provisioning

Under the *Manage* section click on `Provisioning`. Next select 'Automatic' under *Provisioning Mode*. Copy and paste the *URL* and *Token* from the Budibase settings page as the admin credentials.

<Image align="center" src="https://files.readme.io/55eba2c-automatic_provisioning.png" />

Click `Test Connection` to verify everything is correct, and make sure to click the `Save` button at the top.

You can now click `Start provisioning` to sync your users and groups from your Azure enterprise app into Budibase.

<Image align="center" src="https://files.readme.io/d3a3f27-start_provisioning.png" />

Under the `Users` tab in the Budibase portal, you can now see the users that have synced across.

<Image align="center" src="https://files.readme.io/63e45d2-budibase_synced_users.png" />

There is also a note in this section indicating that users are being synced from your AD.

If you provide a first and last name for your Azure users, this will also be passed through, however other settings such as [User roles](doc:user-roles) and [App roles](https://docs.budibase.com/docs/user-roles#app-specific-roles) must be set within Budibase.

<Image align="center" src="https://files.readme.io/45086bb-first_and_lastnames.png" />

<Image align="center" src="https://files.readme.io/2ce8015-anna_payne_budibase.png" />

<br />

### Step 3 - Setup SSO and give app access

Finally we need to make sure that provisioned users can log-in to Budibase. In this case you can follow the [SSO with Azure AD](doc:sso-with-azure-ad) guide.

Furthermore make sure you have given your users and groups [Application access](doc:application-access).

<Image alt="Giving Carol basic app access" align="center" width="640px" src="https://files.readme.io/b449fc0-carol_app_access.png">
  Giving Carol basic app access
</Image>

<HTMLBlock>{`
<div style="padding:49.77% 0 0 0;position:relative;"><iframe src="https://player.vimeo.com/video/846757473?badge=0&amp;autopause=0&amp;player_id=0&amp;app_id=58479" frameborder="0" allow="autoplay; fullscreen; picture-in-picture" allowfullscreen style="position:absolute;top:0;left:0;width:90%;height:100%;" title="SCIM: User log-in with SSO"></iframe></div><script src="https://player.vimeo.com/api/player.js"></script>
`}</HTMLBlock>

## Managing SCIM

### Initial SCIM Sync Activation

#### What happens when a SCIM sync is activated for the first time?

* User Matching
  * Existing Budibase users are matched with SCIM users by email.
  * Matched users are marked as externally synced and managed externally thereafter.
* Group Matching:
  * Existing groups are matched by name.
  * Groups with matching names (e.g., “engineering”) are taken over as externally synced.
* User Assignment in Synced Groups:
  * Existing assigned users will be wiped out
  * SCIM specified users will be mapped to the group.

### Managing SCIM Users

#### How to manage SCIM users?

* Identifying Synced Users:
  * Synced users are marked with a sync logo in the Budibase builder.
  * Certain fields will be read-only for synced users.
* Fields for Synced Users:
  * Read-Only Fields: Email, name, and surname (managed via external SCIM datasource).
  * Editable Fields: Role and other non-synced fields can be edited in Budibase.
* Non-SCIM Users:
  * Users created manually or not matched with SCIM are fully editable in Budibase.

### Managing SCIM Groups

### How to manage SCIM groups?

* Identifying Synced Groups:
  * Synced groups are marked with a sync logo in the Budibase builder.
  * Some fields will be read-only for synced groups.
* Editable Fields for Synced Groups:
  * Read-Only Fields: Group name (managed via SCIM).
  * Editable Fields: Icons and other non-synced fields can be edited in Budibase.
* Non-SCIM Groups:
  * Groups created manually or not matched with SCIM are fully managed in Budibase.
