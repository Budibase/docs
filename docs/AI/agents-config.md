---
title: Agents Config
deprecated: false
hidden: true
metadata:
  robots: index
---
Budibase supports a range of models, which can be found in Settings under AI Config. These configurations will allow Budibase to connect via API to an existing AI provider.

Model Providers:

|             |                                                  |
| :---------- | :----------------------------------------------- |
| Budibase AI | Budibase Managed                                 |
| Anthropic   | Connect to Claude models directly from Anthropic |
| Google      | Connect to Gemini models directly from Google    |
| Mistral     | Connect to Mistral models directly from Mistral  |
| OpenAI      | Connect to ChatGPT models directly from OpenAI   |
| OpenRouter  | Connect to 100s of text, image, embedding models |
| Groq        | Connect to 100s of text, image, embedding models |

Alternatively, you can connect to a Custom Provider using the "Connect to a custom provider" button. You may also need specific values from your chosen provider, such as API Base, or Access Key & Secret Key pairings.

Once connected, your AI Provider will be visible to select when creating an Agent. Invalid setups will likely throw an error when creating; you should check the values provided in this case to verify their validity.

<br />

<br />
