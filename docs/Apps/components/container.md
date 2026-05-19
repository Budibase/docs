---
title: Container
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
The container now has two different layouts. You can toggle between these two modes by switching between the icons of the layout setting. By default, the grid-based layout is selected. If you wish to use the old layout, you must click the first displayed icon.


## Grid-based

This layout allows users to drag, resize, and place their components anywhere on the screen. It also allows you to resize components based on the view mode you have currently selected in the builder. This allows you to build [responsive screens](doc:designing-for-mobile) easily for mobile and tablet devices.

To drag, hover over the component and click on its label. This will allow you to drag the component freely within the builder's design area. If you don't click on the label, you will just be able to resize the component.

## Flexbox

A Container is a `div` with pre-defined styles. They are the building blocks of your application and critical for responsive design. Containers are used to structure your application and layout other components/elements in a structured way. You can use [flexbox](https://developer.mozilla.org/en-US/docs/Web/CSS/CSS_Flexible_Box_Layout/Basic_Concepts_of_Flexbox) to layout the items within your container.


> 📘 Learn Flexbox
>
> Budibase containers use flexbox to layout components. A great resource for learning flexbox is [flexbox froggy.](https://flexboxfroggy.com/)

## Container settings

### Flexbox

There are several general settings for the container component, most of which are shared with other components as well.


<Table align={["left","left"]}>
  <thead>
    <tr>
      <th>
        Setting
      </th>

      <th>
        Description
      </th>
    </tr>
  </thead>

  <tbody>
    <tr>
      <td>
        Layout
      </td>

      <td>
        Switch between the flexbox and grid-base layouts.
      </td>
    </tr>

    <tr>
      <td>
        Name
      </td>

      <td>
        Change the name of your component, and how it reads within the component tree.
      </td>
    </tr>

    <tr>
      <td>
        Direction
      </td>

      <td>
        Change the direction of the components nested within your container. You can layout your components in a row (→) or a column (↓).
      </td>
    </tr>

    <tr>
      <td>
        Horizontal align
      </td>

      <td>
        The horizontal. align setting is used to align the items on the main axis, the direction in which flex-direction has set the flow. The initial value is **left** which will line the items up at the start edge of the container, but you could also set the value to **right** to line them up at the end, or **center** to line them up in the center.  

        You can also use the value **stretch** to take all the spare space between the items, and share it out evenly between the items so there will be an equal amount of space between each item.
      </td>
    </tr>

    <tr>
      <td>
        Vertical align
      </td>

      <td>
        The vertical align property will align the items on the cross axis. The initial value is **top** which aligns the items along the top of the container (like they're handing from a roof), but you could also set the value to the **bottom** to align the items along the bottom (like they're standing on the floor), or **middle** to line them up in the center.  

        You can also use the value to **stretch**, to stretch the items to fill the height of the container.
      </td>
    </tr>

    <tr>
      <td>
        Size
      </td>

      <td>
        Where the **grow** option deals with adding space in the main axis, the **shrink** property controls how it is taken away.
      </td>
    </tr>

    <tr>
      <td>
        Gap
      </td>

      <td>
        The **gap** property sets the gaps (gutters) between items stored within a container. You can select the different sizes of gaps you would like between your items.
      </td>
    </tr>

    <tr>
      <td>
        Wrap
      </td>

      <td>
        Select the **wrap** to wrap your components onto multiple lines. This is critical when designing for mobile resolutions.  

        With **nowrap**, the items are laid out in a single line which may cause the flex container to overflow.
      </td>
    </tr>

    <tr>
      <td>
        On click
      </td>

      <td>
        By defining [actions](https://docs.budibase.com/docs/actions)  within the `On Click` setting, the container will be treated like a button including the cursor change. Any click events of buttons or other containers within a container with *On Click* actions set will be ignored.
      </td>
    </tr>
  </tbody>
</Table>

### Container background colour

You can also splash some color into your apps with containers!


To clear the selected color, click on the `X` in the bottom right of the panel. 

For additional flare, there are a range of gradients available.

<Table align={["left","left"]}>
  <thead>
    <tr>
      <th>
        Title
      </th>

      <th>
        Gradient
      </th>
    </tr>
  </thead>

  <tbody>
    <tr>
      <td>
        Warm Flame
      </td>

      <td>
        <img src="https://files.readme.io/1a42339-Screenshot_2022-04-28_at_09.58.00.png" />
      </td>
    </tr>

    <tr>
      <td>
        Night Fade
      </td>

      <td>
        <img src="https://files.readme.io/fc0fe3c-Screenshot_2022-04-28_at_10.04.07.png" />
      </td>
    </tr>

    <tr>
      <td>
        Spring Warmth
      </td>

      <td>
        <img src="https://files.readme.io/b17c898-Screenshot_2022-04-28_at_10.00.24.png" />
      </td>
    </tr>

    <tr>
      <td>
        Sunny Morning
      </td>

      <td>
        <img src="https://files.readme.io/6d1c984-Screenshot_2022-04-28_at_10.00.59.png" />
      </td>
    </tr>

    <tr>
      <td>
        Winter Neva
      </td>

      <td>
        <img src="https://files.readme.io/be3cf7c-Screenshot_2022-04-28_at_10.01.13.png" />
      </td>
    </tr>

    <tr>
      <td>
        Tempting Azure
      </td>

      <td>
        <img src="https://files.readme.io/b91a8a2-Screenshot_2022-04-28_at_10.01.36.png" />
      </td>
    </tr>

    <tr>
      <td>
        Heavy Rain
      </td>

      <td>
        <img src="https://files.readme.io/8d459f9-Screenshot_2022-04-28_at_10.02.02.png" />
      </td>
    </tr>

    <tr>
      <td>
        Deep Blue
      </td>

      <td>
        <img src="https://files.readme.io/de2f85d-Screenshot_2022-04-28_at_10.02.20.png" />
      </td>
    </tr>

    <tr>
      <td>
        Near Moon
      </td>

      <td>
        <img src="https://files.readme.io/dfe425f-Screenshot_2022-04-28_at_10.04.59.png" />
      </td>
    </tr>

    <tr>
      <td>
        Wild Apple
      </td>

      <td>
        <img src="https://files.readme.io/35ae5bb-Screenshot_2022-04-28_at_10.05.20.png" />
      </td>
    </tr>

    <tr>
      <td>
        Plum Plate
      </td>

      <td>
        <img src="https://files.readme.io/59146cd-Screenshot_2022-04-28_at_10.05.44.png" />
      </td>
    </tr>

    <tr>
      <td>
        Peach Kiss
      </td>

      <td>
        <img src="https://files.readme.io/2d10e99-Screenshot_2022-04-28_at_10.06.03.png" />
      </td>
    </tr>

    <tr>
      <td>
        Flamingo Sunrise
      </td>

      <td>
        <img src="https://files.readme.io/cd3f175-Screenshot_2022-04-28_at_10.06.31.png" />
      </td>
    </tr>

    <tr>
      <td>
        Bud Mist
      </td>

      <td>
        <img src="https://files.readme.io/6b32daa-Screenshot_2022-04-28_at_10.06.56.png" />
      </td>
    </tr>

    <tr>
      <td>
        Ballet Slipper
      </td>

      <td>
        <img src="https://files.readme.io/2d88d97-Screenshot_2022-04-28_at_10.07.20.png" />
      </td>
    </tr>

    <tr>
      <td>
        Black Noir
      </td>

      <td>
        <img src="https://files.readme.io/6fccf79-Screenshot_2022-04-28_at_10.07.41.png" />
      </td>
    </tr>
  </tbody>
</Table>

You can also add background colors to your [Screens](doc:screens)

<br />

## Component layout

When using containers to layout your components, the most important setting is *Direction* as this will determine the flow of components.



If you need additional layout you can add additional containers. For example what if we wanted to group 'THREE' and 'FOUR' in column direction, but have an overall row layout for the screen. In this case we need to add a container and nest P3 and P4 like so:


Containers are a really flexible way to arrange your components in the **Design** section. You can nest any number of containers with different styles and layout options.

You may, however be interested in [Using sections](doc:using-sections) or [Field groups](doc:field-groups) to get out-of-the-box layouts.
