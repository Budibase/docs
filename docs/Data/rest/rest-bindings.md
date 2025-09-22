---
title: REST bindings (tutorial)
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
Use bindings to supply additional information to a query at runtime. In this example we have:

- An API endpoint that accepts a status field to filter a list of applications
- A query named _applications_
- An application that supplies data to the bindings of the query

[block:image]
{
  "images": [
    {
      "image": [
        "https://files.readme.io/eb77b4bc42b2eb78fa6739e3fd477ed0986596caeef009b44c08ee75a11629f1-Screenshot_2024-12-12_at_12.22.21.png",
        "Screenshot 2022-01-04 at 15.19.06.png",
        null
      ],
      "align": "center"
    }
  ]
}
[/block]


 

***

  

## Creating and using bindings

We can create a binding named _status_ with a default value of _all_. 

![](https://files.readme.io/85475c5-Screenshot_2022-01-04_at_13.31.34_1.png "Screenshot 2022-01-04 at 13.31.34 (1).png")

 

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

  

## Using REST queries in forms

You may wish to populate <<glossary:Default Value>>s with the properties of your GET query, or allow users to submit form data via a POST query.

Learn more about [Bindings in forms](doc:form-bindings).

 

***

## Video tutorial

[block:embed]
{
  "html": "<iframe class=\"embedly-embed\" src=\"//cdn.embedly.com/widgets/media.html?src=https%3A%2F%2Fwww.youtube.com%2Fembed%2Fuch3bOftxHU%3Ffeature%3Doembed&display_name=YouTube&url=https%3A%2F%2Fwww.youtube.com%2Fwatch%3Fv%3Duch3bOftxHU&image=https%3A%2F%2Fi.ytimg.com%2Fvi%2Fuch3bOftxHU%2Fhqdefault.jpg&key=7788cb384c9f4d5dbbdbeffd9fe4b92f&type=text%2Fhtml&schema=youtube\" width=\"854\" height=\"480\" scrolling=\"no\" title=\"YouTube embed\" frameborder=\"0\" allow=\"autoplay; fullscreen\" allowfullscreen=\"true\"></iframe>",
  "url": "https://www.youtube.com/watch?v=uch3bOftxHU",
  "title": "From REST API to CRUD app in minutes | Budibase | REST API",
  "favicon": "https://www.google.com/favicon.ico",
  "image": "https://i.ytimg.com/vi/uch3bOftxHU/hqdefault.jpg",
  "provider": "youtube.com",
  "href": "https://www.youtube.com/watch?v=uch3bOftxHU",
  "typeOfEmbed": "youtube"
}
[/block]