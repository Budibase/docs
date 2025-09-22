---
title: Attachments
excerpt: Learn more about how Budibase manages static files.
deprecated: false
hidden: false
metadata:
  title: ''
  description: ''
  robots: noindex
next:
  description: ''
---
Almost every web application needs to manage static files in some way.

These could be images, text files, audio files and more. With budibase, you can upload your static files to your budibase applications with ease. We are going to cover how to upload and display your files both inside the budibase builder and in your web applications themselves.

Let's get started.

## The Attachment Field Type

In Budibase, static files are stored under the **Attachment** field type. Attachments can be any static file - images, CSV files, and even code. To create an attachment field type, add a new column to a new or existing [tables](ref:tables)  and select the **Attachment** type. An attachment field can have as many attachments in it as you like, but the maximum file upload size per file is **20MB**.

## Uploading Attachments

When you create a new [row](ref:post_tables-tableid-rows)  in your table by clicking the "Create New Row" button above the backend data table, you will be presented with a dropzone component for your attachment field that you can use to upload files.

> 📘
>
> A **Dropzone** component is a commonly used file upload component in web applications. It allows you to drop files from your computer into the dropzone area, or to navigate your file system to find the file that you want.

Once you have selected your files, image files are processed in the background and resized. Other files are just stored as is, without any kind of resizing or transformation applied. These files will remain on your machine until you deploy - at which point they will be uploaded to the Budibase hosting cloud.

Your attachments will be displayed like any regular field - inside grids and tables, forms and more Budibase components.

To see attachments in action, take a look at the following example section. We will build a small app for storing country data using Budibase attachments.

Attachments are stored in [MinIO](https://docs.budibase.com/docs/accessing-minio).

## Example

In this example, we will be creating a simple web application that will be used to store information about different countries around the world. Some of the information we are going to include in our application:

* Country Name
* Country Population
* Country Flag
* Travel Guide

### Creating Countries Table and Columns

Let's begin by creating a table to store data for our countries.

Next, we need to create columns in our `Countries` table. Let's look at the information we need to include about each country and decide which data types are the best to use for our columns.

* **Country Name**: Country names are just letters, so a **Text** type is a good fit here.
* **Country Population**: We should use a **Number** type for this.
* **Country Flag**: This will require an image file - here is where **Attachment** types come in.
* **Travel Guide**: We can store PDF travel guides for each country here. Let's use another **Attachment** type.

Watch the video below to find out how to set up your table as detailed above.

<Embed url="https://www.youtube.com/watch?v=78qLHu6ShkY&feature=youtu.be" title="Budibase - Creating attachment type columns" favicon="https://www.youtube.com/s/desktop/58ec298f/img/favicon.ico" image="https://i.ytimg.com/vi/78qLHu6ShkY/hqdefault.jpg" provider="youtube.com" href="https://www.youtube.com/watch?v=78qLHu6ShkY&feature=youtu.be" html="%3Ciframe%20class%3D%22embedly-embed%22%20src%3D%22%2F%2Fcdn.embedly.com%2Fwidgets%2Fmedia.html%3Fsrc%3Dhttps%253A%252F%252Fwww.youtube.com%252Fembed%252F78qLHu6ShkY%253Ffeature%253Doembed%26display_name%3DYouTube%26url%3Dhttps%253A%252F%252Fwww.youtube.com%252Fwatch%253Fv%253D78qLHu6ShkY%26image%3Dhttps%253A%252F%252Fi.ytimg.com%252Fvi%252F78qLHu6ShkY%252Fhqdefault.jpg%26key%3Df2aa6fc3595946d0afc3d76cbbd25dc3%26type%3Dtext%252Fhtml%26schema%3Dyoutube%22%20width%3D%22854%22%20height%3D%22480%22%20scrolling%3D%22no%22%20title%3D%22YouTube%20embed%22%20frameborder%3D%220%22%20allow%3D%22autoplay%3B%20fullscreen%22%20allowfullscreen%3D%22true%22%3E%3C%2Fiframe%3E" />

## Creating Rows and Uploading Data

Now that we have set up our columns, we can start to add some rows to our `Countries` table. You will now notice that on row creation, you will be presented with dropzone components inside the row creation popover for both of our attachment types - `Flag` and `Travel Guides`.

Let's create a row for Spain. Follow along with the video below to find out how.

Here are the files used in the video below if you don't have your own:

* [Spanish Flag Image](https://upload.wikimedia.org/wikipedia/en/thumb/9/9a/Flag_of_Spain.svg/750px-Flag_of_Spain.svg.png)
* [Spanish Travel Guide](https://www.madeforspainandportugal.com/wp-content/uploads/2016/01/Spain-with-Made-for-Spain.pdf)

<Embed url="https://www.youtube.com/watch?v=yULNH7MHez8&feature=youtu.be" title="How to create a row, with an attachment" favicon="https://www.youtube.com/s/desktop/58ec298f/img/favicon.ico" image="https://i.ytimg.com/vi/yULNH7MHez8/hqdefault.jpg" provider="youtube.com" href="https://www.youtube.com/watch?v=yULNH7MHez8&feature=youtu.be" html="%3Ciframe%20class%3D%22embedly-embed%22%20src%3D%22%2F%2Fcdn.embedly.com%2Fwidgets%2Fmedia.html%3Fsrc%3Dhttps%253A%252F%252Fwww.youtube.com%252Fembed%252FyULNH7MHez8%253Ffeature%253Doembed%26display_name%3DYouTube%26url%3Dhttps%253A%252F%252Fwww.youtube.com%252Fwatch%253Fv%253DyULNH7MHez8%26image%3Dhttps%253A%252F%252Fi.ytimg.com%252Fvi%252FyULNH7MHez8%252Fhqdefault.jpg%26key%3Df2aa6fc3595946d0afc3d76cbbd25dc3%26type%3Dtext%252Fhtml%26schema%3Dyoutube%22%20width%3D%22854%22%20height%3D%22480%22%20scrolling%3D%22no%22%20title%3D%22YouTube%20embed%22%20frameborder%3D%220%22%20allow%3D%22autoplay%3B%20fullscreen%22%20allowfullscreen%3D%22true%22%3E%3C%2Fiframe%3E" />

Muy bien! 🇪🇸

Let's see what's been automatically created for us in the front-end of our app.

### Front-end

Navigate over to the "Frontend" tab in the builder. You will notice that some screens have been created for us when we created our Countries table.

* **Countries - New**: A screen with a form that can be used to create a brand new country.
* **Countries - List**: A screen with a table containing all the countries in your countries table.
* **Countries - Detail**: A screen used to represent a single country. When you click the **View** button in the Countries List table, you will be navigated to the detail page for that country.

Let's preview our application and interact with our attachments! Click the preview button on the top right of the builder. You will be navigated to your app in your default browser. Log in with the credentials that you set up when you initially created your app and you will see the homepage of your new app. Navigate to the automatically created "Countries" link in your navbar - you should see your countries listed in a table:

![](https://files.readme.io/2aeb51f-countries.png "countries.png")

## Manage access

By default, the table **write** access will be *Basic*. This means if you have a public form, you may see an error message: `Session not authenticated` when trying to upload files.

To fix this, click on the `Manage access` button.

![](https://files.readme.io/520af17-Screenshot_2022-09-23_at_10.36.08.png)

Set the write access to **public**

![](https://files.readme.io/2cdaa92-Screenshot_2022-09-23_at_10.36.59.png)

**Note** this will allow anyone to upload a file to your app instance, so use with caution! 

You must also ensure that the table with your target attachment field is selected as the [form schema](https://docs.budibase.com/docs/forms#form-schema). Budibase needs to know the target field of the attachment upload.

> 👍
>
> ![](https://files.readme.io/a2430f9-Screenshot_2022-09-23_at_11.10.13.png)

> ❗
>
> ![](https://files.readme.io/c4b0208-Screenshot_2022-09-23_at_11.10.35.png)
