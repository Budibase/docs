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
<iframe width="800" height="600" style="border: thick double #32a1ce; max-width: 100%;" allow="clipboard-write;camera;geolocation;fullscreen" src="https://plugins.budibase.app/embed/show-button-on-condition"></iframe>
`}</HTMLBlock>

## Scenario

Only show a 'create new record' button if the user has already searched the existing records for potential duplicates.   

<HTMLBlock>{`
<u><b style="font-size: 14px;">Challenge: </b></u><br />
<span style="position: relative; font-size: 24px; color: #000000;">★☆☆☆☆</span>
`}</HTMLBlock>

***

## Steps

1. `Add component`: **Table block** for the 'Employees' table.
2. In the <Glossary>Settings Panel</Glossary>, set the *Title*, and select the 'Email' under *Search fields*

<Image align="center" src="https://files.readme.io/0f4fce7-step12.png" />

3. `Add component`: **Button** and set the *Text* to 'Add new employee?'
4. Click on the `Conditions` tab, and click on the conditions button.
5. `Add condition`: 
   1. *Show component* IF `{{ Employees Table Block.Rows Length }}` *Equals Number* 0
   2. `Save`

<Image align="center" src="https://files.readme.io/66b1928-steps3-5.png" />

6. `Add component`: **Side panel**
7. `Add component`: **Form block**. Set *Data* to the 'Employees' table.
8. In the <Glossary>Component Tree</Glossary>, click on the 'Add new employee?' button, and configure the *On click* actions.
9. `Add Action`: **Open Side Panel** and select the side panel component. Make sure to `Save`.

<Image align="center" src="https://files.readme.io/600ae16-final_steps.png" />

***

## App export

*Downloads may take a few seconds.*

<HTMLBlock>{`
<!-- Add icon library -->
<link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/4.7.0/css/font-awesome.min.css">

<!-- Full width -->
<button class="btn" onclick="window.open('https://drive.google.com/uc?export=download&id=1t6gBSPHZmj1kDOkRlPHXdnPG1ROOXkhT')" style="width:100%"><i class="fa fa-download"></i> Download</button>

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
