---
title: Managing projects
excerpt: Organise related resources, document them with notes, and move them between workspaces
deprecated: false
hidden: false
metadata:
  title: ''
  description: ''
  robots: index
next:
  description: ''
---

Projects organise related work within a workspace. Use them to group resources for a team, initiative, customer, or application suite, then filter the Workspace Home to focus on that work.

Projects are available on self-hosted Budibase. They do not replace workspaces: a workspace remains the boundary for its members, settings, and shared resources.

## Create a project

1. From **Workspace Home**, select the **+** button beside the project tabs.
2. Select **Create new project**.
3. Enter a name. You can also add a description and choose a colour.
4. Select **Create**.

The new project appears as a tab on Workspace Home. Select the tab to show resources assigned to it.

## Add notes to a project

Project notes are a Markdown document for context that helps people understand the project, such as its purpose, setup steps, ownership, or conventions.

1. Select the project tab.
2. Select **Read project notes**.
3. Select **Add project notes** (or **Edit notes** for existing notes).
4. Enter the notes in Markdown, then select **Save**.

People with Builder permissions can add and edit project notes. Anyone who can view the project can read saved notes.

## Assign resources

You can assign an app, automation, agent, data source, or table to one or more projects. When you assign a resource, Budibase identifies dependencies that must also be assigned and lets you include them.

To assign an existing resource:

1. Open **Workspace Home** and locate the resource.
2. Open the resource's actions menu and select **Assign projects**.
3. Select one or more projects.
4. Review any dependent resources and confirm the assignment.

Resources created while a project tab is selected are assigned to that project automatically.

## Remove a resource from a project

Removing a resource from a project unassigns it without deleting it from the workspace.

1. Select the project tab on **Workspace Home**.
2. Open the resource's actions menu and select **Remove from project**.
3. Select **Remove** to confirm.

The resource remains available in the workspace and any other projects.

## Export a project

Export a project when you want to reuse it in another workspace. A project package contains the project and its assigned resources, plus the dependencies Budibase needs to make those resources work together.

1. Select the project tab.
2. Open the project's actions menu and select **Export project**.
3. Confirm the project to export.
4. Optional: enable **Include rows and attachments** to include rows from the project's Budibase DB tables and their referenced attachments.
5. Optional: enable **Encrypt export** and enter a password.
6. Select **Export** to download the package.

Project packages do not include data-source credentials. They also exclude agent files and RAG data, agent chats and deployments, agent integration secrets, and email-trigger credentials. If you encrypt a package that includes attachments, the attachments are not encrypted.

## Import a project

Importing always creates a new project in the current workspace. It adds supported resources from the package; it does not replace existing apps, automations, or other resources.

1. From **Workspace Home**, select the **+** button beside the project tabs.
2. Select **Import project**.
3. Choose one project export package.
4. If the package is encrypted, enter its password.
5. Select **Import**.

After import, Budibase shows any setup work that remains. Reconfigure data-source credentials, choose the agent AI configuration, reconnect email triggers, and add any required agent integration secrets before using the imported resources.

## Delete a project

1. Select the project tab.
2. Open the project's actions menu and select **Delete project**.
3. Confirm the deletion.

Deleting a project removes its grouping only. It does not delete the resources that were assigned to it.
