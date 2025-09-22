---
title: Multi-step form block
excerpt: The all-in-one component for creating and managing a multi-step form
deprecated: false
hidden: false
metadata:
  title: ''
  description: ''
  robots: index
next:
  description: ''
---
When building a [Form](doc:forms) with many [Form steps](doc:form-steps) the <Glossary>Component Tree</Glossary> can get quite long and tricky to maintain. The multi-step form block aims to solve this problem by allowing you to manage your form steps within the <Glossary>Settings Panel</Glossary>.

<br />

## General settings

When you initially create a multi-step form block, it will have a single step displaying all the form fields for the chosen *Data* source. Blocks support the internal <Glossary>Budibase DB</Glossary> tables, as well as [SQL](doc:sql-datasource) tables. 

Just like a [Form block](doc:form-block) you may change the form *Type* between 'Create', 'Update', and 'View' as needed.

The selected data source and form type will be applied across all form steps in your multi-step form block.

<Image alt="General settings" align="center" src="https://files.readme.io/84c1b7c-Screenshot_2024-01-10_at_16.26.16.png">
  General settings
</Image>

<br />

## Details

The details section includes settings that will be applied on a per step basis. Initially there will be a single step, but you can click to `Add step` button to get started.

<Image alt="Add a form step" align="center" src="https://files.readme.io/dbba438-add_step.png">
  Add a form step
</Image>

Once another form step has been added, you will be able to navigate between the steps using arrow buttons. The `x` button will delete a form step, while the `+` icon will add another step immediately after the currently selected step. 

<Image alt="Navigating between form steps" align="center" src="https://files.readme.io/70e740a-step_navigation.png">
  Navigating between form steps
</Image>

#### Title and description

By default the title of each step will be tied to current step <Glossary>Binding</Glossary> like so:

```
Step {{ Multi-step Form Block.Current Step }}
```

This will conveniently label each step "Step 1", "Step 2", etc without needing manual input. With that said, you can easily replace this with your own step title.

Similarly you can add a *Description* which will appear below the step title, however this is blank by default.

<Image
  alt="Adding a description

"
  align="center"
  src="https://files.readme.io/73a95e9-description.png"
>
  Adding a description
</Image>

<Image alt="Step title with description" align="center" src="https://files.readme.io/6cfaf92-Screenshot_2024-01-10_at_16.16.46.png">
  Step title with description
</Image>

#### Fields

Form fields can be shown/hidden and further configured for each form step. For example you may want to show only 'contact information' fields in your first step, while showing only 'address details' fields in the second step.   

Read [configuring form fields](https://docs.budibase.com/docs/form-block#fields) for more information.

#### Buttons

When you add new steps in the multi-step form block, Budibase will intelligently configure the buttons you would likely want as follows:

<Table align={["left","left","left"]}>
  <thead>
    <tr>
      <th>
        First step
      </th>

      <th>
        Middle step
      </th>

      <th>
        Last step
      </th>
    </tr>
  </thead>

  <tbody>
    <tr>
      <td>
        <img src="https://files.readme.io/8885999-first.png" />
      </td>

      <td>
        <img src="https://files.readme.io/0159d5e-middle.png" />
      </td>

      <td>
        <img src="https://files.readme.io/fead5f6-last.png" />
      </td>
    </tr>
  </tbody>
</Table>

These buttons will use the [Change Form Step](https://docs.budibase.com/docs/form-actions#change-form-step) action to appropriately navigate between the different steps, and the 'Save' button will naturally save your form at the end. If you need custom actions, click on the cog icon beside a button. You may also add and remove buttons as needed.

Read [configuring form buttons](https://docs.budibase.com/docs/form-block#buttons) for more information.
