---
title: Save two linked table rows in one form
excerpt: ''
deprecated: false
hidden: true
metadata:
  title: ''
  description: ''
  robots: noindex
next:
  description: ''
---
## Try it out!

<HTMLBlock>{`
<iframe width="800" height="600" style="border: thick double #32a1ce; max-width: 100%;" allow="clipboard-write;camera;geolocation;fullscreen" src="https://plugins.budibase.app/embed/save-two-linked-tables-in-one-form"></iframe>
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

## App export

[Save two linked tables in one form](https://cdn.budicloud.prod.budibase.net/app_plugins_cbbc01f239b24903890a91844c6cdbe0/attachments/4fead1f4-d9df-4cf3-88e1-bda0a08013d4.gz?Expires=1690820734\&Policy=eyJTdGF0ZW1lbnQiOlt7IlJlc291cmNlIjoiaHR0cHM6Ly9jZG4uYnVkaWNsb3VkLnByb2QuYnVkaWJhc2UubmV0L2FwcF9wbHVnaW5zX2NiYmMwMWYyMzliMjQ5MDM4OTBhOTE4NDRjNmNkYmUwL2F0dGFjaG1lbnRzLzRmZWFkMWY0LWQ5ZGYtNGNmMy04OGUxLWJkYTBhMDgwMTNkNC5neiIsIkNvbmRpdGlvbiI6eyJEYXRlTGVzc1RoYW4iOnsiQVdTOkVwb2NoVGltZSI6MTY5MDgyMDczNH19fV19\&Signature=U5eF8Vl~U84LHMlzOTv9sckX1hTtSq5OspeAQ-yGfE-CH3XW8wwk05DGjmlnL6IKR2avTl~oZbzGLdFkcT-GA0Go8cyE~~u-DYyg-fybr7ceM1Ye9QNDpT5rtDprBkro22iqUCc4sJh4rAWWk0x3razvme9DUhX9ljzy7CLJHSPHT1IOUblURfj8Oa9zDDIF0uA0J~OuAhQzzif63or4hY4AjmX69wEV9ozeMxMVlKJu7dS7XE~yx21amdA~qNCaxUTr6G15IYv~mQTefWKtauM5OB4jhF3Vwkdjl5wzZnWgNP6MFKNj8QprKhRl6kBS5BiTOocn5RNyYhER2VibTA__\&Key-Pair-Id=KL23NAZBW7UD1)
