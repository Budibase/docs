---
title: Export and import projects
excerpt: >-
  Methods for moving a Budibase Project packages between installations or backing up a group of related resources.
deprecated: false
hidden: false
metadata:
  title: ''
  description: 'Learn how to package and move Budibase projects.'
  robots: index
next:
  description: ''
---

You can package a Budibase Project to move it between Budibase installations or to create a portable backup. Unlike single app exports, Project exports include all member resources such as apps, automations, queries, and internal tables as a single cohesive unit.

Project exports are generated as `.tar.gz` files (or `.enc.tar.gz` if encrypted). The package includes a manifest and a dependency index to ensure resources are remapped correctly when imported into a destination workspace.

> 🔐 Security
>
> Project exports exclude sensitive credentials such as database passwords and API keys. You will need to reconfigure these secrets after importing a project into a new workspace. 
>
> We recommend using password-based encryption for Project exports to protect your configuration data during transit.

## Export a project

1. Select the **Projects** tab in your Budibase portal.
2. Locate the project you wish to export and click the **Settings** or **...** menu.
3. Choose **Export project**.

This will present a few options:

* **Encrypt export**: Toggle this to provide a password. The exported file will be encrypted and will require this password to be imported elsewhere.
* **Password**: If encryption is enabled, enter a secure password.

Once confirmed, Budibase will stream the package to your browser as a download.

## Import a project

Importing a project allows you to additively populate a workspace with existing resources. This process creates new IDs for the imported resources to avoid conflicts with existing data.

1. Enter the destination workspace where you want to add the project.
2. Click the **+** (Plus) button or the **Import** option within the workspace management area.
3. Select **Import Project**.
4. Drag and drop your `.tar.gz` or `.enc.tar.gz` file into the modal.
5. If the package was encrypted, provide the required **Encryption Password**.
6. Click **Import**.

Budibase will process the package, remap dependencies, and create the project along with its member apps and configurations. 

### Post-import requirements

After a project successfully imports, you may see a list of **Requirements**. These typically involve:
* **Datasource secrets**: Re-entering passwords for data connections.
* **Agent secrets**: Re-authenticating AI agent integrations (e.g., Slack or MS Teams tokens).
* **Automation review**: Newly imported automations are disabled by default and should be reviewed before enabling.