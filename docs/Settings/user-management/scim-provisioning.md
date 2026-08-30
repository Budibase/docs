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
SCIM lets you manage users and groups in an external identity provider and sync them into Budibase.

It is designed for one-way provisioning:

* Budibase receives users and groups from your identity provider.
* Synced users and groups are then managed externally.
* Manual users and groups can still be created and edited in Budibase.

Common providers include Azure Active Directory and Okta.

## Access

SCIM provisioning is available on the enterprise plan.

Contact sales to upgrade: [budibase.com/contact](https://budibase.com/contact/)

## Enable SCIM

Open `Settings` > `Auth` in the Budibase portal.

Turn on `Activated` under the SCIM section.

When SCIM is enabled, Budibase shows:

* `Provisioning URL`
* `Provisioning Token`

Copy both values into your identity provider.

The provisioning URL uses the current platform URL and the SCIM endpoint:

```text
{platformUrl}/api/global/scim/v2
```

The provisioning token is the current user API key shown in the SCIM settings screen.

## SSO requirement

SCIM provisioning does not disable password-based sign-in on its own.

If you want to require SSO-only login, enable [Enforce SSO](doc:enforced-sso) separately.

## Disable SCIM

If SCIM is already enabled and you turn it off, Budibase asks what to do with existing SCIM-provisioned users.

You can choose between:

* Remove SCIM users
* Convert to regular users

Removing SCIM users deletes them permanently.

Converting them keeps the users in Budibase, but they are no longer synced with your identity provider.

## Manage synced users

Synced users are matched by email.

When a user is managed through SCIM:

* Their email, first name, and last name are read-only in Budibase.
* Other non-synced fields can still be edited.
* The user is marked as externally synced in the builder.

## Manage synced groups

Synced groups are matched by name.

When a group is managed through SCIM:

* The group name is read-only in Budibase.
* Non-synced fields can still be edited.
* The group is marked as externally synced in the builder.

## First sync

When SCIM is activated for the first time:

* Existing Budibase users are matched to SCIM users by email.
* Existing groups are matched by name.
* Members already assigned to matched groups are replaced by the SCIM-provisioned members.

## Azure Active Directory example

If you are using Azure AD, the provisioning flow is:

1. Create an enterprise application in Azure AD.
   <Image align="center" src="https://files.readme.io/490a35324402396291773e97bbe1759ffdfc2f2e51eb6eb94797725d4ed03713-Screenshot_2025-01-31_at_15.27.21.png" />
2. Add the users and groups you want to provision.
3. Open Azure provisioning settings and connect the application.
   <Image alt="Create new application" align="center" src="https://files.readme.io/d17ae6eedb5f0c10512876f5b0eba229336275671d411b7a8f00258b4cbe18c5-create_your_own_application.png">
     Create new application
   </Image>
4. Paste the Budibase provisioning URL and token into Azure.
   <Image align="center" src="https://files.readme.io/323d41d0a5af817706b995d8c7a7a6ecf6d1309b41412a4a8dfd997f2432700f-Screenshot_2025-01-31_at_14.56.01.png" />
   <Image align="center" src="https://files.readme.io/cb73d271933fc3b8732d4f6618b4c9fb3b3ac364879aff38ba9193209512e31f-Screenshot_2025-01-13_at_14.08.00.webp" />
5. Test the connection, create the provisioning setup, and start provisioning.
   <Image align="center" src="https://files.readme.io/d3a3f27-start_provisioning.png" />
6. Give the provisioned users app access in Budibase.

If you also need SSO, follow the [SSO with Azure AD](doc:sso-with-azure-ad) guide.

After provisioning, assign the required [user roles](doc:user-roles) and [application access](doc:application-access) in Budibase.
