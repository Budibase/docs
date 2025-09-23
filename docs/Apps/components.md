---
title: Components
excerpt: Learn about Components within Budibase
deprecated: false
hidden: false
metadata:
  title: ''
  description: ''
  robots: index
next:
  description: ''
---
Components are the UI elements of your Budibase apps. They are used to construct your user interface, which could be components that your user will interact with, or components for layout and displaying data. At Budibase we use the Spectrum design system created by Adobe. This gives you a great out-of-the-box experience with themes by default.

***

## Adding components

There are a few different ways to add a component. If you have no components added, in the middle of your screen, there will be some text as well as a button that will allow you to add a component. The main way to add a component is to click the plus symbol found at the bottom right of your screen.

Clicking any of the above options will present a searchable and grouped list of components in the right-hand panel.

[block:image]
{
  "images": [
    {
      "image": [
        "https://files.readme.io/2da20eb3e64a4a5fb60501047a49aa5782446224610340b1b910502f75143355-Screenshot_2025-08-19_at_09.52.15.png",
        null,
        "Component list"
      ],
      "align": "center",
      "caption": "Component list"
    }
  ]
}
[/block]


[block:image]
{
  "images": [
    {
      "image": [
        "https://files.readme.io/cf5abe91e371269fa01ab249fa4c243867ef6bcb2190aff0193721666b25faeb-Screenshot_2025-08-19_at_09.52.39.png",
        null,
        "Searching for a component"
      ],
      "align": "center",
      "caption": "Searching for a component"
    }
  ]
}
[/block]


When you search for a component, if it is highlighted in blue, add it immediately by pressing the _Enter_ key.

## Deleting a component

The easiest way to delete a component is to select it and press the **delete** or **backspace** key.  
You will be prompted to confirm the deletion.

Alternatively, you can click on the three dots `...` and then click the delete action inside the opened context menu.

![](https://files.readme.io/0db87a3cd096cff7cbff948425f691b06db7bf299f96bbf01a21770a72b30803-image.png)

<br />

## Component tree

The component tree displays the layout and hierarchy of your components.  
Components can either be below one another, or nested inside a parent component. 

Parent components include those related to a <<glossary:Datasource>> or some variety of container:

- [Data Provider](doc:data-provider) 
- [Repeater](doc:repeater) 
- [Forms](doc:forms), [Form steps](doc:form-steps) and [Field groups](doc:field-groups)
- [Container](doc:container)
- [Sections](doc:using-sections)
- [Side Panel](doc:side-panel)
- Modal
- [Field Group](docs:field-groups)

Components can be re-arranged within the component tree with drag-and-drop.  
To assist with rearrangement, a green line will highlight the destination whilst a green box indicates that a component will be dropped inside that component. 

[block:image]
{
  "images": [
    {
      "image": [
        "https://files.readme.io/2ace3aadcb39aa4447be9bc289a205e1077237ea1b1a9b54c76f40deb1cb72df-Screen_Recording_2025-08-19_at_10.05.35.gif",
        "component-tree.gif",
        null
      ],
      "align": "center"
    }
  ]
}
[/block]


#### Editing

Within the component tree you can also delete, copy and move components by clicking on the `...` beside the component name.

[block:image]
{
  "images": [
    {
      "image": [
        "https://files.readme.io/daf20fe2e0780ca99b09cac9aa985a343f6724394c1bebc181b7762a92f620a4-Screenshot_2025-08-19_at_10.08.30.png",
        null,
        null
      ],
      "align": "center"
    }
  ]
}
[/block]


## Keyboard shortcuts

In the above screenshot, you can see a range of keyboard shortcuts related to components. The above shows the following. You can replace the `⌘` (command) button on Mac with `CTRL` on Windows if you wish to use the shortcuts on Windows.

- **Delete** - Backspace `←` - Allows quicker deletion of a selected component
- **Move up** - `⌘`+ `↑`- Allows the user to move a component up in the component tree
- **Move down** - `⌘` + `↓`- Allows the user to move a component down in the component tree
- **Duplicate** - `⌘` + `D`- Duplicate component with all settings added
- **Cut** - `⌘` + `X`- Removes the component, saves it for pasting elsewhere
- **Copy** - `⌘` + `C`- Copies a component and allows it to be pasted elsewhere, e.g a new screen
- **Paste** - `⌘` +  `V`- Pastes a copied/cut component in the component tree

There are a range of other ways to speed up navigate or perform additional actions more quickly. This is mainly done via the [Command Interface](doc:command-interface)

## Renaming components

Sometimes, it's helpful to organise your component tree in a way that clearly reflects the purpose of each component. For instance, you might want to differentiate between various forms on a screen, such as the `Create Users form` or the `Edit Users` form. Similarly, labeling buttons can clarify their action, whether they're for endorsing, deactivating, etc.

To rename a component, first select it. Then, locate the component's settings at the top in the side panel. Click the current name, delete it, and enter your desired name. The gif below should help guide you through this process.

[block:image]
{
  "images": [
    {
      "image": [
        "https://files.readme.io/2dcc1fbb4a0a97970a5f16207453dbffa19d561b478985d62976035606429e3b-Screen_Recording_2025-08-19_at_10.38.30.gif",
        "",
        ""
      ],
      "align": "center"
    }
  ]
}
[/block]


## Using components

When you have added a component you will be able to see the options that you can tweak on the right side under the Settings bar. Some components also have a toolbar that will appear above it in the preview window.

[block:image]
{
  "images": [
    {
      "image": [
        "https://files.readme.io/2b3a5770c96f3b03fb968b16abb9c8a263a99befd92871d73ad767ea0bff9867-Screenshot_2025-08-19_at_11.04.51.png",
        "toolbar.png",
        null
      ],
      "align": "center"
    }
  ]
}
[/block]


## Video tutorial

[block:html]
{
  "html": "<iframe src=\"https://player.vimeo.com/video/746819442?h=b3b536fe48&title=0&portrait=0&byline=0\" style=\"margin-top: -100px;\" width=\"640\" height=\"564\" frameborder=\"0\" allow=\"autoplay; fullscreen\" allowfullscreen></iframe>"
}
[/block]