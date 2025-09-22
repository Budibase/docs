---
title: Barcode/QR
excerpt: This topic describes the barcode/qr data types, supported in Budibase
deprecated: false
hidden: false
metadata:
  title: ''
  description: ''
  robots: index
next:
  description: ''
---
Barcodes and QR codes come in a huge range of formats, from simple product numbers to complex text patterns and URLs.

To accommodate the wide variety of content the field can handle, the Barcode/QR column type is stored as text, or a string.

Fields configured as Barcode/QR types in the database will appear as [Barcode/QR components](https://docs.budibase.com/docs/barcodeqr-field) in the builder.

## Creating a Barcode/QR column

The process for creating the column only takes a few seconds.

1. First, navigate to your Datasource and click the `+` button along the top-right
2. Give the column a Name, e.g "ProductCode"
3. Select **Barcode/QR** from the **Type**
4. Click **Save Column**

![](https://files.readme.io/59ea977-qr_column.png)

## Convertible types

In Budibase, depending on the field type, you can update the type of a column to another

In this instance, a Barcode/QR can be updated to any of the following and vice versa.

- [Text](doc:text)
- [Options](https://docs.budibase.com/docs/text#options)
- [Long Form Text](https://docs.budibase.com/docs/text#long-form-text)

This can be handy when you've been manually entering QR code and Barcode data for years as `Text` and you finally switch the field type to Barcode/QR!