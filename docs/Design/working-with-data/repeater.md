---
title: Repeater
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
The repeater component is used to loop over your data. Every child of your repeater will thus be repeated for every row in the data provider that you have selected.

To get started with it, you must add it as a child of a [Data provider](doc:data-provider) and in the settings, select that data provider. You can then add your components and get started. An example structure can be seen below:

![](https://files.readme.io/5e74e3c-data-provider-repeater-example.png "data-provider-repeater-example.png")

<br />

## Settings

A repeater acts like a container for each of your data rows. With this in mind it shares many of the settings found in the [Container](https://docs.budibase.com/docs/container) component. 

![](https://files.readme.io/ccbf7fa-align.png)

There is also an option for choosing a message to display if no rows are present:

![](https://files.readme.io/f998abd-no_rows.png)

![](https://files.readme.io/fb8dfee-Screenshot_2022-10-07_at_17.57.18.png)

<br />

## Example: Edit screen

One important role of the Repeater component is to facilitate edit screens. Typically within an edit screen you want to fill out some form data for a single existing record.

Let's explore this further.

<Image alt="Edit screen component tree" align="center" src="https://files.readme.io/04560d0-Screenshot_2022-11-04_at_10.50.44.png">
  Edit screen component tree
</Image>

1. The [Data provider](https://docs.budibase.com/docs/data-provider) has a filter that returns all rows that match the URL id.\
   See more on [URL variables](doc:url-parameters)

![](https://files.readme.io/875aaa9-Screenshot_2022-11-04_at_10.56.13.png)

2. As a data provider will always return an array of results, the Repeater is added to loop over the array - in this case one entry if filtered correctly.

3. Finally the form is configured with the *Update* [form type](https://docs.budibase.com/docs/forms#form-type) so that the form fields are pre-populated with data from the Repeater.

![](https://files.readme.io/209ea9a-Screenshot_2022-11-04_at_11.12.27.png)
