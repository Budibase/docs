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
Use query import to create multiple REST queries at once from API definitions.

## Supported formats

* OpenAPI 2.0 / Swagger 2.0 (JSON or YAML)
* OpenAPI 3.0 / Swagger 3.0 (JSON or YAML)
* cURL

## Import flow (file or raw text)

1. Open **Settings > Connections > APIs**
2. Open the target connection
3. Click **Open in API Editor**
4. Click **Import**
5. Choose input source:
   * **File**: upload spec file
   * **Raw text**: paste spec text
6. Click **Import**
7. Review the imported queries
8. Open key queries and click **Send**
9. Save any adjusted queries

## Post-import hardening checklist

1. Rename generic query names
2. Confirm auth config per query
3. Confirm base URL and path compatibility with your environment
4. Add or correct bindings for runtime values
5. Confirm request body formats
6. Validate the schema output after the first successful run

## Importing from Postman

Postman collections should be converted to OpenAPI first.

1. Export collection JSON from Postman
2. Convert using `postman2openapi`
3. Import converted output into API Editor
4. Validate each imported write endpoint carefully

## Common import issues

* Unknown or unsupported fields in the spec: simplify or clean the OpenAPI file before import
* Imported query fails auth: map to the correct connection auth config
* Paths duplicate the base URL: correct the path or full URL handling

## Related guides

* [REST queries](doc:rest-queries)
* [REST authentication](doc:rest-authentication)
* [REST variables](doc:rest-variables)
