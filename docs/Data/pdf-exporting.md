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
  description: kba_5hgsi
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

<Image align="center" src="https://files.readme.io/3f43ee801c27b45892c1bc2bf4c72c3eadb7b85bf03253fb1250d0f79dbfa84d-Screenshot_2025-08-13_at_14.24.19.png" />

Once selected, you’ll be taken to a new screen where you can begin creating your PDF. This includes standard grid functionality, allowing you to arrange content flexibly.

## Building Your PDF

Within the PDF screen, you can use Budibase components such as tables, text, images, and more, just as you would on a regular screen. You can connect [data providers](doc:data-provider) to populate your report with dynamic content using <Glossary>Binding</Glossary>s. This enables you to generate personalised or context-specific PDFs for your users.

<Image align="center" src="https://files.readme.io/b19d5a8f81accbf3f6d61d0a310378c31ffe3d8309c8adb88e7903f6af7a2b17-Screenshot_2025-08-13_at_14.28.46.png" />

## Styling and Layout

You can fully customise the layout and design of the PDF using Budibase’s grid functionality. [Components](doc:components) will be rendered in the exported file as on the PDF.

<Image align="center" src="https://files.readme.io/4ec9db25deaf73fd74263131bff494d42be42bd082f4a76ac5a66949072a24c6-Screenshot_2025-08-13_at_14.31.31.png" />

## Customisation options

In addition to adding Budibase components to your PDF screens, you can customise the title and button text used for the PDF download experience. These options are available in the screen’s settings panel.

Both fields support <Glossary>Binding</Glossary>s, allowing you to tailor the PDF to the logged-in user or any other context-specific data. For example, you can include the user's name or role in the title or adjust the button text based on permissions.

* **PDF Title**: This is displayed at the top of the screen when users visit the PDF page. It also determines the filename of the downloaded PDF.
* **Button Text**: This controls the label shown on the PDF download button.

These fields help tailor the user experience and provide context-specific naming for your reports.

<Image align="center" src="https://files.readme.io/dab6c6e44bb1f553b44b9ed0c0af4bc01dffb1667a9a0fd97a0a11f0cddb2952-Screenshot_2025-08-13_at_14.32.16.png" />