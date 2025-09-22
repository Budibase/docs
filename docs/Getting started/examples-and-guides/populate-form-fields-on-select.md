---
title: Populate form fields on select
excerpt: Auto-filling a form for a chosen record
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
<iframe width="800" height="600" frameborder="0" allow="clipboard-write;camera;geolocation;fullscreen" src="https://cprem.budibase.app/embed/guide-populate-form-fields-on-select"></iframe>
`}</HTMLBlock>

## Scenario

Given have a [Form block](doc:form-block) that displays some fields for a table record, you want the <Glossary>End User</Glossary> to be able to select a record from an [Options picker](doc:option-picker) and update the form fields with the correct information. 

[App state](doc:app-state) will be used to allow communication between our search field, and the details form.

<HTMLBlock>{`
<u><b style="font-size: 14px;">Challenge: </b></u><br />
<span style="position: relative; font-size: 24px; color: #000000;">★★☆☆☆</span>
`}</HTMLBlock>

***

## Steps

1. `Add component`: **Form**
2. `Add component`: **Data Provider**
3. In the <Glossary>Settings Panel</Glossary>, select the 'Employees' table
4. Untick *Paginate*

<Image align="center" src="https://files.readme.io/ee3d481-steps1_to_4.png" />

5. `Add component`: **Options Picker**
6. In the <Glossary>Settings Panel</Glossary>, type in a *Field* name and *Label*
7. Check *Autocomplete*
8. Select 'Data provider' as the *Options source*
9. Select 'Email' as the *Label column* and '\_id' as the *Value column*

<Image align="center" src="https://files.readme.io/f0a5758-steps5_to_9.png" />

10. In the **Data** section, right-click the 'Employees' row you want to be the <Glossary>Default Value</Glossary>. Click `Copy row _id`.

<Image align="center" src="https://files.readme.io/5aefcb9-Screenshot_2023-08-29_at_11.19.55.png" />

11. Back to the **Design** section, paste the row **\_id** you copied into the *Default value* setting of the **Options Picker**
12. Click the button beside *On change*. `Add Action`: **Update State**
    1. *Set value* 'SelectedEmployee' to `{{ Field Value }}`
    2. Be sure to `Save`

<Image align="center" src="https://files.readme.io/cf46056-steps11_and_12.png" />

13. Click on the **Screen** component (root level of the <Glossary>Component Tree</Glossary>). `Add component`: **Form Block**
14. In the <Glossary>Settings Panel</Glossary>, set *Type* to 'Update', and *Table* to 'Employees'
15. Set *Row ID* to `{{ State.SelectedEmployee }}`
16. Untick *Show save button*

<Image align="center" src="https://files.readme.io/ae53b88-steps13_to_16.png" />

<br />

***

## App export

*Downloads may take a few seconds.*

<HTMLBlock>{`
<!-- Add icon library -->
<link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/4.7.0/css/font-awesome.min.css">

<!-- Full width -->
<button class="btn" onclick="window.open('https://drive.google.com/uc?export=download&id=1r88gcVMZUV1ehsSob-uKKnCRkZMI-pHv')" style="width:100%"><i class="fa fa-download"></i> Download</button>

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
