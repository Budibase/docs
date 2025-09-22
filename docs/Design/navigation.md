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

<Image align="center" src="https://files.readme.io/3a5625a60af07e88f437cffff7d08c616b94deb8adf0f83a4fd0a11aadb93bb1-Screen_Recording_2024-11-05_at_13.36.54.gif" />

By default the navigation bar is visible for all [Screens](doc:screens), however it can be turned on a per screen basis.

<Image align="center" src="https://files.readme.io/8f7fb9284da29fdcce5b54993c20e70fea1f5d839a57c0ba4a6cef44d8c6cc2e-Screenshot_2024-08-28_at_08.46.37.png" />

## Configure links

The links shown in your navigation bar can be configured in the navigation panel by clicking on the 'Navigation' icon in the <Glossary>Component Tree</Glossary> and then clicking the add new nav item button in the <Glossary>Settings Panel</Glossary>.

<Image align="center" src="https://files.readme.io/646cde9-Screenshot_2024-04-16_at_12.11.01.png" />

This will add a new navigation item under any existing ones. This will default to the name `Nav Item`. With basic role permissions attached to the navigation item.

You can customise various elements such as the text, link (External links or linking to internal screens), role permissions, or deciding whether a nav item is a single link or opens up a modal which contains sub-links. These can all be modified by clicking on the specific nav item you wish to amend.

<Image align="center" src="https://files.readme.io/81a899b-Screenshot_2024-04-16_at_12.24.23.png" />

### Sub links

If you select `Open sub links` as the option for nav item. The link field will be changed to a button. When clicked this  will open a drawer that allows you to add, update and delete sub navigation links related to the parent nav item.

<br />

<Image align="center" src="https://files.readme.io/af2ddf2-Screenshot_2024-04-16_at_12.48.11.png" />

You can begin adding sub-links by clicking the `+ Add link` button. Feel free to add as many sub-links as you need, each with its own name. Just like the parent navigation items, these sub-links can direct users externally (e.g., to Google.com) or internally within your app. Additionally, the role permissions for these sub-links automatically inherit those of the parent navigation item.

<Image align="center" src="https://files.readme.io/30d8c14-Screenshot_2024-04-16_at_12.54.08.png" />

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
