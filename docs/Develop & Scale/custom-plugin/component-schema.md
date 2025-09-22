---
title: Component schema
excerpt: Description of the component plugin schema
deprecated: false
hidden: false
metadata:
  title: ''
  description: ''
  robots: index
next:
  description: ''
---
> 📘 Schema JSON changes in development
> 
> Changes saved to the schema.json file are not hot reloaded. The app builder must be refreshed.

Provides a number of attributes that determine the available options in the settings panel and how the component is displayed in the component tree.

Required fields are marked by an asterisk.

[block:parameters]
{
  "data": {
    "h-0": "Property",
    "h-1": "Type",
    "h-2": "Description",
    "0-0": "name\\*",
    "0-1": "string",
    "0-2": "A unique name for your component.",
    "1-0": "friendlyName\\*",
    "1-1": "string",
    "1-2": "The name that is displayed in the app builder.",
    "2-0": "icon\\*",
    "2-1": "string",
    "2-2": "The name of the icon that is shown in the component tree.  \n  \n_A full list of the available icons can be found [here](https://spectrum.adobe.com/page/icons/). Simply remove any spaces from the names, e.g. DeviceLaptop_",
    "3-0": "[settings\\*](/docs/component-schema#settings)",
    "3-1": "array",
    "3-2": "The list of additional settings beyond the defaults.",
    "4-0": "[_context_](/docs/custom-component#context)",
    "4-1": "array",
    "4-2": "A list of data bindings that are provided by the component. ",
    "5-0": "_styles_",
    "5-1": "array",
    "5-2": "Shorthand for adding settings for styling.  \n  \nIncludes: `\"margin\", \"padding\", \"size\", \"background\", \"border\"`",
    "6-0": "_hasChildren_",
    "6-1": "boolean",
    "6-2": "Determines if the component can be a container for other components or not.",
    "7-0": "_showSettingsBar_",
    "7-1": "boolean",
    "7-2": "Determines if the preview settings bar will float above a selected component.",
    "8-0": "_info_",
    "8-1": "string",
    "8-2": "An optional info message to display at the bottom of the component settings in the builder."
  },
  "cols": 3,
  "rows": 9,
  "align": [
    "left",
    "left",
    "left"
  ]
}
[/block]



> 📘 Component schema examples
> 
> If you'd like to see some real examples of how components are configured, you can view the component schemas for each of Budibase's core components [here.](https://github.com/Budibase/budibase/blob/develop/packages/client/manifest.json)

### Settings

The `settings` array defines which settings are rendered inside the builder for this component. If a settings object contains `"section": true` then it is expected to be a section with its own array of settings.

Required fields are marked by an asterisk.

[block:parameters]
{
  "data": {
    "h-0": "Property",
    "h-1": "Type",
    "h-2": "Description",
    "0-0": "type\\*",
    "0-1": "string",
    "0-2": "The type of the setting.  \n  \n_A full list of setting types can be found in the [componentMap](https://github.com/Budibase/budibase/blob/develop/packages/builder/src/components/design/settings/componentSettings.js)_",
    "1-0": "key\\*",
    "1-1": "string",
    "1-2": "A unique identifier for the setting",
    "2-0": "label\\*",
    "2-1": "string",
    "2-2": "The label to show in the builder for this setting",
    "3-0": "_dependsOn_",
    "3-1": "string | [DependsOn](https://docs.budibase.com/docs/component-schema#depends-on)",
    "3-2": "Specifies another setting which this one depends on. This setting will not be shown unless the other setting exists.  \n  \n_If a string value is provided, a single setting key is expected. If an object, setting and value keys are expected, which will check against a specific value._",
    "4-0": "_defaultValue_",
    "4-1": "any",
    "4-2": "The default value for this setting for newly created components",
    "5-0": "[_options_](/docs/component-schema#settings-options)",
    "5-1": "array",
    "5-2": "A list of options for settings of type `select`",
    "6-0": "_min_",
    "6-1": "number",
    "6-2": "The minimum value of the setting",
    "7-0": "_max_",
    "7-1": "number",
    "7-2": "The maximum value of the setting",
    "8-0": "_showInBar_",
    "8-1": "boolean",
    "8-2": "Whether to show this setting in the preview settings bar, if enabled for this component",
    "9-0": "_barStyle_",
    "9-1": "[BarStyle](/docs/component-schema#enumerations)",
    "9-2": "The style of bar component to show for this setting ",
    "10-0": "_placeholder_",
    "10-1": "string",
    "10-2": "The placeholder value to be passed to the rendered settings component",
    "11-0": "_section_",
    "11-1": "boolean",
    "11-2": "Indicates if a settings section is being defined  \n  \n_Sections cannot be nested within another section_",
    "12-0": "_name_  \n[section only]",
    "12-1": "string",
    "12-2": "The name of the section"
  },
  "cols": 3,
  "rows": 13,
  "align": [
    "left",
    "left",
    "left"
  ]
}
[/block]

#### Depends on

If a string value is provided, then the setting will only show if the specified field is present, i.e. not _null_, _undefined_, _empty_, _false_ or 0. 

Alternatively an object can be provided with the following properties. Required fields marked by an asterisk.

| Key       | Type    | Description                                                            |
| :-------- | :------ | :--------------------------------------------------------------------- |
| setting\* | string  | The name of the setting to depend on                                   |
| value\*   | any     | The value the 'depends on' setting must be for this setting to present |
| _invert_  | boolean | If true, the 'depends on' setting must NOT match the specified _value_ |

#### Select options

If a setting is of type `select`, then an options array must also be specified to control which options are available for the setting. The options passed in must have the following structure:

[block:parameters]
{
  "data": {
    "h-0": "Key",
    "h-1": "Type",
    "h-2": "Description",
    "0-0": "label",
    "0-1": "string",
    "0-2": "The readable label shown for this option",
    "1-0": "value",
    "1-1": "any",
    "1-2": "The option value",
    "2-0": "barIcon",
    "2-1": "string",
    "2-2": "If showing this setting in the settings bar and using a bar type of buttons, this key defines which spectrum icon to render in the bar  \n  \n_A full list of the available icons can be found [here](https://spectrum.adobe.com/page/icons/). Simply remove any spaces from the names, e.g. DeviceLaptop_",
    "3-0": "barTitle",
    "3-1": "string",
    "3-2": "If showing this setting in the settings bar and using a bar type of buttons, this key defines the title text to be shown when hovering over the icon"
  },
  "cols": 3,
  "rows": 4,
  "align": [
    "left",
    "left",
    "left"
  ]
}
[/block]

#### Enumerations

A general table of the enumerated values that can be used throughout the component schema. Each enumeration value is comma separated and case sensitive.

| Name     | Values              |
| :------- | :------------------ |
| BarStyle | `buttons`, `picker` |