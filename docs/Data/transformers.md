---
title: Transformers
excerpt: Using Budibase query transformers
deprecated: false
hidden: false
metadata:
  title: ''
  description: ''
  robots: index
next:
  description: ''
---
Use data transformers to shape query results before they reach your app. They are useful when you need to extract properties from nested JSON or enrich data with additional values.

> 📘 This section requires JavaScript knowledge
>
> We recommend the Modern [JavaScript Tutorial](https://javascript.info/) for the basics. For transformers, knowledge of [Arrays](https://javascript.info/array), [Array Methods](https://javascript.info/array-methods), and [Objects](https://javascript.info/keys-values-entries) is especially useful.

To create a transformer, first create an external data source and a query. See [External Data Sources](doc:data-sources) for the setup steps.

## Accessing bindings

You can access query bindings through the `params` object in the transformer context. For example, if you add a binding called `lastName`, access it as `params.lastName`.

## Tutorial

In the example below, we transform data from the [Open Brewery Database](https://www.openbrewerydb.org/) to build an app that shows the number of breweries by US state.

When you create a query, the transformer code editor appears in its own section.

> 📘
>
> Two properties are available by default in the transformer: `data`, which contains the query results, and `params`, which contains the bindings passed to the query.

The transformer initially returns the data exactly as it is retrieved from the data source. It is best to get the query working first, then adjust the transformer once you can see the returned schema. In this example so far:

1. Set up a REST data source with the URL set to:

```
https://api.openbrewerydb.org
```

2. Create a query and set the path to *breweries*
3. Ran the query to see the schema

The schema for this query should match the data returned by the API.

Use this information to write the transformer function. Initially, it should:

1. Work through the array of breweries that are returned by the API, in the format shown above
2. Extract the state and add it to a total count of states that have been seen
3. Return a new structure that contains only the state name and the count of breweries within

You can write the transformer to do this with a loop that counts the breweries per state and returns a `state` and `count` property.

Here, we take the data, loop through it, fill an object with counts for each state, and map the totals to the output structure. The output contains a `state` and `count` property. This shows how much you can change the shape of the returned data with JavaScript.

For the final part, add data that is not part of the query by building a URL for each state's flag. In this example, generate a URL dynamically from [http://flags.ox3.in/](http://flags.ox3.in/), a repository of SVG flags.

This adds a map of state names to state codes, then uses the code to build the final URL. The results now include a `flag` property, which you can use in the design section with an image or card component. The example shows how this works with a data provider, repeater, and card component bound to the `state`, `count`, and `flag` properties.

This should show how transformers can shape the data you need for your application.

## Response

A query must always return an array because that is how Budibase handles data. It fits the response into a column and row structure. If an endpoint returns a single object, it is converted like this:

```json
{ 
  "a": 1,
  "b": 2,
}

// Budibase will convert this to:
[
  { "a": 1, "b": 2 } 
]
```

This matters when building transformers because an array is broken up into individual rows. A common example is using `Object.keys` or `Object.values`, which produces an array of keys or values. Budibase treats those results like this:

```json
// outputs [ "a", "b" ]
return Object.keys({ "a": 1, "b": 2 })

// Budibase will break this array into the following response:
[
  { "value": "a" },
  { "value": "b" },
]
```

If you add the above example to a table in Budibase, each array element appears as a row.

If you want to return the values as an array, wrap the transformer response in an object, for example `return { letters: Object.keys({ "a": 1, "b": 2 }) }`. The query still returns an array so it can be used by a data provider, table, or repeater.
