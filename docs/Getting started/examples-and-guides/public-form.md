---
title: Create a secure public form
excerpt: ''
deprecated: false
hidden: false
metadata:
  title: ''
  description: >-
    The document provides a step-by-step guide on creating a secure public form
    using Budibase 3.0, allowing data collection from unauthenticated users
    while ensuring only app admins can access the submitted data. It includes
    instructions on setting up tables, designing forms, configuring automations,
    and publishing the app.
  robots: index
next:
  description: ''
---
## Try it out!

[block:html]
{
  "html": "<iframe width=\"800\" height=\"600\" frameborder=\"0\" allow=\"clipboard-write;camera;geolocation;fullscreen\" src=\"https://cprem.budibase.app/embed/guides-public-form\"></iframe>"
}
[/block]


## Scenario

This is for situations where you want to collect data from unauthenticated users, but want to keep your table secure so that only App admins can see the submitted data. With the release of Budibase 3.0, table RBAC has been streamlined, so we'll use automations to write this data securely to the table. It's ideal for public forms like surveys where a user submits data and doesn't ever have to see it again.

[block:html]
{
  "html": "<u><b style=\"font-size: 14px;\">Challenge: </b></u><br />\n<span style=\"position: relative; font-size: 24px; color: currentColor;\">★★☆☆☆</span>"
}
[/block]


***

## Steps

1. In the Data section, create a **new table** with columns for the data you want to capture. By default, only App admins can access this table, which is fine for our example. 

   [block:image]{"images":[{"image":["https://files.readme.io/f119f4c27335cff66aaff1542f5bf8d4a2937ac97335f1ed6908d77a4bef2df2-Pasted_Graphic.png",null,""],"align":"center"}]}[/block]
2. In the newly created app, create a **new screen** for your form
3. Set the screen's **Access** to `Public user`
4. Build a **Form** with field components that suit your table's schema. 

   [block:image]{"images":[{"image":["https://files.readme.io/edc2394cfdc7fe085f1867fb1b99000163266ef9ca38266a645c61ac40c95323-Screenshot_2025-08-15_at_13.44.09.png",null,null],"align":"center"}]}[/block]

> ℹ️ Generating fields from the Form Schema
> 
> You can use your table as the Form Schema to generate the relevant field components in a Field Group, but please note that a public user won't have access to that schema, so they may see errors when using the app. Once you have created your form fields, switch the Form Schema to Custom to prevent any issues for public users.

5. In the Automation section, create a **new automation** that is triggered by an _App Action_

   [block:image]{"images":[{"image":["https://files.readme.io/5ebb5ad52c16c92a8306005a156b60c0d8db5c4831d96fc439e16afc95b33342-Screenshot_2025-08-15_at_13.44.57.png",null,null],"align":"center"}]}[/block]
6. **Change the role** for this automation to `Public user`
7. **Add fields** that match the fields in your form 

   [block:image]{"images":[{"image":["https://files.readme.io/52a500785c1eaa3c444b34e99770a067d2c63cf571b5da0882b41ed604839eb5-Screenshot_2025-08-15_at_13.45.34.png",null,null],"align":"center"}]}[/block]
8. **Add a Create Row step** to the automation
9. Select the relevant table and use the relevant bindings from your automation trigger for each column value 

   [block:image]{"images":[{"image":["https://files.readme.io/d213f64003bbebbb88a6cc73b325557691f5b534ca38c535631ef1a10eed9c3d-Screenshot_2025-08-15_at_13.45.42.png",null,null],"align":"center"}]}[/block]
10. Go back to your screen in the Data section and add a **Button component,** which we'll use to submit your form
11. **Add a _Trigger Automation_ On click action** to the Button that triggers the automation we made 
12. **Add bindings** from your Form fields to send them to the automation

    [block:image]{"images":[{"image":["https://files.readme.io/dbc7bec656e91a6fafd5da7808f682d1a6aa15e261ebd29358c0694256a0188e-Screenshot_2025-08-15_at_13.47.13.png",null,null],"align":"center"}]}[/block]
13. **Publish the app** and test the public form in a private window

<br />

***

## App export

_Downloads may take a few seconds._

[block:html]
{
  "html": "<!-- Add icon library -->\n<link rel=\"stylesheet\" href=\"https://cdnjs.cloudflare.com/ajax/libs/font-awesome/4.7.0/css/font-awesome.min.css\">\n\n<!-- Full width -->\n<button class=\"btn\" onclick=\"window.open('https://drive.google.com/uc?export=download&id=1nInFRXnaX7N4u3F-zIOtKBdIQAP1SIsf')\" style=\"width:100%\"><i class=\"fa fa-download\"></i> Download</button>\n\n<style>\n  /* Style buttons */\n.btn {\n  background-color: #3571de;\n  border: none;\n  color: white;\n  padding: 12px 30px;\n  cursor: pointer;\n  font-size: 16px;\n}\n\n/* Darker background on mouse-over */\n.btn:hover {\n  background-color: #2e64c9;\n}\n</style>"
}
[/block]