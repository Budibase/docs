---
title: Barcode/QR field
excerpt: ''
deprecated: false
hidden: false
metadata:
  title: ''
  description: ''
  robots: noindex
next:
  description: ''
---
Add a Barcode/QR field to allow users to scan codes directly into their forms!

## Adding a Barcode/Scanner field

The field can be found under the **Form** section of the components list.

![](https://files.readme.io/7048cad-component_list.png)

To add the scanner to your app, you to need add it as a child of a [Form](https://docs.budibase.com/docs/forms) component.  
The field has its own data type of [Barcode/QR](https://docs.budibase.com/docs/barcodeqr) so be sure to select a valid field from the **Field** setting. 

## Scanning

With your form open and the Barcode/QR component in place, simply click the **Scan code** button to launch the camera modal.

![](https://files.readme.io/d880845-Screenshot_2022-10-25_at_17.10.45.png)

The modal will indicate that the camera is **Searching for code...**.

Position a [valid](#code-scanning-support) QR/Barcode in front of the camera and when scanned successfully, the green indicator and the code content will be displayed on screen.

![](https://files.readme.io/70746a0-qr_scan.png)

On closing the scanning modal, the contents of the QR/Barcode will now be in the field!

![](https://files.readme.io/b813e96-Screenshot_2022-10-25_at_17.04.27.png)

## Manual Entry

The user can also click **Enter manually** if, for example, the code type is not supported or it cannot be scanned. Once clicked, the camera modal will close and a text input will display, allowing manual entry of the code.

![](https://files.readme.io/c9c6553-manual_entry.png)

To enable manual entry, ensure the **Allow manual entry** option has been enabled in the Barcode/QR component settings

## Permissions

The Barcode/QR scanner will require access to your devices camera in order to attempt a scan. 

You may be prompted to grant camera access to Budibase or you may have to enable it manually in your browser and/or operating system.

In the event that the camera is unavailable, the following message will be displayed.

![](https://files.readme.io/ef6844a-qr_scan.png)

## Settings panel

Listed below are configuration options available for the field. 

| Setting            | Description                                                                                                                |
| ------------------ | -------------------------------------------------------------------------------------------------------------------------- |
| Name               | The builder component name                                                                                                 |
| Label              | The text visible to the user next to the Barcode/QR component as a descriptor of the field                                 |
| Field              | Connected field from the parent [Form](https://docs.budibase.com/docs/forms) element, or custom by typing in a field name. |
| Allow manual entry | When checked, the user will have the ability to toggle manual entry and enter code text via a text input                   |
| Button text        | The text displayed on the Barcode/QR launch button. Defaults to 'Scan code'                                                |
| Default value      | When a default value is provided, every time the form is opened this will be pre-filled in the field.                      |
| Disabled           | When checked, disables the field; The user cannot change the value.                                                        |

## Code Scanning Support

The full list of supported barcodes is available here : <https://github.com/mebjas/html5-qrcode#supported-code-formats>