---
title: Designing for mobile
excerpt: Learn how to design Budibase apps that look great on mobile.
deprecated: false
hidden: false
metadata:
  title: ''
  description: ''
  robots: index
next:
  description: ''
---
Budibase allows you to build apps that look great across multiple devices, including desktops, tablets, and mobile. A few simple techniques that you can use to improve the design and usability of the apps you're building for your team.

<HTMLBlock>{`
<iframe src="https://player.vimeo.com/video/746819287?h=1025690228&title=0&byline=0&portrait=0" style="margin-top: -100px; margin-bottom: -50px;" width="640" height="564" frameborder="0" allow="autoplay; fullscreen" allowfullscreen></iframe>
`}</HTMLBlock>

## Key responsive settings and defaults

### Breakpoints

Breakpoints are the points in screen size or orientation where an app is triggered to adjust its layout. Breakpoints are how we define our app when it's being used on mobile, tablet, or desktop. Budibase comes with default breakpoints. Users cannot edit these breakpoints. You can visualize the breakpoints (and your design) within the design section by selecting the device toggle (see GIF below).

<Image align="center" src="https://files.readme.io/cd665a8d93f1cf6491b5eacebd36806041da7132c047e1a6e5248d81612f9a32-Screen_Recording_2024-09-03_at_11.11.18.gif" />

### Flexbox

Flexbox is a one-dimensional layout method for arranging items in rows or columns. Items flex (expand) to fill additional space or shrink to fit into smaller spaces. Budibase uses flexbox to help users structure their apps. You can access the flexbox properties within the [Container](doc:container) component - your components must be wrapped in a container for Flexbox to arrange your components.

### Flex wrap

The flex-wrap property sets whether flex items are forced onto one line or can wrap onto multiple lines. If wrapping is allowed, it sets the direction in that lines are stacked. So, within Budibase, if you have a row of cards and you select flex-wrap, the cards will 'stack'. In the GIF below, selecting the flex-wrap icon tells the browser to 'wrap' the elements within that container and allow them to stack - therefore free the initial component to take up the remaining space in the row.

<Image title="CleanShot 2022-04-20 at 11.02.47.gif" alt={1200} align="center" src="https://files.readme.io/e54de2a-CleanShot_2022-04-20_at_11.02.47.gif">
  flex wrap in budibase
</Image>

### Grid Layout

Using Grid layout, it is possible to drag-and-drop components into place, independently of other elements on the screen.

<Image align="center" src="https://files.readme.io/816ec2c969bd7702607d46b79e7f77457269675ac5f893016080531438c702fe-Screen_Recording_2024-09-03_at_11.35.02.gif" />

### Update a component's setting based on the device

You can conditionally tell Budibase to update a component's setting if the user is on a particular device. For example, you may want to position your form labels to the left when the user is on desktop and above when on mobile. Here's a quick demonstration:

<HTMLBlock>{`
<div style="padding:56.25% 0 0 0;position:relative;"><iframe src="https://player.vimeo.com/video/701187718?h=e9c3bb6188&amp;badge=0&amp;autopause=0&amp;player_id=0&amp;app_id=58479" frameborder="0" allow="autoplay; fullscreen; picture-in-picture" allowfullscreen style="position:absolute;top:0;left:0;width:100%;height:100%;" title="New Recording - 20/04/2022, 11:34:35"></iframe></div><script src="https://player.vimeo.com/api/player.js"></script>
`}</HTMLBlock>

### Hamburger menu

A hamburger menu is a menu button that enables a drop-down function for navbar links that helps save space in restricted designs. If you use either the side navigation or top navigation layout, Budibase will add a hamburger menu to your app. This is only visible when your users are on a mobile device.

<Image align="center" src="https://files.readme.io/67d111e61be2bc70480e5154c8a15a56801c45043673ce7f70d7fad04aa0e927-Screen_Recording_2024-09-03_at_11.24.50.gif" />
