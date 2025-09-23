---
title: Buttons
excerpt: >-
  Buttons allow users to perform an action or to navigate to another page. They
  have multiple styles for various needs and are ideal for calling attention to
  where a user needs to do something to move forward in a flow.
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
      slug: actions
      title: Actions
---
# Button

Use the button component to encourage users to take action and make choices with a single click or tap. The Button component requires text and an [Action](doc:actions) . 

<Image align="center" src="https://files.readme.io/4a99b998eb058fe42d7694373dc76246ad5a0d67d505f413d73b4062d4c4c41e-Screenshot_2025-08-19_at_13.45.59.png" />

## Customizing the button

| Setting  | Description                                                                                                                                                                  |
| :------- | :--------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| Name     | Rename how the component reads in the tree.                                                                                                                                  |
| Text     | Update the button text                                                                                                                                                       |
| Variant  | Budibase buttons come in a number of different variants including, Action, Primary, Secondary, Warning, and Over Background (for colored backgrounds).                       |
| Size     | Change the size of the button (Medium and Large)                                                                                                                             |
| Quiet    | Whether the button should be displayed with a quiet style.                                                                                                                   |
| Disabled | Whether the button is disabled.                                                                                                                                              |
| On Click | Clicking this button will bring up the Actions panel. In the Actions panel, you can configure and chain [Actions](doc:actions) in response to a user clicking on the button. |

## Adding buttons to table rows

Click on the table component in your component tree and scroll to the bottom of the settings side panel on the right of your screen. You should see an Add button button. Click this to add your first button. This will then work similarly to the Button group component discussed below.

<Image align="center" src="https://files.readme.io/9183e3af16bbd5ff08560453879ea6664ca9679e9dae00dd1def2e9dbfa21a43-Screenshot_2025-08-19_at_13.47.53.png" />

# Button Group

<Image align="center" width="250px" src="https://files.readme.io/8a4918f84ca11c72159b79f8d536df90708cdf9fd62a05edb2bf2031fa8905ad-Screenshot_2025-08-21_at_10.15.21.png" />

The Button Group component behaves in much the same way as a single Button component, with the added benefit of being able to configure and style multiple buttons at once. Adding a new button here will create a new button in just the same way as a Button component on it's own, but it will be part of this group. We can configure the button's actions and appearance using the cog-icon in the list of buttons. We can also drag-and-drop using the grab-handle (dots) to the left of the cog, to re-order the buttons, which will change the order they appear on the screen, as well as in the list.

<Image align="center" src="https://files.readme.io/2cf68b1413eb44baad6e284aed44929dd201ea88ba928ac3dbca9af2736c23aa-Screenshot_2025-08-19_at_14.22.49.png" />

You could use Button Groups in Form components, offering a variety of options for the user, which are managed and styled from one place.

![](https://files.readme.io/1510198-image.png)
