---
title: Filter Table Block with Options Picker
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

## App export

[Filter Table Block with Options Picker](https://cdn.budicloud.prod.budibase.net/app_plugins_cbbc01f239b24903890a91844c6cdbe0/attachments/744bd4c0-b722-468d-a53a-a55b174dda2d.gz?Expires=1689868053&Policy=eyJTdGF0ZW1lbnQiOlt7IlJlc291cmNlIjoiaHR0cHM6Ly9jZG4uYnVkaWNsb3VkLnByb2QuYnVkaWJhc2UubmV0L2FwcF9wbHVnaW5zX2NiYmMwMWYyMzliMjQ5MDM4OTBhOTE4NDRjNmNkYmUwL2F0dGFjaG1lbnRzLzc0NGJkNGMwLWI3MjItNDY4ZC1hNTNhLWE1NWIxNzRkZGEyZC5neiIsIkNvbmRpdGlvbiI6eyJEYXRlTGVzc1RoYW4iOnsiQVdTOkVwb2NoVGltZSI6MTY4OTg2ODA1M319fV19&Signature=ZPEf3xJVvWuBqorwwh-os4LGvfJdGl04mK1z-3gos0xwcZ6GUYu9Vh6hJ0sQys~QTT9ERzt4BWxfiyRJ-kOtmAoDeGat2YllGIfh~IWnsF93BFArzFjTzJ~2jYsj2wwNGNeRQHX1wuXj4AK3lbxozO~uwTAd06E6GTI2RhkrlNp1sMX5mKEL68Ueqj1~x-nZORS~lzIVIn0WX0p12xj3R77M~zOv-h2iA27Zinm0wVd6XZ9~qfo4mPvWmBJhwK-yMc-CvcmSl2B8bihPLUegQXwMuRaUb6oeXvoItgCDwu2OFH6BaKIJWsg6Y7T8vGAiuhzi~pMJY25wFIU~MfyjCg__&Key-Pair-Id=KL23NAZBW7UD1)