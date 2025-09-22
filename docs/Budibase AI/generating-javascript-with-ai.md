---
title: Generating JavaScript with AI
excerpt: >-
  Budibase AI makes it easier than ever to write JavaScript within Budibase,
  even if you're not a JS expert.
deprecated: false
hidden: false
metadata:
  title: ''
  description: ''
  robots: index
next:
  description: ''
  pages:
    - type: basic
      slug: quickstart-budibase-ai
      title: 'Quickstart: Budibase AI'
    - type: basic
      slug: ai-powered-table-generation
      title: AI-Powered Table Generation
---
## Where can you use it?

You can use AI-generated JavaScript in any area of Budibase that supports JavaScript, including:

* [Component](doc:components) [bindings](doc:introduction-to-bindings#bindings-drawer)
* [Validation](doc:form-validation)
* [Conditional](doc:conditions)
* [Custom CSS](doc:custom-css)

You’ll see an AI icon with the text "Generate with AI" (usually at the bottom of the code editor, only when on JavaScript). This UI may change depending on whether or not you have activated AI features. 

<Image align="center" src="https://files.readme.io/6639c1d56ff762731a7c9b83fd3b3bd768aab99553c1c47ec5aa331ee2562a2a-Screenshot_2025-04-23_at_13.28.47.png" />

### If AI is not activated

The AI button will appear grayed out and labeled "Switch on AI." Click it to enable AI features. You can follow this [Quickstart guide](doc:quickstart-budibase-ai) for extra information on how to set this up.

<Image align="center" src="https://files.readme.io/9b9fd792b2e7b726c0fce975ed3220fd6f8300540795812798b89e50790bcc3d-Screenshot_2025-04-23_at_13.28.56.png" />

### If AI is activated

You will be able to type a prompt in the input area and press Enter to generate code.

<Image align="center" src="https://files.readme.io/23d5978c9dddb6128568900124ed35f2d2775eefbc7ddd2e8c60b37775f8c83e-Screenshot_2025-04-30_at_11.14.15.png" />

## How to use it

1. Click on the "Generate with AI" area.
2. Type what you want to do.

   ```
   Return all items that have the Status completed.

   Return the first and last name of the first item in the array

   Return all tickets with the Status Open
   ```
3. Hit Generate, Budibase AI will provide ready-to-use JavaScript code.
4. Review and amend if needed, or regenerate with a new prompt.

   <Image align="center" src="https://files.readme.io/02bdca04312421bf057f2a7e2550ced2a169ae982c50252649b8c23e35c118ae-20250430_123301.gif" />
5. Click the **Accept** button to insert the code.\
   Or click the Reject button to rewrite your prompt.
6. Click the Save button as you normally would.

## Tip

Be as clear and specific as possible in your prompts. The better the input, the better the output.
