---
title: Extract document data
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
The Extract Document Data step uses AI to pull structured fields from a PDF or image and return them as JSON that your automation can use.

This is useful when you need to turn unstructured files, such as invoices, forms, or receipts, into machine-readable data.

> 📘 You need to [enable AI](docs:quickstart-budibase-ai) to use this feature.

## What this step does

At runtime, this step:

* Loads a document from either a URL or an attachment binding
* Sends the content to your configured LLM
* Forces the LLM output into your provided schema shape
* Returns extracted data as a JSON array in `data`

The extraction output returns at most one object per run

## Typical use cases

* Extracting invoice fields such as `invoiceNumber`, `total`, and `dueDate`
* Pulling ID or application form details into a table row
* Reading values from uploaded receipts, purchase orders, or contracts
* Converting incoming document attachments from email triggers into structured records

## Inputs

* Document (required) - The source document to parse
* Source (optional, default `URL`) - Where the document comes from
* File Type (URL only, optional, default `pdf`) - File type for URL documents
* Data schema (required) - Expected output shape

### Source options

* `URL` - Use a document link in the `Document` field
* `Attachment` - Use an attachment object in the `Document` field

If the source and input format do not match, extraction fails

### Supported file types

* `pdf`
* `jpg`
* `jpeg`
* `png`

For URL sources, `File Type` determines how the document is processed.

## Designing your data schema

`Data schema` defines the fields and expected types. Keep it simple and explicit.

Supported value hints:

* `string`
* `number`
* `boolean`

Example schema:

```json
{
  "invoiceNumber": "string",
  "invoiceDate": "string",
  "totalAmount": "number",
  "isPaid": "boolean"
}
```

Tips:

* Use stable field names you can map directly into table columns
* Prefer simple primitive types
* If a value is ambiguous (for example dates), initially extract as `string` and normalise in a later step

## Outputs

* `success` (`boolean`) - Whether extraction succeeded
* `data` (`json`) - Extracted structured records (array, max 1 object)
* `response` (`string`) - Error details when extraction fails

## Example flow

1. Trigger: `Row Created` on a table with an attachment column
2. Step: `Extract Document Data`
3. Input:
   * `Source`: `Attachment`
   * `Document`: attachment binding from the trigger row
   * `Data schema`: expected fields (for example invoice fields)
4. Step: `Update Row` to write `stepsByName.ExtractStep.data.0.<field>` values into columns
5. Optional: add a `Condition` step to branch when `ExtractStep.success` is `false`

## Troubleshooting

If extraction fails, check the following:

* Missing required inputs:
  * Ensure both `Document` and `Data schema` are set
* Source/input mismatch:
  * `URL` source must receive a URL string
  * `Attachment` source must receive an attachment object
* URL fetch failures:
  * Confirm the URL is reachable from your Budibase environment
  * Confirm authentication or firewall rules are not blocking access
* Schema/output parsing failures:
  * Simplify your schema and retry
  * Start with a few fields, then add more incrementally
* No data found:
  * The step can fail if the model cannot find matching values for your schema
  * Try clearer field names and cleaner source documents

## Related guides

* [AI automation steps overview](docs:ai-automation-steps-overview)
* [LLM prompt](docs:ai-automation-step-llm-prompt)
* [Agent](docs:ai-automation-step-agent)
