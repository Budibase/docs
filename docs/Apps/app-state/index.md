---
title: App state
excerpt: ''
deprecated: false
hidden: false
metadata:
  title: ''
  description: ''
  robots: index
next:
  description: ''
  pages:
    - type: basic
      slug: searchfilter-data
      title: Adding filtering
---
App state stores values that can be read and updated anywhere in your app.

Use it when you need to carry data between components, screens, or navigation events.

## Set a value

Use the `Update state` action to create or change a state value.

Each state entry has:

* A key, which is the name you reference elsewhere
* A value, which can be static or bound to another source

## Use app state

Once a value exists, reference it through the `State` binding namespace.

Common uses include:

* Passing the selected row into a form or side panel
* Storing a temporary selection while a user moves through a multi-step form
* Showing or hiding components based on a user choice

## Persist a value

Enable persistence when the value should survive reloads. Budibase stores persisted state in the user's browser.

## Delete a value

Delete a state value when it is no longer needed. This removes the stored value and clears any persisted copy.

## Related guide

* [State explorer interface](doc:state-explorer-interface)
