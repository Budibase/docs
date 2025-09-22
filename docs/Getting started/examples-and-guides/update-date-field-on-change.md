---
title: Update date field on change
excerpt: For example automatically setting an end date when a start date is selected
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
<iframe width="800" height="600" frameborder="0" allow="clipboard-write;camera;geolocation;fullscreen" src="https://cprem.budibase.app/embed/guide-update-date-field-on-change"></iframe>
`}</HTMLBlock>

## Scenario

You're building an app and you want to set a project length in days, and then dynamically calculate start and end dates.

<HTMLBlock>{`
<u><b style="font-size: 14px;">Challenge: </b></u><br />
<span style="position: relative; font-size: 24px; color: #000000;">★★★☆☆</span>
`}</HTMLBlock>

***

## Steps

1. `Add component`: **Form**
2. In the <Glossary>Settings Panel</Glossary> set *Schema* to 'Jobs'
3. `Add component`: **Container**
4. In the <Glossary>Settings Panel</Glossary> set *Direction* to 'Row' 

<Image align="center" src="https://files.readme.io/cb88749-Screenshot_2023-07-21_at_11.42.13.png" />

5. `Add component`: **Number Field**
6. Manually enter 'Direction' into the *Field* name and set *Label* to 'Days of work'
7. Set *Default value* to 7
8. `Configure validation`: 
   1. `Add Rule`: Min value 'Value' 1 *Cannot be less than one day!*
   2. `Add Rule`: Max value 'Value' 365 *Cannot be more than 365 days!*
   3. `Save`

<Image align="center" src="https://files.readme.io/bf4811d-Screenshot_2023-07-21_at_11.54.23.png" />

9. `Add component`: **Date Picker**
10. In the <Glossary>Settings Panel</Glossary> select 'Works Start' from the *Field* dropdown
11. Set *Label* to 'Works Start'
12. Untick *Show time*

<Image align="center" src="https://files.readme.io/f342584-steps9_to_12.png" />

13. [Duplicate](https://docs.budibase.com/docs/components#editing) the **Date Picker**
14. Replace 'Start' with 'End' in the *Field* and *Label* settings

> 👍
>
> Time to make the field values dynamically update!

15. In the <Glossary>Settings Panel</Glossary> under *On change*: `Define actions` 

    1. **Validate Form** - make sure to select the form in the dropdown
    2. **Update Field Value**

       1. select the *Form* from the dropdown
       2. select 'Set value' as the *Type*
       3. select 'Works Start' as the *Field*
       4. click the lightning bolt icon, and click on the `JavaScript` tab. Provide the following:

       ```javascript JavaScript
       //Source: https://stackoverflow.com/questions/563406/how-to-add-days-to-date
       Date.prototype.subtractDays = function(days) {
           var date = new Date(this.valueOf());
           date.setDate(date.getDate() - days);
           return date;
       }

       return new Date($("Field Value")).subtractDays($("Jobs Form.Fields.Duration"));
       ```

> 📘
>
> The **Validate Form** action will prevent the **Update Field Value** from firing if there's any validation errors.
>
> The special `$("Field Value")` binding is used to indicate that the [On change](https://docs.budibase.com/docs/text-inputs#on-change) value should be used, and not the value before the change.
>
> Also note that you may need to replace the `$("Jobs Form.Fields.Duration")` binding to match your form name.

<Image align="center" src="https://files.readme.io/405e6f4-steps13_to_15.png" />

16. Select the **Works Start Date Picker**. Under *On change*: `Define actions`

    1. **Validate Form** - make sure to select the form in the dropdown
    2. **Update Field Value** - similar to before, but this time we are setting the value of the 'Works End' field, and will add days instead of subtracting:

    ```javascript
    //Source: https://stackoverflow.com/questions/563406/how-to-add-days-to-date
    Date.prototype.addDays = function(days) {
        var date = new Date(this.valueOf());
        date.setDate(date.getDate() + days);
        return date;
    }

    return new Date($("Field Value")).addDays($("Jobs Form.Fields.Duration"));
    ```
17. Finally click on the **Number Field**. Under *On change*: `Define actions`

    1. **Validate Form** - make sure to select the form in the dropdown
    2. **Continue if / Stop if** - 'Stop if' `{{ Jobs Form.Fields.Works Start }}` 'Equals' ""
    3. **Update Field Value**:

       1. select the *Form* from the dropdown
       2. select 'Set value' as the *Type*
       3. select 'Works End' as the *Field*
       4. click the lightning bolt icon, and click on the `JavaScript` tab. Provide the following:

       ```javascript
       //Source: https://stackoverflow.com/questions/563406/how-to-add-days-to-date
       Date.prototype.addDays = function(days) {
           var date = new Date(this.valueOf());
           date.setDate(date.getDate() + days);
           return date;
       }

       return new Date($("Form.Fields.Works Start")).addDays($("Field Value"));
       ```

> 📘
>
> In this case we first check that the number of days is a valid number. 
>
> Next we use the [Stop if](https://docs.budibase.com/docs/chaining-actions#continue-if--stop-if) action to make sure a 'Works Start' date has been chosen, because we need to know the start date in order to calculate the end date.

<br />

***

## App export

*Downloads may take a few seconds.*

<HTMLBlock>{`
<!-- Add icon library -->
<link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/4.7.0/css/font-awesome.min.css">

<!-- Full width -->
<button class="btn" onclick="window.open('https://drive.google.com/uc?export=download&id=12ZhDQNPHR6M-vAmxUGmlkgGwn4KpGleL')" style="width:100%"><i class="fa fa-download"></i> Download</button>

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
