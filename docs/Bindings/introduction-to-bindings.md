---
title: Introduction to bindings
excerpt: What are bindings and why are they important?
deprecated: false
hidden: false
metadata:
  title: ''
  description: ''
  robots: index
next:
  description: ''
---
Bindings connect dynamic values to fields in Budibase. Use them to pass data, format values, and perform calculations.

## When to use bindings

Use bindings when you need to:

* Display data from a table, form, or user context
* Pass a value from one component to another
* Use a query parameter or screen state in a data source
* Format output before it is shown to the user
* Run JavaScript for more complex logic

## Open the bindings drawer

Look for the lightning icon next to a field that supports bindings.

1. Click the lightning icon.
2. Choose a binding category.
3. Search for the value you want.
4. Insert the binding into the field.

You can also type a binding directly into a text field using double braces.

```text
{{ Field Value }}
```

This is useful for simple values, but the drawer gives you autocomplete and access to JavaScript bindings.

## Use JavaScript bindings

Switch to the JavaScript tab when you need logic that text bindings cannot provide.

JavaScript bindings must return a value.

```javascript
return $("Current User.firstName");
```

Use JavaScript bindings when you need to:

* Transform values before display
* Combine multiple fields
* Build dynamic URLs
* Calculate totals or conditional output

## Pass data between queries and screens

Bindings are commonly used in both the Data and Design sections.

### In Data

Add a binding to a query when the input value should come from the app.

Example use cases:

* Filter a read query by a form field
* Pass a screen parameter into a REST query
* Reuse the same query for multiple records by changing the binding value

### In Design

Use a data provider, form field, or component state to supply the binding value.

Typical flow:

1. Add the binding in the query.
2. Use the query in a data provider or component.
3. Map a screen field, state value, or user value into the binding.
4. Test the query with a known default value before publishing.

## Calculate values

You can use bindings to calculate display values as well as data values.

Example uses:

* Sum selected prices
* Format a status label
* Build a download URL
* Show or hide content based on a condition

## Good practice

Keep bindings:

* Clear
* Short
* Predictable
* Easy to test

Prefer direct values and simple expressions. Use JavaScript only when the binding needs real logic.

## Related guides

* [Bindings](doc:bindings)
* [Bindings scope](doc:bindings-scope)
* [JavaScript bindings](doc:javascript)
* [Form bindings](doc:form-bindings)
* [URL parameters](doc:url-parameters)
