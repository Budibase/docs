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

Use this pattern when a duration field should update related start and end dates automatically.

<HTMLBlock>{`
<u><b style="font-size: 14px;">Challenge: </b></u><br />
<span style="position: relative; font-size: 24px; color: currentColor;">★★★☆☆</span>
`}</HTMLBlock>

***

## Steps

1. `Add component`: **Form**
2. In the <Glossary>Settings Panel</Glossary>, set *Schema* to `Jobs`.
3. `Add component`: **Container**
4. In the <Glossary>Settings Panel</Glossary>, set the layout to flex.
   1. Set *Direction* to `Row`.

<Image align="center" width="450px" src="https://files.readme.io/71eacea36235aced8d7c7537f6de6c0c89c5484fbd309d09ef24878fe2ec4705-Screenshot_2025-08-18_at_09.28.28.png" />

5. `Add component`: **Number Field**
6. Enter `Duration` as the *Field* name and set *Label* to `Days of work`.
7. Set *Default value* to `7`.
8. `Configure validation`: 
   1. `Add Rule`: Min value `1` with the message `Cannot be less than one day!`
   2. `Add Rule`: Max value `365` with the message `Cannot be more than 365 days!`
   3. Save the validation.

<Image align="center" src="https://files.readme.io/eaede95e21490e497085caafa114ff0ae3f5b7589f257fe5410fdbd2e3c750fc-Screenshot_2025-08-18_at_09.52.25.png" />

9. `Add component`: **Date Picker**
10. In the <Glossary>Settings Panel</Glossary>, select `Works Start` from the *Field* dropdown.
11. Set *Label* to `Works Start`.
12. Untick *Show time*.

<Image align="center" src="https://files.readme.io/67aaa83ef94a70e7bc997f124783411ca3e66b5d58633d8b04d38087cbcd5371-Screenshot_2025-08-18_at_10.01.33.png" />

13. [Duplicate](https://docs.budibase.com/docs/components#editing) the **Date Picker**
14. Replace `Start` with `End` in the *Field* and *Label* settings.

> 👍
>
> Time to make the field values dynamically update!

15. In the <Glossary>Settings Panel</Glossary> under *On change*: `Define actions` 

    1. **Validate Form** - make sure to select the form in the dropdown
    2. **Update Field Value**

       1. Select the *Form* from the dropdown.
       2. Select `Set value` as the *Type*.
       3. Select `Works Start` as the *Field*.
       4. Click the lightning bolt icon, then open the `JavaScript` tab and use the following:

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
> The **Validate Form** action prevents the update from running if validation fails.
>
> `$("Field Value")` uses the changed value rather than the previous value.
>
> Update `$("Jobs Form.Fields.Duration")` to match your form name if needed.

<Image align="center" src="https://files.readme.io/383b3c6e74585ce1a02012008ea5df3fd207131ff067a4e0ef041eaf7012ce9c-Screenshot_2025-08-18_at_09.58.10.png" />

16. Select the **Works Start** date picker. Under *On change*: `Define actions`

    1. **Validate Form** - make sure to select the form in the dropdown
    2. **Update Field Value** - set the value of the `Works End` field and add days instead of subtracting:

    ```javascript
    //Source: https://stackoverflow.com/questions/563406/how-to-add-days-to-date
    Date.prototype.addDays = function(days) {
        var date = new Date(this.valueOf());
        date.setDate(date.getDate() + days);
        return date;
    }

    return new Date($("Field Value")).addDays($("Jobs Form.Fields.Duration"));
    ```
17. Finally, click the **Number Field**. Under *On change*: `Define actions`

    1. **Validate Form** - make sure to select the form in the dropdown
    2. **Continue if / Stop if** - set `Stop if` to `{{ Jobs Form.Fields.Works Start }}` `Equals` `""`
    3. **Update Field Value**:

       1. Select the *Form* from the dropdown.
       2. Select `Set value` as the *Type*.
       3. Select `Works End` as the *Field*.
       4. Click the lightning bolt icon, then open the `JavaScript` tab and use the following:

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
> This action checks that the number of days is valid.
>
> The [Stop if](https://docs.budibase.com/docs/chaining-actions#continue-if--stop-if) action prevents the update until a `Works Start` date has been chosen.

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
