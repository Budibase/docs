---
title: Calendar
excerpt: A configurable calendar component to show events.
deprecated: false
hidden: false
metadata:
  robots: index
---
Use the Calendar component to display events on a month, week, day, or agenda view.

## Required fields

Calendar events need:

* Event start
* Event end
* Title

Use a [Data provider](doc:data-provider) to supply the calendar data.

## Views

* Month view shows a full month grid
* Week view shows one week at a time
* Day view shows a single day timeline
* Agenda view shows a chronological list

## Common settings

* Data provider
* Event start
* Event end
* Event title
* Type
* Show title date
* Title locale
* Year title format
* Month title format
* Day title format
* Show controls
* Open on date

## On click

Use calendar click events to read the selected event's row ID and date values.

This is useful for opening a single row provider, side panel, or navigation action.
