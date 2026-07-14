---
title: Calculate field value on save
excerpt: Displaying a preferred unit to end users, but always save a standardised unit
deprecated: false
hidden: false
metadata:
  title: ''
  description: kba_5hi4i
  robots: index
next:
  description: ''
---
## Try it out!

<HTMLBlock>{`
<iframe width="800" height="600" frameborder="0" allow="clipboard-write;camera;geolocation;fullscreen" src="https://cprem.budibase.app/embed/guide-calculate-field-value-on-save-export"></iframe>
`}</HTMLBlock>

## Scenario

[Forms](doc:forms) often include [number fields](https://docs.budibase.com/docs/text-inputs#number-field) for measurements that may be entered in different units, such as ounces and kilograms, centimetres and inches, or even different currencies.

This guide shows how to let an <Glossary>End User</Glossary> choose a unit of measurement, convert the value automatically, and still save everything in meters.

<HTMLBlock>{`
<u><b style="font-size: 14px;">Challenge: </b></u><br />
<span style="position: relative; font-size: 24px; color: currentColor;">★★★☆☆</span>
`}</HTMLBlock>

***

## Steps

1. In the Data section, create a new table using Budibase DB and name it `Distance`.
2. <Image align="center" src="https://files.readme.io/fc45e717d1062a269e939ac425ca9cf3d412e9ec9452b5eeaa1e2f5c8a2d632d-Screenshot_2025-08-15_at_08.45.40.png" />

   Add two columns to your table: a text column called `event` and a number column called `distance`.

   <Image align="center" src="https://files.readme.io/b63d1353f4f1e053b6fbcd5431febb651ee73b105e3799f5900d3c9f54b59de9-Screenshot_2025-08-15_at_08.52.29.png" />
3. Create a new app called `Calculate field value on save`.
4. Create a new blank screen and add a `Form` component. Set the type to `Create` and the schema to your `Distance` table.

   <Image align="center" src="https://files.readme.io/16acdb8b60f305408c96a025cfe89983f7cad34e369a6b45ab137c848156bf58-Screenshot_2025-08-15_at_08.55.27.png" />
5. Add a **Field Group** component and click `Update form fields` to generate inputs for the table columns. Set the `Type` option to `3 Columns`.

   <Image align="center" width="300px" src="https://files.readme.io/79566456ff140c0a510c08429a3ddd1d212692061b99906f7f6f2e98c5ce6ce3-Screenshot_2025-08-15_at_09.31.49.png" />
6. Add an `Options Picker` as a child of the form and set the field and label to `unit`. Set the Options Source to `Custom` and click `Define options`.

   <Image align="center" width="400px" src="https://files.readme.io/9868c45dfd64989d02e71192c31380b329ab1c16e5a60bea4792099c7086e075-Screenshot_2025-08-15_at_09.34.34.png" />

   Add three options:

   | Units  | Value |
   | :----- | :---- |
   | Meters | 1     |
   | Yards  | 0.914 |
   | Feet   | 0.30  |
7. Set the default value to `1` and uncheck `Alphabetical`.
8. Add an `On change` action to the options picker using `Update Field Value`.
   1. Select the *Form*.
   2. Set *Type* to `Set value`.
   3. Select the *Distance* form field.
   4. Click the lightning bolt and open the `JavaScript` tab, then add the following:

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
> `$("Field Value")` is the new value that will update the field when the *on change* finishes.

9. Add a required validation setting to the options picker. The default error message is just `Error`, so replace it with something clearer such as `Please specify units`.

<Image align="center" src="https://files.readme.io/71111d6f3a0da0fedab622dd1057ede51c6b2c3d50fde73f5a211c4af09c9bbd-Screenshot_2025-08-15_at_10.09.51.png" />

10. Add a button as a sibling of the field group. Set the button text to `Save` and add the `save-3-fill` icon.

<Image align="center" width="50% " src="https://files.readme.io/360066cb1c546ce3145546709717ac6d461effc610c084490fd0e253f35abee0-Screenshot_2025-08-15_at_10.10.18.png" />

11. Add an `On Click` action, `Save Row`, to save the form data to the table. If you do not specify columns, Budibase saves every field by default. In this case, select the `Distance` column and use `{{ multiply New Form.Fields.Distance Form.Fields.units }}` so all values are saved in meters.

![](https://files.readme.io/88a94978f705527876863326f28c6b196c8d4ed08d3186e9110ff8906ccaec3d-image.png)

<br />

12. Add another `On Click` action to validate the form.

![](https://files.readme.io/653e918e5fd0fa53a32968c1dd5a92bca25eaf7a98112c5387f481d73da7403a-image.png)

13. Clear the form after submitting by adding a `Clear Form` action and choosing the form to reset.

![](https://files.readme.io/4a17d674a17f59f6bd25c6841e08506e186c0ed92bf3d24078c4b07969a032d0-image.png)

14. Add a table at the base level of the component tree, as a sibling of the form, and set it to fetch data from the `Distance` table. Initially it will be empty, but you can now publish the app and add new records using meters, feet, or yards.

<Image align="center" src="https://files.readme.io/e6b8edc7b426d9ba282040aab55d8b7d403a40cf4570e40c93c8651980798754-Screenshot_2025-08-15_at_10.11.53.png" />

<br />

<br />

***

## <Glossary>Workspace</Glossary> export

*Downloads may take a few seconds.*

<HTMLBlock>{`
<!-- Add icon library -->
<link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/4.7.0/css/font-awesome.min.css">

<!-- Full width -->
<button class="btn" onclick="window.open('https://drive.google.com/file/d/1k9c3g4pjFxySGNc1QhV7kVKtWt3KfJ5X/view?usp=sharing')" style="width:100%"><i class="fa fa-download"></i> Download</button>

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
