---
title: Environment variables 🔒
excerpt: Configuration for apps which switches per environment
deprecated: false
hidden: false
metadata:
  title: ''
  description: kba_5hgqq
  robots: index
next:
  description: ''
---
Environment variables let you reuse secrets and data source configuration across different <Glossary>Workspace</Glossary>s. They also let you use different values in development and production. Find them under Settings, then Environment.

This feature is most useful when you have separate development and production systems. For example, you might use one Postgres database for testing and another for live data. Environment variables let you switch connection details based on the app environment.

## Unlocking environment variables

If you are using the free tier, environment variables are locked.

Click [Upgrade](doc:usage) to unlock them, or click `View Plans` to open the [pricing page](https://www.budibase.com/pricing).

## Managing environment variables

In the Budibase portal, you can add, edit, and delete environment variables from the environment variable section.

Once the modal opens, set the variable name and the values for production and development. These values are encrypted with **AES-256** and cannot be retrieved after saving. By default, development uses the same value as production until you change it.

> 🚧 Environment variable naming
>
> Choose clear variable names. They cannot contain spaces, so we recommend using underscores.

Once the variables are created, they appear in the list. Edits and deletions apply immediately, so production apps are affected as soon as you save the change.

To edit or delete an existing environment variable, click `Edit`.

## Using environment variables in datasources

Once you have configured some environment variables, create or update an app to use them. In this example, configure a Postgres [datasource](doc:data-sources). The key icon at the end of each field opens the variable picker.

Click the icon to open the environment variable menu. You can select an existing variable or create a new one.

Once configured, the input fields are disabled and show the selected variable.

Environment variables may look like bindings, but they are only available in specific locations. They cannot be used everywhere bindings can. After saving the datasource, it uses the selected variable.

In the builder, your app uses the development values. After you publish, it uses the production values. The two environments are independent.

## Using environment variables in queries

Environment variables can also be used in [queries](https://docs.budibase.com/docs/data-sources#custom-queries). Open the [binding drawer](doc:bindings) to see the environment section.

Expand the environment section to see the variables available to the query. Unlike datasource configuration, these can be used as normal bindings. In the example below, a [REST query](doc:rest) header uses an environment variable.

You can also use them in an [SQL query](https://docs.budibase.com/docs/data-sources#custom-queries) with the same format as the binding drawer, for example `{{ env.env_variable }}`.

## Using environment variables in automations

Environment variables can also be accessed in an [automation](doc:automation-steps). This is useful when connecting to external services or sending notifications such as Slack or Discord. In the example below, a Discord step uses an environment variable for the webhook URL. This keeps the setup reusable and secure, and lets you use different URLs for testing and production.
