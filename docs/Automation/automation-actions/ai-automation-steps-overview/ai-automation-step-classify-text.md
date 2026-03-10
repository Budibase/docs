---
title: Classify text
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
The Classify Text step takes an input string and assigns it to one of several categories you define. It is useful for routing, tagging, or filtering content.

> 📘 You need to [enable AI](doc:quickstart-budibase-ai) to use this feature.

## Example use cases

* Categorising customer feedback as Positive, Negative, or Neutral.
* Sorting incoming support requests into Billing, Technical, or Account.
* Auto-tagging product descriptions by department.

## Inputs

* Text (required) - The text you want to classify.
* Categories (required) - A list of possible categories (e.g., “Bug Report”, “Feature Request”, “Other”).

### Example

<Image align="center" src="https://files.readme.io/43a463ec562e0ac01e28fde5edd8576334acb45133077f5f605ed248464db56a-Screenshot_2025-08-14_at_11.45.21.png" />

## Output

The category that best matches your input text.
