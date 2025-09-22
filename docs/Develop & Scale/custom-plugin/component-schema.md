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

<Table align={["left","left","left"]}>
  <thead>
    <tr>
      <th>
        Property
      </th>

      <th>
        Type
      </th>

      <th>
        Description
      </th>
    </tr>
  </thead>

  <tbody>
    <tr>
      <td>
        name\*
      </td>

      <td>
        string
      </td>

      <td>
        A unique name for your component.
      </td>
    </tr>

    <tr>
      <td>
        friendlyName\*
      </td>

      <td>
        string
      </td>

      <td>
        The name that is displayed in the app builder.
      </td>
    </tr>

    <tr>
      <td>
        icon\*
      </td>

      <td>
        string
      </td>

      <td>
        The name of the icon that is shown in the component tree.  

        *A full list of the available icons can be found[here](https://spectrum.adobe.com/page/icons/). Simply remove any spaces from the names, e.g. DeviceLaptop*
      </td>
    </tr>

    <tr>
      <td>
        [settings\*](/docs/component-schema#settings)
      </td>

      <td>
        array
      </td>

      <td>
        The list of additional settings beyond the defaults.
      </td>
    </tr>

    <tr>
      <td>
        [*context*](/docs/custom-component#context)
      </td>

      <td>
        array
      </td>

      <td>
        A list of data bindings that are provided by the component. 
      </td>
    </tr>

    <tr>
      <td>
        *styles*
      </td>

      <td>
        array
      </td>

      <td>
        Shorthand for adding settings for styling.  

        Includes: `"margin", "padding", "size", "background", "border"`
      </td>
    </tr>

    <tr>
      <td>
        *hasChildren*
      </td>

      <td>
        boolean
      </td>

      <td>
        Determines if the component can be a container for other components or not.
      </td>
    </tr>

    <tr>
      <td>
        *showSettingsBar*
      </td>

      <td>
        boolean
      </td>

      <td>
        Determines if the preview settings bar will float above a selected component.
      </td>
    </tr>

    <tr>
      <td>
        *info*
      </td>

      <td>
        string
      </td>

      <td>
        An optional info message to display at the bottom of the component settings in the builder.
      </td>
    </tr>
  </tbody>
</Table>

> 📘 Component schema examples
>
> If you'd like to see some real examples of how components are configured, you can view the component schemas for each of Budibase's core components [here.](https://github.com/Budibase/budibase/blob/develop/packages/client/manifest.json)

### Settings

The `settings` array defines which settings are rendered inside the builder for this component. If a settings object contains `"section": true` then it is expected to be a section with its own array of settings.

Required fields are marked by an asterisk.

<Table align={["left","left","left"]}>
  <thead>
    <tr>
      <th>
        Property
      </th>

      <th>
        Type
      </th>

      <th>
        Description
      </th>
    </tr>
  </thead>

  <tbody>
    <tr>
      <td>
        type\*
      </td>

      <td>
        string
      </td>

      <td>
        The type of the setting.  

        *A full list of setting types can be found in the[componentMap](https://github.com/Budibase/budibase/blob/develop/packages/builder/src/components/design/settings/componentSettings.js)*
      </td>
    </tr>

    <tr>
      <td>
        key\*
      </td>

      <td>
        string
      </td>

      <td>
        A unique identifier for the setting
      </td>
    </tr>

    <tr>
      <td>
        label\*
      </td>

      <td>
        string
      </td>

      <td>
        The label to show in the builder for this setting
      </td>
    </tr>

    <tr>
      <td>
        *dependsOn*
      </td>

      <td>
        string | [DependsOn](https://docs.budibase.com/docs/component-schema#depends-on)
      </td>

      <td>
        Specifies another setting which this one depends on. This setting will not be shown unless the other setting exists.  

        *If a string value is provided, a single setting key is expected. If an object, setting and value keys are expected, which will check against a specific value.*
      </td>
    </tr>

    <tr>
      <td>
        *defaultValue*
      </td>

      <td>
        any
      </td>

      <td>
        The default value for this setting for newly created components
      </td>
    </tr>

    <tr>
      <td>
        [*options*](/docs/component-schema#settings-options)
      </td>

      <td>
        array
      </td>

      <td>
        A list of options for settings of type `select`
      </td>
    </tr>

    <tr>
      <td>
        *min*
      </td>

      <td>
        number
      </td>

      <td>
        The minimum value of the setting
      </td>
    </tr>

    <tr>
      <td>
        *max*
      </td>

      <td>
        number
      </td>

      <td>
        The maximum value of the setting
      </td>
    </tr>

    <tr>
      <td>
        *showInBar*
      </td>

      <td>
        boolean
      </td>

      <td>
        Whether to show this setting in the preview settings bar, if enabled for this component
      </td>
    </tr>

    <tr>
      <td>
        *barStyle*
      </td>

      <td>
        [BarStyle](/docs/component-schema#enumerations)
      </td>

      <td>
        The style of bar component to show for this setting 
      </td>
    </tr>

    <tr>
      <td>
        *placeholder*
      </td>

      <td>
        string
      </td>

      <td>
        The placeholder value to be passed to the rendered settings component
      </td>
    </tr>

    <tr>
      <td>
        *section*
      </td>

      <td>
        boolean
      </td>

      <td>
        Indicates if a settings section is being defined  

        *Sections cannot be nested within another section*
      </td>
    </tr>

    <tr>
      <td>
        *name*\
        ma JSON change
      </td>

      <td>
        string
      </td>

      <td>
        The name of the section
      </td>
    </tr>
  </tbody>
</Table>

#### Depends on

If a string value is provided, then the setting will only show if the specified field is present, i.e. not *null*, *undefined*, *empty*, *false* or 0. 

Alternatively an object can be provided with the following properties. Required fields marked by an asterisk.

| Key       | Type    | Description                                                            |
| :-------- | :------ | :--------------------------------------------------------------------- |
| setting\* | string  | The name of the setting to depend on                                   |
| value\*   | any     | The value the 'depends on' setting must be for this setting to present |
| *invert*  | boolean | If true, the 'depends on' setting must NOT match the specified *value* |

#### Select options

If a setting is of type `select`, then an options array must also be specified to control which options are available for the setting. The options passed in must have the following structure:

<Table align={["left","left","left"]}>
  <thead>
    <tr>
      <th>
        Key
      </th>

      <th>
        Type
      </th>

      <th>
        Description
      </th>
    </tr>
  </thead>

  <tbody>
    <tr>
      <td>
        label
      </td>

      <td>
        string
      </td>

      <td>
        The readable label shown for this option
      </td>
    </tr>

    <tr>
      <td>
        value
      </td>

      <td>
        any
      </td>

      <td>
        The option value
      </td>
    </tr>

    <tr>
      <td>
        barIcon
      </td>

      <td>
        string
      </td>

      <td>
        If showing this setting in the settings bar and using a bar type of buttons, this key defines which spectrum icon to render in the bar  

        *A full list of the available icons can be found[here](https://spectrum.adobe.com/page/icons/). Simply remove any spaces from the names, e.g. DeviceLaptop*
      </td>
    </tr>

    <tr>
      <td>
        barTitle
      </td>

      <td>
        string
      </td>

      <td>
        If showing this setting in the settings bar and using a bar type of buttons, this key defines the title text to be shown when hovering over the icon
      </td>
    </tr>
  </tbody>
</Table>

#### Enumerations

A general table of the enumerated values that can be used throughout the component schema. Each enumeration value is comma separated and case sensitive.

| Name     | Values              |
| :------- | :------------------ |
| BarStyle | `buttons`, `picker` |
