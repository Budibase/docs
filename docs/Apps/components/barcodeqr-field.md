---
title: Barcode/QR Scanner
excerpt: ''
deprecated: false
hidden: false
metadata:
  title: ''
  description: ''
  robots: index
next:
  description: ''
---
Add a Barcode/QR field to allow users to scan codes directly into their forms!

## Adding a Barcode/Scanner field

The field can be found under the **Form** section of the components list.


<br />

## Scanning

With your form open and the Barcode/QR component in place, simply click the **Scan code** button to launch the camera modal.


The modal will indicate that the camera is **Searching for code...**.

Position a valid QR/Barcode in front of the camera and when scanned successfully, the green indicator and the code content will be displayed on screen.


On closing the scanning modal, the contents of the QR/Barcode will now be in the field!


> 👍 Code scanning support
>
> The full list of supported barcodes is available here : [https://github.com/mebjas/html5-qrcode#supported-code-formats](https://github.com/mebjas/html5-qrcode#supported-code-formats)

## Manual entry

The user can also click **Enter manually** if, for example, the code type is not supported or it cannot be scanned. Once clicked, the camera modal will close and a text input will display, allowing manual entry of the code.


To enable manual entry, ensure the **Allow manual entry** option has been enabled in the Barcode/QR component settings

## Permissions

The Barcode/QR scanner will require access to your devices camera in order to attempt a scan. 

You may be prompted to grant camera access to Budibase or you may have to enable it manually in your browser and/or operating system.

In the event that the camera is unavailable, the following message will be displayed.


## Settings panel

Listed below are configuration options available for the field. 

| Setting            | Description                                                                                                                |
| ------------------ | -------------------------------------------------------------------------------------------------------------------------- |
| Name               | The builder component name                                                                                                 |
| Label              | The text visible to the user next to the Barcode/QR component as a descriptor of the field                                 |
| Field              | Connected field from the parent [Form](https://docs.budibase.com/docs/forms) element, or custom by typing in a field name. |
| Manual entry       | When checked, the user will have the ability to toggle manual entry and enter code text via a text input                   |
| Button text        | The text displayed on the Barcode/QR launch button. Defaults to 'Scan code'                                                |
| Default value      | When a default value is provided, every time the form is opened this will be pre-filled in the field.                      |
| Disabled           | When checked, disables the field; The user cannot change the value.                                                        |
| Play sound on scan | Plays a single note on scan. The *Sound pitch* can also be chosen.                                                         |
| Preferred camera   | Determines if the front or back camera of the app device will be used for scanning.                                        |
| Auto confirm       | Upon a successful scan, the scan modal will automatically close.                                                           |

## Validation

When scanning a barcode, the underlying data type can be a varied, such as text, a number, a URL, etc. Sometimes you will want to add [validation](doc:form-validation) to ensure only barcodes of a certain type can be scanned successfully.

For example, if you want to ensure only a web URL can be scanned and saved, you can add a regex rule:


This can also be used safely in conjunction with the *Auto confirm* setting. If the barcode passes the validation on scan, then the modal will close. On the other hand, if the barcode was not a valid URL as expected in this case, then the modal will wait until the user scans an appropriate barcode, or cancels.

Tuning tips:
- `Auto confirm` closes the scanner modal immediately after a successful, valid scan.
- `Manual entry` provides a fallback text input when scanning is not possible.
- `Play sound on scan`, `Sound pitch`, and `Sound frequency (Hz)` can provide audible scan feedback.
- Validation is applied before confirm/close behavior, so invalid scans remain in the modal until corrected or cancelled.

