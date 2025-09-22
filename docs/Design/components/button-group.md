---
title: Button group
excerpt: Assemble a dedicated group of Button components in one block.
deprecated: false
hidden: true
metadata:
  title: ''
  description: ''
  robots: noindex
next:
  description: ''
---
<Image align="center" width="500px" src="https://files.readme.io/d4afe0a-Screenshot_2023-10-13_at_16.02.37.png" />

## Customizing the Button group

In the **Buttons** section of the settings menu, you can add, remove and reorder your buttons on-the-fly.

<Image align="center" src="https://files.readme.io/c5499b8-Screenshot_2023-10-13_at_15.43.44.png" />

If the layout of the Button group is not quite right, click an entry in the list and drag it to the desired location. The changes will be immediately reflected in the preview.

If you longer have use for a simply click on the **X** to the right and remove it.

### General Button group settings

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
        Buttons
      </td>

      <td>
        Configurable list of all buttons displayed in the group (outlined above)
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
        Change the direction of the buttons nested within your group. You can layout your buttons in a row (→) or a column (↓).
      </td>
    </tr>

    <tr>
      <td>
        Horizontal align
      </td>

      <td>
        The horizontal. align setting is used to align the buttons on the main axis, the direction in which flex-direction has set the flow. The initial value is **left** which will line the items up at the start edge of the group, but you could also set the value to **right** to line them up at the end, or **center** to line them up in the center.  

        You can also use the value **stretch** to take all the spare space between the buttons, and share it out evenly between them so there will be an equal amount of space between each.
      </td>
    </tr>

    <tr>
      <td>
        Vertical align
      </td>

      <td>
        The vertical align property will align the buttons on the cross axis. The initial value is **top** which aligns the items along the top of the container (like they're handing from a roof), but you could also set the value to the **bottom** to align the items along the bottom (like they're standing on the floor), or **middle** to line them up in the center.  

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
        Select the **wrap** to wrap your buttons onto multiple lines. This is critical when designing for mobile resolutions.  

        With **nowrap**, the items are laid out in a single line which may cause the flex container to overflow.
      </td>
    </tr>
  </tbody>
</Table>

## Customizing the Buttons

Clicking on the **Cog** icon on the list will bring up the context menu relevant to the selected field type. In the pop-up modal, you can make fine-grain changes to the configuration for each field.

<Image align="center" src="https://files.readme.io/d4d6ce7-Screenshot_2023-10-13_at_15.50.05.png" />

The buttons in the group are configured in the same way as a standalone [Button](doc:button) component
