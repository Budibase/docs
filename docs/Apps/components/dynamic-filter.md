---
title: Dynamic filter
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
The Dynamic Filter component is a powerful tool that allows you to filter data from your [Data Provider's](doc:data-provider) data set. This is accessible in both Data View and Design View, making it highly versatile for customising your Budibase app to display relevant data effectively.

## Data view

You can no longer apply filters to the base table. Instead, you must create a view to apply filters to. To help you quickly locate specific data, the Data View in your Budibase app includes a Filter button at the top right of each view. Clicking this button opens the Dynamic Filter, allowing you to apply advanced filtering criteria to data within your views for faster, more targeted access.

<Image align="center" src="https://files.readme.io/b7f971362eb283ae9ac542d02ea3c9f9b64156ae2ff5967a778f6ec9eb8b332b-Screenshot_2025-09-04_at_12.07.56.png" />

## Adding and Configuring Filters

To add a filter, click the "Filter" button and Add Filter button. This will open a context menu, allowing you to customise your filters to display your data. 

![](https://files.readme.io/9252ad87540fb45a964a1d495c4c7c120925838e1363917127630b85a22c6276-image.png)

You can then add a filter-group. In many cases, a single group is all that is required, but multiple filter groups can be added as needed. Inside a filter group, specific filters can be added

![](https://files.readme.io/4bf5a5d69423319156939c604fabe3b64972891ef715ea78714c708c75631591-image.png)

With the setting "When *Any* of the following filters are matched" in this setup will fetch anyone from the Employees table who has either Manager or Senior in their Employee Level. Switching this to "When *All* of the following filters are matched" will return only rows that contain both Senior *and* Manager.

An additional filter group could be added in order to find more rows with completely independant properties. The settings below will find anyone who has both "Senior" and "Manager" in the Employee Level column, or anyone who is in Aberdeen or Edinburgh.

![](https://files.readme.io/812a26999be346d56a86373600fec6c697d3220c48fec5eace430ad9f7c861b5-image.png)

Lastly - it is important to determine what should happen when there are no rows matching the filters; selecting "All rows" will return everything, as though there were no filters imposed at all. Returning "No rows" will return *nothing*. 

![](https://files.readme.io/27d9982f82b5df3bd25b5ba4a6c1e0c75b587f50849513c651115c1f4772a65c-image.png)

<br />

<br />

## Design view

The Dynamic Filter component functions the same way in Design View as in Data View but offers additional flexibility when used alongside the [Data Provider's](doc:data-provider) component. 

### Quick setup process

* Add a Card Block component and then eject it to enable customisation.
* Add the Dynamic Filter as a child component within the [ Data Provider's](doc:data-provider) component
* Users can then configure the filters accordingly and pull out relevant information they require

This dynamic approach makes it easy to customise data display based on complex filtering conditions, whether working in Data View or Design View.

<Image align="center" src="https://files.readme.io/2a96244cf138d724f64e8fab8ff67d99ceeb193d91e76c4b4a2c95b66b27e683-Screen_Recording_2025-09-04_at_14.19.24.gif" />
