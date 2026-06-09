---
title: Displaying text
excerpt: Looking at the different components for display static or dynamic text
deprecated: false
hidden: false
metadata:
  title: ''
  description: ''
  robots: index
next:
  description: ''
---
Presenting text content in a structured and readable format is crucial for user experience. Budibase has in the past used several UI components for text, such as Paragraph, Headline, and a Markdown Viewer for displaying text. These three components are combined into one super-flexible "Text" component.

## Text


The Text component is capable of displaying text passed to it in the simplest fashion. However, it also supports [Markdown](https://en.wikipedia.org/wiki/Markdown), making it an exceptionally powerful tool for customising text.

<br />

## Markdown viewer (deprecated)

The Markdown viewer component is similar to the paragraph element. It can display text in your application. But the difference is, that it can render markdown. It is really useful to display text coming from any markdown source, including the [Long Form Field](doc:long-form-field) element.


The *Markdown Viewer* component has full support of all markdown elements as displayed above, including headers, images and tables. 


From the <Glossary>Settings Panel</Glossary> you can configure the value of the markdown viewer element, where you can also use [Bindings](doc:bindings).

<br />

### Markdown viewer (Deprecated)

The Markdown viewer component is similar to the paragraph element. It can display text in your application. But the difference is, that it can render markdown. It is really useful to display text coming from any markdown source, including the [Long Form Field](doc:long-form-field) element.


The *Markdown Viewer* component has full support of all markdown elements as displayed above, including headers, images and tables. 


From the <Glossary>Settings Panel</Glossary> you can configure the value of the markdown viewer element, where you can also use [Bindings](doc:bindings).

<br />

### Paragraph (Deprecated)

The Paragraph component displays text inside your application. It's the `<p>` equivalent in `html`. But of course it supports [Bindings](doc:bindings) so you can render any text you like from any of the available  <Glossary>Datasource</Glossary> or [JavaScript](doc:javascript) functions.


Then, you can use [Bindings](doc:bindings) within the *Text* setting in the <Glossary>Settings Panel</Glossary>, or simply enter static text by just typing in the box, or some combination of both.

For example, you may want to display the total number of rows coming back from a [Data provider](doc:data-provider).


Paragraphs also support newlines:

<Table align={["left","left"]}>
  <thead>
    <tr>
      <th>
        Text binding
      </th>

      <th>
        Design view
      </th>
    </tr>
  </thead>

  <tbody>
    <tr>
      <td>
      </td>

      <td>
      </td>
    </tr>
  </tbody>
</Table>

### Customizing text styling

The Paragraph component has several ways of styling the text using the <Glossary>Settings Panel</Glossary>.

| Setting               | Description                                                                            |
| :-------------------- | :------------------------------------------------------------------------------------- |
| Size                  | The size of the text, choose from several presets ranging from `extra small` to `3XL`. |
| Color                 | Change the color of the text. Press the `X` on the bottom to reset to default.         |
| Bold/Italic/Underline | Adds the respective bold, italic and underline styling. Can be combined.               |
| Alignment             | The alignment of the text. Choose between left, right, center and justify.             |

### Headline (deprecated)

The Headline component is identical to the Paragraph component, with the simple caveat that the sizes are three ahead.

For example a *Medium* Headline is the equivalent of a *2XL* Paragraph.


<br />

## Related components

There are a number of other components that can display text, on top of the additional functionality they provide. 

These include:

* [Button](doc:button)
* [Card](doc:card)
* [Embed](doc:embed)
* [Link](doc:link)
* [Stat Card](doc:stat-card)
* [Tag](doc:tag)
* [Text inputs](doc:text-inputs)
