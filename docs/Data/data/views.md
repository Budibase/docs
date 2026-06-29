---
title: Views
excerpt: Learn more about views within Budibase
deprecated: false
hidden: false
metadata:
  title: ''
  description: kba_5hfr6
  robots: index
next:
  description: ''
---
Views are virtual tables that present data from a table with a preset filter or grouping. 

When you create a View within Budibase, it presents you with all the data from its linked table. This provides you with a canvas to manipulate your data without changing the data within the original table. This is crucial, as it protects your original data. It also allows you to create:

1. Filters
2. Sort
3. Hide columns

When designing your UI, you can use a View with auto-generated screens, as well as for custom UI development. Say you have a table of Sales employees, and their total sales, you can create a view which gives you the total sales of all Sales employees. You can then reference the data from this View in the *Design* section of Budibase.

## How to create a new view

To create a new view, click the `Create view` button, and give it a name.

<HTMLBlock>{`
<div style="padding:75% 0 0 0;position:relative;"><iframe src="https://player.vimeo.com/video/728551346?h=c61332fc57&amp;badge=0&amp;autopause=0&amp;player_id=0&amp;app_id=58479" frameborder="0" allow="autoplay; fullscreen; picture-in-picture" allowfullscreen style="position:absolute;top:0;left:0;width:100%;height:100%;" title="filter-view.mov"></iframe></div>
`}</HTMLBlock>

## Filters

One of the core features of views is the ability to filter rows according to particular criteria. When a Row is filtered, it is not deleted—it's just hidden from the particular view you're using and remains within the table (views are virtual tables!).

Try adding filters when:

* You need to focus on rows that meet certain conditions (e.g. Classes between May and June, and taught by Albert Einstein).
* You need to display certain information, to certain people (e.g Each salesperson can only view their own commission).

### How to create a new filter

To create a new filter:

1. Click the `Filter` button
2. Click `Add Filter`
3. Select the Column you would like to filter
4. Select a filter function
5. Type your query
6. Click `Saved`

You can also save a filtered table directly as a new view.

## View Calculations

View calculations allow you to run certain mathematical operations on your data, akin to those available in traditional SQL-based databases.

* Average - find the [arithmetic mean-average ](https://en.wikipedia.org/wiki/Mean) column's values, (optionally) grouped by a column.
* Sum - find the sum-total of a column's values, (optionally) grouped by a column.
* Minimum - find the minimum value of a column's values, (optionally) grouped by a column.
* Maximum - find the maximum value of a column's values, (optionally) grouped by a column.
* Count - count how many occurrences of each value a column contains, (optionally) grouped by a column.

### Average, Sum, Minimum, and Maximum

Average, Sum, Minimum, and Maximum must all be performed on number columns. When used independently they will return a single row, and when used in conjunction with a "Group By" they will return a row for each unique value in the group by column.

For example - "Sum Total Revenue" configured as "Calculate the `Sum` of `Total Revenue` Group By `None`" will return a single row, totalling all revenue.

The first example returns a single total for all revenue without any grouping.

The second example shows the same calculation with a group applied to the result.

Grouping by Sales Channel will return a row for each unique value in the Sales Channel column (Offline and Online)

The grouped result returns one row for each Sales Channel, such as Offline and Online.

Grouping by Region, Country, Sales Channel and Order Priority will, again, return a new row for each unique combination of those attributes, and calculate the sum of Total Revenue for each combination. Naturally, the more specific the calculations become, the more granular the data, the more rows are returned. 

This example returns 731 rows in total.

### Count

The *Count* calculation can be used to find how many rows meet the specified criteria. Using "Calculate the `Count` of `Order ID` Group by `Country`" we can see how many unique order IDs there are per country.

The count is grouped by country to show how many unique order IDs exist in each one.

We can then *Group by* additional criteria to refine the data further. For example grouping by country *and* sales channel will show us how many online and offline sales were made per country.

Adding sales channel to the grouping breaks the counts down by both country and channel.

## Views and View Calculations as Data Sources

The Screens button in the Data toolbar shows where a view or view calculation is currently being used.

Views and View Counts can be used as Data Sources, and manipulated in the same ways. Using a view calculation like "Calculate the Sum of Total Revenue, Group by Country" allows us to find the total revenue of sale per country. This data can then be used in components like **Charts** or **Repeater Blocks**. 

Add a Repeater Block, and set the Data Source to the `view total_revenue_by_country`, then set the Sort Column to be Sum Total Revenue, descending, limited to 10. This will show us the top 10 countries by sum total sales revenue.

Inside the repeater block, add a container and nest inside it 3 Headline components

The repeater example is built from a container with three nested Headline components.

Set the first headline component to `{{ add New Repeater Block.Row Index 1 }}` - This is taking the Row Index and adding 1 to it. (Index starts counting from Zero, so in order to use row-index as the rankings we must add 1)

Set the second headline component to `{{ New Repeater Block.total_revete_by_country.Sum Total Revenue }}` - this fetches the sum total of the revenue. You can then set the third headline component to`{{ New Repeater Block.total_revete_by_country.Country }}`, and just like that we've built a basic leaderboard for Total Revenue by Country. 

### Tracking View Usage

In the Data section, you can use the **Screens** button in the toolbar to see a list of every screen and component where a View or View Calculation is currently being used. This makes it easier to perform impact analysis before modifying or deleting a view.

Note that while standard Views support **Generate app screen** to automatically create new UI based on your data, this feature is not supported for View Calculations.

The finished leaderboard combines the row index, total revenue, and country into a ranked list.
