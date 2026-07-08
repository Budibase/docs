---
title: Adding filtering
excerpt: ''
deprecated: false
hidden: false
metadata:
  title: ''
  description: kba_5hc5e
  robots: index
next:
  description: ''
---
Below are the different methods of filtering within Budibase.

## Dynamic filtering

If you have a [Table](doc:table) component connected to a [Data provider](doc:data-provider) component, you can add dynamic filtering by simply adding the [Dynamic filter](doc:dynamic-filter) component. This should work as soon as you add it.

<Image align="center" src="https://files.readme.io/9af2ffe07b04cf4e219b17428ef9f7d7b6b7daf70778b92270260eaafda149df-Screen_Recording_2025-08-18_at_10.03.35.gif" />

## Static filtering

Once you have linked a <Glossary>Datasource</Glossary> to a component, you can access the filter drawer by clicking the button beside the *Filtering* setting in the <Glossary>Settings Panel</Glossary>.

The filter drawer is where you select the columns you want to filter on. For example, you may want to return sales records only where any of the sales reps made more than 60 sales, or all sales made in the first week of the month.

It is also possible to filter on multiple columns, and even filter on the same column multiple times. 

## Filtering data from the front-end

To let users filter data on the front end, add a [Data provider](doc:data-provider) and connect it to your source.

Then add a [Form component](doc:form) with two Number fields:

* `day_start` with the label `Day of month (start)`
* `day_end` with the label `Day of month (end)`

In the data provider, open the filter drawer and add two expressions:

* `day_of_month` is `more than or equal to` `day_start`
* `day_of_month` is `less than or equal to` `day_end`

Users can now choose a start and end day to narrow the results.

## Filtering options & Filter Groups

When filtering, there are a few settings that control how the filters are handled.

#### Behaviour when combining Filter Groups

* **Show data which matches all filter groups**: all filters must match when returning records
* **Show data which matches any filter**: records are returned when they match any of the provided filter groups

#### Behaviour in Filter Groups themselves

* **Show data when any of the following filters are matches**: Only one of the filters needs to match in order to return this record
* **Show data when all of the following filters are matches**: All of the filters in this group need to match in order to return this record

<br />

#### When filter empty

This setting is specific to filters that are using <Glossary>Binding</Glossary>s. It determines what data should be returned if the binding values are blank.

By default, if all filter binding values are empty, all rows are returned. If *Return no rows* is selected, empty bindings return no rows. This is useful when pairing a table with search fields because an empty search field shows all rows and a value narrows the list.

You can also filter using a [relationship picker](https://docs.budibase.com/docs/filter-by-relationships).
