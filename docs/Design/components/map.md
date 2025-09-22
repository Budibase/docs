---
title: Embedded Map
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
With the Map component, you are able to display an interactive map in any of your apps. It allows you to quickly embed a map, *and* gives you the ability to quickly display hundreds of markers on the map straight from any <Glossary>Data Sources</Glossary> you have access to.

![](https://files.readme.io/19b09e3-map.jpg "map.jpg")

The map component supports creating markers with latitude/longitude bindings through a [Data Provider](doc:data-provider). 

## Adding a map to your UI

To add a map to your UI, you need to: 

* add a [Data Provider](doc:data-provider)
* Add your Map component to this by clicking `Component > Elements > Embedded Map`\
  The new map will immediately display a map of London.

![](https://files.readme.io/cdf037d-new-map.png "new-map.png")

From now, you can start to configure your map to your liking.

## Display markers on the map

To display markers on the map, all you need to do is link up the parent [Data Provider](doc:data-provider) with the Embed Map. Select the correct provider in the <Glossary>Settings Panel</Glossary>, then select the column containing the latitudes in the `Latitude key` setting, and lastly, the Longitudes in the `Longitude key` setting.

Once you've selected all three of those settings, you should see the map rerender with the markers in view, and the markers should be rendered directly.

<Image align="center" src="https://files.readme.io/918aa17184ee3a0a1546e7628977b4547543a9a32871dd2e186b2be5614feaa0-Screenshot_2024-09-27_at_14.10.40.png" />

To also add a title to every marker, you can select the `Title key` setting in the <Glossary>Settings Panel</Glossary>. This title will appear when you click a marker.

## Enable clicking on markers

If you want to act on clicks on the markers, you can define [Actions](doc:actions) by clicking on the `Define actions` button labeled `On Click Marker` in the <Glossary>Settings Panel</Glossary>. This will show an [Actions](doc:actions) modal where you can customize your actions. 

One of the [Bindings](doc:bindings) available to you is the `Clicked marker` object, which contains the data of the row of the table you've selected in the [Data Provider](doc:data-provider).

A quick way to go from the map to a modal with a detail screen would be something like below.

![](https://files.readme.io/ba06d73-map-goto-detail.png "map-goto-detail.png")

## Enable creating markers

If you want your users to be able to create new markers directly on the map, you can enable the `Enable creating markers` setting in the <Glossary>Settings Panel</Glossary>.

![](https://files.readme.io/7c67c8a-enable-new-markers.png "enable-new-markers.png")

By default all this does, is enable the option to click on the map where there isn't a marker currently, and a new marker will be added on click, and show the `New Marker` popover, like below.

![](https://files.readme.io/882886f-new-marker-on-map.png "new-marker-on-map.png")

Once the marker appears, two buttons will appear below the map, allowing the user to click the `Create Marker` button. See the quick video below. 

**Please be aware that the Create Marker buttons will only appear when you click the map.** 

<HTMLBlock>{`
<div style="padding:56.25% 0 0 0;position:relative;"><iframe src="https://player.vimeo.com/video/696463040?h=f2f989ec20&amp;badge=0&amp;autopause=0&amp;player_id=0&amp;app_id=58479" frameborder="0" allow="autoplay; fullscreen; picture-in-picture" allowfullscreen style="position:absolute;top:0;left:0;width:100%;height:100%;" title="New Recording - 06/04/2022, 10:34:57"></iframe></div><script src="https://player.vimeo.com/api/player.js"></script>
`}</HTMLBlock>

This Create Marker button, by default, does nothing. But you can configure the actions done after clicking through the `Define actions` button displayed below the `Enable creating marker` setting in the <Glossary>Settings Panel</Glossary>. This will open up the [Actions](doc:actions) panel where you'll have access to 2 bindings; both latitude and longitude.

## Changing the map tileset

![](https://files.readme.io/802ee54-map-tilesets.jpg "map-tilesets.jpg")

The rendering of the map is using `LeafletJS` under the hood. Therefore, you can look towards `LeafletJS` for documentation on other tilesets. 

You can find the many more tilesets on the Leaflet-extra's Github page, including a [live interactive demo](https://leaflet-extras.github.io/leaflet-providers/preview/).

The URL for the tilesets can be found inside the code snippet on top. 

The embeddable map is not limited to the tilesets found in the preview page above, however, it is limited to those services that either have no API key requirement or have the ability to provide the API key through the URL.

Once you'll find your tileset, paste it in the `Tile URL` setting in the <Glossary>Settings Panel</Glossary>.

> 👍 LeafletJS tileset bindings
>
> LeafletJS tilesets have different bindings in the URL, you don't need to change this or replace them, they're part of the format LeafletJS understands. These are bindings like `{x},{y},{z}`. Just copy the URL as presented, and LeafletJS will take care of the rest

## Further settings

Besides the already referenced settings in this article, there are several more you might want to make use of, or understand what it means. You can find all of them in the table below.

| Setting            | Description                                                                                                                                                                |
| :----------------- | :------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| Enable Fullscreen  | Shows an icon in the top-right corner allowing the user to see the map fullscreen when clicked                                                                             |
| Enable location    | Shows an icon in the bottom-right the user can click to display their own location on the map                                                                              |
| Enable zoom        | Allows the users to zoom in/out, either through scrolling, double-clicking or through the `+` and `-` buttons on the bottom-right.                                         |
| Default location   | This is the location the map will focus on when it's empty. Accepted input is `latitude,longitude` with a `.` as decimal marker. Once markers load this will be calculated |
| Default Zoom Level | The zoom level the map will be in by default, before markers are loaded. This is a value between 1-100 where 100 is the most zoomed in.                                    |
| Map Attribution    | The attribution displayed on the map. Usually required in terms when using a map provider.                                                                                 |
