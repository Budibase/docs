---
title: Container
excerpt: ''
deprecated: false
hidden: false
metadata:
  title: ''
  description: ''
  robots: noindex
next:
  description: ''
---
A Container is a `div` with pre-defined styles. They are the building blocks of your application and critical for responsive design. Containers are used to structure your application and layout other components/elements in a structured way. You can use [flexbox](https://developer.mozilla.org/en-US/docs/Web/CSS/CSS_Flexible_Box_Layout/Basic_Concepts_of_Flexbox) to layout the items within your container.

![](https://files.readme.io/fe98df8-CleanShot_2022-03-23_at_13.31.27.png "CleanShot 2022-03-23 at 13.31.27.png")

> 📘 Learn Flexbox
> 
> Budibase containers use flexbox to layout components. A great resource for learning flexbox is [flexbox froggy.](https://flexboxfroggy.com/)

## Container settings

There are several general settings for the container component, most of which are shared with other components as well.

![](https://files.readme.io/af9749f-container-settings.png "container-settings.png")

[block:parameters]
{
  "data": {
    "h-0": "Setting",
    "h-1": "Description",
    "0-0": "Name",
    "0-1": "Change the name of your component, and how it reads within the component tree.",
    "1-0": "Direction",
    "1-1": "Change the direction of the components nested within your container. You can layout your components in a row (→) or a column (↓).",
    "2-0": "Horizontal align",
    "2-1": "The horizontal. align setting is used to align the items on the main axis, the direction in which flex-direction has set the flow. The initial value is **left** which will line the items up at the start edge of the container, but you could also set the value to **right** to line them up at the end, or **center** to line them up in the center.  \n  \nYou can also use the value **stretch** to take all the spare space between the items, and share it out evenly between the items so there will be an equal amount of space between each item.",
    "3-0": "Vertical align",
    "3-1": "The vertical align property will align the items on the cross axis. The initial value is **top** which aligns the items along the top of the container (like they're handing from a roof), but you could also set the value to the **bottom** to align the items along the bottom (like they're standing on the floor), or **middle** to line them up in the center.  \n  \nYou can also use the value to **stretch**, to stretch the items to fill the height of the container.",
    "4-0": "Size",
    "4-1": "Where the **grow** option deals with adding space in the main axis, the **shrink** property controls how it is taken away.",
    "5-0": "Gap",
    "5-1": "The **gap** property sets the gaps (gutters) between items stored within a container. You can select the different sizes of gaps you would like between your items.",
    "6-0": "Wrap",
    "6-1": "Select the **wrap** to wrap your components onto multiple lines. This is critical when designing for mobile resolutions.  \n  \nWith **nowrap**, the items are laid out in a single line which may cause the flex container to overflow."
  },
  "cols": 2,
  "rows": 7,
  "align": [
    "left",
    "left"
  ]
}
[/block]

### On Click

By defining [actions](https://docs.budibase.com/docs/actions) within the `On Click` setting, the container will be treated like a button including the cursor change. Any click events of buttons or other containers within a container with _On Click_ actions set will be ignored. 

### Container background color

You can also splash some color into your apps with containers!

![](https://files.readme.io/5190f3e-Screenshot_2022-04-28_at_09.38.24.png "Screenshot 2022-04-28 at 09.38.24.png")

To clear the selected color, click on the `X` in the bottom right of the panel. 

For additional flare, there are a range of gradients available.

| Title            | Gradient                                                                            |
| :--------------- | :---------------------------------------------------------------------------------- |
| Warm Flame       | <img src="https://files.readme.io/1a42339-Screenshot_2022-04-28_at_09.58.00.png" /> |
| Night Fade       | <img src="https://files.readme.io/fc0fe3c-Screenshot_2022-04-28_at_10.04.07.png" /> |
| Spring Warmth    | <img src="https://files.readme.io/b17c898-Screenshot_2022-04-28_at_10.00.24.png" /> |
| Sunny Morning    | <img src="https://files.readme.io/6d1c984-Screenshot_2022-04-28_at_10.00.59.png" /> |
| Winter Neva      | <img src="https://files.readme.io/be3cf7c-Screenshot_2022-04-28_at_10.01.13.png" /> |
| Tempting Azure   | <img src="https://files.readme.io/b91a8a2-Screenshot_2022-04-28_at_10.01.36.png" /> |
| Heavy Rain       | <img src="https://files.readme.io/8d459f9-Screenshot_2022-04-28_at_10.02.02.png" /> |
| Deep Blue        | <img src="https://files.readme.io/de2f85d-Screenshot_2022-04-28_at_10.02.20.png" /> |
| Near Moon        | <img src="https://files.readme.io/dfe425f-Screenshot_2022-04-28_at_10.04.59.png" /> |
| Wild Apple       | <img src="https://files.readme.io/35ae5bb-Screenshot_2022-04-28_at_10.05.20.png" /> |
| Plum Plate       | <img src="https://files.readme.io/59146cd-Screenshot_2022-04-28_at_10.05.44.png" /> |
| Peach Kiss       | <img src="https://files.readme.io/2d10e99-Screenshot_2022-04-28_at_10.06.03.png" /> |
| Flamingo Sunrise | <img src="https://files.readme.io/cd3f175-Screenshot_2022-04-28_at_10.06.31.png" /> |
| Bud Mist         | <img src="https://files.readme.io/6b32daa-Screenshot_2022-04-28_at_10.06.56.png" /> |
| Ballet Slipper   | <img src="https://files.readme.io/2d88d97-Screenshot_2022-04-28_at_10.07.20.png" /> |
| Black Noir       | <img src="https://files.readme.io/6fccf79-Screenshot_2022-04-28_at_10.07.41.png" /> |

You can also add background colors to your [Screens](doc:screens)

## Tab component

A [Custom plugin](doc:custom-plugin) is available [here](https://github.com/poirazis/bb-plugin-TabContainer) if you wish to tabs in your app screen!

![](https://files.readme.io/a1d701c-image.png)