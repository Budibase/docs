---
title: Using sections
excerpt: ''
deprecated: false
hidden: false
metadata:
  title: ''
  description: ''
  robots: noindex
next:
  description: ''
---
A section [component](doc:custom-component) allows you to layout nested components in a variety of ways. 

[block:image]
{
  "images": [
    {
      "image": [
        "https://files.readme.io/471fcc8-Screenshot_2023-01-30_at_13.25.44.png",
        null,
        null
      ],
      "align": "center",
      "caption": "Adding a section"
    }
  ]
}
[/block]



The <<glossary:Settings Panel>> allows you to select the layout type of the section. A _Type_ button will display the currently selected type, with the default set to _Main with Sidebar_.

[block:image]
{
  "images": [
    {
      "image": [
        "https://files.readme.io/913dd55-Screenshot_2023-01-30_at_13.45.43.png",
        null,
        null
      ],
      "align": "center",
      "caption": "Default new section"
    }
  ]
}
[/block]



Click the  type button to choose from a selection of layouts.

![](https://files.readme.io/8802e1e-Screenshot_2023-01-30_at_13.21.23.png)



Sections are particularly useful when [Repeating](doc:repeater) over data, for example a movies database.

![](https://files.readme.io/ebaf6f8-Screenshot_2023-01-30_at_13.56.49.png)

In this case, we are using a [Repeater block](https://docs.budibase.com/docs/blocks#repeater-block) to loop over each movie in our database, and adding a section for each. The sidebar holds the movie icon, and the main section holds a [Container](doc:container) for our [headline and paragraph](doc:displaying-text). The container is crucial here, as a _Sidebar with Main_ section expects two child components (not three). 



## Three columns example

In this example, you may have a **Tasks** table with a status containing one of three statuses. 

![](https://files.readme.io/9f5b6a6-Screenshot_2023-01-30_at_14.02.06.png)

Unlike the previous example which had the repeater block outside of the section, we will now have a [filtered](doc:searchfilter-data) repeater block for each status, within each column of the section.

To start, add a section component of type `Three columns`.

![](https://files.readme.io/0ace77e-Screenshot_2023-01-30_at_14.07.10.png)



Next add a container to the section. Within the container, add a headline for the status, i.e. _New_, and add a repeater block for the **Tasks** table. 

Click `Define filters` and add a filter to match the status against _New_. Make sure to click `Save`!

![](https://files.readme.io/4e9e35f-Screenshot_2023-01-30_at_14.10.34.png)

To complete this column, nest a [Stat Card](doc:stat-card) within the repeater block, and use the name field <<glossary:Binding>>. 

![](https://files.readme.io/870e61b-Screenshot_2023-01-30_at_14.16.29.png)



Finally, we want to add task cards for the remaining two columns. To make this process much faster, click on the ellipsis beside 'New Container' in the component tree and click `Duplicate`.

[block:image]
{
  "images": [
    {
      "image": [
        "https://files.readme.io/4c587f8-Screenshot_2023-01-30_at_14.18.26.png",
        null,
        null
      ],
      "align": "center",
      "caption": "Duplicating the New Container"
    }
  ]
}
[/block]



Change the headline to the correct status, and update the repeater block filter. Duplicate once more for the third and final column.

#### Result

![](https://files.readme.io/b2c5c0c-Screenshot_2023-01-30_at_14.22.17.png)