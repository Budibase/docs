---
title: Grid (Beta)
excerpt: ''
deprecated: false
hidden: true
metadata:
  title: ''
  description: ''
  robots: noindex
next:
  description: ''
---
The grid component is an alternative to [containers](https://docs.budibase.com/docs/container) for laying out content on your screens. Grids allow you to drag and position components exactly where you want them to go, without needing to think out layout direction and alignment.

![](https://files.readme.io/7335773-image.png)

### Grid layout and resizing

Components that you place inside grids can be dragged around and positioned wherever you like. They can also be resized by dragging the resize anchors available on all corners and edges of your components.

![](https://files.readme.io/a8d4b12-image.png)

### Grid settings

The grid component only has 2 settings - the number of rows and the number of columns. Both of these are configurable from 1 to 32. Larger numbers of rows and columns allow you to be more granular with your layouts and sizes.

![](https://files.readme.io/89c00be-image.png)

### Child components

To ensure a smooth design experience, only certain components can be placed directly inside grids. Those components are [containers](https://docs.budibase.com/docs/container) and [blocks](https://docs.budibase.com/docs/blocks). To nest other components inside a grid, first place them inside a container. You can then use the normal layout experience with containers to configure your alignment and direction, but the container component itself can be dragged around inside the grid, and resized as you see fit.
