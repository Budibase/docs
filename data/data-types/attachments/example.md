---
description: Building an attachment example
---

# Example - Fun With Flags

In this example, we will be creating a simple web application that will be used to store information about different countries around the world. Some of the information we are going to include in our application:
- Country Name
- Country Population
- Country Flag
- Travel Guide

## Creating Countries Table and Columns
Let's begin by creating a [table](../../tables/) to store data for our countries.

Next, we need to create [columns](../../tables/columns.md) in our `Countries` table. Let's look at the information we need to include about each country and decide which data types are the best to use for our columns.

**Country Name**: Country names are just letters, so a **Text** type is a good fit here.
**Country Population**: We should use a **Number** type for this.
**Country Flag**: This will require an image file - here is where **Attachment** types come in.
**Travel Guide**: We can store PDF travel guides for each country here. Let's use another **Attachment** type.

Watch the video below to find out how to set up your table as detailed above.

{% embed url="https://www.loom.com/share/487b345890c54ec39c8b9667a7ec21cb" %}

## Creating Rows and Uploading Data
Now that we have set up our columns, we can start to add some [rows](../../tables/rows.md) to our `Countries` table. You will now notice that on row creation, you will be presented with dropzone components inside the row creation popover for both of our attachment types - `Flag` and `Travel Guides`. 


Let's create an row for Spain. Follow along with the video below to find out how.

Here are the files used in the video below if you don't have your own:
- [Spanish Flag Image](https://upload.wikimedia.org/wikipedia/en/thumb/9/9a/Flag_of_Spain.svg/750px-Flag_of_Spain.svg.png)
- [Spanish Travel Guide](https://www.madeforspainandportugal.com/wp-content/uploads/2016/01/Spain-with-Made-for-Spain.pdf)

{% embed url="https://www.loom.com/share/01267f53e26d4e1c8183a5919ec176d2" %}

Muy bien! 🇪🇸

Let's see what's been automatically created for us in the frontend of our app.

## Frontend
Navigate over to the "Frontend" tab in the builder. You will notice that some [screens](../../../design/screens.md) have been created for us when we created our Countries table.
- **Countries - New**: A screen with a form that can be used to create a brand new country.
- **Countries - List**: A screen with a table containing all the countries in your countries table.
- **Countries - Detail**: A screen used to represent a single country. When you click the **View** button in the Countries List table, you will be navigated to the detail page for that country.

Let's preview our application and interact with our attachments! Click the preview button on the top right of the builder. You will be navigated to your app in your default browser. Log in with the credentials that you set up when you initially created your app and you will see the homepage of your new app. Navigate to the automatically created "Countries" link in your navbar - you should see your countries listed in a table:

![](countries.png)

Let's dive into some of the different ways we can interact with attachments in our application.

### Edit Country Attachments
Let's edit our Spain row to add another travel guide. This involves navigating to the detail view for Spain and adding another PDF file. 

{% embed url="https://www.loom.com/share/a14e97fe11434f6b9293e9d7196846c0" %}

### Delete Country Attachments 
You can delete an attachment from the Country table or the Country Detail Screen. Let's delete one of our travel guides from the table view, and the other one from the detail view.

{% embed url="https://www.loom.com/share/869744c20764415ea6bf6f7a49974c6c" %}