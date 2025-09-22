---
title: Table row status
excerpt: Add an icon to graphically indicate the status of your records
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
  "html": "<iframe width=\"800\" height=\"600\" frameborder=\"0\" allow=\"clipboard-write;camera;geolocation;fullscreen\" src=\"https://cprem.budibase.app/embed/docs-table-row-status\"></iframe>"
}
[/block]


## Scenario

In this example we have a table of sales records and we want to display an icon to show if the sale was made _Online_ or _Offline_. 

The same approach could be applied for status based workflows, e.g. _Approved_, _In Progress_, _Complete_, etc.

[block:html]
{
  "html": "<u><b style=\"font-size: 14px;\">Challenge: </b></u><br />\n<span style=\"position: relative; font-size: 24px; color: #000000;\">★☆☆☆☆</span>"
}
[/block]


***

## Steps

1. Add a table to your screen, and point it to the Sales table (available in the download link at the bottom of the page)
2. In the Table settings, disable "Add rows", "Edit rows", "Delete Rows"
3. In the Table settings, under columns, click the cog/sprocket icon for the Sales Channel
4. Add a condition by clicking "No conditions set"  

   [block:image]{"images":[{"image":["https://files.readme.io/0714778d8cf439e9611c76c7895792a48a83e1afdf8329a9f005cab609123b87-untitled_3.png","",""],"align":"center"}]}[/block]
5. Add the condition "Update `Cell` `Background color` to [red] if value `Equals` `Value` Offline"
6. Duplicate the condition, and adjust it to show green for "Online"
7. Save

![](https://files.readme.io/a5b3a3f942d7f408d67288d7c26e9f79f3c44d306ddd44920d204e60a96d128e-image.png)

<br />

<br />

***

## App export

_Downloads may take a few seconds._

[block:html]
{
  "html": "<!-- Add icon library -->\n<link rel=\"stylesheet\" href=\"https://cdnjs.cloudflare.com/ajax/libs/font-awesome/4.7.0/css/font-awesome.min.css\">\n\n<!-- Full width -->\n<button class=\"btn\" onclick=\"window.open('https://drive.google.com/file/d/1OMsPMfkk915uCSR4SPIdxzQZrWztxPbU/view?usp=sharing')\" style=\"width:100%\"><i class=\"fa fa-download\"></i> Download</button>\n\n<style>\n  /* Style buttons */\n.btn {\n  background-color: #3571de;\n  border: none;\n  color: white;\n  padding: 12px 30px;\n  cursor: pointer;\n  font-size: 16px;\n}\n\n/* Darker background on mouse-over */\n.btn:hover {\n  background-color: #2e64c9;\n}\n</style>"
}
[/block]