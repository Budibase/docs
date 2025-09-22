---
title: Cascading dropdown filters
excerpt: 'Example: Filter a city picker by the chosen country of another options picker'
deprecated: false
hidden: true
metadata:
  title: ''
  description: ''
  robots: noindex
next:
  description: ''
---
## Try it out!

<HTMLBlock>{`
<iframe width="800" height="480" style="border: thick double #32a1ce; max-width: 100%;" allow="clipboard-write;camera;geolocation;fullscreen" src="https://plugins.budibase.app/embed/cascading-dropdown-filtering"></iframe>
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

<Image align="center" src="https://files.readme.io/b6ad0cf-steps1_and_2.png" />

3. `Add component`: **Data provider**
4. In the <Glossary>Settings Panel</Glossary>, set *Data* to the 'Country' table
5. Set the *Limit* to 200, and untick *Paginate*

<Image align="center" src="https://files.readme.io/56ddb0b-steps3_to_5.png" />

6. `Add component`: **Options Picker**
7. In the <Glossary>Settings Panel</Glossary>, enter 'Country' for the *Field*, and add a *Label*
8. Tick *Autocomplete*
9. Set *Options source* to 'Data provider'
10. Set *Label column* to 'country' and set *Value column* to 'country\_id'

<Image align="center" src="https://files.readme.io/2eceb77-steps6_to_10.png" />

11. `Add component`: **Relationship Picker** and select the 'Cities' from the *Field* dropdown
12. Click the button beside *Filtering*
13. `Add filter`:
    1. 'country\_id' Equals Binding `{{ Form.Fields.Country }}`
    2. Be sure to `Save`

<Image align="center" src="https://files.readme.io/6568a22-steps11_to_13.png" />

14. Click on the `Conditions` tab and click `Configure conditions`
15. `Add condition`:
    1. 'Update Setting Disabled' TO \[✓] IF `{{ Form.Fields.Country }}` 'Is empty'
    2. Be sure to `Save`

<Image align="center" src="https://files.readme.io/93b0e1b-steps14_to_15.png" />

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

<Image align="center" src="https://files.readme.io/11a78eb-steps16_and_17.png" />

## App export

[Cascading dropdown filters](https://cdn.budicloud.prod.budibase.net/app_plugins_cbbc01f239b24903890a91844c6cdbe0/attachments/7bd7b3ff-2812-4b31-9c2d-3f29f0e31ce8.gz?Expires=1691598488\&Policy=eyJTdGF0ZW1lbnQiOlt7IlJlc291cmNlIjoiaHR0cHM6Ly9jZG4uYnVkaWNsb3VkLnByb2QuYnVkaWJhc2UubmV0L2FwcF9wbHVnaW5zX2NiYmMwMWYyMzliMjQ5MDM4OTBhOTE4NDRjNmNkYmUwL2F0dGFjaG1lbnRzLzdiZDdiM2ZmLTI4MTItNGIzMS05YzJkLTNmMjlmMGUzMWNlOC5neiIsIkNvbmRpdGlvbiI6eyJEYXRlTGVzc1RoYW4iOnsiQVdTOkVwb2NoVGltZSI6MTY5MTU5ODQ4OH19fV19\&Signature=MnfkInTGVOpQcqSiXPKQEeQ6fRADR9qRzEhFlT10KLj2bT5GNTjIeYaAe-sTfBK-B4okfnELfP8kqXBXmnR--Mk~bEImyS78TbVKKlQ~ARhg6Dut-lq7zBvo-1OI4Ixkvnwvh44kvxsPkHHXzYxMlVxjqrMdyZ1SyKt5zTayP-JV5ugmU1YOoGoTr3BqkXvvpWTYH1J3We99zBVtiXsAwfUWklz~w7Onvnd9S5wCh4sopcOEa6hykHF7P14UA~dxBXsbxK3RmX3SJaDLH6JZe~r4zjveyzyZP-eHAv5r-V5AVd~qdlQreEBr9~nyWc-v07aGu-igRezNGGS5MvupTA__\&Key-Pair-Id=KL23NAZBW7UD1)
