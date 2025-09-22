---
title: S3 File Upload
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
The `S3 File Upload` component is a special-built component that allows your users to directly upload from Budibase into an S3 Bucket.

Visually the `S3 File Upload` component looks the same as the [Attachment](doc:attachment) component.

![](https://files.readme.io/78f281b-attachment.png "attachment.png")

## Adding the S3 File Upload

The `S3 File Upload` component requires a [Form](doc:forms) element to be a parent.

<Image alt="Adding an S3 File Upload component" align="center" src="https://files.readme.io/2d5c5e5-Screenshot_2023-02-06_at_14.05.48.png">
  Adding an S3 File Upload component
</Image>

An [S3 datasource](doc:s3) must also have been added to the **Data** section in Budibase. After the S3 connection is established, you can select the <Glossary>Datasource</Glossary>, and enter a bucket and file name in the <Glossary>Settings Panel</Glossary>.

You will also need to provide a custom field name.

![](https://files.readme.io/79ecdc7-Screenshot_2023-02-06_at_14.45.09.png)

## Upload File to S3 action

Whilst the upload component has been added, you still need to use an upload [Action](doc:actions) so that the user can submit their selected files to the S3 bucket.

The easiest way to do this is to add a [Button](doc:button). Click `Define actions`, add the **Upload File to S3** action, and select your `S3 File Upload` component from the dropdown. Be sure to click `Save`.

![](https://files.readme.io/1c07e65-Screenshot_2023-02-06_at_14.51.02.png)
