---
title: Formula
excerpt: Generating a value from an expression
deprecated: false
hidden: false
metadata:
  title: ''
  description: ''
  robots: noindex
next:
  description: ''
---
Formula columns allow you to generate values from an expression.\
For example, you may wish to concatenate first and last names.

Just like with the other data types, start by creating a new column. Select Formula and you will be presented with a textbox. Use Handlebars to construct the expression you are interested in and hit the Save Column button.

If you want some assistance when writing your expression you can click the lightning bolt icon to the right of the formula field. This will open a modal where you can select the fields and handlebars expressions you want directly.

![](https://files.readme.io/b39a364-formula.png "formula.png")

 

## Static formulas

The default type of formula is **Dynamic**, which means the formula will be calculated every time data is *read*. 

Static formulas on the other hand are calculated and every time a row is *created* or *updated*. Additionally, the static formulas values are themselves saved into the <Glossary>Budibase DB</Glossary> which allows them to be used for [filtering](doc:searchfilter-data).

External databases only support dynamic formulas.

<Image alt="Saving a 'Static' formula" align="center" src="https://files.readme.io/46205c6-Screenshot_2023-09-05_at_08.50.44.png">
  Saving a 'Static' formula
</Image>

## Fields from relationships

A common use case for formulas is to access fields from a linked table.\
For example, you may have one manufacturer for many products, and in your products table you wish to display the manufacturers industry. 

To do this, create a formula column in the products table and then grab the Industry field from the first linked manufacturer:

![](https://files.readme.io/e56ee86-Screenshot_2022-04-14_at_22.22.32.png "Screenshot 2022-04-14 at 22.22.32.png")

![](https://files.readme.io/c53de1b-Screenshot_2022-04-14_at_22.26.08.png "Screenshot 2022-04-14 at 22.26.08.png")

 

## Tutorial: Test scores using sum

Show the total score of a test by summing each of the question scores. 

#### Steps

1. Create a 'Questions' table and a 'Tests' table. 
2. Establish a One Test -> Many Questions relationship.
3. Add a *Number* type column named 'Points' to the 'Questions' table. 

![](https://files.readme.io/54ffa6f-Screenshot_2022-05-16_at_13.43.03.png "Screenshot 2022-05-16 at 13.43.03.png")

4. In the 'Tests' table, create a new *Formula* column named 'Total'. Enter the binding:

```text
{{ sum (pluck Questions 'Points') }}
```

The first handle bar expression to get evaluated is the **pluck** function. This takes the array of related *Questions* and maps it to an array of their 'Points' values.\
Then the sum function simply adds up each value from that array of points. 

The equivalent in JavaScript is: 

```javascript
return $("Questions").map(q => q.Points).reduce((a, b) => a + b)
```

![](https://files.readme.io/754396b-Screenshot_2022-05-16_at_13.52.26.png "Screenshot 2022-05-16 at 13.52.26.png")

> 📘 Number typing
>
> If you want to numerically sort on a formula field or use numeric operators in a filter for a static formula field, then you must use JavaScript bindings.\
> Handlebars always return a string type.
