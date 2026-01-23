---
title: Gauge Chart
deprecated: false
hidden: true
metadata:
  robots: index
---
A gauge chart displays progress or performance for multiple items simultaneously using coloured circular arcs. Each ring represents a separate entity (e.g., a user, task, or metric), and the length of the coloured arc shows how much of the target has been achieved

<Image align="center" border={false} width="90% " src="https://files.readme.io/19754450039f3a53ffdf48caf472ef04eb45f533f22b86c3ccb5dee6721dae06-image.png" />

<br />

## Tutorial

For this example, the gauge chart will be used to calculate the usage of each user's annual leave (e.g 0% = no annual leave taken, 100% = all annual leave taken) 

First we need create a data table, below I have created a table consisting of users, days taken, days allowed, and days remaining 

<Image border={false} src="https://files.readme.io/d52055b62ad2446e703fec5dc28a8792790134839d9f80132479367676bd4795-image.png" />

Then create a new app, and add a data provider, followed by the gauge chart component. For the data provider, set the data source to be our table 'days off', then in the nested gauge chart, set the following settings: 

<Image border={false} src="https://files.readme.io/b2f812868e99512aa93084288e5bde9ecec9f5266c32f0896a3eae0059809450-image.png" />

The provider will be the datasource we are taking this information from, the label column in this example will be the names of the users we have in our table, but you could also use dates, numbers and boolean's. The data column is our 'remaining' column, which shows the amount of days left

Now if we hover over any of the rings they will display a percentage, for example, if we hover over Fiona, we can see she has used 43.33% of her total annual leave

<Image border={false} src="https://files.readme.io/1af4e784c85365be025bdadc522affed9623b1281a10541fc27598df60a4a660-image.png" />

<br />

<br />
