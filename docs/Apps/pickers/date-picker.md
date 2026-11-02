---
title: Date picker
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
Use the Date Picker to select a `Date`, `DateTime`, or `Time` value.

Add the Date Picker inside a [Form](doc:forms), then choose its type in the
settings panel.

## Picker types

Configure `Show time` and `Time only` for the value you want:

| Picker | Show time | Time only | Stored value |
| :----- | :-------- | :-------- | :----------- |
| Date and time | On | Off | ISO date and time |
| Date only | Off | Off | `YYYY-MM-DD`, or a timestamp with `Set time to` |
| Time only | Either | On | `HH:mm` |

## Set a fixed time for a date

For a date-only picker, use `Set time to` to save a fixed time with the selected
date. For example, set it to `23:59:59` when a `Less than or equal to` filter
should include the entire selected day.

This setting is available only when both `Show time` and `Time only` are off.

## Time zones

Date and time values are normally converted to an ISO timestamp with timezone
information. Enable `Ignore time zones` when the selected wall-clock time must
be stored exactly as entered without conversion to UTC.

Time-only values always ignore time zones.

## Calendar settings

Use `Week starts on` to override the browser locale for the calendar.

## Calendar navigation

Users can move between months by scrolling on desktop or swiping on touch devices.

## Related pages

* [Forms](doc:forms)
* [Form validation](doc:form-validation)
