---
title: Stat Card
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
The `Stat Card` component is a really simple UI element to quickly display a number from a database, calculated or hardcoded in a card format, allowing you do display some quick data.
[block:image]
{
  "images": [
    {
      "image": [
        "https://files.readme.io/89b2dc7-stat-cards.png",
        "stat-cards.png",
        1766,
        382,
        "#eef0f2"
      ]
    }
  ]
}
[/block]
All three label properties (Title, Value, Label) support [Bindings](doc:bindings) through Handlebars or JavaScript functions. In the example above you can see this demonstrated in a mixture of ways, there's a calculation happening on an average latitude, there's a number of rows displayed from the database, and there's the current user's `firstname` displayed as the title. 
[block:api-header]
{
  "title": "Adding a Stat Card"
}
[/block]
The Stat Card is located under `Card > Stat Card` in the Budibase design section. A wrapping [Data Provider](doc:data-provider) is not required as the Stat Card can also display information about the user, or run JavaScript functions. However, if you want to display data from <<glossary:Data Sources>> you'll need to add the Stat Card as a child of a [Data Provider](doc:data-provider) that has the Data Source connected.
[block:image]
{
  "images": [
    {
      "image": [
        "https://files.readme.io/b537f92-add-stat-card.png",
        "add-stat-card.png",
        235,
        218,
        "#2c2c2d"
      ]
    }
  ]
}
[/block]

[block:api-header]
{
  "title": "Displaying Data"
}
[/block]
If you want to display data in a Stat Card, you can use [Bindings](doc:bindings) in the <<glossary:Settings Panel>>. There are three values you can set using Bindings.
[block:parameters]
{
  "data": {
    "h-0": "Setting",
    "h-1": "Description",
    "0-0": "Title",
    "1-0": "Value",
    "2-0": "Label",
    "0-1": "The top-most text on the card",
    "1-1": "The middle text in blue, which is also the biggest text on the card.",
    "2-1": "The descriptor on the bottom of the card, which is the smallest"
  },
  "cols": 2,
  "rows": 3
}
[/block]