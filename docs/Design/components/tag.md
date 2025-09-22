---
title: Tag
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
The `Tag` component can quickly display tags on, for example, a detail page. An optional delete button can be added which can be configured using [Actions](doc:actions).

![](https://files.readme.io/a18bea4-tags.png "tags.png")

## Customizing the tag

To customize the tag, you have several settings in the <Glossary>Settings Panel</Glossary> you can use.

| Setting              | Description                                                                                                                                                                       |
| :------------------- | :-------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| Size                 | The size of text, choose between small, medium or large.                                                                                                                          |
| Color                | Choose the color of the button, the text color will change accordingly.                                                                                                           |
| Show Delete Icon     | Will add a `X` to the tag which is clickable                                                                                                                                      |
| On click delete icon | This setting will appear when the `Show Delete Icon` setting is checked. This will allow you to configure what happens when the user clicks the `X` using [Actions](doc:actions). |

<br />

## Tutorial: Movie genre tags

In this tutorial we will look at how you can use the tag component to display movie genres.

### Setup

To get started, add an internal [Budibase DB](doc:budibasedb) table called *Movies*, with 'Title', 'Year', and 'Image Url' columns. Add some rows.

![](https://files.readme.io/22e214f-Screenshot_2023-01-27_at_13.37.33.png)

Next go to the *Design* section, and add a [Cards block](https://docs.budibase.com/docs/blocks#cards-block). Select the *Movies* table as the <Glossary>Datasource</Glossary>, and bind the *Title*, *Subtitle* and *Image URL* values to the table columns. For example, the *Subtitle*: `{{ New Cards block.Movies.Year }}` 

Your screen should look roughly like so:

![](https://files.readme.io/149e872-Screenshot_2023-01-27_at_13.44.04.png)

### Adding the tags

Go back to the *Data* section, and add another table called *Tags*. Give it a text column called 'Name' and a Many->Many [Relationship](doc:relationships) column linking to *Movies*.

<Image alt="Many Tags to Many Movies" align="center" src="https://files.readme.io/b6650f8-Screenshot_2023-01-27_at_14.03.53.png">
  Many Tags to Many Movies
</Image>

Add some tag rows, linking them to some movies.

![](https://files.readme.io/6d83145-Screenshot_2023-01-27_at_14.54.35.png)

Head back over to the *Design* section. To be able to add our tags, we must [Eject](https://docs.budibase.com/docs/blocks#ejecting-blocks) the cards block. 

<Image alt="Component tree after ejecting the cards block" align="center" src="https://files.readme.io/2f663af-Screenshot_2023-01-27_at_14.58.13.png">
  Component tree after ejecting the cards block
</Image>

Next add a [Container](doc:container) nested under the *Repeater*. Set the *Gap* to 'None'. Drag the *Spectrumcard* into the new container.

Below the *Spectrumcard* insert a [Repeater block](https://docs.budibase.com/docs/blocks#repeater-block). Give it the name 'Tags Repeater Block', and select the *Tags* table from the relationship.

<Image alt="Selecting the tags from relationship" align="center" src="https://files.readme.io/9591886-Screenshot_2023-01-27_at_15.11.45.png">
  Selecting the tags from relationship
</Image>

Finally add the Tag component underneath the *Tags Repeater Block*. Click *Align right* on the repeaters block to align the tags to the right-hand side of the card, and choose *Row layout*. 

Give the tag the text binding: `{{ Tags Repeater block.Tags.Name }}`. This can be selected from the bindings dropdown.

<Image alt="Aligning the tags" align="center" src="https://files.readme.io/437c4fb-Screenshot_2023-01-27_at_15.14.29.png">
  Aligning the tags
</Image>

As a finishing touch, it would be nice to give the different tags a color. To do so, we will use [Conditional UI](doc:conditions). Click on `Configure conditions`: Update Setting 'Color' TO ... IF `{{ Tags Repeater block.Tags.Name }}` Equals ...

The duplicate condition button will be very useful in this case!

![](https://files.readme.io/9c76727-Screenshot_2023-01-27_at_15.27.00.png)

#### Result

![](https://files.readme.io/5ff954f-Screenshot_2023-01-27_at_15.30.32.png)

To see how tags can be used in a SQL database, have a look at this [MS SQL Server tutorial](https://docs.budibase.com/docs/ms-sql-server).

### Removing tags

You may optionally also want the ability to remove tags. To do so, first check the `Show delete icon` setting. This will allow you to specify some actions.

<Image alt="Add some delete actions" align="center" src="https://files.readme.io/1f5a490-Screenshot_2023-01-27_at_15.46.00.png">
  Add some delete actions
</Image>

Add a **Save Row**  action with the *Movies* Repeater as the datasource, (not the tags repeater block), and select the *Movies* table as the save destination.

Check *Do not display default notification* so that a toast is not displayed. Also `Add column` for the *Tags* relationship and give it the following [JavaScript](doc:javascript) binding:

```javascript
return $("Repeater.Movies.Tags")?.filter(tag => tag._id !== $("Tags Repeater block.Tags._id"));
```

![](https://files.readme.io/cba9ab6-Screenshot_2023-01-27_at_15.55.15.png)

The JavaScript binding may appear a little daunting to some, but to explain in pseudo-code:

>  Save all of the movie tags excluding the one we are removing

After removing all tags, you will see a *No rows found* message, which isn't what we'd like in this case.

<Image alt="No rows found - Tags repeater block" align="center" src="https://files.readme.io/5e55f11-Screenshot_2023-02-01_at_09.24.42.png">
  No rows found - Tags repeater block
</Image>

Ideally this should just be blank. Click on the *Tags Repeater block* and `Configure conditions`: Hide component IF `{{ Repeater.Movies.Tags }}` Is empty.

As a finishing touch, it would be nice to add some margin when there are no tags so that the vertical spacing is consistent. Click on the *Spectrumcard* and `Configure conditions`: Update Setting 'Custom CSS' TO `margin-bottom: 32px;` IF `{{ Repeater.Movies.Tags }}` Is empty.

![](https://files.readme.io/16889cb-Screenshot_2023-02-01_at_09.37.17.png)

#### Naive result

![](https://files.readme.io/f10802d-tabs_bug.gif)

As you probably noticed, there is substantial delay between clicking the 'x' and the tag being removed. Ideally in this scenario we don't want to await for a database response. We can use [App state](doc:app-state) to cache the tags and improve the tag deletion UX.

Add a second action for updating app state:

![](https://files.readme.io/9582cd7-Screenshot_2023-01-27_at_16.21.03.png)

```javascript
return {
	...$("State.RemovedTags"),
	[$("Tags Repeater block.Tags._id")+$("Repeater.Movies._id")]: true
}
```

Next we want to replace the **Save Row** action with a **Trigger Automation** action instead. Check *Create a new automation*, enter a name and check *Do not display default notification*. 

`Add Field` for the *tags*, and *movie\_id*.

![](https://files.readme.io/8e7b53b-Screenshot_2023-01-27_at_16.58.10.png)

The JavaScript binding for the *tags* field looks as follows:

```javascript tags
return $("Repeater.Movies.Tags")?.filter(tag => !$("State.RemovedTags")?.[tag._id+$("Repeater.Movies._id")]);
```

Here we are only looking to save tags for each movie that have not been flagged as removed in our front-end cache.

Instead of waiting for a save row response, we will fire and forget a request to our [Automation](doc:contextual-bindings) which will remove the chosen tag from our chosen movie.

After saving those actions, navigate to the *Automate* section and select the **DeleteTag** automation that was automatically created for us. 

Make sure *tags* is set to type **Array**.

<Image alt="Set tags to type Array" align="center" src="https://files.readme.io/770eb71-Screenshot_2023-01-27_at_17.00.05.png">
  Set tags to type Array
</Image>

Next add an **Update Row** step for the *Movies* table as follows, making sure the `Use bindings` options is selected!

In addition, check the `Clear relationships if empty?` flag to ensure that all tags can be removed.

![](https://files.readme.io/1b46ad8-Screenshot_2023-02-01_at_10.15.08.png)

> 👍
>
> Publish your app to activate the automation.

Navigating back to the *Design* section, add another condition to the tag: Hide component IF

```javascript
return $("State.RemovedTags")?.[$("Tags Repeater block.Tags._id")+$("Repeater.Movies._id")];
```

Equals Boolean True.

![](https://files.readme.io/f7e415e-Screenshot_2023-01-27_at_16.35.28.png)

#### Faster result

![](https://files.readme.io/f4741db-fast_close.gif)
