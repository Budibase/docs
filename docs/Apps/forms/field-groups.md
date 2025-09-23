---
title: Field groups
excerpt: Auto-populate and layout your form fields
deprecated: false
hidden: false
metadata:
  title: ''
  description: ''
  robots: index
next:
  description: ''
---
`Field Groups` are components that group fields together within custom forms. They allow nested fields to be neatly aligned with each other, let you style your fields with consistent label positions, and offer us the ability to automatically update form schemas.

> 👍 Form block
> 
> The [Form block](doc:form-block) will also automatically include all form fields of the chosen schema by default, and allow you to choose and arrange the included fields.
> 
> Form Blocks are a better option for most use cases, but we can still build our forms manually in more advanced cases, including using Form Blocks.

## Updating fields automatically

Field groups have a powerful function that can save you a lot of time when working on [Forms](doc:forms) - they let you reset them. This automatically populates forms with all the fields in your [Form schema](https://docs.budibase.com/docs/forms#form-schema). 

This means you can generate a full form in one click, or you can add in missing fields if you change your schema. Field Groups must be nested within a `Form` component for this to work. 

When you select a field group component in the builder, you'll be able to press `Update form fields` in the <<glossary:Settings Panel>> to perform this function.

[block:image]
{
  "images": [
    {
      "image": [
        "https://files.readme.io/2f39f970f9352c5f2808595b379580be7b7207b433f111da73cfd740e768f9fe-Field_Groups_1.png",
        null,
        null
      ],
      "align": "center"
    }
  ]
}
[/block]


[block:image]
{
  "images": [
    {
      "image": [
        "https://files.readme.io/cd96054a7355c095ee307e30a764e38764c01bf61c1a7cebacd9985cda4aa7c5-Field_Groups_2.png",
        null,
        null
      ],
      "align": "center",
      "caption": "Auto-populated form fields"
    }
  ]
}
[/block]


<br />

## Layout

In addition to auto-populating form fields, you can also use field groups to determine how the fields should be displayed. The default layout type is `One column`, but you can add multiple columns or `main and sidebar` layouts in a couple of clicks.

[block:image]
{
  "images": [
    {
      "image": [
        "https://files.readme.io/994f667b08189341a0497c255e2aafd8f83a97ffcd06efe24485bd74f824f5a2-Field_Groups_3.png",
        null,
        null
      ],
      "align": "center"
    }
  ]
}
[/block]


[block:image]
{
  "images": [
    {
      "image": [
        "https://files.readme.io/11a8349ddb66ea24586465a1a819224d92bff3353d868b538f0bdc0f07bd01e2-Field_Groups_4.png",
        null,
        null
      ],
      "align": "center",
      "caption": "Main with sidebar layout"
    }
  ]
}
[/block]


<br />

### Label alignment

You can also choose whether labels are aligned to the _Left_ or _Above_ your fields. 

[block:image]
{
  "images": [
    {
      "image": [
        "https://files.readme.io/52a2a91d0d208c0b9e31413977d2c7d838bbd42d86c543e7549e9a58d9c89f98-Field_Groups_5.png",
        null,
        null
      ],
      "align": "center"
    }
  ]
}
[/block]


It is worth noting that layout options are only available for labels that aligned _Above_ the fields, as shown in the screenshots.