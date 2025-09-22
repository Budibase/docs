---
title: Display multiple fields in one row
excerpt: Using field group layouts for your form fields
deprecated: false
hidden: true
metadata:
  title: ''
  description: ''
  robots: noindex
next:
  description: ''
---
## Take a look!

[block:html]
{
  "html": "<iframe width=\"800\" height=\"720\" style=\"border: thick double #32a1ce; max-width: 100%;\" allow=\"clipboard-write;camera;geolocation;fullscreen\" src=\"https://plugins.budibase.app/embed/display-multiple-fields-in-one-row\"></iframe>"
}
[/block]

## Scenario

By default your [Form](doc:forms) fields will display one after the other in a single column - this is very common! There are however some occasions when you may wish to have multiple fields in a row. Perhaps you want to add some search fields, or simply group fields by some common aspect.   

This recipe will show you how to change the layout of your form fields using [Field groups](doc:field-groups).

[block:html]
{
  "html": "<u><b style=\"font-size: 14px;\">Challenge: </b></u><br />\n<span style=\"position: relative; font-size: 24px; color: #000000;\">★★☆☆☆</span>"
}
[/block]

***

## Steps

1. `Add component`: **Form**
2. In the <<glossary:Settings Panel>> select 'Employees' as the _Schema_

[block:image]
{
  "images": [
    {
      "image": [
        "https://files.readme.io/4602c69-steps1_and_2.png",
        null,
        ""
      ],
      "align": "center"
    }
  ]
}
[/block]

3. `Add component`: **Field Group**
4. In the <<glossary:Settings Panel>> click on the `One column` button beside _Type_
   1. Within the modal, click on `Two columns` and `Confirm` 
5. `Update form fields` and confirm `Update`

[block:image]
{
  "images": [
    {
      "image": [
        "https://files.readme.io/f93451a-steps3_to_6.png",
        null,
        ""
      ],
      "align": "center"
    }
  ]
}
[/block]

6. Drag the **Phone** field to be just after the **Email** field

> 📘 
> 
> We want the **Postcode** field to be on the same row as the **Address** and **City** field

7. `Add component`: **Container** 
8. In the <<glossary:Settings Panel>> set the _Direction_ to row
9. Drag the **Container** to be just after the **Address** field
10. Drag the **City** and **Postcode** fields into the **Container**

[block:image]
{
  "images": [
    {
      "image": [
        "https://files.readme.io/30dc752-steps6_to_10.png",
        null,
        ""
      ],
      "align": "center"
    }
  ]
}
[/block]

> 📘 
> 
> After the address info we want the **Badge Photo** dropzone to fill a larger area with the remaining picker fields aligned on the left-hand side.

11. Click on the **Form** component in the <<glossary:Component Tree>> and then `Add component`: **Field Group**
12. In the <<glossary:Settings Panel>> set the _Type_ to `Sidebar with Main`
13. Drag and drop the **Employee Level**, **Badge Photo**, **Start Date** and **End Date** fields into the newly added **Field Group**

[block:image]
{
  "images": [
    {
      "image": [
        "https://files.readme.io/2a1b106-steps11_to_13.png",
        null,
        ""
      ],
      "align": "center"
    }
  ]
}
[/block]

14. Click on the second field group and `Add component`: **Container**
15. Drag the newly added **Container** above **Badge Photo**
16. Drag **Employee Level**, **Start Date** and **End Date** into the **Container**

[block:image]
{
  "images": [
    {
      "image": [
        "https://files.readme.io/c5e0639-14_to_16.png",
        null,
        ""
      ],
      "align": "center"
    }
  ]
}
[/block]

## App export

[Display multiple fields in one row](https://cdn.budicloud.prod.budibase.net/app_plugins_cbbc01f239b24903890a91844c6cdbe0/attachments/80415c11-1dec-45c2-9f3d-170cf718a0d6.gz?Expires=1689883054&Policy=eyJTdGF0ZW1lbnQiOlt7IlJlc291cmNlIjoiaHR0cHM6Ly9jZG4uYnVkaWNsb3VkLnByb2QuYnVkaWJhc2UubmV0L2FwcF9wbHVnaW5zX2NiYmMwMWYyMzliMjQ5MDM4OTBhOTE4NDRjNmNkYmUwL2F0dGFjaG1lbnRzLzgwNDE1YzExLTFkZWMtNDVjMi05ZjNkLTE3MGNmNzE4YTBkNi5neiIsIkNvbmRpdGlvbiI6eyJEYXRlTGVzc1RoYW4iOnsiQVdTOkVwb2NoVGltZSI6MTY4OTg4MzA1NH19fV19&Signature=RrsP7UnviKq-VTtG95cgLGDfBl8ZQTWfV6Qh~hIG3HCsZFzrSXxzI7NC0Gxd3jbL4ZB8ZKxd5pMMVW-GssBQggmtRGI~ggdvDIvR7Tw~SvJCkXjiZSie1ZxfZCKslssNeh1fTyER-bGDICD0JuVl8grEYo2TsRkhRwVuADCyNiW0akaHJ8UOP~EiOOFUanFGa6AfcaUtbUaiFVsE3hyWgLbHAY~dRG4u1JRC1becOmbIvfIPz8xN2uGdzDkGLTdHLLbanNeahRUtn06nUzI7BdOrF6pjom-WSy17PYmxO76WiVfM3qXqCbVsmhdbpmPZNhFo7oeAOgq-3HmOJw5GNg__&Key-Pair-Id=KL23NAZBW7UD1)