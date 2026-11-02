---
title: Date/Time
excerpt: Store date and time values in Budibase DB
deprecated: false
hidden: false
metadata:
  title: ''
  description: ''
  robots: index
next:
  description: ''
---
Use a date/time column when a field needs to store timestamps or dates.

Budibase stores date/time values in ISO 8601 format.

## Create a date/time column

1. Open the table
2. Click `Create column`
3. Set the type to `Date/time`
4. Add any constraints you need
5. Save the column

## Common constraints

Use constraints to limit the values users can save:

* Required
* Earliest date
* Latest date

## Ignore time zones

Use `Ignore time zones` when you want Budibase to save the selected value exactly as entered.

Leave it off when you want the browser timezone to affect the stored timestamp.

## Use date/time values

Date/time columns work well with:

* Date picker components
* Bindings that format dates
* Formula columns that calculate durations or date differences

## Notes

* The setting is also available for PostgreSQL and MySQL tables
* Changing `Ignore time zones` does not rewrite existing data
