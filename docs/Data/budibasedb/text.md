---
title: Text
excerpt: This topic describes the string/text data types, supported in Budibase
deprecated: false
hidden: false
metadata:
  title: ''
  description: ''
  robots: noindex
next:
  description: ''
  pages:
    - type: basic
      slug: bindings
      title: Bindings
    - type: basic
      slug: repeater
      title: Repeater
---
The text data type stores a string of UTF-8 characters. A text column is a good choice if you want to store data like names or addresses It is a common data type and one you are more than likely going to use.

***

## Creating a text column

The process for creating a text column takes a few seconds.

1. First, click the `Create column` button.
2. Give your text column a name - such as 'Name'.
3. By default the text data type will be selected; so there's no need to change it.
4. Click `Save Column`.

***

## Using the text data type

In the Design section, will be able to use a variety of components for [Displaying text](doc:displaying-text), as well as a number of form [Text inputs](doc:text-inputs) for accepting user input.

***

## Convertible types

The text data type can be converted into another related type. 

<Image alt="Changing the Text type" align="center" src="https://files.readme.io/6d1161e-Screenshot_2023-02-10_at_13.57.29.png">
  Changing the Text type
</Image>

The most common reason to change the type of a text column will be to make it compatible with one of the following [Form](doc:forms) components:

* [Options picker](doc:option-picker)
* [Long Form Field](https://docs.budibase.com/docs/text-inputs#long-form-field)
* [Barcode/QR Field](doc:barcodeqr-field)

<br />

### Options

<Image alt="Options type" align="center" src="https://files.readme.io/0eabb7e-Screenshot_2023-02-10_at_14.04.49.png">
  Options type
</Image>

Allows a single value to be chosen from a dropdown of options. 

> 📘
>
> Any existing text value will be kept, however it will appear as a *null* in the dropdown.

<Image alt="Selecting an option" align="center" src="https://files.readme.io/cca9391-Screenshot_2023-02-10_at_14.07.55.png">
  Selecting an option
</Image>

<br />

### Long Form Text

<Image alt="Long form text type" align="center" src="https://files.readme.io/e48cadb-Screenshot_2023-02-10_at_15.07.44.png">
  Long form text type
</Image>
