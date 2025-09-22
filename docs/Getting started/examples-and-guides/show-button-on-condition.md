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

[block:html]
{
  "html": "<iframe width=\"800\" height=\"600\" frameborder=\"0\" allow=\"clipboard-write;camera;geolocation;fullscreen\" src=\"https://cprem.budibase.app/embed/guide-show-button-on-condition\"></iframe>"
}
[/block]


## Scenario

Only show a 'create new record' button if the user has already searched the existing records for potential duplicates.   

[block:html]
{
  "html": "<u><b style=\"font-size: 14px;\">Challenge: </b></u><br />\n<span style=\"position: relative; font-size: 24px; color: #000000;\">★☆☆☆☆</span>"
}
[/block]


***

## Steps

1. `Add component`: **Table block** for the 'Employees' table.
2. In the <<glossary:Settings Panel>>, set the _Title_, and select the 'Email' under _Search fields_

[block:image]
{
  "images": [
    {
      "image": [
        "https://files.readme.io/0f4fce7-step12.png",
        "",
        ""
      ],
      "align": "center"
    }
  ]
}
[/block]


3. `Add component`: **Button** and set the _Text_ to 'Add new employee?'
4. Click on the `Conditions` tab, and click on the conditions button.
5. `Add condition`: 
   1. _Show component_ IF `{{ Employees Table Block.Rows Length }}` _Equals Number_ 0
   2. `Save`

[block:image]
{
  "images": [
    {
      "image": [
        "https://files.readme.io/66b1928-steps3-5.png",
        "",
        ""
      ],
      "align": "center"
    }
  ]
}
[/block]


6. `Add component`: **Side panel**
7. `Add component`: **Form block**. Set _Data_ to the 'Employees' table.
8. In the <<glossary:Component Tree>>, click on the 'Add new employee?' button, and configure the _On click_ actions.
9. `Add Action`: **Open Side Panel** and select the side panel component. Make sure to `Save`.

[block:image]
{
  "images": [
    {
      "image": [
        "https://files.readme.io/600ae16-final_steps.png",
        "",
        ""
      ],
      "align": "center"
    }
  ]
}
[/block]


***

## App export

_Downloads may take a few seconds._

[block:html]
{
  "html": "<!-- Add icon library -->\n<link rel=\"stylesheet\" href=\"https://cdnjs.cloudflare.com/ajax/libs/font-awesome/4.7.0/css/font-awesome.min.css\">\n\n<!-- Full width -->\n<button class=\"btn\" onclick=\"window.open('https://drive.google.com/uc?export=download&id=1t6gBSPHZmj1kDOkRlPHXdnPG1ROOXkhT')\" style=\"width:100%\"><i class=\"fa fa-download\"></i> Download</button>\n\n<style>\n  /* Style buttons */\n.btn {\n  background-color: #3571de;\n  border: none;\n  color: white;\n  padding: 12px 30px;\n  cursor: pointer;\n  font-size: 16px;\n}\n\n/* Darker background on mouse-over */\n.btn:hover {\n  background-color: #2e64c9;\n}\n</style>"
}
[/block]