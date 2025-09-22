---
title: Map
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
With the Map component, you are able to display an interactive map in any of your apps. It allows you to quickly embed a map, *and* gives you the ability to quickly display hundreds of markers on the map straight from any <<glossary:Data Sources>> you have access to.
[block:image]
{
  "images": [
    {
      "image": [
        "https://files.readme.io/19b09e3-map.jpg",
        "map.jpg",
        1000,
        676,
        "#d3dacd"
      ]
    }
  ]
}
[/block]
The map component supports creating markers with latitude/longitude bindings through a [Data Provider](doc:data-provider). 
[block:api-header]
{
  "title": "Adding a map to your UI"
}
[/block]
To add a map to your UI, you need to: 
- add a [Data Provider](doc:data-provider)
- Add your Map component to this by clicking `Component > Elements > Embedded Map`
The new map will immediately display a map of London.
[block:image]
{
  "images": [
    {
      "image": [
        "https://files.readme.io/cdf037d-new-map.png",
        "new-map.png",
        872,
        375,
        "#d9dad2"
      ]
    }
  ]
}
[/block]
From now, you can start to configure your map to your liking.
[block:api-header]
{
  "title": "Display markers on the map"
}
[/block]
To display markers on the map, all you need to do is link up the parent [Data Provider](doc:data-provider) with the Embed Map. Select the correct provider in the <<glossary:Settings Panel>>, then select the column containing the latitudes in the `Latitude key` setting, and lastly, the Longitudes in the `Longitude key` setting.

Once you've selected all three of those settings, you should see the map rerender with the markers in view, and the markers should be rendered directly.
[block:image]
{
  "images": [
    {
      "image": [
        "https://files.readme.io/d7f90b2-map-binding.png",
        "map-binding.png",
        241,
        277,
        "#212121"
      ]
    }
  ]
}
[/block]
To also add a title to every marker, you can select the `Title key` setting in the <<glossary:Settings Panel>>. This title will appear when you click a marker.
[block:api-header]
{
  "title": "Enable clicking on markers"
}
[/block]
If you want to act on clicks on the markers, you can define [Actions](doc:actions) by clicking on the `Define actions` button labeled `On Click Marker` in the <<glossary:Settings Panel>>. This will show an [Actions](doc:actions) modal where you can customize your actions. 

One of the [Bindings](doc:bindings) available to you is the `Clicked marker` object, which contains the data of the row of the table you've selected in the [Data Provider](doc:data-provider).

A quick way to go from the map to a modal with a detail screen would be something like below.
[block:image]
{
  "images": [
    {
      "image": [
        "https://files.readme.io/ba06d73-map-goto-detail.png",
        "map-goto-detail.png",
        977,
        203,
        "#1f2021"
      ]
    }
  ]
}
[/block]

[block:api-header]
{
  "title": "Enable creating markers"
}
[/block]
If you want your users to be able to create new markers directly on the map, you can enable the `Enable creating markers` setting in the <<glossary:Settings Panel>>.
[block:image]
{
  "images": [
    {
      "image": [
        "https://files.readme.io/7c67c8a-enable-new-markers.png",
        "enable-new-markers.png",
        195,
        117,
        "#252526"
      ]
    }
  ]
}
[/block]
By default all this does, is enable the option to click on the map where there isn't a marker currently, and a new marker will be added on click, and show the `New Marker` popover, like below.
[block:image]
{
  "images": [
    {
      "image": [
        "https://files.readme.io/882886f-new-marker-on-map.png",
        "new-marker-on-map.png",
        199,
        135,
        "#d5d7c5"
      ]
    }
  ]
}
[/block]
Once the marker appears, two buttons will appear below the map, allowing the user to click the `Create Marker` button. See the quick video below. 

**Please be aware that the Create Marker buttons will only appear when you click the map.** 

[block:html]
{
  "html": "<div style=\"padding:56.25% 0 0 0;position:relative;\"><iframe src=\"https://player.vimeo.com/video/696463040?h=f2f989ec20&amp;badge=0&amp;autopause=0&amp;player_id=0&amp;app_id=58479\" frameborder=\"0\" allow=\"autoplay; fullscreen; picture-in-picture\" allowfullscreen style=\"position:absolute;top:0;left:0;width:100%;height:100%;\" title=\"New Recording - 06/04/2022, 10:34:57\"></iframe></div><script src=\"https://player.vimeo.com/api/player.js\"></script>"
}
[/block]
This Create Marker button, by default, does nothing. But you can configure the actions done after clicking through the `Define actions` button displayed below the `Enable creating marker` setting in the <<glossary:Settings Panel>>. This will open up the [Actions](doc:actions) panel where you'll have access to 2 bindings; both latitude and longitude.
[block:api-header]
{
  "title": "Changing the map tileset"
}
[/block]

[block:image]
{
  "images": [
    {
      "image": [
        "https://files.readme.io/802ee54-map-tilesets.jpg",
        "map-tilesets.jpg",
        2214,
        536,
        "#bdbec4"
      ]
    }
  ]
}
[/block]
The rendering of the map is using `LeafletJS` under the hood. Therefore, you can look towards `LeafletJS` for documentation on other tilesets. 

You can find the many more tilesets on the Leaflet-extra's Github page, including a [live interactive demo](https://leaflet-extras.github.io/leaflet-providers/preview/).

The URL for the tilesets can be found inside the code snippet on top. 

The embeddable map is not limited to the tilesets found in the preview page above, however, it is limited to those services that either have no API key requirement or have the ability to provide the API key through the URL.

Once you'll find your tileset, paste it in the `Tile URL` setting in the <<glossary:Settings Panel>>.
[block:callout]
{
  "type": "success",
  "title": "LeafletJS tileset bindings",
  "body": "LeafletJS tilesets have different bindings in the URL, you don't need to change this or replace them, they're part of the format LeafletJS understands. These are bindings like `{x},{y},{z}`. Just copy the URL as presented, and LeafletJS will take care of the rest"
}
[/block]

[block:api-header]
{
  "title": "Further settings"
}
[/block]
Besides the already referenced settings in this article, there are several more you might want to make use of, or understand what it means. You can find all of them in the table below.
[block:parameters]
{
  "data": {
    "h-0": "Setting",
    "h-1": "Description",
    "0-0": "Enable Fullscreen",
    "0-1": "Shows an icon in the top-right corner allowing the user to see the map fullscreen when clicked",
    "1-0": "Enable location",
    "1-1": "Shows an icon in the bottom-right the user can click to display their own location on the map",
    "2-0": "Enable zoom",
    "2-1": "Allows the users to zoom in/out, either through scrolling, double-clicking or through the `+` and `-` buttons on the bottom-right.",
    "3-0": "Default location",
    "3-1": "This is the location the map will focus on when it's empty. Accepted input is `latitude,longitude` with a `.` as decimal marker. Once markers load this will be calculated",
    "4-0": "Default Zoom Level",
    "4-1": "The zoom level the map will be in by default, before markers are loaded. This is a value between 1-100 where 100 is the most zoomed in.",
    "5-0": "Map Attribution",
    "5-1": "The attribution displayed on the map. Usually required in terms when using a map provider."
  },
  "cols": 2,
  "rows": 6
}
[/block]