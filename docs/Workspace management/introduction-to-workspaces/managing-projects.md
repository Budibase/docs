---
title: Managing projects
excerpt: 'Learn how to organize your workspace using Projects.'
deprecated: false
hidden: false
metadata:
  title: ''
  description: ''
  robots: index
---
Projects provide an organizational layer within your Budibase workspace, allowing you to group together relevant Apps, Automations, and Agents. This helps in managing different environments, departments, or specific application suites within a single workspace.

## Creating a project

You can create a new project directly from the Workspace Home:

1. Click the **Project actions** icon (stack with a plus) next to the project tabs.
2. Select **Create project**.
3. Enter a **Name**, optional **Description**, and choose a **Color** to identify your project.
4. Click **Create**.

Once created, the project will appear as a tab on your Workspace Home.

## Assigning resources to projects

Resources like Apps, Automations, and Agents can be assigned to one or more projects.

### During creation
If you are currently viewing a specific project tab when you create a new resource, that resource will be automatically assigned to the active project.

### Existing resources
To change or add project assignments for an existing resource:

1. Locate the resource in the Workspace Home table.
2. Right-click on the resource row to open the context menu.
3. Select **Assign project**.
4. In the modal, select the projects you want to associate with this resource.
5. Click **Save**.

## Exporting and importing projects

Projects can be exported as portable packages, allowing you to move entire groups of resources between workspaces.

### Exporting a project

1. Click the **Project actions** icon in the project tabs area.
2. Select **Export project**.
3. Choose the project you wish to export.
4. (Optional) Enable **Encrypt export** and provide a password for added security.
5. Click **Export**. The project will be downloaded as a compressed file.

> [!NOTE]
> Project exports include resource definitions but currently do not include individual data row records or sensitive credentials.

### Importing a project

1. Click the **Project actions** icon in the project tabs area.
2. Select **Import project**.
3. Upload your project export file.
4. If the export was encrypted, enter the password.
5. Click **Import**. Budibase will add the new project and all included resource definitions to your workspace.

## Deleting a project

Deleting a project removes the grouping but does not delete the resources themselves.

1. Select the project tab you wish to delete.
2. Click the **Project actions** icon.
3. Select **Delete selected project**.
4. Confirm the deletion in the dialog. The associated Apps, Automations, and Agents will remain in your workspace but will no longer be associated with that project.