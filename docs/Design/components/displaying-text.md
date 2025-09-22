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
## Paragraph

The Paragraph component displays text inside your application. It's the `<p>` equivalent in `html`. But of course it supports [Bindings](doc:bindings) so you can render any text you like from any of the available  <<glossary:Datasource>> or [JavaScript](doc:javascript) functions.

[block:image]
{
  "images": [
    {
      "image": [
        "https://files.readme.io/8a900bb-Screenshot_2023-01-25_at_14.15.20.png",
        null,
        "Adding a Paragraph"
      ],
      "align": "center",
      "caption": "Adding a Paragraph"
    }
  ]
}
[/block]



Then, you can use [Bindings](doc:bindings) within the _Text_ setting in the <<glossary:Settings Panel>>, or simply enter static text by just typing in the box, or some combination of both.

For example, you may want to display the total number of rows coming back from a [Data provider](doc:data-provider).

![](https://files.readme.io/3d80051-Screenshot_2023-01-25_at_14.19.39.png)

Paragraphs also support newlines:

| Text binding                                                                        | Design view                                                                         |
| :---------------------------------------------------------------------------------- | :---------------------------------------------------------------------------------- |
| <img src="https://files.readme.io/b96f842-Screenshot_2023-01-25_at_14.37.47.png" /> | <img src="https://files.readme.io/9b193d2-Screenshot_2023-01-25_at_14.38.12.png" /> |

### Customizing text styling

The Paragraph component has several ways of styling the text using the <<glossary:Settings Panel>>.

| Setting               | Description                                                                            |
| :-------------------- | :------------------------------------------------------------------------------------- |
| Size                  | The size of the text, choose from several presets ranging from `extra small` to `3XL`. |
| Color                 | Change the color of the text. Press the `X` on the bottom to reset to default.         |
| Bold/Italic/Underline | Adds the respective bold, italic and underline styling. Can be combined.               |
| Alignment             | The alignment of the text. Choose between left, right, center and justify.             |

### Headline

The Headline component is identical to the Paragraph component, with the simple caveat that the sizes are three ahead.

For example a _Medium_ Headline is the equivalent of a _2XL_ Paragraph.

[block:image]
{
  "images": [
    {
      "image": [
        "https://files.readme.io/8a48ae2-Screenshot_2023-01-25_at_14.31.53.png",
        null,
        "Adding a Headline"
      ],
      "align": "center",
      "caption": "Adding a Headline"
    }
  ]
}
[/block]



<br />

## Markdown viewer

The Markdown viewer component is similar to the paragraph element. It can display text in your application. But the difference is, that it can render markdown. It is really useful to display text coming from any markdown source, including the [Long Form Field](doc:long-form-field) element.

![](https://files.readme.io/e46adbd-markdown.png "markdown.png")

The _Markdown Viewer_ component has full support of all markdown elements as displayed above, including headers, images and tables. 

[block:image]
{
  "images": [
    {
      "image": [
        "https://files.readme.io/4d78dac-Screenshot_2023-01-25_at_14.11.10.png",
        null,
        "Adding the Markdown Viewer component"
      ],
      "align": "center",
      "caption": "Adding the Markdown Viewer component"
    }
  ]
}
[/block]



From the <<glossary:Settings Panel>> you can configure the value of the markdown viewer element, where you can also use [Bindings](doc:bindings).

<br />

## Related components

There are a number of other components that can display text, on top of the additional functionality they provide. 

These include:

- [Button](doc:button)
- [Card](doc:card)
- [Embed](doc:embed)
- [Link](doc:link)
- [Stat Card](doc:stat-card)
- [Tag](doc:tag)
- [Text inputs](doc:text-inputs)