---
title: Loop
excerpt: >-
  Looping is useful when you want to process multiple items or perform an action
  repeatedly, such as sending a message to every contact in your database.
deprecated: false
hidden: false
metadata:
  title: ''
  description: ''
  robots: index
next:
  description: ''
---
> 🚧 Iteration hard limit
>
> Users who self-host can configure this by changing the `AUTOMATION_MAX_ITERATIONS`environment variable.
>
> * For docker-compose users, update docker-compose.yaml > app-service > environment.
> * For Kubernetes users update values.yaml > `automationMaxIterations`

The Loop step allows you to repeat a series of automation actions across multiple records. For example, when an automation is triggered, send an email to my top 10 contacts, and then update their status field. 

## Settings

### Binding / Value

Binding / Value is the actual value that you want to loop over

### Max loop iterations

Max Iterations is a soft limit that is set by the user that defines how many times that automation will run (this is superseded by a hard limit that we or the self-hosting user sets)
` { "items": [ { "success": true } ], "iterations": 1, "success": false, "status": "MAX_ITERATIONS_REACHED" }`

### Failure conditions

Failure Condition stops the loop whenever the currentItem equals the value provided in the failure condition, then loop is then broken at that particular point and the results up to then provided
`{ "items": [ { "success": true }, { "success": true } ], "iterations": 2, "success": false, "status": "FAILURE_CONDITION_MET" }`

This leads to how we provide the bindings for each step. A block that is being looped gets provided the following binding (in addition to any previous blocks):

<Image border={false} src="https://files.readme.io/84ff591-162908840-da9118f6-96c5-4283-b83d-813fe0b6734b.png" title="162908840-da9118f6-96c5-4283-b83d-813fe0b6734b.png" />

Any blocks after the loop block get provided with the entire output, such as:

<Image border={false} src="https://files.readme.io/515965d-162909302-0c9d0005-3efc-4daf-a68b-d67969cdadc1.png" title="162909302-0c9d0005-3efc-4daf-a68b-d67969cdadc1.png" />
