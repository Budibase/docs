---
description: Learn more about how Budibase manages static files 
---

# Attachments

Almost every web application needs to manage static files in some way.

These could be images, text files, audio files and more. With budibase, you can upload your static files to your budibase applications with ease. We are going to cover how to upload and display your files both inside the budibase builder and in your web applications themselves.

Let's get started. 

#### The Attachment Field Type
In budibase, static files are stored under the __Attachment__ field type. Attachments can be any static file - images, csv files and even code. To create an attachment field type, add a new column to a new or existing [table](../../tables/) and select the **Attachment** type. An attachment field can have as many attachments in it as you like, but the maximum file upload size per file is **20MB**.

#### Uploading Attachments
When you create a new [row](../../tables/rows.md) in your table by clicking the "Create New Row" button above the backend data table, you will be presented with a dropzone component for your attachment field that you can use to upload files.  

{% hint style="info" %}
A **Dropzone** component is a commonly used file upload component in web applications. It allows you to drop files from your computer into the dropzone area, or to navigate your file system to find the file that you want.
{% endhint %}

Once you have selected your files, image files are processed in the background and resized. Other files are just stored as is, without any kind of resizing or transformation applied. These files will remain on your machine until you deploy - at which point they will be uploaded to the budibase hosting cloud. 

To see attachments in action, take a look at the following example section. We will build a small app for storing country data using budibase attachments. 