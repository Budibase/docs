---
title: Candlestick Chart
excerpt: ''
deprecated: false
hidden: false
metadata:
  title: ''
  description: kba_5h8n6
  robots: index
next:
  description: ''
---
Use a candlestick chart to display open, close, high, and low values over time.

This chart is commonly used for financial data.

## Setup

1. Add a [Data provider](doc:data-provider)
2. Add a Candlestick chart inside the provider
3. Select the provider in the chart settings
4. Choose the date column
5. Map the open, close, high, and low columns

## Data requirements

Candlestick charts need:

* A date column
* Open
* Close
* High
* Low

All numeric fields must contain values that can be converted to numbers.

## Settings

Common settings include:

* Provider
* Format
* X-axis and Y-axis labels
* Width and height
* Animate

## Color behavior

The chart uses one color when the close is lower than the open and another when the close is higher.
