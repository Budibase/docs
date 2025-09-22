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
The Dynamic filter component allows you to filter on the [Data Provider's](doc:data-provider) data-set, the Dynamic filter is one of the few components which is used both in the data and design view.

## Data view

To make it easier for you to find specific data, your Budibase app's Data view has a filter button at the top right of the table. Clicking on it will open the dynamic filter component, this allows you to filter the data in the tables. This way, you can quickly access the information you need right now.

![Dynamic filter in the data view area of your Budibase app.](https://files.readme.io/237ea20-Data_View_Dynamic_Filter.png)

## Adding a filter

In the above image, in order to add a filter all you need to do is click the **Add Filter** button. This should generate two separate areas.

![Layout for filters whenever the add filter button is clicked.](https://files.readme.io/8b655b8-Filters_layout.png)

### Behaviour

This area has two different selectable options: **Match all filters** and **Match any filters**

- **Match all filters** will provide results that match all filters listed. If some of the data fails to match one of the filters it won't appear as part of the results
- **Match any filters** will provide results that match any of the filters. This means that if some data matches one of your filters it will show within the results.

### Filters

In the filters area its split into 3 different input fields.

- Column select, here you choose which column within the table you wish to apply the dynamic filter to.  
  ![](https://files.readme.io/fb84434-columns_in_dynamic_filter.png)
- The next selectable is the operator, these are pretty self explanatory. (The name describes their purpose)  
  ![](https://files.readme.io/88e83ea-operators_dropdown.png)
- The last input field is the value you search against. (An example of this in action can be seen in the gif below.)  
  ![Gif showing the dynamic filter in action.](https://files.readme.io/5e5c1f4-Dynamic_Filtering.gif)

## Design view

The Dynamic filter works in the exact same way as described in the Data view for the the Design view. The only difference being, you have to set it up along side a [Data Provider's](doc:data-provider). It is extremely powerful as you have control over what statements and conditions to use, making it very customisable. This makes it extremely easy to get the data you need quickly.

The Dynamic filter can be used with a variety of different components, however for this it will main be focused towards the [Table Block](doc:table-block) component, as it will allow for the fastest way to set this up.

### Setup

- For fast setup add the [Table Block](doc:table-block) component and then eject
- Then add the Dynamic Filter as a child of the [ Data Provider's](doc:data-provider) component
- From here you should be all set to start using the Dynamic filter to start filtering the data on the table

![Speed run attempt at adding a dynamc filter](https://files.readme.io/472d808-Sub_20_speedrun_dynamic_filter.gif)