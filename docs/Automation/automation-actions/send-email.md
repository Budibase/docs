---
title: Send Email
excerpt: Send an email through a configured SMTP server
deprecated: false
hidden: false
metadata:
  title: ''
  description: ''
  robots: noindex
next:
  description: ''
---
Before you can use the Send Email action step, please make sure you have configured [Email](doc:email).

[block:image]
{
  "images": [
    {
      "image": [
        "https://files.readme.io/6d13e25-Screenshot_2023-09-07_at_13.55.08.png",
        "",
        "Please configure SMTP to use the Send Email action!"
      ],
      "align": "center",
      "caption": "Please configure SMTP to use the Send Email action!"
    }
  ]
}
[/block]

## Settings

All of these settings support [Bindings](doc:data-in-automations). For email address settings, you can provide multiple addresses by separating them with a comma, e.g. `anna@company.com,bill@company.com`.

[block:parameters]
{
  "data": {
    "h-0": "Setting",
    "h-1": "Description",
    "0-0": "Send To / From",
    "0-1": "The to / from email addresses",
    "1-0": "CC / BCC",
    "1-1": "The carbon copy email addresses",
    "2-0": "Email subject",
    "2-1": "The subject line",
    "3-0": "HTML Contents",
    "3-1": "The body of the email, which support HTML tags.  \nThis will also be the `{{ contents }}` binding in the [custom automation email template](https://docs.budibase.com/docs/email#templates)."
  },
  "cols": 2,
  "rows": 4,
  "align": [
    "left",
    "left"
  ]
}
[/block]

<br />

***

## Tutorial: Emailing new inventory details to a user

This tutorial will use the _Inventory_ table from the [Sample data](https://docs.budibase.com/docs/data-sources#sample-data). When a user assigns an inventory item, they will be sent an email with a summary of the item.

### Step 1 - Automation

In the **Data ** section, add a new _Text_ column to the _Inventory_ table called 'AssignedTo'  and click `Save`. 

Next navigate to the **Automation** section. Click `Add automation`, enter the _Name_ 'Confirmation email' and select [App action](doc:app-action) as the trigger.

Use the `Add field` button to add the following fields:

[block:image]
{
  "images": [
    {
      "image": [
        "https://files.readme.io/147515b-Screenshot_2023-09-07_at_16.29.38.png",
        "",
        ""
      ],
      "align": "center"
    }
  ]
}
[/block]

Click the `+` button to add the **Send Email (SMTP)** action step.

Set _Send To_ as `{{ trigger.fields.email_address }}`, and provide a _Send From_ address and _Email Subject_.

For the _HTML Contents_ specify the email body text:

```html HTML Contents
Hi {{ trigger.fields.first_name }},
<p>
The following item has been assigned to you:
<br>
<table>
  <tr>
    <th>Item Name</th><th>Notes</th><th>Status</th><th>Price</th>
  </tr>
  <tr>
    <td>{{ trigger.fields.item_name }}</td>
    <td>{{ trigger.fields.notes }}</td>
    <td>{{ trigger.fields.status }}</td>
    <td>{{ trigger.fields.price }}</td>
  </tr>
</table>
```



[block:image]
{
  "images": [
    {
      "image": [
        "https://files.readme.io/ebdf208-Screenshot_2023-09-07_at_17.09.40.png",
        "",
        ""
      ],
      "align": "center"
    }
  ]
}
[/block]

<br />

### Step 2 - Design

In the **Design** section. Add a [Data provider](doc:data-provider) for the _Inventory_ table, with a [filter](https://docs.budibase.com/docs/data-provider#filtering): 'AssignedTo' _Is empty_

[block:image]
{
  "images": [
    {
      "image": [
        "https://files.readme.io/a6eb41c-Screenshot_2023-09-07_at_15.57.50.png",
        "",
        ""
      ],
      "align": "center"
    }
  ]
}
[/block]

Nest a [Table](doc:table) component, and finally nest a [Button](doc:button). 

[block:image]
{
  "images": [
    {
      "image": [
        "https://files.readme.io/5765864-Screenshot_2023-09-07_at_16.43.15.png",
        "",
        "Table with row buttons"
      ],
      "align": "center",
      "caption": "Table with row buttons"
    }
  ]
}
[/block]

In the <<glossary:Settings Panel>>, click the button beside _On click_, and add a [Trigger automation](https://docs.budibase.com/docs/application-actions#trigger-automations) action, selecting the automation you created in the previous step.

Set the _email_address_ and _first_name_ to the mapping bindings of the [Current user](https://docs.budibase.com/docs/users-table#current-user-bindings).

Fill out the remaining field inputs with the table row bindings, like so:

[block:image]
{
  "images": [
    {
      "image": [
        "https://files.readme.io/6438a53-Screenshot_2023-09-07_at_16.41.50.png",
        "",
        ""
      ],
      "align": "center"
    }
  ]
}
[/block]

Add a [Save Row](https://docs.budibase.com/docs/data-actions#save-row) action, select the table component as the _Datasource_, and _Inventory_ as the target data table.

Click `Add Column`, and set _AssignedTo_ as `{{ Current User.email }}`. 

[block:image]
{
  "images": [
    {
      "image": [
        "https://files.readme.io/8fbba9e-Screenshot_2023-09-07_at_16.49.13.png",
        "",
        ""
      ],
      "align": "center"
    }
  ]
}
[/block]

#### Example of received email

[block:image]
{
  "images": [
    {
      "image": [
        "https://files.readme.io/788321c-Screenshot_2023-09-07_at_17.06.00.png",
        "",
        ""
      ],
      "align": "center"
    }
  ]
}
[/block]

Ideally you want to specify styling in the [custom automation email template](https://docs.budibase.com/docs/email#templates).