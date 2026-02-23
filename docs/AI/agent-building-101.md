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

Before configuring instructions, ensure your Agent is connected to an LLM. If you haven’t done this yet, click Connect AI Model at the top of the screen. Alternatively if you have alreayd set this up, select the LLM you are using. More information on connecting an LLM can be found[here](docs:agents-config).

By default, Budibase provides a structured instruction template to help you define your Agent clearly. More information on this can be found [here](docs:agents-config#).

For now we will use the below instructions:

```markdown Instructions
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

After configuring and adding the above instructions, run a test and see everything is working.

### Adding Tools

Tools allow an Agent to retrieve and modify real data inside your Workspace.

When you connect data sources to an Agent, Budibase automatically makes relevant operations available as tools. As your workspace grows, your Agent can be granted access to more tools, but it’s important to only enable what’s necessary for the task.

For this example, we’ll give our Agent access to three tools from the Tickets table:

* **Budibase: Ticket.List Rows** Retrieve multiple tickets
* **Budibase: Ticket.Get Row** Retrieve a specific ticket
* **Budibase: Ticket.Update Row** Update fields on an existing ticket

Together, these allow the Agent to:

* Look up tickets when answering questions
* Retrieve specific ticket details
* Update ticket status, priority, or resolution notes when required

> As a best practice, only enable the minimum set of tools required. Limiting tool access helps ensure predictable and safe behaviour.

#### Updating Our Instructions

Once these tools are enabled, Budibase injects them into the Agent’s execution context. We now need to guide the Agent on when to use them.

Here is our updated instruction prompt:

```markdown Instructions
**Agent role**
You are a Service Desk AI Agent responsible for managing support tickets.

**Inputs**
You receive ticket data, including Title, Description, Status, and Priority.

**Available tools**
{{ budibase.Tickets.list_rows }}
{{ budibase.Tickets.get_row }}
{{ budibase.Tickets.update_row }}

**Actions**
- Categorise new tickets.
- Suggest a priority level (Low, Medium, High).
- Escalate tickets marked as urgent.
- Answer questions about ticket status.
- Use the appropriate tool when retrieving or updating ticket data.

**Output**
Respond clearly and concisely.
When categorising or prioritising, return structured JSON:
{
  "category": "string",
  "priority": "Low | Medium | High",
  "requiresEscalation": "boolean"
}

**Rules**
- Always use the provided tools when accessing ticket data.
- Do not fabricate ticket information.
- Do not modify tickets unless explicitly instructed.
- Only escalate tickets with High priority.
- Be concise and professional.
- Use British English.
```

<br />

### Testing the Agent

### Triggering the Agent Automatically

<br />
