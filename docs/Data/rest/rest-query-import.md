---
title: REST query import
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
The REST query import feature allows you to import one or more queries at a time. 

The **supported formats** for import are:

- Swagger 2.0 / OpenAPI 2.0 (YAML or JSON)
- Swagger 3.0 / OpenAPI 3.0 (YAML or JSON)
- CURL

 

***

  

## Import collection

### File

Upload a file containing your API documentation.

[block:image]
{
  "images": [
    {
      "image": [
        "https://files.readme.io/6a2a11c-file.png",
        "Screenshot 2021-12-21 at 16.19.14.png",
        ""
      ],
      "align": "center"
    }
  ]
}
[/block]


  

### Text

Enter the documentation string directly.

[block:image]
{
  "images": [
    {
      "image": [
        "https://files.readme.io/f40c6c1-raw.png",
        "Screenshot 2021-12-21 at 16.19.22.png",
        ""
      ],
      "align": "center"
    }
  ]
}
[/block]


    

***

  

## Converting and importing a Postman collection

As Postman does not natively use OpenAPI, you will need to generate an OpenAPI definition before importing it into Budibase.

Find the collection in Postman that you want to export. Click the `...` and select `Export`. 

[block:image]
{
  "images": [
    {
      "image": [
        "https://files.readme.io/eacbb98-export_collection.png",
        "",
        ""
      ],
      "align": "center",
      "caption": "Exporting an API collection in Postman"
    }
  ]
}
[/block]


This will download a JSON file with the API configuration.

We now need to convert this collection to an OpenAPI definition. We can do that with the handy [postman2openapi](https://github.com/kevinswiber/postman2openapi) tool.

[block:image]
{
  "images": [
    {
      "image": [
        "https://files.readme.io/1b157c6-openapi.png",
        "",
        ""
      ],
      "align": "center"
    }
  ]
}
[/block]


In Budibase, add a new REST API datasource, or select an existing one. Under the _Queries_ tab, click `Import`.

[block:image]
{
  "images": [
    {
      "image": [
        "https://files.readme.io/fa6b77e-Screenshot_2023-11-23_at_09.05.17.png",
        "",
        ""
      ],
      "align": "center"
    }
  ]
}
[/block]




Click on the _Raw Text_ tab and paste in the newly generated OpenAPI definition. Click `Import`.

[block:image]
{
  "images": [
    {
      "image": [
        "https://files.readme.io/7691a92-raw_text.png",
        "",
        ""
      ],
      "align": "center"
    }
  ]
}
[/block]


You will now see the imported requests listed:

[block:image]
{
  "images": [
    {
      "image": [
        "https://files.readme.io/2592a69-Screenshot_2023-11-23_at_09.57.51.png",
        "",
        ""
      ],
      "align": "center",
      "caption": "Imported API collection"
    }
  ]
}
[/block]