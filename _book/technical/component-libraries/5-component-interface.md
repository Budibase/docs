# Component Interface

You will only need to know this information if you are trying to create Budibase components using an unsupported Javascript framework. Currently we support Svelte, but intend to add more in the future.

All Budibase components are initialised (by the Budibase client library) using the following interface. Your components must implement this interface:

```javascript
new MyComponent({
    // 
    target,
    props,
    hydrate,
    anchor
});
```

| option    | description                                                  |
| --------- | ------------------------------------------------------------ |
| `target`  | An `HTMLElement` to render to.                               |
| `anchor`  | A child of `target` to render the component immediately before. if `hydrate===true` this is ignored |
| `props`   | An object of properties to supply to the component           |
| `hydrate` | bool. If `true`, should replace all children in `target`. If `false`, should append to `target`'s children (unless `anchor` is specified). |

Your component must also expose a `set({...props})` method.

You may recognise this API from Svelte: https://svelte.dev/docs#Creating_a_component . If you are writing components using Svelte, you don't need to to anything extra!

If you wish to use other frameworks, such as React or Vue - please submit a GitHub issue to that effect.

