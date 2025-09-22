---
title: Form actions
excerpt: These actions specifically deal with form interaction.
deprecated: false
hidden: true
metadata:
  title: ''
  description: ''
  robots: noindex
next:
  description: ''
  pages:
    - type: basic
      slug: logic-actions
      title: Logic actions
---
## Update Field Value

This action will update the value of a form field with a literal value or <Glossary>Binding</Glossary>.

The *Reset to default value* type will change the value of the chosen field to its <Glossary>Default Value</Glossary>.

![](https://files.readme.io/759ee62-Screenshot_2022-05-09_at_16.41.45.png "Screenshot 2022-05-09 at 16.41.45.png")

## Validate Form

Allows you to validate any form which you've selected from a list of available forms. 

![](https://files.readme.io/4acea22-Screenshot_2023-05-19_at_13.14.44.png)

More on [Form validation](https://docs.budibase.com/docs/form-validation).

## Change Form Step

This along with the [Form step](doc:form-steps#design) component can allow you to break up larger forms into steps, it provides you with the option to enhance a users experience if you so choose. 

This action lets you select the form you wish to change the current step of. It provides a few different options.

![](https://files.readme.io/fa04603-Screenshot_2023-05-19_at_13.21.14.png)

1. `Next step` this simply increments the step of the form by 1.
2. `Previous step` this will decrease the form step by 1.
3. `First step` this sets the form step to the initial step.
4. `Specific step` this adds a new option when selected, which allows you to type in a number that you want the step changed to.\
   ![](https://files.readme.io/8cc0bd4-Screenshot_2023-05-19_at_13.23.02.png)

## Clear Form

This clears whatever form's field values you've assign to it. 

![](https://files.readme.io/5a1fe37-Clear_form_action_demo.gif)

To view this quickly you can add a [Form block](doc:form-block) component eject the block and click the button component contained within. Afterwards, click the `Define actions` button on the far right of the screen within the settings area.  From here you can see a list of pre generated actions one being the clear form action, clicking into this you will be able to see how its setup. Its extremely simple all thats required is selecting the form you wish to perform this action on.

![Showing the pre configured form block component and how it uses the clear form action.](https://files.readme.io/946910d-Screenshot_2023-05-19_at_13.29.02.png)

## On change

Form fields have the ability to trigger an action on change of their value. 

Specifically, [Pickers](doc:pickers) will update on selection, whereas [Text input](https://docs.budibase.com/docs/text-inputs) fields will update on loss of focus.

![](https://files.readme.io/f13e9d1-Screenshot_2022-05-09_at_16.48.42.png "Screenshot 2022-05-09 at 16.48.42.png")

In addition, there is a convenient <Glossary>Binding</Glossary> `{{ Field Value }}` which represents the value of the trigger form field.
