---
title: Link two entities in one form
excerpt: 'Example: Creating an employee record and linking them to a newly created job'
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
<iframe width="800" height="600" frameborder="0" allow="clipboard-write;camera;geolocation;fullscreen" src="https://cprem.budibase.app/embed/guide-save-two-linked-tables-in-one-form"></iframe>
`}</HTMLBlock>

## Scenario

When creating a new job, you want the option of creating and linking a new employee to that job in the one form.

<HTMLBlock>{`
<u><b style="font-size: 14px;">Challenge: </b></u><br />
<span style="position: relative; font-size: 24px; color: #000000;">★★★★☆</span>
`}</HTMLBlock>

***

## Steps

1. `Add component`: **Form Block**
2. In the <Glossary>Settings Panel</Glossary>, select the 'Jobs' *Table*
3. `Eject`

<Image align="center" src="https://files.readme.io/402748a-add_form_block.png" />

4. Click on the **Field Group**. Set *Labels* to 'Above'
5. `Add component`: **Options Picker**
6. In the <Glossary>Settings Panel</Glossary>, enter 'ExistingEmployee' as the *Field*.
7. Set *Type* to 'Radio buttons'
8. Set *Direction* to 'Horizontal'
9. Set *Default value* to 'SELECT'
10. Uncheck *Alphabetical*
11. Set *Options source* to 'Custom'
12. `Define options`: 
    1. | Label                    | Value  |
       | :----------------------- | :----- |
       | Select existing employee | SELECT |
       | Create new employee      | NEW    |

<Image align="center" src="https://files.readme.io/1d62fbb-add_radio_buttons.png" />

13. Drag the **Relationshipfield** below the **Options Picker**
14. Click on the `Conditions` tab
15. `Configure conditions`: `Add condition`
    1. Hide component IF `{{ Form.Fields.ExistingEmployee }}` Equals Binding NEW
    2. `Save`

<Image align="center" src="https://files.readme.io/6e3dd14-conditions.png" />

16. `Add component`: **Container**
17. Click on the `Conditions` tab
18. `Configure conditions`: `Add condition`
    1. Hide component IF `{{ Form.Fields.ExistingEmployee }}` Equals Binding SELECT
    2. `Save`

<Image align="center" src="https://files.readme.io/407ea1b-container_conditions.png" />

19. `Add component`: **Headline**. Set *Text* to 'New Employee'
20. `Add component`: **Field Group**
21. Click on the **Form** and set the *Schema* to 'Employees'
22. Click on the newly added **Field Group** and click `Update form fields`
23. Set *Type* to `Two columns`
24. [Delete](https://docs.budibase.com/docs/components#editing) the **Jobs** field

<Image align="center" src="https://files.readme.io/b3cf2a7-employee_fields.png" />

25. Click on the **Form** and set the *Schema* back to 'Jobs'
26. Click on the 'Save' **Button** and `Define actions`
27. Click the `X` beside each actions so that only the **Validate Form** and **Save Row** actions remain
28. `Add Action`: **Navigate To** *Screen* '/jobs'
29. `Add Action`: **Continue if / Stop if**
    1. Continue if `{{ Form.Fields.ExistingEmployee }}` Equals NEW
30. `Add Action`: **Save Row**
    1. Set *Table* to 'Employees'
    2. `Add Column` for each form field in the Employees **Field Group**. Set the *Value* to the form field bindings, e.g. `{{ Form.Fields.First Name }}`
    3. `Add Column` for the 'Jobs' column. Set *Value* to `{{ Action 2.Saved row._id }}`. This will get the **\_id** of the Job that was saved in second action.
    4. `Save` your actions!

> 📘 Employee validation
>
> As the select form schema is for the *Jobs* table, you will need to add [custom validation rules](https://docs.budibase.com/docs/form-validation#custom-validation-rules) to the *Employee* fields you want validated.
>
> The same is also true for options that are defined by the table schema, such as *Employee Level* in this case.

<Image align="center" src="https://files.readme.io/d25f4f4-save_employee.png" />

<br />

***

## App export

*Downloads may take a few seconds.*

<HTMLBlock>{`
<!-- Add icon library -->
<link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/4.7.0/css/font-awesome.min.css">

<!-- Full width -->
<button class="btn" onclick="window.open('https://drive.google.com/uc?export=download&id=1C3ZY2NhLtzOxl235EGugu2UJynxROSwV')" style="width:100%"><i class="fa fa-download"></i> Download</button>

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
