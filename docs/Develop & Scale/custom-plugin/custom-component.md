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
[block:html]
{
  "html": "<div style=\"padding:0 0 0 0;position:relative;\"><iframe title=\"vimeo-player\" src=\"https://player.vimeo.com/video/754759041?h=effb5fd00d\" width=\"640\" height=\"360\" frameborder=\"0\" allowfullscreen></iframe></div><script src=\"https://player.vimeo.com/api/player.js\"></script>"
}
[/block]


## Getting started

Budibase components are written in [Svelte](https://svelte.dev/).

If you are using VSCode for your development, you will most likely want to install the [Svelte plugin](https://marketplace.visualstudio.com/items?itemName=svelte.svelte-vscode) to enable syntax highlighting.

> 📘 NodeJS version
> 
> Make sure you have node v20+ installed. You can run `node --version` to see if you need to upgrade.

### Initialise component

Make sure you have the latest [Budibase CLI](https://docs.budibase.com/docs/budibase-cli-setup) installed. Even if you have previously installed the CLI, you may want to install it again to be sure you have the latest version.

Once that's done, we need to initialise a template for our component. 

Navigate to the folder location you want to create your plugin, and execute the following command:

```shell
budi plugins --init component
```

Next you will receive a series of prompts to enter details about your component. You can press enter without providing a value if you are happy to use the placeholder.

[block:image]
{
  "images": [
    {
      "image": [
        "https://files.readme.io/a26f2a27b486d5bc75e5e604a133e5ba8b017c4991daa30faa949748080b85e6-pluginCLI.png",
        null,
        ""
      ],
      "align": "center"
    }
  ]
}
[/block]


Within the newly created custom component project you should see a tree structure as follows:

[block:image]
{
  "images": [
    {
      "image": [
        "https://files.readme.io/f3d4cfe9456aeadb6306de48c5110df65649557f831f44a3ed9bf6bfda4ee3fb-Screenshot_2024-10-22_at_17.22.15.png",
        "",
        ""
      ],
      "align": "center"
    }
  ]
}
[/block]


<br />

## Building your component

After you have created your new plugin directory, execute the following:

```shell Shel
cd my-component
yarn build
```

Assuming you have [updated the server env variable](https://docs.budibase.com/docs/custom-plugin#hot-reloading-developers-only) you should now be able to see your component template in Budibase:

[block:image]
{
  "images": [
    {
      "image": [
        "https://files.readme.io/98aba04f2b26f12c43643100a4e4706bc37ea5e3768e1099ea6290de61fd2f7f-Screenshot_2024-10-23_at_09.45.07.png",
        null,
        ""
      ],
      "align": "center"
    }
  ]
}
[/block]


<br />

### Component.svelte

This is where your svelte code will live for your component. You can use html tags, css styling and bindings as you would for any other svelte component. 

To make sure your saved changes are passed through to your Budibase server, you must execute a `yarn watch` within your custom component project. This will allow your local Budibase app builder to see those changes in real-time, which is very handy for getting your component to look and behave just right. 

> 🚧 
> 
> The `use:styleable={$component.styles}` attribute must be included in your top-level component div. Removing this will cause issues when displaying your component.

<br />

#### SDK Context

The SDK context gives you access to the internal Budibase API.

```javascript
const { styleable, API } = getContext("sdk")
```

The [packages/server/src/api/routes](https://github.com/Budibase/budibase/tree/develop/packages/server/src/api/routes) directory provides all of the available endpoint definitions, and the implementations can be found in the [packages/server/src/api/controllers](https://github.com/Budibase/budibase/tree/develop/packages/server/src/api/controllers) directory.  

This provides a large amount of integration with various aspects of the Budibase platform.  

<br />

#### Context

The context key is a promise of what data bindings the component is going to provide. The builder will use this information to generate data bindings to display, but it's up to the components themselves to provide the data they say they will.  
Components can provide many contexts, so the value of the context key may be either an object or an array of objects. 

Each context definition supports the following configuration:

[block:parameters]
{
  "data": {
    "h-0": "Key",
    "h-1": "Description",
    "h-2": "Possible values",
    "0-0": "type",
    "0-1": "The type of context provided",
    "0-2": " **static**  \nStatic contexts define an array of explicit bindings which are provided by the component. This is used when you know each what data bindings your component provides.  \n  \n**schema**  \nSchema contexts are generated dynamically based on settings. The data bindings provided will be the schema of a certain datasource. How this datasource is determined is by looking at the component settings and identifying a setting of type dataSource, table or schema. If the component has a setting of type `dataProvider`, the data provider stack will be traversed upwards until a matching setting is found. Data bindings are then generated for whatever matching datasource is found. The component is expected to provide some sort of row from some datasource if this context setting is used.",
    "1-0": "values",
    "1-1": "An array of objects defining which static bindings are available",
    "1-2": "An array of objects containing `key`, `label` and `type` properties.  \n  \nDefines the readable and runtime values for the binding, in the label and key fields respectively."
  },
  "cols": 3,
  "rows": 2,
  "align": [
    "left",
    "left",
    "left"
  ]
}
[/block]


Example context:

```json Context
[
  {
    "type": "static",
    "values": [
      {
        "label": "Row index",
        "key": "index",
        "type": "number"
      }
    ]
  }
]
```

<br />

### schema.json

On the next page we will discuss the intricacies of the component schema.json file - which defines the inputs and outputs of your component, which will be controlled through the component settings panel in the builder.

You can jump to the component schema page [here](/docs/component-schema).

<br />

### Using TypeScript

The Budibase svelte components use JavaScript by default. If needed, you can convert your custom component over to TypeScript by following the **Adding TypeScript to an existing project** section of this blog: <https://svelte.dev/blog/svelte-and-typescript>.

In addition, you may need to install **tslib** i.e. `yarn add tslib`, and add an `index.ts` file.

An example of a custom component that was ported over can be found in this [TypeScript date-picker](https://github.com/melohagan/budibase-component-kasper-date-picker). 

<br />

## Example: Custom form field component

In this example we will create a Star Rating component that can be added as a field to Budibase Forms. 

> 📘 
> 
> This example is taken from the [Star Rating custom component](https://github.com/andz-bb/budibase-component-star-rating)

This example assumes you already have an empty component [initialised and built.](#getting-started) We're going to focus on the parts that allow this custom component to work as an input within the existing Form component.

### Updating schema.json

The first step will be to define the settings that will be available to our form. The most important setting for any form field component is the field that we want the input to be for. In my case, I have a Number column in one of my tables called Rating that I want to be able to use my Star Rating component with.

We need to add a setting for Field to our component and we can do this by defining it in schema.json. On an empty component template there is a placeholder setting for Text. We will replace this with a setting for Field which will be of type `field/number` and make it a required field. While we're here we can also add a text field for the label.

[block:image]
{
  "images": [
    {
      "image": [
        "https://files.readme.io/f0274c0-Screenshot_2022-09-28_at_13.43.39.png",
        null,
        "component settings within schema.json"
      ],
      "align": "center",
      "caption": "component settings within schema.json"
    }
  ]
}
[/block]


[block:image]
{
  "images": [
    {
      "image": [
        "https://files.readme.io/c58e802f4e7d447e5742dedba68fcb85ae15f9120b75bd8fc2818a4b2fa5c56d-Screenshot_2024-10-29_at_08.36.00.png",
        null,
        "the new settings for our component now show up in the builder"
      ],
      "align": "center",
      "sizing": "300px",
      "caption": "the new settings for our component now show up in the builder"
    }
  ]
}
[/block]


#### Optional: Adding custom validation

If you would like the user to be able to add component level validation, you can add an validation type settings object to your settings array. We will use this `validation` object later [when registering the form field.](#integrating-with-the-form-component)

```json schema.json
      {
        "type": "validation/number",
        "label": "Validation",
        "key": "validation"
      }
```

[block:image]
{
  "images": [
    {
      "image": [
        "https://files.readme.io/cbce90b2960f496add2aa91c461146163c7d19fdbf8a92966e886199629a7a34-Screenshot_2024-10-29_at_08.38.34.png",
        null,
        ""
      ],
      "align": "center",
      "sizing": "300px"
    }
  ]
}
[/block]


You can view [my full schema with extra settings here](https://github.com/andz-bb/budibase-component-star-rating/blob/master/schema.json) or [view documentation for the component schema here.](/docs/component-schema)

### Working with Component.svelte

The plugin template comes with a basic placeholder in `Component.svelte` and this is what we will modify to create our custom component. This is written in Svelte - if you are new to it you can [check out the tutorial here.](https://svelte.dev/tutorial/basics)

The first thing we'll do is declare props for our settings values we created above. The syntax for this is `export let [your-setting-key];` This means we can use the parameters set in the builder in our component.

Now that our props are added we can continue to build out the front end. Using JS, HTML and CSS we can create the basic interface for our component and then make it functional.

[block:image]
{
  "images": [
    {
      "image": [
        "https://files.readme.io/58f43d2-Screenshot_2022-09-28_at_15.52.39.png",
        null,
        "looks good, now let's make it useful!"
      ],
      "align": "center",
      "sizing": "300px",
      "caption": "looks good, now let's make it useful!"
    }
  ]
}
[/block]


### Integrating with the Form component

The first step here is to get the context from the parent Form component. We can then use that Form Context to register our component as a Field in that Form.

```javascript Component.svelte
export let field;
export let label;
export let validation;

const component = getContext("component");
const formContext = getContext("form");
const formStepContext = getContext("form-step"); 
	
const formApi = formContext?.formApi;
$: formStep = formStepContext ? $formStepContext || 1 : 1;
$: formField = formApi?.registerField(field, "number", 0, false, validation, formStep);
```

> 📘 formApi.registerField() parameters from our example
> 
> - field name - we are using the value of `field` from our props
> - field data type - in this case, the field is for a `number`
> - field default value - we have set that to be `0` here
> - field disabled - ours is `false` here but you could make it configurable
> - field validation - ours is `validation` from props, but can be null if no validation is required
> - form step - we use `formStep` derived from the formStepContext

As this is a form component, we need to verify that the component is actually being used as a child of a form in our Budibase screen. To do this, I will add a Svelte if/else statement to our component so that it will render our field if it's the child of a form, or show a warning if it's not.

```javascript Component.svelte
  {#if !formContext}
    <div class="placeholder">Form components need to be wrapped in a form</div>
  {:else}
  	// our component goes here
  {/if}
```

### Setting the field value

Now that the field is registered, we have to set it to update the form's properties in the parent component every time the store changes. Using [onDestroy](https://svelte.dev/docs#run-time-svelte-ondestroy) we can deregister our field from our form whenever the component unmounts.

```javascript Component.svelte
import { onDestroy } from "svelte";

let fieldApi;
let fieldState; 

$: unsubscribe = formField?.subscribe((value) => {
  fieldState = value?.fieldState;
  fieldApi = value?.fieldApi;
});

onDestroy(() => {
  fieldApi?.deregister();
  unsubscribe?.();
});
```

Just like that we have everything we need to set a value to our form using our component.

Consider the **Icon** svelte component:

```typescript Icon.svelte
<Icon
  filled={fieldState?.value >= i + 1}
  on:click={() => fieldApi?.setValue(i + 1)}
/>
```

We determine the how many stars should be filled from `fieldState.value`, and we can set the number of stars in the _on click_ event via  `fieldApi.setValue('new value here')`.

### Integrating with Field Groups

Remember we made a setting for the label above? Now we are going to make our component compatible with the Budibase Field Group component, so the label styling can come from that. In order to make this work we need to get context from the Field Group, just like we did above for the Form component.

```html Component.svelte
<script>
  const fieldGroupContext = getContext("field-group");

  const labelPos = fieldGroupContext?.labelPosition || "above";

  $: labelClass =
    	labelPos === "above" ? "" : `spectrum-FieldLabel--${labelPos}`;
</script>


<div class="spectrum-Form-item" use:styleable={$component.styles}>
    <label
      class:hidden={!label}
      for={fieldState?.fieldId}
      class={`spectrum-FieldLabel spectrum-FieldLabel--sizeM spectrum-Form-itemLabel ${labelClass}`}
    >
      {label || " "}
    </label>
    <div class="spectrum-Form-itemField">
			// component logic in here
		</div>
</div>

<style>
  label {
    white-space: nowrap;
  }
  label.hidden {
    padding: 0;
  }
  .spectrum-Form-itemField {
    position: relative;
    width: 100%;
  }
  .spectrum-FieldLabel--right,
  .spectrum-FieldLabel--left {
    padding-right: var(--spectrum-global-dimension-size-200);
  }
</style>
```

### Handling errors

```html Component.svelte
{#if fieldState?.error}
  <div class="error">{fieldState.error}</div>
{/if}
       
 <style>
  .error {
    color: var(--spectrum-semantic-negative-color-default, 
               var(--spectrum-global-color-red-500));
    font-size: var(--spectrum-global-dimension-font-size-75);
    margin-top: var(--spectrum-global-dimension-size-75);
  }
 </style>
```

<br />

## Example: Context provider

Sometimes you want to expose [bindings](https://docs.budibase.com/docs/bindings) to child components without the need of a form component - you do this through [context](https://docs.budibase.com/docs/custom-component#context).

In this example we will add a toggle component that can provide its boolean state to child components. The codebase can be found here: [budibase-toggle](https://github.com/YuanZhang98/budibase-toggle).

### Add context to schema.json

First we need to tell Budibase that this component can take children. We do this with the _hasChildren_ property in the `"schema"` object.

```json
{
  "schema": {
    "name": "budibase-toggle",
    
		"hasChildren": true
    ...
```

Next provide the context array after the `"settings"` property. The context array provides a list of bindings that will be available to the children. 

```json
{
  "hasChildren": true,
  "settings": [..],
  "context": [
    {
      "type": "static",
      "values": [
        {
          "label": "Active State",
          "key": "isActive",
          "type": "boolean",
          "defaultValue": false
        }
      ]
    }
  ]
  ...
```

If you now build and import the component, you should see something similar to the following:

[block:image]
{
  "images": [
    {
      "image": [
        "https://files.readme.io/fd5cc3227647c5572b7ce6121132cd3d1968a896794344f2c4808b318cd726f5-Screenshot_2024-10-23_at_10.14.01.png",
        "",
        ""
      ],
      "align": "center"
    }
  ]
}
[/block]


### Implement context binding

Whilst we have exposed the context, we need to do bind it to our toggle state:

1. Import the **Provider** from the SDK:

```javascript
const { styleable, Provider } = getContext("sdk")
```

2. Next bind the _dataContext_ to the toggle state of the component:

```javascript
let isActive = false;
$: dataContext = {
  isActive
}
```

3. Add the Provider and slot:

```html
<div use:styleable={$component.styles}>
  <Provider data={dataContext}>
    <div class="toggle">...</div>
    <slot />
  </Provider>
</div>
```

The **Provider** exposes the _dataContext_ bindings to the _slot_, which represents any nested child.

**Result**

[block:image]
{
  "images": [
    {
      "image": [
        "https://files.readme.io/aa959514234122ec650e2a7fe0fa75420a8ac9a612c79fd468f5a87df0de473e-Screenshot_2024-10-23_at_10.12.28.png",
        null,
        ""
      ],
      "align": "center"
    }
  ]
}
[/block]


[block:image]
{
  "images": [
    {
      "image": [
        "https://files.readme.io/4ae70ad20c29730ab9ec9bbe4d8dc1a07f93d4bfd565deba72f229f7eb135ae8-Screen_Recording_2024-10-23_at_10.09.56.gif",
        null,
        ""
      ],
      "align": "center"
    }
  ]
}
[/block]


<br />

<br />

## Example: Data provider

Whilst you can query data from an API within your custom component, it can be better practice to expose a [Data provider](https://docs.budibase.com/docs/data-provider) so that the user has flexibility to choose their own [Datasource](https://docs.budibase.com/docs/data-sources).

### Update the schema

Include the following setting in your schema:

```json schema.json
"settings": [
  {
    "type": "dataProvider",
    "label": "Data provider",
    "key": "dataProvider",
    "required": true
  }
]
```

Which will appear as follows in Budibase:

![](https://files.readme.io/07254eb-Screenshot_2022-10-13_at_14.38.00.png)

[block:image]{"images":[{"image":["https://files.readme.io/d8ef60dab279c922648404ea2f0d9ed0fae2613bad9182926fac995cd28007ad-Screenshot_2024-10-29_at_10.24.18.png",null,null],"align":"center"}]}[/block]

### Using the data provider

The data provider has a _rows_ property which contains an array of objects for the current page of results. 

In this example we will look at a [Spotify playlist component](https://github.com/YuanZhang98/budibase-spotify-playlist). 

Add the following code to the _script_ tag of your component:

```javascript Component.svelte
export let dataProvider
$: playlists = dataProvider?.rows ?? [];
```

 The first line assigns the data provider from the settings. Next we get all the rows and default to empty if needed.

We can now use the playlists variable to loop over each to be displayed in our component:

[block:image]{"images":[{"image":["https://files.readme.io/801fd75383badcf31649b0daf81c07b3be86070e582507153e8cfa20fce23282-Screenshot_2024-10-29_at_10.29.05.png",null,null],"align":"center"}]}[/block]

![](https://files.readme.io/1a25e03-Screenshot_2022-10-13_at_14.47.17.png)

<br />

## Example: Event handler

As seen in the component [Actions](doc:actions) it is possible for components to have _On Click_, _On Change_ or any other event! 

In this example, we will look at a [timer component](https://github.com/doggodoge/bb-timer) that will trigger some user specified action when the count down goes to zero.

### Update the schema

Include the following setting in your schema:

```json schema.json
"settings": [
  {
    "type": "event",
    "key": "timeout",
    "label": "On Timeout"
  }
]
```

This will appear in the Budibase builder like so:

[block:image]{"images":[{"image":["https://files.readme.io/addd4142303fb891da5a98eb550cd2c615503d4df5bdf59e5a627e0bf1a5c650-Screenshot_2024-10-29_at_10.35.14.png",null,null],"align":"center"}]}[/block]

### Wiring the event

The user is now able to trigger any sequence of Budibase actions upon the _On Timeout_ event. We now need to determine when to fire this event.

To do this we will need to import the Event Dispatcher from Svelte and then fire our event. This can be done like so:

```typescript Timer.svelte
import { createEventDispatcher } from 'svelte';
const dispatch = createEventDispatcher();

...

if (counter < 1) {
	dispatch('timeout');
}
```

Then in the parent component, we take a prop which matches the key name **timeout**, and also include the **on** listener like so:

```html Component.svelte
<script>
	export let timeout
</script>

<div use:styleable={$component.styles}>
  <Timer on:timeout={timeout} />
</div>
```

### On change event

An _On Change_ event will be similar to the above, but you also will want to provide context to expose the `{{ Field Value }}` binding. 

To do so, add the following to your **schema.json**:

```json schema.json
"settings": [
  {
    "type": "event",
    "label": "On Change",
    "key": "onChange",
    "context": [
      {
        "label": "Field Value",
        "key": "value"
      }
    ]
  }
]
```

Then you can use your _onChange_ function similar to the following:

```html Component.svelte
<script>
  export let onChange
  
  const handleChange = e => {
    if (onChange) {
      onChange({ value: e.detail })
    }
  }
</script>

<div use:styleable={$component.styles}>
  <Input on:change={handleChange} />
</div>
```

It is important to note that we are providing an object with the 'value' key, to make sure Budibase can detect the binding.

<br />

[block:image]
{
  "images": [
    {
      "image": [
        "https://files.readme.io/23050a51a5d2684edc275559624b1a2239f432b426157341d8fcc28566f2e4a7-Screenshot_2024-10-29_at_11.05.34.png",
        null,
        "Selecting the component that triggered the event"
      ],
      "align": "center",
      "caption": ""
    }
  ]
}
[/block]