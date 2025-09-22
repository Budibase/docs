---
title: Binding explorer panel
excerpt: ''
deprecated: false
hidden: false
metadata:
  title: ''
  description: ''
  robots: index
next:
  description: ''
  pages:
    - type: basic
      slug: state-explorer-interface
      title: State explorer interface
---
The Binding Explorer Panel lets you view and interact with all available [bindings](doc:introduction-to-bindings) within a screen. This panel updates based on the components added to your screen, making it a great feature for managing data-driven apps.

## Accessing the Binding Explorer Panel

The Binding Explorer Panel is located in the Design Area, to the right of the Components tab on the far left of your screen. Clicking on this tab will reveal a list of all available bindings for the current screen. 

[block:image]
{
  "images": [
    {
      "image": [
        "https://files.readme.io/36be47331115e8e896c087f13618cf70dc525b9a80778bbdebff58c16ef7e7fd-Screenshot_2025-01-31_at_10.49.13.png",
        "",
        ""
      ],
      "align": "center"
    }
  ]
}
[/block]


## Understanding Bindings

Bindings in Budibase are based on objects and often include multiple fields. These fields can contain nested [objects](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Object) or [arrays](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array).

### Preexisting Bindings

Certain bindings are always available, regardless of the application's configuration. These include:

- **Current User**: Contains details about the logged-in user, such as role, email, \_id, first name, and last name.
- **Device**: Provides information about the current device, such as mobile: false and tablet: true.
- **App**: Includes app-specific data, such as the theme.
- **State**: Stores any state variables created across screens, not exclusive to just one screen.

[block:image]
{
  "images": [
    {
      "image": [
        "https://files.readme.io/8d414fe2e76406fb10f71724659c645491683b95352f46fa732ddda4fc0a237d-Screenshot_2025-01-31_at_11.23.55.png",
        "",
        "Preexisting bindings"
      ],
      "align": "center"
    }
  ]
}
[/block]


### Component-Specific Bindings

As you add components to your screen, new bindings will appear in the panel. Common sources of bindings include:

- [Data Providers](doc:data-provider)
- [Tables](doc:table)
- [Repeater Blocks](doc:repeater-block)
- [Form Blocks](doc:form-block)
- [Input Fields](doc:text-inputs)

Each component provides bindings that can be expanded or collapsed to explore any nested structures values.

[block:image]
{
  "images": [
    {
      "image": [
        "https://files.readme.io/9b655ea8516f2cf7602f167c55ee6a9a5d154ba998c1243b261121fda4e28856-Screenshot_2025-01-31_at_11.25.16.png",
        "",
        "Additionally bindings added if there are sourced components on screen"
      ],
      "align": "center"
    }
  ]
}
[/block]


## Copying Bindings

You can easily copy any binding from the Binding Explorer panel to use it elsewhere in your application. This could involve copying all rows from a data provider or referencing specific objects or fields within the available rows.

### Steps to Copy a Binding:

1. Hover over the binding you want to copy.
2. Click the copy icon on the far right of the binding.
3. The binding will be copied to your clipboard and can be pasted into a component to display or use that specific value.

[block:image]
{
  "images": [
    {
      "image": [
        "https://files.readme.io/63b923dea2869b326b225392a1e7a69fd7106b8c8c23fc695bfbcaa88b2301d5-20250131_130136.gif",
        null,
        ""
      ],
      "align": "center"
    }
  ]
}
[/block]