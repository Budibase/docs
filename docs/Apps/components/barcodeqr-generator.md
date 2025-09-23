---
title: Barcode/QR Generator
excerpt: Used to display values as either as a barcode or QR code.
deprecated: false
hidden: false
metadata:
  title: ''
  description: ''
  robots: index
next:
  description: ''
---
[block:image]
{
  "images": [
    {
      "image": [
        "https://files.readme.io/015d4d8412aff7e3a157726cffe574cc01ec4ce5e5d0cde78d1428da1ee1f8fa-Screenshot_2025-08-19_at_13.28.39.png",
        null,
        null
      ],
      "align": "center"
    }
  ]
}
[/block]


<br />

## Getting Started

To get started with a Barcode/QR Generator, simply select it from the list of components, under "Basic".

[block:image]
{
  "images": [
    {
      "image": [
        "https://files.readme.io/843a8c770fe86cc3f1d5ab3b987e24ba416ed0f5c0a5d618b7c2661d579d0c1d-Screenshot_2025-08-19_at_13.24.49.png",
        null,
        null
      ],
      "align": "center"
    }
  ]
}
[/block]


A new Barcode/QR Generator will be added as a QR code by default, with the value of `https://docs.budibase.com/`, which creates a QR code that directs people to the Budibase documentation. You should pass in a value that you wish to be stored and scannable, this could be a URL, SKU, or other value.

## Customisation

### Show Logo

Both Barcodes and QR Codes can be decorated with a logo by adding an image URL to the `Logo` field and checking `Show Logo.`Your logo will appear in the centre of the QR code, and to the left of your Barcode, as shown below.

[block:image]
{
  "images": [
    {
      "image": [
        "https://files.readme.io/b4375f5f0985b941c1818d4f8a84f045febfa665dbf6948eedfe03f5c5eb89d9-Screenshot_2025-08-19_at_13.29.04.png",
        null,
        null
      ],
      "align": "center"
    }
  ]
}
[/block]


<br />

### Display Value

Checking `Show Value` will take the value you've passed and display it underneath the barcode or QR code. This can help offer some confidence to users to know where the code will take them, or what the barcode says, especially if it's being used in a PDF that may be printed and scanned from paper. (See also: [PDF exporting 🔒](doc:pdf-exporting))

[block:image]
{
  "images": [
    {
      "image": [
        "https://files.readme.io/6e241644a2cb621135b9c562e24442bda4ee575f415a4e45ee777fdaf9bd7d08-Screenshot_2025-08-19_at_13.29.33.png",
        null,
        null
      ],
      "align": "center"
    }
  ]
}
[/block]


### Appearance (QR Code Only)

Primary color allows you to select using the Color Picker or specify a hex value for the colour of your QR code. This can be useful when exploring [Theming your app](doc:app-theming)

[block:image]
{
  "images": [
    {
      "image": [
        "https://files.readme.io/9b2ac861e770b7771fedc548ae5666fef174c51d474eea17d67d988c9d819007-Screenshot_2025-08-19_at_13.31.52.png",
        null,
        null
      ],
      "align": "center"
    }
  ]
}
[/block]


<br />

> 📘 A note on Barcode Styles
> 
> In order to ensure the best possible outcomes when scanning a Barcode, there are no styling/color options. The bars must remain black on a white background.

## Usage

A Barcode/QR Generator can be used to display just about any text-string that is passed to it - this includes the value returned by the Barcode/QR Scanner. 

![](https://files.readme.io/a70d34a9b6a4a72494195c09aed77340d2051e371cb0c95cfde486a0ce05aea0-Screen_Recording_2025-05-16_at_13.24.29.gif)