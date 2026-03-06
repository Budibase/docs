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

To start using Budibase AI, you'll need to enable it from the AI Settings. Follow the steps based on your hosting setup:

### Budibase Cloud

1. Go to your **Settings** area and click the AI tab.

   <Image align="center" src="https://files.readme.io/e7235f4578fbbaca09f344ab69d0de1b1e8e04b336a95a2da93b9f7b14c893cc-Screenshot_2025-08-15_at_13.43.02.png" />
2. Enable Budibase AI.
3. That’s it! AI features should now be available throughout your apps.

### Self-hosted Budibase

1. Go to your **Settings** area and click the AI tab.

   <Image align="center" src="https://files.readme.io/3424edac526e8047970c65e7022a29c635c3ac7c9fdd0d942c72c22159b2b380-Screenshot_2025-08-15_at_13.44.14.png" />
2. Activate your license key. Follow this [guide](https://docs.budibase.com/docs/workspace-management#self-hosted-workspaces) for help.
   1. Note: Only account owners can access Workspaces. If you don’t have access, create a new account or ask the account owner to create a new Workspace for your self-hosted instance.
3. Choose which AI provider you wish to use.

   1. Budibase AI

      1. No configuration needed, you simply need to activate your license key
      2. if you haven't activated your license key whenever you try to enable you will be prompted with a modal saying you must add a license key.

         <Image align="center" src="https://files.readme.io/192a0e79d0db94d8391012877901c83ea911268d696bcfcc36727a8cac26305e-Screenshot_2025-08-15_at_13.44.37.png" />
   2. OpenAI

      1. Click the setup button
      2. This opens a modal where you’ll need to fill in the required fields

         <Image align="center" src="https://files.readme.io/0a76fb8007e2d32114981928b4c1c8e9b5aa69d30ce73d587c01afd1d733b666-Screenshot_2025-08-15_at_13.45.10.png" />

         1. API Key
         2. Default Model
      3. After filling in the details click the Enable button
   3. Azure OpenAI

      1. Click the setup button
      2. This opens a modal where you’ll need to fill in the required fields

         <Image align="center" src="https://files.readme.io/2e3b76f508c755532f740ffedbf5af6d49c500a1b15e232c5981b55b24c5aca8-Screenshot_2025-08-15_at_13.45.43.png" />

         1. API Key
         2. Base URL
         3. Default Model
      3. After filling in the details click the Enable button
4. Once configured and enabled, AI features will be available in your Budibase apps.

## Where You Can Use AI

Once enabled, Budibase AI can assist in various areas of Budibase:

* [AI Columns](docs:ai-column)\
  Automatically generate values for columns using AI, perfect for transforming, summarizing, or cleaning data.
* [Generate JavaScript with AI](docs:generating-javascript-with-ai)\
  You'll now see an AI icon in any field that supports bindings (e.g., visibility rules, dynamic values). Click it to open a prompt where you can describe what you need. Budibase AI will return usable JavaScript tailored to your input.
* [Cron Job Expression Generation](docs:cronjob#configuring-the-cron-expression)\
  In the settings area for the cron job, you'll see a field called "Generate Cron Expression with AI", simply type in your prompt and this will provide you with an expression that suits your needs.
* [AI Automation Actions](docs:ai-automation-steps-overview)\
  Triggerable automation actions that leverage AI, including classifying, generating, and categorising text, extracting document data, or executing custom prompts within automation rules.
* [Generate Tables in Budibase DB](docs:ai-powered-table-generation)\
  Leveraging Budibase AI to generate schemas for Budibase DB tables, which can be leveraged across your Workspace.

<Image alt="AI Automation Actions in Budibase" align="center" src="https://files.readme.io/af9f3e6ec2575c28bc6b5a7c98e34e2eda35026396dea6a2e586ba8e41a8be69-Screenshot_2025-08-15_at_13.55.52.png">
  AI Automation Actions in Budibase
</Image>

<Image alt="Generate table schemas for your Workspace with Budibase AI" align="center" src="https://files.readme.io/e4e8cb20a610aeee264cd951c47bddf4bb75db4d28924bb1bfc26280cbebb40b-Screenshot_2025-08-15_at_13.50.36.png">
  Generate table schemas for your Workspace with Budibase AI
</Image>
