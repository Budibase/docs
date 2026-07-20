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

All of these settings support [Bindings](doc:data-in-automations). For email address settings, you can provide multiple addresses by separating them with a comma, e.g. `anna@company.com,bill@company.com`. You can also include a display name by using the format `Display Name <email@example.com>`.

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
        The to / from email addresses. Supports display names, e.g. `Budibase <hello@budibase.com>`.
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

<Image alt="Sending a calendar invite" align="center" src="https://files.readme.io/3bfe93ea6bf624e15b337299cb5fbc79c24ba4e577d70f13eff32b31ade564b4-Screenshot_2025-04-14_at_13.50.19.png">
  Sending a calendar invite
</Image>

In this screenshot above, a start and end time for the meeting was manually selected, however you can also use <Glossary>Binding</Glossary> values, by clicking the lightning bolt icon.

Both the *Location* and *URL* properties are optional, as your meeting may be in person, or online. 

The email will then be received with an **.ics** invite file attached:

<Image align="center" src="https://files.readme.io/47ad50f8eac5614b4206edbba811e13ca6f80e24b01a48607b72649e92afe6ef-Screenshot_2025-04-14_at_14.00.00.png" />

<br />

### Adding Attachments

When adding attachments to the Send Email step, you will need to provide 2 parameters - the URL and the filename. These values can come from bindings, or plain text, or a mixture of the two.

<Image align="center" src="https://files.readme.io/02aca7eb0d12509472981f7d5036c27ba15f41dea3e1c4beb5d392f0e7dbae74-Screenshot_2025-04-14_at_14.17.38.png" />

These files will be attached to the email sent. Images attached this way may be displayed with the message body, or simply denoted in the list of attachments, depending on the recipient's mail client.

Alternatively, you can switch the "Use bindings" toggle to open the bindings draw. You should return an array of objects that match this pattern: `{url: string, filename: string}`. This is useful if you have an unspecified or undetermined number of attachments that you wish to attach.

javascript JavaScript
return $("trigger.row.photos").map(photo => {
  return {url: photo.url, filename: photo.name}
})


***

## Tutorial: Emailing new inventory details to a user

This tutorial will use the *Inventory* table from the [Sample data](https://docs.budibase.com/docs/data-sources#sample-data). When a user assigns an inventory item, they will be sent an email with a summary of the item.

### Step 1 - Automation

In the **Data** section, add a new *User* column to the *Inventory* table called 'AssignedTo'  and click `Save`. 

<Image align="center" src="https://files.readme.io/09b104b757d54d7c1141b55619fe1ce7715f4dc4f81ac9b95781f4940f10f934-Screenshot_2025-04-15_at_08.52.11.png" />

Next navigate to the **Automation** section. Click `Add automation`, enter the *Name* 'Confirmation email' and select [On demand](doc:app-action) as the trigger.

Use the `Add field` button to add the following fields:

<Image align="center" src="https://files.readme.io/e458e01d0ad8ae660236c798973beebc1130d393fda7e881f1d105971ddaf685-Screenshot_2025-04-15_at_08.53.58.png" />

Click the `+` button to add the **Send Email (SMTP)** action step.

<Image align="center" src="https://files.readme.io/3bb36ca44c54014cb2e0efc63acc10001b644c6c16ae4fd44ae1ac102ab2c05d-Screenshot_2025-04-15_at_08.54.16.png" />

Set *Send To* as `{{ trigger.fields.email_address }}`, and provide a *Send From* address and *Email Subject*.

For the *HTML Contents* specify the email body text:

html HTML Contents
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


<Image align="center" src="https://files.readme.io/107aa92d9aff7cbbc774af3cd38ae9ad01b7cbf84d153e8bf42c771cfbe27a3b-Screenshot_2025-04-15_at_08.55.34.png" />

<br />

### Step 2 - Design

In the **Design** section. Add a [Table](doc:table) for the *Inventory* table, with a [filter](https://docs.budibase.com/docs/data-provider#filtering): 'AssignedTo' *Is empty*

<Image align="center" src="https://files.readme.io/a6eb41c-Screenshot_2023-09-07_at_15.57.50.png" />

Add a [Button](doc:button-button-group#adding-buttons-to-table-rows) to the table component. 

Use the setting cog to configure the buttons settings. Here you will be able to change its name and add *on click* actions. Add a [Trigger automation](https://docs.budibase.com/docs/application-actions#trigger-automations) action, selecting the automation you created in the previous step.

Set the *email\_address* and *first\_name* to the mapping bindings of the [Current user](https://docs.budibase.com/docs/users-table#current-user-bindings).

Fill out the remaining field inputs with the table row bindings, like so:

<Image align="center" src="https://files.readme.io/6438a53-Screenshot_2023-09-07_at_16.41.50.png" />

Add a [Save Row](https://docs.budibase.com/docs/data-actions#save-row) action, select the table component as the *Datasource*, and *Inventory* as the target data table.

Click `Add Column`, and set *AssignedTo* as `{{ Current User._id }}`. 

<Image align="center" src="https://files.readme.io/544dac37f27cbc18b1a5a6ef40ba0cf6b4ffd1a73a552c118c854a8dfc45d4a-Screenshot_2025-04-15_at_09.03.53.png" />

#### Example of received email

<Image align="center" src="https://files.readme.io/788321c-Screenshot_2023-09-07_at_17.06.00.png" />

Ideally you want to specify styling in the [custom automation email template](https://docs.budibase.com/docs/email#templates).
