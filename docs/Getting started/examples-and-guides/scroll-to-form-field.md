---
title: Scroll to top of screen
excerpt: ''
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
<iframe width="800" height="600" frameborder="0" allow="clipboard-write;camera;geolocation;fullscreen" src="https://cprem.budibase.app/embed/guide-scroll-to-form-field"></iframe>
`}</HTMLBlock>

## Scenario

The Scroll To action can be useful when using [Form steps](doc:form-steps), for example when clicking a button for the next step, you want to scroll to the top of the screen.

<HTMLBlock>{`
<u><b style="font-size: 14px;">Challenge: </b></u><br />
<span style="position: relative; font-size: 24px; color: currentColor;">★★☆☆☆</span>
`}</HTMLBlock>

***

## Steps

1. `Add component`: **Form**
2. In the <Glossary>Settings Panel</Glossary> set *Schema* to 'Jobs'

<Image align="center" width="400px" src="https://files.readme.io/9040997d396af4ea44ac16f796daa631fa5945cef322e18bcae862079a504ce6-Screenshot_2024-09-16_at_09.42.18.png" />

3. `Add component`: **Form Step**
4. `Add component`: **Headline**. Set *Text* to 'Job'
5. `Add component`: **Field Group**
6. In the <Glossary>Settings Panel</Glossary> click on `Update form fields`: `Update`

<Image align="center" src="https://files.readme.io/76d3a3701183727cd2ae1b20f901608b88b6fcc062a643bf47c4a2f1d2b1dad5-Screenshot_2024-09-16_at_10.33.10.png" />

7. Click on the **Form** and set *Schema* to 'Expenses'

8. [Duplicate](https://docs.budibase.com/docs/components#editing) the **Form Step**

9. In the <Glossary>Settings Panel</Glossary> set *Step* to 2

10. Change the **Headline** *Text* to 'Expenses'

11. Click on the **Field Group**: `Update form fields`: `Update`

12. `Add component`: **Button** and set *Text* to 'Back'

13. Set the *On click*: `actions`

14. `Add Action`: **Change Form Step** -  Select the *Form* and set *Step* to 'First step' 

15. `Add Action`: **Scroll To Field** - Select the *Form* and set *Field* to 'Expense Tags'

16. `Save`

<Image align="center" src="https://files.readme.io/a138313b3b99b025ffcb580f70edba0528ebbf1fbb89f409f80b07dbb71330db-untitled_1.png" />

17. [Copy](https://docs.budibase.com/docs/components#editing) the **Button**
18. Click on the **Field Group** in **Form Step 1**. Paste the **Button**
19. In the <Glossary>Settings Panel</Glossary> set *Text* to 'Next'
20. Under *On click*: `Define actions`
    1. **Change Form Step** - Change *Step* to 'Next step'
    2. **Scroll To Field** - Change *Field* to 'Quote Date'
    3. `Save`

<Image align="center" src="https://files.readme.io/085f95c65448be614430dd7788ae99d89d86d8bc52a88482afc2d4a347d98d33-Screenshot_2024-09-16_at_11.20.46.png" />

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
