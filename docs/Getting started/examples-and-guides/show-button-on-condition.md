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

   <Image align="center" src="https://files.readme.io/9e4d94eae7e87dfbbc3d7cdeda8b05cfd22fc450d3e2c734d77a3e12c52c7319-Screenshot_2025-08-15_at_14.51.20.png" />
3. Above the Data Provider component, add a a Form component (not to be confused with a Form Block).
4. Add a text field to the form, setting the field to "email" and the label to "Search Employee Email" 

   <Image align="center" width="450px" src="https://files.readme.io/b4d288121bec9660b4262f73ba4682d84e0774ba36126fc2ecd3be8675f7e0d4-Screenshot_2025-08-15_at_14.53.05.png" />
5. In the settings of the Data Provider, click to add a filter (Important: be sure to set the filter on the Data Provider itself, not the table)
6. Add the filter `Email` is `Like` the `Binding` `{{ New Form.Fields.email }}` 

   <Image align="center" src="https://files.readme.io/a60d3d4c46670eefa7f3bd997408ec52911cfef4db49b2f742489ffbac907349-Screenshot_2025-08-15_at_14.53.31.png" />
7. Add a button underneath the Data Provider, with the button text to "Add new employee"
8. Add a <Glossary>Settings Panel</Glossary> with "Ignore clicks outside" checked, and the size set to "Medium.
9. Add a Form Block to the modal, set to create a new row in the Employees Table. 

   <Image align="center" width="450px" src="https://files.readme.io/8818d059b53875cbfeeda81a4f926c46c65bdaef665d21e09cb778a7e07c6068-Screenshot_2025-08-15_at_14.55.20.png" />
10. In the button, set an On Click action to open the modal, and click save.

    ![](https://files.readme.io/4392a571a78e64769ba1149d855d96b3c73882e70cbba933195128c50c074c20-image.png)
11. In the Button component, head to the Conditions tab
12. Add a condition to `Show Component` `IF` `{{ New Data Provider.Rows Length }}` `Equals` `Number` `0` 
13. Remember to save 

<Image align="center" src="https://files.readme.io/76f2132b269d4f2a346ec243c42f947bb143efb3258a0ad756052b0c55eb0696-Screenshot_2025-08-15_at_15.00.42.png" />

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
