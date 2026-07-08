---
title: Agents config
deprecated: false
hidden: false
metadata:
  description: kba_5h7lu
  robots: index
---
This page covers the required setup before using Budibase Agents in messaging channels.

Before building an Agent or deploying to channels, you need at least one configured model in **Workspace Settings > Connections > AI models**.

For a broader AI setup walkthrough, see [Quickstart: Budibase AI](doc:quickstart-budibase-ai).

## Before you start

Make sure you have:

* Access to Workspace **Settings**
* Credentials for your chosen model provider
* At least one model you can run chat/agents with

## Configure your first model in AI models

1. Open your Workspace **Settings**
2. Go to **Connections > AI models**
3. Click **Connect**
4. Choose a provider and fill out the required credentials
5. Select or type a model
6. Add a display name and save

once saved, the model becomes available in Agent model selection.

## Supported providers

Budibase supports multiple model providers:

| Provider    | Summary                                       |
| :---------- | :-------------------------------------------- |
| Budibase AI | Budibase-managed provider                     |
| Anthropic   | Connect directly to Claude models              |
| Google      | Connect directly to Gemini models              |
| Mistral     | Connect directly to Mistral models             |
| OpenAI      | Connect directly to OpenAI models              |
| OpenRouter  | Connect to a broad catalog of hosted model APIs |
| Groq        | Connect to high-speed hosted model APIs         |

## Custom provider setup

If your provider is not listed, use **Connect to a custom provider**.

Depending on the provider, you may need values such as:

* API base URL
* API key
* Access key and secret key
* Default model name

Use the exact values expected by your provider. Incorrect values can allow setup to save but still fail during runtime.

## Validate your provider setup

Before attaching a model to an Agent:

1. Confirm the provider shows as enabled in **Connections > AI models**
2. Confirm your target model name is available and correctly spelled
3. Run a simple test from an Agent with a short prompt
4. Save the successful configuration as your default team setup

## Selecting models in agents

After configuring a model in **AI models**, attach it to each agent:

1. Open **Agents**
2. Create a new Agent or open an existing one
3. Click **Connect AI Model**
4. Select the configured provider and model

## Ready for channel deployment checklist

Before enabling a channel, confirm:

* Your agent has a connected AI model
* The selected model can run chat/completion prompts
* The agent is saved and can answer a simple test prompt

Next, configure deployment in [Messaging channels](doc:messaging-channels).

## Troubleshooting

If model connection or Agent tests fail:

* Re-check API credentials and model ID
* Verify any provider-specific base URL value
* Confirm outbound internet access is allowed from your environment
* Re-run a simple prompt test after saving changes

If you are self-hosting and using Budibase AI, ensure the `BBAI_LITELLM_KEY` environment variable is correctly configured and available to every service that runs agents, including the automation worker. For more details on network requirements, see [Self-hosted AI features](doc:self-hosted-ai-features).

## Related guides

* [Messaging channels](doc:messaging-channels)
* [Agent building 101](doc:agent-building-101)
* [Agent instructions guide](doc:agent-instructions-guide)
* [Agent testing guide](doc:agent-testing-guide)
* [Agent troubleshooting](doc:agent-troubleshooting)