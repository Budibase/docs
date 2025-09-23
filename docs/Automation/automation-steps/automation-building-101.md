---
title: Automation building 101
excerpt: ''
deprecated: false
hidden: false
metadata:
  title: ''
  description: ''
  robots: index
next:
  description: ''
---
Budibase Automations are defined workflows that can be triggered by user actions, system events, database operations, or incoming HTTP requests.

When triggered, we can use Automations to apply logic, process data, and take actions within Budibase or across integrated platforms.

Automations can be used within end-user applications or as standalone solutions for systematically carrying out tasks using connected data.

In this guide, we’ll be outlining how to create a simple automation rule for generating and sending a weekly sales report email.

Along the way, we’ll outline the basics of working with triggers and actions, as well as seeing different examples of how we can utilize data within Budibase Automations. You can take a look at our [Introduction to Automations](https://docs.budibase.com/docs/automation-steps) docs to start learning about triggers, actions, and data in more depth.

To do this, we’ll:

* Create a CRON trigger to run our automation rule at a specified time each week.
* Send a REST request to retrieve the sales data for the relevant time period.
* Call an LLM to extract and format our required data.
* Send the output of this to the required colleagues using an email action.

Let’s get started.

## Creating a new automation rule and defining a trigger

We’re starting in the `Automations` section of our Budibase Workspace. Here, we’re prompted to create our first Automation.

<Image align="center" src="https://files.readme.io/e044adbfc9c3f121caa67246c2b7bd49ca67a87555f5fce2478ab3c0de3d98f4-Automations_101_1.png" />

When we choose this option, we’re prompted to give our new rule a name and choose a trigger. We’re calling it `Sales Report Generator` and selecting `CRON/Schedule` from the list of available triggers.

<Image align="center" src="https://files.readme.io/b2f8d4147f0cb4401a62ccf42988d003ed42cbbb3a3ea063e9544a12628223bd-Screenshot_2025-08-15_at_14.24.12.png" />

The `CRON/Schedule` trigger accepts a single argument called `CRON expression`, as well as giving us the option to use a preset. 

We want to configure our Automation to run every Monday at 9 AM, so we’re using `0 9 * * 1`.

<Image align="center" src="https://files.readme.io/587c11109678c76fc2e56f0177da48d4b78db63f7d738de1fbf008cc587102ca-Automations_101_3.png" />

## Populating and sending a REST request

Next, we want to add an automation action to send a predefined REST request. As you can see below, we’ve already set this up in the Data section of our Workspace.

This will send a `POST` request with two bindings called `startDate` and `endDate`.

We’ll use these to dynamically add values to the request body, so that the right time period is selected when we send our request from the Automation section.

<Image align="center" src="https://files.readme.io/fc7a37b074915cec1a324063fa669a21c0693d23c9741c18481f8cb56491ec59-Screenshot_2025-08-15_at_14.25.40.png" />

To learn more, check out our documentation page on working with [REST data sources](https://docs.budibase.com/docs/rest).

Back in the Automation section, we’ll add an `API Request` action and choose our `Sales Report` endpoint.

<Image align="center" src="https://files.readme.io/f9e374fa7d1dc6e3453cee9da895a5e60fc8a72d3aefaa8e0b28026be248ea16-Screenshot_2025-08-15_at_14.26.44.png" />

In Budibase, individual automation actions are exposed to all data outputs from previous steps. We can use this data as bindable values, with either Handlebars or JavaScript expressions.

We’ll hit the lightning bolt icon to assign values to our two bindings.

<Image align="center" src="https://files.readme.io/571e97544b89e19be973b250de0abb1bfa7d68eda7327a36104687972c01ff1d-Automations_101_6.png" />

For our `endDate`, we’ll use the following JavaScript to return the current date and time.

```javascript
var date = new Date()
return date
```

<Image align="center" src="https://files.readme.io/39e4deb37828498347d2e152b513a8ac96b01c6199f07e88fa2fad59c3eff406-Automations_101_7.png" />

For `startDate`, we’ll use a similar expression, returning seven days before the current date.

```javascript
var date = new Date();
date.setDate(date.getDate() - 7);
return date;
```

When we run a test, we can see that our API request returns an array of objects containing the sales figures for individual locations, along with their respective targets.

<Image align="center" src="https://files.readme.io/ecf5ce5d3815abc12bc7d5203235f901e314da10f3bfd5242b034665dfde64b8-Automations_101_9.png" />

## Calling an LLM for data processing

Now that we have our raw data, we’re going to use an LLM prompt to extract and format key details, ready to include in an email automation.

We’re going to use Budibase AI to power this, although we could also connect to our own OpenAI or Azure AI model.

Learn more about [Budibase AI](https://docs.budibase.com/docs/quickstart-budibase-ai). 

We’ll start by adding an `LLM Prompt` automation step.

<Image align="center" src="https://files.readme.io/3cc866b046c83f3ddf6fced3f593d399be66948357545db8843c1420c829f19a-Automations_101_10.png" />

This accepts a single argument, called `Prompt`.

<Image align="center" src="https://files.readme.io/5960d6abefb76a50dfed40e6cdf97205e575f02784108590ff4a340f738202b5-Automations_101_11.png" />

Within the Bindings menu, we can see the structure of the output from our previous step.

<Image align="center" src="https://files.readme.io/448c9b4dd94c4704a883b75cd9a32710a7cdb87224fb6ec86b1bf4badbff9ab6-Screenshot_2025-08-15_at_14.30.56.png" />

The first part of our prompt will pass the relevant parts of this to our LLM, using the following instruction.

```
{{ steps.API Request.response.0.locations }} is a JSON object representing our weekly sales.
```

<Image align="center" src="https://files.readme.io/9e47eaad26c13fa0c682c5be34cd7578b39adbde978f4da0fe147d48bf202c66-Automations_101_13.png" />

We’ll then outline the specific information that we want to include in our final report, as well as how we need it to be formatted.

So, our final prompt will be:

```
{{ steps.API Request.response.0.locations }} is a JSON object representing our weekly sales.

Return a summary of this, including:
- Overall transaction volume,
- Overall transaction value,
- Overall transaction value as percentage under/over overall target,
- Total sales and percentage over/under target for each location.

Format as markdown, ready to include in an email automation in as concise a manner as possible.
```

<br />

<Image align="center" src="https://files.readme.io/a59d3bb318aa7a5a9a8cd487451e8a5f523df7e996dae4474a369d4e909cfd35-Automations_101_14.png" />

We can then test our Automation again to verify that we’re happy with the information our `LLM Prompt` step outputs.

<Image align="center" src="https://files.readme.io/8893ef98f899e8ec877972c9fe6702dd096719b771542fd0cbd1b7ea0e092599-Automations_101_15.png" />

## Setting up our email action

Lastly, we want to use this output to populate the body of an email, which we’ll send to our head office team.

We’ll start by adding a `Send Email (SMTP)` action. Check out our documentation on [SMTP setup](https://docs.budibase.com/docs/email) to learn more about this.

<Image align="center" src="https://files.readme.io/8a9baf4ba9846a690f72e4b437a64d0909d6a7331edee681efa261b667d67d51-Automations_101_16.png" />

Within this, we can set key fields including the `Send To` and `Send From` addresses, the `Email Subject`, and the `Message`. First, we’ll add static values for our `Send To`, `Send From`, and `Subject` fields.

<Image align="center" src="https://files.readme.io/9fa61c3d6201f83b6224e6e6ff3f0dd15f43a83d0302cd7adbda5cbf8f4fb3f4-Automations_101_18.png" />

We’ll then bind our `Message` to \`\{\{ steps.LLM Prompt.response }}

<br />

<Image align="center" src="https://files.readme.io/faa9a11576f655cb21be2a03042849e3d44f80397fe358b262367783eaad03f6-Automations_101_20.png" />

<br />

\`.

Now, when we check our emails, we can see that the data we need has been extracted and formatted correctly.

<Image align="center" src="https://files.readme.io/b9af5587210577bba3bc1b4a80dbd2223ac9946fff0f30938951a763aba45126-Automations_101_19.png" />
