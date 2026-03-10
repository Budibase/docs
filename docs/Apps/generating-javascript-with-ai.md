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
* Automation steps

You’ll see an AI icon with the text "Generate with AI" (usually at the bottom of the code editor, only when on JavaScript). This UI may change depending on whether or not you have activated AI features. 

### If AI is not activated

The AI button will appear grayed out and labeled "Switch on AI." Click it to open setup, then configure a provider in **Settings > AI Configs**. You can follow [Quickstart: Budibase AI](doc:quickstart-budibase-ai) for the full setup flow.

### If AI is activated

Type a prompt in the input area and press Enter to generate code.

## How to use it

1. Click on the "Generate with AI" area.
2. Type what you want to do.

   ```
   Return all items that have the Status completed.

   Return the first and last name of the first item in the array

   Return all tickets with the Status Open
   ```
3. Click the **Run** button and Budibase AI will provide ready-to-use JavaScript code.
4. Review and amend if needed, or regenerate with a new prompt.
5. Click the **Accept** button to insert the code.\
   Or click the **Reject** button to rewrite your prompt.
6. Click the Save button as you normally would.

## Tip

Be as clear and specific as possible in your prompts. The better the input, the better the output.
