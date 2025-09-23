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

<Image align="center" src="https://files.readme.io/d530fe82abfd46aad222f321f98374461ba108637f6fc2663761b9668bcffa96-Screenshot_2025-08-21_at_13.05.03.png" />

The Text component is capable of displaying text passed to it in the simplest fashion. However, it also supports [Markdown](https://en.wikipedia.org/wiki/Markdown), making it an exceptionally powerful tool for customising text.

<br />

## Markdown viewer (deprecated)

The Markdown viewer component is similar to the paragraph element. It can display text in your application. But the difference is, that it can render markdown. It is really useful to display text coming from any markdown source, including the [Long Form Field](doc:long-form-field) element.

<Image align="center" src="https://files.readme.io/4a459aa2f4f27ff8fca9d78ba92a1a171c65d2a61ba91f91157393c7704828d2-Screenshot_2025-08-21_at_13.41.21.png" />

The *Markdown Viewer* component has full support of all markdown elements as displayed above, including headers, images and tables. 

<Image alt="Adding the Markdown Viewer component" align="center" src="https://files.readme.io/4d78dac-Screenshot_2023-01-25_at_14.11.10.png">
  Adding the Markdown Viewer component
</Image>

From the <Glossary>Settings Panel</Glossary> you can configure the value of the markdown viewer element, where you can also use [Bindings](doc:bindings).

<br />

### Markdown viewer (Deprecated)

The Markdown viewer component is similar to the paragraph element. It can display text in your application. But the difference is, that it can render markdown. It is really useful to display text coming from any markdown source, including the [Long Form Field](doc:long-form-field) element.

<Image align="center" src="https://files.readme.io/19a29ca6a6aa455681abb473ee8db8ec778f7a7efcb99bb6f7b177cfb1d7f487-Screenshot_2024-09-26_at_14.17.30.png" />

The *Markdown Viewer* component has full support of all markdown elements as displayed above, including headers, images and tables. 

<Image alt="Adding the Markdown Viewer component" align="center" src="https://files.readme.io/4d78dac-Screenshot_2023-01-25_at_14.11.10.png">
  Adding the Markdown Viewer component
</Image>

From the <Glossary>Settings Panel</Glossary> you can configure the value of the markdown viewer element, where you can also use [Bindings](doc:bindings).

<br />

### Paragraph (Deprecated)

The Paragraph component displays text inside your application. It's the `<p>` equivalent in `html`. But of course it supports [Bindings](doc:bindings) so you can render any text you like from any of the available  <Glossary>Datasource</Glossary> or [JavaScript](doc:javascript) functions.

<Image alt="Adding a Paragraph" align="center" src="https://files.readme.io/8a900bb-Screenshot_2023-01-25_at_14.15.20.png">
  Adding a Paragraph
</Image>

Then, you can use [Bindings](doc:bindings) within the *Text* setting in the <Glossary>Settings Panel</Glossary>, or simply enter static text by just typing in the box, or some combination of both.

For example, you may want to display the total number of rows coming back from a [Data provider](doc:data-provider).

<Image align="center" src="https://files.readme.io/013eecc605542f1445ce30aef8e54df565ecadcde9280fc17ea45f4603b3dbbd-Screenshot_2024-09-26_at_14.01.30.png" />

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
        <img src="https://files.readme.io/b96f842-Screenshot_2023-01-25_at_14.37.47.png" />
      </td>

      <td>
        <img src="https://files.readme.io/9b193d2-Screenshot_2023-01-25_at_14.38.12.png" />
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

<Image alt="Adding a Headline" align="center" src="https://files.readme.io/8a48ae2-Screenshot_2023-01-25_at_14.31.53.png">
  Adding a Headline
</Image>

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
