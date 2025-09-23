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

Have a [Form block](doc:form-block) that displays some fields for a table record, you want the <Glossary>End User</Glossary> to be able to select a record from an [Options picker](doc:option-picker) and update the form fields with the correct information. 

[App state](doc:app-state) will be used to allow communication between our search field, and the details form.

<HTMLBlock>{`
<u><b style="font-size: 14px;">Challenge: </b></u><br />
<span style="position: relative; font-size: 24px; color: currentColor;">★★☆☆☆</span>
`}</HTMLBlock>

***

## Steps

1. `Add component`: **Form**
2. `Add component`: **Data Provider**
3. In the <Glossary>Settings Panel</Glossary>, select the 'Employees' table
4. Untick *Paginate*

<Image align="center" width="450px" src="https://files.readme.io/f9a707ec90d3b9f94ce604bec73297aabd54ef45100adc0162f155f1b34372ef-Screenshot_2025-08-15_at_12.59.50.png" />

5. `Add component`: **Options Picker**
6. In the <Glossary>Settings Panel</Glossary>, type in a *Field* name and *Label*
7. Check *Autocomplete*
8. Select 'Data provider' as the *Options source*
9. Select 'Email' as the *Label column* and '\_id' as the *Value column*

<Image align="center" width="450px" src="https://files.readme.io/f3d44839727089db5e888e8d5dc0a51c673e5d89379f4f37b404e51954b14c93-Screenshot_2025-08-15_at_13.00.32.png" />

10. In the **Data** section, right-click the 'Employees' row you want to be the <Glossary>Default Value</Glossary>. Click `Copy row _id`.

<Image align="center" width="450px" src="https://files.readme.io/762188235599714ef1487a51136c58bee0708431087e80deb4da71a14ec8bc95-Screenshot_2025-08-15_at_13.01.27.png" />

11. Back to the **Design** section, paste the row **\_id** you copied into the *Default value* setting of the **Options Picker**
12. Click the button beside *On change*. `Add Action`: **Update State**
    1. *Set value* 'SelectedEmployee' to `{{ Field Value }}`
    2. Be sure to `Save`

<Image align="center" src="https://files.readme.io/eeca8277472e89e6837707a9918d39e0f58e449d447b668e7a920ba0c1d03aec-Screenshot_2025-08-15_at_13.40.18.png" />

13. Click on the **Screen** component (root level of the <Glossary>Component Tree</Glossary>). `Add component`: **Form Block**
14. In the <Glossary>Settings Panel</Glossary>, set *Type* to 'View', and *Table* to 'Employees'
15. Set *Row ID* to `{{ State.SelectedEmployee }}`

<Image align="center" width="450px" src="https://files.readme.io/cd2a30a593acc21d8a04b4421af0a0f093b6669c5b2f804ecddd3e9a0da3d1bf-Screenshot_2025-08-15_at_13.40.48.png" />

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
