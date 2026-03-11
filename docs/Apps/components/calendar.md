---
title: Calendar
excerpt: A configurable calendar component to show events.
deprecated: false
hidden: false
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

<Image align="center" caption="Month View - An overview of the whole month, including events that fall outside of that month, but inside of this view  ." src="https://files.readme.io/a27df6d7bc0e093eff053a626e1d3acd6cbbf6e6a28845bebcbfb7ae5b1ba19c-image.png" />

<Image align="center" caption="Week View - A snapshot of the week" src="https://files.readme.io/ca6a46cb8dc71fdf12b62c9611f0491d344ee24265cb6fa6b313e65133153c9d-image.png" />

<Image align="center" caption="Day View - a simple timeline of the day" src="https://files.readme.io/5c403029abe83a907ed458940d3e004042ac5d3b739d02a1aa4528e25b79b3f2-image.png" />

<Image align="center" caption="Agenda - an ordered list of the events of the week" src="https://files.readme.io/497c3b38b53a80286bc20153c7c814938835f43eca725729cc4d77c3e167e6c7-image.png" />

## Options

Creators can optionally show or hide the date or date-range being shown in the view. using the "Show title" setting, which can be configured for DD-MM-YYYY or MM-DD-YYYY formats.

![](https://files.readme.io/41431c48cc93883c660381bafc9d521bec0b5b1e0e188645a842825cbdddd41a-image.png)

Creators also have options to adjust the way the title is displayed, for example in the Title section of the settings, Year title format set to `4-digit`, and `Month title format` set to "Long" will show the title on the Month view as February 2026. Please note that not all settings will apply to all views.

![](https://files.readme.io/849729fea76dcebfa368437ab7e53d65ca9c106337d80f4c40120e8ed56ab919-image.png)

<br />

Creators can also allow their users to move around to different dates or views using the "Show Controls" option. By default, the calendar component will open on the current day, but using the "Open on date" setting, and providing a date in YYYY-MM-DD format, the calendar will open on this date (or date range). This could be useful to show specific plans. 

![](https://files.readme.io/0dea57200fff66272a7f838c8014141762a6fe340f2dae60fe689d40e5cfeb5c-image.png)

## On click events

On-click events can be established to surface the values for an event's `row_id`, event start, event end, and event title. These could be used in conjunction with a Single Row provider in a modal or side panel, or even as part of [Navigate To](https://docs.budibase.com/docs/application-actions#navigate-to) action using [URL Parameters](https://docs.budibase.com/docs/passing-bindings-in-url-parameters)

<Image align="center" src="https://files.readme.io/cd661b892326c717e22c65612da40817c853331f333e6db6a91360849517f414-Screen_Recording_2026-02-03_at_17.38.40.gif" />

<br />

<Table align={["left","left","left"]}>
  <thead>
    <tr>
      <th>
        Setting
      </th>

      <th>
        Expected Value
      </th>

      <th>
        Use
      </th>
    </tr>
  </thead>

  <tbody>
    <tr>
      <td>
        Data Provider
      </td>

      <td>
        Data Provider
      </td>

      <td>
        Should fetch a datasource that contains the required columns (detailed below)
      </td>
    </tr>

    <tr>
      <td>
        Event Start
      </td>

      <td>
        DateTime column
      </td>

      <td>

      </td>
    </tr>

    <tr>
      <td>
        Event End
      </td>

      <td>
        DateTime column
      </td>

      <td>

      </td>
    </tr>

    <tr>
      <td>
        Event Title
      </td>

      <td>
        Text column
      </td>

      <td>

      </td>
    </tr>

    <tr>
      <td>
        Type
      </td>

      <td>
        Month/Week/Day/Agenda
      </td>

      <td>
        Sets which view is shown by default
      </td>
    </tr>

    <tr>
      <td>
        On click event
      </td>

      <td>

      </td>

      <td>
        Read more about [Actions](https://docs.budibase.com/docs/actions)
      </td>
    </tr>

    <tr>
      <td>
        Show title date
      </td>

      <td>
        Boolean
      </td>

      <td>
        Show or hide the date-range as a title
      </td>
    </tr>

    <tr>
      <td>
        Title locale
      </td>

      <td>
        DD MM YYYY or  
        MM DD YYYY
      </td>

      <td>
        Only visible when "Show title date" is checked.
      </td>
    </tr>

    <tr>
      <td>
        Year title format
      </td>

      <td>
        Hidden or 4-digit or 2-digit
      </td>

      <td>

      </td>
    </tr>

    <tr>
      <td>
        Month title format
      </td>

      <td>
        Hidden or Numeric or 2-digit or Short or Long
      </td>

      <td>

      </td>
    </tr>

    <tr>
      <td>
        Day title format
      </td>

      <td>
        Hidden or Numeric or 2-digit
      </td>

      <td>

      </td>
    </tr>

    <tr>
      <td>
        Weekday title format
      </td>

      <td>
        Hidden or Short or Long or Narrow
      </td>

      <td>

      </td>
    </tr>

    <tr>
      <td>
        Empty Agenda text
      </td>

      <td>
        Text
      </td>

      <td>
        Used when the calendar is showing Agenda, with no events to show.
      </td>
    </tr>

    <tr>
      <td>
        Show Controls
      </td>

      <td>
        Boolean
      </td>

      <td>
        Allow or prevent the user from navigating to different views or dates
      </td>
    </tr>

    <tr>
      <td>
        Button Type
      </td>

      <td>
        Action (Default) or Primary
      </td>

      <td>

      </td>
    </tr>

    <tr>
      <td>
        Open on date
      </td>

      <td>
        Text, expects YYYY-MM-DD format
      </td>

      <td>
        Calendar will open on current date by default. Set this to open on a specific date.
      </td>
    </tr>

    <tr>
      <td>
        Month button Text
      </td>

      <td>
        Text
      </td>

      <td>
        Allows customisation for non-english-speaking users
      </td>
    </tr>

    <tr>
      <td>
        Week button Text
      </td>

      <td>
        Text
      </td>

      <td>
        Allows customisation for non-english-speaking users
      </td>
    </tr>

    <tr>
      <td>
        Day button text
      </td>

      <td>
        Text
      </td>

      <td>
        Allows customisation for non-english-speaking users
      </td>
    </tr>

    <tr>
      <td>
        Today button text
      </td>

      <td>
        Text
      </td>

      <td>
        Allows customisation for non-english-speaking users
      </td>
    </tr>
  </tbody>
</Table>

<br />