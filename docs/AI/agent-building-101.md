---
title: Agent building 101
deprecated: false
hidden: true
metadata:
  robots: index
---
In Budibase, Agents enable AI to interact with the data, tools, and automations in your Workspace.

In this guide, we’ll build a simple AI Service Desk Agent that can:

* Answer questions about tickets
* Categorise and summarise new tickets
* Update ticket statuses
* Escalate urgent issues automatically

Along the way, we’ll learn how to:

* Configure an Agent’s instructions
* Connect Workspace data as tools
* Define structured outputs
* Trigger automations from Agent actions
* Test and iterate safely

Let’s jump in.

### What is an Agent?

#### An Agent is:

* An LLM configured with:
  * Instructions
  * Tools
  * Memory
  * Structured outputs
* That can:
  * Read data
  * Write data
  * Trigger automations

### Setting Up Our Data Layer

In Budibase, Agents can interact with any data, tables, API calls, or automations within your Workspace, as long as they’re explicitly given access.

Before creating an Agent, it’s important to understand the data it will work with and define what actions it should be allowed to perform.

Take a look at our [Introduction to Data ](https://docs.budibase.com/docs/data) documentation to learn more about how data works in Budibase.

#### Our Tickets Table

For this guide, we’ll use a Budibase DB table called Tickets.

This contains the following columns:

* Title - text
* Description - long-form text
* Status - single select
* Priority - single select
* Time Created - date
* Resolution Notes - long-form text
* Created By - single user
* Category - single select

The Status, Time Created, and Created By columns are automatically populated using default values. The Category column uses the Categorise Text AI operation to classify incoming tickets.

<br />
