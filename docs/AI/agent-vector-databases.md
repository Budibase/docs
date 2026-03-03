---
title: Agent vector databases
deprecated: false
hidden: true
metadata:
  robots: index
---
Vector databases store embeddings and enable semantic retrieval for Agent knowledge.

In Budibase, vector databases are configured in AI Configs and then assigned to each Agent in the Knowledge tab.

## Supported provider

Currently we only support pgvector as a provider.

## Configure a vector database

1. Open Workspace **Settings**
2. Go to **AI Configs**
3. Click on the **Embeddings tab**
3. In **Vector databases**, click **Add database**
4. Enter connection settings:
   * Name
   * Provider (defaulted to pgvector)
   * Host
   * Port
   * Database
   * User
   * Password
5. Save and confirm the database appears in the list

## Attach a vector database to an Agent

1. Open your Agent
2. Go to the **Knowledge** tab
3. Select a **Vector database**
4. Select an **Embedding model**
5. Save

After both are selected, you can tune:

* **Minimum similarity**
* **Chunks to retrieve**

You can then add files/knowledge content in the same area to support retrieval.

## Related guides

* [Agent embedding models](docs:agent-embedding-models)
* [Agent tools and permissions](docs:agent-tools-and-permissions)
* [Agent troubleshooting](docs:agent-troubleshooting)
