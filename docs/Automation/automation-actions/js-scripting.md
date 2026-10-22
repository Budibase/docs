---
title: JS Scripting
excerpt: Adding a JavaScript code block step to your automations
deprecated: false
hidden: false
metadata:
  title: ''
  description: ''
  robots: index
next:
  description: ''
---
Use the JS Scripting action when you need to transform data inside an automation.

Common uses include:

* Comparing values from multiple datasources
* Aggregating rows
* Reshaping output before the next step

## Add the step

1. Add a trigger to your automation
2. Add the `JS Scripting` step
3. Open the step details and add any bindings you need

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

Keep scripts focused on data shaping.

Use a table, form, or app screen for logic that belongs elsewhere.

## Related guides

* [Bindings in automations](doc:data-in-automations)
* [Trigger automation](doc:trigger-automation)
* [Action steps](doc:automation-actions)
