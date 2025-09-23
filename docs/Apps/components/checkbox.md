---
title: Checkbox
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
The `checkbox` component allows you to let the user check a box, or not. 

![](https://files.readme.io/a61ec50-checkbox.png "checkbox.png")

## Adding a checkbox

The `Checkbox` component can be added a [Form](doc:forms) component or can be used as a free-standing component.

To add a `Checkbox` component to your screen, you need to click `Form > Checkbox`

[block:image]
{
  "images": [
    {
      "image": [
        "https://files.readme.io/ee8a2c6b4101dc1028e97df11dedf2c6ac3262a23d313de7d9672ceb0226e214-Screenshot_2025-08-21_at_11.06.06.png",
        null,
        ""
      ],
      "align": "center"
    }
  ]
}
[/block]


## Customising the Checkbox

To customise the checkbox, there are several settings in the <<glossary:Settings Panel>> that can be used.

| Setting              | Description                                                                                 |
| :------------------- | :------------------------------------------------------------------------------------------ |
| Default Value        | Accepts `true` or `false` as values to have it checked or unchecked respectively            |
| Text                 | The text shown to the right of the checkbox, this text is also clickable with the checkbox. |
| Size                 | The size of the text and the checkbox, there's presets from `small` to `extra large`.       |
| Disabled / Read only | When checked, the user cannot change the value                                              |

It is worth noting that the checkbox integrates closely with [boolean](doc:boolean-truefalse) types. It can be used to represent whether a column's value in a table is either true or false.

## Example Usage: Filtering

The Checkbox component can also be used as a standalone component (not wrapped in a Form) which can be useful for filter/sort functionality on Tables. 

For this example, I'm working with the Budibase Sample Data table "Employees". I've made some changes to the "End Date" of _some_ rows, suggesting that these employees are no longer employed.

In a screen, I've then added a Checkbox component, and a table component set to display the employees table. The Checkbox component has a field setting "is_employed" and a label "Current Employees Only".

![](https://files.readme.io/8b7bc5cb14e5a1dcf79f9dab7c5f362ac06ee946a1b8404191aae70fe59c42a8-image.png)

In the Table component's Conditions, add a new condition 

![](https://files.readme.io/8dd955fce4aa1cd1a5d25fcdb8b31d734fa264367c955207b7b9430b15c78931-image.png)

The Condition should read `Update Setting` >> `Filtering` TO `1 filter set` IF `{{ [New Checkbox].Value }}` `Equals` `Boolean` `True`

When setting the Filter you'll want to filter on `End Date is empty` - this assumes that an employee with an end date is no longer employed, thus making the "Current Employees Only" checkbox update the table filters to only show those records of employees still with the company.

[block:image]
{
  "images": [
    {
      "image": [
        "https://files.readme.io/db3dacb28eb20a188add98e0c0bfc9e33a82fde7c0990c12fc67a7431a4e770e-Screen_Recording_2025-08-21_at_11.16.59.gif",
        "",
        ""
      ],
      "align": "center"
    }
  ]
}
[/block]