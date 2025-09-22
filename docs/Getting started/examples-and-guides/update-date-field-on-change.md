---
title: Update date field on change
excerpt: For example automatically setting an end date when a start date is selected
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

[block:html]
{
  "html": "<iframe width=\"800\" height=\"480\" style=\"border: thick double #32a1ce; max-width: 100%;\" allow=\"clipboard-write;camera;geolocation;fullscreen\" src=\"https://plugins.budibase.app/embed/update-date-field-on-change\"></iframe>"
}
[/block]

## Scenario

You're building an app and you want to set a project length in days, and then dynamically calculate start and end dates.

[block:html]
{
  "html": "<u><b style=\"font-size: 14px;\">Challenge: </b></u><br />\n<span style=\"position: relative; font-size: 24px; color: #000000;\">★★★☆☆</span>"
}
[/block]

***

## Steps

1. `Add component`: **Form**
2. In the <<glossary:Settings Panel>> set _Schema_ to 'Jobs'
3. `Add component`: **Container**
4. In the <<glossary:Settings Panel>> set _Direction_ to 'Row' 

[block:image]
{
  "images": [
    {
      "image": [
        "https://files.readme.io/cb88749-Screenshot_2023-07-21_at_11.42.13.png",
        null,
        ""
      ],
      "align": "center"
    }
  ]
}
[/block]

5. `Add component`: **Number Field**
6. Manually enter 'Direction' into the _Field_ name and set _Label_ to 'Days of work'
7. Set _Default value_ to 7
8. `Configure validation`: 
   1. `Add Rule`: Min value 'Value' 1 _Cannot be less than one day!_
   2. `Add Rule`: Max value 'Value' 365 _Cannot be more than 365 days!_
   3. `Save`

[block:image]
{
  "images": [
    {
      "image": [
        "https://files.readme.io/bf4811d-Screenshot_2023-07-21_at_11.54.23.png",
        null,
        ""
      ],
      "align": "center"
    }
  ]
}
[/block]

9. `Add component`: **Date Picker**
10. In the <<glossary:Settings Panel>> select 'Works Start' from the _Field_ dropdown
11. Set _Label_ to 'Works Start'
12. Untick _Show time_

[block:image]
{
  "images": [
    {
      "image": [
        "https://files.readme.io/f342584-steps9_to_12.png",
        null,
        ""
      ],
      "align": "center"
    }
  ]
}
[/block]

13. [Duplicate](https://docs.budibase.com/docs/components#editing) the **Date Picker**
14. Replace 'Start' with 'End' in the _Field_ and _Label_ settings

> 👍 
> 
> Time to make the field values dynamically update!

15. In the <<glossary:Settings Panel>> under _On change_: `Define actions` 

    1. **Validate Form** - make sure to select the form in the dropdown
    2. **Update Field Value**

       1. select the _Form_ from the dropdown
       2. select 'Set value' as the _Type_
       3. select 'Works Start' as the _Field_
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

[block:image]
{
  "images": [
    {
      "image": [
        "https://files.readme.io/405e6f4-steps13_to_15.png",
        null,
        ""
      ],
      "align": "center"
    }
  ]
}
[/block]

16. Select the **Works Start Date Picker**. Under _On change_: `Define actions`

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
17. Finally click on the **Number Field**. Under _On change_: `Define actions`

    1. **Validate Form** - make sure to select the form in the dropdown
    2. **Continue if / Stop if** - 'Stop if' `{{ Jobs Form.Fields.Works Start }}` 'Equals' ""
    3. **Update Field Value**:

       1. select the _Form_ from the dropdown
       2. select 'Set value' as the _Type_
       3. select 'Works End' as the _Field_
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

_Downloads may take a few seconds._

[block:html]
{
  "html": "<!-- Add icon library -->\n<link rel=\"stylesheet\" href=\"https://cdnjs.cloudflare.com/ajax/libs/font-awesome/4.7.0/css/font-awesome.min.css\">\n\n<!-- Full width -->\n<button class=\"btn\" onclick=\"window.open('https://drive.google.com/uc?export=download&id=12ZhDQNPHR6M-vAmxUGmlkgGwn4KpGleL')\" style=\"width:100%\"><i class=\"fa fa-download\"></i> Download</button>\n\n<style>\n  /* Style buttons */\n.btn {\n  background-color: #3571de;\n  border: none;\n  color: white;\n  padding: 12px 30px;\n  cursor: pointer;\n  font-size: 16px;\n}\n\n/* Darker background on mouse-over */\n.btn:hover {\n  background-color: #2e64c9;\n}\n</style>"
}
[/block]