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
Field groups are components that group fields together. They allow your fields to be neatly aligned with each other and let you style your fields with consistent label positions.

<HTMLBlock>{`
<div style="padding:47.8% 0 0 0;position:relative;"><iframe src="https://player.vimeo.com/video/847031102?badge=0&amp;autopause=0&amp;player_id=0&amp;app_id=58479" frameborder="0" allow="autoplay; fullscreen; picture-in-picture" allowfullscreen style="position:absolute;top:0;left:0;width:100%;height:100%;" title="Using field groups"></iframe></div><script src="https://player.vimeo.com/api/player.js"></script>
`}</HTMLBlock>

<br />

## Generating fields automatically

Field groups have a powerful function that can save you a lot of time when working on [Forms](doc:forms) - they let you reset them, which automatically populates them with all the fields in your [Form schema](https://docs.budibase.com/docs/forms#form-schema). This means you can generate a full form in one click, or you can add in missing fields if you change your schema.\
When you select a field group component in the builder, you'll be able to press `Update form fields` in the <Glossary>Settings Panel</Glossary> to perform this function.

<Image alt="Adding a form with a table schema" align="center" src="https://files.readme.io/bf8bd87-Screenshot_2023-07-20_at_16.43.32.png">
  Adding a form with a table schema
</Image>

<Image alt="Update form fields" align="center" src="https://files.readme.io/446b0ab-Screenshot_2023-07-20_at_16.44.36.png">
  Update form fields
</Image>

<Image alt="Auto-populated form fields" align="center" src="https://files.readme.io/a9df402-Screenshot_2023-07-20_at_16.45.39.png">
  Auto-populated form fields
</Image>

> 👍 Form block
>
> The [Form block](doc:form-block) will also automatically include all form fields of the chosen schema by default, and allow you to choose which fields should be included.
>
> [Ejecting the form block](https://docs.budibase.com/docs/blocks#ejecting-blocks) will add a field group to the <Glossary>Component Tree</Glossary>.

<br />

## Layout

In addition to auto-populating form fields, you can also use field groups to determine how the fields should be displayed. The default layout type is `One column`, but you can change this to two and three columns in a couple of clicks!

<Image alt="Click on the 'Type' button to change the layout" align="center" src="https://files.readme.io/ab91729-Screenshot_2023-07-20_at_16.54.44.png">
  Click on the 'Type' button to change the layout
</Image>

<Image alt="Selecting 'Two columns' layout" align="center" src="https://files.readme.io/355164f-Screenshot_2023-07-20_at_16.55.35.png">
  Selecting 'Two columns' layout
</Image>

<Image alt="Fields arranged in two columns" align="center" src="https://files.readme.io/f39946d-Screenshot_2023-07-20_at_16.56.46.png">
  Fields arranged in two columns
</Image>

### Label alignment

You can also choose whether labels are aligned to the *Left* or *Above* your fields. 

<Image alt="Left aligned labels" align="center" src="https://files.readme.io/0b750a5-left_aligned_labels.png">
  Left aligned labels
</Image>

<Image alt="Above aligned labels" align="center" src="https://files.readme.io/68b0aa2-above_aligned_labels.png">
  Above aligned labels
</Image>

It is worth noting that layout options are only available for labels that aligned *Above* the fields, as shown in the screenshots.
