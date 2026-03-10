---
title: 'Quickstart: Budibase AI'
excerpt: >-
  This page will help you get Budibase AI up and running quickly so you can
  start generating code or database tables or creating LLM-powered automations
  in your Workspace
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
      slug: ai-column
      title: AI Column🔒
    - type: basic
      slug: generating-javascript-with-ai
      title: Generating JavaScript with AI
---
## Enabling Budibase AI

To start using Budibase AI, configure an AI provider in your Workspace.

1. Open your Workspace **Settings**.
2. Go to **AI**.
3. Choose a provider (for example Budibase AI, OpenAI, Anthropic, Google, Mistral, OpenRouter, or Groq).
4. Enter the required credentials and model details.
5. Save and enable the configuration.

AI features are workspace specific, so you will need to connect to these again in other workspaces if you wish to enable AI functionality.

> 📘 If you are self-hosting and want to use Budibase AI, you need to make sure you are on an Enterprise plan and have a active license key in your Workspace. See the [Workspace management guide](https://docs.budibase.com/docs/workspace-management#self-hosted-workspaces).

## Where You Can Use AI

Once enabled, Budibase AI can assist in various areas of Budibase:

* [AI Columns](docs:ai-column)  
  Automatically generate values for columns using AI, perfect for transforming, summarizing, or cleaning data.
* [Generate JavaScript with AI](docs:generating-javascript-with-ai)  
  You'll now see an AI icon in any field that supports bindings (e.g., visibility rules, dynamic values). Click it to open a prompt where you can describe what you need. Budibase AI will return usable JavaScript tailored to your input.
* [Cron Job Expression Generation](docs:cronjob#configuring-the-cron-expression)  
  In the settings area for the cron job, you'll see a field called "Generate Cron Expression with AI", simply type in your prompt and this will provide you with an expression that suits your needs.
* [AI Automation Actions](docs:ai-automation-steps-overview)  
  Triggerable automation actions that leverage AI, including classifying, generating, and categorising text, extracting document data, or executing custom prompts within automation rules.
* [Generate Tables in Budibase DB](docs:ai-powered-table-generation)  
  Leveraging Budibase AI to generate schemas for Budibase DB tables, which can be leveraged across your Workspace.

<Image align="center" alt="AI Automation Actions in Budibase" caption="AI Automation Actions in Budibase" src="https://files.readme.io/af9f3e6ec2575c28bc6b5a7c98e34e2eda35026396dea6a2e586ba8e41a8be69-Screenshot_2025-08-15_at_13.55.52.png" />

<Image align="center" alt="Generate table schemas for your Workspace with Budibase AI" caption="Generate table schemas for your Workspace with Budibase AI" src="https://files.readme.io/e4e8cb20a610aeee264cd951c47bddf4bb75db4d28924bb1bfc26280cbebb40b-Screenshot_2025-08-15_at_13.50.36.png" />
