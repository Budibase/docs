---
title: Calendar
excerpt: A configurable calendar component to show events.
deprecated: false
hidden: true
metadata:
  robots: index
---
## Getting Started

The Calendar component can be used to show events and related data within your datasources. Each event must have three vital pieces of information: Event Start, Event End, and Title. These values will be used to plot events on your calendar. 

| Property    | Type            |
| :---------- | :-------------- |
| Event Start | DateTime Column |
| Event End   | DateTime Column |
| Title       | String          |

You should first use a <Anchor label="Data Provider" target="_blank" href="https://docs.budibase.com/docs/data-provider">Data Provider</Anchor> to fetch your data, and add a Calendar component to your screen, with the datasource set to the Data Provider. Configure your columns for Event Start, Event End, and Title. Your calendar should now display rows from your table. NB: Do not paginate your data provider, and consider how many rows you should display. 

<br />

## Views

Different views can be selected, depending on your needs. 

<Image align="center" border={false} caption="Month View - An overview of the whole month, including events that fall outside of that month, but inside of this view  ." src="https://files.readme.io/a27df6d7bc0e093eff053a626e1d3acd6cbbf6e6a28845bebcbfb7ae5b1ba19c-image.png" />

<Image align="center" border={false} caption="Week View - A snapshot of the week" src="https://files.readme.io/ca6a46cb8dc71fdf12b62c9611f0491d344ee24265cb6fa6b313e65133153c9d-image.png" />

<Image align="center" border={false} caption="Day View - a simple timeline of the day" src="https://files.readme.io/5c403029abe83a907ed458940d3e004042ac5d3b739d02a1aa4528e25b79b3f2-image.png" />

<Image align="center" border={false} caption="Agenda - an ordered list of the events of the week" src="https://files.readme.io/497c3b38b53a80286bc20153c7c814938835f43eca725729cc4d77c3e167e6c7-image.png" />

## Options

Creators can optionally show or hide the date or date-range being shown in the view. using the "Show title" setting, which can be configured for DD-MM-YYYY or MM-DD-YYYY formats.

<Image border={false} src="https://files.readme.io/41431c48cc93883c660381bafc9d521bec0b5b1e0e188645a842825cbdddd41a-image.png" />

Creators can also allow their users to move around to different dates or views using the "Show Controls" option. By default, the calendar component will open on the current day, but using the "Open on date" setting, and providing a date in YYYY-MM-DD format, the calendar will open on this date (or date range). This could be useful to show specific plans.

<Image border={false} src="https://files.readme.io/0dea57200fff66272a7f838c8014141762a6fe340f2dae60fe689d40e5cfeb5c-image.png" />

## On click events

On-click events can be established to surface the values for an event's `row_id`, event start, event end, and event title. These could be used in conjunction with a Single Row provider in a modal or side panel,

<Image border={false} src="https://files.readme.io/372784231207746be59393bf104ae529f98f0175b989b0b777c465f484d4c623-image.png" />

<br />

<br />

| Setting | Expected Value | Use |
| :------ | :------------- | :-- |
|         |                |     |
|         |                |     |

<br />

<br />
