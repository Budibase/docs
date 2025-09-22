---
title: Scroll to top of screen
excerpt: ''
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

<HTMLBlock>{`
<iframe width="800" height="600" style="border: thick double #32a1ce; max-width: 100%;" allow="clipboard-write;camera;geolocation;fullscreen" src="https://plugins.budibase.app/embed/scroll-to-form-field"></iframe>
`}</HTMLBlock>

## Scenario

The Scroll To action can be useful when using [Form steps](doc:form-steps), for example when clicking a button for the next step, you want to scroll to the top of the screen.

<HTMLBlock>{`
<u><b style="font-size: 14px;">Challenge: </b></u><br />
<span style="position: relative; font-size: 24px; color: #000000;">★★★☆☆</span>
`}</HTMLBlock>

***

## Steps

1. `Add component`: **Form**
2. In the <Glossary>Settings Panel</Glossary> set *Schema* to 'Jobs'

<Image align="center" width="400px" src="https://files.readme.io/cec9532-steps1_and_2.png" />

3. `Add component`: **Form Step**
4. `Add component`: **Headline**. Set *Text* to 'Job'
5. `Add component`: **Field Group**
6. In the <Glossary>Settings Panel</Glossary> click on `Update form fields`: `Update`

<Image align="center" src="https://files.readme.io/3944aff-steps3_to_6.png" />

7. Click on the **Form** and set *Schema* to 'Expenses'

8. `Add component`: **Text Field**

9. Enter 'Hidden1' into the *Field* setting

10. Click on the `Styles` tab

11. Enter '0px' for *Height*

12. `Edit custom CSS`
    ```css
    visibility: hidden;
    ```

13. Drag the **Text Field** above the **Headline**

<Image align="center" src="https://files.readme.io/e607c67-steps7_to_13.png" />

14. [Duplicate](https://docs.budibase.com/docs/components#editing) the **Form Step**
15. In the <Glossary>Settings Panel</Glossary> set *Step* to 2
16. Click on the **Hidden Text Field** and set *Field* to 'Hidden2'
17. Change the **Headline** *Text* to 'Expenses'
18. Click on the **Field Group**: `Update form fields`: `Update`
19. `Add component`: **Button** and set *Text* to 'Back'
20. Under *On click*: `Define actions`
21. `Add Action`: **Change Form Step** -  Select the *Form* and set *Step* to 'First step' 
22. `Add Action`: **Scroll To Field** - Select the *Form* and set *Field* to 'Hidden1'
23. `Save`

<Image align="center" src="https://files.readme.io/d80d1d8-steps14_to_23.png" />

24. [Copy](https://docs.budibase.com/docs/components#editing) the **Button**
25. Click on the **Field Group** in **Form Step 1**. Paste the **Button**
26. In the <Glossary>Settings Panel</Glossary> set *Text* to 'Next'
27. Under *On click*: `Define actions`:
    1. **Change Form Step** - Change *Step* to 'Next step'
    2. **Scroll To Field** - Change *Field* to 'Hidden2'
    3. `Save`

<Image align="center" src="https://files.readme.io/921cc0d-steps24_to_27.png" />

<br />

***

## App export

*Downloads may take a few seconds.*

<HTMLBlock>{`
<!-- Add icon library -->
<link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/4.7.0/css/font-awesome.min.css">

<!-- Full width -->
<button class="btn" onclick="window.open('https://drive.google.com/uc?export=download&id=1kKeBOAvVQZEFCUawoshlIyZoulA9pyBX')" style="width:100%"><i class="fa fa-download"></i> Download</button>

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
