---
title: Adding users
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
To invite new users into Budibase, you need an admin-level role. See [User roles](doc:user-roles) for role requirements.

## Where to invite users

User invites are managed from a workspace.

1. Open the workspace in the Builder.
2. Click **Invite user** in the left sidebar.
3. Enter one or more email addresses.
4. Select a tenant-level role.
5. Choose an onboarding method.
6. Click **Invite users**.

For full workspace access behavior, see [Workspace access](doc:workspace-access).

## Choosing roles when inviting

During invite, you can assign one of these roles:

* **Organisation admin**: Full admin access across workspaces and settings.
* **Creator**: Builder access for assigned workspaces.
* **End user**: No builder access. Can use published apps only.

If you select **End user**, you can also choose the default app role for that user in the target workspace, such as **Basic user**, **Admin user**, or a custom app role.

## Onboarding options

You can choose one of two onboarding methods:

* **Send email invites**: Sends an invite email so users can set their own password.
* **Generate passwords for each user**: Creates temporary credentials for you to share manually.

If SMTP is configured, email onboarding is recommended. If SMTP is unavailable, use generated passwords.

> 🚧 Configure SMTP
>
> For emails to be sent from Budibase you will need to have [SMTP configured](doc:email). Make sure this is set up before attempting to invite users through the email onboarding flow.

## Import users

If you need to add many users, you can bulk import by CSV.

1. Open **Portal** > **Settings** > **People** > **Organisation**.
2. Click **Import users**.
3. Upload a CSV containing one email per line.
4. Select the role to apply to imported users.
5. Complete import and securely share any generated temporary credentials.

> 📘 User emails CSV format
>
> The format for the CSV file should just be the emails for the users on their own separated by line break. No columns or commas are necessary.
>
> ```Text users.csv
> andy@example.com
> conor@example.com
> joe@example.com
> mel@example.com
> ```
