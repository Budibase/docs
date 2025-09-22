---
title: Cascading dropdown filters
excerpt: 'Example: Filter a city picker by the chosen country of another options picker'
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

[block:html]
{
  "html": "<iframe width=\"800\" height=\"600\" frameborder=\"0\" allow=\"clipboard-write;camera;geolocation;fullscreen\" src=\"https://cprem.budibase.app/embed/guide-cascading-dropdown-filtering\"></iframe>"
}
[/block]


## Scenario

You have a **Country** table and a **City** table, with a relationship defined between them as _One Country -> Many Cities_.

Your form will have an [Options picker](doc:option-picker) that will allow the end-user to select a country, which will then populate a second [Relationship picker](https://docs.budibase.com/docs/pickers#relationship-picker) with the cities that relate to the chosen country.

[block:html]
{
  "html": "<u><b style=\"font-size: 14px;\">Challenge: </b></u><br />\n<span style=\"position: relative; font-size: 24px; color: currentColor;\">★★☆☆☆</span>"
}
[/block]


***

## Steps

1. `Add component`: **Form**
2. In the <<glossary:Settings Panel>>, set _Schema_ to 'Country'

[block:image]
{
  "images": [
    {
      "image": [
        "https://files.readme.io/c70ede6ab3712887a822136e3feff1259d5a7be72deaf54242c5cd108c2af2b9-Screenshot_2025-08-15_at_10.19.29.png",
        "",
        ""
      ],
      "align": "center",
      "sizing": "400px"
    }
  ]
}
[/block]


3. `Add component`: **Data provider**
4. In the <<glossary:Settings Panel>>, set _Data_ to the 'Country' table
5. Set the _Limit_ to 200, and untick _Paginate_

[block:image]
{
  "images": [
    {
      "image": [
        "https://files.readme.io/79f54b11d7fda3204926bde636b077a6e4a92ccd3599bb06f87e2a01df88484f-Screenshot_2025-08-15_at_10.20.10.png",
        "",
        ""
      ],
      "align": "center",
      "sizing": "400px"
    }
  ]
}
[/block]


6. `Add component`: **Options Picker**
7. In the <<glossary:Settings Panel>>, enter 'Country' for the _Field_, and add a _Label_
8. Tick _Autocomplete_
9. Set _Options source_ to 'Data provider'
10. Set _Label column_ to 'country' and set _Value column_ to 'country_id'

[block:image]
{
  "images": [
    {
      "image": [
        "https://files.readme.io/48d999b45694b7b02a5943f63cb7843d2084a0a425ded82ba3e89706bd99de75-Screenshot_2025-08-15_at_10.21.38.png",
        "",
        ""
      ],
      "align": "center",
      "sizing": "450px"
    }
  ]
}
[/block]


11. `Add component`: **Relationship Picker** and select the 'Cities' from the _Field_ dropdown
12. Click the button beside _Filtering_
13. `Add filter`:
    1. 'country_id' Equals Binding `{{ Country Form.Fields.Country }}`
    2. Be sure to `Save`

[block:image]
{
  "images": [
    {
      "image": [
        "https://files.readme.io/dab74484c0c2c7d78d52245048f77b5d8b4bff6e757d4c7c6b23e90cd795cf1e-Screenshot_2025-08-15_at_10.23.16.png",
        "",
        ""
      ],
      "align": "center"
    }
  ]
}
[/block]


14. Click on the `Conditions` tab and click `Configure conditions`
15. `Add condition`:
    1. 'Update Setting Disabled' TO [✓] IF `{{ Country Form.Fields.Country }}` 'Is empty'
    2. Be sure to `Save`

[block:image]
{
  "images": [
    {
      "image": [
        "https://files.readme.io/852dfcdfdfbc6a21096fbf1245ba3e88bc35a12571dd2e7a63836a8b94d055e1-Screenshot_2025-08-15_at_10.24.25.png",
        "",
        ""
      ],
      "align": "center"
    }
  ]
}
[/block]


> 👍 Layout
> 
> Use [Field group layouts](https://docs.budibase.com/docs/field-groups#layout) or [Containers](doc:container) to align the pickers as desired.
> 
> More on field layout in this recipe: [Display multiple fields in one row](doc:display-mutiple-fields-in-one-row)

16. Finally we want to clear the selected cities when the country changes. Click on the **Country Options Picker**, and click the button beside the _On change_ setting
17. Add the **Update Field Value** action:
    1. Select the _Form_
    2. Set _Type_ to 'Reset to default value'
    3. Select the 'Cities' _Field_ from the dropdown
    4. Be sure to `Save`

[block:image]
{
  "images": [
    {
      "image": [
        "https://files.readme.io/c3032e0b0c4a127a60f837b7c84cd00f9ab8811f5169b0719659cd7bc61a94fa-Screenshot_2025-08-15_at_10.25.09.png",
        "",
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

_Downloads may take a few seconds._

[block:html]
{
  "html": "<!-- Add icon library -->\n<link rel=\"stylesheet\" href=\"https://cdnjs.cloudflare.com/ajax/libs/font-awesome/4.7.0/css/font-awesome.min.css\">\n\n<!-- Full width -->\n<button class=\"btn\" onclick=\"window.open('https://drive.google.com/uc?export=download&id=1XlnVqqCYv4JyWGhEIo_R6KLMTIYtcQeu')\" style=\"width:100%\"><i class=\"fa fa-download\"></i> Download</button>\n\n<style>\n  /* Style buttons */\n.btn {\n  background-color: #3571de;\n  border: none;\n  color: white;\n  padding: 12px 30px;\n  cursor: pointer;\n  font-size: 16px;\n}\n\n/* Darker background on mouse-over */\n.btn:hover {\n  background-color: #2e64c9;\n}\n</style>"
}
[/block]