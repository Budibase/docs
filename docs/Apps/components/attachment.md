---
title: Attachment
excerpt: ''
deprecated: false
hidden: false
metadata:
  title: ''
  description: kba_5h91e
  robots: index
next:
  description: ''
---
The `Single Attachment` and `Attachment List` components allow your users to upload files to your Budibase app.

Uploaded files are stored in [MinIO](https://docs.budibase.com/docs/accessing-minio).

![](https://files.readme.io/27adfae-attachment.png "attachment.png")

The `Single Attachment` and `Attachment List` components works especially well with Single attachment and Attachment List <Glossary>Budibase DB</Glossary>'s [Attachment](doc:attachments) data type.

> 📘 Filesize
>
> Remember the maximum file size you can store in your database of choice

## Adding an Attachment component

The `Attachment component` requires a [Form](doc:forms) component as a parent.

To add the Attachment component, click `Form > Single Attachment` or `Form > Attachment List`.

<Image align="center" src="https://files.readme.io/075b4177cd4f6c75900d8cc377913d0d192be84d8870966a3d202e818051dc31-Screenshot_2025-08-19_at_11.31.51.png" />

After the `Single Attachment` or `Attachment List` component is added you can immediately start using it, no further configuration is required.

<Image align="center" width="2px" src="https://files.readme.io/3b9c6eb-extensions.png" />

## Manage access

If you want to specify [user roles](https://docs.budibase.com/docs/user-roles#app-specific-roles) such as allowing public file uploads, then you'll need to adjust the [write access levels](https://docs.budibase.com/docs/attachments#manage-access) of your table.

## Validation

There are few [Form validation](doc:form-validation) options for the attachment field.

| Constraint                 | Description                                                                       |
| :------------------------- | :-------------------------------------------------------------------------------- |
| Required                   | At least one file must be uploaded.                                               |
| Max file size (MB)         | No uploaded file can exceed the specified limit in megabytes.                     |
| Max total upload size (MB) | The total size of all uploaded files cannot exceed the specified megabytes limit. |

<Image align="center" src="https://files.readme.io/9a774a6a38f3cec6b4289a74b1f8831961260fa5d095fa5cc6af86cbe56d27ca-Screenshot_2025-08-19_at_11.46.54.png" />

## Specifying acceptable file extensions

By default any file, with any file extension, will be accepted by the Attachment component for upload. However, in certain scenarios, a particular set of file extensions may preferred. For example, you may only want to accept PDF files. In other situations, you may only want image files.

The *extensions* property accepts an **array** of file extensions, e.g. `[".webp",".png"]`. When [Using Handlebars](doc:bindings) , make sure to split the comma separated array. If [Using JavaScript](doc:javascript), simply return an array of extensions as shown below.

```handlebars
{{ split ".png,.jpg,.jpeg,.svg,.gif,.webp" }}
```
```javascript
return ['.png','.jpg','.jpeg','.svg','.gif','.webp']
```

This will result in the operating system's native File Open Dialog having a corresponding custom filter:

<Image alt="Customised file extensions filter in the Attachment component" align="center" width="400px" src="https://files.readme.io/9883a2e-extensions.png">
  Customised file extensions filter in the Attachment component
</Image>