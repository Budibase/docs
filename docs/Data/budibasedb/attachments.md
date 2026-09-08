---
title: Attachments
excerpt: Store uploaded files in Budibase DB
deprecated: false
hidden: false
metadata:
  title: ''
  description: ''
  robots: index
next:
  description: ''
---
Use an attachment column when a row needs to store uploaded files.

Budibase supports:

* Single attachments
* Attachment lists

## Create an attachment column

1. Open the table
2. Click `Create column`
3. Choose `Attachment` or `Attachment List`
4. Save the column

## Supported files

Attachment columns can store common file types, including:

* Images
* PDFs
* CSV files
* Word documents
* Audio files

The maximum file size is 20 MB per file.

## Use attachments in forms

When a form targets the table that owns the attachment column, Budibase shows an upload control for that field.

Use the matching table as the form schema so Budibase knows where to store the uploaded file.

## Notes

* Attachments are stored in MinIO
* Public uploads require the table write access to allow the upload
* If the form schema does not match the target table, the upload cannot be saved
