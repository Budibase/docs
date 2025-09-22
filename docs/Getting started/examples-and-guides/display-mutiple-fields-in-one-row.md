---
title: Display multiple fields in one row
excerpt: Using field group layouts for your form fields
deprecated: false
hidden: false
metadata:
  title: ''
  description: ''
  robots: noindex
next:
  description: ''
---
## Take a look!

<HTMLBlock>{`
<iframe width="800" height="720" style="border: thick double #32a1ce; max-width: 100%;" allow="clipboard-write;camera;geolocation;fullscreen" src="https://plugins.budibase.app/embed/display-multiple-fields-in-one-row"></iframe>
`}</HTMLBlock>

## Scenario

By default your [Form](doc:forms) fields will display one after the other in a single column - this is very common! There are however some occasions when you may wish to have multiple fields in a row. Perhaps you want to add some search fields, or simply group fields by some common aspect.   

This guide will show you how to change the layout of your form fields using [Field groups](doc:field-groups).

<HTMLBlock>{`
<u><b style="font-size: 14px;">Challenge: </b></u><br />
<span style="position: relative; font-size: 24px; color: #000000;">★★☆☆☆</span>
`}</HTMLBlock>

***

## Steps

1. `Add component`: **Form**
2. In the <Glossary>Settings Panel</Glossary> select 'Employees' as the *Schema*

<Image align="center" src="https://files.readme.io/4602c69-steps1_and_2.png" />

3. `Add component`: **Field Group**
4. In the <Glossary>Settings Panel</Glossary> click on the `One column` button beside *Type*
   1. Within the modal, click on `Two columns` and `Confirm` 
5. `Update form fields` and confirm `Update`

<Image align="center" src="https://files.readme.io/f93451a-steps3_to_6.png" />

6. Drag the **Phone** field to be just after the **Email** field

> 📘
>
> We want the **Postcode** field to be on the same row as the **Address** and **City** field

7. `Add component`: **Container** 
8. In the <Glossary>Settings Panel</Glossary> set the *Direction* to row
9. Drag the **Container** to be just after the **Address** field
10. Drag the **City** and **Postcode** fields into the **Container**

<Image align="center" src="https://files.readme.io/30dc752-steps6_to_10.png" />

> 📘
>
> After the address info we want the **Badge Photo** dropzone to fill a larger area with the remaining picker fields aligned on the left-hand side.

11. Click on the **Form** component in the <Glossary>Component Tree</Glossary> and then `Add component`: **Field Group**
12. In the <Glossary>Settings Panel</Glossary> set the *Type* to `Sidebar with Main`
13. Drag and drop the **Employee Level**, **Badge Photo**, **Start Date** and **End Date** fields into the newly added **Field Group**

<Image align="center" src="https://files.readme.io/2a1b106-steps11_to_13.png" />

14. Click on the second field group and `Add component`: **Container**
15. Drag the newly added **Container** above **Badge Photo**
16. Drag **Employee Level**, **Start Date** and **End Date** into the **Container**

<Image align="center" src="https://files.readme.io/c5e0639-14_to_16.png" />

<br />

***

## App export

*Downloads may take a few seconds*

<HTMLBlock>{`
<!-- Add icon library -->
<link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/4.7.0/css/font-awesome.min.css">

<!-- Full width -->
<button class="btn" onclick="window.open('https://drive.google.com/uc?export=download&id=1AmBhX2caKWaMQ_0mgOkA3_5AQY8lMYap')" style="width:100%"><i class="fa fa-download"></i> Download</button>

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
