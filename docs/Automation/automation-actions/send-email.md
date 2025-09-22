---
title: Send Email
excerpt: Send an email through a configured SMTP server
deprecated: false
hidden: false
metadata:
  title: ''
  description: ''
  robots: index
next:
  description: ''
---
Before you can use the Send Email action step, please make sure you have configured [Email](doc:email).

<Image alt="Please configure SMTP to use the Send Email action!" align="center" src="https://files.readme.io/6d13e25-Screenshot_2023-09-07_at_13.55.08.png">
  Please configure SMTP to use the Send Email action!
</Image>

## Settings

All of these settings support [Bindings](doc:data-in-automations). For email address settings, you can provide multiple addresses by separating them with a comma, e.g. `anna@company.com,bill@company.com`.

<Table align={["left","left"]}>
  <thead>
    <tr>
      <th>
        Setting
      </th>

      <th>
        Description
      </th>
    </tr>
  </thead>

  <tbody>
    <tr>
      <td>
        Send To / From
      </td>

      <td>
        The to / from email addresses
      </td>
    </tr>

    <tr>
      <td>
        CC / BCC
      </td>

      <td>
        The carbon copy email addresses
      </td>
    </tr>

    <tr>
      <td>
        Email subject
      </td>

      <td>
        The subject line
      </td>
    </tr>

    <tr>
      <td>
        HTML Contents
      </td>

      <td>
        The body of the email, which support HTML tags.\
        This will also be the `{{ contents }}` binding in the [custom automation email template](https://docs.budibase.com/docs/email#templates).
      </td>
    </tr>
  </tbody>
</Table>

### Add calendar invite

Optionally you can attach a calendar invite to an email. Check the `Add calendar invite` box to see the additional invite settings:

<Image alt="Sending a calendar invite" align="center" src="https://files.readme.io/69896ee-Screenshot_2023-11-22_at_13.45.36.png">
  Sending a calendar invite
</Image>

In this screenshot above, a start and end time for the meeting was manually selected, however you can also use <Glossary>Binding</Glossary> values, by clicking the lightning bolt icon.

Both the *Location* and *URL* properties are optional, as your meeting may be in person, or online. 

The email will then be received with an **ics** invite file attached:

<Image align="center" src="https://files.readme.io/93c0da7-Screenshot_2023-11-22_at_13.46.49.png" />

<br />

### Adding Attachments

When adding attachments to the Send Email step, you will need to provide 2 parameters - the URL and the filename. These values can come from bindings, or plain text, or a mixture of the two.

![](https://files.readme.io/1f2a498-image.png)

These files will be attached to the email sent. Images attached this way may be displayed with the message body, or simply denoted in the list of attachments, depending on the recipient's mail client.

Alternatively, you can switch the "Use bindings" toggle to open the bindings draw. You should return an array of objects that match this pattern: `{url: string, filename: string}`. This is useful if you have an unspecified or undetermined number of attachments that you wish to attach.

```javascript JavaScript
return $("trigger.row.photos").map(photo => {
  return {url: photo.url, filename: photo.name}
})
```

***

## Tutorial: Emailing new inventory details to a user

This tutorial will use the *Inventory* table from the [Sample data](https://docs.budibase.com/docs/data-sources#sample-data). When a user assigns an inventory item, they will be sent an email with a summary of the item.

### Step 1 - Automation

In the **Data** section, add a new *Text* column to the *Inventory* table called 'AssignedTo'  and click `Save`. 

Next navigate to the **Automation** section. Click `Add automation`, enter the *Name* 'Confirmation email' and select [App action](doc:app-action) as the trigger.

Use the `Add field` button to add the following fields:

<Image align="center" src="https://files.readme.io/147515b-Screenshot_2023-09-07_at_16.29.38.png" />

Click the `+` button to add the **Send Email (SMTP)** action step.

Set *Send To* as `{{ trigger.fields.email_address }}`, and provide a *Send From* address and *Email Subject*.

For the *HTML Contents* specify the email body text:

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

<Image align="center" src="https://files.readme.io/ebdf208-Screenshot_2023-09-07_at_17.09.40.png" />

<br />

### Step 2 - Design

In the **Design** section. Add a [Data provider](doc:data-provider) for the *Inventory* table, with a [filter](https://docs.budibase.com/docs/data-provider#filtering): 'AssignedTo' *Is empty*

<Image align="center" src="https://files.readme.io/a6eb41c-Screenshot_2023-09-07_at_15.57.50.png" />

Nest a [Table](doc:table) component, and finally nest a [Button](doc:button). 

<Image alt="Table with row buttons" align="center" src="https://files.readme.io/5765864-Screenshot_2023-09-07_at_16.43.15.png">
  Table with row buttons
</Image>

In the <Glossary>Settings Panel</Glossary>, click the button beside *On click*, and add a [Trigger automation](https://docs.budibase.com/docs/application-actions#trigger-automations) action, selecting the automation you created in the previous step.

Set the *email\_address* and *first\_name* to the mapping bindings of the [Current user](https://docs.budibase.com/docs/users-table#current-user-bindings).

Fill out the remaining field inputs with the table row bindings, like so:

<Image align="center" src="https://files.readme.io/6438a53-Screenshot_2023-09-07_at_16.41.50.png" />

Add a [Save Row](https://docs.budibase.com/docs/data-actions#save-row) action, select the table component as the *Datasource*, and *Inventory* as the target data table.

Click `Add Column`, and set *AssignedTo* as `{{ Current User.email }}`. 

<Image align="center" src="https://files.readme.io/8fbba9e-Screenshot_2023-09-07_at_16.49.13.png" />

#### Example of received email

<Image align="center" src="https://files.readme.io/788321c-Screenshot_2023-09-07_at_17.06.00.png" />

Ideally you want to specify styling in the [custom automation email template](https://docs.budibase.com/docs/email#templates).
