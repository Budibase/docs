---
title: Custom datasource
excerpt: Write a custom datasource integration
deprecated: false
hidden: false
metadata:
  title: ''
  description: ''
  robots: index
next:
  description: ''
---
Custom datasource plugins let you connect Budibase to external systems through read, create, update, and delete operations.

Use them when your app needs data from a source that is not already covered by a built-in connector.

## Before you start

Make sure you have:

* The latest [Budibase CLI](https://docs.budibase.com/docs/budibase-cli-setup)
* Node.js `v16` or later
* A self-hosted Budibase installation

Datasource plugins are not available in Budibase Cloud.

## Create the plugin

1. Go to the folder where you want to create the plugin.
2. Run:

```shell
budi plugins --init datasource
```

3. Complete the setup prompts.
4. Open the generated project in your editor.

The template includes:

* `src/datasource.ts` for the datasource implementation
* `test/index.spec.ts` for template tests
* `schema.json` for builder configuration
* `package.json` for package metadata and dependencies

## Build and watch

Build the project with:

```shell
cd my-datasource
yarn build
```

During development, run `yarn watch` so Budibase picks up code changes without rebuilding manually.

If you change `schema.json`, refresh the app builder to pick up the updated schema.

## Implement the datasource

`datasource.ts` is where the connector logic lives.

Use it to:

* Define the required CRUD methods
* Share request logic through a helper method such as `request`
* Add any provider-specific headers, auth, or request shaping

The template includes four CRUD methods. Match the method signatures in the datasource schema so the builder can call them correctly.

The default template is a basic HTTP connector. You can replace that logic with the client or SDK for your target system as long as the datasource methods still return the expected shapes.

## Configure the schema

`schema.json` defines:

* Builder settings
* Required credentials
* Query inputs and outputs
* The methods exposed by the plugin

Start with the datasource schema docs, then add only the fields your connector actually needs.

Keep the schema narrow:

* Put connection details in `datasource`
* Put action-specific inputs in the relevant query definitions
* Use `fields` only when you need explicit builder inputs

The schema also controls the friendly name shown in the builder and the documentation link that appears with the plugin.

## Add an icon

Add an `icon.svg` file at the root of the project if you want a custom icon in the Budibase builder.

## Testing

`test/index.spec.ts` includes template tests for each CRUD method.

Use those tests to verify:

* Requests are shaped correctly
* Responses are handled consistently
* Error cases fail in a predictable way

When you add a custom method beyond the default CRUD set, add a matching test for that method too.

## Example implementation

The n8n connector example in this section shows the same pattern used by many datasource plugins:

* initialize the plugin
* add the required schema fields
* implement the datasource methods
* add any extra custom operations the API supports

Use that example as a guide for how to add connection fields, shape queries, and expose extra operations such as workflow activation.

## Development notes

* Datasource plugins are data centric
* They are only available in self-hosted Budibase
* `yarn watch` is required while iterating locally
* Rebuild after changing project structure or dependencies

## Related guides

* [Datasource schema](/docs/custom-datasource-schema)
* [Budibase CLI setup](https://docs.budibase.com/docs/budibase-cli-setup)
* [Custom plugin overview](https://docs.budibase.com/docs/custom-plugin)
