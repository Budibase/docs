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

![](https://files.readme.io/c3779b5293cf8b8332c29b0e3f9dbc2919c6c959d484051b47377d001f7a4e8a-image.png)

## Filtering Data providers

### Data Providers with Charts

This example will use the Jobs table from the Budibase Sample DB.

1. Using the Budibase Sample Data, go to the Jobs table and create a new "jobs-by-date". Set all columns as hidden apart from "Job ID", "Quote Date", and "Quote Price".

   ![](https://files.readme.io/816762d11e3a7d7201347827739341c361af28187fca97c0304d8e18bac26063-image.png)
2. Next, head to the Design section, and add to your screen a Data Provider, a Pie Chart (nested inside the Data Provider), and a Filter component.

   ![](https://files.readme.io/ef3fa1e8b19b25fe86d44142994e9f16a6a5012422eab654c64724150ce6fc66-image.png)
3. In the settings of the Data provider, select the view you've just created.

   ![](https://files.readme.io/211f8f8c2fe6d902d90e29623000d335369546af9714a8671880bb0d3ef3bbd3-image.png)
4. In the settings of the Filter component, set it to target your Data Provider added in Step 2, and select "Quote Date" and "Quote Price". These columns will be available for users to filter the Data Provider (and therefore the Pie Chart).

   ![](https://files.readme.io/77757fdf5a86d20ac12737ea6229c02b06fa1637b0e64f43e27993e1554dbd8a-image.png)
5. (Optional) Checking 'Persist filters' will save the filters set by the user for when they return to the page. This is similar to the "Persist this value" when setting [App State](https://docs.budibase.com/docs/app-state). Checking "Clear Filters" gives the users a button to remove any existing filters on all columns at once. This would be useful for a more complex filter.

With this established, your users will now be able to filter the chart based on Quote Date - this would be useful to find Revenue generated after a certain date (i.e., the start of the financial year). They can also filter on Quote Price, helpful to see the value of jobs over a specific price.

![](https://files.readme.io/5962643cafd985b72ad64dd2735331ca2c091502c276a7f7b981c9b31872d57b-image.png)

<br />

## Settings

| Setting          |                                                                                               |
| :--------------- | :-------------------------------------------------------------------------------------------- |
| Target Component | Select any Table or Data provider on the screen to apply filters to.                          |
| Persist Filters  | Similar to App State - applied filters will remain when the user leaves the page and returns. |
| Clear Filters    | Displays a "Clear Filters" button when a filter is applied.                                   |
| :gear:  >> Label | Text input to rename filter (defaults to column).                                             |