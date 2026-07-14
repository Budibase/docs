---
title: Filter
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
The filter component can be used to allow your users to search and refine the data you, as the creator, provide to them.

## Filtering Tables

Using the filter component with a table can be achieved very simply. Add a Filter component to any screen that contains a table, and select your chosen table as the "Target component." With that done, you can choose the columns to filter on with the settings panel.

### Interaction

When a user interacts with a filter in the published app, the filter input is automatically focused for a faster entry. Once the desired value is entered, the filter can be applied by clicking the **Apply** button or by pressing the **Enter** key.


## Filtering Data providers

### Data Providers with Charts

This example will use the Jobs table from the Budibase Sample DB.

1. Using the Budibase Sample Data, go to the Jobs table and create a new "jobs-by-date". Set all columns as hidden apart from "Job ID", "Quote Date", and "Quote Price".

2. Next, head to the Design section, and add to your screen a Data Provider, a Pie Chart (nested inside the Data Provider), and a Filter component.

3. In the settings of the Data provider, select the view you've just created.

4. In the settings of the Filter component, set it to target your Data Provider added in Step 2, and select "Quote Date" and "Quote Price". These columns will be available for users to filter the Data Provider (and therefore the Pie Chart).

5. (Optional) Checking 'Persist filters' will save the filters set by the user for when they return to the page. This is similar to the "Persist this value" when setting [App State](https://docs.budibase.com/docs/app-state). Checking "Clear Filters" gives the users a button to remove any existing filters on all columns at once. This would be useful for a more complex filter.

With this established, your users will now be able to filter the chart based on Quote Date - this would be useful to find Revenue generated after a certain date (i.e., the start of the financial year). They can also filter on Quote Price, helpful to see the value of jobs over a specific price.


<br />

## Settings

| Setting          |                                                                                                   |
| :--------------- | :------------------------------------------------------------------------------------------------ |
| Target Component | Select any Table or Data provider on the screen to apply filters to.                              |
| Default filter type | Sets the initial filter condition type when users add a new filter.                               |
| Persist Filters  | Similar to App State - applied filters will remain when the user leaves the page and returns. |
| Clear Filters    | Displays a "Clear Filters" button so users can quickly reset all active filters.              |
| Size             | Controls the visual size of the filter input/button UI.                                          |
| :gear:  >> Label | Text input to rename filter (defaults to column).                                                 |
