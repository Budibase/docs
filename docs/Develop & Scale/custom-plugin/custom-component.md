---
title: Custom component
excerpt: Write a custom svelte component
deprecated: false
hidden: false
metadata:
  title: ''
  description: ''
  robots: index
next:
  description: ''
---
Custom components let you extend the Budibase builder with your own Svelte-based UI elements.

Use them when the built-in component set does not cover the layout or interaction you need.

## Before you start

Make sure you have:

* The latest [Budibase CLI](https://docs.budibase.com/docs/budibase-cli-setup)
* Node.js `v20` or later
* A local development environment for Budibase plugins

## Create the component

1. Go to the folder where you want to create the plugin.
2. Run:

```shell
budi plugins --init component
```

3. Complete the setup prompts.
4. Open the generated project in your editor.

The template includes:

* `Component.svelte` for the component UI
* `schema.json` for the builder settings
* `test/index.spec.ts` for template tests

## Build and watch

Build the project with:

```shell
cd my-component
yarn build
```

During development, run `yarn watch` so your local Budibase instance picks up changes as you edit.

If you update `schema.json`, refresh the builder so the new settings and bindings appear.

## Implement the component

`Component.svelte` is the main entry point for the component UI.

Use it to define:

* Layout and markup
* Styling
* Builder bindings and props

If the component needs Budibase APIs, use the SDK context exposed by the plugin runtime.

Keep the top-level wrapper on the component and include the `use:styleable={$component.styles}` attribute so Budibase can apply builder styles correctly.

## Work with context

Context tells Budibase which bindings the component provides.

Use it when your component needs to:

* Expose static values
* Expose schema-driven bindings
* Register data from a datasource or data provider

The context definition is a contract with the builder. If the component says it provides a binding, it must actually supply that binding at runtime.

Keep the context definition as small as possible and document only the bindings the component actually provides.

## Configure the schema

`schema.json` defines:

* The settings shown in the builder
* The type of data the component accepts
* The outputs exposed to other components

If your component is used inside forms, define the field and validation settings explicitly.

The schema also controls whether the component can hold children, whether the settings bar is shown, and which styling controls are available.

## Register form fields

For form-field components, register the field with the parent form context.

Use the form API to connect the custom component to the form value, field type, and validation rules.

If the component is not a form field, you do not need to register it with the form context.

## TypeScript support

The template uses JavaScript by default.

If you want TypeScript, add it after the component works in JavaScript and update the project setup accordingly.

The migration path is incremental:

1. Make the JavaScript version work.
2. Add TypeScript support.
3. Move the entry file to `index.ts` if needed.
4. Keep the component API unchanged while you change the implementation language.

## Testing

Use `test/index.spec.ts` to verify the component renders and exposes the expected behaviour.

Focus on:

* Required props
* Context registration
* Form integration
* Validation behaviour

For components that expose builder settings, also test that the schema and runtime props stay in sync.

## Example usage

The star rating example in this section is most useful as a pattern for form components:

* add a field setting in `schema.json`
* map that setting to a prop in `Component.svelte`
* register the field with the parent form
* apply validation only where the form needs it

Keep examples focused on one integration path. That makes the component easier to adapt to another use case later.

## Related guides

* [Component schema](/docs/component-schema)
* [Budibase CLI setup](https://docs.budibase.com/docs/budibase-cli-setup)
* [Custom plugin overview](https://docs.budibase.com/docs/custom-plugin)
