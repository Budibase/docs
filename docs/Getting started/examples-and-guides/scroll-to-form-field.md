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

[block:html]
{
  "html": "<iframe width=\"800\" height=\"600\" style=\"border: thick double #32a1ce; max-width: 100%;\" allow=\"clipboard-write;camera;geolocation;fullscreen\" src=\"https://plugins.budibase.app/embed/scroll-to-form-field\"></iframe>"
}
[/block]

## Scenario

The Scroll To action can be useful when using [Form steps](doc:form-steps), for example when clicking a button for the next step, you want to scroll to the top of the screen.

[block:html]
{
  "html": "<u><b style=\"font-size: 14px;\">Challenge: </b></u><br />\n<span style=\"position: relative; font-size: 24px; color: #000000;\">★★★☆☆</span>"
}
[/block]

***

## Steps

1. `Add component`: **Form**
2. In the <<glossary:Settings Panel>> set _Schema_ to 'Jobs'

[block:image]
{
  "images": [
    {
      "image": [
        "https://files.readme.io/cec9532-steps1_and_2.png",
        null,
        ""
      ],
      "align": "center",
      "sizing": "400px"
    }
  ]
}
[/block]

3. `Add component`: **Form Step**
4. `Add component`: **Headline**. Set _Text_ to 'Job'
5. `Add component`: **Field Group**
6. In the <<glossary:Settings Panel>> click on `Update form fields`: `Update`

[block:image]
{
  "images": [
    {
      "image": [
        "https://files.readme.io/3944aff-steps3_to_6.png",
        null,
        ""
      ],
      "align": "center"
    }
  ]
}
[/block]

7. Click on the **Form** and set _Schema_ to 'Expenses'

8. `Add component`: **Text Field**

9. Enter 'Hidden1' into the _Field_ setting

10. Click on the `Styles` tab

11. Enter '0px' for _Height_

12. `Edit custom CSS`
    ```css
    visibility: hidden;
    ```

13. Drag the **Text Field** above the **Headline**

[block:image]
{
  "images": [
    {
      "image": [
        "https://files.readme.io/e607c67-steps7_to_13.png",
        null,
        ""
      ],
      "align": "center"
    }
  ]
}
[/block]

14. [Duplicate](https://docs.budibase.com/docs/components#editing) the **Form Step**
15. In the <<glossary:Settings Panel>> set _Step_ to 2
16. Click on the **Hidden Text Field** and set _Field_ to 'Hidden2'
17. Change the **Headline** _Text_ to 'Expenses'
18. Click on the **Field Group**: `Update form fields`: `Update`
19. `Add component`: **Button** and set _Text_ to 'Back'
20. Under _On click_: `Define actions`
21. `Add Action`: **Change Form Step** -  Select the _Form_ and set _Step_ to 'First step' 
22. `Add Action`: **Scroll To Field** - Select the _Form_ and set _Field_ to 'Hidden1'
23. `Save`

[block:image]
{
  "images": [
    {
      "image": [
        "https://files.readme.io/d80d1d8-steps14_to_23.png",
        null,
        ""
      ],
      "align": "center"
    }
  ]
}
[/block]

24. [Copy](https://docs.budibase.com/docs/components#editing) the **Button**
25. Click on the **Field Group** in **Form Step 1**. Paste the **Button**
26. In the <<glossary:Settings Panel>> set _Text_ to 'Next'
27. Under _On click_: `Define actions`:
    1. **Change Form Step** - Change _Step_ to 'Next step'
    2. **Scroll To Field** - Change _Field_ to 'Hidden2'
    3. `Save`

[block:image]
{
  "images": [
    {
      "image": [
        "https://files.readme.io/921cc0d-steps24_to_27.png",
        null,
        ""
      ],
      "align": "center"
    }
  ]
}
[/block]

## App export

[Scroll to top of screen](https://cdn.budicloud.prod.budibase.net/app_plugins_cbbc01f239b24903890a91844c6cdbe0/attachments/dfc331b1-579c-4aad-b1bb-c866edf3969e.gz?Expires=1690048510&Policy=eyJTdGF0ZW1lbnQiOlt7IlJlc291cmNlIjoiaHR0cHM6Ly9jZG4uYnVkaWNsb3VkLnByb2QuYnVkaWJhc2UubmV0L2FwcF9wbHVnaW5zX2NiYmMwMWYyMzliMjQ5MDM4OTBhOTE4NDRjNmNkYmUwL2F0dGFjaG1lbnRzL2RmYzMzMWIxLTU3OWMtNGFhZC1iMWJiLWM4NjZlZGYzOTY5ZS5neiIsIkNvbmRpdGlvbiI6eyJEYXRlTGVzc1RoYW4iOnsiQVdTOkVwb2NoVGltZSI6MTY5MDA0ODUxMH19fV19&Signature=gPJ9nUJp~9WrtyjGIIJBt6fNsLCaZZWNTK~5WApuAYb9NUkAyAsQ7XA63QLs4-OE4Vvk2TXeYCFYHg9ymFvGxO~kk0rYrQBlMqzrVnSSMyyzRTKZlcDgEzZzcPrr0oGGGuiASrS6ox5ANFfmIjY318e6~AZ-SJV6lrw7gAjklvTY2n12MWV4pDlEKRDhxLHqg1xsMi-NmMvsJMI6qIivQntuhTRIgrTMGvFr8vgi-uWZeLshb6X1Nn-TStOPHfAqQXBT5kd3px2vf~eiowjaFn8i27Dr98ADfRYMOz69a2kWCasOfINVzKqltfxhwarjxdLklkyrAaNRTX2wfo3mkw__&Key-Pair-Id=KL23NAZBW7UD1)