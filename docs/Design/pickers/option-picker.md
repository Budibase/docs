---
title: Options picker
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
The options picker component is a great tool to fill an Single Select data column or let your users select an item from a table of choice. It allows your users to pick a single option from a dropdown that is filled based on the connected data source, or through a custom schema to be used in other manners.

![](https://files.readme.io/9118efb-options-picker.png "options-picker.png")

## Adding an options picker

To add the options picker to your app, you first need to wrap it within a [Form](doc:forms) component. Once that is done you can add the `options picker` through `Form > Options Picker`

![](https://files.readme.io/702802c-Screenshot_2023-07-04_at_12.09.44.png)

The options picker will now be added in an empty state to your UI.

## Displaying options in the options picker

To display options in the option picker, you have a few routes to do this. Either you can let the options prefill based on the existing data or data-schema, or you can specify custom options so you can use the choice to do something else, for example, use in Automation, or transform it yourself before adding it to a table. Below is a quick table to highlight the purpose of each method.

<Table align={["left","left","left"]}>
  <thead>
    <tr>
      <th>
        Method
      </th>

      <th>
        Description
      </th>

      <th>
        Examples
      </th>
    </tr>
  </thead>

  <tbody>
    <tr>
      <td>
        Schema
      </td>

      <td>
        When you configure your data structure, you may configure an options field to have predefined, static options. Use this method, when the options are defined and unlikely to change.
      </td>

      <td>
        Low, medium, high  

        *1,2,3,4,5*  

        Cold, warm, hot
      </td>
    </tr>

    <tr>
      <td>
        Data provider
      </td>

      <td>
        In some cases, you may want to populate your options picker with data from a field in your database, other than predefined options. So, when new data is entered in to your database, the Options picker is updated, dynamically. Use this method when the options are not predefined and likely to update.
      </td>

      <td>
        Categories  

        Tags
      </td>
    </tr>

    <tr>
      <td>
        Custom
      </td>

      <td>
        The custom method allows you to define options in the design section of the Budibase builder. It also allows you to assign a value to an option. Using the custom method, you can also:  

        * populate values in the form, from an API request, or custom query.
        * populate options in a form without giving the user write access to your database (good for public forms)
      </td>

      <td>
        Thor = correct,\
        Spiderman = incorrect,\
        Hulk = incorrect,\
        Iron man = incorrect
      </td>
    </tr>
  </tbody>
</Table>

### Using options from the parent form

To use options straight from the table schema of your form, you need to make sure you have your wrapping form linked to a table. You can do this in the <Glossary>Settings Panel</Glossary> of the form, and picking the correct table in the `schema` option.

Once this is done, you can return to the <Glossary>Settings Panel</Glossary> of the `Options Picker` and define your schema. For this, you only need to select the right field, or data column, in the `Field` option in the <Glossary>Settings Panel</Glossary>.

You will then automatically see the options defined in the table schema reflect.

<Image alt="Form set to Inventory (sample data)" align="center" src="https://files.readme.io/aaea951885c8edef8250bfdc97dc8b0683c03e37e696b81a9c019b55694a44f0-image.png">
  Form set to Inventory (sample data)
</Image>

<br />

> 🚧 Supported Column Types
>
> When using a schema options source, the column must be of type 'Single Select' with the options provided. When using a data provider, options can be populated from Text rows.

### Using a data provider

Using a data provider is very similar to using the schema from the form, but in this case, it allows you to pick options from a data source that's different to what is configured in the form.

To be able to select a data provider, you of course need to have the form wrapped inside a [Data Provider](doc:data-provider). 

First, select `Data Provider` as the `options source` in the <Glossary>Settings Panel</Glossary>.

![](https://files.readme.io/6836a752cc25ad24c5805e341d48eee9cf7eb1ddc9b97a0e12a6216f1555513a-image.png)

Next, there are 3 selections to be made in the <Glossary>Settings Panel</Glossary>. The actual data provider, the label column, and the value column.

![](https://files.readme.io/dcd0eee41e44e4a7f30ab60ec8a55ca292f5e930454e135c102d7326064ee01c-image.png)

The `Label` column is what is visible to the user to select from, and the `Value` column defines what is actually selected in the background. This can be an ID or an Single Select data-type column, for example.

Below is a quick demonstration of dynamically populating an options picker with values from your database, using a [Data Provider](doc:data-provider) .

<HTMLBlock>{`
<div style="padding:56.25% 0 0 0;position:relative;"><iframe src="https://player.vimeo.com/video/699422605?h=79aef8980f&amp;badge=0&amp;autopause=0&amp;player_id=0&amp;app_id=58479" frameborder="0" allow="autoplay; fullscreen; picture-in-picture" allowfullscreen style="position:absolute;top:0;left:0;width:100%;height:100%;" title="New Recording - 14/04/2022, 13:54:04"></iframe></div><script src="https://player.vimeo.com/api/player.js"></script>
`}</HTMLBlock>

### Using custom options

To use custom options, you need to select `Custom` as the options source in the <Glossary>Settings Panel</Glossary>.

![](https://files.readme.io/396e8d79230cf646dea01d34a2d7edc8b753950c35bef875a24c361c9e695945-image.png)

After selecting `Custom`, a new setting will appear in the <Glossary>Settings Panel</Glossary>, namely, `Define Options`. Clicking this will open up the bindings drawer where you can specify both label and value.

<Image align="center" src="https://files.readme.io/016fcaf980556511f170e019dca6a5e43476eaaaf3ca45639293560ff27236ff-Screenshot_2024-09-25_at_12.34.27.png" />

Add as many options as you need, and fill both the `label` and the `value` field. The `label` field is intended as visual to your users, where the `value` field is intended for usage in your application, such as storing in a data-source, or through other means.

## Adding autocomplete

Autocomplete is a powerful feature which allows your user to type in the options picker to find the item they're looking for. This is especially useful when you have a long list of options to choose from. To enable this, you have to click the `Autocomplete` checkbox in the <Glossary>Settings Panel</Glossary>.

This will transform the dropdown to have a search field.

## Using radio buttons

To use Radio buttons, all you have to do is select the `Radio Button` option through the `Type` setting in the <Glossary>Settings Panel</Glossary>. 

![](https://files.readme.io/6b21ae3f37c3610ddb938e4c6496a38e2e120c1f0dfd0f30c1d7f3fb4a204144-image.png)

This will automatically transform the UI to use radio buttons instead of a dropdown.

![](https://files.readme.io/1ff01481e62441e1424317cd4fd2fb70dfd6a655f7f9a9dc3a8767705d9e44f0-image.png)

### Horizontal or vertical mode

The image above illustrates the vertical mode of the radio buttons. You can also specify `horizontal` mode in the <Glossary>Settings Panel</Glossary>.

![](https://files.readme.io/fae301b26c5996b566b84277f3d444320d3eab3ab25dd86f02b02f2bd79d0959-image.png)

After selecting `horizontal`, your UI will look more compact, like below.

![](https://files.readme.io/4b717241ed9b7eb3ff75ca4868e80a5e7c15fe75954e01a1d5b47a84f6b9fc5b-image.png)

## Further settings

There are more settings in the <Glossary>Settings Panel</Glossary> than have been discussed here. They're not complicated but might require explanation. You can find them in the reference table below.

| Setting              | Description                                                                                     |
| :------------------- | :---------------------------------------------------------------------------------------------- |
| Field                | Connected field from the parent [Form](doc:forms) element, or custom by typing in a field name. |
| Name                 | The name of the field, displayed next to the options picker                                     |
| Placeholder          | The text displayed on the options panel when no option has been selected                        |
| Default value        | A pre-selected value you can define using [Bindings](doc:bindings).                             |
| Disabled             | Disables the field from editing                                                                 |
| Configure Validation | Allows you to specify validation rules                                                          |
