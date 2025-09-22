---
title: Histogram Chart
excerpt: Visualising buckets of data
deprecated: false
hidden: false
metadata:
  title: ''
  description: ''
  robots: index
next:
  description: ''
---
A histogram allows you to display the frequency of data within ranges, known as buckets. For example, here is a histogram showing the frequency of sales for different unit cost buckets.

<Image align="center" src="https://files.readme.io/3a22939ae36e24e98491fdd732eacb37aa391bc7d53b8579ba347264889a6b5c-Screenshot_2024-10-28_at_13.32.18.png" />

## Displaying data

Add the **Chart Block** or a [Data provider](doc:data-provider) to your screen, and select the data source, which could be a table, view, or [Custom query](https://docs.budibase.com/docs/data-sources#custom-queries). Apply any limits or filtering to the data source that you want.

Next in the <Glossary>Settings Panel</Glossary> of the histogram component, select the *Value column*. This field must be a [Number](doc:number), and will determine the range for each bucket. 

The number of buckets can be adjusted by the *Bucket count*. A checkbox is also available to determine if you want your Histogram to be displayed horizontally or vertically. You can provide labels for the x and y axis.

<Image align="center" src="https://files.readme.io/f4d1382c3ca7ac3474e1ff34d4a9c9805b04306864f3c23e8e9b02ea29f7db03-Screenshot_2024-10-28_at_13.32.39.png" />
