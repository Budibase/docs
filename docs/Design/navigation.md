---
title: Navigation
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
The navigation section of the design tab allows you position and style the app navigation bar as well as the available navigation links.

## Settings

Click on the navigation icon in the <<glossary:Component Tree>> to access the navigation settings.

[block:image]
{
  "images": [
    {
      "image": [
        "https://files.readme.io/e28f987-nav.png",
        "Screenshot 2022-07-08 at 14.35.46.png",
        ""
      ],
      "align": "center"
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
    "h-2": "Visual",
    "0-0": "Position",
    "0-1": "Will anchor the nav bar to the top or left hand side of the page.",
    "0-2": "<img src=\"https://files.readme.io/24f5251-Screenshot_2022-07-08_at_14.36.28.png\" />",
    "1-0": "Sticky header",
    "1-1": "_Top anchored nav bar only._  \n  \nWhen scrolling down the page, the nav bar will remain visible at the top of the page.",
    "1-2": "<img src=\"https://files.readme.io/83fcab0-Screenshot_2022-07-08_at_14.36.42.png\" />",
    "2-0": "Width",
    "2-1": "_Top anchored nav bar only._  \n  \nThe width of the nav bar content.",
    "2-2": "<img src=\"https://files.readme.io/29ba9a2-Screenshot_2022-07-08_at_14.38.55.png\" />",
    "3-0": "Title",
    "3-1": "Show/Hide the specified nav bar title.",
    "3-2": "<img src=\"https://files.readme.io/0baf7c1-Screenshot_2022-07-08_at_14.37.45.png\" />",
    "4-0": "Background color",
    "4-1": "The background color of the nav bar.",
    "4-2": "<img src=\"https://files.readme.io/8f10888-Screenshot_2022-07-08_at_14.38.13.png\" />",
    "5-0": "Text color",
    "5-1": "The color of the nav bar title and links.",
    "5-2": "<img src=\"https://files.readme.io/4a55201-Screenshot_2022-07-08_at_14.38.37.png\" />"
  },
  "cols": 3,
  "rows": 6,
  "align": [
    "left",
    "left",
    "left"
  ]
}
[/block]


Below is a video that shows how each of the settings present in your app.

[block:html]
{
  "html": "<iframe src=\"https://player.vimeo.com/video/728146504?h=a07b1bf96d\" width=\"640\" height=\"332\" frameborder=\"0\" allow=\"autoplay; fullscreen; picture-in-picture\" allowfullscreen></iframe>"
}
[/block]


By default the navigation bar is visible for all [Screens](doc:screens), however it can be turned on a per screen basis.

![](https://files.readme.io/50638a8-Screenshot_2022-07-08_at_15.13.41.png "Screenshot 2022-07-08 at 15.13.41.png")

## Configure links

The links shown in your navigation bar can be configured in the navigation panel by clicking on the 'Navigation' icon in the <<glossary:Component Tree>> and then the `Configure links` button in the <<glossary:Settings Panel>>.

[block:image]
{
  "images": [
    {
      "image": [
        "https://files.readme.io/eab2234-configure_links.png",
        "Screenshot 2022-07-08 at 15.17.17.png",
        ""
      ],
      "align": "center"
    }
  ]
}
[/block]


This will bring up a drawer from which you can specify the names of the links, the path and minimum user role to see the link.

The links can be external URLs, or they can be screen paths selectable from the dropdown menus. 

<img src="https://files.readme.io/59d6210-Screenshot_2022-07-08_at_15.47.28.png" />

The minimum [user app role](https://docs.budibase.com/docs/user-roles#app-specific-roles) will ensure that only authorised users will see particular navigation links.  
By default the minimum role is **public**.

## Logo

By default the navigation bar will show the Budibase logo, but there are a number of settings available to customise this under the _Logo_ section of the navigation settings.



[block:image]
{
  "images": [
    {
      "image": [
        "https://files.readme.io/8ecebe2-default_logo_settings.png",
        "",
        ""
      ],
      "align": "center",
      "caption": "Default logo settings"
    }
  ]
}
[/block]




[block:parameters]
{
  "data": {
    "h-0": "Name",
    "h-1": "Description",
    "0-0": "Show logo",
    "0-1": "Toggle off to hide the logo from the nav-bar.",
    "1-0": "Logo image URL",
    "1-1": "Allows you to replace the Budibase logo with a custom image.",
    "2-0": "Logo link URL",
    "2-1": "If provided, turns your logo into a hyperlink.  \nThis can be a screen (such as Home), or to an external webpage.",
    "3-0": "New tab",
    "3-1": "Logo hyperlinks will be opened in a new tab."
  },
  "cols": 2,
  "rows": 4,
  "align": [
    "left",
    "left"
  ]
}
[/block]