---
title: Filter table with options picker
excerpt: Filter by region dropdown or country name
deprecated: false
hidden: false
metadata:
  title: ''
  description: kba_5hi9u
  robots: index
next:
  description: ''
---
## Try it out!

<HTMLBlock>{`
<iframe width="800" height="600" frameborder="0" allow="clipboard-write;camera;geolocation;fullscreen" src="https://cprem.budibase.app/embed/guide-filter-table-block-with-options-picker"></iframe>
`}</HTMLBlock>

## Scenario

The Table component can search from each column header, but some workflows need a different control, such as an [Options picker](doc:option-picker).

Use this pattern to filter results by a selected *Region* from a fixed list, or by countries that match a *Country* field.

<HTMLBlock>{`
<u><b style="font-size: 14px;">Challenge: </b></u><br />
<span style="position: relative; font-size: 24px; color: currentColor;">★★☆☆☆</span>
`}</HTMLBlock>

***

## Steps

1. Download the following .csv file containing the sample data for this guide [Sample Data](https://drive.google.com/file/d/1Pl8WQ14L4_7jVzD4UgHLMc032TfKlK0y/view?usp=sharing)
2. In the Data tab, click `Create new table` and choose `Create a Table from a CSV or JSON file` to upload the sample data. You may need to reject columns that import incorrectly and choose a display column.

   1. <Image align="center" src="https://files.readme.io/140d16e413f621ab46a48571d87c2532d0810448bbf170ae2801ea9d0814df07-Screenshot_2025-08-15_at_10.29.58.png" />
3. If needed, reject any failed imports and select a display column.

   ![](https://files.readme.io/8452873586fc5d800ad6bfd9ccd0213bb9d6089213b56e7212cf5d1a73ec5e8e-image.png)
4. Once the data is imported, you should see the sample sales table in the Data tab.
5. Create a new app.
6. Create a new blank screen. Add a `Table` component and set the Data option to `Sales`.

   <Image align="center" src="https://files.readme.io/697e98e30e1a21f25af67cb7e9a5fe179e404e0578e90d5a96f1fe6bcb5c21bd-Screenshot_2025-08-15_at_10.35.14.png" />
7. Add a `Form` component and add an `Options Picker` as a child of the form.\
   \*Form components are not to be confused with Form Blocks
8. In the `Options Picker` settings, add a field value and label. Set both to `Region`.
9. Set the Options Source to `Custom`.

   ![](https://files.readme.io/ccceae83f7577e14b24240c57bff967d28d08b3c5cf22d9ae50a8c565ba02864-image.png)
10. Click `Define options`, then add an option for each region:

    1. Australia and Oceania
    2. Central America and the Caribbean
    3. Middle East and North Africa
    4. Sub-Saharan Africa
    5. Asia
    6. North America
    7. Europe
11. Return to the table settings and add a filter.

    ![](https://files.readme.io/c4957e4a84ec7c8b1dd38d12aa088eca78256fae0070e923ce2aeef952f04c78-image.png)
12. Once the filter is set, you can select a region from the dropdown in the builder. Use preview to test the full flow.

To filter by multiple regions, such as Europe and Asia, use a `Multi-Select Picker` and the `Is In` operator.

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
