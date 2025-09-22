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

* An API endpoint that accepts a status field to filter a list of applications
* A query named *applications*
* An application that supplies data to the bindings of the query

![](https://files.readme.io/79188f5-Screenshot_2022-01-04_at_15.19.06.png "Screenshot 2022-01-04 at 15.19.06.png")

 

***

  

## Creating and using bindings

We can create a binding named *status* with a default value of *all*. 

![](https://files.readme.io/85475c5-Screenshot_2022-01-04_at_13.31.34_1.png "Screenshot 2022-01-04 at 13.31.34 (1).png")

 

Using handlebars the binding can be referenced throughout the query in the following places:

* URL
* Params
* Headers
* Body
* Transformer

 

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

You may wish to populate <Glossary>Default Value</Glossary>s with the properties of your GET query, or allow users to submit form data via a POST query.

Learn more about [Bindings in forms](doc:form-bindings).

 

***

## Video tutorial

<Embed url="https://www.youtube.com/watch?v=uch3bOftxHU" title="From REST API to CRUD app in minutes | Budibase | REST API" favicon="https://www.google.com/favicon.ico" image="https://i.ytimg.com/vi/uch3bOftxHU/hqdefault.jpg" provider="youtube.com" href="https://www.youtube.com/watch?v=uch3bOftxHU" typeOfEmbed="youtube" html="%3Ciframe%20class%3D%22embedly-embed%22%20src%3D%22%2F%2Fcdn.embedly.com%2Fwidgets%2Fmedia.html%3Fsrc%3Dhttps%253A%252F%252Fwww.youtube.com%252Fembed%252Fuch3bOftxHU%253Ffeature%253Doembed%26display_name%3DYouTube%26url%3Dhttps%253A%252F%252Fwww.youtube.com%252Fwatch%253Fv%253Duch3bOftxHU%26image%3Dhttps%253A%252F%252Fi.ytimg.com%252Fvi%252Fuch3bOftxHU%252Fhqdefault.jpg%26key%3D7788cb384c9f4d5dbbdbeffd9fe4b92f%26type%3Dtext%252Fhtml%26schema%3Dyoutube%22%20width%3D%22854%22%20height%3D%22480%22%20scrolling%3D%22no%22%20title%3D%22YouTube%20embed%22%20frameborder%3D%220%22%20allow%3D%22autoplay%3B%20fullscreen%22%20allowfullscreen%3D%22true%22%3E%3C%2Fiframe%3E" />
