---
title: Cascading dropdown filters
excerpt: 'Example: Filter a city picker by the chosen country of another options picker'
deprecated: false
hidden: false
metadata:
  title: ''
  description: ''
  robots: index
next:
  description: ''
---
## Try it out!

<HTMLBlock>{`
<iframe width="800" height="600" frameborder="0" allow="clipboard-write;camera;geolocation;fullscreen" src="https://cprem.budibase.app/embed/guide-cascading-dropdown-filtering"></iframe>
`}</HTMLBlock>

## Scenario

You have a **Country** table and a **City** table, with a relationship defined between them as *One Country -> Many Cities*.

Your form will have an [Options picker](doc:option-picker) that will allow the end-user to select a country, which will then populate a second [Relationship picker](https://docs.budibase.com/docs/pickers#relationship-picker) with the cities that relate to the chosen country.

<HTMLBlock>{`
<u><b style="font-size: 14px;">Challenge: </b></u><br />
<span style="position: relative; font-size: 24px; color: #000000;">★★☆☆☆</span>
`}</HTMLBlock>

***

## Steps

1. `Add component`: **Form**
2. In the <Glossary>Settings Panel</Glossary>, set *Schema* to 'Country'

<Image align="center" src="https://files.readme.io/638f2a6ea50a591819cfdffe681e5e438a35dd57b894ec89fea3c2e770a25d0e-Screenshot_2024-11-01_at_11.04.55.png" />

3. `Add component`: **Data provider**
4. In the <Glossary>Settings Panel</Glossary>, set *Data* to the 'Country' table
5. Set the *Limit* to 200, and untick *Paginate*

<Image align="center" src="https://files.readme.io/c139437b8d4ebeb3c15b369e3b2bec92b92b8609c3e99cbf3ab99e2d91852c58-Screenshot_2024-11-01_at_11.08.00.png" />

6. `Add component`: **Options Picker**
7. In the <Glossary>Settings Panel</Glossary>, enter 'Country' for the *Field*, and add a *Label*
8. Tick *Autocomplete*
9. Set *Options source* to 'Data provider'
10. Set *Label column* to 'country' and set *Value column* to 'country\_id'

<Image align="center" src="https://files.readme.io/570952ae5be107f8abdb0d04a692ea742b757723c9e7268f35707f3b9012237b-Screenshot_2024-11-01_at_11.12.46_1.png" />

11. `Add component`: **Relationship Picker** and select the 'Cities' from the *Field* dropdown
12. Click the button beside *Filtering*
13. `Add filter`:
    1. 'country\_id' Equals Binding `{{ Country Form.Fields.Country }}`
    2. Be sure to `Save`

<Image align="center" src="https://files.readme.io/0ce510d111826a983f645a33e00fcbf4b36422b888434f2fb937a14fb549a3fa-Screenshot_2024-11-01_at_11.17.24.png" />

14. Click on the `Conditions` tab and click `Configure conditions`
15. `Add condition`:
    1. 'Update Setting Disabled' TO \[✓] IF `{{ Country Form.Fields.Country }}` 'Is empty'
    2. Be sure to `Save`

<Image align="center" src="https://files.readme.io/a5fa58d7a38e01d8d15d2e1f9adbd809de95afded089de9ac4367d1734291231-Screenshot_2024-11-01_at_11.21.31.png" />

> 👍 Layout
>
> Use [Field group layouts](https://docs.budibase.com/docs/field-groups#layout) or [Containers](doc:container) to align the pickers as desired.
>
> More on field layout in this recipe: [Display multiple fields in one row](doc:display-mutiple-fields-in-one-row)

16. Finally we want to clear the selected cities when the country changes. Click on the **Country Options Picker**, and click the button beside the *On change* setting
17. Add the **Update Field Value** action:
    1. Select the *Form*
    2. Set *Type* to 'Reset to default value'
    3. Select the 'Cities' *Field* from the dropdown
    4. Be sure to `Save`

<Image align="center" src="https://files.readme.io/9cc5d3cdd562f501df9bb50a96c8f0f68987235e34fa1d28561fe25a68d4ff12-Screenshot_2024-11-01_at_11.24.46.png" />

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
