---
title: Custom CSS
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
All [Components](doc:components), including [Screens](doc:screens), have the option to add custom css. 

To do so, click on a component, and in the <<glossary:Settings Panel>> click on the _Styles_ tab. Finally click on the  _Edit custom CSS_ button

![](https://files.readme.io/ea72d9a-Screenshot_2023-07-04_at_14.17.18.png)

This will present a box in which you can enter CSS for the selected component.  
For example:

![](https://files.readme.io/82dd3a4-Screenshot_2023-07-04_at_14.21.30.png)

> 🚧 Inline CSS
> 
> Selectors cannot be used here, and you must enter inline CSS.

## Global styling

If you are determined to apply your own style to the entire screen, you can achieve this through an [Embed](doc:embed) component.

This will allow you to add a `<style>` tag with CSS selectors, but this will apply to the entire page regardless of where you place the Embed component. 

To inject the style, add the Embed component and click on the lightning bolt icon:

![](https://files.readme.io/4af3e59-Screenshot_2023-07-04_at_14.24.23.png)

This will open a drawer in which you can enter the style:

![](https://files.readme.io/c70860d-Screenshot_2023-07-04_at_14.23.49.png)

This CSS code above demonstrates how to use a class selector, but the **button** element selector could be interchanged.

As Budibase uses the Spectrum design system, you can see the list of available classes here: <https://opensource.adobe.com/spectrum-css/get-started.html>

Alternatively, you can right-click and inspect the elements.  

> 🚧 !Important
> 
> To override the existing styles, the important tags must be added.  
> This will also override the styles of the builder UI itself, so it is advisable to use component level custom CSS to avoid conflicts.

The end result is that you are able to style many elements without needing to duplicate the CSS:

[block:image]{"images":[{"image":["https://files.readme.io/708a7ba73bcb9cc860b31668f3ed13217d90bfa66e2be26a9adf29a48b6a75d6-Screenshot_2024-09-12_at_11.50.30.png","Screenshot 2022-05-12 at 10.40.30.png",null],"align":"center"}]}[/block]

## Bindings

If you need to dynamically set styling, you can do that through the use of a <<glossary:Binding>>.

For example, you could set the background color of a container, via _Custom CSS_ based on [App state](doc:app-state) as follows:

![](https://files.readme.io/4388466-Screenshot_2023-07-04_at_14.27.11.png)

Alternatively you can set styling through [Conditional UI](doc:conditions). 

![](https://files.readme.io/0bcbe55-Screenshot_2022-10-17_at_08.24.22.png)