---
title: Adding search (v3)
excerpt: How to add and connect a search field to your data within Budibase
deprecated: false
hidden: true
metadata:
  title: ''
  description: ''
  robots: index
next:
  description: ''
---
Most internal apps involve viewing and interacting with data. Adding search to your data display component, such as a [Table](doc:table) provides a better experience for the end-user. Using Budibase, there are three ways to achieve this:

1. Using the Table itself
2. Using a form, table, and text input - the flexible way
3. Using a table and dynamic filter - the filter/search hybrid approach (also very easy)

This guide will cover all three methods for adding search to a table. For each process, you will need data. In the tutorials, we will use the following CSV.  If you have data, please continue to the tutorials below. If you don't have data, please download (File > Download) the following CSV and upload it to the [Budibase DB](doc:budibasedb). 

<Embed url="https://docs.google.com/spreadsheets/d/1kPc6pY_vyWcaaP9Ddp_OwOG2oeUAKhgg-u-mJi5n8ck/edit?usp=sharing" title="iframe" favicon="https://ssl.gstatic.com/docs/spreadsheets/favicon3.ico" image="https://lh6.googleusercontent.com/vEi1U8TSKGZ2xOjrih3K_myrN-rLRMLs2OXqQ61mAYXB3QGnEkG2KaWp42SUJvXF6Uzf6Z6UyMcLMA=w1200-h630-p" provider="docs.google.com" href="https://docs.google.com/spreadsheets/d/1kPc6pY_vyWcaaP9Ddp_OwOG2oeUAKhgg-u-mJi5n8ck/edit?usp=sharing" typeOfEmbed="iframe" height="300px" width="100%" iframe="true" />

**Right, let's do this 🏁** 

***

# 1. Using the table itself

Built into the [Table](doc:table) is a search field for every column you choose to display. 

*Please note, that the searchable text field will appear only if the data type of the field you choose is text/string. If the field is stored as an option, a picker component will appear instead.* 

<Image align="center" src="https://files.readme.io/f5917da0d45ff8556dcfaa171cab51d429048b1be80685665bcae51e8b165c5f-Screen_Recording_2024-10-24_at_16.55.21.gif" />

***

# 2. Using a form and text input (flexible way)

Here's a quick overview of what we're going to do:

* Display data in a table
* Add a form and text field
* Connect the table's data to the search input

## Display data in a table

To get started, add a table component to your screen, and in the <Glossary>Settings Panel</Glossary> choose the data source to be the table you wish to display.  to select your <Glossary>Datasource</Glossary>. You should now have a table with data.

<Image align="center" src="https://files.readme.io/2da5e191e08a716692bc9282326de2bc92395cb43612336cc4a78c29eb8df65a-Screenshot_2025-08-18_at_11.28.37.png" />

## Add a form and text field

Add a new text field. Give the text field a name (this is how it will appear in bindings) and a label (this is what the user will see). You may also wish to add placeholder or help text.

### Define filters

Now in the settings menu of the Table Component, click to add a filter

<Image align="center" src="https://files.readme.io/8984325215d880b215e016647d0eb30d4e3c284f68b0aa52fb20e5d9b7afaa96-Screenshot_2025-08-18_at_11.32.26.png" />

<Image align="center" src="https://files.readme.io/a47ec2f19274fb6c2f26b4cf3a8fc54544bd433940e69f5068936259c1f701e0-Screenshot_2025-08-18_at_11.31.40.png" />

With these settings, when no nothing in in the search bar, all rows will be displayed. When something is in the search bar, all rows where the region is *like* (ie a partial or full match) will be returned. When Country or Item Type are an exact match, rows will be returned accordingly.  When there are no rows that match, the table will show all rows available.

<Image alt="An example using Customer Name to search the data." align="center" src="https://files.readme.io/a7e62bbdbf924b237b50109a25816aa2cea648d71705ee6592b083b3142d5463-Screen_Recording_2024-10-25_at_14.01.18.gif">
  An example using Customer Name to search the data.
</Image>

##  Adding a search button (optional)

After following these steps you will now have a reactive search field - i.e. whenever you press the enter key or click off the text field the search will trigger. 

You may instead prefer to only trigger the search on click of a button. A guide on doing that can be found in [this Github discussion](https://github.com/Budibase/budibase/discussions/10402#discussioncomment-5710657).

***

# 3. Using a table and dynamic filter - the filter/search hybrid approach

This approach does not provide a search input. But it is easy to set up and allows your users to filter/search their table data. We can add dynamic filtering to our data in 3 simple steps:

1. Add a data provider and change the Data setting to match your data source - in our case *Sales*.
2. Add a dynamic filter component
3. Add a table component

## Get Started

1. Start by adding a Data Provider, and selecting the data source you wish to serve to the user. 

<Image align="center" src="https://files.readme.io/7e186d27212492df108b0180a31e60c6970418461069874365add00dad529ca3-Screenshot_2025-08-18_at_12.01.22.png" />

2. Next, add a Table component, and set it's Data source to be the Data Provider you added int the step above. It's important to use the Data Provider as the source here, instead of simply setting the table itself as your datasource.
3. <Image align="center" src="https://files.readme.io/4ebacec14d0e470f3131961ebb55b0a6cdfb59c544c597fa1ac24a3b5347f33d-Screenshot_2025-08-18_at_12.02.00.png" />

   Next, add a Dynamic Filter component and set it's Data source to also be the same Data Provider. Your component tree should look similar to this: 

   <Image align="center" src="https://files.readme.io/3214d6281e823bf968bf144de4aa0b5765b5c806333a9d6f39d3d87be39568c2-Screenshot_2025-08-18_at_12.12.15.png" />
4. In the settings of the Dynamic Filter you can now give users the option to set filters based on allowed columns. 

   <Image align="center" src="https://files.readme.io/b619915dc4ab133cd1b7c1bc749fca17529e63857414b49d394a8734d8d8e837-Screenshot_2025-08-18_at_12.13.55.png" />

As we can see in the example below a user can set their own filters to help them find and display specific rows that they are looking for.

<Image align="center" src="https://files.readme.io/eee7ba4b38dbf5f38c045846150cc581f84c4e81080859e4d1c2477a547745d8-Screen_Recording_2024-10-25_at_15.28.09.gif" />

***

> 👍 Ask the community about search
>
> If you're running into any issues with adding search functionality to your data, [open a discussion](https://github.com/Budibase/budibase/discussions) within our community forum.
