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
In Budibase several fields require user key-press input. They are:

* JSON field
* Long form field
* Number field
* Password field
* Text field
* BigInt field

## Adding text inputs

In all cases these components must be nested within a [Form](doc:forms) component.

Within the component panel of your screen click `Add component` and select the Form component.

Next click on the form component that was just added, then click add component again. This will ensure that the field will be nested inside the form once added, however you can also drag orphan input fields into your form if needed.

When looking for a key-press input, a handy tip is to search for the word 'field'.



Finally, for an input to be useable, it must be given a field name. If the form has been given a [schema](https://docs.budibase.com/docs/forms#form-schema), you will be able to select from a list of type-matched fields. Alternatively, you can manually enter a field name.



## Using form blocks

When using a [Form block](doc:form-block) the field components are not directly accessible. If you want to edit the field components, then you will need to [Eject](https://docs.budibase.com/docs/blocks#ejecting-blocks) the form block.

Otherwise, Budibase will match the [Data type](https://docs.budibase.com/docs/budibasedb#data-types) of the field to a corresponding field component. Most commonly this will be the **Text field** and **Number field**, however it could also be the **JSON field** for the [JSON](doc:json) data type, among others.

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



> 👍 `{{ Field Value }}`
>
> Gets the current field value.

> ❗️ `{{ Form.Fields.First Name }}`
>
> Will get the previous value; before the on change was triggered.

<br />

### Run on input

Triggers the same Actions on input events (_typing, paste, barcode scans_) as the value changes, rather than waiting for the change event. Available for Text, Number, BigInt, Password, and Image fields where an input event is emitted.


<br />

### Configure validation

Allows you to configure custom validation rules for the input field.  
See more about [Form validation](doc:form-validation).

## Text field

The text field allows users to enter inline text. This is the most common text input.

It is compatible with the [Text](doc:text) data type.


## Number field

Allows users to enter whole or decimal numbers.

It is compatible with the [Number](doc:number) data type.


## Password field

Same as the text field, however it hides the text being entered.

Any binding of the field value will be in plain text, and Budibase does not perform any hashing by default on password fields when saving rows.


## Long form field

The long form field is a text field that allows for longer and multiline input.


You can also enable rich-text editing with markdown support by selecting `Rich text` in the formatting setting.



Usually when [importing a table from CSV](https://docs.budibase.com/docs/budibasedb#csv-upload) or [fetching SQL tables](https://docs.budibase.com/docs/sql-datasource#fetching-tables) string data types will automatically be assigned as a Text type.

If you want to support the long form field, then you will need to [edit column](https://docs.budibase.com/docs/budibasedb#editing-columns) and change the type.


## JSON field

The JSON field allows you to enter [JSON](doc:json) into resizable box with formatting enabled.


## BigInt field

This is a data type in databases used to store very large integer values. It is commonly used when the range of values needed exceeds the limits of the standard INT data type.

In most systems, an INT field typically supports values from -2,147,483,648 to 2,147,483,647, but a BIGINT field can handle a much larger range. It ensures you can store these values without overflow errors.

This is useful when working with large datasets e.g. financial records, large IDs, or when performing mathematical computations that result in large numbers.
