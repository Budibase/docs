---
title: Navigation
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
The navigation section of the design tab allows you position and style the app navigation bar as well as the available navigation links.
[block:api-header]
{
  "title": "Settings"
}
[/block]
Click on the navigation 'link' icon on the left hand pane to access the navigation settings.
[block:image]
{
  "images": [
    {
      "image": [
        "https://files.readme.io/f181231-Screenshot_2022-07-08_at_14.35.46.png",
        "Screenshot 2022-07-08 at 14.35.46.png",
        137,
        50,
        "#393939"
      ]
    }
  ]
}
[/block]
 The list of properties that can be changed for the navigation bar are displayed in the table below.
[block:parameters]
{
  "data": {
    "h-0": "Name",
    "h-1": "Description",
    "0-0": "Position",
    "0-1": "Will anchor the nav bar to the top or left hand side of the page.",
    "h-2": "Visual",
    "1-0": "Sticky header",
    "1-1": "*Top anchored nav bar only.*\n\nWhen scrolling down the page, the nav bar will remain visible at the top of the page.",
    "2-1": "*Top anchored nav bar only.*\n\nThe width of the nav bar content.",
    "2-0": "Width",
    "3-0": "Logo",
    "3-1": "*Default is Budibase logo.*\n\nShow/Hide the specified logo.",
    "4-0": "Title",
    "4-1": "Show/Hide the specified nav bar title.",
    "5-0": "Background color",
    "5-1": "The background color of the nav bar.",
    "6-0": "Text color",
    "6-1": "The color of the nav bar title and links.",
    "0-2": "<img src=\"https://files.readme.io/24f5251-Screenshot_2022-07-08_at_14.36.28.png\" />",
    "6-2": "<img src=\"https://files.readme.io/4a55201-Screenshot_2022-07-08_at_14.38.37.png\" />",
    "5-2": "<img src=\"https://files.readme.io/8f10888-Screenshot_2022-07-08_at_14.38.13.png\" />",
    "4-2": "<img src=\"https://files.readme.io/0baf7c1-Screenshot_2022-07-08_at_14.37.45.png\" />",
    "3-2": "<img src=\"https://files.readme.io/7fe8e0d-Screenshot_2022-07-08_at_14.37.07.png\" />",
    "2-2": "<img src=\"https://files.readme.io/29ba9a2-Screenshot_2022-07-08_at_14.38.55.png\" />",
    "1-2": "<img src=\"https://files.readme.io/83fcab0-Screenshot_2022-07-08_at_14.36.42.png\" />"
  },
  "cols": 3,
  "rows": 7
}
[/block]
Below is a video that shows how each of the settings present in your app.
[block:html]
{
  "html": "<iframe src=\"https://player.vimeo.com/video/728146504?h=a07b1bf96d\" width=\"640\" height=\"332\" frameborder=\"0\" allow=\"autoplay; fullscreen; picture-in-picture\" allowfullscreen></iframe>"
}
[/block]
By default the navigation bar is visible for all [Screens](doc:screens), however it can be turned on a per screen basis.
[block:image]
{
  "images": [
    {
      "image": [
        "https://files.readme.io/50638a8-Screenshot_2022-07-08_at_15.13.41.png",
        "Screenshot 2022-07-08 at 15.13.41.png",
        1275,
        312,
        "#7a7a7a"
      ]
    }
  ]
}
[/block]

[block:api-header]
{
  "title": "Configure links"
}
[/block]
The links shown in your navigation bar can be configured in the navigation panel by clicking on 'Configure links'.
[block:image]
{
  "images": [
    {
      "image": [
        "https://files.readme.io/7b3eaa8-Screenshot_2022-07-08_at_15.17.17.png",
        "Screenshot 2022-07-08 at 15.17.17.png",
        303,
        236,
        "#222c37"
      ]
    }
  ]
}
[/block]
This will bring up a drawer from which you can specify the names of the links, the path and minimum user role to see the link.

The links can be external URLs, or they can be screen paths selectable from the dropdown menus. 

<img src="https://files.readme.io/59d6210-Screenshot_2022-07-08_at_15.47.28.png" />

The minimum [user app role](https://docs.budibase.com/docs/user-roles#app-specific-roles) will ensure that only authorised users will see particular navigation links. 
By default the minimum role is **public**.