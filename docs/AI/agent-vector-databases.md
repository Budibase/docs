---
title: Agent vector databases
deprecated: false
hidden: false
metadata:
  description: kba_5h75u
  robots: index
---
Vector databases store embeddings and enable semantic retrieval for Agent knowledge.

In Budibase, vector databases are configured in **Workspace Settings > Connections > Knowledge bases** and then assigned to each Agent in the Knowledge tab.

## Supported provider

Currently we only support pgvector as a provider.

## Configure a vector database

1. Open **Settings**
2. Go to **Connections > Knowledge bases**
3. In **Vector databases**, click **+ Vector database**
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

* [Agent embedding models](doc:agent-embedding-models)
* [Agent tools and permissions](doc:agent-tools-and-permissions)
* [Agent troubleshooting](doc:agent-troubleshooting)
* [Connections](doc:connections)