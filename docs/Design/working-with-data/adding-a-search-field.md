---
title: Adding search
excerpt: How to add and connect a search field to your data within Budibase
deprecated: false
hidden: false
metadata:
  title: ''
  description: ''
  robots: index
next:
  description: ''
---
Most internal apps involve viewing and interacting with data. Adding search to your data display component, such as a [Table](doc:table) provides a better experience for the end-user. Using Budibase, there are three ways to achieve this:

1. Using the Table block - the opinionated, fast way
2. Using a form, table, and text input - the flexible way
3. Using a table and dynamic filter - the filter/search hybrid approach (also very easy)

This guide will cover all three methods for adding search to a table. For each process, you will need data. In the tutorials, we will use the following CSV.  If you have data, please continue to the tutorials below. If you don't have data, please download (File > Download) the following CSV and upload it to the [Budibase DB](doc:budibasedb). 

<Embed url="https://docs.google.com/spreadsheets/d/1kPc6pY_vyWcaaP9Ddp_OwOG2oeUAKhgg-u-mJi5n8ck/edit?usp=sharing" title="Budibase-sales-example" favicon="https://ssl.gstatic.com/docs/spreadsheets/favicon3.ico" image="https://lh6.googleusercontent.com/vEi1U8TSKGZ2xOjrih3K_myrN-rLRMLs2OXqQ61mAYXB3QGnEkG2KaWp42SUJvXF6Uzf6Z6UyMcLMA=w1200-h630-p" provider="docs.google.com" href="https://docs.google.com/spreadsheets/d/1kPc6pY_vyWcaaP9Ddp_OwOG2oeUAKhgg-u-mJi5n8ck/edit?usp=sharing" iframe="true" />

**Right, let's do this 🏁** 

***

# 1. Using the table block (the easy way)

This is the easiest and fastest way to allow users to view and search data. But, it is opinionated. You cannot customize where the search input goes or augment the search functionality. 

Start by adding the [Table block](doc:table-block) component. Give your table a title, select your <Glossary>Datasource</Glossary>, and choose your Search columns - in our case, Regions. 

*Please note, that the searchable text field will appear only if the data type of the field you choose is text/string. If the field is stored as an option, a picker component will appear instead.* 

<HTMLBlock>{`
<iframe src="https://player.vimeo.com/video/840861745?badge=0&amp;autopause=0&amp;player_id=0&amp;app_id=58479" width="634" height="654" frameborder="0" allow="autoplay; fullscreen; picture-in-picture" allowfullscreen title="Search with table block"></iframe>
`}</HTMLBlock>

***

# 2. Using a form and text input (flexible way)

Here's a quick overview of what we're going to do:

* Display data in a table
* Add a form and text field
* Connect the table's data to the search input

## Display data in a table

Our first step is to connect and display data from our database in a table within our User Interface (design section). To do that, we must first add a [Data provider](doc:data-provider). Once you add the data provider, use the *Data* in the <Glossary>Settings Panel</Glossary> to select your <Glossary>Datasource</Glossary>. Now, add a table component, as shown in the video below. You should now have a table with data.

<HTMLBlock>{`
<iframe src="https://player.vimeo.com/video/840862068?badge=0&amp;autopause=0&amp;player_id=0&amp;app_id=58479" width="634" height="654" frameborder="0" allow="autoplay; fullscreen; picture-in-picture" allowfullscreen title="Adding a data provider with table"></iframe>
`}</HTMLBlock>

## Add a form and text field

To add search to our table, we must wrap our data provider and table with a form. 

### Adding the form component

Add a form component. In your component tree, move your form component above your data provider, and then nest your data provider (with the nested table) inside your form.  In the form's settings panel, change its type to `update`. And change the Schema of your form to your data source, in our case *Sales*.

<HTMLBlock>{`
<iframe src="https://player.vimeo.com/video/840862092?title=0&amp;byline=0&amp;portrait=0&amp;speed=0&amp;badge=0&amp;autopause=0&amp;player_id=0&amp;app_id=58479" width="634" height="654" frameborder="0" allow="autoplay; fullscreen; picture-in-picture" allowfullscreen title="Adding a form component"></iframe>
`}</HTMLBlock>

### Adding the text field component

In your component tree, click on 'New Data Provider'.  Add a [Text field](doc:text-inputs). Move the text field above the table. In the text field settings panel, click the dropdown under the label *Field* and select the field you would like to allow users to search - in our case, *Region*.  Additionally, you can add a placeholder.

<HTMLBlock>{`
<iframe src="https://player.vimeo.com/video/840862403?title=0&amp;byline=0&amp;portrait=0&amp;speed=0&amp;badge=0&amp;autopause=0&amp;player_id=0&amp;app_id=58479" width="634" height="654" frameborder="0" allow="autoplay; fullscreen; picture-in-picture" allowfullscreen title="Adding a text field"></iframe>
`}</HTMLBlock>

## Connect the table's data to the search input

Now that our components are in place, we need to tell our data provider to filter the table when a user enters a search query. To do this, click on the 'New Data Provider' component within our tree. In the settings panel, click `Define Filters`.

### Define filters

Within the define filters interface, we can inform our data provider how to filter our data. In our scenario, we will click the `Add filter` button. We will select the field we want users to search by - in our case *Region*. We will then select Equals. Then change `Value` to `Binding`. And on the last input (with the placeholder Value), click the lightning bolt. Then, under Bindable Values, select the Form Field binding - in our case `New Form.Fields.Region`. Then click *Save*, and *Save* again. Below is a video to help you with the above steps.

When the user types into the search box and presses the enter or tab key, the table will be searched.

<HTMLBlock>{`
<iframe src="https://player.vimeo.com/video/840862423?title=0&amp;byline=0&amp;portrait=0&amp;speed=0&amp;badge=0&amp;autopause=0&amp;player_id=0&amp;app_id=58479" width="640" height="564" frameborder="0" allow="autoplay; fullscreen; picture-in-picture" allowfullscreen title="Define filters"></iframe>
`}</HTMLBlock>

##  Adding a search button (optional)

After following these steps you will now have a reactive search field - i.e. whenever you press the enter key or click off the text field the search will trigger. 

You may instead prefer to only trigger the search on click of a button. A guide on doing that can be found in [this Github discussion](https://github.com/Budibase/budibase/discussions/10402#discussioncomment-5710657).

***

# 3. Using a table and dynamic filter - the filter/search hybrid approach

This approach does not provide a search input. But it is easy to set up and allows your users to filter/search their table data. We can add dynamic filtering to our data in 3 simple steps:

1. Add a data provider and change the Data setting to match your data source - in our case *Sales*.
2. Add a dynamic filter component
3. Add a table component

And that's it. Here's a quick video to demonstrate the steps above.

<HTMLBlock>{`
<iframe src="https://player.vimeo.com/video/840862452?title=0&amp;byline=0&amp;portrait=0&amp;speed=0&amp;badge=0&amp;autopause=0&amp;player_id=0&amp;app_id=58479" width="640" height="564" frameborder="0" allow="autoplay; fullscreen; picture-in-picture" allowfullscreen title="Adding a dynamic filter"></iframe>
`}</HTMLBlock>

***

> 👍 Ask the community about search
>
> If you're running into any issues with adding search functionality to your data, [open a discussion](https://github.com/Budibase/budibase/discussions) within our community forum.
