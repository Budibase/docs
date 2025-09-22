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

1. After adding an automation [Trigger](doc:trigger), click the `+` icon and select `JS Scripting`. Click `Save`.

![](https://files.readme.io/a398627-Screenshot_2023-03-15_at_09.55.41.png)

2. Click the `Edit Code` button to open the code editor modal.

![](https://files.readme.io/aa6ba6c-Screenshot_2023-03-15_at_10.25.59.png)

> 📘 
> 
> Make sure to **return** a value at the end of your script!

3. Expand the _BINDINGS_ section to see the available bindings that can be used in your script. The **path** indicates how to reference these variables.

![](https://files.readme.io/d90459f-Screenshot_2023-03-15_at_10.32.07.png)

[block:image]
{
  "images": [
    {
      "image": [
        "https://files.readme.io/80053c4-Screenshot_2023-03-15_at_10.33.25.png",
        null,
        "Example output"
      ],
      "align": "center",
      "caption": "Example output"
    }
  ]
}
[/block]

<br />

## Tutorial: Linking an API response to table rows

In this tutorial we will look at using a JS Scripting block to link people from an API response to people with the same name in a Budibase table.

1. Add a [REST Query](doc:rest). This example will pull back the [Top 100 Birders](https://documenter.getpostman.com/view/664302/S1ENwy59#2d8d3f94-c4b0-42bd-9c8e-71edfa6347ba) for a given date. Be sure to `Save` the query after `Send`. 

![](https://files.readme.io/59f5809-Screenshot_2023-03-15_at_11.20.42.png)

2. We will also add a [Budibase DB](doc:budibasedb) table for the members of our mock bird club, which will include some additional information not provided by the API, such as _Twitter Username_.

![](https://files.readme.io/505aa94-Screenshot_2023-03-15_at_11.23.58.png)

3. In the **Automate** tab, add an automation. This automation will fetch data from both sources and send a summary [Email](doc:email). I will use an [App action](doc:app-action) trigger, but any other trigger could be used.

[block:image]
{
  "images": [
    {
      "image": [
        "https://files.readme.io/929b26e-Screenshot_2023-03-15_at_11.31.35.png",
        null,
        "Fetch the Top 100 birders from the API, and then all our club members"
      ],
      "align": "center",
      "caption": "Fetch the Top 100 birders from the API, and then all our club members"
    }
  ]
}
[/block]

4. Add a `JS Scripting` block, and `Edit Code`. Enter the following:

```javascript JavaScript
/*
* Compare and combine the local club members that match, by name, with the Top 100 birders from the API.
*/
const top100 = steps[1].response;
const clubMembers = steps[2].rows;

let topClubMembers = top100.filter(row => clubMembers.map(tableRow => tableRow.Name).includes(row.userDisplayName));

return topClubMembers.map(member => ({
	...member,
	...clubMembers.find(tableRow => tableRow.Name === member.userDisplayName)
}));
```



5. Finally add the `Send Email` step. Fill in the details and format the _HTML Contents_ as desired.

![](https://files.readme.io/3c2e366-Screenshot_2023-03-15_at_12.51.18.png)

```javascript HTML Contents
let listItems = ""
for (let member of $("steps.3.value")) {
	listItems += `<li>${member.Name} <b>@${member["Twitter Username"]}</b> 

<br />Spotted ${member.numSpecies} species!</li><br/>`
}

return `Congrats to our top bird watchers - give them a shout out on Twitter!

<p><ol>${listItems}</ol></p>`
```



6. Click `Finish and test automation` to see the result!

![](https://files.readme.io/3cc556b-Screenshot_2023-03-15_at_12.50.23.png)