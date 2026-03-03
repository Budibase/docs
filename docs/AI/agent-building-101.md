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

## Before you start

Make sure you have:

* A model provider configured in [Agents Config](docs:agents-config)
* A `Tickets` table in your Workspace
* Permission to create Agents and Automations

### What is an agent?

#### An agent is:

* An LLM configured with:
  * Instructions
  * Tools
  * Memory
  * Structured outputs
* That can:
  * Read data
  * Write data
  * Trigger automations

### Setting up our data layer

In Budibase, Agents can interact with any tables, API calls, or automations within your Workspace, as long as they’re explicitly given access.

Before creating an Agent, it’s important to understand the data it will work with and define what actions it should be allowed to perform.

Take a look at our [Introduction to Data ](https://docs.budibase.com/docs/data) documentation to learn more about how data works in Budibase.

#### Our tickets table

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

Onto creating our first Agent. Make sure you have done the initial setup of selecting a provider and configuring a model before doing this. You can find out how to do this [here](docs:agents-config).

1. Click on the **Agents** link on the left side of the screen
2. Click the **+ New Agent** button at the top right of your screen
3. Provide a name. We're going with **Service Desk Agent**
4. This will redirect you to a new screen specifically for your Agent

### Configuring instructions

Before configuring instructions, ensure your Agent is connected to an LLM. If you haven’t done this yet, click Connect AI Model at the top of the screen. Alternatively, if you have already set this up, select the LLM you are using. More information on connecting an LLM can be found [here](docs:agents-config).

By default, Budibase provides a structured instruction template to help you define your Agent clearly. More information on this can be found [here](docs:agent-instructions-guide#recommended-template).

For now we will use the below instructions:

```markdown instructions
**Agent role**
You are a Service Desk AI Agent responsible for managing support tickets.

**Inputs**
You receive ticket data, including Title, Description, Status, and Priority.

**Actions**
- Categorise new tickets.
- Suggest a priority level (Low, Medium, High)
- Escalate tickets marked as urgent
- Answer questions about ticket status
- Use available tools when reading or updating tickets

**Output**
Respond clearly and concisely.
When categorising or prioritising, return structured JSON:
{
  "category": "string",
  "priority": "Low | Medium | High",
  "requiresEscalation": "boolean"
}

**Rules**
- Do not modify tickets unless explicitly instructed
- Only escalate tickets with High priority
- Be concise and professional
- Use British English where possible
```

After configuring and adding the above instructions, run a test and confirm that everything is working.

### Adding tools

Tools allow an Agent to retrieve and modify real data inside your Workspace.

When you connect data sources to an Agent, Budibase automatically makes relevant operations available as tools. As your Workspace grows, your Agent can be granted access to more tools, but it’s important to only enable what’s necessary for the task.

For this example, we’ll give our Agent access to three tools from the Tickets table:

* **Budibase: Tickets.List Rows** - Retrieves multiple tickets
* **Budibase: Tickets.Get Row** - Retrieves a specific ticket
* **Budibase: Tickets.Update Row** - Updates fields on an existing ticket

Together, these allow the Agent to:

* Look up tickets when answering questions
* Retrieve specific ticket details
* Update ticket status, priority, or resolution notes when required

> As a best practice, only enable the minimum set of tools required. Limiting tool access helps ensure predictable and safe behaviour.

#### Updating our instructions

Once these tools are enabled, Budibase injects them into the Agent’s execution context. We now need to guide the Agent on when to use them.

Here is our updated instruction prompt:

```markdown instructions
**Agent role**
You are a Service Desk AI Agent responsible for managing support tickets.

**Inputs**
You receive ticket data, including Title, Description, Status, and Priority.

**Available tools**
{{ budibase.Tickets.list_rows }}
{{ budibase.Tickets.get_row }}
{{ budibase.Tickets.update_row }}

**Actions**
- Categorise new tickets
- Suggest a priority level (Low, Medium, High)
- Escalate tickets marked as urgent
- Answer questions about ticket status
- Use the appropriate tool when retrieving or updating ticket data

**Output**
Respond clearly and concisely.
When categorising or prioritising, return structured JSON:
{
  "category": "string",
  "priority": "Low | Medium | High",
  "requiresEscalation": "boolean"
}

**Rules**
- Always use the provided tools when accessing ticket data
- Do not fabricate ticket information
- Do not modify tickets unless explicitly instructed
- Only escalate tickets with High priority
- Be concise and professional
- Use British English
```

Optionally, test again with some data and see how it handles the process.

### Testing the agent

Now that our Agent has instructions and tools, we can test whether it behaves safely and predictably.

Start with a few representative prompts:

* `What tickets are currently open and high priority?`
* `Summarise ticket "Printer access broken for Finance" and suggest category + priority.`
* `Update ticket "VPN issue for remote user" to In Progress and add a short resolution note.`

For each test, check:

* **Tool usage**: The Agent should use list/get tools to retrieve live data, and only use update when explicitly asked.
* **Output format**: Classification responses should follow the JSON schema we defined.
* **Data accuracy**: Values returned should match the row data in your `Tickets` table.
* **Safety rules**: The Agent should refuse to update or escalate unless your prompt asks it to.

If behaviour is inconsistent, tighten your instructions. For example:

* Clarify when updates are allowed.
* Add examples of valid and invalid requests.
* Add stricter wording around escalation rules.

Small prompt edits and frequent tests are the quickest path to reliable behaviour.

### Triggering the agent automatically

Once manual testing looks good, you can run this workflow automatically when new tickets are created.

In this example, we’ll use an Automation to classify and prioritise tickets as they arrive:

1. Create an Automation with a **Row Created** trigger on the `Tickets` table.
2. Add an **LLM Prompt** action to process `Title` and `Description` and return:
   * `category`
   * `priority`
   * `requiresEscalation`
3. Add an **Update Row** action to write the generated `Category` and `Priority` back to the created ticket.
4. Add a **Condition** step:
   * If `requiresEscalation` is `true`, trigger your escalation path (for example, set `Status` to `Escalated` and send an external notification).
5. Test with multiple sample tickets to confirm the full flow.

This gives you a practical split of responsibilities:

* **Agent chat** handles interactive support tasks, Q&A, and guided updates
* **Automations** handle repeatable, event-driven triage in the background

Together, these provide a reliable service desk workflow with both human-in-the-loop and fully automatic paths.

## Next steps

Once this foundation is working, use these guides to improve quality and safety:

* [Agent instructions guide](docs:agent-instructions-guide)
* [Agent tools and permissions](docs:agent-tools-and-permissions)
* [Agent embedding models](docs:agent-embedding-models)
* [Agent vector databases](docs:agent-vector-databases)
* [Agent testing guide](docs:agent-testing-guide)
* [Agent troubleshooting](docs:agent-troubleshooting)
