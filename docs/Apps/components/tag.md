---
title: Tag
excerpt: ''
deprecated: false
hidden: false
metadata:
  title: ''
  description: kba_5habm
  robots: index
next:
  description: ''
---
The `Tag` component can quickly display tags on a detail page or in other compact layouts. Use it for statuses, labels, categories, or related records.

You can bind the tag text to row data, change its color, and optionally add a delete button configured with [Actions](doc:actions).


## Customising the tag

To customise the tag, you have several settings in the <Glossary>Settings Panel</Glossary> you can use.

| Setting              | Description                                                                                                                                                                       |
| :------------------- | :-------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| Size                 | The size of text, choose between small, medium or large.                                                                                                                          |
| Color                | Choose the color of the button, the text color will change accordingly.                                                                                                           |
| Allow delete         | Adds an `X` delete control to the tag.                                                                                                                                            |
| On click delete      | This setting appears when `Allow delete` is checked. Use it to configure what happens when the user clicks the `X`, using [Actions](doc:actions).                              |

## Common usage

Tags work best when the value is short and repeatable.

Common examples include:

* Record statuses
* Category labels
* Related items in a repeater
* Filter chips in compact views

## Tutorial: Movie genre tags

Use the Tag component to show related labels in a compact layout, such as tags on a card or detail view.

To build the example:

1. Create `Movies` and `Tags` tables.
2. Add a many-to-many relationship from `Tags` to `Movies`.
3. Build a cards view for `Movies`.
4. Eject the cards block and add a repeater for the related tags.
5. Add the Tag component inside the repeater and bind it to `{{ Tags Repeater block.Tags.Name }}`.
6. Use [Conditional UI](doc:conditions) to assign a color per tag name.

To remove tags:

1. Enable `Allow delete`.
2. Add a `Save Row` action on `On click delete`.
3. Update the `Tags` relationship so the selected tag is removed.
4. Hide the tag when the relationship is empty.

If you need faster removal feedback, cache the removed tag in [App state](doc:app-state) before syncing the database update.
