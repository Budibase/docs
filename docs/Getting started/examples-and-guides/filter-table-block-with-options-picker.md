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
<iframe width="800" height="600" style="border: thick double #32a1ce; max-width: 100%;" allow="clipboard-write;camera;geolocation;fullscreen" src="https://plugins.budibase.app/embed/filter-table-block-with-options-picker"></iframe>
`}</HTMLBlock>

## Scenario

The [Table block](doc:table-block) allows you to easily select and add search fields. These search fields will automatically detect the type of the underlying data field, so for example a [Text](doc:text) column will map to a [Text field](https://docs.budibase.com/docs/text-inputs#text-field). 

There are cases however were you may want to use different type of field for searching, such as an [Options picker](doc:option-picker). 

This guide will show you how to add search that will display results for a selected *Region* from a preset list of values, or countries matching a *Country* field.

<HTMLBlock>{`
<u><b style="font-size: 14px;">Challenge: </b></u><br />
<span style="position: relative; font-size: 24px; color: #000000;">★★☆☆☆</span>
`}</HTMLBlock>

***

## Steps

1. `Add component`:  **Table block**
2. In the <Glossary>Settings Panel</Glossary> select 'Country' as a *Search field*
3. `Eject block`

<Image align="center" src="https://files.readme.io/745e03f-steps1-3.png" />

4. Above the *Stringfield* in the <Glossary>Component Tree</Glossary>, `Add component`: **Options Picker**
5. Select 'Region' as the *Field* name and type 'Region' into the *Placeholder* field
6. Select 'Custom' under the *Options source* setting
7. `Define options`: `Add Option` for each region:
   1. Australia and Oceania
   2. Central America and the Caribbean
   3. Middle East and North Africa
   4. Sub-Saharan Africa
   5. Asia
   6. North America
   7. Europe

> 👍 Alphabetical sort
>
> Options picker have the *Alphabetical* sort setting checked by default, therefore options can be added in any order and still be presented correctly.

8. Click on the `Styles` tab and set *Width* to '192px'

<Image align="center" src="https://files.readme.io/6608102-steps4-8.png" />

9. Click on the *Dataprovider* and click the *Filtering* setting button
10. Select 'Match any filter' under *Behaviour* 
11. `Add filter`: "Region Equals Binding": `{{ Form.Fields.Region }}`
12. `Save` and `Preview`

<Image align="center" src="https://files.readme.io/af06bbb-steps9-12.png" />

<br />

***

## App export

*Downloads may take a few seconds.*

<HTMLBlock>{`
<!-- Add icon library -->
<link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/4.7.0/css/font-awesome.min.css">

<!-- Full width -->
<button class="btn" onclick="window.open('https://drive.google.com/uc?export=download&id=18Ib2XlDuMDpKApYxUiWJN007ZrXzXfoY', 'Download app export')" style="width:100%"><i class="fa fa-download"></i> Download</button>

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
