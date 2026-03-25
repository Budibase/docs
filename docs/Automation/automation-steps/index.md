---
title: Introduction to automations
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
Budibase's Automations give you the ability to build your backend logic into your Budibase workspaces and handle processes like sending emails when data is updated or a condition is met.  Automations can also be used for integrating with external platforms and services, for example, if you already have web services that are deeply integrated into your processes then automations can be used to receive or send data automatically between the two systems. Multiple apps can share the same automations, provided they are within the same workspace. 

Once configured, your automation will run as part of your workspace in the Budibase hosting platform making this a backend process that will run at any time when triggered. 

> 🚧 Publish app
>
> Automations will only run in published apps.\
> You can however [Test](doc:activating-and-testing) your automations before publishing.

## Getting started

To get started with Automations, open (or create) a Workspace, and click into the Automations tab in the builder, from here you will see the button to "New automation", this will ask you for a name for your automation - you're now ready to get started.

The next sections will cover the two major components of an automation, [Triggers](doc:trigger) and [Actions](doc:actions) . It will also cover [Contextual bindings](doc:contextual-bindings) , allowing chaining of the various automation steps together.

Automations are unique to each Workspace you have, but can be triggered by any app within a workspace.

Automations can be set live or stopped from the automation dashboard. Stopping an automation will impact every implementation of that automation, in every app that it is used. Automation statuses are shown as `Live`, `Stopped`, or `Not Deployed`.

| Status | Meaning |
| :----- | :------ |
| `Live` | The automation is currently deployed and can run when triggered |
| `Stopped` | The automation was previously deployed but is currently stopped |
| `Not Deployed` | The automation has not yet been deployed live |
