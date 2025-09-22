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
- A query named _applications_
- An application that supplies data to the bindings of the query

![](https://files.readme.io/79188f5-Screenshot_2022-01-04_at_15.19.06.png "Screenshot 2022-01-04 at 15.19.06.png")

 

***

  

## Creating a binding

We can create a binding named _status_ with a default value of _all_. 

![](https://files.readme.io/85475c5-Screenshot_2022-01-04_at_13.31.34_1.png "Screenshot 2022-01-04 at 13.31.34 (1).png")

 

***

  

## Using a binding

Using handlebars the binding can be referenced throughout the query in the following places:

- URL
- Params
- Headers
- Body
- Transformer

 

### Params example

The binding can be used as the value of a param of the same name. While the name can be shared it is not required.

![](https://files.readme.io/df1c2e0-Screenshot_2022-01-04_at_13.44.11.png "Screenshot 2022-01-04 at 13.44.11.png")

 

### Headers example

The binding can be used as the value of a header of the same name. As above the binding and header name may or may not be shared. 

![](https://files.readme.io/faddba2-Screenshot_2022-01-04_at_14.52.40.png "Screenshot 2022-01-04 at 14.52.40.png")

 

### Body example

The binding can be used in any part of the request body. e.g. as the value of a JSON field. 

![](https://files.readme.io/2ee1845-Screenshot_2022-01-04_at_15.43.15.png "Screenshot 2022-01-04 at 15.43.15.png")

 

***

  

## Supplying data to a binding

In our application we have the following structure:

![](https://files.readme.io/41aab34-Screenshot_2022-01-04_at_14.48.42.png "Screenshot 2022-01-04 at 14.48.42.png")

 

### Form: Status Form

The form will hold the value of our selected status. This is the top-level component so that the value can be accessed by components nested underneath. 

- Type: _Create_ 
  - While this form does not create anything, this option is required to indicate that the input schema (the bindings) should be used rather than the schema returned by the query. 
  - Update may also be used to the same effect.
- Schema: _applications_ 
  - The input schema of our REST query

![](https://files.readme.io/f7c6107-Screenshot_2022-01-04_at_14.58.08.png "Screenshot 2022-01-04 at 14.58.08.png")

 

### Options Picker: Picker

We use an options picker in the form to provide our possible status values.

![](https://files.readme.io/19e58b0-Screenshot_2022-01-04_at_15.08.57.png "Screenshot 2022-01-04 at 15.08.57.png")

![](https://files.readme.io/ca6d606-Screenshot_2022-01-04_at_15.13.41.png "Screenshot 2022-01-04 at 15.13.41.png")

- Field: status
- Adds the selection to the form under the name _status_
- Options source: _Custom_
  - Custom options are specified using the Define _Options_ drawer

 

### Data Provider: Applications provider

We use a data provider to run the REST query

![](https://files.readme.io/c9b72b2-Screenshot_2022-01-04_at_15.23.23.png "Screenshot 2022-01-04 at 15.23.23.png")

- Data: _applications_
  - The REST query

To link the query bindings to the form we use the bindings drawer:

![](https://files.readme.io/26a7a37-Screenshot_2022-01-04_at_15.26.27.png "Screenshot 2022-01-04 at 15.26.27.png")

The value of the binding is 

```:
{{ Status form.Fields.status }}
```

 Which represents the status field in our form. 

 

***

  

## Conclusion

We are now able to:

- Specify a binding used in a REST query
- Specify where the value of that binding will be used using handlebars
- Create an application that supplies data to the binding and runs the query

 

***



## Video tutorial




[block:embed]
{
  "html": "<iframe class=\"embedly-embed\" src=\"//cdn.embedly.com/widgets/media.html?src=https%3A%2F%2Fwww.youtube.com%2Fembed%2Fuch3bOftxHU%3Ffeature%3Doembed&display_name=YouTube&url=https%3A%2F%2Fwww.youtube.com%2Fwatch%3Fv%3Duch3bOftxHU&image=https%3A%2F%2Fi.ytimg.com%2Fvi%2Fuch3bOftxHU%2Fhqdefault.jpg&key=7788cb384c9f4d5dbbdbeffd9fe4b92f&type=text%2Fhtml&schema=youtube\" width=\"854\" height=\"480\" scrolling=\"no\" title=\"YouTube embed\" frameborder=\"0\" allow=\"autoplay; fullscreen\" allowfullscreen=\"true\"></iframe>",
  "url": "https://www.youtube.com/watch?v=uch3bOftxHU",
  "title": "From REST API to CRUD app in minutes | Budibase | REST API",
  "favicon": "https://www.google.com/favicon.ico",
  "image": "https://i.ytimg.com/vi/uch3bOftxHU/hqdefault.jpg",
  "provider": "https://www.youtube.com/",
  "href": "https://www.youtube.com/watch?v=uch3bOftxHU",
  "typeOfEmbed": "youtube"
}
[/block]