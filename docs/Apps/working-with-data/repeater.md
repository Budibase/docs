---
title: Repeater
excerpt: ''
deprecated: false
hidden: false
metadata:
  title: ''
  description: kba_5hc3m
  robots: index
next:
  description: ''
---
The repeater component is used to loop over your data. Every child of your repeater will thus be repeated for every row in the data provider that you have selected.

To get started with it, you must add it as a child of a [Data provider](doc:data-provider) and in the settings, select that data provider. You can then add your components and get started. An example structure can be seen below:

<Image align="center" src="https://files.readme.io/225ade12c8fa2107a9ac4b526c6ac6be5c67f6dee06b05fa97f889d70c1961e1-Screenshot_2025-08-15_at_16.17.10.png" />

<br />

## Settings

A repeater acts like a container for each of your data rows. With this in mind, it shares many of the settings found in the [Container](https://docs.budibase.com/docs/container) component. 

![](https://files.readme.io/e896a6cece94c793310a08a258b4297932b53f44af26d1bcffe5dd1631c46366-image.png)

<Image align="center" src="https://files.readme.io/c6d9067e518ece2ab1e00948d1ea4c8532611d991b76d5d1d198575748ec02ae-Screenshot_2024-10-24_at_12.08.43.png" />

There is also an option for choosing a message to display if no rows are present:

<br />

![](https://files.readme.io/fb8dfee-Screenshot_2022-10-07_at_17.57.18.png)

<br />

## Example: Edit screen

One important role of the Repeater component is to facilitate edit screens. Typically within an edit screen you want to fill out some form data for a single existing record.

Let's explore this further.

<Image alt="Edit screen component tree" align="center" src="https://files.readme.io/934c151f0ca8b4f57797aaa003bfb88137189a6f5d6f4511b153ef141600fe08-Screenshot_2024-10-24_at_12.56.02.png">
  Edit screen component tree
</Image>

1. The [Data provider](https://docs.budibase.com/docs/data-provider) has a filter that returns all rows that match the URL id.\
   See more on [URL variables](doc:url-parameters)

<Image align="center" src="https://files.readme.io/0d685e37d97c67cd4a6156702a0e70e2487eed840d7703ec8838a96553ae2668-Screenshot_2025-08-18_at_09.42.44.png" />

2. As a data provider will always return an array of results, the Repeater is added to loop over the array - in this case one entry if filtered correctly.

3. Finally the form is configured with the *Update* [form type](https://docs.budibase.com/docs/forms#form-type) so that the form fields are pre-populated with data from the Repeater.

<Image align="center" src="https://files.readme.io/47e470e6f38384242004b4b27b9feeb276cc72878400c2faf7434758366c0c9f-Screenshot_2025-08-18_at_09.46.47.png" />