---
title: Plugins quickstart
excerpt: Using our internal database to hit the ground running
deprecated: false
hidden: false
metadata:
  title: ''
  description: ''
  robots: index
next:
  description: ''
---
Use the plugin quickstart to spin up a local Budibase development environment for plugin work.

## Start the dev environment

1. Create a workspace folder for your plugins.
2. Go to that folder.
3. Run:

```text
budi plugins --dev
```

4. Accept the default directory to watch if you are already inside the plugins folder.

The CLI prints the local Budibase URL and login credentials when the environment starts.

## Open the environment

1. Open the local Budibase URL shown in the CLI output.
2. Log in with the printed credentials.
3. Open the plugins area in the builder.

From there, you can work on any plugin stored in the watched directory.

## Next steps

Use the dedicated guides for the plugin type you want to build:

* [Custom component](https://docs.budibase.com/docs/custom-component)
* [Custom datasource](https://docs.budibase.com/docs/custom-datasource)
* [Custom automation step](https://docs.budibase.com/docs/custom-automations)
