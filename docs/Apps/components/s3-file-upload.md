---
title: S3 File Upload
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
The `S3 File Upload` component is a special-built component that allows your users to directly upload from Budibase into an S3 Bucket.

Visually the `S3 File Upload` component looks the same as the [Attachment](doc:attachment) component.


## Adding the S3 File Upload

An [S3 datasource](doc:s3) must also have been added to the **Data** section in Budibase. After the S3 connection is established, you can select the <Glossary>Datasource</Glossary>, and enter a bucket and file name in the <Glossary>Settings Panel</Glossary>.

You will also need to provide a custom field name.

Required settings checklist:
- `S3 datasource`: the connected S3 data source to upload through.
- `Bucket`: the destination bucket name.
- `File name`: the output file name/path.

If any of these values are missing or invalid, the upload action will not complete successfully.


## Dropzone settings

The `S3 File Upload` component can be customized through the **Dropzone settings** section in the settings panel.

* **Extensions**: Restrict the types of files that can be uploaded (see below).
* **Compact**: When enabled, the uploader displays a smaller, one-line interface.
* **Title Text**: The main heading displayed in the dropzone (available when not in compact mode).
* **Upload text**: The text for the upload link/button.
* **Sub text**: The secondary description text (available when not in compact mode).

### Specifying acceptable file extensions

By default any file, with any file extension, will be accepted. To restrict this, provide an **array** of file extensions, e.g. `[".webp",".png"]`.

When [Using Handlebars](doc:bindings), use the `split` helper:

```handlebars
{{ split ".png,.jpg,.jpeg,.svg,.gif,.webp" "," }}
```

When [Using JavaScript](doc:javascript), return an array of strings:

```javascript
return ['.png','.jpg','.jpeg','.svg','.gif','.webp']
```

## Upload File to S3 action

Whilst the upload component has been added, you still need to use an upload [Action](doc:actions) so that the user can submit their selected files to the S3 bucket.

The easiest way to do this is to add a [Button](doc:button). Click `Define actions`, add the **Upload File to S3** action, and select your `S3 File Upload` component from the dropdown. Be sure to click `Save`.
