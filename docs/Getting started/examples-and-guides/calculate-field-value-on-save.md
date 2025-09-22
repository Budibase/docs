---
title: Calculate field value on save
excerpt: Displaying a preferred unit to end users, but always save a standardised unit
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
  "html": "<iframe width=\"800\" height=\"480\" style=\"border: thick double #32a1ce; max-width: 100%;\" allow=\"clipboard-write;camera;geolocation;fullscreen\" src=\"https://plugins.budibase.app/embed/calculate-field-value-on-save\"></iframe>"
}
[/block]

## Scenario

[Forms](doc:forms) will often have [number fields](https://docs.budibase.com/docs/text-inputs#number-field) for inputting measurements, which could be in different units such as ounces and kilograms, centimetres and inches, or even different currencies. 

This guide will demonstrate how to allow an <<glossary:End User>> to select a unit of measurement, that will automatically convert the value, but making sure that any row saved will use a standardised unit of meters.

[block:html]
{
  "html": "<u><b style=\"font-size: 14px;\">Challenge: </b></u><br />\n<span style=\"position: relative; font-size: 24px; color: #000000;\">★★★☆☆</span>"
}
[/block]

***

## Steps

1. `Add component`: **Form**, and set the _Schema_ to your table with the 'Distance' number column
2. `Add component`: **Field Group**
3. In the <<glossary:Settings Panel>>, click `Update form fields`

[block:image]
{
  "images": [
    {
      "image": [
        "https://files.readme.io/ab42022-steps1_to_3.png",
        "",
        ""
      ],
      "align": "center"
    }
  ]
}
[/block]

4. `Add component`: **Options Picker**
5. In the <<glossary:Settings Panel>>, manually enter a _Field_ name of 'UnitPicker'
6. Provide a _Label_: 'Unit'
7. Set the <<glossary:Default Value>> to 1
8. Uncheck _Alphabetical_
9. Set _Options source_ to 'Custom'
10. Click `Define Options`:

    | Label  | Value |
    | :----- | :---- |
    | Feet   | 0.305 |
    | Yards  | 0.914 |
    | Meters | 1     |

[block:image]
{
  "images": [
    {
      "image": [
        "https://files.readme.io/e658e09-steps4_to_10.png",
        "",
        ""
      ],
      "align": "center"
    }
  ]
}
[/block]

11. Click the button beside _On change_
12. `Add Action`: **Update Field Value**

    1. Select the _Form_
    2. Set _Type_ to 'Set value'
    3. Select the _Distance_ form field
    4. Click the lightning bolt and select the _JavaScript_ tab. Add the following:

    ```javascript
    const previousUnit = $("Form.Fields.UnitPicker");
    const newUnit = $("Field Value");
    const previousDistance = $("Form.Fields.Distance");

    return (previousDistance * (previousUnit / newUnit)).toFixed(4);
    ```

> 📘 Previous and new values on change
> 
> It's worth bringing attention to the use of the options picker bindings. 
> 
> `$("Form.Fields.UnitPicker")` will get the value of the field before the change occurs.
> 
> `$("Field Value")` is the new value that will update the field when the _on change_ finishes.

[block:image]
{
  "images": [
    {
      "image": [
        "https://files.readme.io/c4d5a9d-steps11_to_12.png",
        "",
        ""
      ],
      "align": "center"
    }
  ]
}
[/block]

13. Click the button beside _Validation_
14. `Add Rule`: _Required_ and type in an error message to display
15. Be sure to `Save`

[block:image]
{
  "images": [
    {
      "image": [
        "https://files.readme.io/7c77570-steps13_to_15.png",
        "",
        ""
      ],
      "align": "center"
    }
  ]
}
[/block]

16. `Add component`: **Button**
17. In the <<glossary:Settings Panel>>, click the button beside _On click_
18. `Add Action`: **Validate Form** and select the form
19. `Add Action`: **Save Row**
20. Select the form as the _Datasource_, and the destination _Table_
21. `Add Column`: Select the 'Distance column' and provide the following binding: `{{ multiply Form.Fields.Distance Form.Fields.UnitPicker }}`
22. `Save`

[block:image]
{
  "images": [
    {
      "image": [
        "https://files.readme.io/1ac9356-steps16_to_22.png",
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
  "html": "<!-- Add icon library -->\n<link rel=\"stylesheet\" href=\"https://cdnjs.cloudflare.com/ajax/libs/font-awesome/4.7.0/css/font-awesome.min.css\">\n\n<!-- Full width -->\n<button class=\"btn\" onclick=\"window.open('https://drive.google.com/uc?export=download&id=1BHupoHArxEiXsmcGbsY11Fv4FuLtS9QF')\" style=\"width:100%\"><i class=\"fa fa-download\"></i> Download</button>\n\n<style>\n  /* Style buttons */\n.btn {\n  background-color: #3571de;\n  border: none;\n  color: white;\n  padding: 12px 30px;\n  cursor: pointer;\n  font-size: 16px;\n}\n\n/* Darker background on mouse-over */\n.btn:hover {\n  background-color: #2e64c9;\n}\n</style>"
}
[/block]