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
  "html": "<iframe width=\"800\" height=\"600\" frameborder=\"0\" allow=\"clipboard-write;camera;geolocation;fullscreen\" src=\"https://cprem.budibase.app/embed/guide-calculate-field-value-on-save-export\"></iframe>"
}
[/block]


## Scenario

[Forms](doc:forms) will often have [number fields](https://docs.budibase.com/docs/text-inputs#number-field) for inputting measurements, which could be in different units such as ounces and kilograms, centimetres and inches, or even different currencies. 

This guide will demonstrate how to allow an <<glossary:End User>> \<\<to select a unit of measurement, that will automatically convert the value, but making sure that any row saved will use a standardised unit of meters.

[block:html]
{
  "html": "<u><b style=\"font-size: 14px;\">Challenge: </b></u><br />\n<span style=\"position: relative; font-size: 24px; color: currentColor;\">★★★☆☆</span>"
}
[/block]


***

## Steps

1. In the Data section, create a new table using Budibase DB, name it Distance
2. [block:image]{"images":[{"image":["https://files.readme.io/fc45e717d1062a269e939ac425ca9cf3d412e9ec9452b5eeaa1e2f5c8a2d632d-Screenshot_2025-08-15_at_08.45.40.png",null,"Modal for creating a table"],"align":"center"}]}[/block]

   Add two columns to your events table - a text column called "event" and a number column called "distance"

   [block:image]{"images":[{"image":["https://files.readme.io/b63d1353f4f1e053b6fbcd5431febb651ee73b105e3799f5900d3c9f54b59de9-Screenshot_2025-08-15_at_08.52.29.png",null,""],"align":"center"}]}[/block]
3. Go to the app screen, create a new app called Calculate field value on save
4. Create a new blank screen (if you haven't already), and add a Form component (not to be confused with a Form Block). Set type to "create" and the schema to your events table.

   [block:image]{"images":[{"image":["https://files.readme.io/16acdb8b60f305408c96a025cfe89983f7cad34e369a6b45ab137c848156bf58-Screenshot_2025-08-15_at_08.55.27.png",null,""],"align":"center"}]}[/block]
5. Add a **Field Group** component, and click "Update form fields" - this will fetch the columns from your table and create an input field for each. Set the "Type" option to 3 Columns.

   [block:image]{"images":[{"image":["https://files.readme.io/79566456ff140c0a510c08429a3ddd1d212692061b99906f7f6f2e98c5ce6ce3-Screenshot_2025-08-15_at_09.31.49.png",null,""],"align":"center","sizing":"300px"}]}[/block]
6. Add an Options Picker as a child of your form, and set the field and label to "unit". Set the Options Source to custom, and click "define options. 

   [block:image]{"images":[{"image":["https://files.readme.io/9868c45dfd64989d02e71192c31380b329ab1c16e5a60bea4792099c7086e075-Screenshot_2025-08-15_at_09.34.34.png",null,""],"align":"center","sizing":"400px"}]}[/block]

   Add 3 options:

   | Units  | Value |
   | :----- | :---- |
   | Meters | 1     |
   | Yards  | 0.914 |
   | Feet   | 0.30  |
7. Be sure to set the default value to 1, and uncheck "Alphabetical"
8. Add an "On change" action to the options picker using the "Update Field Value" action  
   i. Select the _Form_  
   ii. Set _Type_ to 'Set value'  
   iii. Select the _Distance_ form field  
   iv. Click the lightning bolt and select the _JavaScript_ tab. Add the following:

   ```javascript JavaScript
   const previousUnit = $("New Form.Fields.units");
   const newUnit = $("Field Value");
   const previousDistance = $("New Form.Fields.distance")

   return (previousDistance * (previousUnit / newUnit)).toFixed(4);
   ```

> 📘 Previous and new values on change
> 
> It's worth bringing attention to the use of the options picker bindings. 
> 
> `$("New Form.Fields.UnitPicker")` will get the value of the field before the change occurs.
> 
> `$("Field Value")` is the new value that will update the field when the _on change_ finishes.

8. Add a "required" Validation setting to the options picker - the default error message is simply "Error", so be sure to add something useful like "Please specify units" to help the user understand the issue.

[block:image]
{
  "images": [
    {
      "image": [
        "https://files.readme.io/71111d6f3a0da0fedab622dd1057ede51c6b2c3d50fde73f5a211c4af09c9bbd-Screenshot_2025-08-15_at_10.09.51.png",
        null,
        null
      ],
      "align": "center"
    }
  ]
}
[/block]


9. As a child-component of your form, and a sibling of your field group, add a new button. Update the button text to "Save", and add an Icon "save-3-fill".

[block:image]
{
  "images": [
    {
      "image": [
        "https://files.readme.io/360066cb1c546ce3145546709717ac6d461effc610c084490fd0e253f35abee0-Screenshot_2025-08-15_at_10.10.18.png",
        null,
        ""
      ],
      "align": "center",
      "sizing": "50% "
    }
  ]
}
[/block]


10. Add an On Click action "Save Row" to save the information from your form into your table - (If you don't specify any columns, all fields will be saved by default). In our case we want to select the 'Distance column' and provide the following binding: `{{ multiply New Form.Fields.Distance Form.Fields.units }}` in order to save all distances in meters.

![](https://files.readme.io/88a94978f705527876863326f28c6b196c8d4ed08d3186e9110ff8906ccaec3d-image.png)

<br />

11. Add another On Click action to validate your form

![](https://files.readme.io/653e918e5fd0fa53a32968c1dd5a92bca25eaf7a98112c5387f481d73da7403a-image.png)

12. It's also good practice to clear a form after submitting. Add another action "Clear Form" and chose your form to be reset.

![](https://files.readme.io/4a17d674a17f59f6bd25c6841e08506e186c0ed92bf3d24078c4b07969a032d0-image.png)

13. Add a table at the base-level of the component tree, as a sibling of your form component, and set it to fetch data  from the events table. Initially it will be empty, but you can now publish your app and add new events using Meters, Feet or Inches.

[block:image]
{
  "images": [
    {
      "image": [
        "https://files.readme.io/e6b8edc7b426d9ba282040aab55d8b7d403a40cf4570e40c93c8651980798754-Screenshot_2025-08-15_at_10.11.53.png",
        null,
        null
      ],
      "align": "center"
    }
  ]
}
[/block]


<br />

<br />

***

## <<glossary:Workspace>> export

_Downloads may take a few seconds._

[block:html]
{
  "html": "<!-- Add icon library -->\n<link rel=\"stylesheet\" href=\"https://cdnjs.cloudflare.com/ajax/libs/font-awesome/4.7.0/css/font-awesome.min.css\">\n\n<!-- Full width -->\n<button class=\"btn\" onclick=\"window.open('https://drive.google.com/file/d/1k9c3g4pjFxySGNc1QhV7kVKtWt3KfJ5X/view?usp=sharing')\" style=\"width:100%\"><i class=\"fa fa-download\"></i> Download</button>\n\n<style>\n  /* Style buttons */\n.btn {\n  background-color: #3571de;\n  border: none;\n  color: white;\n  padding: 12px 30px;\n  cursor: pointer;\n  font-size: 16px;\n}\n\n/* Darker background on mouse-over */\n.btn:hover {\n  background-color: #2e64c9;\n}\n</style>"
}
[/block]