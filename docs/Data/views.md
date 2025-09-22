---
title: Views
excerpt: Learn more about views within Budibase
deprecated: false
hidden: false
metadata:
  title: ''
  description: ''
  robots: index
next:
  description: ''
---
Views are virtual tables that present data from a table with a preset filter or grouping. 

When you create a View within Budibase, it presents you with all the data from its linked table. This provides you with a canvas to manipulate your data without changing the data within the original table. This is crucial, as it protects your original data. It also allows you to create:

1. Filters
2. Sort
3. Hide columns

When designing your UI, you can use a View with auto-generated screens, as well as for custom UI development. Say you have a table of Sales employees, and their total sales, you can create a view which gives you the total sales of all Sales employees. You can then reference the data from this View in the _Design_ section of Budibase.

## How to create a new view

To create a new view, click the `Create view` button, and give it a name.

[block:html]
{
  "html": "<div style=\"padding:75% 0 0 0;position:relative;\"><iframe src=\"https://player.vimeo.com/video/728551346?h=c61332fc57&amp;badge=0&amp;autopause=0&amp;player_id=0&amp;app_id=58479\" frameborder=\"0\" allow=\"autoplay; fullscreen; picture-in-picture\" allowfullscreen style=\"position:absolute;top:0;left:0;width:100%;height:100%;\" title=\"filter-view.mov\"></iframe></div>"
}
[/block]


## Filters

One of the core features of views is the ability to filter rows according to particular criteria. When a Row is filtered, it is not deleted—it's just hidden from the particular view you're using and remains within the table (views are virtual tables!).

Try adding filters when:

- You need to focus on rows that meet certain conditions (e.g. Classes between May and June, and taught by Albert Einstein).
- You need to display certain information, to certain people (e.g Each salesperson can only view their own commission).

### How to create a new filter

To create a new filter:

1. Click the `Filter` button
2. Click `Add Filter`
3. Select the Column you would like to filter
4. Select a filter function
5. Type your query
6. Click `Save`

You can also save a filtered table as a new view:

[block:image]
{
  "images": [
    {
      "image": [
        "https://files.readme.io/787ea63058e416325529f8bd200f09ac9e6b4b4ef9632de18e7a4ac16f99f790-Screenshot_2024-09-20_at_14.56.27.png",
        "",
        ""
      ],
      "align": "center"
    }
  ]
}
[/block]


## View Calculations

View calculations allow you to run certain mathematical operations on your data, akin to those available in traditional SQL-based databases.

- Average - find the [arithmetic mean-average ](https://en.wikipedia.org/wiki/Mean) column's values, (optionally) grouped by a column.
- Sum - find the sum-total of a column's values, (optionally) grouped by a column.
- Minimum - find the minimum value of a column's values, (optionally) grouped by a column.
- Maximum - find the maximum value of a column's values, (optionally) grouped by a column.
- Count - count how many occurrences of each value a column contains, (optionally) grouped by a column.

### Average, Sum, Minimum, and Maximum

Average, Sum, Minimum, and Maximum must all be performed on number columns. When used independently they will return a single row, and when used in conjunction with a "Group By" they will return a row for each unique value in the group by column.

For example - "Sum Total Revenue" configured as "Calculate the `Sum` of `Total Revenue` Group By `None`" will return a single row, totalling all revenue.

![](https://files.readme.io/f861df14989960a13c3d8475ff6d93bbcd26a991549f244e8b6678dac7ad811f-image.png)

![](https://files.readme.io/1232fbf33d076b1d9e0ad19b7f6ca51477049907b4cdf23290222e05e962ffe6-image.png)

Grouping by Sales Channel will return a row for each unique value in the Sales Channel column (Offline and Online)

![](https://files.readme.io/44dfb17339cc41f73e75029c916ee07b72d5ae48ef5811072ca37151921a32d8-image.png)

Grouping by Region, Country, Sales Channel and Order Priority will, again, return a new row for each unique combination of those attributes, and calculate the sum of Total Revenue for each combination. Naturally, the more specific the calculations become, the more granular the data, the more rows are returned. 

[block:image]
{
  "images": [
    {
      "image": [
        "https://files.readme.io/6e6cbef2e21edd2c72ddf1c32b13c0543156d6151e0555fe93eab09165f0390b-image.png",
        null,
        "This view calculation returns 731 rows in total. The image above is cropped for brevity."
      ],
      "align": "center",
      "caption": "This view calculation returns 731 rows in total. The image above is cropped for brevity."
    }
  ]
}
[/block]


### Count

The _Count_ calculation can be used to find how many rows meet the specified criteria. Using "Calculate the `Count` of `Order ID` Group by `Country`" we can see how many unique order IDs there are per country.

![](https://files.readme.io/2d72ab7e16979b430a585e97ec86a56774bef08371b21d6d5a6397ada99878ba-image.png)

We can then _Group by_ additional criteria to refine the data further. For example grouping by country _and_ sales channel will show us how many online and offline sales were made per country.

![](https://files.readme.io/b1997c6ef01ad1d517a787d2c2ac5fbd67da367b2afe25e56ffe41c7d59d703c-image.png)

## Views and View Calculations as Data Sources

[block:image]
{
  "images": [
    {
      "image": [
        "https://files.readme.io/8f5b0a60e5a134b3a0dff7d9d51661cf4651095753c8667c37ea866b8e28ef05-Screenshot_2024-11-22_at_12.06.19.png",
        null,
        ""
      ],
      "align": "center"
    }
  ]
}
[/block]


Views and View Counts can be used as Data Sources, and manipulated in the same ways. Using a view calculation like "Calculate the Sum of Total Revenue, Group by Country" allows us the find the total revenue of sale per country. We could then use this in a repeater block, as a sales leaderboard. 

Add a Repeater Block, and set the Data Source to the `view total_revenue_by_country`, then set the Sort Column to be Sum Total Revenue, descending, limited to 10. This will show us the top 10 countries by sum total sales revenue.

Inside the repeater block, add a container and nest inside it 3 Headline components

![](https://files.readme.io/8904b01f006c5f4aada8a144da0b16e5f0ebe462627b77555fea8b00ce7b171f-image.png)

Set the first headline component to `{{ add New Repeater Block.Row Index 1 }}` - This is taking the Row Index and adding 1 to it. (Index starts counting from Zero, so in order to use row-index as the rankings we must add 1)

Set the second headline component to `{{ New Repeater Block.total_reveue_by_country.Sum Total Revenue }}` - this fetches the sum total of the revenue. You can then set the third headline component to`{{ New Repeater Block.total_reveue_by_country.Country }}`, and just like that we've built a basic leaderboard for Total Revenue by Country. 

![](https://files.readme.io/203a34200f757eba135329852a0d5f8d73d2bfc0346fb3d5d28a36228ebd16a7-image.png)