---
title: Populate form fields on select
excerpt: Auto-filling a form for a chosen record
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
  "html": "<iframe width=\"800\" height=\"600\" style=\"border: thick double #32a1ce; max-width: 100%;\" allow=\"clipboard-write;camera;geolocation;fullscreen\" src=\"https://plugins.budibase.app/embed/populate-form-fields-on-select\"></iframe>"
}
[/block]

## Scenario

Given have a [Form block](doc:form-block) that displays some fields for a table record, you want the <<glossary:End User>> to be able to select a record from an [Options picker](doc:option-picker) and update the form fields with the correct information. 

[App state](doc:app-state) will be used to allow communication between our search field, and the details form.

[block:html]
{
  "html": "<u><b style=\"font-size: 14px;\">Challenge: </b></u><br />\n<span style=\"position: relative; font-size: 24px; color: #000000;\">★★☆☆☆</span>"
}
[/block]

***

## Steps

1. `Add component`: **Form**
2. `Add component`: **Data Provider**
3. In the <<glossary:Settings Panel>>, select the 'Employees' table
4. Untick _Paginate_

[block:image]
{
  "images": [
    {
      "image": [
        "https://files.readme.io/ee3d481-steps1_to_4.png",
        "",
        ""
      ],
      "align": "center"
    }
  ]
}
[/block]

5. `Add component`: **Options Picker**
6. In the <<glossary:Settings Panel>>, type in a _Field_ name and _Label_
7. Check _Autocomplete_
8. Select 'Data provider' as the _Options source_
9. Select 'Email' as the _Label column_ and '\_id' as the _Value column_

[block:image]
{
  "images": [
    {
      "image": [
        "https://files.readme.io/f0a5758-steps5_to_9.png",
        "",
        ""
      ],
      "align": "center"
    }
  ]
}
[/block]

10. In the **Data** section, right-click the 'Employees' row you want to be the <<glossary:Default Value>>. Click `Copy row _id`.

[block:image]
{
  "images": [
    {
      "image": [
        "https://files.readme.io/5aefcb9-Screenshot_2023-08-29_at_11.19.55.png",
        "",
        ""
      ],
      "align": "center"
    }
  ]
}
[/block]

11. Back to the **Design** section, paste the row **\_id** you copied into the _Default value_ setting of the **Options Picker**
12. Click the button beside _On change_. `Add Action`: **Update State**
    1. _Set value_ 'SelectedEmployee' to `{{ Field Value }}`
    2. Be sure to `Save`

[block:image]
{
  "images": [
    {
      "image": [
        "https://files.readme.io/cf46056-steps11_and_12.png",
        "",
        ""
      ],
      "align": "center"
    }
  ]
}
[/block]

13. Click on the **Screen** component (root level of the <<glossary:Component Tree>>). `Add component`: **Form Block**
14. In the <<glossary:Settings Panel>>, set _Type_ to 'Update', and _Table_ to 'Employees'
15. Set _Row ID_ to `{{ State.SelectedEmployee }}`
16. Untick _Show save button_

[block:image]
{
  "images": [
    {
      "image": [
        "https://files.readme.io/ae53b88-steps13_to_16.png",
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
  "html": "<!-- Add icon library -->\n<link rel=\"stylesheet\" href=\"https://cdnjs.cloudflare.com/ajax/libs/font-awesome/4.7.0/css/font-awesome.min.css\">\n\n<!-- Full width -->\n<button class=\"btn\" onclick=\"window.open('https://drive.google.com/uc?export=download&id=1r88gcVMZUV1ehsSob-uKKnCRkZMI-pHv')\" style=\"width:100%\"><i class=\"fa fa-download\"></i> Download</button>\n\n<style>\n  /* Style buttons */\n.btn {\n  background-color: #3571de;\n  border: none;\n  color: white;\n  padding: 12px 30px;\n  cursor: pointer;\n  font-size: 16px;\n}\n\n/* Darker background on mouse-over */\n.btn:hover {\n  background-color: #2e64c9;\n}\n</style>"
}
[/block]