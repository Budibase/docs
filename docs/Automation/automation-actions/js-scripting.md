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
While [Bindings](doc:data-in-automations) in automations support JavaScript, you can also add a step to execute a JavaScript code block.

Commonly this action is used to compare and aggregate data from multiple <<glossary:Datasource>>s.

<br />

## Adding a JavaScript code block

1. After adding an automation [Trigger](doc:trigger), click the `+` icon and select `JS Scripting`. 

   ![](https://files.readme.io/cf1df567778632c1cd4a4bf0d022c7f01ebc2272d163a763fb4804c136284c5b-image.png)
2. Click on the automation step to see it's details in on the right of the builder. You can click on the lightning bolt to open the bindings drawer.

   ![](https://files.readme.io/0ecb8dc9f8555f2f5c5096c5f46023d02c44f820f892fecca6f5bdc2d4e84ae9-image.png)

> 📘 
> 
> Make sure to **return** a value at the end of your script!

3. Available bindings can be seen on the far right of your modal. These can be clicked to references within your JS scripting area.

Be sure to check the debugging tools on offer when building your automations.

[block:image]
{
  "images": [
    {
      "image": [
        "https://files.readme.io/c0e1579c83575ba1971719fbf4847016fc7068000042885f15b62b36bd8a62aa-image.png",
        null,
        ""
      ],
      "align": "center"
    }
  ]
}
[/block]


<br />

## Tutorial: Using Cron Triggers and JS Steps

This tutorial assumes that you have a table called People in the internal database, populated with first_name, last_name, date_of_birth. 

1. Create an automation that uses a Cron Trigger, and set it to run at 8AM each morning

   ![](https://files.readme.io/e5e397071ff1c49bba6b047fb6fc5a4352eaf3bfbd1e718a2960de69f3671777-image.png)
2. Add a Query Rows step set to fetch everything from your People table with no filters

   ![](https://files.readme.io/cc8ae419a1839caad1e103d3b22c7fff67aa916d601c224ef3dbc6ec90832bfa-image.png)
3. Next, add a JS Scripting Block. In it, you can copy & paste the below code. This code takes the result of the Query Rows step, and makes use of JavaScript's `Date` in order to check if any values for `date_of_birth` are today. With it, we then return an array of  people who's birthday is today.

   ![](https://files.readme.io/d3695b3553327050d4744297c3da90f51dbeba0ef20b35ab3f2f09e8c626cc44-image.png)

```
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

4. After your JS Scripting block, split into two branches. The run-conditions are equated from left-to-right, meaning the first truthy-comparison will run.

   The first branch checks if the length of the Birthdays array (The output from the JS Scripting Block) is not 0, meaning there are birthdays today. The following Slack Message step loops over the Birthdays Array to send a new message for each object in the Birthdays array wishing them a happy birthday

   ![](https://files.readme.io/60cfa2ba808fd8b687f1982e2e74c2312b0b842f4cb0cf8fb18a910f7f94dfd0-image.png)
5. The other branch has no condition set (see "Add Condition"), which means it will always run if no branches to its left have run. It's Slack Message step simply wishes everyone a good morning.