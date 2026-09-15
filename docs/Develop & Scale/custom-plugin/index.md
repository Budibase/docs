---
title: Custom plugins
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
Custom plugins extend Budibase when the built-in component and datasource options are not enough.

Use them to add:

* Custom components
* Custom datasources
* Custom automation steps

## When to use plugins

Use a plugin when you need:

* A UI component that is not built into Budibase
* A datasource integration with custom CRUD behaviour
* A custom automation action for backend logic

Keep the plugin surface area as small as possible. Plugins are easier to maintain when they do one thing well.

## Install plugins

Admin users can import plugins from the Settings modal.

Supported import sources include:

* URL
* NPM package
* GitHub release asset
* File upload

After import, custom components appear in the builder component list and custom datasources appear in the datasource picker.

Custom automation steps appear in the automation builder as selectable actions.

## Develop locally

For local development, Budibase needs a watched plugins directory.

Use one of these setups:

* Budibase CLI
* Docker Compose
* A local Budibase repository

In each case, point Budibase at your plugins folder, then run `yarn watch` in the plugin project so changes are picked up automatically.

The CLI path is usually the simplest option for plugin development because it gives you a local Budibase instance and a watched plugin folder in one flow.

## Limits and hosting

* Custom datasources are self-host only
* Custom components can also be used in cloud environments
* Free plans have a plugin limit

Check the pricing page if you need more than the free tier allows.

When you are developing locally, make sure the plugin directory path stays stable. Budibase watches that path for updates.

## Update and delete plugins

To update a plugin, import a new version with the same name.

To delete a plugin, select it from the plugin list and remove it from the settings UI.

## Plugin types

Keep the plugin type aligned to the problem you are solving:

* Use a component plugin for UI building blocks
* Use a datasource plugin for CRUD access to external systems
* Use an automation step plugin for backend actions

If the use case can be handled by a built-in component or action, prefer that first.

## Related guides

* [Custom component](https://docs.budibase.com/docs/custom-component)
* [Custom datasource](https://docs.budibase.com/docs/custom-datasource)
* [Custom automation step](https://docs.budibase.com/docs/custom-automations)
* [Budibase CLI setup](https://docs.budibase.com/docs/budibase-cli-setup)
