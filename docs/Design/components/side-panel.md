---
title: Side panel
excerpt: Show/Hide content without a modal screen
deprecated: false
hidden: false
metadata:
  title: ''
  description: ''
  robots: noindex
next:
  description: ''
  pages:
    - type: basic
      slug: app-state
      title: App state
---
A side panel is a special container that slides in from the right hand side when opened. 

You can put any components or blocks that you wish inside a side panel, however it is particularly well suited to form entry. 

<Image alt="Side panel with nested form block" align="center" src="https://files.readme.io/031b547-Screenshot_2022-12-12_at_13.19.04.png">
  Side panel with nested form block
</Image>

<Image alt="App preview of a side panel" align="center" src="https://files.readme.io/2d515b6-Screenshot_2022-12-12_at_13.16.26.png">
  App preview of a side panel
</Image>

### Opening a side panel

Side panels are opened via the **Open Side Panel** [Action](doc:actions). This could be triggered from a button click, or some other event such as on change.

![](https://files.readme.io/e594143-Screenshot_2022-12-12_at_13.47.45.png)

You can choose to open any side panel that is anywhere in the screen component tree.

### Closing a side panel

A side panel can be closed by a user simply clicking an area outside of the panel, or by clicking the close arrow.

<Image alt="Close side panel" align="center" src="https://files.readme.io/ba370c4-Screenshot_2022-12-12_at_13.50.02.png">
  Close side panel
</Image>

Alternatively, the **Close Side Panel** action can be used.

![](https://files.readme.io/db12848-Screenshot_2022-12-12_at_13.52.29.png)

No screen needs to be selected as this action will automatically close any currently open side panel. 

> 👍 Table block
>
> The [Table block](doc:table-block) supports built-in side panels for quickly viewing row detail or creating new entries.

### App state & Side panel

When using the side panel you may want to create/update [App state](doc:app-state) for use by a component nested within. An example of this would be; the [Form](doc:form) / [Form Block](doc:form-block) components, app state can be passed into these. The aim of this is to prevent users from jumping between pages and providing a more enriched interactive experience.

Additionally you can use the side panel as an area which contains additional information of the selected item.

#### Example

**Form usage**

1. Add the table component with a related data provider (for this I will be using the inbuilt test data).
2. Add the side panel component.
3. Within the table component `ON ROW CLICK` add 2 different actions: `Update state` and `Open side panel`\
   ![On row click button within the table component](https://files.readme.io/507f02f-small-Screenshot_2023-05-16_at_13.59.53.png)
4. Add a key name, I've used selectedRow and updated the value with `{{ Clicked row._id }}`.\
   ![Setting up table click for side panel.](https://files.readme.io/f6ac9ac-small-Screenshot_2023-05-16_at_14.16.56.png)
5. Add a [Form](doc:form) / [Form Block](doc:form-block) for this example I will be using the [Form Block](doc:form-block)
6. Change the form to update/read only, then add the selectedRow app state to the `Row ID`

A similar approach to the above can be done for simply displaying additional information.

Follow the previous steps until `Step 5`. (Please ensure the side panel along with the newly created data provider are nested within the parent data provider.) From here we are going to add a [Data provider](doc:data-provider) and nested within that a [Repeater](doc:repeater). From here click on your newly created [Data provider](doc:data-provider), then click `Define Filters` 

![](https://files.readme.io/060143a-small-Screenshot_2023-05-17_at_08.06.00.png)

Add a filter which uses the parent [Data provider](doc:data-provider) (limits the outgoing requests). Start building out your side panel area to include additional content you wish to show on click.

![Gif showing the end result of the above.](https://files.readme.io/83a7a9e-Additional_info_in_side_panel_example.gif)
