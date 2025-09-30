---
title: History and settings
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
It is possible to see a list of automation runs for your published apps. To do so, click the automation you wish to view and the click the logs button within the automation.

<Image align="center" border={false} width="400px" src="https://files.readme.io/a32c6e59c530c5198458383cfc2976ce5a54b39bf5bb382ba84784e06cfd64d3-Screenshot_2025-09-30_at_08.27.54.png" />

<br />

This will open up a sidepanel with all successful and failed runs of an automation.

<Image align="center" border={false} src="https://files.readme.io/cedc3a9918e4179443de8bfb19d8ad708c8d4e50bf5c3cd31e794d67ce3727f1-Screenshot_2025-09-30_at_08.27.58.png" />

You can filter and order the logs by automation name, data range, and status.

There are three statuses:

* **Success**: The automation run was successful
* **Stopped**: The automation run was correctly terminated by a [Condition](doc:conditions-1)
* **Error**: The automation run failed to complete due to an error
* **Stopped - Error**: Specific to [Cron jobs](doc:cronjob). If the cron automation errors five times back-to-back, it will be disabled until you re-publish your app.

## Investigating errors

Whenever an automation run errors, you will see a red banner at the top of your app list with the automation name and the number of times it failed in parentheses.

<Image align="center" border={false} src="https://files.readme.io/f4e695e52cc6bf07fa86eded1909ef992aa661d23b61f314ff8da82ea21826e6-Screenshot_2025-03-12_at_13.36.19.png" />

There is a convenient 'View error' link which will take you to the automation history, or you can click the 'X' to dismiss the notification.

When selecting an error, you will be able to see which automation step failed as well as the error output.

Furthermore, you can click the `Edit automation` button to be taken to the automation which may need fixed.

<Callout icon="📘" theme="info">
  Automation history will only show for published apps, and you must publish your app to apply any changes to your automations.
</Callout>

## Expiration 🔒

Logs are kept for a single day on the free plan, but you can expand the duration of time that logs are kept significantly by [upgrading](https://docs.budibase.com/docs/usage).

## Chain automations

On a per app basis, it is possible to toggle the _Enable chaining_ setting on/off.

By default, this setting if **off** in cloud, and **on** in self-host.

When this setting is **on**, it allows any automation within the app that has any of the **Row** [Triggers](doc:trigger) (_Created, Updated, Deleted_) to be triggered when another automation fires a **Row** action (_Create, Update, Delete_).

Whether to have this setting on or off depends on your use-case:

* If you want to restrict your automations to only trigger upon <Glossary>End User</Glossary> table writes, then toggle **off**.
* If you want your automation row triggers to fire when an <Glossary>End User</Glossary> _OR_ an automation writes to a table, then toggle **on**.

#### Example

<Image align="center" alt="The first automation creates a new row in the Employees table" border={false} caption="The first automation creates a new row in the Employees table" src="https://files.readme.io/770ac3c2e49656c8d002c5237db3bbda9750ddadc38e7f6f70443abfb0fbc0ec-image.png" />

<Image align="center" alt="The second automation triggers when a new row is added to the Employees table" border={false} caption="The second automation triggers when a new row is added to the Employees table" src="https://files.readme.io/3f7bad603e007815edac0f9e9db1a4b5a9ddf9057efde2825d5923664f8d16bd-image.png" />

In this basic example, the first automation would only trigger the second if the _Enable chaining_ toggle was **on**.

> 📘 Additional info
>
> As it could be possible to accidentally get into an infinite loop, the maximum number of automations that can be triggered in a sequence is **five**.
>
> Also, chaining automation row events should not be confused with the [Trigger automation 🔒](doc:trigger-automation) action, which will always fire if used.
