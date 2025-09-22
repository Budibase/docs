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

![1766](https://files.readme.io/89b2dc7-stat-cards.png "stat-cards.png")

All three label properties (Title, Value, Label) support [Bindings](doc:bindings) through Handlebars or JavaScript functions. In the example above you can see this demonstrated in a mixture of ways, there's a calculation happening on an average latitude, there's a number of rows displayed from the database, and there's the current user's `firstname` displayed as the title. 

## Adding a Stat Card

The Stat Card is located under `Card > Stat Card` in the Budibase design section. A wrapping [Data Provider](doc:data-provider) is not required as the Stat Card can also display information about the user, or run JavaScript functions. However, if you want to display data from <Glossary>Data Sources</Glossary> you'll need to add the Stat Card as a child of a [Data Provider](doc:data-provider) that has the Data Source connected.

![235](https://files.readme.io/b537f92-add-stat-card.png "add-stat-card.png")

## Displaying Data

If you want to display data in a Stat Card, you can use [Bindings](doc:bindings) in the <Glossary>Settings Panel</Glossary>. There are three values you can set using Bindings.

<Table align={["left","left"]}>
  <thead>
    <tr>
      <th>
        Setting
      </th>

      <th>
        Description
      </th>
    </tr>
  </thead>

  <tbody>
    <tr>
      <td>
        Title
      </td>

      <td>
        The top-most text on the card
      </td>
    </tr>

    <tr>
      <td>
        Value
      </td>

      <td>
        The middle text in blue, which is also the biggest text on the card.
      </td>
    </tr>

    <tr>
      <td>
        Label
      </td>

      <td>
        The descriptor on the bottom of the card, which is the smallest
      </td>
    </tr>
  </tbody>
</Table>
