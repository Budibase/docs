---
title: Cascading dropdown filters
excerpt: 'Example: Filter a city picker by the chosen country of another options picker'
deprecated: false
hidden: false
metadata:
  title: ''
  description: kba_5hi6a
  robots: index
next:
  description: ''
---
## Try it out!

<HTMLBlock>{`
<iframe width="800" height="600" frameborder="0" allow="clipboard-write;camera;geolocation;fullscreen" src="https://cprem.budibase.app/embed/guide-cascading-dropdown-filtering"></iframe>
`}</HTMLBlock>

## Scenario

Use this pattern when one picker should control the available values in another. In this example, a **Country** table and a **City** table are linked as *One Country -> Many Cities*.

The form uses an [Options picker](doc:option-picker) to select a country, then populates a second [Relationship picker](https://docs.budibase.com/docs/pickers#relationship-picker) with the matching cities.

<HTMLBlock>{`
<u><b style="font-size: 14px;">Challenge: </b></u><br />
<span style="position: relative; font-size: 24px; color: currentColor;">★★☆☆☆</span>
`}</HTMLBlock>

***

## Steps

1. `Add component`: **Form**
2. In the <Glossary>Settings Panel</Glossary>, set *Schema* to `Country`.

<Image align="center" width="400px" src="https://files.readme.io/c70ede6ab3712887a822136e3feff1259d5a7be72deaf54242c5cd108c2af2b9-Screenshot_2025-08-15_at_10.19.29.png" />

3. `Add component`: **Data provider**
4. In the <Glossary>Settings Panel</Glossary>, set *Data* to the `Country` table.
5. Set the *Limit* to `200` and untick *Paginate*.

<Image align="center" width="400px" src="https://files.readme.io/79f54b11d7fda3204926bde636b077a6e4a92ccd3599bb06f87e2a01df88484f-Screenshot_2025-08-15_at_10.20.10.png" />

6. `Add component`: **Options Picker**
7. In the <Glossary>Settings Panel</Glossary>, enter `Country` for the *Field* and add a *Label*.
8. Tick *Autocomplete*.
9. Set *Options source* to `Data provider`.
10. Set *Label column* to `country` and *Value column* to `country_id`.

<Image align="center" width="450px" src="https://files.readme.io/48d999b45694b7b02a5943f63cb7843d2084a0a425ded82ba3e89706bd99de75-Screenshot_2025-08-15_at_10.21.38.png" />

11. `Add component`: **Relationship Picker** and select `Cities` from the *Field* dropdown.
12. Click the button beside *Filtering*
13. `Add filter`:
    1. `country_id` Equals Binding `{{ Country Form.Fields.Country }}`
    2. Save the filter.

<Image align="center" src="https://files.readme.io/dab74484c0c2c7d78d52245048f77b5d8b4bff6e757d4c7c6b23e90cd795cf1e-Screenshot_2025-08-15_at_10.23.16.png" />

14. Click on the `Conditions` tab and click `Configure conditions`
15. `Add condition`:
    1. `Update Setting Disabled` to `✓` if `{{ Country Form.Fields.Country }}` `Is empty`.
    2. Save the condition.

<Image align="center" src="https://files.readme.io/852dfcdfdfbc6a21096fbf1245ba3e88bc35a12571dd2e7a63836a8b94d055e1-Screenshot_2025-08-15_at_10.24.25.png" />

> 👍 Layout
>
> Use [Field group layouts](https://docs.budibase.com/docs/field-groups#layout) or [Containers](doc:container) to align the pickers as desired.
>
> More on field layout in this recipe: [Display multiple fields in one row](doc:display-mutiple-fields-in-one-row)

16. Clear the selected cities when the country changes. Click the **Country Options Picker** and then the button beside *On change*.
17. Add the **Update Field Value** action:
    1. Select the *Form*.
    2. Set *Type* to `Reset to default value`.
    3. Select the `Cities` field from the dropdown.
    4. Save the action.

<Image align="center" src="https://files.readme.io/c3032e0b0c4a127a60f837b7c84cd00f9ab8811f5169b0719659cd7bc61a94fa-Screenshot_2025-08-15_at_10.25.09.png" />

<br />

***

## App export

*Downloads may take a few seconds.*

<HTMLBlock>{`
<!-- Add icon library -->
<link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/4.7.0/css/font-awesome.min.css">

<!-- Full width -->
<button class="btn" onclick="window.open('https://drive.google.com/uc?export=download&id=1XlnVqqCYv4JyWGhEIo_R6KLMTIYtcQeu')" style="width:100%"><i class="fa fa-download"></i> Download</button>

<style>
  /* Style buttons */
.btn {
  background-color: #3571de;
  border: none;
  color: white;
  padding: 12px 30px;
  cursor: pointer;
  font-size: 16px;
}

/* Darker background on mouse-over */
.btn:hover {
  background-color: #2e64c9;
}
</style>
`}</HTMLBlock>
