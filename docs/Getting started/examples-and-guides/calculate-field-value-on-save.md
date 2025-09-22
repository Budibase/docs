---
title: Calculate field value on save
excerpt: Displaying a preferred unit to end users, but always save a standardised unit
deprecated: false
hidden: false
metadata:
  title: ''
  description: ''
  robots: noindex
next:
  description: ''
---
## Try it out!

<HTMLBlock>{`
<iframe width="800" height="480" style="border: thick double #32a1ce; max-width: 100%;" allow="clipboard-write;camera;geolocation;fullscreen" src="https://plugins.budibase.app/embed/calculate-field-value-on-save"></iframe>
`}</HTMLBlock>

## Scenario

[Forms](doc:forms) will often have [number fields](https://docs.budibase.com/docs/text-inputs#number-field) for inputting measurements, which could be in different units such as ounces and kilograms, centimetres and inches, or even different currencies. 

This guide will demonstrate how to allow an <Glossary>End User</Glossary> to select a unit of measurement, that will automatically convert the value, but making sure that any row saved will use a standardised unit of meters.

<HTMLBlock>{`
<u><b style="font-size: 14px;">Challenge: </b></u><br />
<span style="position: relative; font-size: 24px; color: #000000;">★★★☆☆</span>
`}</HTMLBlock>

***

## Steps

1. `Add component`: **Form**, and set the *Schema* to your table with the 'Distance' number column
2. `Add component`: **Field Group**
3. In the <Glossary>Settings Panel</Glossary>, click `Update form fields`

<Image align="center" src="https://files.readme.io/ab42022-steps1_to_3.png" />

4. `Add component`: **Options Picker**
5. In the <Glossary>Settings Panel</Glossary>, manually enter a *Field* name of 'UnitPicker'
6. Provide a *Label*: 'Unit'
7. Set the <Glossary>Default Value</Glossary> to 1
8. Uncheck *Alphabetical*
9. Set *Options source* to 'Custom'
10. Click `Define Options`:

    | Label  | Value |
    | :----- | :---- |
    | Feet   | 0.305 |
    | Yards  | 0.914 |
    | Meters | 1     |

<Image align="center" src="https://files.readme.io/e658e09-steps4_to_10.png" />

11. Click the button beside *On change*
12. `Add Action`: **Update Field Value**

    1. Select the *Form*
    2. Set *Type* to 'Set value'
    3. Select the *Distance* form field
    4. Click the lightning bolt and select the *JavaScript* tab. Add the following:

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
> `$("Field Value")` is the new value that will update the field when the *on change* finishes.

<Image align="center" src="https://files.readme.io/c4d5a9d-steps11_to_12.png" />

13. Click the button beside *Validation*
14. `Add Rule`: *Required* and type in an error message to display
15. Be sure to `Save`

<Image align="center" src="https://files.readme.io/7c77570-steps13_to_15.png" />

16. `Add component`: **Button**
17. In the <Glossary>Settings Panel</Glossary>, click the button beside *On click*
18. `Add Action`: **Validate Form** and select the form
19. `Add Action`: **Save Row**
20. Select the form as the *Datasource*, and the destination *Table*
21. `Add Column`: Select the 'Distance column' and provide the following binding: `{{ multiply Form.Fields.Distance Form.Fields.UnitPicker }}`
22. `Save`

<Image align="center" src="https://files.readme.io/1ac9356-steps16_to_22.png" />

<br />

***

## App export

*Downloads may take a few seconds.*

<HTMLBlock>{`
<!-- Add icon library -->
<link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/4.7.0/css/font-awesome.min.css">

<!-- Full width -->
<button class="btn" onclick="window.open('https://drive.google.com/uc?export=download&id=1BHupoHArxEiXsmcGbsY11Fv4FuLtS9QF')" style="width:100%"><i class="fa fa-download"></i> Download</button>

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
