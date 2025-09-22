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

Click on the navigation icon in the <Glossary>Component Tree</Glossary> to access the navigation settings.

<Image align="center" src="https://files.readme.io/e28f987-nav.png" />

 The list of properties that can be changed for the navigation bar are displayed in the table below.

<Table align={["left","left","left"]}>
  <thead>
    <tr>
      <th>
        Name
      </th>

      <th>
        Description
      </th>

      <th>
        Visual
      </th>
    </tr>
  </thead>

  <tbody>
    <tr>
      <td>
        Position
      </td>

      <td>
        Will anchor the nav bar to the top or left hand side of the page.
      </td>

      <td>
        <img src="https://files.readme.io/24f5251-Screenshot_2022-07-08_at_14.36.28.png" />
      </td>
    </tr>

    <tr>
      <td>
        Sticky header
      </td>

      <td>
        *Top anchored nav bar only.*  

        When scrolling down the page, the nav bar will remain visible at the top of the page.
      </td>

      <td>
        <img src="https://files.readme.io/83fcab0-Screenshot_2022-07-08_at_14.36.42.png" />
      </td>
    </tr>

    <tr>
      <td>
        Width
      </td>

      <td>
        *Top anchored nav bar only.*  

        The width of the nav bar content.
      </td>

      <td>
        <img src="https://files.readme.io/29ba9a2-Screenshot_2022-07-08_at_14.38.55.png" />
      </td>
    </tr>

    <tr>
      <td>
        Title
      </td>

      <td>
        Show/Hide the specified nav bar title.
      </td>

      <td>
        <img src="https://files.readme.io/0baf7c1-Screenshot_2022-07-08_at_14.37.45.png" />
      </td>
    </tr>

    <tr>
      <td>
        Background color
      </td>

      <td>
        The background color of the nav bar.
      </td>

      <td>
        <img src="https://files.readme.io/8f10888-Screenshot_2022-07-08_at_14.38.13.png" />
      </td>
    </tr>

    <tr>
      <td>
        Text color
      </td>

      <td>
        The color of the nav bar title and links.
      </td>

      <td>
        <img src="https://files.readme.io/4a55201-Screenshot_2022-07-08_at_14.38.37.png" />
      </td>
    </tr>
  </tbody>
</Table>

Below is a video that shows how each of the settings present in your app.

<HTMLBlock>{`
<iframe src="https://player.vimeo.com/video/728146504?h=a07b1bf96d" width="640" height="332" frameborder="0" allow="autoplay; fullscreen; picture-in-picture" allowfullscreen></iframe>
`}</HTMLBlock>

By default the navigation bar is visible for all [Screens](doc:screens), however it can be turned on a per screen basis.

![](https://files.readme.io/50638a8-Screenshot_2022-07-08_at_15.13.41.png "Screenshot 2022-07-08 at 15.13.41.png")

## Configure links

The links shown in your navigation bar can be configured in the navigation panel by clicking on the 'Navigation' icon in the <Glossary>Component Tree</Glossary> and then the `Configure links` button in the <Glossary>Settings Panel</Glossary>.

<Image align="center" src="https://files.readme.io/eab2234-configure_links.png" />

This will bring up a drawer from which you can specify the names of the links, the path and minimum user role to see the link.

The links can be external URLs, or they can be screen paths selectable from the dropdown menus. 

<img src="https://files.readme.io/59d6210-Screenshot_2022-07-08_at_15.47.28.png" />

The minimum [user app role](https://docs.budibase.com/docs/user-roles#app-specific-roles) will ensure that only authorised users will see particular navigation links.\
By default the minimum role is **public**.

## Logo

By default the navigation bar will show the Budibase logo, but there are a number of settings available to customise this under the *Logo* section of the navigation settings.

<Image alt="Default logo settings" align="center" src="https://files.readme.io/8ecebe2-default_logo_settings.png">
  Default logo settings
</Image>

<Table align={["left","left"]}>
  <thead>
    <tr>
      <th>
        Name
      </th>

      <th>
        Description
      </th>
    </tr>
  </thead>

  <tbody>
    <tr>
      <td>
        Show logo
      </td>

      <td>
        Toggle off to hide the logo from the nav-bar.
      </td>
    </tr>

    <tr>
      <td>
        Logo image URL
      </td>

      <td>
        Allows you to replace the Budibase logo with a custom image.
      </td>
    </tr>

    <tr>
      <td>
        Logo link URL
      </td>

      <td>
        If provided, turns your logo into a hyperlink.\
        This can be a screen (such as Home), or to an external webpage.
      </td>
    </tr>

    <tr>
      <td>
        New tab
      </td>

      <td>
        Logo hyperlinks will be opened in a new tab.
      </td>
    </tr>
  </tbody>
</Table>
