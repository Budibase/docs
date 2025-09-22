---
title: Link two entities in one form
excerpt: 'Example: Creating an employee record and linking them to a newly created job'
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
  "html": "<iframe width=\"800\" height=\"600\" style=\"border: thick double #32a1ce; max-width: 100%;\" allow=\"clipboard-write;camera;geolocation;fullscreen\" src=\"https://plugins.budibase.app/embed/save-two-linked-tables-in-one-form\"></iframe>"
}
[/block]

## Scenario

When creating a new job, you want the option of creating and linking a new employee to that job in the one form.

[block:html]
{
  "html": "<u><b style=\"font-size: 14px;\">Challenge: </b></u><br />\n<span style=\"position: relative; font-size: 24px; color: #000000;\">★★★★☆</span>"
}
[/block]

***

## Steps

1. `Add component`: **Form Block**
2. In the <<glossary:Settings Panel>>, select the 'Jobs' _Table_
3. `Eject`

[block:image]
{
  "images": [
    {
      "image": [
        "https://files.readme.io/402748a-add_form_block.png",
        null,
        ""
      ],
      "align": "center"
    }
  ]
}
[/block]

4. Click on the **Field Group**. Set _Labels_ to 'Above'
5. `Add component`: **Options Picker**
6. In the <<glossary:Settings Panel>>, enter 'ExistingEmployee' as the _Field_.
7. Set _Type_ to 'Radio buttons'
8. Set _Direction_ to 'Horizontal'
9. Set _Default value_ to 'SELECT'
10. Uncheck _Alphabetical_
11. Set _Options source_ to 'Custom'
12. `Define options`: 
    1. | Label                    | Value  |
       | :----------------------- | :----- |
       | Select existing employee | SELECT |
       | Create new employee      | NEW    |

[block:image]
{
  "images": [
    {
      "image": [
        "https://files.readme.io/1d62fbb-add_radio_buttons.png",
        null,
        ""
      ],
      "align": "center"
    }
  ]
}
[/block]

13. Drag the **Relationshipfield** below the **Options Picker**
14. Click on the `Conditions` tab
15. `Configure conditions`: `Add condition`
    1. Hide component IF `{{ Form.Fields.ExistingEmployee }}` Equals Binding NEW
    2. `Save`

[block:image]
{
  "images": [
    {
      "image": [
        "https://files.readme.io/6e3dd14-conditions.png",
        null,
        ""
      ],
      "align": "center"
    }
  ]
}
[/block]

16. `Add component`: **Container**
17. Click on the `Conditions` tab
18. `Configure conditions`: `Add condition`
    1. Hide component IF `{{ Form.Fields.ExistingEmployee }}` Equals Binding SELECT
    2. `Save`

[block:image]
{
  "images": [
    {
      "image": [
        "https://files.readme.io/407ea1b-container_conditions.png",
        null,
        ""
      ],
      "align": "center"
    }
  ]
}
[/block]

19. `Add component`: **Headline**. Set _Text_ to 'New Employee'
20. `Add component`: **Field Group**
21. Click on the **Form** and set the _Schema_ to 'Employees'
22. Click on the newly added **Field Group** and click `Update form fields`
23. Set _Type_ to `Two columns`
24. [Delete](https://docs.budibase.com/docs/components#editing) the **Jobs** field

[block:image]
{
  "images": [
    {
      "image": [
        "https://files.readme.io/b3cf2a7-employee_fields.png",
        null,
        ""
      ],
      "align": "center"
    }
  ]
}
[/block]

25. Click on the **Form** and set the _Schema_ back to 'Jobs'
26. Click on the 'Save' **Button** and `Define actions`
27. Click the `X` beside each actions so that only the **Validate Form** and **Save Row** actions remain
28. `Add Action`: **Navigate To** _Screen_ '/jobs'
29. `Add Action`: **Continue if / Stop if**
    1. Continue if `{{ Form.Fields.ExistingEmployee }}` Equals NEW
30. `Add Action`: **Save Row**
    1. Set _Table_ to 'Employees'
    2. `Add Column` for each form field in the Employees **Field Group**. Set the _Value_ to the form field bindings, e.g. `{{ Form.Fields.First Name }}`
    3. `Add Column` for the 'Jobs' column. Set _Value_ to `{{ Action 2.Saved row._id }}`. This will get the **\_id** of the Job that was saved in second action.
    4. `Save` your actions!

> 📘 Employee validation
> 
> As the select form schema is for the _Jobs_ table, you will need to add [custom validation rules](https://docs.budibase.com/docs/form-validation#custom-validation-rules) to the _Employee_ fields you want validated.
> 
> The same is also true for options that are defined by the table schema, such as _Employee Level_ in this case.

[block:image]
{
  "images": [
    {
      "image": [
        "https://files.readme.io/d25f4f4-save_employee.png",
        null,
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
  "html": "<!-- Add icon library -->\n<link rel=\"stylesheet\" href=\"https://cdnjs.cloudflare.com/ajax/libs/font-awesome/4.7.0/css/font-awesome.min.css\">\n\n<!-- Full width -->\n<button class=\"btn\" onclick=\"window.open('https://drive.google.com/uc?export=download&id=1C3ZY2NhLtzOxl235EGugu2UJynxROSwV')\" style=\"width:100%\"><i class=\"fa fa-download\"></i> Download</button>\n\n<style>\n  /* Style buttons */\n.btn {\n  background-color: #3571de;\n  border: none;\n  color: white;\n  padding: 12px 30px;\n  cursor: pointer;\n  font-size: 16px;\n}\n\n/* Darker background on mouse-over */\n.btn:hover {\n  background-color: #2e64c9;\n}\n</style>"
}
[/block]