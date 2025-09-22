---
title: REST bindings (tutorial)
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
Use bindings to supply additional information to a query at runtime. In this example we have:
- An API endpoint that accepts a status field to filter a list of applications
- A query named *applications*
- An application that supplies data to the bindings of the query
[block:image]
{
  "images": [
    {
      "image": [
        "https://files.readme.io/79188f5-Screenshot_2022-01-04_at_15.19.06.png",
        "Screenshot 2022-01-04 at 15.19.06.png",
        2644,
        1382,
        "#f7f7f7"
      ]
    }
  ]
}
[/block]
&nbsp;

---

&nbsp; 

## Creating a binding
We can create a binding named *status* with a default value of *all*. 
[block:image]
{
  "images": [
    {
      "image": [
        "https://files.readme.io/85475c5-Screenshot_2022-01-04_at_13.31.34_1.png",
        "Screenshot 2022-01-04 at 13.31.34 (1).png",
        1968,
        358,
        "#1a1a1a"
      ]
    }
  ]
}
[/block]
&nbsp;

---

&nbsp; 

## Using a binding
Using handlebars the binding can be referenced throughout the query in the following places:
- URL
- Params
- Headers
- Body
- Transformer

&nbsp;

### Params example
The binding can be used as the value of a param of the same name. While the name can be shared it is not required.
[block:image]
{
  "images": [
    {
      "image": [
        "https://files.readme.io/df1c2e0-Screenshot_2022-01-04_at_13.44.11.png",
        "Screenshot 2022-01-04 at 13.44.11.png",
        2020,
        580,
        "#1b1b1c"
      ]
    }
  ]
}
[/block]
&nbsp;

### Headers example
The binding can be used as the value of a header of the same name. As above the binding and header name may or may not be shared. 
[block:image]
{
  "images": [
    {
      "image": [
        "https://files.readme.io/faddba2-Screenshot_2022-01-04_at_14.52.40.png",
        "Screenshot 2022-01-04 at 14.52.40.png",
        1926,
        348,
        "#1a1a1a"
      ]
    }
  ]
}
[/block]
&nbsp;

### Body example
The binding can be used in any part of the request body. e.g. as the value of a JSON field. 
[block:image]
{
  "images": [
    {
      "image": [
        "https://files.readme.io/2ee1845-Screenshot_2022-01-04_at_15.43.15.png",
        "Screenshot 2022-01-04 at 15.43.15.png",
        1956,
        648,
        "#0d0d0d"
      ]
    }
  ]
}
[/block]
&nbsp;

---

&nbsp; 

## Supplying data to a binding
In our application we have the following structure:
[block:image]
{
  "images": [
    {
      "image": [
        "https://files.readme.io/41aab34-Screenshot_2022-01-04_at_14.48.42.png",
        "Screenshot 2022-01-04 at 14.48.42.png",
        488,
        496,
        "#242424"
      ]
    }
  ]
}
[/block]
&nbsp;

### Form: Status Form
The form will hold the value of our selected status. This is the top-level component so that the value can be accessed by components nested underneath. 
- Type: *Create* 
  - While this form does not create anything, this option is required to indicate that the input schema (the bindings) should be used rather than the schema returned by the query. 
  - Update may also be used to the same effect.
- Schema: *applications* 
  - The input schema of our REST query
[block:image]
{
  "images": [
    {
      "image": [
        "https://files.readme.io/f7c6107-Screenshot_2022-01-04_at_14.58.08.png",
        "Screenshot 2022-01-04 at 14.58.08.png",
        530,
        580,
        "#202020"
      ]
    }
  ]
}
[/block]
&nbsp;

### Options Picker: Picker
We use an options picker in the form to provide our possible status values.
[block:image]
{
  "images": [
    {
      "image": [
        "https://files.readme.io/19e58b0-Screenshot_2022-01-04_at_15.08.57.png",
        "Screenshot 2022-01-04 at 15.08.57.png",
        506,
        1274,
        "#1e1e1e"
      ]
    }
  ]
}
[/block]

[block:image]
{
  "images": [
    {
      "image": [
        "https://files.readme.io/ca6d606-Screenshot_2022-01-04_at_15.13.41.png",
        "Screenshot 2022-01-04 at 15.13.41.png",
        2298,
        534,
        "#1d1d1e"
      ]
    }
  ]
}
[/block]
- Field: status
- Adds the selection to the form under the name *status*
- Options source: *Custom*
  - Custom options are specified using the Define *Options* drawer

&nbsp;

### Data Provider: Applications provider
We use a data provider to run the REST query
[block:image]
{
  "images": [
    {
      "image": [
        "https://files.readme.io/c9b72b2-Screenshot_2022-01-04_at_15.23.23.png",
        "Screenshot 2022-01-04 at 15.23.23.png",
        512,
        442,
        "#202020"
      ]
    }
  ]
}
[/block]
- Data: *applications*
  - The REST query

To link the query bindings to the form we use the bindings drawer:
[block:image]
{
  "images": [
    {
      "image": [
        "https://files.readme.io/26a7a37-Screenshot_2022-01-04_at_15.26.27.png",
        "Screenshot 2022-01-04 at 15.26.27.png",
        3356,
        1582,
        "#666566"
      ]
    }
  ]
}
[/block]
The value of the binding is 
```:
{{ Status form.Fields.status }}
```
 Which represents the status field in our form. 

&nbsp;

---

&nbsp; 

## Conclusion
We are now able to:
- Specify a binding used in a REST query
- Specify where the value of that binding will be used using handlebars
- Create an application that supplies data to the binding and runs the query

&nbsp;