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

In Budibase, Agents can interact with any tables, API calls, or automations within your Workspace, as long as they’re explicitly given access.

Before creating an Agent, it’s important to understand the data it will work with and define what actions it should be allowed to perform.

Take a look at our [Introduction to Data ](https://docs.budibase.com/docs/data) documentation to learn more about how data works in Budibase.

#### Our Tickets Table

For this guide, we’ll use a Budibase DB table called Tickets.

This contains the following columns:

| Name             | Field Type     |
| :--------------- | :------------- |
| Title            | Text           |
| Description      | Long form text |
| Status           | Single select  |
| Priority         | Single select  |
| Time Created     | Date           |
| Resolution Notes | Long form text |
| Created By       | Single user    |
| Category         | Single select  |

### Creating our agent

Onto creating our first agent. Make sure you have done the initial setup of selecting a provider and configuring a model before doing this. You can find out how to do this [here](docs:agents-config).

1. Click on the **Agents** link on the left side of the screen
2. Click the **+ New Agent** button at the top right of your screen
3. Provide a name, I'm going with **Service Desk Agent**
4. This will redirect you to a new screen specifically for your agent

### Configuring Instructions

The Instructions field defines how your Agent thinks, behaves, and decides when to use tools. 

Before configuring instructions, ensure your Agent is connected to an LLM. If you haven’t done this yet, click Connect AI Model at the top of the screen. More information on connecting an LLM can be found[here](docs:agents-config).

By default, Budibase provides a structured instruction template to help you define your Agent clearly. More information on this can be found [here](docs:agents-config#).

For our agent we will use the below:

```markdown Service
**Agent role**
You are a Service Desk AI Agent responsible for managing support tickets.

**Inputs**
You receive ticket data, including Title, Description, Status, and Priority.

**Actions**
- Categorise new tickets.
- Suggest a priority level (Low, Medium, High).
- Escalate tickets marked as urgent.
- Answer questions about ticket status.
- Use available tools when reading or updating tickets.

**Output**
Respond clearly and concisely.
When categorising or prioritising, return structured JSON:
{
  "category": "string",
  "priority": "Low | Medium | High",
  "requiresEscalation": "boolean"
}

**Rules**
- Do not modify tickets unless explicitly instructed.
- Only escalate tickets with High priority.
- Be concise and professional.
- Use British English where possible.
```

<br />

### Adding Tools

### Testing the Agent

### Triggering the Agent Automatically
