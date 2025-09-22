---
title: Filter table with options picker
excerpt: Filter by region dropdown or country name
deprecated: false
hidden: false
metadata:
  title: ''
  description: ''
  robots: index
next:
  description: ''
---
## Try it out!

<HTMLBlock>{`
<iframe width="800" height="600" frameborder="0" allow="clipboard-write;camera;geolocation;fullscreen" src="https://cprem.budibase.app/embed/guide-filter-table-block-with-options-picker"></iframe>
`}</HTMLBlock>

## Scenario

The Table component allows you to use the head of each column as a search field, however there are cases were you may want to use different type of field for searching, such as an [Options picker](doc:option-picker). 

This guide will show you how to add search that will display results for a selected *Region* from a preset list of values, or countries matching a *Country* field.

<HTMLBlock>{`
<u><b style="font-size: 14px;">Challenge: </b></u><br />
<span style="position: relative; font-size: 24px; color: currentColor;">★★☆☆☆</span>
`}</HTMLBlock>

***

## Steps

1. Download the following .csv file containing the sample data for this guide [https://drive.google.com/file/d/1Q4l1QJ1OaR\_G3P65JVhSjw2qoMR0FP6m/view?usp=sharing](https://drive.google.com/file/d/1Q4l1QJ1OaR_G3P65JVhSjw2qoMR0FP6m/view?usp=sharing)
2. In the Data tab of your Budibase app, click "Create new table", and select the "Create a Table from a CSV or JSON file" to upload the sample data. You may need to reject columns that have been unsuccessfully imported, and choose a display column.

   1. ![](https://files.readme.io/946682f384e5b9a6d7c75d3ea615ac8b396c66fc706f2e691da04269557ac7ae-image.png)
3. You may need to reject columns that were unsuccessfully imported, and select a Display Column. 

   ![](https://files.readme.io/8452873586fc5d800ad6bfd9ccd0213bb9d6089213b56e7212cf5d1a73ec5e8e-image.png)
4. When the data has been successfully imported, you should see a table of sample sales data populated in the Data Tab.
5. Head to the Design section, and create a new blank screen. Add a new Table component, and set the Data option to Sales Data. 

   ![](https://files.readme.io/689deb660b4d2e8dd3b6dc9cc6dc68435b3931a74e95ad70c8d628cc880f96e5-image.png)
6. Next, add a Form component\* and add an Options Picker as a child of the form.\
   \*Form components are not to be confused with Form Blocks
7. In the settings of the Options Picker, you'll need to add a field value, and you should add a label - we'll set both to "Region".
8. Set the Options Source to Custom.  

   ![](https://files.readme.io/ccceae83f7577e14b24240c57bff967d28d08b3c5cf22d9ae50a8c565ba02864-image.png)
9. click Define options: `Add Option\` for each region:

   1. Australia and Oceania
   2. Central America and the Caribbean
   3. Middle East and North Africa
   4. Sub-Saharan Africa
   5. Asia
   6. North America
   7. Europe

      ![](https://files.readme.io/bf7bd0108410b3375276c6b30cf6709f5d028ee690ea8502441556f2300ab098-image.png)
10. Head back to the Table settings, and add a filter. 

    ![](https://files.readme.io/c4957e4a84ec7c8b1dd38d12aa088eca78256fae0070e923ce2aeef952f04c78-image.png)
11. Once the filter is set, you'll be able to select a region from the dropdown from within the builder, but to fully test you should click the preview button to take a closer look.

You may also decide that you want to filter by multiple region, for example when looking for sales in Europe and Asia - In this case, you should use a Multi-Select Picker component, and your filter should use the "Is In" operator. 

![](https://files.readme.io/1938cfa4d4d6644cd7212336107828c04d4b3eece342f22c048b903691f97e99-image.png)

<br />

***

## App export

*Downloads may take a few seconds.*

<HTMLBlock>{`
<!-- Add icon library -->
<link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/4.7.0/css/font-awesome.min.css">

<!-- Full width -->
<button class="btn" onclick="window.open('https://drive.google.com/file/d/13NI6ECG4ay4njmM9e8TbgQXI5ZhMBcGM/view?usp=sharing', 'Download app export')" style="width:100%"><i class="fa fa-download"></i> Download</button>

<style>
  /* Style buttons */
.btn {
  background-color: #3571de;
  border: none;
  color: white;
  padding: 12px 30px;
  cursor: pointer;
  font-size: 16px;
}

/* Darker background on mouse-over */
.btn:hover {
  background-color: #2e64c9;
}
</style>
`}</HTMLBlock>
