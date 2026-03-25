---
title: Introduction to apps
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
Budibase Apps are end-user tools that can interact with any data or automations within a Workspace.

These are managed within the Apps page of each individual Workspace.

## Creating a new App

To add a new App to our Workspace, we can hit `New App`, before selecting a `Name` and `URL` extension.

This then takes us to the App Builder, where we can start designing screens. Take a look at our [App Building 101](https://docs.budibase.com/v3.3.0/docs/app-building-101) guide to learn more.

By default, new Apps are not deployed live. We’ll see how to set Apps live below, under Setting Apps live.

## Editing Apps

To edit an existing app, we can either click on its row or hit `Edit` within its settings menu. Again, this will bring us to the Budibase Builder, where we can make changes.

## Setting Apps live

In order for end-users to access our Apps, they must be set `Live` within a published Workspace.

We can publish a Workspace under its `General Settings` menu.

Individual Apps can be set live or stopped using the deployment control in the Budibase Builder.

We can also do this from the Apps screen, using the `Set live` / `Stop` option for each App.

| Where | Action | Result |
| :---- | :----- | :----- |
| Workspace `General Settings` | Publish workspace | Changes become deployable to end users |
| App Builder toolbar/panel | `Set live` | App is deployed and available to users |
| App Builder toolbar/panel | `Stop` | App is no longer deployed |
| Apps list row menu | `Set live` / `Stop` | Same deployment action from the list view |

## Filtering Workspace Apps

By default, the Apps screen displays all Apps within our Workspace. However, we can use the filtering tabs at the top left of our Apps list to only display apps with a `Live`, `Stopped`, or `Not Deployed` status.

| Status | Meaning |
| :----- | :------ |
| `Live` | The app is currently deployed and accessible to end users |
| `Stopped` | The app has been deployed before, but is currently stopped |
| `Not Deployed` | The app has not yet been deployed live |
