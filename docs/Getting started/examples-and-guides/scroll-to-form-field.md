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

<br />

***

## App export

_Downloads may take a few seconds._

[block:html]
{
  "html": "<!-- Add icon library -->\n<link rel=\"stylesheet\" href=\"https://cdnjs.cloudflare.com/ajax/libs/font-awesome/4.7.0/css/font-awesome.min.css\">\n\n<!-- Full width -->\n<button class=\"btn\" onclick=\"window.open('https://drive.google.com/uc?export=download&id=1kKeBOAvVQZEFCUawoshlIyZoulA9pyBX')\" style=\"width:100%\"><i class=\"fa fa-download\"></i> Download</button>\n\n<style>\n  /* Style buttons */\n.btn {\n  background-color: #3571de;\n  border: none;\n  color: white;\n  padding: 12px 30px;\n  cursor: pointer;\n  font-size: 16px;\n}\n\n/* Darker background on mouse-over */\n.btn:hover {\n  background-color: #2e64c9;\n}\n</style>"
}
[/block]