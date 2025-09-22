---
title: Using JavaScript
excerpt: >-
  You can use JavaScript within bindings or JS Scripting Actions in Automations.
  This guide is here to help you understand how this works.
deprecated: false
hidden: false
metadata:
  title: ''
  description: ''
  robots: index
next:
  description: ''
  pages:
    - type: basic
      slug: transformers
      title: Transformers
---
Budibase is a low-code tool, which means, you can use code to improve your applications! But it also means in certain situations writing code is necessary. Budibase supports the use of JavaScript in several places to customize your applications.

> 🚧 Limitations
> 
> JavaScript within Budibase is server-side synchronous only. Async interactions (such as API calls, or `await`) aren't supported. There also is no DOM-interaction as the code is executed server-side.

## Using JavaScript code in Bindings

[Bindings](doc:bindings) are extremely powerful tools to customize anything that's displayed in an application without the need to change how it is stored inside the database. But even more powerful is using JavaScript with bindings.

JavaScript inside bindings is executed server-side and synchronous. This means there's no async support, nor is there DOM access. Third-party libraries also cannot be added.

To use JavaScript anywhere in [Bindings](doc:bindings), you need to press the Lightning icon on any field that supports it, and then click the "JavaScript" tab.

![](https://files.readme.io/7e15b38-javascript-tab.png "javascript-tab.png")

In essence, the JavaScript box is a synchronous function. It expects a value to be returned and can use values from bindings, which are all listed on the left.

In this situation we've got access to a [Data Provider](doc:data-provider) that provides us with a list of check-ins from the <a href="https://budibase.com/logistics/templates/remote-fleet-management-system/" target="_blank">Remote Fleet Management System Template</a>.

Because we've got a list of items, we can do calculations with them. In our case, we've got a column that lists how much was spent on fuel for each check-in. Perhaps we want to sum up all the fuel values from the results.

```javascript
const checkins = $("Data Provider.Rows");
let totalFuelCost = 0;

for (let i in checkins) {
	totalFuelCost += checkins[i].fuel_price;
}

return "Total Fuel Cost: $ " + totalFuelCost;
```

We've used the binding `Data Provider.Rows` as that is the default binding that returns all the rows from the [Data Provider](doc:data-provider).



> 👍 Autocomplete
> 
> When working with JavaScript bindings, typing the **$** key will bring up a suggestion window, which will filter as you type. Use the up/down arrow keys to select a binding, and press **Tab** to complete.
> 
> [block:image]{"images":[{"image":["https://files.readme.io/4591935-Screenshot_2024-01-17_at_08.29.44.png","",""],"align":"center"}]}[/block]

After entering the code, you can click "Save" on the top-right, and the binding should work automatically.

![](https://files.readme.io/feadaf6-binding-result.png "binding-result.png")

Now of course this is just a number that's being used, but you can do anything JavaScript related here.

### Using a Date Column

Whenever you use a `Date` Column as a data type you will actually be provided with an ISO string, which is compatible with `new Date(Value)` by default. 

You should also always return a value that's parseable by the JavaScript `Date` function. 

```javascript
const date = new Date($("Value"));
date.setDate(date.getDate() + 3);
return date;
```

As an example, the code above adds 3 days to the provided Date and then returns the Date Object.

## Using JavaScript in Automation

You can learn about using data in automations in this [Data in Automations](doc:data-in-automations) guide.

## Using JavaScript with Transformers

When dealing with external <<glossary:Data Sources>> you can create custom queries. But with queries comes the ability to transform the data in a way your app can consume it easier. For example, when querying a [REST API](doc:rest), you could transform the data using JavaScript to a format that only returns what you want to return.

There's an [In Depth Guide](doc:transformers) for you to dive into how to use transformers with JavaScript.