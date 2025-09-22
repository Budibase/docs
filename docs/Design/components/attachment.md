---
title: Attachment
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
The `Attachment` component allows your users to upload files to your Budibase app.

Uploaded files are stored in [MinIO](https://docs.budibase.com/docs/accessing-minio).

![](https://files.readme.io/27adfae-attachment.png "attachment.png")

The `Attachment` component works especially well with <<glossary:Budibase DB>>'s [Attachment](doc:attachments) data type.

> 📘 Filesize
> 
> Remember the maximum file size you can store in your database of choice

## Adding an Attachment component

The `Attachment component` requires a [Form](doc:forms) component as a parent.

To add the Attachment component, click `Form > Attachment`.

![](https://files.readme.io/59f9171-Screenshot_2022-09-12_at_15.53.36.png)

After the `Attachment` component is added you can immediately start using it, no further configuration is required.

[block:image]
{
  "images": [
    {
      "image": [
        "https://files.readme.io/3b9c6eb-extensions.png",
        "",
        ""
      ],
      "align": "center",
      "sizing": "2px"
    }
  ]
}
[/block]


## Manage access

If you want to specify [user roles](https://docs.budibase.com/docs/user-roles#app-specific-roles) such as allowing public file uploads, then you'll need to adjust the [write access levels](https://docs.budibase.com/docs/attachments#manage-access) of your table.

## Validation

There are few [Form validation](doc:form-validation) options for the attachment field.

| Constraint                 | Description                                                                       |
| :------------------------- | :-------------------------------------------------------------------------------- |
| Required                   | At least one file must be uploaded.                                               |
| Max file size (MB)         | No uploaded file can exceed the specified limit in megabytes.                     |
| Max total upload size (MB) | The total size of all uploaded files cannot exceed the specified megabytes limit. |

![](https://files.readme.io/5c1fbee-image.png)

## Specifying acceptable file extensions

By default any file, with any file extension, will be accepted by the Attachment component for upload. However, in certain scenarios, a particular set of file extensions may preferred. For example, you may only want to accept PDF files. In other situations, you may only want image files.

The _extensions_ property accepts an **array** of file extensions, e.g. `[".webp",".png"]`. When [Using Handlebars](doc:bindings) , make sure to split the comma separated array. If [Using JavaScript](doc:javascript), simply return an array of extensions as shown below.

```handlebars
{{ split ".png,.jpg,.jpeg,.svg,.gif,.webp" }}
```
```javascript
return ['.png','.jpg','.jpeg','.svg','.gif','.webp']
```

This will result in the operating system's native File Open Dialog having a corresponding custom filter:

[block:image]
{
  "images": [
    {
      "image": [
        "https://files.readme.io/9883a2e-extensions.png",
        "",
        "Customised file extensions filter in the Attachment component"
      ],
      "align": "center",
      "sizing": "400px",
      "caption": "Customised file extensions filter in the Attachment component"
    }
  ]
}
[/block]