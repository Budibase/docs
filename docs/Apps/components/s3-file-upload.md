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

<Image alt="Adding an S3 File Upload component" align="center" src="https://files.readme.io/a08d5ab725c2738b2b9a081b361d21f3af18e2688172c6139548ed1bccf31518-Screenshot_2025-09-04_at_16.35.08.png">
  Adding an S3 File Upload component
</Image>

An [S3 datasource](doc:s3) must also have been added to the **Data** section in Budibase. After the S3 connection is established, you can select the <Glossary>Datasource</Glossary>, and enter a bucket and file name in the <Glossary>Settings Panel</Glossary>.

You will also need to provide a custom field name.

<Image align="center" src="https://files.readme.io/80e218a00179b1144fbae72f5a1a24741076873ca36e94565b3ae208d5052cfa-Screenshot_2025-09-04_at_16.35.44.png" />

## Upload File to S3 action

Whilst the upload component has been added, you still need to use an upload [Action](doc:actions) so that the user can submit their selected files to the S3 bucket.

The easiest way to do this is to add a [Button](doc:button). Click `Define actions`, add the **Upload File to S3** action, and select your `S3 File Upload` component from the dropdown. Be sure to click `Save`.

<Image align="center" src="https://files.readme.io/0d6d983be2875ebee811392ed0e58f61cdc751e4a079c7a27a592d4651541d2e-Screenshot_2025-09-04_at_16.36.42.png" />
