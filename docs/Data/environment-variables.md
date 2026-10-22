---
title: Environment variables 🔒
excerpt: Configure values that change by environment
deprecated: false
hidden: false
metadata:
  title: ''
  description: ''
  robots: index
next:
  description: ''
---
Use environment variables when you need different values in development and production.

They are useful for secrets, datasource credentials, and environment-specific endpoints.

## Unlock environment variables

Environment variables are locked on the free tier.

Upgrade your plan to use them.

## Create environment variables

1. Open **Settings > Environment**
2. Add a new variable
3. Set the development value
4. Set the production value
5. Save the variable

Variable names cannot contain spaces. Use underscores instead.

Values are encrypted and cannot be retrieved after saving.

## Use environment variables in datasources

Use environment variables in datasource settings when the connection details change by environment.

After you select a variable, the field is locked to that value.

## Use environment variables in queries

Use environment variables in query bindings when the value should be shared across requests.

Example:

```handlebars
{{ env.env_variable }}
```

## Use environment variables in automations

Use environment variables in automations for reusable values such as webhook URLs or external service credentials.

## Notes

* Development and production values are separate
* Publishing pushes the development configuration to production
* Environment variables are available in datasources, queries, and automations where supported
