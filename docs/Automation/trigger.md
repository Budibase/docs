---
title: Triggers
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
Each automation must have a single trigger step, which is essentially a watcher - waiting for a particular condition to be met, at which point the process will kick off.

[block:image]
{
  "images": [
    {
      "image": [
        "https://files.readme.io/702f457d4e0ed07ec040b08f5df8703f93e861a926090a71c6e2851c4978fa13-Screenshot_2025-07-16_at_11.56.26.png",
        "",
        ""
      ],
      "align": "center"
    }
  ]
}
[/block]


Currently, there are six ways to trigger an automation:

1. When a new record/row is created in a table
2. When a new record/row is deleted in a table
3. When a new record/row is updated in a table
4. An external trigger in the form of a JSON Webhook
5. When a certain action happens in an app
6. CRON trigger (trigger this automation at a specific time or day)

> 📘 Row creation/update/deletion triggers
> 
> When utilising row-based triggers, it should be noted that this only works for rows created through Budibase. If you are using an external data source, like say Postgres or MySQL, then rows created externally within the database will not trigger automations.

Triggers are internal to the Budibase system and therefore cannot easily be altered - if you have an idea for a good trigger, then [let us know](https://github.com/Budibase/budibase/discussions)! 

It is also possible to create custom triggers using the external Webhook - create an external application that will trigger on your required conditions, and target your Budibase Webhook!