---
title: AI-Powered Table Generation
excerpt: Build internal Budibase tables fast with Budibase AI.
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
      slug: generating-javascript-with-ai
      title: Generating JavaScript with AI
    - type: basic
      slug: quickstart-budibase-ai
      title: 'Quickstart: Budibase AI'
---
Budibase makes it easy to start with our internal database by allowing you to generate table structures using Budibase AI. This feature is only available with the Budibase DB (our built-in non-relational database) and is designed to help you scaffold your data quickly.

> 🚧 Make sure you have enabled Budibase AI, we have a Quickstart guide [here](https://docs.budibase.com/docs/quickstart-budibase-ai)

## What does it do?

Using a simple prompt, Budibase AI can:

* Generate one or more database tables based on your prompt
* Add relevant fields to each table
* Populate the tables with sample data

> 🚧 This feature generates no UI, just the database tables and test data.

## How to use it

* Go to the Data area
* Click on the + to the right of Sources

  <Image align="center" src="https://files.readme.io/4f1e0ae310e6c9506dd57962552809b62f6b670d5818fabff621999836e57c7a-Screenshot_2025-05-01_at_08.12.42.png" />
* In the input labeled "Generate data using AI...", you can:
  * Type a custom prompt, e.g.,\
    "Build a table for managing customer feedback."\
    "Create two tables: users and tasks, with related fields."
  * Or click one of the suggested prompts to get started instantly.
* Click the ▶️ (Run) button to submit your prompt.

  <Image align="center" src="https://files.readme.io/028fca2b06c0d811409b1a6221dfa5f91a3f0befc2c6aa8e4088284699ccf8c3-Screenshot_2025-05-01_at_08.13.22.png" />
* Budibase AI will generate:
  * One or more tables
  * Field names and types
  * Sample records to help you get started

## Tips for better results

* Be specific: Mention what the tables are for and what fields they should include.
* You can describe relationships between tables, e.g., “Users and orders with a one-to-many relationship.”
* Start with a small prompt and expand as needed; regenerating is easy!
