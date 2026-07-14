---
title: SCIM provisioning 🔒
excerpt: Manage users and groups externally
deprecated: false
hidden: false
metadata:
  title: ''
  description: kba_5hmiq
  robots: index
next:
  description: ''
---
SCIM (System for Cross-domain Identity Management) lets you manage users and groups in an external identity provider and sync them into Budibase.

Common providers include *Azure Active Directory* and *Okta*.

SCIM provisioning is one way. Once it is enabled, synced users and groups are managed in your identity provider, not in Budibase.

You can still manually add or import users outside your organization. Those users remain fully configurable in Budibase.

## Unlocking SCIM provisioning

Contact sales to upgrade to the enterprise plan: [https://budibase.com/contact/](https://budibase.com/contact/)

## Enable SCIM

Log in to the Budibase portal, then open `Settings` and `Auth`.

<Image align="center" src="https://files.readme.io/44a9a9db5f559e8869f52173a040090efbe546573559ca79d382ad11568e6817-Screenshot_2024-09-09_at_13.55.16.png" />

Scroll to the bottom of the page and turn on *Activated* under SCIM. The provisioning *URL* and *Token* then appear with copy buttons.

<Image align="center" src="https://files.readme.io/1242196-settings_auth_scim.png" />

> 👍 Enforced SSO
>
> When using SCIM, users can only log in to Budibase using [SSO](doc:authentication-and-sso). We recommend that you [Enforce SSO 🔒](doc:enforced-sso).

***

## Example: Azure Active Directory

This example provisions Azure Active Directory users and groups into Budibase.

### Step 1 - Create an enterprise application

First, create an enterprise application in Azure Active Directory for the users and groups you want to provision.

Log in to Azure Active Directory and open `Enterprise applications`.

Click `New application`.

<Image align="center" src="https://files.readme.io/490a35324402396291773e97bbe1759ffdfc2f2e51eb6eb94797725d4ed03713-Screenshot_2025-01-31_at_15.27.21.png" />

Then click `Create your own application`. A side panel appears on the right-hand side of the screen.

<Image alt="Create new application" align="center" src="https://files.readme.io/d17ae6eedb5f0c10512876f5b0eba229336275671d411b7a8f00258b4cbe18c5-create_your_own_application.png">
  Create new application
</Image>

Select the *(Non-gallery)* option and give the app a name.

<Image align="center" src="https://files.readme.io/7db5c5403f6ffd05c6df1ad3bae330591e769c56f400aca7b001ef354f6a6003-Screenshot_2025-01-13_at_14.05.21.webp" />

If you already have users in Active Directory, add them to the enterprise application.

Open your application, then select `Users and groups` under *Manage*. Click `Add user/group` to add individual users or groups.

<Image align="center" src="https://files.readme.io/0debe66ff28ffea535b2a93a8f36907ef3833660f20c8bda538221241d15c1f4-Screenshot_2025-01-24_at_14.19.58.webp" />

### Step 2 - Provisioning

Under *Manage*, open `Provisioning` and click `Connect your application`.

<Image align="center" src="https://files.readme.io/323d41d0a5af817706b995d8c7a7a6ecf6d1309b41412a4a8dfd997f2432700f-Screenshot_2025-01-31_at_14.56.01.png" />

Copy the URL and Token from the Budibase settings page into the admin credentials fields.

<Image align="center" src="https://files.readme.io/cb73d271933fc3b8732d4f6618b4c9fb3b3ac364879aff38ba9193209512e31f-Screenshot_2025-01-13_at_14.08.00.webp" />

Click `Test Connection` to verify the setup. When the connection succeeds, the `Create` button becomes active. Click `Create`.

You are then redirected to the Provisioning overview. Click `Start provisioning` to sync users and groups into Budibase.

<Image align="center" src="https://files.readme.io/d3a3f27-start_provisioning.png" />

The Budibase portal now shows the synced users under the `Users` tab.

<Image align="center" src="https://files.readme.io/0d45176a39fea58c48f469879516726ef883e1263d4e0b6325e4d5361c108b53-image_copy.png" />

This section also shows that the users are being synced from Active Directory.

If you provide first and last names for your Azure users, those values are also synced. Other settings such as [User roles](doc:user-roles) and [App roles](https://docs.budibase.com/docs/user-roles#app-specific-roles) must still be set in Budibase.

<Image align="center" src="https://files.readme.io/45086bb-first_and_lastnames.png" />

<Image align="center" src="https://files.readme.io/2bd32d87ae9d6b83ee360cfc8343de67311924547ce2bbf52a50a5e8f2847058-image.webp" />

### Step 3 - Setup SSO and give app access

Finally, make sure provisioned users can log in to Budibase by following the [SSO with Azure AD](doc:sso-with-azure-ad) guide.

Also make sure the users and groups have [Application access](doc:application-access).

<Image alt="Giving Carol basic app access" align="center" width="640px" src="https://files.readme.io/b449fc0-carol_app_access.png">
  Giving Carol basic app access
</Image>

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
