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

When creating a new job, you want the option of creating and linking a new employee to that job in the one form. For this example you should use the sample data supplied in the internal BudibaseDB tables.

<HTMLBlock>{`
<u><b style="font-size: 14px;">Challenge: </b></u><br />
<span style="position: relative; font-size: 24px; color: currentColor;">★★★★☆</span>
`}</HTMLBlock>

***

## Steps

1. `Add component`: **Form Block**

   <Image align="center" src="https://files.readme.io/3271350e3fcb723dd027bfcc3cdcf0c6e4e7d44c3feea8da5b0a8d3b6e7faaac-Screenshot_2024-09-10_at_11.07.14.png" />
2. In the <Glossary>Settings Panel</Glossary>, select the 'Jobs' *Table*

   ![](https://files.readme.io/2654464d95cf2a4178f13f3a78fb391687a9ccb1804e78026993fa53b043809d-image.png)
3. At the very bottom of the settings panel, click `Eject` - this will break down the Form Block into it's constituent parts. We can see this in the component tree.
4. `Add component`: **Options Picker**
5. In the <Glossary>Settings Panel</Glossary>, enter 'ExistingEmployee' as the *Field*.

   ![](https://files.readme.io/0171c19a436369c489145c20cf8fad6da0fc1137c16ae7d547c7aab0b0e236d0-image.png)
6. <br />
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

<Image align="center" src="https://files.readme.io/dd6563b4f413c5177ce3c8eea52209d18263502c03a9ca7df38636d70c9ba881-Screenshot_2024-09-10_at_11.24.40.png" />

13. In the component tree, drag the **Relationshipfield** below the **Options Picker**
14. Click on the `Conditions` tab
15. `Configure conditions`: `Add condition`
    1. Hide component IF `{{ Form.Fields.ExistingEmployee }}` Equals Binding NEW
    2. `Save`

<Image align="center" src="https://files.readme.io/d622ebc63d69d810c28a7caa0351d53fd9c12c983b708f946e895311ae6534aa-Screenshot_2024-09-10_at_11.40.13.png" />

16. `Add component`: **Container**
17. Click on the `Conditions` tab
18. `Configure conditions`: `Add condition`
    1. Hide component IF `{{ Form.Fields.ExistingEmployee }}` Equals Binding SELECT
    2. `Save`

<Image align="center" src="https://files.readme.io/caec2a07a03895283068f4231a35ce31662bbfb70e7b7eac461494658fa0d152-Screenshot_2024-09-10_at_11.53.16.png" />

19. `Add component`: **Headline**. Set *Text* to 'New Employee'
20. `Add component`: **Field Group** 

    <Image align="center" src="https://files.readme.io/7c21f740984f44943d23d02a434eb4e7e68ef349c4d1cc8e82cfde984e44d247-untitled.png" />
21. Click on the **Form** and set the *Schema* to 'Employees' 

    <Image align="center" src="https://files.readme.io/b1db970ee8023547ad65a0d759ff445e18d7b2b9a521222457b5927f4b981212-Screenshot_2024-09-10_at_14.13.55.png" />
22. Click on the newly added **Field Group** and click `Update form fields`
23. Set *Type* to `Two columns`
24. [Delete](https://docs.budibase.com/docs/components#editing) the **Jobs** field

<Image align="center" src="https://files.readme.io/1bbbcaef46e5860a9d0384fedc325f995b6c1a46bcc7f3e8451226cc8931088b-Screenshot_2024-09-10_at_14.13.55_3.png" />

25. You may also need to replace the *Text Field* for Address with a *Long Form Field* if it displays as an error.
26. Click on the **Form** and set the *Schema* back to 'Jobs' 

    ![](https://files.readme.io/b74f57abf58076446e979882cb67e8132c93db235ce8c82dedd6821da1d42b3b-image.png)
27. Click on the 'Save' **Button**, enter the settings using the cog-icon and `Define actions`
28. Click the `X` beside each actions so that only the **Validate Form** and **Save Row** actions remain
29. `Add Action`: **Navigate To** *Screen* '/jobs'
30. `Add Action`: **Continue if / Stop if**
    1. Continue if `{{ Form.Fields.ExistingEmployee }}` Equals NEW
31. `Add Action`: **Save Row**

    1. Set *Table* to 'Employees'
    2. `Add Column` for each form field in the Employees **Field Group**. Set the *Value* to the form field bindings, e.g. `{{ Form.Fields.First Name }}`
    3. `Add Column` for the 'Jobs' column. Set *Value* to `{{ Action 2.Saved row._id }}`. This will get the **\_id** of the Job that was saved in second action.
    4. `Save` your actions! 

       ![](https://files.readme.io/a0ac370f616d059a211b0d235214546520b7273875a1d9c586107789682ec86c-image.png)

> 📘 Employee validation
>
> As the select form schema is for the *Jobs* table, you will need to add [custom validation rules](https://docs.budibase.com/docs/form-validation#custom-validation-rules) to the *Employee* fields you want validated.
>
> The same is also true for options that are defined by the table schema, such as *Employee Level* in this case.

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
