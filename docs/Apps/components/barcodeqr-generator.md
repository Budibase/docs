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

<br />

## Getting Started

To get started with a Barcode/QR Generator, simply select it from the list of components, under "Basic".


A new Barcode/QR Generator will be added as a QR code by default, with the value of `https://docs.budibase.com/`, which creates a QR code that directs people to the Budibase documentation. You should pass in a value that you wish to be stored and scannable, this could be a URL, SKU, or other value.

## Customisation

### Show Logo

Both Barcodes and QR Codes can be decorated with a logo by adding an image URL to the `Logo` field and checking `Show Logo.`Your logo will appear in the centre of the QR code, and to the left of your Barcode, as shown below.


<br />

### Display Value

Checking `Show Value` will take the value you've passed and display it underneath the barcode or QR code. This can help offer some confidence to users to know where the code will take them, or what the barcode says, especially if it's being used in a PDF that may be printed and scanned from paper. (See also: [PDF exporting 🔒](doc:pdf-exporting))


### Appearance (QR Code Only)

Primary color allows you to select using the Color Picker or specify a hex value for the colour of your QR code. This can be useful when exploring [Theming your app](doc:app-theming)


<br />

> 📘 A note on Barcode Styles
>
> In order to ensure the best possible outcomes when scanning a Barcode, there are no styling/color options. The bars must remain black on a white background.

## Usage

A Barcode/QR Generator can be used to display just about any text-string that is passed to it - this includes the value returned by the Barcode/QR Scanner. 

