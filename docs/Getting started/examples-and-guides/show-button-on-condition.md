---
title: Show button on condition
excerpt: Allow end users to perform an app action only in certain cases
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
<iframe width="800" height="600" frameborder="0" allow="clipboard-write;camera;geolocation;fullscreen" src="https://cprem.budibase.app/embed/docs-show-button-on-condition"></iframe>
`}</HTMLBlock>

## Scenario

Only show a 'create new record' button if the user has already searched the existing records for potential duplicates.   

<HTMLBlock>{`
<u><b style="font-size: 14px;">Challenge: </b></u><br />
<span style="position: relative; font-size: 24px; color: currentColor;">★☆☆☆☆</span>
`}</HTMLBlock>

***

## Steps

1. Start by adding a Data Provider, set to fetch rows from the Employees table
2. Add a table nested inside the Data Provider, with the data source as the Data Provider (not fetching data directly) 

   <Image align="center" src="https://files.readme.io/6f02c738d965382a5f1307a422349abebc28332d6f2bc23ccda8e0f702c02033-Screenshot_2024-09-17_at_10.42.53.png" />
3. Above the Data Provider component, add a a Form component (not to be confused with a Form Block).
4. Add a text field to the form, setting the field to "email" and the label to "Search Employee Email" 

   <Image align="center" src="https://files.readme.io/0a9fc5b7efd4c3f95c8a2cf015f63116309c1952225f1dd4c76125516b7909ee-Screenshot_2024-09-17_at_10.44.15.png" />
5. In the settings of the Data Provider, click to add a filter (Important: be sure to set the filter on the Data Provider itself, not the table)
6. Add the filter `Email` is `Like` the `Binding` `{{ New Form.Fields.email }}` 

   <Image align="center" src="https://files.readme.io/e387141a01948c2681921f44f1f3fd020692d6ea544622ea08f77e16b194663a-Screenshot_2024-09-17_at_10.47.34.png" />
7. Add a button underneath the Data Provider, with the button text to "Add new employee"
8. Add a Modal with "Ignore clicks outside" checked, and the size set to "Medium.
9. Add a Form Block to the modal, set to create a new row in the Employees Table. 

   <Image align="center" src="https://files.readme.io/bc972c46e726def2509c42d77f1ab35b47ba7fa73247e169075f14d70bab3a03-Screenshot_2024-09-17_at_10.54.51.png" />
10. In the button, set an On Click action to open the modal, and click save.

    ![](https://files.readme.io/4392a571a78e64769ba1149d855d96b3c73882e70cbba933195128c50c074c20-image.png)
11. In the Button component, head to the Conditions tab
12. Add a condition to `Show Component` `IF` `{{ New Data Provider.Rows Length }}` `Equals` `Number` `0` 
13. Remember to save 

<Image align="center" src="https://files.readme.io/1b9092f3d26f098bfa430f0db4cc41c97ad10c5f51037479bc90a588dbb2ab6b-Screenshot_2024-09-17_at_11.02.21.png" />

Now if a user tries to search for an employee that doesn't exist, they can create a new record.

<br />

***

## App export

*Downloads may take a few seconds.*

<HTMLBlock>{`
<!-- Add icon library -->
<link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/4.7.0/css/font-awesome.min.css">

<!-- Full width -->
<button class="btn" onclick="window.open('https://drive.google.com/file/d/1Pm3CqW2KY9Ef1YWYMZ13n1doonFmZNLH/view?usp=sharing')" style="width:100%"><i class="fa fa-download"></i> Download</button>

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
