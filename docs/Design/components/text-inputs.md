---
title: Text inputs
excerpt: Form fields that require key-press input
deprecated: false
hidden: false
metadata:
  title: ''
  description: ''
  robots: index
next:
  description: ''
---
In Budibase there are a number of fields that require user key-press input. They are:

* JSON field
* Long form field
* Number field
* Password field
* Text field

<br />

## Adding text inputs

In all cases these components must be nested within a [Form](doc:forms) component. 

Within the component panel of your screen click `Add component` and select the Form component.

Next click on the form component that was just added, then click add component again. This will ensure that the field will be nested inside the form once added, however you can also drag orphan input fields into your form if needed. 

When looking for a key-press input, a handy tip is to search for the word 'field'. 

<Image alt="Search for and select a field to add" align="center" src="https://files.readme.io/467538f-Screenshot_2022-12-13_at_09.23.08.png">
  Search for and select a field to add
</Image>

<Image alt="Example form component tree" align="center" src="https://files.readme.io/662a3ae-Screenshot_2022-12-13_at_13.20.18.png">
  Example form component tree
</Image>

Finally, for an input to be useable, it must be given a field name. If the form has been given a [schema](https://docs.budibase.com/docs/forms#form-schema), then you will be able to select from a list of type matched fields. Alternatively you can manually enter a field name.

<Image alt="Selecting a field from the form schema" align="center" src="https://files.readme.io/e855b31-Screenshot_2022-12-13_at_13.21.32.png">
  Selecting a field from the form schema
</Image>

<Image alt="Fields are now visible" align="center" src="https://files.readme.io/ba34515-Screenshot_2022-12-13_at_13.22.37.png">
  Fields are now visible
</Image>

<br />

## Using form blocks

When using a [Form block](doc:form-block) the field components are not directly accessible. If you want to edit the field components, then you will need to [Eject](https://docs.budibase.com/docs/blocks#ejecting-blocks) the form block.

Otherwise, Budibase will match the [Data type](https://docs.budibase.com/docs/budibasedb#data-types) of the field to a corresponding field component. Most commonly this will be the **Text field** and **Number field**, however it could also be the **JSON field** for the [JSON](doc:json) data type, among others.

<br />

## Common settings

All of the key-press inputs share common settings, which are presented in the reference table below.

| Setting       | Description                                                                                                                                            |
| :------------ | :----------------------------------------------------------------------------------------------------------------------------------------------------- |
| Field         | Connected field from the parent [Form](doc:forms) element, or custom by typing in a field name.                                                        |
| Label         | The text visible to the user next to the input box as a descriptor of the field.                                                                       |
| Placeholder   | The text displayed in a lighter tint inside the input box. Will only display when nothing is entered in the field.                                     |
| Default Value | On initial load of the form the field will be pre-filled with specified default value. Entering this will also prevent the `placeholder` from showing. |
| Disabled      | When checked, disables the field; the user cannot change the value.                                                                                    |

### On change

Allows you to specify [Actions](doc:actions) to be triggered when the input field changes value. Specifically this event is triggered when the user presses the tab key or clicks off the field (on blur), or if the user pressed the enter key.

When using the field value as a <Glossary>Binding</Glossary>, make sure to use the current field value. For example, you may want to use the first name value in an on change action:

<Image alt="Select the field that triggered the on change" align="center" src="https://files.readme.io/15a969f-Screenshot_2022-12-13_at_11.37.18.png">
  Select the field that triggered the on change
</Image>

<Image alt="Select Field Value; i.e. the on change value" align="center" src="https://files.readme.io/c72ca4d-Screenshot_2022-12-13_at_11.37.28.png">
  Select Field Value; i.e. the on change value
</Image>

> 👍 `{{ Field Value }}`
>
> Gets the current field value.

> ❗️ `{{ Form.Fields.First Name }}`
>
> Will get the previous value; before the on change was triggered.

### Configure validation

Allows you to configure custom validation rules for the input field.\
See more about [Form validation](doc:form-validation).

<br />

## Text field

The text field allows users to enter inline text. This is the most common text input.

It is compatible with the [Text](doc:text) data type.

<Image width="smart" src="https://files.readme.io/1b3802d-textfield.png" />

<br />

## Number field

Allows users to enter whole or decimal numbers. 

It is compatible with the [Number](doc:number) data type.

![](https://files.readme.io/8fb7f67-number-field.png "number-field.png")

<br />

## Password field

Same as the text field, however it hides the text being entered. 

Any binding of the field value will be in plain text, and Budibase does not perform any hashing by default on password fields when saving rows.

![](https://files.readme.io/6e13376-password-field.png "password-field.png")

<br />

## Long form field

The long form field is a text field that allows for longer and multiline input. 

![](https://files.readme.io/65fabc6-long-form-field.png "long-form-field.png")

You can also enable rich-text editing with markdown support by selecting `Rich text` in the formatting setting.

<Image alt="Selecting rich text formatting" align="center" src="https://files.readme.io/a678858-Screenshot_2022-12-13_at_12.51.32.png">
  Selecting rich text formatting
</Image>

![](https://files.readme.io/f3b6ce5-long-form-markdown.png "long-form-markdown.png")

Usually when [importing a table from CSV](https://docs.budibase.com/docs/budibasedb#csv-upload) or [fetching SQL tables](https://docs.budibase.com/docs/sql-datasource#fetching-tables) string data types will automatically be assigned as a Text type. 

If you want to support the long form field, then you will need to [edit column](https://docs.budibase.com/docs/budibasedb#editing-columns) and change the type.

<Image alt="Allowing the address to be multi-line" align="center" src="https://files.readme.io/6274658-Screenshot_2022-12-13_at_13.00.42.png">
  Allowing the address to be multi-line
</Image>

<br />

## JSON field

The JSON field allows you to enter [JSON](doc:json) into resizable box with formatting enabled.

![](https://files.readme.io/8fec4ee-json-box_Medium.jpeg "json-box Medium.jpeg")
