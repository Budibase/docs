---
title: Designing for mobile
excerpt: Learn how to design Budibase apps that look great on mobile.
deprecated: false
hidden: false
metadata:
  title: ''
  description: kba_5haki
  robots: index
next:
  description: ''
---
Budibase apps can adapt to desktops, tablets, and mobile devices. Use the settings below to adjust layouts for smaller screens.

## Key responsive settings and defaults

### Breakpoints

Breakpoints are the screen sizes where your app switches layout. Budibase includes default breakpoints that you cannot edit.

<Image align="center" src="https://files.readme.io/a881b5b71b08ee02b3fb6b0c218640cbe8f9e54d7f1c0e0d0989da4ddfed644a-Screen_Recording_2025-08-18_at_13.43.26.gif" />

### Flexbox

Flexbox arranges items in rows or columns. Use the [Container](doc:container) component to control flex behavior.

### Flex wrap

`flex-wrap` lets items wrap onto multiple lines instead of staying on one line. Use it when cards or other components need to stack on smaller screens.

<Image title="CleanShot 2022-04-20 at 11.02.47.gif" alt={1200} align="center" src="https://files.readme.io/9da677e6188c355962dfbee1d5e55f7cb1c6b5ecc7559b4249f02b4f0d948e16-Screen_Recording_2025-08-18_at_14.13.10.gif">
  flex wrap in budibase
</Image>

### Grid Layout

Grid layout lets you place components independently of the other elements on the screen.

<Image align="center" src="https://files.readme.io/816ec2c969bd7702607d46b79e7f77457269675ac5f893016080531438c702fe-Screen_Recording_2024-09-03_at_11.35.02.gif" />

### Update a component's setting based on the device

You can conditionally update a component setting based on the device. For example, set labels to display to the left on desktop and above on mobile.

### Hamburger menu

A hamburger menu saves space in restricted layouts. If you use side navigation or top navigation, Budibase adds the menu automatically on mobile devices.

<Image align="center" src="https://files.readme.io/67d111e61be2bc70480e5154c8a15a56801c45043673ce7f70d7fad04aa0e927-Screen_Recording_2024-09-03_at_11.24.50.gif" />
