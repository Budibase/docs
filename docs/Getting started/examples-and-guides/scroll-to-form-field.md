---
title: Scroll to top of screen
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

## App export

[Scroll to top of screen](https://cdn.budicloud.prod.budibase.net/app_plugins_cbbc01f239b24903890a91844c6cdbe0/attachments/dfc331b1-579c-4aad-b1bb-c866edf3969e.gz?Expires=1690048510\&Policy=eyJTdGF0ZW1lbnQiOlt7IlJlc291cmNlIjoiaHR0cHM6Ly9jZG4uYnVkaWNsb3VkLnByb2QuYnVkaWJhc2UubmV0L2FwcF9wbHVnaW5zX2NiYmMwMWYyMzliMjQ5MDM4OTBhOTE4NDRjNmNkYmUwL2F0dGFjaG1lbnRzL2RmYzMzMWIxLTU3OWMtNGFhZC1iMWJiLWM4NjZlZGYzOTY5ZS5neiIsIkNvbmRpdGlvbiI6eyJEYXRlTGVzc1RoYW4iOnsiQVdTOkVwb2NoVGltZSI6MTY5MDA0ODUxMH19fV19\&Signature=gPJ9nUJp~9WrtyjGIIJBt6fNsLCaZZWNTK~5WApuAYb9NUkAyAsQ7XA63QLs4-OE4Vvk2TXeYCFYHg9ymFvGxO~kk0rYrQBlMqzrVnSSMyyzRTKZlcDgEzZzcPrr0oGGGuiASrS6ox5ANFfmIjY318e6~AZ-SJV6lrw7gAjklvTY2n12MWV4pDlEKRDhxLHqg1xsMi-NmMvsJMI6qIivQntuhTRIgrTMGvFr8vgi-uWZeLshb6X1Nn-TStOPHfAqQXBT5kd3px2vf~eiowjaFn8i27Dr98ADfRYMOz69a2kWCasOfINVzKqltfxhwarjxdLklkyrAaNRTX2wfo3mkw__\&Key-Pair-Id=KL23NAZBW7UD1)
