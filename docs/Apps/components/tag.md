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
The `Tag` component can quickly display tags on, for example, a detail page. An optional delete button can be added, which can be configured using [Actions](doc:actions).


## Customising the tag

To customise the tag, you have several settings in the <Glossary>Settings Panel</Glossary> you can use.

| Setting              | Description                                                                                                                                                                       |
| :------------------- | :-------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| Size                 | The size of text, choose between small, medium or large.                                                                                                                          |
| Color                | Choose the color of the button, the text color will change accordingly.                                                                                                           |
| Allow delete         | Adds an `X` delete control to the tag.                                                                                                                                            |
| On click delete      | This setting appears when `Allow delete` is checked. Use it to configure what happens when the user clicks the `X`, using [Actions](doc:actions).                              |

<br />

## Tutorial: Movie genre tags

In this tutorial we will look at how you can use the tag component to display movie genres.

### Setup

To get started, add an internal [Budibase DB](doc:budibasedb) table called *Movies*, with 'Title', 'Year', and 'Image Url' columns. Add some rows.


Next go to the *Design* section, and add a [Cards block](https://docs.budibase.com/docs/blocks#cards-block). Select the *Movies* table as the <Glossary>Datasource</Glossary>, and bind the *Title*, *Subtitle* and *Image URL* values to the table columns. For example, the *Subtitle*: `{{ New Cards block.Movies.Year }}` 

Your screen should now show cards populated from your `Movies` data.


### Adding the tags

Go back to the *Data* section, and add another table called *Tags*. Give it a text column called 'Name' and a Many->Many [Relationship](doc:relationships) column linking to *Movies*.


Add some tag rows, linking them to some movies.


Head back over to the *Design* section. To be able to add our tags, we must [Eject](https://docs.budibase.com/docs/blocks#ejecting-blocks) the cards block. 


Next add a [Container](doc:container) nested under the *Repeater*. Set the *Gap* to 'None'. Drag the *Spectrumcard* into the new container.

Below the *Spectrumcard* insert a [Repeater block](https://docs.budibase.com/docs/blocks#repeater-block). Give it the name 'Tags Repeater Block', and select the *Tags* table from the relationship.


Finally add the Tag component underneath the *Tags Repeater Block*. Click *Align right* on the repeaters block to align the tags to the right-hand side of the card, and choose *Row layout*. 

Give the tag the text binding: `{{ Tags Repeater block.Tags.Name }}`. This can be selected from the bindings dropdown.


As a finishing touch, it would be nice to give the different tags a color. To do so, we will use [Conditional UI](doc:conditions). Click on `Configure conditions`: Update Setting 'Color' TO ... IF `{{ Tags Repeater block.Tags.Name }}` Equals ...

The duplicate condition button will be very useful in this case!


#### Result

At this stage, each movie card should display its related tags directly beneath the movie details.

For example:
- **The Shawshank Redemption (1994)** with tags like `Drama`, `Crime`
- **Pulp Fiction (1994)** with tags like `Action`
- **The Godfather (1972)** with tags like `Crime`, `Action`
- **Inception (2010)** with tags like `Sci-Fi`, `Drama`

This confirms the relationship binding is working and that tags are being rendered per movie row in the repeater.

To see how tags can be used in a SQL database, have a look at this [MS SQL Server tutorial](https://docs.budibase.com/docs/ms-sql-server).

### Removing tags

You may optionally also want the ability to remove tags. To do so, first check the `Allow delete` setting. This will allow you to specify some actions.

Quick flow:
1. Enable `Allow delete` on the Tag component.
2. Configure an action under `On click delete`.
3. When users click the `X`, your configured action runs and the tag is removed according to that logic.

Add a **Save Row** action for the `On click delete` setting with the *Movies* Repeater as the datasource (not the tags repeater block), and select the *Movies* table as the save destination.

Check *Do not display default notification* so that a toast is not displayed. Also `Add column` for the *Tags* relationship and give it the following [JavaScript](doc:javascript) binding:

```javascript
return $("Repeater.Movies.Tags")?.filter(tag => tag._id !== $("Tags Repeater block.Tags._id"));
```

The JavaScript binding may appear a little daunting to some, but to explain in pseudo-code:

>  Save all of the movie tags excluding the one we are removing

After removing all tags, you will see a *No rows found* message, which isn't what we'd like in this case.


Ideally this should just be blank. Click on the *Tags Repeater block* and `Configure conditions`: Hide component IF `{{ Repeater.Movies.Tags }}` Is empty.

As a finishing touch, it would be nice to add some margin when there are no tags so that the vertical spacing is consistent. Click on the *Spectrumcard* and `Configure conditions`: Update Setting 'Custom CSS' TO `margin-bottom: 32px;` IF `{{ Repeater.Movies.Tags }}` Is empty.

#### Naive result


As you probably noticed, there is substantial delay between clicking the 'x' and the tag being removed. Ideally in this scenario we don't want to await for a database response. We can use [App state](doc:app-state) to cache the tags and improve the tag deletion UX.

Add a second action for updating app state:

In the Actions drawer:
1. Click `Add Action`.
2. Choose `Update State`.
3. Set `Type` to `Set value`.
4. Set `Key` to `RemovedTags`.
5. Set `Value` to a JavaScript function (shown below).
6. Leave `Persist this value` unchecked unless you explicitly want removed-tag state to survive page reloads/browser restarts.
7. Click `Save`.


```javascript
return {
	...$("State.RemovedTags"),
	[$("Tags Repeater block.Tags._id")+$("Repeater.Movies._id")]: true
}
```

Next we want to replace the **Save Row** action with a **Trigger Automation** action instead. Follow the below steps to do this.

Create the automation
1. Switch to the automation section
2. Create a new on demand automation
3. Add the relevant fields
    - tags
    - movie_id

In the Actions drawer:
1. Keep your first action as `Update State`
2. Add a second action: `Trigger Automation`
3. Under `Automation`, choose previously created on demand trigger automation, and keep `Do not display default notification` checked
4. Leave `Require confirmation` unchecked unless you want a user confirmation prompt
5. Add fields:
   - `tags` -> `Value`: JavaScript function (shown below)
   - `movie_id` -> `Value`: `{{ Repeater.Movies._id }}`
6. Click `Save`

`Add Field` for the *tags*, and *movie\_id*.

The JavaScript binding for the *tags* field looks as follows:

```javascript tags
return $("Repeater.Movies.Tags")?.filter(tag => !$("State.RemovedTags")?.[tag._id+$("Repeater.Movies._id")]);
```

Here we are only looking to save tags for each movie that have not been flagged as removed in our front-end cache.

Instead of waiting for a save row response, we will fire and forget a request to our [Automation](doc:contextual-bindings) which will remove the chosen tag from our chosen movie.

After saving those actions, navigate to the *Automate* section and select the **DeleteTag** automation that was automatically created for us. 

Make sure *tags* is set to type **Array**.


Next add an **Update Row** step for the *Movies* table as follows, making sure the `Use bindings` options is selected!

In addition, check the `Clear relationships if empty?` flag to ensure that all tags can be removed.


> 👍
>
> Publish your app to activate the automation.

Navigating back to the *Design* section, add another condition to the tag: Hide component IF

```javascript
return $("State.RemovedTags")?.[$("Tags Repeater block.Tags._id")+$("Repeater.Movies._id")];
```

Equals Boolean True.
