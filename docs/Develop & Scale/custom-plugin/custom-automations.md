---
title: Custom automation step
excerpt: Write a custom automation action
deprecated: false
hidden: false
metadata:
  title: Custom automations
  description: ''
  robots: index
next:
  description: ''
---
Custom automation steps let you extend Budibase automations with your own backend logic.

Use them when you need an action that is not covered by the built-in automation steps.

## Before you start

Make sure you have:

* The latest [Budibase CLI](https://docs.budibase.com/docs/budibase-cli-setup)
* Node.js `v20` or later
* A self-hosted Budibase installation

Automation step plugins are not available in Budibase Cloud.

## Create the step

1. Go to the folder where you want to create the plugin.
2. Run:

```shell
budi plugins --init automation
```

3. Complete the setup prompts.
4. Open the generated project in your editor.

The template includes:

* `src/index.ts` for the entry point
* `src/automation.ts` for the step implementation
* `schema.json` for builder configuration
* `test/index.spec.ts` for template tests

## Build and watch

Build the project with:

```shell
cd budibase-automation
yarn build
```

During development, run `yarn watch` so changes are reflected in your local Budibase instance.

If you change `schema.json`, refresh the builder so the new action shape appears.

## Implement the step

`automation.ts` exports a single `run` function.

Use it to:

* Read inputs from prior automation steps
* Perform the required action
* Return the next output for the automation chain

Keep the action focused on one responsibility. If you need multiple behaviours, create separate steps.

The `run` function receives the automation context, step inputs, and an event emitter. Use those to read data, return outputs, or trigger downstream behaviour.

The template also includes a `stepId`. Keep that identifier stable once the step is in use, because changing it can break existing automations.

## Configure the schema

`schema.json` defines:

* The step name and icon
* The inputs the user configures in the builder
* The outputs the step returns

Keep the public configuration narrow and explicit.

For most actions, set `type` to `action`. Use a logic step only when the plugin is meant to control flow rather than perform an action.

Use `inputs` for defaults and `schema.inputs` and `schema.outputs` for the structured contract that the builder and runtime share.

## Testing

Use `test/index.spec.ts` to verify the step behaves correctly with representative inputs.

Focus on:

* Input handling
* Returned outputs
* Error paths
* Any side effects triggered by the step

When the action interacts with external services, add tests for auth failures and invalid input as well as the happy path.

## Add an icon

Pick an icon from the [Phosphor icons](https://phosphoricons.com/) set, then set the icon name in `schema.json`.

Keep the icon name stable once the step is in use, because changing it can affect existing automations.

## Development notes

* Automation step plugins are action focused
* They are only available in self-hosted Budibase
* `stepId` stability matters more than the display name
* The built-in trigger types are not extended through this plugin path

## Related guides

* [Automation schema](https://docs.budibase.com/docs/automation-schema#schema-structure)
* [Budibase CLI setup](https://docs.budibase.com/docs/budibase-cli-setup)
* [Custom plugin overview](https://docs.budibase.com/docs/custom-plugin)
