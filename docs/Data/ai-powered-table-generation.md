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

> 🚧 Make sure you have enabled Budibase AI. Follow the [Quickstart: Budibase AI](docs:quickstart-budibase-ai) guide.

## What does it do?

Using a simple prompt, Budibase AI can:

* Generate one or more database tables based on your prompt
* Add relevant fields to each table
* Populate the tables with sample data

> 🚧 This feature generates no UI, just the database tables and test data.

## How to use it

1. Open the workspace where you want to create tables.
2. In the left panel, go to **Data table**.
3. In the **Sources** section, click the **+** button.
4. Find the input labeled **Generate data using AI...**.
5. Enter a prompt that clearly describes:
   1. The table names you need
   2. The important fields for each table
   3. Any relationships between tables
6. Click the **Run** button (play icon) beside the prompt input.
7. Wait for generation to complete. Budibase will create:
   1. One or more Budibase DB tables
   2. Fields and field types for each table
   3. Sample rows
8. Open each generated table and review the schema before using it in production.

### Example prompt

Create two tables: Customers and Orders.
Customers fields: Name, Email, Company, Segment.
Orders fields: OrderNumber, OrderDate, Status, Total.
Relationship: one customer can have many orders.

### Verify before using

* Confirm field types are correct (for example, dates as Date and totals as Number).
* Confirm relationships were created as expected.
* Remove or replace sample data if you are working with real records.

## Tips for better results

* Be specific: Mention what the tables are for and what fields they should include.
* You can describe relationships between tables, e.g., “Users and orders with a one-to-many relationship.”
* Start with a small prompt and expand as needed; regenerating is easy!
