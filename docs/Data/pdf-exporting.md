---
title: PDF exporting 🔒
excerpt: Generate downloadable PDF screens from your app
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
Use PDF exporting when you want users to download a screen as a PDF.

This feature is available on Premium and Enterprise plans.

## Create a PDF screen

1. Create a new screen
2. Choose `PDF`
3. Add the components you want to appear in the document
4. Bind any data you need
5. Save the screen

## Build the PDF

Use standard Budibase components such as:

* Tables
* Text
* Images
* Data providers

The PDF screen uses the same grid layout as a regular screen.

## Configure the download experience

Use the screen settings to set:

* PDF title
* Download button text

Both fields support bindings, so you can make the output depend on the current user or app context.

## Notes

* The PDF title also becomes the filename of the downloaded file
* Use the same layout patterns you would use on a regular screen
* Keep the report layout simple if you want the exported PDF to stay readable
