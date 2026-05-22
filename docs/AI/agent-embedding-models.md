---
title: Agent embedding models
deprecated: false
hidden: false
metadata:
  description: kba_5h7b6
  robots: index
---
Embedding models convert text into vectors so your Agent can retrieve relevant knowledge chunks during responses.

In Budibase, embedding model configuration is managed in **Workspace Settings > Connections > Knowledge bases** and used with Agent Knowledge settings.

## Configure an embedding model

1. Open Workspace **Settings**
2. Go to **Connections > Knowledge bases**
3. Scroll to **Embedding models**
4. Click **+ Embedding model**
5. Provide the required provider credentials and model details
6. Save and verify the configuration appears in the list

## Attach an embedding model to an Agent

1. Open your Agent
2. Go to the **Knowledge** tab
3. Select an **Embedding model**
4. Save the Agent

When both embedding model and vector database are configured, additional retrieval settings are available:

* **Minimum similarity**
* **Chunks to retrieve**

## Practical guidance

* Start with default retrieval settings, and tune only after testing
* Once you choose an embedding model, use it consistently for all documents and queries in that knowledge base
* Re-test retrieval quality whenever you change the model or provider configuration

## Related guides

* [Agent vector databases](doc:agent-vector-databases)
* [Agent testing guide](doc:agent-testing-guide)
* [Agent troubleshooting](doc:agent-troubleshooting)
* [Connections](doc:connections)