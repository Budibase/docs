---
title: Agent building 101
deprecated: false
hidden: false
metadata:
  description: kba_5v2bm
  robots: index
---
In Budibase, Agents let AI interact with data, tools, and automations in your Workspace.

In this guide, you will build a simple AI Service Desk Agent that can:

* Answer questions about tickets
* Categorise and summarise new tickets
* Update ticket statuses
* Escalate urgent issues automatically

Along the way, you will learn how to:

* Configure an Agent’s instructions
* Connect Workspace data as tools
* Define structured outputs
* Trigger automations from Agent actions
* Test and iterate safely

## Before you start

Make sure you have:

* A model provider configured in [Agents config](doc:agents-config)
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

In Budibase, Agents can interact with any tables, API calls, or automations within your Workspace, as long as they are explicitly given access.

Before creating an Agent, define the data it will work with and the actions it should be allowed to perform.

See [Introduction to Data](https://docs.budibase.com/docs/data) for more detail on how data works in Budibase.

#### Our tickets table

For this guide, use a Budibase DB table called Tickets.

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

To create your first Agent, make sure you have selected a provider and configured a model first. See [Agents config](doc:agents-config).

1. Click on the **Agents** link on the left side of the screen
2. Click the **+ New Agent** button at the top right of your screen
3. Provide a name. We're going with **Service Desk Agent**
4. This will redirect you to the Agent configuration screen.

### Configuring instructions

Agents perform tasks through **Operations**. An Agent can have one or many operations, each with its own set of instructions and tools. To get started, we need to create our first operation:

1. In the **Operations** section of the Agent configuration, click **Add operation**.
2. Give your operation a name (e.g., "Support Triage") and click **Create**.
3. You will be navigated to the operation detail page.

By default, Budibase provides a structured instruction template to help you define your operation clearly. More information on this can be found [here](doc:agent-instructions-guide#recommended-template).

Use the following instructions for this guide:

```markdown instructions
**Operation role**
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

After adding the instructions, run a test and confirm that everything works.

### Adding tools

Tools allow an Agent to retrieve and modify real data inside your Workspace. You must explicitly enable each tool an operation needs.

For this example, we’ll give our Agent access to three tools from the Tickets table:

* **Budibase: Tickets.List Rows** - Retrieves multiple tickets
* **Budibase: Tickets.Get Row** - Retrieves a specific ticket
* **Budibase: Tickets.Update Row** - Updates fields on an existing ticket

To add these tools:
1. In the instructions editor, type `{{` to open the autocomplete menu.
2. Select **Add tool**.
3. Search for and select the required tool (e.g., `Tickets.List Rows`).
4. Configure the **Execution principal** (use **Requester** for this guide) and click **Add tool**.

Together, these allow the Agent to:

* Look up tickets when answering questions
* Retrieve specific ticket details
* Update ticket status, priority, or resolution notes when required

> As a best practice, only enable the minimum set of tools required. Limiting tool access helps keep behaviour predictable and safe.

### Adding Knowledge

In addition to tools, Agents can use **Knowledge Sources** to answer questions based on external documents or sites. This is commonly referred to as RAG (Retrieval-Augmented Generation).

> 💡 NOTE
>
> Knowledge features require the `GEMINI_API_KEY` to be configured in your Budibase environment. If this key is missing, knowledge actions will be disabled in the builder.

#### Connecting SharePoint Knowledge

You can quickly add SharePoint sites as a knowledge source without manually configuring a REST connector:

1. In the operation detail page, go to the **Knowledge** tab in the settings rail on the right.
2. Click **Add source** and select **SharePoint**.
3. If you don't have an existing connection, enter your **Directory (tenant) ID**, **Application (client) ID**, and **Client secret**.
4. Budibase will automatically create the connection and allow you to select the SharePoint sites you wish to sync.

For more complex configurations, you can use the **Advanced setup** option within the connection modal to go directly to the SharePoint REST connector settings.

#### Updating our instructions

Once these tools and knowledge sources are enabled, we need to guide the Agent on when to use them. 

Use the following updated instruction prompt:

```markdown instructions
**Operation role**
You are a Service Desk AI Agent responsible for managing support tickets.

**Inputs**
You receive ticket data, including Title, Description, Status, and Priority.

**Available tools**
{{ budibase.Tickets.list_rows }}
{{ budibase.Tickets.get_row }}
{{ budibase.Tickets.update_row }}

**Actions**
- Categorise new tickets.
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

### Managing multiple operations

As your agent grows more complex, you can define multiple **Operations**, each with its own dedicated detail page containing its own instructions, tools, and knowledge. 

When an agent has multiple live operations, Budibase uses an internal router to detect the intent of the user's request. It will:
- **Select a specific operation** if the request clearly matches one operation's focus.
- **Summarize capabilities** if the user asks broad questions like "What can you help me with?" or requests an overview of the agent's tasks.
- **Proceed without an operation** if the request is unrelated to any defined capability.

You do not need to manually configure this routing; it is handled automatically based on the names and instructions you provide for each operation.

### Testing the agent

Now that your Agent has instructions and tools, you can test whether it behaves safely and predictably.

Start with a few representative prompts:

* `What tickets are currently open and high priority?`
* `Summarise ticket "Printer access broken for Finance" and suggest category + priority.`
* `Update ticket "VPN issue for remote user" to In Progress and add a short resolution note.`

For each test, check:

* **Tool usage**: The Agent should use list/get tools to retrieve live data, and only use update when explicitly asked.
* **Output format**: Classification responses should follow the JSON schema we defined.
* **Data acccuracy**: Values returned should match the row data in your `Tickets` table.
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

* **Messaging channels** handle interactive support tasks, Q&A, and guided updates
* **Automations** handle repeatable, event-driven triage in the background

Together, these provide a reliable service desk workflow with both human-in-the-loop and fully automatic paths.

## Next steps

Once this foundation is working, use these guides to improve quality and safety:

* [Agent instructions guide](doc:agent-instructions-guide)
* [Agent tools and permissions](doc:agent-tools-and-permissions)
* [Agent embedding models](doc:agent-embedding-models)
* [Agent vector databases](doc:agent-vector-databases)
* [Agent testing guide](doc:agent-testing-guide)
* [Agent troubleshooting](doc:agent-troubleshooting)