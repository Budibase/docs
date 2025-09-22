---
title: Adding search
excerpt: >-
  A quickstart on how to add and connect a search field to your data within
  Budibase
deprecated: false
hidden: false
metadata:
  title: ''
  description: ''
  robots: noindex
next:
  description: ''
---
Most internal apps involve viewing and interacting with data. Adding search to your data display component, such as a [Table](doc:table) provides a better experience for the end-user. Using Budibase, there are three ways to achieve this:

1. Using the table block - the opinionated, fast way
2. Using a form, table, and text input - the flexible way
3. Using a table and dynamic filter - the filter/search hybrid approach (also very easy)

Thankfully, this guide will cover all three methods for adding search to a table. For each process, you will need data. In the tutorials,  we will use the following CSV.  If you have data, please continue to the tutorials below. If you don't have data, please download (File > Download) the following CSV and upload it to the [Budibase DB](doc:budibasedb). 


[block:embed]
{
  "html": false,
  "url": "https://docs.google.com/spreadsheets/d/1kPc6pY_vyWcaaP9Ddp_OwOG2oeUAKhgg-u-mJi5n8ck/edit?usp=sharing",
  "title": "Budibase-sales-example",
  "favicon": "https://ssl.gstatic.com/docs/spreadsheets/favicon3.ico",
  "image": "https://lh6.googleusercontent.com/vEi1U8TSKGZ2xOjrih3K_myrN-rLRMLs2OXqQ61mAYXB3QGnEkG2KaWp42SUJvXF6Uzf6Z6UyMcLMA=w1200-h630-p",
  "provider": "docs.google.com",
  "href": "https://docs.google.com/spreadsheets/d/1kPc6pY_vyWcaaP9Ddp_OwOG2oeUAKhgg-u-mJi5n8ck/edit?usp=sharing",
  "iframe": true
}
[/block]




**Right, let's do this 🏁** 

***



# 1. Using the table block (the easy way)

This is the easiest and fastest way to allow users to view and search data. But, it is opinionated. You cannot customize where the search input goes or augment the search functionality. 

To add search using the table block, simply add the`Table Block`.  Give your table a title, select your Data source (under Data), and choose your Search Columns - in our case, Regions. _Please note, that the searchable text field will appear only if the data type of the field you choose is text/string.  If the field is stored as an option, a Select component will appear instead._ 

[block:html]
{
  "html": "<div style=\"padding:56.19% 0 0 0;position:relative;\"><iframe src=\"https://player.vimeo.com/video/699020240?h=7e5cc8874d&amp;badge=0&amp;autopause=0&amp;player_id=0&amp;app_id=58479\" frameborder=\"0\" allow=\"autoplay; fullscreen; picture-in-picture\" allowfullscreen style=\"position:absolute;top:0;left:0;width:100%;height:100%;\" title=\"New Recording - 13/04/2022, 14:07:31\"></iframe></div><script src=\"https://player.vimeo.com/api/player.js\"></script>"
}
[/block]



***



# 2. Using a form and text input (flexible way)

Here's a quick overview of what we're going to do:

- Display data in a table
- Add a form and text field
- Connect the table's data to the search input

## Display data in a table

Our first step is to connect and display data from our database in a table within our User Interface (design section). To do that, we must first add a [Data Provider](doc:data-provider). Once you add the data provider, use the `data property` in the settings panel to select your data source. Now, add a table component, as shown in the video below. You should now have a table with data.

[block:html]
{
  "html": "<div style=\"padding:56.25% 0 0 0;position:relative;\"><iframe src=\"https://player.vimeo.com/video/698637775?h=f888470323&amp;badge=0&amp;autopause=0&amp;player_id=0&amp;app_id=58479\" frameborder=\"0\" allow=\"autoplay; fullscreen; picture-in-picture\" allowfullscreen style=\"position:absolute;top:0;left:0;width:100%;height:100%;\" title=\"New Recording - 12/04/2022, 15:29:20\"></iframe></div><script src=\"https://player.vimeo.com/api/player.js\"></script>"
}
[/block]



## Add a form and text field

To add search to our table, we must wrap our data provider and table with a form. 

### Adding the form component

Add a form component. In your component tree, move your form component above your data provider, and then nest your data provider (with the nested table) inside your form.  In the form's settings panel, change its type to `update`. And change the Schema of your form to your data source, in our case _Sales_.

[block:html]
{
  "html": "<div style=\"padding:56.19% 0 0 0;position:relative;\"><iframe src=\"https://player.vimeo.com/video/699005181?h=a974b0fb95&amp;badge=0&amp;autopause=0&amp;player_id=0&amp;app_id=58479\" frameborder=\"0\" allow=\"autoplay; fullscreen; picture-in-picture\" allowfullscreen style=\"position:absolute;top:0;left:0;width:100%;height:100%;\" title=\"New Recording - 13/04/2022, 13:26:52\"></iframe></div><script src=\"https://player.vimeo.com/api/player.js\"></script>"
}
[/block]



### Adding the text field component

In your component tree, click on `New Data Provider`.  Add a `Text Field`. Move the text field above the table. In the text field settings panel, click the dropdown under the label `Field` and select the field you would like to allow users to search - in our case, _Region_.  Additionally, you can add a placeholder.

[block:html]
{
  "html": "<div style=\"padding:56.19% 0 0 0;position:relative;\"><iframe src=\"https://player.vimeo.com/video/699007261?h=7e820faf5b&amp;badge=0&amp;autopause=0&amp;player_id=0&amp;app_id=58479\" frameborder=\"0\" allow=\"autoplay; fullscreen; picture-in-picture\" allowfullscreen style=\"position:absolute;top:0;left:0;width:100%;height:100%;\" title=\"New Recording - 13/04/2022, 13:33:14\"></iframe></div><script src=\"https://player.vimeo.com/api/player.js\"></script>"
}
[/block]



## Connect the table's data to the search input

Now that our components are in place, we need to tell our data provider to filter the table when a user enters a search query. To do this, click on the New Data Provider component within our tree. In the settings panel, click `Define Filters`.

### Define filters

Within the define filters interface, we can inform our data provider how to filter our data. In our scenario, we will click the `Add filter` button. We will select the field we want users to search by - in our case _Region_. We will then select Equals. Then change `Value` to `Binding`. And on the last input (with the placeholder Value), click the lightning bolt. Then, under Bindable Values, select the Form Field binding - in our case `New Form.Fields.Region`. Then click _Save_, and _Save_ again. Below is a video to help you with the above steps.

When the user types into the search box and presses the enter or tab key, the table will be searched.

[block:html]
{
  "html": "<div style=\"padding:75% 0 0 0;position:relative;\"><iframe src=\"https://player.vimeo.com/video/699013551?h=355e1a9bbf&amp;badge=0&amp;autopause=0&amp;player_id=0&amp;app_id=58479\" frameborder=\"0\" allow=\"autoplay; fullscreen; picture-in-picture\" allowfullscreen style=\"position:absolute;top:0;left:0;width:100%;height:100%;\" title=\"New Recording - 13/04/2022, 13:50:29\"></iframe></div><script src=\"https://player.vimeo.com/api/player.js\"></script>"
}
[/block]



##  Adding a search button (optional)

After following these steps you will now have a reactive search field - i.e. whenever you press the enter key or click off the text field the search will trigger. 

You may instead prefer to only trigger the search on click of a button. A guide on doing that can be found in [this Github discussion](https://github.com/Budibase/budibase/discussions/10402#discussioncomment-5710657).

***



# 3. Using a table and dynamic filter - the filter/search hybrid approach

This approach does not provide a search input. But it is easy to set up and allows your users to filter/search their table data. We can add dynamic filtering to our data in 3 simple steps:

1. Add a data provider and change the Data setting to match your data source - in our case _Sales_.
2. Add a dynamic filter component
3. Add a table component

And that's it. Here's a quick video to demonstrate the steps above.

[block:html]
{
  "html": "<div style=\"padding:56.25% 0 0 0;position:relative;\"><iframe src=\"https://player.vimeo.com/video/699034264?h=b00845540e&amp;badge=0&amp;autopause=0&amp;player_id=0&amp;app_id=58479\" frameborder=\"0\" allow=\"autoplay; fullscreen; picture-in-picture\" allowfullscreen style=\"position:absolute;top:0;left:0;width:100%;height:100%;\" title=\"New Recording - 13/04/2022, 14:42:11\"></iframe></div><script src=\"https://player.vimeo.com/api/player.js\"></script>"
}
[/block]



***



> 📘 Ask the community about search
> 
> If you're running into any issues with adding search functionality to your data, [open a discussion](https://github.com/Budibase/budibase/discussions) within our community forum.