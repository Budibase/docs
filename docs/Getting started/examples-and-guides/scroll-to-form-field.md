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

[block:html]
{
  "html": "<iframe width=\"800\" height=\"600\" frameborder=\"0\" allow=\"clipboard-write;camera;geolocation;fullscreen\" src=\"https://cprem.budibase.app/embed/guide-scroll-to-form-field\"></iframe>"
}
[/block]


## Scenario

The Scroll To action can be useful when using [Form steps](doc:form-steps), for example when clicking a button for the next step, you want to scroll to the top of the screen.

[block:html]
{
  "html": "<u><b style=\"font-size: 14px;\">Challenge: </b></u><br />\n<span style=\"position: relative; font-size: 24px; color: #000000;\">★★☆☆☆</span>"
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
        "https://files.readme.io/9040997d396af4ea44ac16f796daa631fa5945cef322e18bcae862079a504ce6-Screenshot_2024-09-16_at_09.42.18.png",
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
        "https://files.readme.io/76d3a3701183727cd2ae1b20f901608b88b6fcc062a643bf47c4a2f1d2b1dad5-Screenshot_2024-09-16_at_10.33.10.png",
        null,
        ""
      ],
      "align": "center"
    }
  ]
}
[/block]


7. Click on the **Form** and set _Schema_ to 'Expenses'

8. [Duplicate](https://docs.budibase.com/docs/components#editing) the **Form Step**

9. In the <<glossary:Settings Panel>> set _Step_ to 2

10. Change the **Headline** _Text_ to 'Expenses'

11. Click on the **Field Group**: `Update form fields`: `Update`

12. `Add component`: **Button** and set _Text_ to 'Back'

13. Set the _On click_: `actions`

14. `Add Action`: **Change Form Step** -  Select the _Form_ and set _Step_ to 'First step' 

15. `Add Action`: **Scroll To Field** - Select the _Form_ and set _Field_ to 'Expense Tags'

16. `Save`

[block:image]
{
  "images": [
    {
      "image": [
        "https://files.readme.io/a138313b3b99b025ffcb580f70edba0528ebbf1fbb89f409f80b07dbb71330db-untitled_1.png",
        null,
        ""
      ],
      "align": "center"
    }
  ]
}
[/block]


17. [Copy](https://docs.budibase.com/docs/components#editing) the **Button**
18. Click on the **Field Group** in **Form Step 1**. Paste the **Button**
19. In the <<glossary:Settings Panel>> set _Text_ to 'Next'
20. Under _On click_: `Define actions`
    1. **Change Form Step** - Change _Step_ to 'Next step'
    2. **Scroll To Field** - Change _Field_ to 'Quote Date'
    3. `Save`

[block:image]
{
  "images": [
    {
      "image": [
        "https://files.readme.io/085f95c65448be614430dd7788ae99d89d86d8bc52a88482afc2d4a347d98d33-Screenshot_2024-09-16_at_11.20.46.png",
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