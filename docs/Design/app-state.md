---
title: App state
excerpt: ''
deprecated: false
hidden: false
metadata:
  title: ''
  description: ''
  robots: index
next:
  description: ''
  pages:
    - type: basic
      slug: searchfilter-data
      title: Adding filtering
---
App state is a generic store of values that can be used to easily pass values around and persist them between navigation and page reloading.

Unlike other <Glossary>Binding</Glossary> values, App state values can be set and used anywhere in your application. Nesting is not required. To set an app state value you can use an action called `Update state` in the actions drawer. There are two types; Setting and Deleting. Set a key to be the unique identifier, this is whats used when referencing the state value elsewhere in your app. You can select an already existing one or create one by typing in a name.  After this, you can enter any value into the value input field. In addition to static values, you can also use <Glossary>Binding</Glossary> values here.

![](https://files.readme.io/09f8b06-setting_state.png "setting_state.png")

## App state tutorial

The below example shows a simple way which app state can be used within a Budibase app. The overview of the example includes the following, creating a select input which will save the field value to state. From here this state value will then be used to show and hide components based on the selected value.

1. Add a [Form](doc:form) component\
   ![Form component](https://files.readme.io/052b9c1-small-Add_form_component.png)
2. Add a [Options picker](doc:options-picker) component, then change the `Options source` from schema to custom.
3. Click the `Define Options` button and add your options for this demo the options used are: Tables, Blocks and Images.\
   ![](https://files.readme.io/96a7c07-small-options_picker_and_custom_options.png)
4. After this click the `On change` button, search for the `Update state` action. Add this and then configure your state settings to something similar to the below.\
   ![Update state with selected value.](https://files.readme.io/34fc455-small-update_state.png)
5. After this build out your page however you want, add additional options to your select input if you choose to.
6. Setup conditionals for the various components throughout using the `Configure conditions` button within the conditions tab.

<Image align="center" src="https://files.readme.io/04ae01d-small-Screenshot_2023-05-05_at_14.03.30.png" />

**Short Demo**

![](https://files.readme.io/d2e326b-App_state_tutorial_demo..gif)

### App state in blocks

For more context on app state there are components which already have this feature within. A good example would be the [Table Block](doc:table-block) component. You can quickly see app state in action by adding this component, then clicking on the radio button `Show details side panel` and then ejecting the block. From here go to the  [Table](doc:table) component and click `ON ROW CLICK` button action and you can see some pre-generated actions based around state.

<Image align="center" src="https://files.readme.io/822a55a-Screenshot_2023-04-21_at_11.53.35.png" />

What this is doing is getting the clicked rows `_id` and adding it to a [Form Block](doc:form-block) which is automatically set to update. This newly created state key is then added into the `Details form block Row ID` field which is what is use to save any updates made back to that specific row.

![Showing state being passed into the Row ID](https://files.readme.io/ca96089-small-Screenshot_2023-05-04_at_09.50.54.png)

### App state examples

There are a range of different ways app state can be used within Budibase. A few examples can be seen below.

* **Multiple step forms**,  you can use App state to save the `_id` of the row which you are currently creating. App state can then be used to both save your place in the form and to save information at different stages back to your database as you process through your multiple step form.
* **[Form Block](doc:form-block)** As talked in the **App state demo** you can use app state to pass specific rows `_id` into forms. Whether this be a form within a [Side Panel](doc:side-panel) component or a form on a different page, app state can be used in both cases.

### App state Github discussions

* [Bindings & app state](https://github.com/Budibase/budibase/discussions/10094) logging active persisted app states.
* [Collapsible panel + conditional UI](https://github.com/Budibase/budibase/discussions/5763) Slightly more complicated use of state with conditional UI.
* [Table Filter with a button](https://github.com/Budibase/budibase/discussions/10402) Trigging search with a button click instead of on change using state.

***

## Persisting values

If you wish for the values that the user has selected to persist you can select the Persist this value checkbox beneath the key/value fields. Doing so will save the value in the users browser using the localStorage API. (A gif below has been attached to showcase the difference between persisted state and regular state.)

![](https://files.readme.io/fdef237-Difference_in_app_states.gif)

***

## Deleting values

Deleting a value will delete it permanently and will also override values that are persisted. (Below is an example of deleting state.)

![Deleting state example](https://files.readme.io/5d79ad7-small-Screenshot_2023-05-05_at_12.28.00.png)

***

## Referencing state values

Once you have created a value you are free to bind to it across your application. All values live under the **State** top-level <Glossary>Binding</Glossary> value and are visible in the bindings drawer.

For example, To get the value in the 1st image you would enter `{{ State.isPersonal }}`. The pre generated example image using the [Table Block](doc:table-block) component you'd have to enter `{{ state.ID_bI8jAVBgC }}`.
