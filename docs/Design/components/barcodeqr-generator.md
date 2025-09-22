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
![](https://files.readme.io/4bd54aa3bef4d06bf2af81c1c8d69416c47e1c4d43d66b2fdfaaaa272e18856e-image.png)

<br />

## Getting Started

To get started with a Barcode/QR Generator, simply select it from the list of components, under "Basic".

![](https://files.readme.io/33b7fe70735eda436c401b60a204b5987874d8c8a374152b0bbdd414b6dc1530-image.png)

A new Barcode/QR Generator will be added as a QR code by default, with the value of `https://docs.budibase.com/`, which creates a QR code that directs people to the Budibase documentation. You should pass in a value that you wish to be stored and scannable, this could be a URL, SKU, or other value.

## Customisation

### Show Logo

Both Barcodes and QR Codes can be decorated with a logo by adding an image URL to the `Logo` field and checking `Show Logo.`

![](https://files.readme.io/639dc0f3d45df41c378941e99b11ca8cd3d49e14b5021848c9537d372e22cad4-image.png)

Your logo will appear in the centre of the QR code, and to the left of your Barcode, as shown below.

![](https://files.readme.io/4955bace6348773a6a545eae1aa8cef5d5e15bf9036dda4b1582f37c2d43894f-image.png)

<br />

### Display Value

Checking `Show Value` will take the value you've passed and display it underneath the barcode or QR code. This can help offer some confidence to users to know where the code will take them, or what the barcode says, especially if it's being used in a PDF that may be printed and scanned from paper. (See also: [PDF exporting 🔒](doc:pdf-exporting))

![](https://files.readme.io/994be91557b5a52c79a5689d2aaca12ba6f0a8095e4e2ea368d6e52c57305733-image.png)

### Appearance (QR Code Only)

Primary color allows you to select using the Color Picker or specify a hex value for the colour of your QR code. This can be useful when exploring [Theming your app](doc:app-theming)

![](https://files.readme.io/6c78c42ca4ca4914692af8ea8615351d4971a306c157b70b9ece9fc8d43389dd-image.png)

<br />

> 📘 A note on Barcode Styles
> 
> In order to ensure the best possible outcomes when scanning a Barcode, there are no styling/color options. The bars must remain black on a white background.

## Usage

A Barcode/QR Generator can be used to display just about any text-string that is passed to it - this includes the value returned by the Barcode/QR Scanner. 

![](https://files.readme.io/a70d34a9b6a4a72494195c09aed77340d2051e371cb0c95cfde486a0ce05aea0-Screen_Recording_2025-05-16_at_13.24.29.gif)