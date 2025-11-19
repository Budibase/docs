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

* Swagger 2.0 / OpenAPI 2.0 (YAML or JSON)
* Swagger 3.0 / OpenAPI 3.0 (YAML or JSON)
* CURL

 

***

 

## Import collection

### File

Upload a file containing your API documentation.

<Image align="center" border={false} src="https://files.readme.io/6a2a11c-file.png" />

 

### Text

Enter the documentation string directly.

<Image align="center" border={false} src="https://files.readme.io/f40c6c1-raw.png" />

   

***

 

## Converting and importing a Postman collection

As Postman does not natively use OpenAPI, you will need to generate an OpenAPI definition before importing it into Budibase.

Find the collection in Postman that you want to export. Click the `...` and select `Export`.

<Image align="center" alt="Exporting an API collection in Postman" border={false} caption="Exporting an API collection in Postman" src="https://files.readme.io/eacbb98-export_collection.png" />

This will download a JSON file with the API configuration.

We now need to convert this collection to an OpenAPI definition. We can do that with the handy [postman2openapi](https://github.com/kevinswiber/postman2openapi) tool.

<Image align="center" border={false} src="https://files.readme.io/1b157c6-openapi.png" />

In Budibase, add a new REST API, or select an existing one. Under _Queries_ tab, click `Import`.

<Image align="center" border={false} src="https://files.readme.io/4eecea3ed0d0bc6ba2787c65e58a8fe6071f67fecec7ced402f24ffc0e10d8e7-Screenshot_2025-11-19_at_01.31.07.png" />

Click on the _Raw Text_ tab and paste in the newly generated OpenAPI definition. Click `Import`.

<Image align="center" border={false} src="https://files.readme.io/7691a92-raw_text.png" />

You will now see the imported requests listed:

<Image align="center" alt="Imported API collection" border={false} caption="Imported API collection" src="https://files.readme.io/2592a69-Screenshot_2023-11-23_at_09.57.51.png" />
