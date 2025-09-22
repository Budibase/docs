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

This guide will demonstrate how to allow an <<glossary:End User>> to select a unit of measurement, that will automatically convert the value, but making sure that any row saved will use a standardised unit of meters.

[block:html]
{
  "html": "<u><b style=\"font-size: 14px;\">Challenge: </b></u><br />\n<span style=\"position: relative; font-size: 24px; color: currentColor;\">★★★☆☆</span>"
}
[/block]


***

## Steps

1. In the Data section, create a new table using Budibase DB, name it events
2. ![](https://files.readme.io/0e2cff9e0280a9c91dab63a311f9b9c3c6d11f8295a011e36f74a4b97cd61f1f-image.png)

   Add two columns to your events table - a text column called "event" and a number column called "distance"

   ![](https://files.readme.io/20fcacf4ec60ff7219c777e5064b6a3d225f5981e9485e8814ebd58277978d25-image.png)
3. In the Design section, create a new blank screen (if you haven't already), and add a Form component (not to be confused with a Form Block). Set type to "create" and the schema to your events table.

   ![](https://files.readme.io/6aa46772b647e69c5981f198ce2a0781a85b4f4fc508c705f33dfb3892bff8ef-image.png)
4. Add a **Field Group** component, and click "Update form fields" - this will fetch the columns from your table and create an input field for each. Set the "Type" option to 3 Columns.

   ![](https://files.readme.io/4e1d516db90ebcafe841dd3d883b6730bb9252466ebf3c2296588138ebefdb0a-image.png)
5. Add an Options Picker as a child of your form, and set the field and label to "units". Set the Options Source to custom, and click "define options.

   ![](https://files.readme.io/385495917f49821b67afa078f83062f4352ddc4d0016313cbaf912b5a55d94ba-image.png)

   Add 3 options:

   | Units  | Value |
   | :----- | :---- |
   | Meters | 1     |
   | Yards  | 0.914 |
   | Feet   | 0.30  |

![](https://files.readme.io/4111348a404644cf04f74354e4fd625b2982164e1cf8b7081674bf537fe553bd-image.png)

6. Be sure to set the default value to 1, and uncheck "Alphabetical"

   ![](https://files.readme.io/6a97dab617ba4799da2137dd8c2b41bd0597483d6adf3e151797cca920729647-image.png)
7. Add an "On change" action to the options picker using the "Update Field Value" action  
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

<br />

8. Add a "required" Validation setting to the options picker - the default error message is simply "Error", so be sure to add something useful like "Please specify units" to help the user understand the issue.

![](https://files.readme.io/739160ce0bcc58b174ae59bf0d0240d1ec5a8374d97bc705bd0390881d46af2b-image.png)

9. As a child-component of your form, and a sibling of your field group, add a new button. Update the button text to "Save", and add an Icon "save-3-fill".

[block:image]
{
  "images": [
    {
      "image": [
        "https://files.readme.io/721fac584ff7a9811d090112d4571a02cf71a90bcba65ab08dd6af111726a8ed-image.png",
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

<br />

13. Add a table at the base-level of the component tree, as a sibling of your form component, and set it to fetch data  from the events table. Initially it will be empty, but you can now publish your app and add new events using Meters, Feet or Inches.

![](https://files.readme.io/8555709a9502a4d7737841c3c9e2a5f885a7f4d3b4c21c32833f3d7d87554e9b-image.png)

14. <br />

<br />

***

## App export

_Downloads may take a few seconds._

[block:html]
{
  "html": "<!-- Add icon library -->\n<link rel=\"stylesheet\" href=\"https://cdnjs.cloudflare.com/ajax/libs/font-awesome/4.7.0/css/font-awesome.min.css\">\n\n<!-- Full width -->\n<button class=\"btn\" onclick=\"window.open('https://drive.google.com/file/d/1k9c3g4pjFxySGNc1QhV7kVKtWt3KfJ5X/view?usp=sharing')\" style=\"width:100%\"><i class=\"fa fa-download\"></i> Download</button>\n\n<style>\n  /* Style buttons */\n.btn {\n  background-color: #3571de;\n  border: none;\n  color: white;\n  padding: 12px 30px;\n  cursor: pointer;\n  font-size: 16px;\n}\n\n/* Darker background on mouse-over */\n.btn:hover {\n  background-color: #2e64c9;\n}\n</style>"
}
[/block]