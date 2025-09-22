---
title: PDF exporting 🔒
excerpt: >-
  The PDF Exporting feature allows you to generate downloadable PDF reports
  directly from your Budibase app similar to how you would build standard
  screens.
deprecated: false
hidden: false
metadata:
  title: ''
  description: ''
  robots: index
next:
  description: ''
  pages:
    - type: basic
      slug: screens
      title: Screens
---
> 📘 Licensing🔒
> 
> The following feature is only available to customers with a **Premium** or **Enterprise** plan.
> 
> You can view more details on [our pricing page.](https://budibase.com/pricing/)

## Creating a PDF Screen

When creating a new screen, you’ll see a [screen](doc:screens) option called PDF at the end of the screen list. Select this option to create a screen specifically for generating PDF documents.

[block:image]
{
  "images": [
    {
      "image": [
        "https://files.readme.io/84c1c8a46038699d2ac61b369cb70b44f8701246264cd49babff9ea28c2c13cd-Screenshot_2025-04-07_at_13.11.43.png",
        "",
        "An image showing the types of screens that can be selected and used in Budibase."
      ],
      "align": "center"
    }
  ]
}
[/block]


Once selected, you’ll be taken to a new screen where you can begin creating your PDF. This includes standard grid functionality, allowing you to arrange content flexibly.

## Building Your PDF

Within the PDF screen, you can use Budibase components such as tables, text, images, and more, just as you would on a regular screen. You can connect [data providers](doc:data-provider) to populate your report with dynamic content using <<glossary:Binding>>s. This enables you to generate personalised or context-specific PDFs for your users.

[block:image]
{
  "images": [
    {
      "image": [
        "https://files.readme.io/8a9b8995e7f7b927d6b12caec7a2cc529396695f972ee099dfc44fa624bc7cf3-Screenshot_2025-04-07_at_13.28.06.png",
        "",
        ""
      ],
      "align": "center"
    }
  ]
}
[/block]


## Styling and Layout

You can fully customise the layout and design of the PDF using Budibase’s grid functionality. [Components](doc:components) will be rendered in the exported file as on the PDF.

[block:image]
{
  "images": [
    {
      "image": [
        "https://files.readme.io/cbb1f51a80635cbed461c0c6e9a778d00c8a69305a6dfc06124be9235429b7f4-Screenshot_2025-04-07_at_13.33.59.png",
        "",
        "An image showcasing how you can create a custom layout within the PDF."
      ],
      "align": "center"
    }
  ]
}
[/block]


## Customisation options

In addition to adding Budibase components to your PDF screens, you can customise the title and button text used for the PDF download experience. These options are available in the screen’s settings panel.

Both fields support <<glossary:Binding>>s, allowing you to tailor the PDF to the logged-in user or any other context-specific data. For example, you can include the user's name or role in the title or adjust the button text based on permissions.

- **PDF Title**: This is displayed at the top of the screen when users visit the PDF page. It also determines the filename of the downloaded PDF.
- **Button Text**: This controls the label shown on the PDF download button.

These fields help tailor the user experience and provide context-specific naming for your reports.

[block:image]
{
  "images": [
    {
      "image": [
        "https://files.readme.io/96813984e8b7ff776a3f7639580cb5e54c2e9e1794f2b2a476bb8c4890261963-Screenshot_2025-04-07_at_14.50.15.png",
        "",
        "Screenshot showing the new pdf title and button fields in the screens settings area."
      ],
      "align": "center"
    }
  ]
}
[/block]