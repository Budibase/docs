---
title: Options picker
excerpt: ''
deprecated: false
hidden: false
metadata:
  title: ''
  description: ''
  robots: noindex
next:
  description: ''
---
The options picker component is a great tool to fill an options-type data column or let your users select an item from a table of choice. It allows your users to pick a single option from a dropdown that is filled based on the connected data source, or through a custom schema to be used in other manners.
[block:image]
{
  "images": [
    {
      "image": [
        "https://files.readme.io/9118efb-options-picker.png",
        "options-picker.png",
        888,
        636,
        "#f8f8f8"
      ]
    }
  ]
}
[/block]

[block:api-header]
{
  "title": "Adding an options picker"
}
[/block]
To add the options picker to your app, you first need to wrap it within a [Form](doc:forms) component. Once that is done you can add the `options picker` through `Form > Options Picker`
[block:image]
{
  "images": [
    {
      "image": [
        "https://files.readme.io/82bd430-add-options-picker.png",
        "add-options-picker.png",
        302,
        336,
        "#262728"
      ]
    }
  ]
}
[/block]
The options picker will now be added in an empty state to your UI.
[block:api-header]
{
  "title": "Displaying options in the options picker"
}
[/block]
To display options in the option picker, you have a few routes to do this. Either you can let the options prefill based on the existing data or data-schema, or you can specify custom options so you can use the choice to do something else, for example, use in Automation, or transform it yourself before adding it to a table. Below is a quick table to highlight the purpose of each method.
[block:parameters]
{
  "data": {
    "h-0": "Method",
    "h-1": "Description",
    "h-2": "Examples",
    "0-2": "Low, medium, high\n\n*1,2,3,4,5*\n\nCold, warm, hot",
    "0-0": "Schema",
    "1-0": "Data provider",
    "2-0": "Custom",
    "0-1": "When you configure your data structure, you may configure an options field to have predefined, static options. Use this method, when the options are defined and unlikely to change.",
    "1-1": "In some cases, you may want to populate your options picker with data from a field in your database, other than predefined options. So, when new data is entered in to your database, the Options picker is updated, dynamically. Use this method when the options are not predefined and likely to update.",
    "1-2": "Categories\n\nTags",
    "2-1": "The custom method allows you to define options in the design section of the Budibase builder. It also allows you to assign a value to an option. Using the custom method, you can also:\n- populate values in the form, from an API request, or custom query.\n- populate options in a form without giving the user write access to your database (good for public forms)",
    "2-2": "Thor = correct,\nSpiderman = incorrect,\nHulk = incorrect,\nIron man = incorrect"
  },
  "cols": 3,
  "rows": 3
}
[/block]
### Using options from the parent form
To use options straight from the table schema of your form, you need to make sure you have your wrapping form linked to a table. You can do this in the <<glossary:Settings Panel>> of the form, and picking the correct table in the `schema` option.

Once this is done, you can return to the <<glossary:Settings Panel>> of the `Options Picker` and define your schema. For this, you only need to select the right field, or data column, in the `Field` option in the <<glossary:Settings Panel>>.

You will then automatically see the options defined in the table schema reflect.
[block:callout]
{
  "type": "warning",
  "title": "Supported Column Types",
  "body": "When using a schema options source, the column must be of type 'Options' with the options provided. When using a data provider, options can be populated from Text rows."
}
[/block]
### Using a data provider
Using a data provider is very similar to using the schema from the form, but in this case, it allows you to pick options from a data source that's different to what is configured in the form.

To be able to select a data provider, you of course need to have the form wrapped inside a [Data Provider](doc:data-provider). 

First, select `Data Provider` as the `options source` in the <<glossary:Settings Panel>>.
[block:image]
{
  "images": [
    {
      "image": [
        "https://files.readme.io/30707b7-options-source.png",
        "options-source.png",
        512,
        422,
        "#323232"
      ]
    }
  ]
}
[/block]
Next, there are 3 selections to be made in the <<glossary:Settings Panel>>. The actual data provider, the label column, and the value column.
[block:image]
{
  "images": [
    {
      "image": [
        "https://files.readme.io/3944bf5-options-data-provider-selections.png",
        "options-data-provider-selections.png",
        498,
        406,
        "#363636"
      ]
    }
  ]
}
[/block]
The options provider should be the wrapping [Data Provider](doc:data-provider). The `Label` column is what is visible to the user to select from, and the `Value` column defines what is actually selected in the background. This can be an ID or an Option data-type column, for example.

Below is a quick demonstration of dynamically populating an options picker with values from your database, using a [Data Provider](doc:data-provider) .
[block:html]
{
  "html": "<div style=\"padding:56.25% 0 0 0;position:relative;\"><iframe src=\"https://player.vimeo.com/video/699422605?h=79aef8980f&amp;badge=0&amp;autopause=0&amp;player_id=0&amp;app_id=58479\" frameborder=\"0\" allow=\"autoplay; fullscreen; picture-in-picture\" allowfullscreen style=\"position:absolute;top:0;left:0;width:100%;height:100%;\" title=\"New Recording - 14/04/2022, 13:54:04\"></iframe></div><script src=\"https://player.vimeo.com/api/player.js\"></script>"
}
[/block]
### Using custom options
To use custom options, you need to select `Custom` as the options source in the <<glossary:Settings Panel>>.

[block:image]
{
  "images": [
    {
      "image": [
        "https://files.readme.io/5f2a694-custom-options-source.png",
        "custom-options-source.png",
        472,
        432,
        "#323232"
      ]
    }
  ]
}
[/block]
After selecting `Custom`, a new setting will appear in the <<glossary:Settings Panel>>, namely, `Define Options`. Clicking this will open up a modal where you can specify both label and value.
[block:image]
{
  "images": [
    {
      "image": [
        "https://files.readme.io/e147220-custom-options.png",
        "custom-options.png",
        1068,
        656,
        "#333435"
      ]
    }
  ]
}
[/block]
Add as many options as you need, and fill both the `label` and the `value` field. The `label` field is intended as visual to your users, where the `value` field is intended for usage in your application, such as storing in a data-source, or through other means.
[block:api-header]
{
  "title": "Adding autocomplete"
}
[/block]
Autocomplete is a powerful feature which allows your user to type in the options picker to find the item they're looking for. This is especially useful when you have a long list of options to choose from. To enable this, you have to click the `Autocomplete` checkbox in the <<glossary:Settings Panel>>.

This will transform the dropdown to have a search field.
[block:api-header]
{
  "title": "Using radio buttons"
}
[/block]
To use Radio buttons, all you have to do is select the `Radio Button` option through the `Type` setting in the <<glossary:Settings Panel>>. 
[block:image]
{
  "images": [
    {
      "image": [
        "https://files.readme.io/ad513ed-radio-buttons.png",
        "radio-buttons.png",
        480,
        338,
        "#333333"
      ]
    }
  ]
}
[/block]
This will automatically transform the UI to use radio buttons instead of a dropdown.
[block:image]
{
  "images": [
    {
      "image": [
        "https://files.readme.io/95567f8-radio-buttons-example.png",
        "radio-buttons-example.png",
        822,
        810,
        "#f2f2f2"
      ]
    }
  ]
}
[/block]
### Horizontal or vertical mode
The image above illustrates the vertical mode of the radio buttons. You can also specify `horizontal` mode in the <<glossary:Settings Panel>>.
[block:image]
{
  "images": [
    {
      "image": [
        "https://files.readme.io/2f8c60c-radio-buttons-mode.png",
        "radio-buttons-mode.png",
        502,
        302,
        "#333333"
      ]
    }
  ]
}
[/block]
After selecting `horizontal`, your UI will look more compact, like below.
[block:image]
{
  "images": [
    {
      "image": [
        "https://files.readme.io/bbd6b3a-radio-buttons-horizontal.png",
        "radio-buttons-horizontal.png",
        1248,
        240,
        "#eeeeee"
      ]
    }
  ]
}
[/block]

[block:api-header]
{
  "title": "Further settings"
}
[/block]
There are more settings in the <<glossary:Settings Panel>> than have been discussed here. They're not complicated but might require explanation. You can find them in the reference table below.
[block:parameters]
{
  "data": {
    "h-0": "Setting",
    "h-1": "Description",
    "1-0": "Name",
    "1-1": "The name of the field, displayed next to the options picker",
    "2-0": "Placeholder",
    "2-1": "The text displayed on the options panel when no option has been selected",
    "3-0": "Default value",
    "3-1": "A pre-selected value you can define using [Bindings](doc:bindings).",
    "4-0": "Disabled",
    "4-1": "Disables the field from editing",
    "5-0": "Configure Validation",
    "5-1": "Allows you to specify validation rules",
    "0-0": "Field",
    "0-1": "Connected field from the parent [Form](doc:forms) element, or custom by typing in a field name."
  },
  "cols": 2,
  "rows": 6
}
[/block]