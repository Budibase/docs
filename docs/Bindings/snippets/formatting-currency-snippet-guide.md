---
title: Formatting currency snippet guide
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
This quick guide demonstrates how to create a JavaScript snippet that adds the correct currency symbol based on options provided to the snippet.

## Steps

1. Create a Budibase internal table this should include numeric data and an option which contains currency types e.g. pounds, dollars and euros etc. 

   [block:image]{"images":[{"image":["https://files.readme.io/32a3521-Screenshot_2024-04-19_at_08.49.12.png","","Image showing the table setup for the demoed snippet"],"align":"center"}]}[/block]
2. Add data to your table
3. Create a new page
4. Go to the design screen and add a repeater block
5. Nested inside this add a paragraph component
6. Go to the paragraph bindable area
7. Switch the tab from `text` to `javaScript`
8. Click on the `</>` icon and create a new snippet called `formatCurrency`
9. Paste the below code into it and click save

```Text JavaScript
return function(currenyType, number) {
    const currencySymbols = {
        'dollar': '$',
        'pound': '£',
        'euro': '€'
    };
    if (!currencySymbols.hasOwnProperty(currenyType)) {
        return 'Unsupported currency';
    }
    const formattedAmount = currencySymbols[currenyType] + number;
    return formattedAmount;
}
```

10. Click the snippet this should generate the code needed to target the snippet
11. Add your options into the brackets of the function e.g. `return snippets.formatCurrency("dollar", 50)` in your case this would be this would look something like: `return snippets.formatCurrency($("New Repeater Block.currency.format"), $("New Repeater Block.currency.currency"))`
12. Click save

<br />

## The end result!

[block:embed]
{
  "html": false,
  "url": "https://cprem.budibase.app/embed/guide-snippets#/currency",
  "title": "iframe",
  "provider": "cprem.budibase.app",
  "href": "https://cprem.budibase.app/embed/guide-snippets#/currency",
  "typeOfEmbed": "iframe",
  "height": "300px",
  "width": "100%",
  "iframe": true
}
[/block]