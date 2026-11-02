---
title: Relationship picker
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
Use the Relationship Picker to select rows for a relationship field. Add it
inside a [Form](doc:forms), then select the relationship column in `Field`.

The relationship determines whether the picker accepts one or multiple
selections. Its options are loaded automatically from the related table.

## How it works

The picker uses:

* The related table's [display column](https://docs.budibase.com/docs/budibasedb#choose-a-display-column)
  as the option label
* The related row `_id` as the option value

Relationship fields return an array of row IDs, even when the picker allows
only one selection. For example:

```json
["ro_ta_123"]
```

## Default values

Set `Default value` to an array of IDs from the related table. You can enter
known IDs directly or generate them with a binding.

For example, add a [Data provider](doc:data-provider) for the related table,
filter it to the rows you want selected, and use a JavaScript binding:

```javascript
return $("City Data Provider.Rows")?.map(row => row._id)
```

## Filter the options

Open `Filtering` to restrict which related rows a user can select, such as
limiting a City picker to the country selected in another field.

When the filter configuration or a bound filter value changes, Budibase clears
the current selection. This prevents a previously selected row from remaining
selected after it is no longer valid.

The picker loads up to 100 options at a time. With `Search` enabled, users can
search the related table's display column for rows outside the initial set.

See [Cascading dropdown filters](doc:cascading-dropdown-filters) for a complete
example.

## Filter data by the selected relationships

Relationship Picker values contain IDs rather than display labels. When
filtering related SQL data with a picker value:

1. Add a filter to the component or Data provider you want to restrict
2. Select the related row ID field, such as `Relationship._id`
3. Use the `Is in` operator
4. Bind the filter value to the Relationship Picker field

The `_id` subfield is available in SQL relationship filter fields specifically
so it can be compared with the value emitted by the picker.

## On change

Use `On change` to run an action when the selection changes. `Field Value`
contains the array of selected IDs.

If you need the complete related row for a single selection:

1. Add a `Fetch Row` action and select the related table
2. Set `Row ID` to the first selected ID, for example
   `{{ Field Value.[0] }}`
3. Use `{{ Action 1.Fetched row }}` in later actions

## Related pages

* [Relationships](doc:relationships)
* [Forms](doc:forms)
* [Cascading dropdown filters](doc:cascading-dropdown-filters)
* [Chaining actions](doc:chaining-actions)
