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
Import lets you create multiple REST queries at once from API definitions.

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
7. Review imported queries
8. Open key queries and click **Send**
9. Save any adjusted queries

### Security validation

When importing from a URL, Budibase applies the same security hardening and validation rules as the REST integration itself. This includes:
* **Blacklist validation**: Preventing imports from blocked internal or sensitive hostnames.
* **DNS Rebinding protection**: Request pinning to validated IP addresses to prevent host-switching during the import process.
* **Protocol enforcement**: Only secure `http:` and `https:` protocols are permitted.
* **External reference blocking**: External file references (`$ref`) within the specification are not resolved. This prevents unauthorized file access or external network requests during the parsing phase.

## Post-import hardening checklist

1. Rename generic query names
2. Confirm auth config per query
3. Confirm base URL/path compatibility with your environment
4. Add or correct bindings for runtime values
5. Confirm request body formats
6. Validate schema output after first successful run

## Importing from Postman

Postman collections should be converted to OpenAPI first.

1. Export collection JSON from Postman
2. Convert using `postman2openapi`
3. Import converted output into API Editor
4. Validate each imported write endpoint carefully

## Common import issues

* Unknown/unsupported fields in spec: simplify or clean OpenAPI before import
* Imported query fails auth: map to correct connection auth config
* Paths duplicate base URL: correct path/full URL handling
* External references in spec: Budibase does not resolve external file references for security reasons. Ensure your specification is self-contained (bundled) before importing.

## Related guides

* [REST queries](doc:rest-queries)
* [REST authentication](doc:rest-authentication)
* [REST variables](doc:rest-variables)