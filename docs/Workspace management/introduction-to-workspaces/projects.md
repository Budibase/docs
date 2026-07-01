---
title: Projects
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

Projects provide a powerful way to organize your resources within a <Glossary>Workspace</Glossary>. They act as a logical grouping layer, allowing you to categorize and management related applications, automations, and data sources collectively.

## What are Projects?

A project is a collection of resources that serve a common purpose or business function. By assigning resources to a project, you can simplify navigation and improve the structure of complex workspaces.

### Supporting resources

You can assign multiple projects to almost any Budibase resource, including:

* **Apps**: Group related user interfaces.
* **Automations**: Categorize backend workflows by their function.
* **Agents**: Organize AI agents that belong to specific projects.
* **Data Sources**: Logical grouping of external connections and their underlying tables.
* **Queries**: Keep your data access logic organized.

## Creating and Managing Projects

Projects are defined by a name, an optional description, and a color which helps in visually identifying related resources across the Budibase builder.

### How it works

1. **Resource Assignment**
   Each resource can be assigned to one or more projects. This metadata is preserved when resources are moved or updated.

2. **Integrated Dependency Management**
   When you export or duplicate a project, Budibase automatically identifies all members of that project and their transitive dependencies (e.g., the data sources and queries used by an app in that project). This ensures that related logic is moved together seamlessly.

3. **Deletions and Cleanup**
   Deleting a project does not delete the resources within it. Instead, Budibase safely removes the project reference from all assigned resources, ensuring your data and workflows remain intact while maintaining a clean organization structure.