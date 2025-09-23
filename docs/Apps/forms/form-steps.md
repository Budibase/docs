---
title: Form steps
excerpt: In Budibase it is straightforward to create navigable multi-step forms.
deprecated: false
hidden: true
metadata:
  title: ''
  description: ''
  robots: index
next:
  description: ''
---
> 👍 Multi-step form block
> 
> If you're working with a single data table, the [Multi-step form block](doc:multi-step-form-block) is the quickest way to get started!

The `Form Step` component allows us to create complex form structures, by only displaying certain fields at any given time. We can nest components within Form Steps, and control whether or not they appear using the `Change Form Step` button action.

There are a few different options that can be selected within the action `Change Form Step`.

- **Next Step** - Allows the user to move to the next form step. (Majority of the time this is attached to a button on click action)
- **Previous Step** - Allows the user to move to the previous form step.
- **First Step** - When used change the form step back to 1.
- **Specific Step** - Allows the user to jump between steps e.g. can go from step 1 to step 5.

[block:image]
{
  "images": [
    {
      "image": [
        "https://files.readme.io/675ab6839b10ae3382b87c7fe128c6df6c92789ec5ad0fd2c25c6a6199d85d6d-Multistep_Forms_1.png",
        null,
        "img"
      ],
      "align": "center"
    }
  ]
}
[/block]


An example of where we might use `Form Step` components manually instead of a `Multi-Step Form Block` is creating a single form that allows us to save data to multiple tables, using distinct form steps.

## Data

Create two tables with a many-many relationship:

- Employees
- Addresses

[block:image]
{
  "images": [
    {
      "image": [
        "https://files.readme.io/3fc5b171223afa70bd5572f7772bbea1f090cfb26d0a757f80af9ab9840411fc-Multistep_Forms_2.png",
        null,
        "img"
      ],
      "align": "center"
    }
  ]
}
[/block]


[block:image]
{
  "images": [
    {
      "image": [
        "https://files.readme.io/68fe763ac2ff4b1e170047279a7848d3a267751333578f975a490b48dc2577d2-Multistep_Forms_3.png",
        null,
        "img"
      ],
      "align": "center"
    }
  ]
}
[/block]


## Building our form

We’ll start by autogenerating a Form screen for our `Employees` table. By default, this contains a single `Form Block` component.

[block:image]
{
  "images": [
    {
      "image": [
        "https://files.readme.io/56007e7af852e1f2cc55b4b73f59e1cf3f58e2ada9975c0517db3efe19001d5e-Multistep_Forms_4.png",
        null,
        "img"
      ],
      "align": "center"
    }
  ]
}
[/block]


This will form the basis of our first form step. We’ll make the following changes to our default form:

- Update the `Title` to `Add an Employee`,
- Update the `Subtitle` to `Step 1/2`,
- Disable the `Addresses` field,
- Set the `Button Position` to `Top`.

[block:image]
{
  "images": [
    {
      "image": [
        "https://files.readme.io/6396f5c687ca040833adcc8b0a589bd3048a749e252b9c936b413d26ab60c585-Multistep_Forms_5.png",
        null,
        "img"
      ],
      "align": "center"
    }
  ]
}
[/block]


We’ll then hit `Eject Block` to expose the underlying components that make up our Form Block.

<br />

[block:image]
{
  "images": [
    {
      "image": [
        "https://files.readme.io/f39e1407157bc5b5a60993c05d4cb279608e3e4221f42d2ef48c43f2f5647afa-Multistep_Forms_6.png",
        null,
        "img"
      ],
      "align": "center"
    }
  ]
}
[/block]


<br />

This gives us the following component tree.

[block:image]
{
  "images": [
    {
      "image": [
        "https://files.readme.io/f6eb83f354500ed63b263e1afcefe3e73e87017fd0f4fbf8f0723f3aad055402-Multistep_Forms_7.png",
        null,
        "img"
      ],
      "align": "center"
    }
  ]
}
[/block]


We’re going to add a `Form Step` component, and nest the outer-most `Container` within our form inside of this.

[block:image]
{
  "images": [
    {
      "image": [
        "https://files.readme.io/3925e541fc127436623d74deefe4ccbd80f2f453fc90d520c935efe89a1fe48a-Multistep_Forms_8.png",
        null,
        "img"
      ],
      "align": "center"
    }
  ]
}
[/block]


Note that `Form Step` components accept a single numerical argument, `Step`. By default, this is set to `1`.

## Adding our second step

To create our second form step, we’ll simply duplicate this existing one, making sure to rename it and update its `Step` value to `2`.

[block:image]
{
  "images": [
    {
      "image": [
        "https://files.readme.io/e66c6cce2c8010e6cf509cdeb88c1915e20922796f6e09f16c320dd9de1b1bcc-Multistep_Forms_9.png",
        null,
        "img"
      ],
      "align": "center"
    }
  ]
}
[/block]


[block:image]
{
  "images": [
    {
      "image": [
        "https://files.readme.io/a76aaa69214b4425273768ec1e97eaa19c4b57e466b00324e30b1f1794f7c2f6-Multistep_Forms_10.png",
        null,
        "img"
      ],
      "align": "center"
    }
  ]
}
[/block]


We’ll then update our subheading to read `Step 2/2`.

[block:image]
{
  "images": [
    {
      "image": [
        "https://files.readme.io/6308fbff8ceccb86324b5d378e8312ab56befbb9e0b3e1bed53553b37c144011-Multistep_Forms_11.png",
        null,
        "img"
      ],
      "align": "center"
    }
  ]
}
[/block]


Next, we’ll replace the fields in our second step to match the schema of our `Addresses` table.

[block:image]
{
  "images": [
    {
      "image": [
        "https://files.readme.io/5cd187c3e63b6b076082e776a5c876f65d8500aaa7c164fdba695431c351399f-Multistep_Forms_12.png",
        null,
        "img"
      ],
      "align": "center"
    }
  ]
}
[/block]


As this is a relatively simple table, we can easily to this by manually adding `Text Field` components. For more complex schemas, you may wish to generate and eject a new form block before replacing the entire container.

## Configuring buttons

Lastly, we need to configure our two `Buttons` to reflect our desired user experience. Specifically:

- The button in `Step 1` should increment the current form step.
- The button in `Step 2` should save the data from both steps to their respective tables.

For the `Step 1` button, we’ll start by setting the `Text` to `Next` and the `Variant` to `Primary`.

[block:image]
{
  "images": [
    {
      "image": [
        "https://files.readme.io/1241fb2f90ba56b3e5a5ef873b72208e227fe1257d78ab660accb44a8d3b9ae3-Multistep_Forms_13.png",
        null,
        "img"
      ],
      "align": "center"
    }
  ]
}
[/block]


We’ll then replace all of its existing `On Click` actions with a single `Change Form Step` action, incrementing our form step.

[block:image]
{
  "images": [
    {
      "image": [
        "https://files.readme.io/a168c87d15df2951384f03d09fd2abeb44988dbafe1fa5dd0915ed1bb8c28f0f-Multistep_Forms_14.png",
        null,
        "img"
      ],
      "align": "center"
    }
  ]
}
[/block]


Our second button is closer to its intended functionality.

Currently, this contains a sequence of actions to validate and save our form, before updating various UI elements.

[block:image]
{
  "images": [
    {
      "image": [
        "https://files.readme.io/49e84b7c8168320ca16e8601fda259e04db9e2ff1e6ca6e5e5bded96e4b7365b-Multistep_Forms_15.png",
        null,
        "img"
      ],
      "align": "center"
    }
  ]
}
[/block]


We’ll add a second `Save Row` action immediately after the existing one, choosing `Addresses` as our `Table`.

[block:image]
{
  "images": [
    {
      "image": [
        "https://files.readme.io/56f9bfbf1f1a1994057fdeedce8386f5f049e48be45d1a3324f6446bd4a53f97-Multistep_Forms_16.png",
        null,
        "img"
      ],
      "align": "center"
    }
  ]
}
[/block]


We then need to manually define the values that we’ll pass to this action for each column. We’re setting our `Employees` value using `{{ Action 2.Saved row._id }}`

[block:image]
{
  "images": [
    {
      "image": [
        "https://files.readme.io/dd0356f374c36e9bac3d57dec938008c1f55d78582f906a9471bf319b2a8873c-Multistep_Forms_17.png",
        null,
        "img"
      ],
      "align": "center"
    }
  ]
}
[/block]


We’ll then bind our remaining columns to the values in our form, in the format `{{ Form.Fields.Street }}`.

[block:image]
{
  "images": [
    {
      "image": [
        "https://files.readme.io/659799aeebd151424f5622a40fc3cdc8a80ac1a7506e28c78b354ddfd9abe6c3-Multistep_Forms_18.png",
        null,
        "img"
      ],
      "align": "center"
    }
  ]
}
[/block]


Now, when we preview our app and submit our form, related rows will be created on each of our tables.

[block:image]
{
  "images": [
    {
      "image": [
        "https://files.readme.io/6ce72db8eec3002612a3ffd5eef78bdecee117d17890531a5833277035a02007-Screenshot_2025-08-14_at_17.01.02.png",
        null,
        null
      ],
      "align": "center"
    }
  ]
}
[/block]


## Initial form step

You have the option to set the form step directly on the form component itself. This feature is especially valuable when you want to preserve the current form step using [persisted state](https://docs.budibase.com/docs/app-state#persisting-values).

[block:image]
{
  "images": [
    {
      "image": [
        "https://files.readme.io/ce96ccaf24346f308903b2dec8178c62d8a8c575ab1bda27f9cfe6253b52e26f-Screenshot_2025-08-14_at_17.02.37.png",
        null,
        null
      ],
      "align": "center"
    }
  ]
}
[/block]