---
title: Custom CSS
excerpt: ''
deprecated: false
hidden: false
metadata:
  title: ''
  description: kba_5hagy
  robots: index
next:
  description: ''
---
Use custom CSS when you need to override the default styling of a component.

## Add custom CSS to a component

1. Select the component
2. Open the `Styles` tab in the settings panel
3. Select `Edit custom CSS`
4. Enter inline CSS for the component

Custom CSS here applies only to that component.

Selectors are not supported in this field.

## Apply global styles

Use an [Embed](doc:embed) component when you need page-wide CSS selectors.

Add a `<style>` tag inside the Embed component and place it where the styles should load.

## Use bindings

You can use bindings to set CSS values dynamically.

This is useful when styling depends on app state or other runtime values.

## Use conditions

Use [Conditional UI](doc:conditions) when you want to change a setting or hide a component based on logic instead of CSS.
