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

![](https://files.readme.io/78f281b-attachment.png "attachment.png")

## Adding the S3 File Upload

The `S3 File Upload` component requires a [Form](doc:forms) element to be a parent.

[block:image]
{
  "images": [
    {
      "image": [
        "https://files.readme.io/a08d5ab725c2738b2b9a081b361d21f3af18e2688172c6139548ed1bccf31518-Screenshot_2025-09-04_at_16.35.08.png",
        null,
        "Adding an S3 File Upload component"
      ],
      "align": "center",
      "caption": "Adding an S3 File Upload component"
    }
  ]
}
[/block]


An [S3 datasource](doc:s3) must also have been added to the **Data** section in Budibase. After the S3 connection is established, you can select the <<glossary:Datasource>>, and enter a bucket and file name in the <<glossary:Settings Panel>>.

You will also need to provide a custom field name.

[block:image]
{
  "images": [
    {
      "image": [
        "https://files.readme.io/80e218a00179b1144fbae72f5a1a24741076873ca36e94565b3ae208d5052cfa-Screenshot_2025-09-04_at_16.35.44.png",
        null,
        ""
      ],
      "align": "center"
    }
  ]
}
[/block]


## Upload File to S3 action

Whilst the upload component has been added, you still need to use an upload [Action](doc:actions) so that the user can submit their selected files to the S3 bucket.

The easiest way to do this is to add a [Button](doc:button). Click `Define actions`, add the **Upload File to S3** action, and select your `S3 File Upload` component from the dropdown. Be sure to click `Save`.

[block:image]
{
  "images": [
    {
      "image": [
        "https://files.readme.io/0d6d983be2875ebee811392ed0e58f61cdc751e4a079c7a27a592d4651541d2e-Screenshot_2025-09-04_at_16.36.42.png",
        null,
        null
      ],
      "align": "center"
    }
  ]
}
[/block]