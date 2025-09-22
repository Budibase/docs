---
title: Filter table block with options picker
excerpt: Filter by region dropdown or country name
deprecated: false
hidden: true
metadata:
  title: ''
  description: ''
  robots: noindex
next:
  description: ''
---
## Try it out!

[block:html]
{
  "html": "<iframe width=\"800\" height=\"600\" style=\"border: thick double #32a1ce; max-width: 100%;\" allow=\"clipboard-write;camera;geolocation;fullscreen\" src=\"https://plugins.budibase.app/embed/filter-table-block-with-options-picker\"></iframe>"
}
[/block]

## Scenario

The [Table block](doc:table-block) allows you to easily select and add search fields. These search fields will automatically detect the type of the underlying data field, so for example a [Text](doc:text) column will map to a [Text field](https://docs.budibase.com/docs/text-inputs#text-field). 

There are cases however were you may want to use different type of field for searching, such as an [Options picker](doc:option-picker). 

This recipe will show you how to add search that will display results for a selected _Region_ from a preset list of values, or countries matching a _Country_ field.

[block:html]
{
  "html": "<u><b style=\"font-size: 14px;\">Challenge: </b></u><br />\n<span style=\"position: relative; font-size: 24px; color: #000000;\">★★☆☆☆</span>"
}
[/block]

***

## Steps

1. `Add component`:  **Table block**
2. In the <<glossary:Settings Panel>> select 'Country' as a _Search field_
3. `Eject block`

[block:image]
{
  "images": [
    {
      "image": [
        "https://files.readme.io/745e03f-steps1-3.png",
        null,
        ""
      ],
      "align": "center"
    }
  ]
}
[/block]

4. Above the _Stringfield_ in the <<glossary:Component Tree>>, `Add component`: **Options Picker**
5. Select 'Region' as the _Field_ name and type 'Region' into the _Placeholder_ field
6. Select 'Custom' under the _Options source_ setting
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
> Options picker have the _Alphabetical_ sort setting checked by default, therefore options can be added in any order and still be presented correctly.

8. Click on the `Styles` tab and set _Width_ to '192px'

[block:image]
{
  "images": [
    {
      "image": [
        "https://files.readme.io/6608102-steps4-8.png",
        null,
        ""
      ],
      "align": "center"
    }
  ]
}
[/block]

9. Click on the _Dataprovider_ and click the _Filtering_ setting button
10. Select 'Match any filter' under _Behaviour_ 
11. `Add filter`: "Region Equals Binding": `{{ Form.Fields.Region }}`
12. `Save` and `Preview`

[block:image]
{
  "images": [
    {
      "image": [
        "https://files.readme.io/af06bbb-steps9-12.png",
        null,
        ""
      ],
      "align": "center"
    }
  ]
}
[/block]

<br />

***

## App export

[block:html]
{
  "html": "<!-- Add icon library -->\n<link rel=\"stylesheet\" href=\"https://cdnjs.cloudflare.com/ajax/libs/font-awesome/4.7.0/css/font-awesome.min.css\">\n\n<!-- Full width -->\n<button class=\"btn\" onclick=\"window.open('https://drive.google.com/uc?export=download&id=18Ib2XlDuMDpKApYxUiWJN007ZrXzXfoY', 'Download app export')\" style=\"width:100%\"><i class=\"fa fa-download\"></i> Download</button>\n\n<style>\n  /* Style buttons */\n.btn {\n  background-color: #3571de;\n  border: none;\n  color: white;\n  padding: 12px 30px;\n  cursor: pointer;\n  font-size: 16px;\n}\n\n/* Darker background on mouse-over */\n.btn:hover {\n  background-color: #2e64c9;\n}\n</style>"
}
[/block]