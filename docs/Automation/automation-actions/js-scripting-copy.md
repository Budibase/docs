---
title: JS Scripting (COPY)
excerpt: Adding a JavaScript code block step to your automations
deprecated: false
hidden: true
metadata:
  title: ''
  description: ''
  robots: index
next:
  description: ''
---
While [Bindings](doc:data-in-automations) in automations support JavaScript, you can also add a step to execute a JavaScript code block.

Commonly this action is used to compare and aggregate data from multiple <Glossary>Datasource</Glossary>s.

## Add the step

1. Add a trigger to your automation.
2. Add the `JS Scripting` step.
3. Open the step details and use the bindings drawer if you need values from previous steps.

Make sure the script returns a value.

## Use bindings

Bindings can be read directly in your script.

Example:

```javascript
const rows = $("steps.Query rows.rows")
const today = new Date()
const todayMonth = today.getMonth()
const todayDate = today.getDate()

const birthdays = []

rows.forEach((row) => {
  const dob = new Date(row.date_of_birth)
  if (dob.getDate() === todayDate && dob.getMonth() === todayMonth) {
    const age = today.getFullYear() - dob.getFullYear()
    birthdays.push({
      firstName: row.first_name,
      age: age
    })
  }
})

return birthdays
```

## Good practice

Keep scripts focused on data shaping, not business logic that belongs in a table or app screen.

## Related guides

* [Bindings in automations](doc:data-in-automations)
* [Trigger automation](doc:trigger-automation)
* [Action steps](doc:automation-actions)
