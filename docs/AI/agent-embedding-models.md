---
title: Agent embedding models
deprecated: false
hidden: true
metadata:
  robots: index
---
Embedding models convert text into vectors so your Agent can retrieve relevant knowledge chunks during responses.

In Budibase, embedding model configuration is part of the AI Configs area and is used with Agent Knowledge settings.

## Configure an embedding model

1. Open Workspace **Settings**
2. Go to **AI Configs**
3. Click **Embeddings** section
4. Scroll to **Embeddings model**
5. Click **Add configuration**
6. Provide the required provider credentials and model details
7. Save and verify the configuration appears in the list

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
