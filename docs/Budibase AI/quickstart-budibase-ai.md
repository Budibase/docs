---
title: 'Quickstart: Budibase AI'
excerpt: >-
  This page will help you get Budibase AI up and running quickly so you can
  start generating code and content with AI directly inside Budibase.
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

To start using Budibase AI, you'll need to enable it from the AI Settings area. Follow the steps based on your hosting setup:

### Budibase Cloud

1. Go to your **Settings** area and click the AI tab.

   <Image align="center" src="https://files.readme.io/1df334a0b92a736fce86669af21b4be2da39e841be95746ded2dec5623a04bbf-Screenshot_2025-04-30_at_10.09.32.png" />
2. Enable Budibase AI.
3. That’s it! AI features should now be available throughout your apps.

### Self-hosted Budibase

1. Go to your **Settings** area and click the AI tab.

   <Image align="center" src="https://files.readme.io/d55c526b6d667b29694a862c5ae04b724e670e1037a813d0f924c1ebf69d7b6d-Screenshot_2025-04-30_at_10.10.10.png" />
2. Activate your license key. Follow this [guide](https://docs.budibase.com/docs/workspace-management#self-hosted-workspaces) for help.
   1. Note: Only account owners can access workspaces. If you don’t have access, create a new account or ask the account owner to create a new workspace for your self-hosted instance.
3. Choose which AI provider you wish to use.

   1. Budibase AI

      1. No configuration needed, you simply need to activate your license key
      2. if you haven't activated your license key whenever you try to enable you will be prompted with a modal saying you must add a license key.

         <Image align="center" src="https://files.readme.io/16caf782918ab5e8d53dbaf1da380dff0f23f7d16ec2510739de4053089a551e-CleanShot_2025-04-30_at_16.08.502x.png" />
   2. OpenAI

      1. Click the setup button
      2. This opens a modal where you’ll need to fill in the required fields

         <Image align="center" src="https://files.readme.io/e1a78b9a05310616a2fc4aa398d0aec30c62be117dce3a1163da158a29349eb8-Screenshot_2025-04-30_at_09.58.39.png" />

         1. API Key
         2. Default Model
      3. After filling in the details click the Enable button
   3. Azure OpenAI

      1. Click the setup button
      2. This opens a modal where you’ll need to fill in the required fields

         <Image align="center" src="https://files.readme.io/e10fd68cee2c6b9503bfd94a29c26dea6e8a6b368d883e943924a56a9163bcf0-Screenshot_2025-04-30_at_09.58.01.png" />

         1. API Key
         2. Base URL
         3. Default Model
      3. After filling in the details click the Enable button
4. Once configured and enabled, AI features will be available in your Budibase apps.

## Where You Can Use AI

Once enabled, Budibase AI can assist in various areas of Budibase:

* [AI Columns](doc:ai-column)\
  Automatically generate values for columns using AI, perfect for transforming, summarizing, or cleaning data.
* [Generate JavaScript with AI](doc:generating-javascript-with-ai)\
  You'll now see an AI icon in any field that supports bindings (e.g., visibility rules, dynamic values). Click it to open a prompt where you can describe what you need. Budibase AI will return usable JavaScript tailored to your input.
* [Cron Job Expression Generation](doc:cronjob#configuring-the-cron-expression)\
  In the settings area for the cron job, you'll see a field called "Generate Cron Expression with AI", simply type in your prompt and this will provide you with a expression that suits your needs.
